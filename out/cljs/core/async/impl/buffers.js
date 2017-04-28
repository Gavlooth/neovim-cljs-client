goog.provide('cljs.core.async.impl.buffers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.buffers.acopy = (function cljs$core$async$impl$buffers$acopy(src,src_start,dest,dest_start,len){
var cnt = (0);
while(true){
if((cnt < len)){
(dest[(dest_start + cnt)] = (src[(src_start + cnt)]));

var G__29 = (cnt + (1));
cnt = G__29;
continue;
} else {
return null;
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.async.impl.buffers.Object}
*/
cljs.core.async.impl.buffers.RingBuffer = (function (head,tail,length,arr){
this.head = head;
this.tail = tail;
this.length = length;
this.arr = arr;
});
cljs.core.async.impl.buffers.RingBuffer.prototype.pop = (function (){
var self__ = this;
var _ = this;
if((self__.length === (0))){
return null;
} else {
var x = (self__.arr[self__.tail]);
(self__.arr[self__.tail] = null);

self__.tail = ((self__.tail + (1)) % self__.arr.length);

self__.length = (self__.length - (1));

return x;
}
});

cljs.core.async.impl.buffers.RingBuffer.prototype.unshift = (function (x){
var self__ = this;
var _ = this;
(self__.arr[self__.head] = x);

self__.head = ((self__.head + (1)) % self__.arr.length);

self__.length = (self__.length + (1));

return null;
});

cljs.core.async.impl.buffers.RingBuffer.prototype.unbounded_unshift = (function (x){
var self__ = this;
var this$ = this;
if(((self__.length + (1)) === self__.arr.length)){
this$.resize();
} else {
}

return this$.unshift(x);
});

cljs.core.async.impl.buffers.RingBuffer.prototype.resize = (function (){
var self__ = this;
var _ = this;
var new_arr_size = (self__.arr.length * (2));
var new_arr = (new Array(new_arr_size));
if((self__.tail < self__.head)){
cljs.core.async.impl.buffers.acopy.call(null,self__.arr,self__.tail,new_arr,(0),self__.length);

self__.tail = (0);

self__.head = self__.length;

return self__.arr = new_arr;
} else {
if((self__.tail > self__.head)){
cljs.core.async.impl.buffers.acopy.call(null,self__.arr,self__.tail,new_arr,(0),(self__.arr.length - self__.tail));

cljs.core.async.impl.buffers.acopy.call(null,self__.arr,(0),new_arr,(self__.arr.length - self__.tail),self__.head);

self__.tail = (0);

self__.head = self__.length;

return self__.arr = new_arr;
} else {
if((self__.tail === self__.head)){
self__.tail = (0);

self__.head = (0);

return self__.arr = new_arr;
} else {
return null;
}
}
}
});

cljs.core.async.impl.buffers.RingBuffer.prototype.cleanup = (function (keep_QMARK_){
var self__ = this;
var this$ = this;
var n__23090__auto__ = self__.length;
var x = (0);
while(true){
if((x < n__23090__auto__)){
var v_30 = this$.pop();
if(keep_QMARK_.call(null,v_30)){
this$.unshift(v_30);
} else {
}

var G__31 = (x + (1));
x = G__31;
continue;
} else {
return null;
}
break;
}
});

cljs.core.async.impl.buffers.RingBuffer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"head","head",(869147608),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tail","tail",(494507963),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"length","length",(-2065447907),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"arr","arr",(2115492975),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null);
});

cljs.core.async.impl.buffers.RingBuffer.cljs$lang$type = true;

cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/RingBuffer";

cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorPrWriter = (function (this__22745__auto__,writer__22746__auto__,opt__22747__auto__){
return cljs.core._write.call(null,writer__22746__auto__,"cljs.core.async.impl.buffers/RingBuffer");
});

cljs.core.async.impl.buffers.__GT_RingBuffer = (function cljs$core$async$impl$buffers$__GT_RingBuffer(head,tail,length,arr){
return (new cljs.core.async.impl.buffers.RingBuffer(head,tail,length,arr));
});

