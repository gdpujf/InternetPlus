(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/you-scroll"],{"0192":function(t,e,n){"use strict";var o=n("5670"),l=n.n(o);l.a},"501b":function(t,e,n){"use strict";n.r(e);var o=n("596a"),l=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=l.a},5670:function(t,e,n){},"596a":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{scrollToTop:0,scrollTop:0,oldTop:0,sPageY:0,mPageY:0,ePageY:0,translateY:0,pullDownStatus:1,isDown:!1}},props:{pullDownDistance:{type:Number,default:50},reachBottomDistance:{type:Number,default:30},downPullToRefresh:{type:String,default:"下拉刷新"},downReleaseToRefresh:{type:String,default:"松开刷新"},downRefreshing:{type:String,default:"刷新中…"}},methods:{startFn:function(t){this.isDown=!0,this.sPageY=t.changedTouches[0].pageY,this.pointY=this.translateY},moveFn:function(e){var n=this,o=t.createSelectorQuery().in(this).select(".you-scroll-inner");o.fields({size:!0,scrollOffset:!0},function(t){if(n.scrollTop=t.scrollTop,n.mPageY=e.changedTouches[0].pageY,n.scrollTop<=0){var o=(n.mPageY-n.sPageY)/2+n.pointY;n.translateY=o<0?0:o,3!=n.pullDownStatus&&(n.translateY<n.pullDownDistance?n.pullDownStatus=1:n.translateY>=n.pullDownDistance&&(n.pullDownStatus=2))}}).exec()},endFn:function(t){var e=this;this.isDown=!1,this.ePageY=t.changedTouches[0].pageY,setTimeout(function(){e.translateY=e.translateY>=e.pullDownDistance?e.pullDownDistance:0,2==e.pullDownStatus&&(e.pullDownStatus=3,e.$emit("onPullDown",e.endPullDown))},100)},endPullDown:function(t){var e=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.translateY=0,e.pullDownStatus=1},t||0)},prevent:function(t){this.translateY>0&&t.preventDefault()},scroll:function(t){var e=this;this.$emit("onScroll",t),this.oldTop=t.detail.scrollTop,this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.scrolltolower(t)},20)},scrolltolower:function(e){var n=this,o=t.createSelectorQuery().in(this).select(".you-scroll-inner");o.fields({size:!0,scrollOffset:!0},function(t){t.scrollTop>=e.detail.scrollHeight-t.height-n.reachBottomDistance&&n.$emit("onLoadMore",e)}).exec()},isWeixinCient:function(){var t=navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/MicroMessenger/i)},goTop:function(t){this.scrollToTop=this.oldTop,this.$nextTick(function(){this.scrollToTop=t||0})}},mounted:function(){},destroyed:function(){}};e.default=n}).call(this,n("6e42")["default"])},"80f8":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,o=(t._self._c,n("b25a"));t.$mp.data=Object.assign({},{$root:{m0:o}})},l=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return l})},c482:function(t,e,n){"use strict";n.r(e);var o=n("80f8"),l=n("501b");for(var s in l)"default"!==s&&function(t){n.d(e,t,function(){return l[t]})}(s);n("0192");var i=n("2877"),a=Object(i["a"])(l["default"],o["a"],o["b"],!1,null,"23e48b64",null);e["default"]=a.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/you-scroll-create-component',
    {
        'components/you-scroll-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("c482"))
        })
    },
    [['components/you-scroll-create-component']]
]);                
