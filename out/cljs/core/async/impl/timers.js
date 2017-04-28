goog.provide('cljs.core.async.impl.timers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
cljs.core.async.impl.timers.MAX_LEVEL = (15);
cljs.core.async.impl.timers.P = ((1) / (2));
cljs.core.async.impl.timers.random_level = (function cljs$core$async$impl$timers$random_level(var_args){
var G__163 = arguments.length;
switch (G__163) {
case (0):
return cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.impl.timers.random_level.call(null,(0));
});

cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$1 = (function (level){
while(true){
if(((Math.random() < cljs.core.async.impl.timers.P)) && ((level < cljs.core.async.impl.timers.MAX_LEVEL))){
var G__165 = (level + (1));
level = G__165;
continue;
} else {
return level;
}
break;
}
});

cljs.core.async.impl.timers.random_level.cljs$lang$maxFixedArity = (1);


/**
* @constructor
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
*/
cljs.core.async.impl.timers.SkipListNode = (function (key,val,forward){
this.key = key;
this.val = val;
this.forward = forward;
this.cljs$lang$protocol_mask$partition0$ = -2139095040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var x__23003__auto__ = self__.key;
return cljs.core._conj.call(null,(function (){var x__23003__auto____$1 = self__.val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23003__auto____$1);
})(),x__23003__auto__);
});

cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.async.impl.timers.SkipListNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",(124488940),null),cljs.core.with_meta(new cljs.core.Symbol(null,"val","val",(1769233139),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),new cljs.core.Symbol(null,"forward","forward",(1083186224),null)], null);
});

cljs.core.async.impl.timers.SkipListNode.cljs$lang$type = true;

cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipListNode";

cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorPrWriter = (function (this__22745__auto__,writer__22746__auto__,opt__22747__auto__){
return cljs.core._write.call(null,writer__22746__auto__,"cljs.core.async.impl.timers/SkipListNode");
});

cljs.core.async.impl.timers.__GT_SkipListNode = (function cljs$core$async$impl$timers$__GT_SkipListNode(key,val,forward){
return (new cljs.core.async.impl.timers.SkipListNode(key,val,forward));
});

