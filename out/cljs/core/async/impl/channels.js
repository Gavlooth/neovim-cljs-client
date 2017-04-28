goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels39 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels39 = (function (val,meta40){
this.val = val;
this.meta40 = meta40;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels39.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41,meta40__$1){
var self__ = this;
var _41__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels39(self__.val,meta40__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels39.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41){
var self__ = this;
var _41__$1 = this;
return self__.meta40;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels39.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels39.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",(1769233139),null),new cljs.core.Symbol(null,"meta40","meta40",(44588954),null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels39.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels39.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels39";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels39.cljs$lang$ctorPrWriter = (function (this__22745__auto__,writer__22746__auto__,opt__22747__auto__){
return cljs.core._write.call(null,writer__22746__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels39");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels39 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels39(val__$1,meta40){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels39(val__$1,meta40));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels39(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",(1444934915),null),new cljs.core.Symbol(null,"val","val",(1769233139),null)], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__22745__auto__,writer__22746__auto__,opt__22747__auto__){
return cljs.core._write.call(null,writer__22746__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__22799__auto__ = (((this$ == null))?null:this$);
var m__22800__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__22799__auto__)]);
if(!((m__22800__auto__ == null))){
return m__22800__auto__.call(null,this$);
} else {
var m__22800__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__22800__auto____$1 == null))){
return m__22800__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.async.impl.protocols.Channel}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_53 = self__.puts.pop();
if((putter_53 == null)){
} else {
var put_handler_54 = putter_53.handler;
var val_55 = putter_53.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_54)){
var put_cb_56 = cljs.core.async.impl.protocols.commit.call(null,put_handler_54);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_56,put_handler_54,val_55,putter_53,this$__$1){
return (function (){
return put_cb_56.call(null,true);
});})(put_cb_56,put_handler_54,val_55,putter_53,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error(["Assert failed: ","Can't put nil in on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__22173__auto__ = self__.buf;
if(cljs.core.truth_(and__22173__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__22173__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__57 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__57;
continue;
} else {
var G__58 = takers;
takers = G__58;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__42_59 = cljs.core.seq.call(null,take_cbs);
var chunk__43_60 = null;
var count__44_61 = (0);
var i__45_62 = (0);
while(true){
if((i__45_62 < count__44_61)){
var f_63 = cljs.core._nth.call(null,chunk__43_60,i__45_62);
cljs.core.async.impl.dispatch.run.call(null,f_63);

var G__64 = seq__42_59;
var G__65 = chunk__43_60;
var G__66 = count__44_61;
var G__67 = (i__45_62 + (1));
seq__42_59 = G__64;
chunk__43_60 = G__65;
count__44_61 = G__66;
i__45_62 = G__67;
continue;
} else {
var temp__21789__auto___68 = cljs.core.seq.call(null,seq__42_59);
if(temp__21789__auto___68){
var seq__42_69__$1 = temp__21789__auto___68;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42_69__$1)){
var c__22969__auto___70 = cljs.core.chunk_first.call(null,seq__42_69__$1);
var G__71 = cljs.core.chunk_rest.call(null,seq__42_69__$1);
var G__72 = c__22969__auto___70;
var G__73 = cljs.core.count.call(null,c__22969__auto___70);
var G__74 = (0);
seq__42_59 = G__71;
chunk__43_60 = G__72;
count__44_61 = G__73;
i__45_62 = G__74;
continue;
} else {
var f_75 = cljs.core.first.call(null,seq__42_69__$1);
cljs.core.async.impl.dispatch.run.call(null,f_75);

var G__76 = cljs.core.next.call(null,seq__42_69__$1);
var G__77 = null;
var G__78 = (0);
var G__79 = (0);
seq__42_59 = G__76;
chunk__43_60 = G__77;
count__44_61 = G__78;
i__45_62 = G__79;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > (64))){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join('')),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var temp__21669__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__21669__auto__)){
var take_cb = temp__21669__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__46 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__22173__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__22173__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__22173__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if((cljs.core.not.call(null,done_QMARK_)) && (cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0)))){
var G__80 = cbs__$1;
cbs = G__80;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__46,(0),null);
var cbs = cljs.core.nth.call(null,vec__46,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__49_81 = cljs.core.seq.call(null,cbs);
var chunk__50_82 = null;
var count__51_83 = (0);
var i__52_84 = (0);
while(true){
if((i__52_84 < count__51_83)){
var cb_85 = cljs.core._nth.call(null,chunk__50_82,i__52_84);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__49_81,chunk__50_82,count__51_83,i__52_84,cb_85,val,vec__46,done_QMARK_,cbs,take_cb,temp__21669__auto__,this$__$1){
return (function (){
return cb_85.call(null,true);
});})(seq__49_81,chunk__50_82,count__51_83,i__52_84,cb_85,val,vec__46,done_QMARK_,cbs,take_cb,temp__21669__auto__,this$__$1))
);

var G__86 = seq__49_81;
var G__87 = chunk__50_82;
var G__88 = count__51_83;
var G__89 = (i__52_84 + (1));
seq__49_81 = G__86;
chunk__50_82 = G__87;
count__51_83 = G__88;
i__52_84 = G__89;
continue;
} else {
var temp__21789__auto___90 = cljs.core.seq.call(null,seq__49_81);
if(temp__21789__auto___90){
var seq__49_91__$1 = temp__21789__auto___90;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49_91__$1)){
var c__22969__auto___92 = cljs.core.chunk_first.call(null,seq__49_91__$1);
var G__93 = cljs.core.chunk_rest.call(null,seq__49_91__$1);
var G__94 = c__22969__auto___92;
var G__95 = cljs.core.count.call(null,c__22969__auto___92);
var G__96 = (0);
seq__49_81 = G__93;
chunk__50_82 = G__94;
count__51_83 = G__95;
i__52_84 = G__96;
continue;
} else {
var cb_97 = cljs.core.first.call(null,seq__49_91__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__49_81,chunk__50_82,count__51_83,i__52_84,cb_97,seq__49_91__$1,temp__21789__auto___90,val,vec__46,done_QMARK_,cbs,take_cb,temp__21669__auto__,this$__$1){
return (function (){
return cb_97.call(null,true);
});})(seq__49_81,chunk__50_82,count__51_83,i__52_84,cb_97,seq__49_91__$1,temp__21789__auto___90,val,vec__46,done_QMARK_,cbs,take_cb,temp__21669__auto__,this$__$1))
);

