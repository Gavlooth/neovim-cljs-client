(require '[lumo.build.api :as b])

(b/build "src"
         {:main 'neovim-cljs.core
          :output-to "out/main.js"
          :npm-deps {:shelljs "0.7.8"
                     :silk-msgpack-rpc "0.1.2"}
          :install-deps true ;; NEW
          :optimizations :none
          :target :nodejs})



