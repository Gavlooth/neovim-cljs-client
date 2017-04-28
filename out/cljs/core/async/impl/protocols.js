goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = (1024);

/**
 * @interface
 */
cljs.core.async.impl.protocols.ReadPort = function(){};

/**
 * derefable val if taken, nil if take was enqueued
 */
cljs.core.async.impl.protocols.take_BANG_ = (function cljs$core$async$impl$protocols$take_BANG_(port,fn1_handler){
if((!((port == null))) && (!((port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 == null)))){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else {
var x__22799__auto__ = (((port == null))?null:port);
var m__22800__auto__ = (cljs.core.async.impl.protocols.take_BANG_[goog.typeOf(x__22799__auto__)]);
if(!((m__22800__auto__ == null))){
return m__22800__auto__.call(null,port,fn1_handler);
} else {
var m__22800__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);
if(!((m__22800__auto____$1 == null))){
return m__22800__auto____$1.call(null,port,fn1_handler);
} else {
throw cljs.core.missing_protocol.call(null,"ReadPort.take!",port);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.WritePort = function(){};

/**
 * derefable boolean (false if already closed) if handled, nil if put was enqueued.
 *                             Must throw on nil val.
 */
cljs.core.async.impl.protocols.put_BANG_ = (function cljs$core$async$impl$protocols$put_BANG_(port,val,fn1_handler){
if((!((port == null))) && (!((port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 == null)))){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else {
var x__22799__auto__ = (((port == null))?null:port);
var m__22800__auto__ = (cljs.core.async.impl.protocols.put_BANG_[goog.typeOf(x__22799__auto__)]);
if(!((m__22800__auto__ == null))){
return m__22800__auto__.call(null,port,val,fn1_handler);
} else {
var m__22800__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);
if(!((m__22800__auto____$1 == null))){
return m__22800__auto____$1.call(null,port,val,fn1_handler);
} else {
throw cljs.core.missing_protocol.call(null,"WritePort.put!",port);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.Channel = function(){};

cljs.core.async.impl.protocols.close_BANG_ = (function cljs$core$async$impl$protocols$close_BANG_(chan){
if((!((chan == null))) && (!((chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 == null)))){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else {
var x__22799__auto__ = (((chan == null))?null:chan);
var m__22800__auto__ = (cljs.core.async.impl.protocols.close_BANG_[goog.typeOf(x__22799__auto__)]);
if(!((m__22800__auto__ == null))){
return m__22800__auto__.call(null,chan);
} else {
var m__22800__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);
if(!((m__22800__auto____$1 == null))){
return m__22800__auto____$1.call(null,chan);
} else {
throw cljs.core.missing_protocol.call(null,"Channel.close!",chan);
}
}
}
});

cljs.core.async.impl.protocols.closed_QMARK_ = (function cljs$core$async$impl$protocols$closed_QMARK_(chan){
if((!((chan == null))) && (!((chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 == null)))){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else {
var x__22799__auto__ = (((chan == null))?null:chan);
var m__22800__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[goog.typeOf(x__22799__auto__)]);
if(!((m__22800__auto__ == null))){
return m__22800__auto__.call(null,chan);
} else {
var m__22800__auto____$1 = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);
if(!((m__22800__auto____$1 == null))){
return m__22800__auto____$1.call(null,chan);
} else {
throw cljs.core.missing_protocol.call(null,"Channel.closed?",chan);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.Handler = function(){};

/**
 * returns true if has callback. Must work w/o lock
 */
cljs.core.async.impl.protocols.active_QMARK_ = (function cljs$core$async$impl$protocols$active_QMARK_(h){
if((!((h == null))) && (!((h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 == null)))){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else {
var x__22799__auto__ = (((h == null))?null:h);
var m__22800__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[goog.typeOf(x__22799__auto__)]);
if(!((m__22800__auto__ == null))){
return m__22800__auto__.call(null,h);
} else {
var m__22800__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);
if(!((m__22800__auto____$1 == null))){
return m__22800__auto____$1.call(null,h);
} else {
throw cljs.core.missing_protocol.call(null,"Handler.active?",h);
}
}
}
});

/**
 * returns true if this handler may be blocked, otherwise it must not block
 */
cljs.core.async.impl.protocols.blockable_QMARK_ = (function cljs$core$async$impl$protocols$blockable_QMARK_(h){
if((!((h == null))) && (!((h.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 == null)))){
return h.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(h);
} else {
var x__22799__auto__ = (((h == null))?null:h);
var m__22800__auto__ = (cljs.core.async.impl.protocols.blockable_QMARK_[goog.typeOf(x__22799__auto__)]);
if(!((m__22800__auto__ == null))){
return m__22800__auto__.call(null,h);
} else {
var m__22800__auto____$1 = (cljs.core.async.impl.protocols.blockable_QMARK_["_"]);
if(!((m__22800__auto____$1 == null))){
return m__22800__auto____$1.call(null,h);
} else {
throw cljs.core.missing_protocol.call(null,"Handler.blockable?",h);
}
}
}
});

/**
 * commit to fulfilling its end of the transfer, returns cb. Must be called within lock
 */
cljs.core.async.impl.protocols.commit = (function cljs$core$async$impl$protocols$commit(h){
if((!((h == null))) && (!((h.cljs$core$async$impl$protocols$Handler$commit$arity$1 == null)))){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else {
var x__22799__auto__ = (((h == null))?null:h);
var m__22800__auto__ = (cljs.core.async.impl.protocols.commit[goog.typeOf(x__22799__auto__)]);
if(!((m__22800__auto__ == null))){
return m__22800__auto__.call(null,h);
} else {
var m__22800__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);
if(!((m__22800__auto____$1 == null))){
return m__22800__auto____$1.call(null,h);
} else {
throw cljs.core.missing_protocol.call(null,"Handler.commit",h);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.Buffer = function(){};

/**
 * returns true if buffer cannot accept put
 */
cljs.core.async.impl.protocols.full_QMARK_ = (function cljs$core$async$impl$protocols$full_QMARK_(b){
if((!((b == null))) && (!((b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 == null)))){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else {
var x__22799__auto__ = (((b == null))?null:b);
var m__22800__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[goog.typeOf(x__22799__auto__)]);
if(!((m__22800__auto__ == null))){
return m__22800__auto__.call(null,b);
} else {
var m__22800__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);
if(!((m__22800__auto____$1 == null))){
return m__22800__auto____$1.call(null,b);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.full?",b);
}
}
}
});

/**
 * remove and return next item from buffer, called under chan mutex
 */
cljs.core.async.impl.protocols.remove_BANG_ = (function cljs$core$async$impl$protocols$remove_BANG_(b){
if((!((b == null))) && (!((b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 == null)))){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else {
var x__22799__auto__ = (((b == null))?null:b);
var m__22800__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[goog.typeOf(x__22799__auto__)]);
if(!((m__22800__auto__ == null))){
return m__22800__auto__.call(null,b);
} else {
var m__22800__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);
if(!((m__22800__auto____$1 == null))){
return m__22800__auto____$1.call(null,b);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.remove!",b);
}
}
}
});

/**
 * if room, add item to the buffer, returns b, called under chan mutex
 */
cljs.core.async.impl.protocols.add_BANG__STAR_ = (function cljs$core$async$impl$protocols$add_BANG__STAR_(b,itm){
if((!((b == null))) && (!((b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 == null)))){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2(b,itm);
} else {
var x__22799__auto__ = (((b == null))?null:b);
var m__22800__auto__ = (cljs.core.async.impl.protocols.add_BANG__STAR_[goog.typeOf(x__22799__auto__)]);
if(!((m__22800__auto__ == null))){
return m__22800__auto__.call(null,b,itm);
} else {
var m__22800__auto____$1 = (cljs.core.async.impl.protocols.add_BANG__STAR_["_"]);
if(!((m__22800__auto____$1 == null))){
return m__22800__auto____$1.call(null,b,itm);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.add!*",b);
}
}
}
});

/**
 * called on chan closed under chan mutex, return ignored
 */
cljs.core.async.impl.protocols.close_buf_BANG_ = (function cljs$core$async$impl$protocols$close_buf_BANG_(b){
if((!((b == null))) && (!((b.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1 == null)))){
return b.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(b);
} else {
var x__22799__auto__ = (((b == null))?null:b);
var m__22800__auto__ = (cljs.core.async.impl.protocols.close_buf_BANG_[goog.typeOf(x__22799__auto__)]);
if(!((m__22800__auto__ == null))){
return m__22800__auto__.call(null,b);
} else {
var m__22800__auto____$1 = (cljs.core.async.impl.protocols.close_buf_BANG_["_"]);
if(!((m__22800__auto____$1 == null))){
return m__22800__auto____$1.call(null,b);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.close-buf!",b);
}
}
}
});

cljs.core.async.impl.protocols.add_BANG_ = (function cljs$core$async$impl$protocols$add_BANG_(var_args){
var G__25 = arguments.length;
switch (G__25) {
case (1):
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (b){
return b;
});

cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (b,itm){
if(!((itm == null))){
} else {
throw (new Error("Assert failed: (not (nil? itm))"));
}

return cljs.core.async.impl.protocols.add_BANG__STAR_.call(null,b,itm);
});

cljs.core.async.impl.protocols.add_BANG_.cljs$lang$maxFixedArity = (2);


/**
 * @interface
 */
cljs.core.async.impl.protocols.UnblockingBuffer = function(){};


//# sourceURL=out/cljs/core/async/impl/protocols.js?rel=1512906457994
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0L2NsanMvY29yZS9hc3luYy9pbXBsL3Byb3RvY29scy5qcz9yZWw9MTUxMjkwNjQ1Nzk5NCIsInNvdXJjZXMiOlsicHJvdG9jb2xzLmNsanM/cmVsPTE1MTI5MDY0NTc5OTQiXSwibGluZUNvdW50IjozMTEsIm1hcHBpbmdzIjoiQUFRQTs7QUFFQSxnREFBQSxoREFBYUE7QUFFYixBQUFBO0FBQUE7OzswQ0FBQSwxQ0FBYU07O0FBQWI7Ozs0Q0FBQSw1Q0FDR0MsZ0dBQU9DLEtBQUtDO0FBRGYsQUFBQSxHQUFBLENBQUEsRUFBQSxTQUFBLFlBQUEsRUFBQSxDQUFBLG1FQUFBLDFGQUNVRCx1QkFBQUE7QUFEVixPQUNVQSxnRUFBQUEsS0FBS0M7O0FBRGYsSUFBQVIsbUJBQUEsRUFBQSxTQUFBLE9BQUEsZkFDVU8sb0JBQUFBO0lBRFZOLG1CQUFBLENBQUFDLDBDQUFBLEFBQUFDLFlBQUFIO0FBQUEsQUFBQSxHQUFBLEVBQUEsQ0FBQUMsb0JBQUE7QUFBQSxPQUFBQSwyQkFDVU0sS0FBS0M7O0FBRGYsSUFBQVAsdUJBQUEsQ0FBQUMsMENBQUE7QUFBQSxBQUFBLEdBQUEsRUFBQSxDQUFBRCx3QkFBQTtBQUFBLE9BQUFBLCtCQUNVTSxLQUFLQzs7QUFEZixNQUFBLEFBQUFKLHFDQUFBLGlCQUNVRzs7Ozs7O0FBRFYsQUFHQSxBQUFBO0FBQUE7OzsyQ0FBQSwzQ0FBYUc7O0FBQWI7Ozs7MkNBQUEsM0NBQ0dDLDhGQUFNSixLQUFLSyxJQUFJSjtBQURsQixBQUFBLEdBQUEsQ0FBQSxFQUFBLFNBQUEsWUFBQSxFQUFBLENBQUEsbUVBQUEsMUZBQ1NELHVCQUFBQTtBQURULE9BQ1NBLGdFQUFBQSxLQUFLSyxJQUFJSjs7QUFEbEIsSUFBQVIsbUJBQUEsRUFBQSxTQUFBLE9BQUEsZkFDU08sb0JBQUFBO0lBRFROLG1CQUFBLENBQUFRLHlDQUFBLEFBQUFOLFlBQUFIO0FBQUEsQUFBQSxHQUFBLEVBQUEsQ0FBQUMsb0JBQUE7QUFBQSxPQUFBQSwyQkFDU00sS0FBS0ss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QUFNRTtBQUFOLEFBQUEsSUFBQUQsUUFBQSxBQUFBO0FBQUEsQUFBQSxRQUFBQTtLQUFBO0FBQUEsT0FBQUMsdUVBQUEsQ0FBQSxVQUFBOzs7S0FBQTtBQUFBLE9BQUFBLHVFQUFBLENBQUEsVUFBQSxNQUFBLENBQUEsVUFBQTs7OztBQUFBLE1BQUEsS0FBQUMsTUFBQSxDQUFBLDhEQUFBLEFBQUE7Ozs7O0FBQUEsQUFBQSx5RUFBQSx6RUFBTUQsb0ZBQ0ZQO0FBREosQUFDT0E7OztBQURQLEFBQUEseUVBQUEsekVBQU1PLG9GQUVGUCxFQUFFRztBQUZOLEFBR0ssR0FBUSxFQUFLLFFBQUEsUEFBTUE7QUFBbkI7QUFBQSxBQUFBLE1BQUEsS0FBQUssTUFBQTs7O0FBQ0EsT0FBQ04seURBQU1GLEVBQUVHOzs7QUFKZCxBQUFBLG1FQUFBLG5FQUFNSTs7QUFBTixBQU9BLEFBQUE7QUFBQTs7O2tEQUFBLGxEQUFhRTs7QUFBYiIsIm5hbWVzIjpbImNsanMuY29yZS5hc3luYy5pbXBsLnByb3RvY29scy9NQVgtUVVFVUUtU0laRSIsInhfXzIyNzk5X19hdXRvX18iLCJtX18yMjgwMF9fYXV0b19fIiwiY2xqcy9jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzLnRha2UhIiwiZ29vZy90eXBlT2YiLCJjbGpzLmNvcmUvbWlzc2luZy1wcm90b2NvbCIsImNsanMuY29yZS5hc3luYy5pbXBsLnByb3RvY29scy9SZWFkUG9ydCIsImNsanMuY29yZS5hc3luYy5pbXBsLnByb3RvY29scy90YWtlISIsInBvcnQiLCJmbjEtaGFuZGxlciIsImNsanMvY29yZS5hc3luYy5pbXBsLnByb3RvY29scy5wdXQhIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzL1dyaXRlUG9ydCIsImNsanMuY29yZS5hc3luYy5pbXBsLnByb3RvY29scy9wdXQhIiwidmFsIiwiY2xqcy9jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzLmNsb3NlISIsImNsanMvY29yZS5hc3luYy5pbXBsLnByb3RvY29scy5jbG9zZWQ/IiwiY2xqcy5jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzL0NoYW5uZWwiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5wcm90b2NvbHMvY2xvc2UhIiwiY2hhbiIsImNsanMuY29yZS5hc3luYy5pbXBsLnByb3RvY29scy9jbG9zZWQ/IiwiY2xqcy9jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzLmFjdGl2ZT8iLCJjbGpzL2NvcmUuYXN5bmMuaW1wbC5wcm90b2NvbHMuYmxvY2thYmxlPyIsImNsanMvY29yZS5hc3luYy5pbXBsLnByb3RvY29scy5jb21taXQiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5wcm90b2NvbHMvSGFuZGxlciIsImNsanMuY29yZS5hc3luYy5pbXBsLnByb3RvY29scy9hY3RpdmU/IiwiaCIsImNsanMuY29yZS5hc3luYy5pbXBsLnByb3RvY29scy9ibG9ja2FibGU/IiwiY2xqcy5jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzL2NvbW1pdCIsImNsanMvY29yZS5hc3luYy5pbXBsLnByb3RvY29scy5mdWxsPyIsImNsanMvY29yZS5hc3luYy5pbXBsLnByb3RvY29scy5yZW1vdmUhIiwiY2xqcy9jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzLmFkZCEqIiwiY2xqcy9jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzLmNsb3NlLWJ1ZiEiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5wcm90b2NvbHMvQnVmZmVyIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzL2Z1bGw/IiwiYiIsImNsanMuY29yZS5hc3luYy5pbXBsLnByb3RvY29scy9yZW1vdmUhIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzL2FkZCEqIiwiaXRtIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzL2Nsb3NlLWJ1ZiEiLCJ2YXJfYXJncyIsIkdfXzI1IiwiY2xqcy5jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzL2FkZCEiLCJqcy9FcnJvciIsImNsanMuY29yZS5hc3luYy5pbXBsLnByb3RvY29scy9VbmJsb2NraW5nQnVmZmVyIl0sInNvdXJjZXNDb250ZW50IjpbIjs7ICAgQ29weXJpZ2h0IChjKSBSaWNoIEhpY2tleSBhbmQgY29udHJpYnV0b3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuOzsgICBUaGUgdXNlIGFuZCBkaXN0cmlidXRpb24gdGVybXMgZm9yIHRoaXMgc29mdHdhcmUgYXJlIGNvdmVyZWQgYnkgdGhlXG47OyAgIEVjbGlwc2UgUHVibGljIExpY2Vuc2UgMS4wIChodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvZWNsaXBzZS0xLjAucGhwKVxuOzsgICB3aGljaCBjYW4gYmUgZm91bmQgaW4gdGhlIGZpbGUgZXBsLXYxMC5odG1sIGF0IHRoZSByb290IG9mIHRoaXMgZGlzdHJpYnV0aW9uLlxuOzsgICBCeSB1c2luZyB0aGlzIHNvZnR3YXJlIGluIGFueSBmYXNoaW9uLCB5b3UgYXJlIGFncmVlaW5nIHRvIGJlIGJvdW5kIGJ5XG47OyAgIHRoZSB0ZXJtcyBvZiB0aGlzIGxpY2Vuc2UuXG47OyAgIFlvdSBtdXN0IG5vdCByZW1vdmUgdGhpcyBub3RpY2UsIG9yIGFueSBvdGhlciwgZnJvbSB0aGlzIHNvZnR3YXJlLlxuXG4obnMgY2xqcy5jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzKVxuXG4oZGVmIF46Y29uc3QgTUFYLVFVRVVFLVNJWkUgMTAyNClcblxuKGRlZnByb3RvY29sIFJlYWRQb3J0XG4gICh0YWtlISBbcG9ydCBmbjEtaGFuZGxlcl0gXCJkZXJlZmFibGUgdmFsIGlmIHRha2VuLCBuaWwgaWYgdGFrZSB3YXMgZW5xdWV1ZWRcIikpXG5cbihkZWZwcm90b2NvbCBXcml0ZVBvcnRcbiAgKHB1dCEgW3BvcnQgdmFsIGZuMS1oYW5kbGVyXSBcImRlcmVmYWJsZSBib29sZWFuIChmYWxzZSBpZiBhbHJlYWR5IGNsb3NlZCkgaWYgaGFuZGxlZCwgbmlsIGlmIHB1dCB3YXMgZW5xdWV1ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTXVzdCB0aHJvdyBvbiBuaWwgdmFsLlwiKSlcblxuKGRlZnByb3RvY29sIENoYW5uZWxcbiAgKGNsb3NlISBbY2hhbl0pXG4gIChjbG9zZWQ/IFtjaGFuXSkpXG5cbihkZWZwcm90b2NvbCBIYW5kbGVyXG4gIChhY3RpdmU/IFtoXSBcInJldHVybnMgdHJ1ZSBpZiBoYXMgY2FsbGJhY2suIE11c3Qgd29yayB3L28gbG9ja1wiKVxuICAoYmxvY2thYmxlPyBbaF0gXCJyZXR1cm5zIHRydWUgaWYgdGhpcyBoYW5kbGVyIG1heSBiZSBibG9ja2VkLCBvdGhlcndpc2UgaXQgbXVzdCBub3QgYmxvY2tcIilcbiAgI18obG9jay1pZCBbaF0gXCJhIHVuaXF1ZSBpZCBmb3IgbG9jayBhY3F1aXNpdGlvbiBvcmRlciwgMCBpZiBubyBsb2NrXCIpXG4gIChjb21taXQgW2hdIFwiY29tbWl0IHRvIGZ1bGZpbGxpbmcgaXRzIGVuZCBvZiB0aGUgdHJhbnNmZXIsIHJldHVybnMgY2IuIE11c3QgYmUgY2FsbGVkIHdpdGhpbiBsb2NrXCIpKVxuXG4oZGVmcHJvdG9jb2wgQnVmZmVyXG4gIChmdWxsPyBbYl0gXCJyZXR1cm5zIHRydWUgaWYgYnVmZmVyIGNhbm5vdCBhY2NlcHQgcHV0XCIpXG4gIChyZW1vdmUhIFtiXSBcInJlbW92ZSBhbmQgcmV0dXJuIG5leHQgaXRlbSBmcm9tIGJ1ZmZlciwgY2FsbGVkIHVuZGVyIGNoYW4gbXV0ZXhcIilcbiAgKGFkZCEqIFtiIGl0bV0gXCJpZiByb29tLCBhZGQgaXRlbSB0byB0aGUgYnVmZmVyLCByZXR1cm5zIGIsIGNhbGxlZCB1bmRlciBjaGFuIG11dGV4XCIpXG4gIChjbG9zZS1idWYhIFtiXSBcImNhbGxlZCBvbiBjaGFuIGNsb3NlZCB1bmRlciBjaGFuIG11dGV4LCByZXR1cm4gaWdub3JlZFwiKSlcblxuKGRlZm4gYWRkIVxuICAoW2JdIGIpXG4gIChbYiBpdG1dXG4gICAgIChhc3NlcnQgKG5vdCAobmlsPyBpdG0pKSlcbiAgICAgKGFkZCEqIGIgaXRtKSkpXG5cbjs7IERlZmluZXMgYSBidWZmZXIgdGhhdCB3aWxsIG5ldmVyIGJsb2NrIChyZXR1cm4gdHJ1ZSB0byBmdWxsPylcbihkZWZwcm90b2NvbCBVbmJsb2NraW5nQnVmZmVyKVxuIl19