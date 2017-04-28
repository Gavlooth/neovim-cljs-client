(ns neovim-cljs.core
  (:require-macros [cljs.core.async.macros :as async-macros :refer [go go-loop]])
  (:require [cljs.nodejs :as nodejs]
            [cljs.core.async :as async :refer [>! <! put! chan buffer close! timeout]]
            [shelljs]))

(nodejs/enable-util-print!)

(def tmp "q")

;; const cp = require('child_process');
;; const attach = require('neovim').attach;

;; const nvim_proc = cp.spawn('nvim', ['-u', 'NONE', '-N', '--embed'], {});





(defn -main [& args]
  (println q)
  (println  "Hello world"))


(set! *main-cli-fn* -main)