var G__98 = cljs.core.next.call(null,seq__49_91__$1);
var G__99 = null;
var G__100 = (0);
var G__101 = (0);
seq__49_81 = G__98;
chunk__50_82 = G__99;
count__51_83 = G__100;
i__52_84 = G__101;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){
return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__22173__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__22173__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__22173__auto__;
}
})())){
var has_val = (function (){var and__22173__auto__ = self__.buf;
if(cljs.core.truth_(and__22173__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__22173__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join('')),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__22173__auto__ = self__.buf;
if(cljs.core.truth_(and__22173__auto__)){
return (self__.puts.length === (0));
} else {
return and__22173__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_102 = self__.takes.pop();
if((taker_102 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_102)){
var take_cb_103 = cljs.core.async.impl.protocols.commit.call(null,taker_102);
var val_104 = (cljs.core.truth_((function (){var and__22173__auto__ = self__.buf;
if(cljs.core.truth_(and__22173__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__22173__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_103,val_104,taker_102,this$__$1){
return (function (){
return take_cb_103.call(null,val_104);
});})(take_cb_103,val_104,taker_102,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",(298247964),null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",(575642138),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),new cljs.core.Symbol(null,"puts","puts",(-1883877054),null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",(57041148),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"not-native","not-native",(-236392494),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",(720856168),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),new cljs.core.Symbol(null,"add!","add!",(2046056845),null)], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__22745__auto__,writer__22746__auto__,opt__22747__auto__){
return cljs.core._write.call(null,writer__22746__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__22190__auto__ = exh;
if(cljs.core.truth_(or__22190__auto__)){
return or__22190__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__106 = arguments.length;
switch (G__106) {
case (1):
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__110 = null;
var G__110__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e107){var t = e107;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__110__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e108){var t = e108;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__110 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__110__1.call(this,buf__$1);
case 2:
return G__110__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__110.cljs$core$IFn$_invoke$arity$1 = G__110__1;
G__110.cljs$core$IFn$_invoke$arity$2 = G__110__2;
return G__110;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = (3);


//# sourceURL=out/cljs/core/async/impl/channels.js?rel=1512906459183
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0L2NsanMvY29yZS9hc3luYy9pbXBsL2NoYW5uZWxzLmpzP3JlbD0xNTEyOTA2NDU5MTgzIiwic291cmNlcyI6WyJjaGFubmVscy5jbGpzP3JlbD0xNTEyOTA2NDU5MTgzIl0sImxpbmVDb3VudCI6NjcyLCJtYXBwaW5ncyI6IkFBUUE7Ozs7O0FBT0Esb0NBQUEscENBQU1BLGdGQUFLQztBQUFYLEFBQ0UsQUFBQSxHQUFBLE9BQUFDO0FBQUE7QUFBQSxBQUFBLEFBQUE7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBQSxtSEFBQSxXQUFBQyxJQUFBQzs7QUFBQSxBQUFBLElBQUFELFVBQUE7NEVBRFNGLDVFQUNULEFBQUEsWUFBQUMsMkVBQUFFOzs7QUFBQSxBQUFBLEFBQUEsQUFBQUYsMEdBQUEsV0FBQUM7O0FBQUEsQUFBQSxJQUFBQSxVQUFBO0FBQUEsQUFBQUM7OztBQUFBLEFBQUEsQUFBQSxBQUFBRiw0R0FBQSxXQUNXUTs7QUFEWCxBQUFBLFlBQUEsUkFDV0E7QUFEWCxBQUNjVDs7O0FBRGQsQUFBQSxBQUFBQywyRUFBQTtBQUFBLEFBQUEsMEZBQUEseURBQUE7OztBQUFBLEFBQUEsQUFBQUEsaUZBQUE7O0FBQUEsQUFBQSxBQUFBQSxvRkFBQTs7QUFBQSxBQUFBLEFBQUFBLHlGQUFBLFdBQUFHLG9CQUFBQyxzQkFBQUM7QUFBQSxBQUFBLE9BQUFDLDJCQUFBRixzQkFBQTs7OzRKQURTTCw1SkFDVCxBQUFBUSx1RUFBQSw2RkFBQUw7NEVBRFNILDVFQUNULEFBQUEsWUFBQUMsd0VBQUFFOzs7QUFBQUY7OzRFQURTRCw1RUFDVCxZQUFBQyxvRUFBQTs7QUFHRixBQUFBOzs7Ozs7OztBQUFBO0FBQUEsQUFBQSxnREFBQSxoREFBU1M7QUFBVCxBQUFBLDBGQUFBLGlFQUFBOzs7QUFBQSxBQUFBLHNEQUFBLHREQUFTQTs7QUFBVCxBQUFBLHlEQUFBLHpEQUFTQTs7QUFBVCxBQUFBLDhEQUFBLFdBQUFOLG9CQUFBQyxzQkFBQUMsbkhBQVNJ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SUssWUFBQTdELHlHQUFBLDZEQUFBLFFBQUEsOUhBQW9CLG1EQUFBLG5EQUFDc0UsNkRBQTBCLG1EQUFBLG5EQUFDQSw2REFDMUJoRSxVQUNGLGlCQUFNRSxZQUFLLGtCQUFJNkQsT0FBTSxBQUFDQSxnQkFBTUosMENBQVdBO0FBQXZDLEFBQ0U7OzsyQkFDSTNEO0FBREosQUFFRyxJQUFBLEFBQ0UsT0FBQ0Usb0JBQUtGO2NBRFIsUUFBQWlFLEpBRWtCVDtBQUZsQixBQUdJLE9BQUNGLCtDQUFPdEQsUUFBSXVELElBQUlDOzsyQkFDbkJ4RCxRQUFJaEM7QUFOUixBQU9HLElBQUEsQUFDRSxPQUFDa0Msb0JBQUtGLFFBQUloQztjQURaLFFBQUFrRyxKQUVrQlY7QUFGbEIsQUFHSSxPQUFDRiwrQ0FBT3RELFFBQUl1RCxJQUFJQzs7a0JBSm5CeEQsUUFBSWhDOzs7MkJBQUpnQzs7MkJBQUFBLFFBQUloQzs7Ozs7Ozs7Ozs7O0FBYm5DLEFBQUEsNkRBQUEsN0RBQU04Rjs7QUFBTiIsIm5hbWVzIjpbImNsanMuY29yZS5hc3luYy5pbXBsLmNoYW5uZWxzL2JveCIsInZhbCIsImNsanMuY29yZS5hc3luYy5pbXBsLmNoYW5uZWxzL3RfY2xqcyRjb3JlJGFzeW5jJGltcGwkY2hhbm5lbHMzOSIsIl80MSIsIm1ldGE0MCIsInRoaXNfXzIyNzQ1X19hdXRvX18iLCJ3cml0ZXJfXzIyNzQ2X19hdXRvX18iLCJvcHRfXzIyNzQ3X19hdXRvX18iLCJjbGpzLmNvcmUvLXdyaXRlIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuY2hhbm5lbHMvLT50X2NsanMkY29yZSRhc3luYyRpbXBsJGNoYW5uZWxzMzkiLCJfIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuY2hhbm5lbHMvUHV0Qm94IiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuY2hhbm5lbHMvLT5QdXRCb3giLCJoYW5kbGVyIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuY2hhbm5lbHMvcHV0LWFjdGl2ZT8iLCJib3giLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5wcm90b2NvbHMvYWN0aXZlPyIsImNsanMuY29yZS5hc3luYy5pbXBsLmNoYW5uZWxzL01BWF9ESVJUWSIsInhfXzIyNzk5X19hdXRvX18iLCJtX18yMjgwMF9fYXV0b19fIiwiY2xqcy9jb3JlLmFzeW5jLmltcGwuY2hhbm5lbHMuYWJvcnQiLCJnb29nL3R5cGVPZiIsImNsanMuY29yZS9taXNzaW5nLXByb3RvY29sIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuY2hhbm5lbHMvTU1DIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuY2hhbm5lbHMvYWJvcnQiLCJ0aGlzIiwiY2xqcy5jb3JlL1BST1RPQ09MX1NFTlRJTkVMIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuY2hhbm5lbHMvTWFueVRvTWFueUNoYW5uZWwiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5jaGFubmVscy8tPk1hbnlUb01hbnlDaGFubmVsIiwidGFrZXMiLCJkaXJ0eS10YWtlcyIsInB1dHMiLCJkaXJ0eS1wdXRzIiwiYnVmIiwiY2xvc2VkIiwiYWRkISIsInB1dHRlciIsInB1dC1oYW5kbGVyIiwicHV0LWNiIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzL2NvbW1pdCIsImNsanMuY29yZS5hc3luYy5pbXBsLmRpc3BhdGNoL3J1biIsImNsanMuY29yZS9jb25zdGFudGx5IiwiY2xqcy5jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzL2Nsb3NlISIsImpzL0Vycm9yIiwiYW5kX18yMjE3M19fYXV0b19fIiwiY2xqcy5jb3JlL25vdCIsImNsanMuY29yZS5hc3luYy5pbXBsLnByb3RvY29scy9mdWxsPyIsImRvbmU/IiwiY2xqcy5jb3JlL3JlZHVjZWQ/IiwidGFrZS1jYnMiLCJ0YWtlcnMiLCJjbGpzLmNvcmUvY291bnQiLCJ0YWtlciIsInJldCIsImNsanMuY29yZS5hc3luYy5pbXBsLnByb3RvY29scy9yZW1vdmUhIiwiY2xqcy5jb3JlL2NvbmoiLCJjbGpzLmNvcmUvc2VxIiwic2VxX180MiIsImNodW5rX180MyIsImNvdW50X180NCIsImlfXzQ1IiwiY2xqcy5jb3JlLy1udGgiLCJ0ZW1wX18yMTc4OV9fYXV0b19fIiwiY2xqcy5jb3JlL2NodW5rZWQtc2VxPyIsImNfXzIyOTY5X19hdXRvX18iLCJjbGpzLmNvcmUvY2h1bmstZmlyc3QiLCJjbGpzLmNvcmUvY2h1bmstcmVzdCIsImNsanMuY29yZS9maXJzdCIsImNsanMuY29yZS9uZXh0IiwiZiIsInRha2UtY2IiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5wcm90b2NvbHMvYmxvY2thYmxlPyIsImNsanMuY29yZS5hc3luYy5pbXBsLnByb3RvY29scy9NQVgtUVVFVUUtU0laRSIsInRlbXBfXzIxNjY5X19hdXRvX18iLCJ2ZWNfXzQ2IiwiY2xqcy5jb3JlL250aCIsImNicyIsImNiIiwic2VxX180OSIsImNodW5rX181MCIsImNvdW50X181MSIsImlfXzUyIiwiaGFzLXZhbCIsImNsanMuY29yZS5hc3luYy5pbXBsLnByb3RvY29scy9jbG9zZS1idWYhIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuY2hhbm5lbHMvZXgtaGFuZGxlciIsImV4IiwianMvY29uc29sZSIsImNsanMuY29yZS5hc3luYy5pbXBsLmNoYW5uZWxzL2hhbmRsZSIsImV4aCIsInQiLCJlbHNlIiwib3JfXzIyMTkwX19hdXRvX18iLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5wcm90b2NvbHMvYWRkISIsInZhcl9hcmdzIiwiR19fMTA2IiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuY2hhbm5lbHMvY2hhbiIsInhmb3JtIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuYnVmZmVycy9yaW5nLWJ1ZmZlciIsImUxMDciLCJlMTA4Il0sInNvdXJjZXNDb250ZW50IjpbIjs7ICAgQ29weXJpZ2h0IChjKSBSaWNoIEhpY2tleSBhbmQgY29udHJpYnV0b3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuOzsgICBUaGUgdXNlIGFuZCBkaXN0cmlidXRpb24gdGVybXMgZm9yIHRoaXMgc29mdHdhcmUgYXJlIGNvdmVyZWQgYnkgdGhlXG47OyAgIEVjbGlwc2UgUHVibGljIExpY2Vuc2UgMS4wIChodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvZWNsaXBzZS0xLjAucGhwKVxuOzsgICB3aGljaCBjYW4gYmUgZm91bmQgaW4gdGhlIGZpbGUgZXBsLXYxMC5odG1sIGF0IHRoZSByb290IG9mIHRoaXMgZGlzdHJpYnV0aW9uLlxuOzsgICBCeSB1c2luZyB0aGlzIHNvZnR3YXJlIGluIGFueSBmYXNoaW9uLCB5b3UgYXJlIGFncmVlaW5nIHRvIGJlIGJvdW5kIGJ5XG47OyAgIHRoZSB0ZXJtcyBvZiB0aGlzIGxpY2Vuc2UuXG47OyAgIFlvdSBtdXN0IG5vdCByZW1vdmUgdGhpcyBub3RpY2UsIG9yIGFueSBvdGhlciwgZnJvbSB0aGlzIHNvZnR3YXJlLlxuXG4obnMgY2xqcy5jb3JlLmFzeW5jLmltcGwuY2hhbm5lbHNcbiAgKDpyZXF1aXJlIFtjbGpzLmNvcmUuYXN5bmMuaW1wbC5wcm90b2NvbHMgOmFzIGltcGxdXG4gICAgICAgICAgICBbY2xqcy5jb3JlLmFzeW5jLmltcGwuZGlzcGF0Y2ggOmFzIGRpc3BhdGNoXVxuICAgICAgICAgICAgW2NsanMuY29yZS5hc3luYy5pbXBsLmJ1ZmZlcnMgOmFzIGJ1ZmZlcnNdKSlcblxuXG5cbihkZWZuIGJveCBbdmFsXVxuICAocmVpZnkgY2xqcy5jb3JlL0lEZXJlZlxuICAgICgtZGVyZWYgW19dIHZhbCkpKVxuXG4oZGVmdHlwZSBQdXRCb3ggW2hhbmRsZXIgdmFsXSlcblxuKGRlZm4gcHV0LWFjdGl2ZT8gW2JveF1cbiAgKGltcGwvYWN0aXZlPyAoLi1oYW5kbGVyIGJveCkpKVxuXG4oZGVmIF46Y29uc3QgTUFYX0RJUlRZIDY0KVxuXG4oZGVmcHJvdG9jb2wgTU1DXG4gIChhYm9ydCBbdGhpc10pKVxuXG4oZGVmdHlwZSBNYW55VG9NYW55Q2hhbm5lbCBbdGFrZXMgXjptdXRhYmxlIGRpcnR5LXRha2VzIHB1dHMgXjptdXRhYmxlIGRpcnR5LXB1dHMgXm5vdC1uYXRpdmUgYnVmIF46bXV0YWJsZSBjbG9zZWQgYWRkIV1cbiAgTU1DXG4gIChhYm9ydCBbdGhpc11cbiAgICAobG9vcCBbXVxuICAgICAgKGxldCBbcHV0dGVyICgucG9wIHB1dHMpXVxuICAgICAgICAod2hlbi1ub3QgKG5pbD8gcHV0dGVyKVxuICAgICAgICAgIChsZXQgW15ub3QtbmF0aXZlIHB1dC1oYW5kbGVyICguLWhhbmRsZXIgcHV0dGVyKVxuICAgICAgICAgICAgICAgIHZhbCAoLi12YWwgcHV0dGVyKV1cbiAgICAgICAgICAgIChpZiBeYm9vbGVhbiAoaW1wbC9hY3RpdmU/IHB1dC1oYW5kbGVyKVxuICAgICAgICAgICAgICAobGV0IFtwdXQtY2IgKGltcGwvY29tbWl0IHB1dC1oYW5kbGVyKV1cbiAgICAgICAgICAgICAgICAoZGlzcGF0Y2gvcnVuICMocHV0LWNiIHRydWUpKSlcbiAgICAgICAgICAgICAgKHJlY3VyKSkpKSkpXG4gICAgKC5jbGVhbnVwIHB1dHMgKGNvbnN0YW50bHkgZmFsc2UpKVxuICAgIChpbXBsL2Nsb3NlISB0aGlzKSlcbiAgaW1wbC9Xcml0ZVBvcnRcbiAgKHB1dCEgW3RoaXMgdmFsIF5ub3QtbmF0aXZlIGhhbmRsZXJdXG4gICAgKGFzc2VydCAobm90IChuaWw/IHZhbCkpIFwiQ2FuJ3QgcHV0IG5pbCBpbiBvbiBhIGNoYW5uZWxcIilcbiAgICA7OyBidWcgaW4gQ0xKUyBjb21waWxlciBib29sZWFuIGluZmVyZW5jZSAtIERhdmlkXG4gICAgKGxldCBbXmJvb2xlYW4gY2xvc2VkIGNsb3NlZF1cbiAgICAgIChpZiAob3IgY2xvc2VkIChub3QgXmJvb2xlYW4gKGltcGwvYWN0aXZlPyBoYW5kbGVyKSkpXG4gICAgICAgIChib3ggKG5vdCBjbG9zZWQpKVxuICAgICAgICAoaWYgKGFuZCBidWYgKG5vdCAoaW1wbC9mdWxsPyBidWYpKSlcbiAgICAgICAgICAoZG9cbiAgICAgICAgICAgIChpbXBsL2NvbW1pdCBoYW5kbGVyKVxuICAgICAgICAgICAgKGxldCBbZG9uZT8gKHJlZHVjZWQ/IChhZGQhIGJ1ZiB2YWwpKVxuICAgICAgICAgICAgICAgICAgdGFrZS1jYnMgKGxvb3AgW3Rha2VycyBbXV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlmIChhbmQgKHBvcz8gKC4tbGVuZ3RoIHRha2VzKSkgKHBvcz8gKGNvdW50IGJ1ZikpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsZXQgW15ub3QtbmF0aXZlIHRha2VyICgucG9wIHRha2VzKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpZiBeYm9vbGVhbiAoaW1wbC9hY3RpdmU/IHRha2VyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobGV0IFtyZXQgKGltcGwvY29tbWl0IHRha2VyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwgKGltcGwvcmVtb3ZlISBidWYpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZWN1ciAoY29uaiB0YWtlcnMgKGZuIFtdIChyZXQgdmFsKSkpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlY3VyIHRha2VycykpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRha2VycykpXVxuICAgICAgICAgICAgICAod2hlbiBkb25lPyAoYWJvcnQgdGhpcykpXG4gICAgICAgICAgICAgICh3aGVuIChzZXEgdGFrZS1jYnMpXG4gICAgICAgICAgICAgICAgKGRvc2VxIFtmIHRha2UtY2JzXVxuICAgICAgICAgICAgICAgICAgKGRpc3BhdGNoL3J1biBmKSkpXG4gICAgICAgICAgICAgIChib3ggdHJ1ZSkpKVxuICAgICAgICAgIChsZXQgW3Rha2VyIChsb29wIFtdXG4gICAgICAgICAgICAgICAgICAgICAgICAobGV0IFtebm90LW5hdGl2ZSB0YWtlciAoLnBvcCB0YWtlcyldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICh3aGVuIHRha2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlmIChpbXBsL2FjdGl2ZT8gdGFrZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWtlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlY3VyKSkpKSldXG4gICAgICAgICAgICAoaWYgdGFrZXJcbiAgICAgICAgICAgICAgKGxldCBbdGFrZS1jYiAoaW1wbC9jb21taXQgdGFrZXIpXVxuICAgICAgICAgICAgICAgIChpbXBsL2NvbW1pdCBoYW5kbGVyKVxuICAgICAgICAgICAgICAgIChkaXNwYXRjaC9ydW4gKGZuIFtdICh0YWtlLWNiIHZhbCkpKVxuICAgICAgICAgICAgICAgIChib3ggdHJ1ZSkpXG4gICAgICAgICAgICAgIChkb1xuICAgICAgICAgICAgICAgIChpZiAoPiBkaXJ0eS1wdXRzIE1BWF9ESVJUWSlcbiAgICAgICAgICAgICAgICAgIChkbyAoc2V0ISBkaXJ0eS1wdXRzIDApXG4gICAgICAgICAgICAgICAgICAgICAgKC5jbGVhbnVwIHB1dHMgcHV0LWFjdGl2ZT8pKVxuICAgICAgICAgICAgICAgICAgKHNldCEgZGlydHktcHV0cyAoaW5jIGRpcnR5LXB1dHMpKSlcbiAgICAgICAgICAgICAgICAod2hlbiAoaW1wbC9ibG9ja2FibGU/IGhhbmRsZXIpXG4gICAgICAgICAgICAgICAgICAoYXNzZXJ0ICg8ICguLWxlbmd0aCBwdXRzKSBpbXBsL01BWC1RVUVVRS1TSVpFKVxuICAgICAgICAgICAgICAgICAgICAoc3RyIFwiTm8gbW9yZSB0aGFuIFwiIGltcGwvTUFYLVFVRVVFLVNJWkVcbiAgICAgICAgICAgICAgICAgICAgICAgICBcIiBwZW5kaW5nIHB1dHMgYXJlIGFsbG93ZWQgb24gYSBzaW5nbGUgY2hhbm5lbC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFwiIENvbnNpZGVyIHVzaW5nIGEgd2luZG93ZWQgYnVmZmVyLlwiKSlcbiAgICAgICAgICAgICAgICAgICgudW5ib3VuZGVkLXVuc2hpZnQgcHV0cyAoUHV0Qm94LiBoYW5kbGVyIHZhbCkpKVxuICAgICAgICAgICAgICAgIG5pbCkpKSkpKSlcbiAgaW1wbC9SZWFkUG9ydFxuICAodGFrZSEgW3RoaXMgXm5vdC1uYXRpdmUgaGFuZGxlcl1cbiAgICAoaWYgKG5vdCBeYm9vbGVhbiAoaW1wbC9hY3RpdmU/IGhhbmRsZXIpKVxuICAgICAgbmlsXG4gICAgICAoaWYgKGFuZCAobm90IChuaWw/IGJ1ZikpIChwb3M/IChjb3VudCBidWYpKSlcbiAgICAgICAgKGRvXG4gICAgICAgICAgKGlmLWxldCBbdGFrZS1jYiAoaW1wbC9jb21taXQgaGFuZGxlcildXG4gICAgICAgICAgICAobGV0IFt2YWwgKGltcGwvcmVtb3ZlISBidWYpXG4gICAgICAgICAgICAgICAgICBbZG9uZT8gY2JzXSAod2hlbiAocG9zPyAoLi1sZW5ndGggcHV0cykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsb29wIFtjYnMgW11dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGxldCBbcHV0dGVyICgucG9wIHB1dHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXm5vdC1uYXRpdmUgcHV0LWhhbmRsZXIgKC4taGFuZGxlciBwdXR0ZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsICguLXZhbCBwdXR0ZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2IgKGFuZCBeYm9vbGVhbiAoaW1wbC9hY3RpdmU/IHB1dC1oYW5kbGVyKSAoaW1wbC9jb21taXQgcHV0LWhhbmRsZXIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNicyAoaWYgY2IgKGNvbmogY2JzIGNiKSBjYnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZT8gKHdoZW4gY2IgKHJlZHVjZWQ/IChhZGQhIGJ1ZiB2YWwpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaWYgKGFuZCAobm90IGRvbmU/KSAobm90IChpbXBsL2Z1bGw/IGJ1ZikpIChwb3M/ICguLWxlbmd0aCBwdXRzKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZWN1ciBjYnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkb25lPyBjYnNdKSkpKV1cbiAgICAgICAgICAgICAgKHdoZW4gZG9uZT9cbiAgICAgICAgICAgICAgICAoYWJvcnQgdGhpcykpXG4gICAgICAgICAgICAgIChkb3NlcSBbY2IgY2JzXVxuICAgICAgICAgICAgICAgIChkaXNwYXRjaC9ydW4gIyhjYiB0cnVlKSkpXG4gICAgICAgICAgICAgIChib3ggdmFsKSkpKVxuICAgICAgICAobGV0IFtwdXR0ZXIgKGxvb3AgW11cbiAgICAgICAgICAgICAgICAgICAgICAgKGxldCBbcHV0dGVyICgucG9wIHB1dHMpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICh3aGVuIHB1dHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlmIF5ib29sZWFuIChpbXBsL2FjdGl2ZT8gKC4taGFuZGxlciBwdXR0ZXIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXR0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlY3VyKSkpKSldXG4gICAgICAgICAgKGlmIHB1dHRlclxuICAgICAgICAgICAgKGxldCBbcHV0LWNiIChpbXBsL2NvbW1pdCAoLi1oYW5kbGVyIHB1dHRlcikpXVxuICAgICAgICAgICAgICAoaW1wbC9jb21taXQgaGFuZGxlcilcbiAgICAgICAgICAgICAgKGRpc3BhdGNoL3J1biAjKHB1dC1jYiB0cnVlKSlcbiAgICAgICAgICAgICAgKGJveCAoLi12YWwgcHV0dGVyKSkpXG4gICAgICAgICAgICAoaWYgY2xvc2VkXG4gICAgICAgICAgICAgIChkb1xuICAgICAgICAgICAgICAgICh3aGVuIGJ1ZiAoYWRkISBidWYpKVxuICAgICAgICAgICAgICAgIChpZiAoYW5kIChpbXBsL2FjdGl2ZT8gaGFuZGxlcikgKGltcGwvY29tbWl0IGhhbmRsZXIpKVxuICAgICAgICAgICAgICAgICAgKGxldCBbaGFzLXZhbCAoYW5kIGJ1ZiAocG9zPyAoY291bnQgYnVmKSkpXVxuICAgICAgICAgICAgICAgICAgICAobGV0IFt2YWwgKHdoZW4gaGFzLXZhbCAoaW1wbC9yZW1vdmUhIGJ1ZikpXVxuICAgICAgICAgICAgICAgICAgICAgIChib3ggdmFsKSkpXG4gICAgICAgICAgICAgICAgICBuaWwpKVxuICAgICAgICAgICAgICAoZG9cbiAgICAgICAgICAgICAgICAoaWYgKD4gZGlydHktdGFrZXMgTUFYX0RJUlRZKVxuICAgICAgICAgICAgICAgICAgKGRvIChzZXQhIGRpcnR5LXRha2VzIDApXG4gICAgICAgICAgICAgICAgICAgICAgKC5jbGVhbnVwIHRha2VzIGltcGwvYWN0aXZlPykpXG4gICAgICAgICAgICAgICAgICAoc2V0ISBkaXJ0eS10YWtlcyAoaW5jIGRpcnR5LXRha2VzKSkpXG4gICAgICAgICAgICAgICAgKHdoZW4gKGltcGwvYmxvY2thYmxlPyBoYW5kbGVyKVxuICAgICAgICAgICAgICAgICAgKGFzc2VydCAoPCAoLi1sZW5ndGggdGFrZXMpIGltcGwvTUFYLVFVRVVFLVNJWkUpXG4gICAgICAgICAgICAgICAgICAgIChzdHIgXCJObyBtb3JlIHRoYW4gXCIgaW1wbC9NQVgtUVVFVUUtU0laRVxuICAgICAgICAgICAgICAgICAgICAgICAgIFwiIHBlbmRpbmcgdGFrZXMgYXJlIGFsbG93ZWQgb24gYSBzaW5nbGUgY2hhbm5lbC5cIikpXG4gICAgICAgICAgICAgICAgICAoLnVuYm91bmRlZC11bnNoaWZ0IHRha2VzIGhhbmRsZXIpKVxuICAgICAgICAgICAgICAgIG5pbCkpKSkpKSlcbiAgaW1wbC9DaGFubmVsXG4gIChjbG9zZWQ/IFtfXSBjbG9zZWQpXG4gIChjbG9zZSEgW3RoaXNdXG4gICAgKGlmIF5ib29sZWFuIGNsb3NlZFxuICAgICAgICBuaWxcbiAgICAgICAgKGRvIChzZXQhIGNsb3NlZCB0cnVlKVxuICAgICAgICAgICAgKHdoZW4gKGFuZCBidWYgKHplcm8/ICguLWxlbmd0aCBwdXRzKSkpXG4gICAgICAgICAgICAgICAgICAgIChhZGQhIGJ1ZikpXG4gICAgICAgICAgICAobG9vcCBbXVxuICAgICAgICAgICAgICAobGV0IFtebm90LW5hdGl2ZSB0YWtlciAoLnBvcCB0YWtlcyldXG4gICAgICAgICAgICAgICAgKHdoZW4tbm90IChuaWw/IHRha2VyKVxuICAgICAgICAgICAgICAgICAgKHdoZW4gXmJvb2xlYW4gKGltcGwvYWN0aXZlPyB0YWtlcilcbiAgICAgICAgICAgICAgICAgICAgKGxldCBbdGFrZS1jYiAoaW1wbC9jb21taXQgdGFrZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCAod2hlbiAoYW5kIGJ1ZiAocG9zPyAoY291bnQgYnVmKSkpIChpbXBsL3JlbW92ZSEgYnVmKSldXG4gICAgICAgICAgICAgICAgICAgICAgKGRpc3BhdGNoL3J1biAoZm4gW10gKHRha2UtY2IgdmFsKSkpKSlcbiAgICAgICAgICAgICAgICAgIChyZWN1cikpKSlcbiAgICAgICAgICAgICh3aGVuIGJ1ZiAoaW1wbC9jbG9zZS1idWYhIGJ1ZikpXG4gICAgICAgICAgICBuaWwpKSkpXG5cbihkZWZuLSBleC1oYW5kbGVyIFtleF1cbiAgKC5sb2cganMvY29uc29sZSBleClcbiAgbmlsKVxuXG4oZGVmbi0gaGFuZGxlIFtidWYgZXhoIHRdXG4gIChsZXQgW2Vsc2UgKChvciBleGggZXgtaGFuZGxlcikgdCldXG4gICAgKGlmIChuaWw/IGVsc2UpXG4gICAgICBidWZcbiAgICAgIChpbXBsL2FkZCEgYnVmIGVsc2UpKSkpXG5cbihkZWZuIGNoYW5cbiAgKFtidWZdIChjaGFuIGJ1ZiBuaWwpKVxuICAoW2J1ZiB4Zm9ybV0gKGNoYW4gYnVmIHhmb3JtIG5pbCkpXG4gIChbYnVmIHhmb3JtIGV4aF1cbiAgICAgKE1hbnlUb01hbnlDaGFubmVsLiAoYnVmZmVycy9yaW5nLWJ1ZmZlciAzMikgMCAoYnVmZmVycy9yaW5nLWJ1ZmZlciAzMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAwIGJ1ZiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgIChsZXQgW2FkZCEgKGlmIHhmb3JtICh4Zm9ybSBpbXBsL2FkZCEpIGltcGwvYWRkISldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoZm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFtidWZdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodHJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhZGQhIGJ1ZilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhdGNoIDpkZWZhdWx0IHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaGFuZGxlIGJ1ZiBleGggdCkpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFtidWYgdmFsXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYWRkISBidWYgdmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2F0Y2ggOmRlZmF1bHQgdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChoYW5kbGUgYnVmIGV4aCB0KSkpKSkpKSkpXG4iXX0=