cljs.core.async.impl.buffers.ring_buffer = (function cljs$core$async$impl$buffers$ring_buffer(n){
if((n > (0))){
} else {
throw (new Error(["Assert failed: ","Can't create a ring buffer of size 0","\n","(> n 0)"].join('')));
}

return (new cljs.core.async.impl.buffers.RingBuffer((0),(0),(0),(new Array(n))));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Buffer}
 * @implements {cljs.core.ICounted}
*/
cljs.core.async.impl.buffers.FixedBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition0$ = 2;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (self__.buf.length === self__.n);
});

cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.buf.pop();
});

cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){
var self__ = this;
var this$__$1 = this;
self__.buf.unbounded_unshift(itm);

return this$__$1;
});

cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.buf.length;
});

cljs.core.async.impl.buffers.FixedBuffer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null);
});

cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$type = true;

cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/FixedBuffer";

cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorPrWriter = (function (this__22745__auto__,writer__22746__auto__,opt__22747__auto__){
return cljs.core._write.call(null,writer__22746__auto__,"cljs.core.async.impl.buffers/FixedBuffer");
});

cljs.core.async.impl.buffers.__GT_FixedBuffer = (function cljs$core$async$impl$buffers$__GT_FixedBuffer(buf,n){
return (new cljs.core.async.impl.buffers.FixedBuffer(buf,n));
});

cljs.core.async.impl.buffers.fixed_buffer = (function cljs$core$async$impl$buffers$fixed_buffer(n){
return (new cljs.core.async.impl.buffers.FixedBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.UnblockingBuffer}
 * @implements {cljs.core.async.impl.protocols.Buffer}
 * @implements {cljs.core.ICounted}
*/
cljs.core.async.impl.buffers.DroppingBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition0$ = 2;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return false;
});

cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.buf.pop();
});

cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){
var self__ = this;
var this$__$1 = this;
if((self__.buf.length === self__.n)){
} else {
self__.buf.unshift(itm);
}

return this$__$1;
});

cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.buf.length;
});

cljs.core.async.impl.buffers.DroppingBuffer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null);
});

cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$type = true;

cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/DroppingBuffer";

cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorPrWriter = (function (this__22745__auto__,writer__22746__auto__,opt__22747__auto__){
return cljs.core._write.call(null,writer__22746__auto__,"cljs.core.async.impl.buffers/DroppingBuffer");
});

cljs.core.async.impl.buffers.__GT_DroppingBuffer = (function cljs$core$async$impl$buffers$__GT_DroppingBuffer(buf,n){
return (new cljs.core.async.impl.buffers.DroppingBuffer(buf,n));
});

cljs.core.async.impl.buffers.dropping_buffer = (function cljs$core$async$impl$buffers$dropping_buffer(n){
return (new cljs.core.async.impl.buffers.DroppingBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.UnblockingBuffer}
 * @implements {cljs.core.async.impl.protocols.Buffer}
 * @implements {cljs.core.ICounted}
*/
cljs.core.async.impl.buffers.SlidingBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition0$ = 2;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return false;
});

cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.buf.pop();
});

cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){
var self__ = this;
var this$__$1 = this;
if((self__.buf.length === self__.n)){
cljs.core.async.impl.protocols.remove_BANG_.call(null,this$__$1);
} else {
}

self__.buf.unshift(itm);

return this$__$1;
});

cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.buf.length;
});

cljs.core.async.impl.buffers.SlidingBuffer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null);
});

cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$type = true;

cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/SlidingBuffer";

cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorPrWriter = (function (this__22745__auto__,writer__22746__auto__,opt__22747__auto__){
return cljs.core._write.call(null,writer__22746__auto__,"cljs.core.async.impl.buffers/SlidingBuffer");
});

cljs.core.async.impl.buffers.__GT_SlidingBuffer = (function cljs$core$async$impl$buffers$__GT_SlidingBuffer(buf,n){
return (new cljs.core.async.impl.buffers.SlidingBuffer(buf,n));
});

cljs.core.async.impl.buffers.sliding_buffer = (function cljs$core$async$impl$buffers$sliding_buffer(n){
return (new cljs.core.async.impl.buffers.SlidingBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});
if(typeof cljs.core.async.impl.buffers.NO_VAL !== 'undefined'){
} else {
cljs.core.async.impl.buffers.NO_VAL = (new Object());
}
cljs.core.async.impl.buffers.undelivered_QMARK_ = (function cljs$core$async$impl$buffers$undelivered_QMARK_(val){
return (cljs.core.async.impl.buffers.NO_VAL === val);
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.UnblockingBuffer}
 * @implements {cljs.core.async.impl.protocols.Buffer}
 * @implements {cljs.core.ICounted}
*/
cljs.core.async.impl.buffers.PromiseBuffer = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition0$ = 2;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.buffers.PromiseBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.buffers.PromiseBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.buffers.PromiseBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

cljs.core.async.impl.buffers.PromiseBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.buffers.PromiseBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.async.impl.buffers.undelivered_QMARK_.call(null,self__.val))){
self__.val = itm;
} else {
}

