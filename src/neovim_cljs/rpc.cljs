(ns neovim-cljs.prc
  (:require [net]
            [goog.string :as gstr]
            [goog.object :as gobj]
            [cljs.core.async :as a]
            [shelljs]
            [msgpack-lite]
            [cljs.nodejs :as nodejs]))


(nodejs/enable-util-print!)

(defonce connection& (atom {}))

(defonce actions| (a/chan))

(defonce state& (atom  {}))

(defonce msgids& (atom 0))

(defn env
  "Returns the value of the environment variable k,
   or raises if k is missing from the environment."
  [k]
  (if-let [e  (reduce gobj/get [js/process "env" k])]
    (js->clj e)
    (throw (str "MISSING VARIABLE: " k))))



(defn nvim-connect
  ([] (-> "NVIM_LISTEN_ADDRESS" env str nvim-connect))
  ([address]
   (let [socket (net/Socket.)
         [host port] (clojure.string/split address ":")]
     (swap! connection& assoc
            :client (net/createConnection port host)
            :host host
            :port port))))

(gobj/get  (:client @connection&) "remoteAddress")



(defn mcgpack->clj [the-message]
  (msgpack-lite/decode  (js->clj the-message :keywordize-keys false)))


(defn rpc-request [the-msgid method & params]
  (msgpack/encode
   (js/Array. 0 the-msgid  method (clj->js (or params []) []))))

(defn rpc-call [handler method & args]
  (async/put! actions| (rpc-request call-id  method args)))


(defn asign-value [value]
  (let [[_ , msgid, error, result] (msgpack->clj value)]
    (swap! state& update (str msgid)  async/put! (or result {:error error}))))



(defn- stream-rpc []
  (when-not (:client @connection&)
    (nvim-connect))
  (let [tcp-client (:client @connection&)]
    (.on tcp-client "data" asign-value)

    (go-loop []
      (when-let [request (async/<! actions)]
        (let [[handler method args] request
              call-id  (swap! msgids& inc)
              result| (async/chan)]
          (swap! state& update assoc (str call-id) result|)
          (.write tcp-client (rpc-request call-id))
          (async/take! result| handler)
          (swap! state&  transform data dispatch type))
        (recur)))))




