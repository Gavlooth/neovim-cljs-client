(ns neovim-cljs.core
  (:require-macros [cljs.core.async.macros :as async-macros :refer [go go-loop]])
  (:require [neovim-cljs.rpc :as rpc]
            [cljs.nodejs :as nodejs]
            [cljs.core.async :as async :refer [>! <! put! chan buffer close! timeout]]
            [shelljs]))

(nodejs/enable-util-print!)


(defn -main [& args])
(set! *main-cli-fn* -main)