return this$__$1;
});

cljs.core.async.impl.buffers.PromiseBuffer.prototype.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.core.async.impl.buffers.undelivered_QMARK_.call(null,self__.val))){
return self__.val = null;
} else {
return null;
}
});

cljs.core.async.impl.buffers.PromiseBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.core.async.impl.buffers.undelivered_QMARK_.call(null,self__.val))){
return (0);
} else {
return (1);
}
});

cljs.core.async.impl.buffers.PromiseBuffer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"val","val",(1769233139),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null);
});

cljs.core.async.impl.buffers.PromiseBuffer.cljs$lang$type = true;

cljs.core.async.impl.buffers.PromiseBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/PromiseBuffer";

cljs.core.async.impl.buffers.PromiseBuffer.cljs$lang$ctorPrWriter = (function (this__22745__auto__,writer__22746__auto__,opt__22747__auto__){
return cljs.core._write.call(null,writer__22746__auto__,"cljs.core.async.impl.buffers/PromiseBuffer");
});

cljs.core.async.impl.buffers.__GT_PromiseBuffer = (function cljs$core$async$impl$buffers$__GT_PromiseBuffer(val){
return (new cljs.core.async.impl.buffers.PromiseBuffer(val));
});

cljs.core.async.impl.buffers.promise_buffer = (function cljs$core$async$impl$buffers$promise_buffer(){
return (new cljs.core.async.impl.buffers.PromiseBuffer(cljs.core.async.impl.buffers.NO_VAL));
});

