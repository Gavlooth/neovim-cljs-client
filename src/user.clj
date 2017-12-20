(ns user
  (:require
   [cljs.nodejs :as nodejs]
   [neovim-cljs.rpc :as rpc]))

(nodejs/enable-util-print!)

(rpc/initialize)


(defn -main [& args])
(set! *main-cli-fn* -main)
