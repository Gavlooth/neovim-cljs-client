goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2857__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2857 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2858__i = 0, G__2858__a = new Array(arguments.length -  0);
while (G__2858__i < G__2858__a.length) {G__2858__a[G__2858__i] = arguments[G__2858__i + 0]; ++G__2858__i;}
  args = new cljs.core.IndexedSeq(G__2858__a,0,null);
} 
return G__2857__delegate.call(this,args);};
G__2857.cljs$lang$maxFixedArity = 0;
G__2857.cljs$lang$applyTo = (function (arglist__2859){
var args = cljs.core.seq(arglist__2859);
return G__2857__delegate(args);
});
G__2857.cljs$core$IFn$_invoke$arity$variadic = G__2857__delegate;
return G__2857;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2860__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2860 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2861__i = 0, G__2861__a = new Array(arguments.length -  0);
while (G__2861__i < G__2861__a.length) {G__2861__a[G__2861__i] = arguments[G__2861__i + 0]; ++G__2861__i;}
  args = new cljs.core.IndexedSeq(G__2861__a,0,null);
} 
return G__2860__delegate.call(this,args);};
G__2860.cljs$lang$maxFixedArity = 0;
G__2860.cljs$lang$applyTo = (function (arglist__2862){
var args = cljs.core.seq(arglist__2862);
return G__2860__delegate(args);
});
G__2860.cljs$core$IFn$_invoke$arity$variadic = G__2860__delegate;
return G__2860;
})()
;

return null;
});
