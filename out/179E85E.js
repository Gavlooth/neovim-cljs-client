goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39__i = 0, G__39__a = new Array(arguments.length -  0);
while (G__39__i < G__39__a.length) {G__39__a[G__39__i] = arguments[G__39__i + 0]; ++G__39__i;}
  args = new cljs.core.IndexedSeq(G__39__a,0,null);
} 
return G__38__delegate.call(this,args);};
G__38.cljs$lang$maxFixedArity = 0;
G__38.cljs$lang$applyTo = (function (arglist__40){
var args = cljs.core.seq(arglist__40);
return G__38__delegate(args);
});
G__38.cljs$core$IFn$_invoke$arity$variadic = G__38__delegate;
return G__38;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42__i = 0, G__42__a = new Array(arguments.length -  0);
while (G__42__i < G__42__a.length) {G__42__a[G__42__i] = arguments[G__42__i + 0]; ++G__42__i;}
  args = new cljs.core.IndexedSeq(G__42__a,0,null);
} 
return G__41__delegate.call(this,args);};
G__41.cljs$lang$maxFixedArity = 0;
G__41.cljs$lang$applyTo = (function (arglist__43){
var args = cljs.core.seq(arglist__43);
return G__41__delegate(args);
});
G__41.cljs$core$IFn$_invoke$arity$variadic = G__41__delegate;
return G__41;
})()
;

return null;
});
