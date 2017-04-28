(ns neovim-cljs.core
  (:require-macros [cljs.core.async.macros :as async-macros :refer [go go-loop]])
  (:require [cljs.nodejs :as nodejs]
            [cljs.core.async :as async :refer [>! <! put! chan buffer close! timeout]]
            [shelljs]
            [msgpack-lite]))

(nodejs/enable-util-print!)

(defn clj->msgpack [the-map]
  (msgpack-lite/encode (clj->js the-map)))


(defn msgpack->clj [the-message]
  (msgpack-lite/decode  (js->clj the-message :keywordize-keys false)))

(defn -main [& args]
  (println  "Hello world"))


;; msgpack.createEncodeStream();
;;  (defn  stream-to-msg [msg-channel]
;;   (let [msg-stream (msgpack-lite/createEncodeStream)]
;;     (go-loop
;;      (when-let [msg-output (async/<! msg-channel)]
;;        (msgpack-lite/)
;;        (recur)))))

(set! *main-cli-fn* -main)

