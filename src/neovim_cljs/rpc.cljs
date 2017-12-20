(ns neovim-cljs.rpc
  (:require-macros [cljs.core.async.macros :as async-macros :refer [go go-loop]])
  (:require [net]
            [cljs.core.async :as async :refer [>! <! put! chan buffer close! timeout]]
            [goog.string :as gstr]
            [goog.object :as gobj]
            [shelljs]
            [msgpack-lite]
            [cljs.nodejs :as nodejs]))



(nodejs/enable-util-print!)

(defonce connection& (atom {}))

(defonce actions| (chan))

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


(defn msgpack->clj [the-message]
  (js->clj (msgpack-lite/decode the-message) :keywordize-keys false))


(defn rpc-request [msgid method params]
  (msgpack-lite/encode
   (js/Array. 0 msgid  method (clj->js (or params [])))))


(defn rpc-call [method handler  & params]
  (let [nvim-method (gstr/replaceAll  (name method) "-" "_")]
    (println nvim-method)
    (println "-----")
    (async/put! actions| [handler nvim-method params])))


(defn asign-value [value]
  (let [[_ , msgid, error, result] (msgpack->clj value)]
    (swap! state& update (str msgid)  put! (or result {:error error}))))


(defn- start-rpc-stream [tcp-client]
  (go-loop []
    (when-let [request (<! actions|)]
      (let [[handler method & args] request
            msgid (swap! msgids& inc)
            result| (chan)]
        (swap! state& update assoc (str msgid) result|)

        (.write tcp-client (rpc-request msgid method args))
        (println "--")
        (println "here")
        (println "--")
        (async/take! result| handler))
      (recur))))

(defn initialize []
  (let  [tcp-client  (:client (nvim-connect))]
    (try
      (start-rpc-stream tcp-client)
      (.on tcp-client "data" asign-value)
      (catch js/Object e (str "Error: " e)))))

;; lumo -D andare:0.8.0 -c src
;;(require  '[neovim-cljs.rpc :as rpc] )
;;expmplae call
;; (rpc-call :nvim-buf-line-count   #(println %) )
