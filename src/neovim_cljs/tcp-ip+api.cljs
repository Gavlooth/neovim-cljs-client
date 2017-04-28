(ns neovim-cljs.tcp-ip+api
  (:require [socket.io-client :as sc]
            [cljs.nodejs :as nodejs]))


(def neovim-api
  ["nvim_buf_line_count"
   "buffer_get_line" "buffer_set_line"
   "buffer_del_line" "buffer_get_line_slice"
   "nvim_buf_get_lines" "buffer_set_line_slice"
   "nvim_buf_set_lines" "nvim_buf_get_var"
   "nvim_buf_get_changedtick" "nvim_buf_get_keymap"
   "nvim_buf_set_var" "nvim_buf_del_var"
   "buffer_set_var" "buffer_del_var"
   "nvim_buf_get_option" "nvim_buf_set_option"
   "nvim_buf_get_number" "nvim_buf_get_name"
   "nvim_buf_set_name" "nvim_buf_is_valid"
   "buffer_insert" "nvim_buf_get_mark"
   "nvim_buf_add_highlight" "nvim_buf_clear_highlight"
   "nvim_tabpage_list_wins" "nvim_tabpage_get_var"
   "nvim_tabpage_set_var" "nvim_tabpage_del_var"
   "tabpage_set_var" "tabpage_del_var"
   "nvim_tabpage_get_win" "nvim_tabpage_get_number"
   "nvim_tabpage_is_valid" "nvim_ui_attach"
   "ui_attach" "nvim_ui_detach" "nvim_ui_try_resize"
   "nvim_ui_set_option" "nvim_command"
   "nvim_get_hl_by_name" "nvim_get_hl_by_id"
   "nvim_feedkeys" "nvim_input"
   "nvim_replace_termcodes" "nvim_command_output"
   "nvim_eval" "nvim_call_function" "nvim_execute_lua"
   "nvim_strwidth" "nvim_list_runtime_paths"
   "nvim_set_current_dir" "nvim_get_current_line"
   "nvim_set_current_line" "nvim_del_current_line"
   "nvim_get_var" "nvim_set_var" "nvim_del_var"
   "vim_set_var" "vim_del_var" "nvim_get_vvar"
   "nvim_get_option" "nvim_set_option"
   "nvim_out_write" "nvim_err_write"
   "nvim_err_writeln" "nvim_list_bufs"
   "nvim_get_current_buf" "nvim_set_current_buf"
   "nvim_list_wins" "nvim_get_current_win"
   "nvim_set_current_win" "nvim_list_tabpages"
   "nvim_get_current_tabpage"
   "nvim_set_current_tabpage" "nvim_subscribe"
   "nvim_unsubscribe" "nvim_get_color_by_name"
   "nvim_get_color_map" "nvim_get_mode"
   "nvim_get_keymap" "nvim_get_api_info"
   "nvim_call_atomic" "nvim_win_get_buf"
   "nvim_win_get_cursor" "nvim_win_set_cursor"
   "nvim_win_get_height" "nvim_win_set_height"
   "nvim_win_get_width" "nvim_win_set_width"
   "nvim_win_get_var" "nvim_win_set_var"
   "nvim_win_del_var" "window_set_var"
   "window_del_var" "nvim_win_get_option"
   "nvim_win_set_option" "nvim_win_get_position"
   "nvim_win_get_tabpage" "nvim_win_get_number"
   "nvim_win_is_valid" "buffer_line_count"
   "buffer_get_lines" "buffer_set_lines"
   "buffer_get_var" "buffer_get_option"
   "buffer_set_option" "buffer_get_number"
   "buffer_get_name" "buffer_set_name"
   "buffer_is_valid" "buffer_get_mark"
   "buffer_add_highlight" "buffer_clear_highlight"
   "tabpage_get_windows" "tabpage_get_var"
   "tabpage_get_window" "tabpage_is_valid" "ui_detach"
   "ui_try_resize" "vim_command" "vim_feedkeys"
   "vim_input" "vim_replace_termcodes"
   "vim_command_output" "vim_eval" "vim_call_function"
   "vim_strwidth" "vim_list_runtime_paths"
   "vim_change_directory" "vim_get_current_line"
   "vim_set_current_line" "vim_del_current_line"
   "vim_get_var" "vim_get_vvar" "vim_get_option"
   "vim_set_option" "vim_out_write" "vim_err_write"
   "vim_report_error" "vim_get_buffers"
   "vim_get_current_buffer" "vim_set_current_buffer"
   "vim_get_windows" "vim_get_current_window"
   "vim_set_current_window" "vim_get_tabpages"
   "vim_get_current_tabpage" "vim_set_current_tabpage"
   "vim_subscribe" "vim_unsubscribe"
   "vim_name_to_color" "vim_get_color_map"
   "vim_get_api_info" "window_get_buffer"
   "window_get_cursor" "window_set_cursor"
   "window_get_height" "window_set_height"
   "window_get_width" "window_set_width"
   "window_get_var" "window_get_option"
   "window_set_option" "window_get_position"
   "window_get_tabpage" "window_is_valid"])


(defonce connection (atom nil))

(defn env
  "Returns the value of the environment variable k,
   or raises if k is missing from the environment."
  [k]
  (let [e (js->clj (.env nodejs/process))]
    (or (get e k) (throw (str "missing key " k)))))


(defn nvim-connect
  ([] (-> "NVIM_LISTEN_ADDRESS" env str nvim-connent))
  ([address] (sc/io address)))


(defmulti serve-nvim
  (fn [action _] action))

(defmethod serve-nvim :connect [_ {:keys addr}]
  (let [io (if addr (nvim-connect addr) (nvim-connect))]
    (.on  io "disconnect" (.open io))
    (reset! connection  io)))

(defmethod serve-nvim :send [_ {:keys [act args]}]

  (.send  @connection #(apply (comp  act clj->js) args)))

(defmethod serve-nvim :emmit-event [_ {:keys  event act args}]
  (.emmit  @connection #(apply (comp  act clj->js)  args)))

(defmethod serve-nvim :register-event [_  {:keys  event act args}]
  (.on  @connection "event" (comp act clj->js)))



