goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2821__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2821 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2822__i = 0, G__2822__a = new Array(arguments.length -  0);
while (G__2822__i < G__2822__a.length) {G__2822__a[G__2822__i] = arguments[G__2822__i + 0]; ++G__2822__i;}
  args = new cljs.core.IndexedSeq(G__2822__a,0,null);
} 
return G__2821__delegate.call(this,args);};
G__2821.cljs$lang$maxFixedArity = 0;
G__2821.cljs$lang$applyTo = (function (arglist__2823){
var args = cljs.core.seq(arglist__2823);
return G__2821__delegate(args);
});
G__2821.cljs$core$IFn$_invoke$arity$variadic = G__2821__delegate;
return G__2821;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2824__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2824 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2825__i = 0, G__2825__a = new Array(arguments.length -  0);
while (G__2825__i < G__2825__a.length) {G__2825__a[G__2825__i] = arguments[G__2825__i + 0]; ++G__2825__i;}
  args = new cljs.core.IndexedSeq(G__2825__a,0,null);
} 
return G__2824__delegate.call(this,args);};
G__2824.cljs$lang$maxFixedArity = 0;
G__2824.cljs$lang$applyTo = (function (arglist__2826){
var args = cljs.core.seq(arglist__2826);
return G__2824__delegate(args);
});
G__2824.cljs$core$IFn$_invoke$arity$variadic = G__2824__delegate;
return G__2824;
})()
;

return null;
});

//# sourceURL=out/cljs/nodejs.js?rel=1512906488522
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0L2NsanMvbm9kZWpzLmpzP3JlbD0xNTEyOTA2NDg4NTIyIiwic291cmNlcyI6WyJub2RlanMuY2xqcz9yZWw9MTUxMjkwNjQ4ODUyMiJdLCJsaW5lQ291bnQiOjU2LCJtYXBwaW5ncyI6IkFBV0E7O0FBSUEsQUFBS0Esc0JBQVE7QUFDYixBQUFLQyxzQkFBUTtBQUViLHNDQUFBLHRDQUFNQztBQUFOLEFBQ0Usc0NBQUEsdENBQU1DOztBQUNOLEFBQU1DLGlDQUNKO2tDQUFPQztBQUFQLEFBQ0UsT0FBUSxBQUFPQyxrQkFBWUEsUUFBVyxBQUFDQywrQkFBV0Y7OztJQUQ3Q0E7Ozs7RUFBQUE7O21DQUFBQTs7O0lBQUFBO3lCQUFBQTs7Ozs7OztBQUVULEFBQU1HLHFDQUNKO2tDQUFPSDtBQUFQLEFBQ0UsT0FBUSxBQUFTQyxvQkFBWUEsUUFBVyxBQUFDQywrQkFBV0Y7OztJQUQvQ0E7Ozs7RUFBQUE7O21DQUFBQTs7O0lBQUFBO3lCQUFBQTs7Ozs7OztBQU5YIiwibmFtZXMiOlsiY2xqcy5ub2RlanMvcmVxdWlyZSIsImNsanMubm9kZWpzL3Byb2Nlc3MiLCJjbGpzLm5vZGVqcy9lbmFibGUtdXRpbC1wcmludCEiLCJjbGpzLmNvcmUvKnByaW50LW5ld2xpbmUqIiwiY2xqcy5jb3JlLypwcmludC1mbioiLCJhcmdzIiwianMvY29uc29sZSIsImNsanMuY29yZS9pbnRvLWFycmF5IiwiY2xqcy5jb3JlLypwcmludC1lcnItZm4qIl0sInNvdXJjZXNDb250ZW50IjpbIjsgICBDb3B5cmlnaHQgKGMpIFJpY2ggSGlja2V5LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuOyAgIFRoZSB1c2UgYW5kIGRpc3RyaWJ1dGlvbiB0ZXJtcyBmb3IgdGhpcyBzb2Z0d2FyZSBhcmUgY292ZXJlZCBieSB0aGVcbjsgICBFY2xpcHNlIFB1YmxpYyBMaWNlbnNlIDEuMCAoaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL2VjbGlwc2UtMS4wLnBocClcbjsgICB3aGljaCBjYW4gYmUgZm91bmQgaW4gdGhlIGZpbGUgZXBsLXYxMC5odG1sIGF0IHRoZSByb290IG9mIHRoaXMgZGlzdHJpYnV0aW9uLlxuOyAgIEJ5IHVzaW5nIHRoaXMgc29mdHdhcmUgaW4gYW55IGZhc2hpb24sIHlvdSBhcmUgYWdyZWVpbmcgdG8gYmUgYm91bmQgYnlcbjsgICB0aGUgdGVybXMgb2YgdGhpcyBsaWNlbnNlLlxuOyAgIFlvdSBtdXN0IG5vdCByZW1vdmUgdGhpcyBub3RpY2UsIG9yIGFueSBvdGhlciwgZnJvbSB0aGlzIHNvZnR3YXJlLlxuXG47IFByb2plY3RzIGNvbXBpbGVkIHdpdGggOnRhcmdldCA6bm9kZWpzIGNhbiAncmVxdWlyZScgdGhpcyBuYW1lc3BhY2VcbjsgdG8gZ2V0IHRoZSBub2RlanMgZ2xvYmFscyBsb2FkZWQgaW50byBjbGpzLm5vZGVqcyBhbmQgZ2V0XG47IENsb2p1cmVTY3JpcHQncyAncHJpbnQnIHNldCB1cCBjb3JyZWN0bHkuXG4obnMgY2xqcy5ub2RlanNcbiAgKDpyZWZlci1jbG9qdXJlIDpleGNsdWRlIFtyZXF1aXJlXSkpXG5cbjsgRGVmaW5lIG5hbWVzcGFjZWQgcmVmZXJlbmNlcyB0byBOb2RlJ3MgZXh0ZXJuZWQgZ2xvYmFsczpcbihkZWYgcmVxdWlyZSAoanMqIFwicmVxdWlyZVwiKSlcbihkZWYgcHJvY2VzcyAoanMqIFwicHJvY2Vzc1wiKSlcblxuKGRlZm4gZW5hYmxlLXV0aWwtcHJpbnQhIFtdXG4gIChzZXQhICpwcmludC1uZXdsaW5lKiBmYWxzZSlcbiAgKHNldCEgKnByaW50LWZuKlxuICAgIChmbiBbJiBhcmdzXVxuICAgICAgKC5hcHBseSAoLi1sb2cganMvY29uc29sZSkganMvY29uc29sZSAoaW50by1hcnJheSBhcmdzKSkpKVxuICAoc2V0ISAqcHJpbnQtZXJyLWZuKlxuICAgIChmbiBbJiBhcmdzXVxuICAgICAgKC5hcHBseSAoLi1lcnJvciBqcy9jb25zb2xlKSBqcy9jb25zb2xlIChpbnRvLWFycmF5IGFyZ3MpKSkpXG4gIG5pbClcbiJdfQ==