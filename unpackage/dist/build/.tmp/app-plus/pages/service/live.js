(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/service/live"],{"12f2":function(t,e,n){"use strict";n.r(e);var i=n("46b9"),s=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=s.a},"46b9":function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=o(n("9678"));function o(t){return t&&t.__esModule?t:{default:t}}var u=function(){return n.e("components/im-chat/chatinput").then(n.bind(null,"5dbd"))},a={components:{chatInput:u},data:function(){return{posts:s.default,user_id:4,username:"热心网友陈德华",index:"",comment_index:"",input_placeholder:"评论",focus:!1,is_reply:!1,showInput:!1,screenHeight:"",platform:"",windowHeight:"",loadMoreText:"正在获取中~",showLoadMore:!1}},mounted:function(){t.getStorage({key:"posts",success:function(t){console.log(i(t.data," at pages\\service\\live.vue:98")),this.posts=t.data}})},onLoad:function(){var e=this;t.getSystemInfo({success:function(t){e.screenHeight=t.screenHeight,e.platform=t.platform}}),t.startPullDownRefresh()},onShow:function(){var e=this;t.onWindowResize(function(t){"ios"===e.platform?(e.windowHeight=t.size.windowHeight,e.adjust()):e.screenHeight-t.size.windowHeight>60&&e.windowHeight<=t.size.windowHeight&&(e.windowHeight=t.size.windowHeight,e.adjust())})},onHide:function(){t.offWindowResize()},onUnload:function(){this.max=0,this.data=[],this.loadMoreText="加载更多",this.showLoadMore=!1},onReachBottom:function(){var t=this;console.log(i("onReachBottom"," at pages\\service\\live.vue:136")),this.showLoadMore=!0,setTimeout(function(){t.posts.length<20?t.posts=t.posts.concat(t.posts):t.loadMoreText="暂无更多"},1e3)},onPullDownRefresh:function(){console.log(i("onPullDownRefresh"," at pages\\service\\live.vue:148")),setTimeout(function(){t.stopPullDownRefresh()},1e3)},onNavigationBarButtonTap:function(t){0==t.index&&this.navigateTo("../publish/publish")},computed:{},methods:{test:function(){this.navigateTo("../test/test")},navigateTo:function(e){t.navigateTo({url:e})},like:function(t){0===this.posts[t].islike?(this.posts[t].islike=1,this.posts[t].like.push({uid:this.user_id,username:","+this.username})):(this.posts[t].islike=0,this.posts[t].like.splice(this.posts[t].like.indexOf({uid:this.user_id,username:","+this.username}),1))},comment:function(t){this.showInput=!0,this.focus=!0,this.index=t},adjust:function(){},reply:function(t,e){this.is_reply=!0,this.showInput=!0;var n=this.posts[t].comments.comment[e].username;this.input_placeholder="回复"+n,this.index=t,this.comment_index=e,this.focus=!0},blur:function(){this.init_input()},send_comment:function(t){if(this.is_reply)var e=this.posts[this.index].comments.comment[this.comment_index].username,n="回复"+e+":"+t.content;else n=t.content;this.posts[this.index].comments.total+=1,this.posts[this.index].comments.comment.push({uid:this.user_id,username:this.username,content:n}),this.init_input()},init_input:function(){this.showInput=!1,this.focus=!1,this.input_placeholder="评论",this.is_reply=!1},previewImage:function(e,n){var i=e[n];t.previewImage({current:i,urls:e})},goPublish:function(){t.navigateTo({url:"./publish/publish",success:function(t){},fail:function(){},complete:function(){}})}}};e.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},"9f8b":function(t,e,n){"use strict";n.r(e);var i=n("a5a5"),s=n("12f2");for(var o in s)"default"!==o&&function(t){n.d(e,t,function(){return s[t]})}(o);n("caaf");var u=n("2877"),a=Object(u["a"])(s["default"],i["a"],i["b"],!1,null,"4e569c50",null);e["default"]=a.exports},a5a5:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})},be28:function(t,e,n){},caaf:function(t,e,n){"use strict";var i=n("be28"),s=n.n(i);s.a},e15b:function(t,e,n){"use strict";(function(t){n("fbb4"),n("921b");i(n("66fd"));var e=i(n("9f8b"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["e15b","common/runtime","common/vendor"]]]);