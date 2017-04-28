(require '[lumo.build.api :as b])

(b/build "src"
         {:main 'neovim-cljs.core
          :output-to "out/main.js"
          :npm-deps {:shelljs "0.7.8"
                     :socket.io-client "2.0.4"
                     :msgpack-lite "0.1.26"} ;; NEW
          :install-deps true ;; NEW
          :optimizations :none
          :target :nodejs})