cljs.core.async.impl.timers.skip_list_node = (function cljs$core$async$impl$timers$skip_list_node(var_args){
var G__167 = arguments.length;
switch (G__167) {
case (1):
return cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (3):
return cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$1 = (function (level){
return cljs.core.async.impl.timers.skip_list_node.call(null,null,null,level);
});

cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$3 = (function (k,v,level){
var arr = (new Array((level + (1))));
var i_169 = (0);
while(true){
if((i_169 < arr.length)){
(arr[i_169] = null);

var G__170 = (i_169 + (1));
i_169 = G__170;
continue;
} else {
}
break;
}

return (new cljs.core.async.impl.timers.SkipListNode(k,v,arr));
});

cljs.core.async.impl.timers.skip_list_node.cljs$lang$maxFixedArity = (3);

cljs.core.async.impl.timers.least_greater_node = (function cljs$core$async$impl$timers$least_greater_node(var_args){
var G__172 = arguments.length;
switch (G__172) {
case (3):
return cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$3 = (function (x,k,level){
return cljs.core.async.impl.timers.least_greater_node.call(null,x,k,level,null);
});

cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$4 = (function (x,k,level,update){
while(true){
if(!((level < (0)))){
var x__$1 = (function (){var x__$1 = x;
while(true){
var temp__21669__auto__ = (((level < x__$1.forward.length))?(x__$1.forward[level]):null);
if(cljs.core.truth_(temp__21669__auto__)){
var x_SINGLEQUOTE_ = temp__21669__auto__;
if((x_SINGLEQUOTE_.key < k)){
var G__174 = x_SINGLEQUOTE_;
x__$1 = G__174;
continue;
} else {
return x__$1;
}
} else {
return x__$1;
}
break;
}
})();
if((update == null)){
} else {
(update[level] = x__$1);
}

var G__175 = x__$1;
var G__176 = k;
var G__177 = (level - (1));
var G__178 = update;
x = G__175;
k = G__176;
level = G__177;
update = G__178;
continue;
} else {
return x;
}
break;
}
});

cljs.core.async.impl.timers.least_greater_node.cljs$lang$maxFixedArity = (4);


/**
* @constructor
 * @implements {cljs.core.async.impl.timers.Object}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
*/
cljs.core.async.impl.timers.SkipList = (function (header,level){
this.header = header;
this.level = level;
this.cljs$lang$protocol_mask$partition0$ = -2139095040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.timers.SkipList.prototype.put = (function (k,v){
var self__ = this;
var coll = this;
var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));
var x = cljs.core.async.impl.timers.least_greater_node.call(null,self__.header,k,self__.level,update);
var x__$1 = (x.forward[(0)]);
if((!((x__$1 == null))) && ((x__$1.key === k))){
return x__$1.val = v;
} else {
var new_level = cljs.core.async.impl.timers.random_level.call(null);
if((new_level > self__.level)){
var i_179 = (self__.level + (1));
while(true){
if((i_179 <= (new_level + (1)))){
(update[i_179] = self__.header);

var G__180 = (i_179 + (1));
i_179 = G__180;
continue;
} else {
}
break;
}

self__.level = new_level;
} else {
}

var x__$2 = cljs.core.async.impl.timers.skip_list_node.call(null,k,v,(new Array(new_level)));
var i = (0);
while(true){
if((i <= self__.level)){
var links = (update[i]).forward;
(x__$2.forward[i] = (links[i]));

return (links[i] = x__$2);
} else {
return null;
}
break;
}
}
});

cljs.core.async.impl.timers.SkipList.prototype.remove = (function (k){
var self__ = this;
var coll = this;
var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));
var x = cljs.core.async.impl.timers.least_greater_node.call(null,self__.header,k,self__.level,update);
var x__$1 = (((x.forward.length === (0)))?null:(x.forward[(0)]));
if((!((x__$1 == null))) && ((x__$1.key === k))){
var i_181 = (0);
while(true){
if((i_181 <= self__.level)){
var links_182 = (update[i_181]).forward;
if((x__$1 === (((i_181 < links_182.length))?(links_182[i_181]):null))){
(links_182[i_181] = (x__$1.forward[i_181]));

var G__183 = (i_181 + (1));
i_181 = G__183;
continue;
} else {
var G__184 = (i_181 + (1));
i_181 = G__184;
continue;
}
} else {
}
break;
}

while(true){
if(((((0) < self__.level)) && ((self__.level < self__.header.forward.length))) && (((self__.header.forward[self__.level]) == null))){
self__.level = (self__.level - (1));

continue;
} else {
return null;
}
break;
}
} else {
return null;
}
});

cljs.core.async.impl.timers.SkipList.prototype.ceilingEntry = (function (k){
var self__ = this;
var coll = this;
var x = self__.header;
var level__$1 = self__.level;
while(true){
if(!((level__$1 < (0)))){
var nx = (function (){var x__$1 = x;
while(true){
var x_SINGLEQUOTE_ = (((level__$1 < x__$1.forward.length))?(x__$1.forward[level__$1]):null);
if((x_SINGLEQUOTE_ == null)){
return null;
} else {
if((x_SINGLEQUOTE_.key >= k)){
return x_SINGLEQUOTE_;
} else {
var G__185 = x_SINGLEQUOTE_;
x__$1 = G__185;
continue;
}
}
break;
}
})();
if(!((nx == null))){
var G__186 = nx;
var G__187 = (level__$1 - (1));
x = G__186;
level__$1 = G__187;
continue;
} else {
var G__188 = x;
var G__189 = (level__$1 - (1));
x = G__188;
level__$1 = G__189;
continue;
}
} else {
if((x === self__.header)){
return null;
} else {
return x;
}
}
break;
}
});

cljs.core.async.impl.timers.SkipList.prototype.floorEntry = (function (k){
var self__ = this;
var coll = this;
var x = self__.header;
var level__$1 = self__.level;
while(true){
if(!((level__$1 < (0)))){
var nx = (function (){var x__$1 = x;
while(true){
var x_SINGLEQUOTE_ = (((level__$1 < x__$1.forward.length))?(x__$1.forward[level__$1]):null);
if(!((x_SINGLEQUOTE_ == null))){
if((x_SINGLEQUOTE_.key > k)){
return x__$1;
} else {
var G__190 = x_SINGLEQUOTE_;
x__$1 = G__190;
continue;
}
} else {
if((level__$1 === (0))){
return x__$1;
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(nx)){
var G__191 = nx;
var G__192 = (level__$1 - (1));
x = G__191;
level__$1 = G__192;
continue;
} else {
var G__193 = x;
var G__194 = (level__$1 - (1));
x = G__193;
level__$1 = G__194;
continue;
}
} else {
if((x === self__.header)){
return null;
} else {
return x;
}
}
break;
}
});

cljs.core.async.impl.timers.SkipList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var iter = ((function (coll__$1){
return (function cljs$core$async$impl$timers$iter(node){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
if((node == null)){
return null;
} else {
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node.key,node.val], null),cljs$core$async$impl$timers$iter.call(null,(node.forward[(0)])));
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter.call(null,(self__.header.forward[(0)]));
});

cljs.core.async.impl.timers.SkipList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = ((function (coll__$1){
return (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll__$1);
});

cljs.core.async.impl.timers.SkipList.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"header","header",(1759972661),null),cljs.core.with_meta(new cljs.core.Symbol(null,"level","level",(-1363938217),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null);
});

cljs.core.async.impl.timers.SkipList.cljs$lang$type = true;

cljs.core.async.impl.timers.SkipList.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipList";

cljs.core.async.impl.timers.SkipList.cljs$lang$ctorPrWriter = (function (this__22745__auto__,writer__22746__auto__,opt__22747__auto__){
return cljs.core._write.call(null,writer__22746__auto__,"cljs.core.async.impl.timers/SkipList");
});

cljs.core.async.impl.timers.__GT_SkipList = (function cljs$core$async$impl$timers$__GT_SkipList(header,level){
return (new cljs.core.async.impl.timers.SkipList(header,level));
});

cljs.core.async.impl.timers.skip_list = (function cljs$core$async$impl$timers$skip_list(){
return (new cljs.core.async.impl.timers.SkipList(cljs.core.async.impl.timers.skip_list_node.call(null,(0)),(0)));
});
cljs.core.async.impl.timers.timeouts_map = cljs.core.async.impl.timers.skip_list.call(null);
cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS = (10);
/**
 * returns a channel that will close after msecs
 */
cljs.core.async.impl.timers.timeout = (function cljs$core$async$impl$timers$timeout(msecs){
var timeout = ((new Date()).valueOf() + msecs);
var me = cljs.core.async.impl.timers.timeouts_map.ceilingEntry(timeout);
var or__22190__auto__ = (cljs.core.truth_((function (){var and__22173__auto__ = me;
if(cljs.core.truth_(and__22173__auto__)){
return (me.key < (timeout + cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS));
} else {
return and__22173__auto__;
}
})())?me.val:null);
if(cljs.core.truth_(or__22190__auto__)){
return or__22190__auto__;
} else {
var timeout_channel = cljs.core.async.impl.channels.chan.call(null,null);
cljs.core.async.impl.timers.timeouts_map.put(timeout,timeout_channel);

cljs.core.async.impl.dispatch.queue_delay.call(null,((function (timeout_channel,or__22190__auto__,timeout,me){
return (function (){
cljs.core.async.impl.timers.timeouts_map.remove(timeout);

return cljs.core.async.impl.protocols.close_BANG_.call(null,timeout_channel);
});})(timeout_channel,or__22190__auto__,timeout,me))
,msecs);

return timeout_channel;
}
});

//# sourceURL=out/cljs/core/async/impl/timers.js?rel=1512906461295
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0L2NsanMvY29yZS9hc3luYy9pbXBsL3RpbWVycy5qcz9yZWw9MTUxMjkwNjQ2MTI5NSIsInNvdXJjZXMiOlsidGltZXJzLmNsanM/cmVsPTE1MTI5MDY0NjEyOTUiXSwibGluZUNvdW50Ijo0NzYsIm1hcHBpbmdzIjoiQUFRQTs7Ozs7QUFLQSx3Q0FBQSx4Q0FBS0E7QUFDTCxBQUFLQyxnQ0FBRSxDQUFBLE1BQUE7QUFFUCxBQUFBLDJDQUFBLG1EQUFBQyw5RkFBTUU7QUFBTixBQUFBLElBQUFELFNBQUEsQUFBQTtBQUFBLEFBQUEsUUFBQUE7S0FBQTtBQUFBLE9BQUFDOzs7S0FBQTtBQUFBLE9BQUFBLHVFQUFBLENBQUEsVUFBQTs7OztBQUFBLE1BQUEsS0FBQUMsTUFBQSxDQUFBLDhEQUFBLEFBQUE7Ozs7O0FBQUEsQUFBQSx5RUFBQSx6RUFBTUQ7QUFBTixBQUNNLDBEQUFBLG5EQUFDQTs7O0FBRFAsQUFBQSx5RUFBQSx6RUFBTUEsb0ZBRUZFOztBQUZKLEFBR0ksR0FBSSxDQUFLLENBQUcsQUFBU0MsZ0JBQVNOLG9DQUNyQixDQUFHSyxRQUFNTjtBQUNoQixhQUFPLFNBQUEsUkFBS007Ozs7QUFDWkE7Ozs7OztBQU5OLEFBQUEsbUVBQUEsbkVBQU1GOztBQUFOLEFBUUEsQUFBQTs7Ozs7Ozs7Ozs7OztBQUFBLEFBQUEsQUFBQSxBQUFBLHFGQUFBLHJGQUFTUSxnR0FFQUs7O0FBRlQsQUFBQSxlQUFBLFhBRVNBO0FBRlQsQUFHSSxJQUFBQyxtQkFBTUo7QUFBTixBQUFBLE9BQUFLLDBCQUFBLGlCQUFBRCx1QkFBVUg7QUFBVixBQUFBLE9BQUFJLDBCQUFBLEFBQUFDLHFCQUFBRjtLQUFBQTs7O0FBSEosQUFBQSxBQUFBLG1HQUFBLG5HQUFTTiw4R0FNTUssS0FBS0ksT0FBT0M7O0FBTjNCLEFBQUEsZUFBQSxYQU1lTDtBQU5mLEFBT0ksMkVBQUEsSUFBQSxJQUFBLDVFQUFDTSx5Q0FBcUJGLE9BQU9HLGdDQUFzQkYsS0FBS0w7OztBQVA1RCxBQUFBLG9E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WyJjbGpzLmNvcmUuYXN5bmMuaW1wbC50aW1lcnMvTUFYX0xFVkVMIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwudGltZXJzL1AiLCJ2YXJfYXJncyIsIkdfXzE2MyIsImNsanMuY29yZS5hc3luYy5pbXBsLnRpbWVycy9yYW5kb20tbGV2ZWwiLCJqcy9FcnJvciIsImxldmVsIiwianMvTWF0aCIsInRoaXNfXzIyNzQ1X19hdXRvX18iLCJ3cml0ZXJfXzIyNzQ2X19hdXRvX18iLCJvcHRfXzIyNzQ3X19hdXRvX18iLCJjbGpzLmNvcmUvLXdyaXRlIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwudGltZXJzL1NraXBMaXN0Tm9kZSIsImNsanMuY29yZS5hc3luYy5pbXBsLnRpbWVycy8tPlNraXBMaXN0Tm9kZSIsImtleSIsInZhbCIsImZvcndhcmQiLCJjb2xsIiwieF9fMjMwMDNfX2F1dG9fXyIsImNsanMuY29yZS8tY29uaiIsImNsanMuY29yZS9MaXN0Iiwid3JpdGVyIiwib3B0cyIsImNsanMuY29yZS9wci1zZXF1ZW50aWFsLXdyaXRlciIsImNsanMuY29yZS9wci13cml0ZXIiLCJHX18xNjciLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC50aW1lcnMvc2tpcC1saXN0LW5vZGUiLCJrIiwidiIsImFyciIsImpzL0FycmF5IiwiaSIsIkdfXzE3MiIsImNsanMuY29yZS5hc3luYy5pbXBsLnRpbWVycy9sZWFzdC1ncmVhdGVyLW5vZGUiLCJ4IiwidXBkYXRlIiwidGVtcF9fMjE2NjlfX2F1dG9fXyIsIngnIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwudGltZXJzL1NraXBMaXN0IiwiY2xqcy5jb3JlLmFzeW5jLmltcGwudGltZXJzLy0+U2tpcExpc3QiLCJoZWFkZXIiLCJuZXctbGV2ZWwiLCJsaW5rcyIsIm54Iiwibm9kZSIsImNsanMuY29yZS9MYXp5U2VxIiwiY2xqcy5jb3JlL2NvbnMiLCJpdGVyIiwicHItcGFpciIsImtleXZhbCIsImNsanMuY29yZS5hc3luYy5pbXBsLnRpbWVycy9za2lwLWxpc3QiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC50aW1lcnMvdGltZW91dHMtbWFwIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwudGltZXJzL1RJTUVPVVRfUkVTT0xVVElPTl9NUyIsImNsanMuY29yZS5hc3luYy5pbXBsLnRpbWVycy90aW1lb3V0IiwibXNlY3MiLCJ0aW1lb3V0IiwianMvRGF0ZSIsIm1lIiwib3JfXzIyMTkwX19hdXRvX18iLCJhbmRfXzIyMTczX19hdXRvX18iLCJ0aW1lb3V0LWNoYW5uZWwiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5jaGFubmVscy9jaGFuIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuZGlzcGF0Y2gvcXVldWUtZGVsYXkiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5wcm90b2NvbHMvY2xvc2UhIl0sInNvdXJjZXNDb250ZW50IjpbIjs7ICAgQ29weXJpZ2h0IChjKSBSaWNoIEhpY2tleSBhbmQgY29udHJpYnV0b3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuOzsgICBUaGUgdXNlIGFuZCBkaXN0cmlidXRpb24gdGVybXMgZm9yIHRoaXMgc29mdHdhcmUgYXJlIGNvdmVyZWQgYnkgdGhlXG47OyAgIEVjbGlwc2UgUHVibGljIExpY2Vuc2UgMS4wIChodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvZWNsaXBzZS0xLjAucGhwKVxuOzsgICB3aGljaCBjYW4gYmUgZm91bmQgaW4gdGhlIGZpbGUgZXBsLXYxMC5odG1sIGF0IHRoZSByb290IG9mIHRoaXMgZGlzdHJpYnV0aW9uLlxuOzsgICBCeSB1c2luZyB0aGlzIHNvZnR3YXJlIGluIGFueSBmYXNoaW9uLCB5b3UgYXJlIGFncmVlaW5nIHRvIGJlIGJvdW5kIGJ5XG47OyAgIHRoZSB0ZXJtcyBvZiB0aGlzIGxpY2Vuc2UuXG47OyAgIFlvdSBtdXN0IG5vdCByZW1vdmUgdGhpcyBub3RpY2UsIG9yIGFueSBvdGhlciwgZnJvbSB0aGlzIHNvZnR3YXJlLlxuXG4obnMgY2xqcy5jb3JlLmFzeW5jLmltcGwudGltZXJzXG4gICg6cmVxdWlyZSBbY2xqcy5jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzIDphcyBpbXBsXVxuICAgICAgICAgICAgW2NsanMuY29yZS5hc3luYy5pbXBsLmNoYW5uZWxzIDphcyBjaGFubmVsc11cbiAgICAgICAgICAgIFtjbGpzLmNvcmUuYXN5bmMuaW1wbC5kaXNwYXRjaCA6YXMgZGlzcGF0Y2hdKSlcblxuKGRlZiBNQVhfTEVWRUwgMTUpIDs7IDE2IGxldmVsc1xuKGRlZiBQICgvIDEgMikpXG5cbihkZWZuIHJhbmRvbS1sZXZlbFxuICAoW10gKHJhbmRvbS1sZXZlbCAwKSlcbiAgKFtsZXZlbF1cbiAgICAoaWYgKGFuZCAoPCAoLnJhbmRvbSBqcy9NYXRoKSBQKVxuICAgICAgICAgICAgICg8IGxldmVsIE1BWF9MRVZFTCkpXG4gICAgICAocmVjdXIgKGluYyBsZXZlbCkpXG4gICAgICBsZXZlbCkpKVxuXG4oZGVmdHlwZSBTa2lwTGlzdE5vZGUgW2tleSBeOm11dGFibGUgdmFsIGZvcndhcmRdXG4gIElTZXFhYmxlXG4gICgtc2VxIFtjb2xsXVxuICAgIChsaXN0IGtleSB2YWwpKVxuXG4gIElQcmludFdpdGhXcml0ZXJcbiAgKC1wci13cml0ZXIgW2NvbGwgd3JpdGVyIG9wdHNdXG4gICAgKHByLXNlcXVlbnRpYWwtd3JpdGVyIHdyaXRlciBwci13cml0ZXIgXCJbXCIgXCIgXCIgXCJdXCIgb3B0cyBjb2xsKSkpXG5cbihkZWZuIHNraXAtbGlzdC1ub2RlXG4gIChbbGV2ZWxdIChza2lwLWxpc3Qtbm9kZSBuaWwgbmlsIGxldmVsKSlcbiAgKFtrIHYgbGV2ZWxdXG4gICAgKGxldCBbYXJyIChtYWtlLWFycmF5IChpbmMgbGV2ZWwpKV1cbiAgICAgIChsb29wIFtpIDBdXG4gICAgICAgICh3aGVuICg8IGkgKGFsZW5ndGggYXJyKSlcbiAgICAgICAgICAoYXNldCBhcnIgaSBuaWwpXG4gICAgICAgICAgKHJlY3VyIChpbmMgaSkpKSlcbiAgICAgIChTa2lwTGlzdE5vZGUuIGsgdiBhcnIpKSkpXG5cbihkZWZuIGxlYXN0LWdyZWF0ZXItbm9kZVxuICAoW3ggayBsZXZlbF0gKGxlYXN0LWdyZWF0ZXItbm9kZSB4IGsgbGV2ZWwgbmlsKSlcbiAgKFt4IGsgbGV2ZWwgdXBkYXRlXVxuICAgIChpZi1ub3QgKG5lZz8gbGV2ZWwpXG4gICAgICAobGV0IFt4IChsb29wIFt4IHhdXG4gICAgICAgICAgICAgICAgKGlmLWxldCBbeCcgKHdoZW4gKDwgbGV2ZWwgKGFsZW5ndGggKC4tZm9yd2FyZCB4KSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYWdldCAoLi1mb3J3YXJkIHgpIGxldmVsKSldXG4gICAgICAgICAgICAgICAgICAoaWYgKDwgKC4ta2V5IHgnKSBrKVxuICAgICAgICAgICAgICAgICAgICAocmVjdXIgeCcpXG4gICAgICAgICAgICAgICAgICAgIHgpXG4gICAgICAgICAgICAgICAgICB4KSldXG4gICAgICAgICh3aGVuLW5vdCAobmlsPyB1cGRhdGUpXG4gICAgICAgICAgKGFzZXQgdXBkYXRlIGxldmVsIHgpKVxuICAgICAgICAocmVjdXIgeCBrIChkZWMgbGV2ZWwpIHVwZGF0ZSkpXG4gICAgICB4KSkpXG5cbihkZWZ0eXBlIFNraXBMaXN0IFtoZWFkZXIgXjptdXRhYmxlIGxldmVsXVxuICBPYmplY3RcbiAgKHB1dCBbY29sbCBrIHZdXG4gICAgKGxldCBbdXBkYXRlIChtYWtlLWFycmF5IE1BWF9MRVZFTClcbiAgICAgICAgICB4IChsZWFzdC1ncmVhdGVyLW5vZGUgaGVhZGVyIGsgbGV2ZWwgdXBkYXRlKVxuICAgICAgICAgIHggKGFnZXQgKC4tZm9yd2FyZCB4KSAwKV1cbiAgICAgIChpZiAoYW5kIChub3QgKG5pbD8geCkpICg9PSAoLi1rZXkgeCkgaykpXG4gICAgICAgIChzZXQhICguLXZhbCB4KSB2KVxuICAgICAgICAobGV0IFtuZXctbGV2ZWwgKHJhbmRvbS1sZXZlbCldXG4gICAgICAgICAgKHdoZW4gKD4gbmV3LWxldmVsIGxldmVsKVxuICAgICAgICAgICAgKGxvb3AgW2kgKGluYyBsZXZlbCldXG4gICAgICAgICAgICAgICh3aGVuICg8PSBpIChpbmMgbmV3LWxldmVsKSlcbiAgICAgICAgICAgICAgICAoYXNldCB1cGRhdGUgaSBoZWFkZXIpXG4gICAgICAgICAgICAgICAgKHJlY3VyIChpbmMgaSkpKSlcbiAgICAgICAgICAgIChzZXQhIGxldmVsIG5ldy1sZXZlbCkpXG4gICAgICAgICAgKGxldCBbeCAoc2tpcC1saXN0LW5vZGUgayB2IChtYWtlLWFycmF5IG5ldy1sZXZlbCkpXVxuICAgICAgICAgICAgKGxvb3AgW2kgMF1cbiAgICAgICAgICAgICAgKHdoZW4gKDw9IGkgbGV2ZWwpXG4gICAgICAgICAgICAgICAgKGxldCBbbGlua3MgKC4tZm9yd2FyZCAoYWdldCB1cGRhdGUgaSkpXVxuICAgICAgICAgICAgICAgICAgKGFzZXQgKC4tZm9yd2FyZCB4KSBpIChhZ2V0IGxpbmtzIGkpKVxuICAgICAgICAgICAgICAgICAgKGFzZXQgbGlua3MgaSB4KSkpKSkpKSkpXG5cbiAgKHJlbW92ZSBbY29sbCBrXVxuICAgIChsZXQgW3VwZGF0ZSAobWFrZS1hcnJheSBNQVhfTEVWRUwpXG4gICAgICAgICAgeCAobGVhc3QtZ3JlYXRlci1ub2RlIGhlYWRlciBrIGxldmVsIHVwZGF0ZSlcbiAgICAgICAgICB4ICh3aGVuLW5vdCAoemVybz8gKGFsZW5ndGggKC4tZm9yd2FyZCB4KSkpXG4gICAgICAgICAgICAgIChhZ2V0ICguLWZvcndhcmQgeCkgMCkpXVxuICAgICAgKHdoZW4gKGFuZCAobm90IChuaWw/IHgpKSAoPT0gKC4ta2V5IHgpIGspKVxuICAgICAgICAobG9vcCBbaSAwXVxuICAgICAgICAgICh3aGVuICg8PSBpIGxldmVsKVxuICAgICAgICAgICAgKGxldCBbbGlua3MgKC4tZm9yd2FyZCAoYWdldCB1cGRhdGUgaSkpXVxuICAgICAgICAgICAgICAoaWYgKGlkZW50aWNhbD8geCAod2hlbiAoPCBpIChhbGVuZ3RoIGxpbmtzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYWdldCBsaW5rcyBpKSkpXG4gICAgICAgICAgICAgICAgKGRvXG4gICAgICAgICAgICAgICAgICAoYXNldCBsaW5rcyBpIChhZ2V0ICguLWZvcndhcmQgeCkgaSkpXG4gICAgICAgICAgICAgICAgICAocmVjdXIgKGluYyBpKSkpXG4gICAgICAgICAgICAgICAgKHJlY3VyIChpbmMgaSkpKSkpKVxuICAgICAgICAod2hpbGUgKGFuZCAoPCAwIGxldmVsIChhbGVuZ3RoICguLWZvcndhcmQgaGVhZGVyKSkpXG4gICAgICAgICAgICAgICAgICAgIChuaWw/IChhZ2V0ICguLWZvcndhcmQgaGVhZGVyKSBsZXZlbCkpKVxuICAgICAgICAgIChzZXQhIGxldmVsIChkZWMgbGV2ZWwpKSkpKSlcblxuICAoY2VpbGluZ0VudHJ5IFtjb2xsIGtdXG4gICAgKGxvb3AgW3ggaGVhZGVyIGxldmVsIGxldmVsXVxuICAgICAgKGlmLW5vdCAobmVnPyBsZXZlbClcbiAgICAgICAgKGxldCBbbnggKGxvb3AgW3ggeF1cbiAgICAgICAgICAgICAgICAgICAobGV0IFt4JyAod2hlbiAoPCBsZXZlbCAoYWxlbmd0aCAoLi1mb3J3YXJkIHgpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhZ2V0ICguLWZvcndhcmQgeCkgbGV2ZWwpKV1cbiAgICAgICAgICAgICAgICAgICAgICh3aGVuLW5vdCAobmlsPyB4JylcbiAgICAgICAgICAgICAgICAgICAgICAgKGlmICg+PSAoLi1rZXkgeCcpIGspXG4gICAgICAgICAgICAgICAgICAgICAgICAgeCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAocmVjdXIgeCcpKSkpKV1cbiAgICAgICAgICAoaWYtbm90IChuaWw/IG54KVxuICAgICAgICAgICAgKHJlY3VyIG54IChkZWMgbGV2ZWwpKVxuICAgICAgICAgICAgKHJlY3VyIHggKGRlYyBsZXZlbCkpKSlcbiAgICAgICAgKHdoZW4tbm90IChpZGVudGljYWw/IHggaGVhZGVyKVxuICAgICAgICAgIHgpKSkpXG4gIFxuICAoZmxvb3JFbnRyeSBbY29sbCBrXVxuICAgIChsb29wIFt4IGhlYWRlciBsZXZlbCBsZXZlbF1cbiAgICAgIChpZi1ub3QgKG5lZz8gbGV2ZWwpXG4gICAgICAgIChsZXQgW254IChsb29wIFt4IHhdXG4gICAgICAgICAgICAgICAgICAgKGxldCBbeCcgKHdoZW4gKDwgbGV2ZWwgKGFsZW5ndGggKC4tZm9yd2FyZCB4KSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYWdldCAoLi1mb3J3YXJkIHgpIGxldmVsKSldXG4gICAgICAgICAgICAgICAgICAgICAoaWYtbm90IChuaWw/IHgnKVxuICAgICAgICAgICAgICAgICAgICAgICAoaWYgKD4gKC4ta2V5IHgnKSBrKVxuICAgICAgICAgICAgICAgICAgICAgICAgIHhcbiAgICAgICAgICAgICAgICAgICAgICAgICAocmVjdXIgeCcpKVxuICAgICAgICAgICAgICAgICAgICAgICAod2hlbiAoemVybz8gbGV2ZWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgeCkpKSldXG4gICAgICAgICAgKGlmIG54XG4gICAgICAgICAgICAocmVjdXIgbnggKGRlYyBsZXZlbCkpXG4gICAgICAgICAgICAocmVjdXIgeCAoZGVjIGxldmVsKSkpKVxuICAgICAgICAod2hlbi1ub3QgKGlkZW50aWNhbD8geCBoZWFkZXIpXG4gICAgICAgICAgeCkpKSlcblxuICBJU2VxYWJsZVxuICAoLXNlcSBbY29sbF1cbiAgICAobGV0Zm4gWyhpdGVyIFtub2RlXVxuICAgICAgICAgICAgICAobGF6eS1zZXFcbiAgICAgICAgICAgICAgICAod2hlbi1ub3QgKG5pbD8gbm9kZSlcbiAgICAgICAgICAgICAgICAgIChjb25zIFsoLi1rZXkgbm9kZSkgKC4tdmFsIG5vZGUpXVxuICAgICAgICAgICAgICAgICAgICAoaXRlciAoYWdldCAoLi1mb3J3YXJkIG5vZGUpIDApKSkpKSldXG4gICAgICAoaXRlciAoYWdldCAoLi1mb3J3YXJkIGhlYWRlcikgMCkpKSlcblxuICBJUHJpbnRXaXRoV3JpdGVyXG4gICgtcHItd3JpdGVyIFtjb2xsIHdyaXRlciBvcHRzXVxuICAgIChsZXQgW3ByLXBhaXIgKGZuIFtrZXl2YWxdXG4gICAgICAgICAgICAgICAgICAgIChwci1zZXF1ZW50aWFsLXdyaXRlciB3cml0ZXIgcHItd3JpdGVyIFwiXCIgXCIgXCIgXCJcIiBvcHRzIGtleXZhbCkpXVxuICAgICAgKHByLXNlcXVlbnRpYWwtd3JpdGVyIHdyaXRlciBwci1wYWlyIFwie1wiIFwiLCBcIiBcIn1cIiBvcHRzIGNvbGwpKSkpXG5cbihkZWZuIHNraXAtbGlzdCBbXVxuICAoU2tpcExpc3QuIChza2lwLWxpc3Qtbm9kZSAwKSAwKSlcblxuKGRlZiB0aW1lb3V0cy1tYXAgKHNraXAtbGlzdCkpXG5cbihkZWYgVElNRU9VVF9SRVNPTFVUSU9OX01TIDEwKVxuXG4oZGVmbiB0aW1lb3V0XG4gIFwicmV0dXJucyBhIGNoYW5uZWwgdGhhdCB3aWxsIGNsb3NlIGFmdGVyIG1zZWNzXCJcbiAgW21zZWNzXVxuICAobGV0IFt0aW1lb3V0ICgrICgudmFsdWVPZiAoanMvRGF0ZS4pKSBtc2VjcylcbiAgICAgICAgbWUgKC5jZWlsaW5nRW50cnkgdGltZW91dHMtbWFwIHRpbWVvdXQpXVxuICAgIChvciAod2hlbiAoYW5kIG1lICg8ICguLWtleSBtZSkgKCsgdGltZW91dCBUSU1FT1VUX1JFU09MVVRJT05fTVMpKSlcbiAgICAgICAgICAoLi12YWwgbWUpKVxuICAgICAgICAobGV0IFt0aW1lb3V0LWNoYW5uZWwgKGNoYW5uZWxzL2NoYW4gbmlsKV1cbiAgICAgICAgICAoLnB1dCB0aW1lb3V0cy1tYXAgdGltZW91dCB0aW1lb3V0LWNoYW5uZWwpXG4gICAgICAgICAgKGRpc3BhdGNoL3F1ZXVlLWRlbGF5XG4gICAgICAgICAgICAoZm4gW11cbiAgICAgICAgICAgICAgKC5yZW1vdmUgdGltZW91dHMtbWFwIHRpbWVvdXQpXG4gICAgICAgICAgICAgIChpbXBsL2Nsb3NlISB0aW1lb3V0LWNoYW5uZWwpKVxuICAgICAgICAgICAgbXNlY3MpXG4gICAgICAgICAgdGltZW91dC1jaGFubmVsKSkpKVxuXG4iXX0=