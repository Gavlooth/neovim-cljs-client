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

(defn -main [& args])
(set! *main-cli-fn* -main)

;; lumo -D andare:0.8.0 -c src
;; (def test-objecg (clj->msgpack {:1 "a"}))
;; (js-keys test-objecg)