//# sourceURL=out/cljs/core/async/impl/buffers.js?rel=1512906458520
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0L2NsanMvY29yZS9hc3luYy9pbXBsL2J1ZmZlcnMuanM/cmVsPTE1MTI5MDY0NTg1MjAiLCJzb3VyY2VzIjpbImJ1ZmZlcnMuY2xqcz9yZWw9MTUxMjkwNjQ1ODUyMCJdLCJsaW5lQ291bnQiOjQ1MSwibWFwcGluZ3MiOiJBQVFBOzs7QUFNQSxxQ0FBQSxyQ0FBTUEsa0ZBQU9DLElBQUlDLFVBQVVDLEtBQUtDLFdBQVdDO0FBQTNDLEFBQ0UsVUFBQSxOQUFPQzs7QUFBUCxBQUNFLEdBQU0sQ0FBR0EsTUFBSUQ7QUFBYixBQUNFLENBQU1GLEtBQ0EsQ0FBR0MsYUFBV0UsUUFDZCxDQUFNTCxJQUFJLENBQUdDLFlBQVVJOztBQUM3QixZQUFPLE9BQUEsTkFBS0E7Ozs7QUFKZDs7Ozs7QUFNSixBQUFBOzs7Ozs7Ozs7OztBQUFBLEFBQUEsQUFBQSxBQUFBLHdEQUFBLHhEQUFTSzs7QUFBVCxBQUFBLFFBQUEsSkFFUU07QUFGUixBQUdJLEdBQVUsbUJBQUEsbEJBQU9GO0FBQWpCOztBQUFBLEFBQ0UsSUFBTUcsSUFBRSxDQUFNRixXQUFJRjtBQUFsQixBQUNFLDJCQUFBLDFCQUFNRSxXQUFJRjs7QUFDVixBQUFNQSxjQUFLLENBQVEsZUFBQSxkQUFLQSxxQkFBTSxBQUFTRTs7QUFDdkMsQUFBTUQsZ0JBQU8saUJBQUEsaEJBQUtBOztBQUNsQkc7Ozs7QUFSUixBQUFBLEFBQUEsNERBQUEsNURBQVNQLHVFQVVLTzs7QUFWZCxBQUFBLFFBQUEsSkFVWUQ7QUFWWixBQVdJLENBQU1ELFdBQUlILGVBQUtLOztBQUNmLEFBQU1MLGNBQUssQ0FBUSxlQUFBLGRBQUtBLHFCQUFNLEFBQVNHOztBQUN2QyxBQUFNRCxnQkFBTyxpQkFBQSxoQkFBS0E7O0FBYnRCOzs7QUFBQSxBQUFBLEFBQUEsc0VBQUEsdEVBQVNKLGlGQWdCa0JPOztBQWhCM0IsQUFBQSxZQUFBLFJBZ0JzQkM7QUFoQnRCLEFBaUJJLEdBQUksQ0FBSSxpQkFBQSxoQkFBS0oseUJBQVEsQUFBU0M7QUFDNUIs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Z0JJLG9CQUFJLEFBQUMyQiwwREFBYUM7QUFBbEI7O0FBQUE7Ozs7QUFoQkosQUFBQSxzREFBQSx0REFBU0M7QUFBVCxBQUFBLDBGQUFBLG9CQUFBLHlEQUFBLDJDQUFBLDREQUFBOzs7QUFBQSxBQUFBLDREQUFBLDVEQUFTQTs7QUFBVCxBQUFBLCtEQUFBLC9EQUFTQTs7QUFBVCxBQUFBLG9FQUFBLFdBQUF2QyxvQkFBQUMsc0JBQUFDLHpIQUFTcUM7QUFBVCxBQUFBLE9BQUFwQywyQkFBQUYsc0JBQUE7OztBQUFBLGtEQUFBLGxEQUFTdUMsNEdBQXlCRjtBQUFsQyxBQUFBLFlBQUFDLDJDQUFrQ0Q7OztBQUF6QkMsQUFrQlQsOENBQUEsOUNBQU1FO0FBQU4sQUFDRSxZQUFBRiwyQ0FBZ0JKIiwibmFtZXMiOlsiY2xqcy5jb3JlLmFzeW5jLmltcGwuYnVmZmVycy9hY29weSIsInNyYyIsInNyYy1zdGFydCIsImRlc3QiLCJkZXN0LXN0YXJ0IiwibGVuIiwiY250IiwidGhpc19fMjI3NDVfX2F1dG9fXyIsIndyaXRlcl9fMjI3NDZfX2F1dG9fXyIsIm9wdF9fMjI3NDdfX2F1dG9fXyIsImNsanMuY29yZS8td3JpdGUiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5idWZmZXJzL1JpbmdCdWZmZXIiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5idWZmZXJzLy0+UmluZ0J1ZmZlciIsImhlYWQiLCJ0YWlsIiwibGVuZ3RoIiwiYXJyIiwiXyIsIngiLCJ0aGlzIiwibmV3LWFyci1zaXplIiwibmV3LWFyciIsImpzL0FycmF5Iiwia2VlcD8iLCJuX18yMzA5MF9fYXV0b19fIiwidiIsImNsanMuY29yZS5hc3luYy5pbXBsLmJ1ZmZlcnMvcmluZy1idWZmZXIiLCJuIiwianMvRXJyb3IiLCJjbGpzLmNvcmUvUFJPVE9DT0xfU0VOVElORUwiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5idWZmZXJzL0ZpeGVkQnVmZmVyIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuYnVmZmVycy8tPkZpeGVkQnVmZmVyIiwiYnVmIiwiaXRtIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuYnVmZmVycy9maXhlZC1idWZmZXIiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5idWZmZXJzL0Ryb3BwaW5nQnVmZmVyIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuYnVmZmVycy8tPkRyb3BwaW5nQnVmZmVyIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuYnVmZmVycy9kcm9wcGluZy1idWZmZXIiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5idWZmZXJzL1NsaWRpbmdCdWZmZXIiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5idWZmZXJzLy0+U2xpZGluZ0J1ZmZlciIsImNsanMuY29yZS5hc3luYy5pbXBsLnByb3RvY29scy9yZW1vdmUhIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuYnVmZmVycy9zbGlkaW5nLWJ1ZmZlciIsImNsanMuY29yZS5hc3luYy5pbXBsLmJ1ZmZlcnMvTk8tVkFMIiwianMvT2JqZWN0IiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuYnVmZmVycy91bmRlbGl2ZXJlZD8iLCJ2YWwiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5idWZmZXJzL1Byb21pc2VCdWZmZXIiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5idWZmZXJzLy0+UHJvbWlzZUJ1ZmZlciIsImNsanMuY29yZS5hc3luYy5pbXBsLmJ1ZmZlcnMvcHJvbWlzZS1idWZmZXIiXSwic291cmNlc0NvbnRlbnQiOlsiOzsgICBDb3B5cmlnaHQgKGMpIFJpY2ggSGlja2V5IGFuZCBjb250cmlidXRvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG47OyAgIFRoZSB1c2UgYW5kIGRpc3RyaWJ1dGlvbiB0ZXJtcyBmb3IgdGhpcyBzb2Z0d2FyZSBhcmUgY292ZXJlZCBieSB0aGVcbjs7ICAgRWNsaXBzZSBQdWJsaWMgTGljZW5zZSAxLjAgKGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9lY2xpcHNlLTEuMC5waHApXG47OyAgIHdoaWNoIGNhbiBiZSBmb3VuZCBpbiB0aGUgZmlsZSBlcGwtdjEwLmh0bWwgYXQgdGhlIHJvb3Qgb2YgdGhpcyBkaXN0cmlidXRpb24uXG47OyAgIEJ5IHVzaW5nIHRoaXMgc29mdHdhcmUgaW4gYW55IGZhc2hpb24sIHlvdSBhcmUgYWdyZWVpbmcgdG8gYmUgYm91bmQgYnlcbjs7ICAgdGhlIHRlcm1zIG9mIHRoaXMgbGljZW5zZS5cbjs7ICAgWW91IG11c3Qgbm90IHJlbW92ZSB0aGlzIG5vdGljZSwgb3IgYW55IG90aGVyLCBmcm9tIHRoaXMgc29mdHdhcmUuXG5cbihucyBjbGpzLmNvcmUuYXN5bmMuaW1wbC5idWZmZXJzXG4gICg6cmVxdWlyZSBbY2xqcy5jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzIDphcyBpbXBsXSkpXG5cbjs7IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG47OyBETyBOT1QgVVNFLCB0aGlzIGlzIGludGVybmFsIGJ1ZmZlciByZXByZXNlbnRhdGlvblxuXG4oZGVmbiBhY29weSBbc3JjIHNyYy1zdGFydCBkZXN0IGRlc3Qtc3RhcnQgbGVuXVxuICAobG9vcCBbY250IDBdXG4gICAgKHdoZW4gKDwgY250IGxlbilcbiAgICAgIChhc2V0IGRlc3RcbiAgICAgICAgICAgICgrIGRlc3Qtc3RhcnQgY250KVxuICAgICAgICAgICAgKGFnZXQgc3JjICgrIHNyYy1zdGFydCBjbnQpKSlcbiAgICAgIChyZWN1ciAoaW5jIGNudCkpKSkpXG5cbihkZWZ0eXBlIFJpbmdCdWZmZXIgW146bXV0YWJsZSBoZWFkIF46bXV0YWJsZSB0YWlsIF46bXV0YWJsZSBsZW5ndGggXjptdXRhYmxlIGFycl1cbiAgT2JqZWN0XG4gIChwb3AgW19dXG4gICAgKHdoZW4tbm90ICh6ZXJvPyBsZW5ndGgpXG4gICAgICAobGV0IFt4IChhZ2V0IGFyciB0YWlsKV1cbiAgICAgICAgKGFzZXQgYXJyIHRhaWwgbmlsKVxuICAgICAgICAoc2V0ISB0YWlsIChqcy1tb2QgKGluYyB0YWlsKSAoYWxlbmd0aCBhcnIpKSlcbiAgICAgICAgKHNldCEgbGVuZ3RoIChkZWMgbGVuZ3RoKSlcbiAgICAgICAgeCkpKVxuXG4gICh1bnNoaWZ0IFtfIHhdXG4gICAgKGFzZXQgYXJyIGhlYWQgeClcbiAgICAoc2V0ISBoZWFkIChqcy1tb2QgKGluYyBoZWFkKSAoYWxlbmd0aCBhcnIpKSlcbiAgICAoc2V0ISBsZW5ndGggKGluYyBsZW5ndGgpKVxuICAgIG5pbClcblxuICAodW5ib3VuZGVkLXVuc2hpZnQgW3RoaXMgeF1cbiAgICAoaWYgKD09IChpbmMgbGVuZ3RoKSAoYWxlbmd0aCBhcnIpKVxuICAgICAgKC5yZXNpemUgdGhpcykpXG4gICAgKC51bnNoaWZ0IHRoaXMgeCkpXG5cbiAgOzsgRG91YmxlcyB0aGUgc2l6ZSBvZiB0aGUgYnVmZmVyIHdoaWxlIHJldGFpbmluZyBhbGwgdGhlIGV4aXN0aW5nIHZhbHVlc1xuICAocmVzaXplXG4gICAgW19dXG4gICAgKGxldCBbbmV3LWFyci1zaXplICgqIChhbGVuZ3RoIGFycikgMilcbiAgICAgICAgICBuZXctYXJyIChtYWtlLWFycmF5IG5ldy1hcnItc2l6ZSldXG4gICAgICAoY29uZFxuICAgICAgICg8IHRhaWwgaGVhZClcbiAgICAgICAoZG8gKGFjb3B5IGFyciB0YWlsIG5ldy1hcnIgMCBsZW5ndGgpXG4gICAgICAgICAgIChzZXQhIHRhaWwgMClcbiAgICAgICAgICAgKHNldCEgaGVhZCBsZW5ndGgpXG4gICAgICAgICAgIChzZXQhIGFyciBuZXctYXJyKSlcblxuICAgICAgICg+IHRhaWwgaGVhZClcbiAgICAgICAoZG8gKGFjb3B5IGFyciB0YWlsIG5ldy1hcnIgMCAoLSAoYWxlbmd0aCBhcnIpIHRhaWwpKVxuICAgICAgICAgICAoYWNvcHkgYXJyIDAgbmV3LWFyciAoLSAoYWxlbmd0aCBhcnIpIHRhaWwpIGhlYWQpXG4gICAgICAgICAgIChzZXQhIHRhaWwgMClcbiAgICAgICAgICAgKHNldCEgaGVhZCBsZW5ndGgpXG4gICAgICAgICAgIChzZXQhIGFyciBuZXctYXJyKSlcblxuICAgICAgICg9PSB0YWlsIGhlYWQpXG4gICAgICAgKGRvIChzZXQhIHRhaWwgMClcbiAgICAgICAgICAgKHNldCEgaGVhZCAwKVxuICAgICAgICAgICAoc2V0ISBhcnIgbmV3LWFycikpKSkpXG5cbiAgKGNsZWFudXAgW3RoaXMga2VlcD9dXG4gICAgKGRvdGltZXMgW3ggbGVuZ3RoXVxuICAgICAgKGxldCBbdiAoLnBvcCB0aGlzKV1cbiAgICAgICAgKHdoZW4gXmJvb2xlYW4gKGtlZXA/IHYpXG4gICAgICAgICAgKC51bnNoaWZ0IHRoaXMgdikpKSkpKVxuXG4oZGVmbiByaW5nLWJ1ZmZlciBbbl1cbiAgKGFzc2VydCAoPiBuIDApIFwiQ2FuJ3QgY3JlYXRlIGEgcmluZyBidWZmZXIgb2Ygc2l6ZSAwXCIpXG4gIChSaW5nQnVmZmVyLiAwIDAgMCAobWFrZS1hcnJheSBuKSkpXG5cbjs7IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbihkZWZ0eXBlIEZpeGVkQnVmZmVyIFtidWYgbl1cbiAgaW1wbC9CdWZmZXJcbiAgKGZ1bGw/IFt0aGlzXVxuICAgICg9PSAoLi1sZW5ndGggYnVmKSBuKSlcbiAgKHJlbW92ZSEgW3RoaXNdXG4gICAgKC5wb3AgYnVmKSlcbiAgKGFkZCEqIFt0aGlzIGl0bV1cbiAgICAoLnVuYm91bmRlZC11bnNoaWZ0IGJ1ZiBpdG0pXG4gICAgdGhpcylcbiAgKGNsb3NlLWJ1ZiEgW3RoaXNdKVxuICBjbGpzLmNvcmUvSUNvdW50ZWRcbiAgKC1jb3VudCBbdGhpc11cbiAgICAoLi1sZW5ndGggYnVmKSkpXG5cbihkZWZuIGZpeGVkLWJ1ZmZlciBbbl1cbiAgKEZpeGVkQnVmZmVyLiAocmluZy1idWZmZXIgbikgbikpXG5cbihkZWZ0eXBlIERyb3BwaW5nQnVmZmVyIFtidWYgbl1cbiAgaW1wbC9VbmJsb2NraW5nQnVmZmVyXG4gIGltcGwvQnVmZmVyXG4gIChmdWxsPyBbdGhpc11cbiAgICBmYWxzZSlcbiAgKHJlbW92ZSEgW3RoaXNdXG4gICAgKC5wb3AgYnVmKSlcbiAgKGFkZCEqIFt0aGlzIGl0bV1cbiAgICAod2hlbi1ub3QgKD09ICguLWxlbmd0aCBidWYpIG4pXG4gICAgICAoLnVuc2hpZnQgYnVmIGl0bSkpXG4gICAgdGhpcylcbiAgKGNsb3NlLWJ1ZiEgW3RoaXNdKVxuICBjbGpzLmNvcmUvSUNvdW50ZWRcbiAgKC1jb3VudCBbdGhpc11cbiAgICAoLi1sZW5ndGggYnVmKSkpXG5cbihkZWZuIGRyb3BwaW5nLWJ1ZmZlciBbbl1cbiAgKERyb3BwaW5nQnVmZmVyLiAocmluZy1idWZmZXIgbikgbikpXG5cbihkZWZ0eXBlIFNsaWRpbmdCdWZmZXIgW2J1ZiBuXVxuICBpbXBsL1VuYmxvY2tpbmdCdWZmZXJcbiAgaW1wbC9CdWZmZXJcbiAgKGZ1bGw/IFt0aGlzXVxuICAgIGZhbHNlKVxuICAocmVtb3ZlISBbdGhpc11cbiAgICAoLnBvcCBidWYpKVxuICAoYWRkISogW3RoaXMgaXRtXVxuICAgICh3aGVuICg9PSAoLi1sZW5ndGggYnVmKSBuKVxuICAgICAgKGltcGwvcmVtb3ZlISB0aGlzKSlcbiAgICAoLnVuc2hpZnQgYnVmIGl0bSlcbiAgICB0aGlzKVxuICAoY2xvc2UtYnVmISBbdGhpc10pXG4gIGNsanMuY29yZS9JQ291bnRlZFxuICAoLWNvdW50IFt0aGlzXVxuICAgICguLWxlbmd0aCBidWYpKSlcblxuKGRlZm4gc2xpZGluZy1idWZmZXIgW25dXG4gIChTbGlkaW5nQnVmZmVyLiAocmluZy1idWZmZXIgbikgbikpXG5cbihkZWZvbmNlIF46cHJpdmF0ZSBOTy1WQUwgKGpzL09iamVjdC4pKVxuKGRlZm4tIHVuZGVsaXZlcmVkPyBbdmFsXVxuICAoaWRlbnRpY2FsPyBOTy1WQUwgdmFsKSlcblxuKGRlZnR5cGUgUHJvbWlzZUJ1ZmZlciBbXjptdXRhYmxlIHZhbF1cbiAgaW1wbC9VbmJsb2NraW5nQnVmZmVyXG4gIGltcGwvQnVmZmVyXG4gIChmdWxsPyBbX11cbiAgICBmYWxzZSlcbiAgKHJlbW92ZSEgW19dXG4gICAgdmFsKVxuICAoYWRkISogW3RoaXMgaXRtXVxuICAgICh3aGVuICh1bmRlbGl2ZXJlZD8gdmFsKVxuICAgICAgKHNldCEgdmFsIGl0bSkpXG4gICAgdGhpcylcbiAgKGNsb3NlLWJ1ZiEgW19dXG4gICAgKHdoZW4gKHVuZGVsaXZlcmVkPyB2YWwpXG4gICAgICAoc2V0ISB2YWwgbmlsKSkpXG4gIGNsanMuY29yZS9JQ291bnRlZFxuICAoLWNvdW50IFtfXVxuICAgIChpZiAodW5kZWxpdmVyZWQ/IHZhbCkgMCAxKSkpXG5cbihkZWZuIHByb21pc2UtYnVmZmVyIFtdXG4gIChQcm9taXNlQnVmZmVyLiBOTy1WQUwpKVxuIl19