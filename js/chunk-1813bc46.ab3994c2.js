(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1813bc46"],{"035c":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Spinner",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}]}),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}],staticClass:"container"},[0===this.likedTweets.length?a("div",{staticClass:"empty-message"},[e._v(" 使用者沒有任何喜歡推文 (ノ▼Д▼)ノ ")]):e._e(),a("div",{staticClass:"user-tweet-container"},e._l(e.likedTweets,(function(t){return a("UserLikedFeed",{key:t.id,attrs:{"initial-liked-tweet":t},on:{"after-unlike-tweet":e.afterUnlikeTweet,"after-reply-modal-click":e.afterReplyModalClick}})})),1),a("div",{staticClass:"modal"},[a("ReplyPostModal",{attrs:{tweet:e.modaltweet},on:{"after-submit":e.afterReplySubmit}})],1)])],1)},s=[],n=a("5530"),r=a("1da1"),c=(a("96cf"),a("2708")),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"tweet-card"},[i("router-link",{staticClass:"tweet-card-img",attrs:{to:{name:"tweet",params:{id:e.likedTweet.Tweet.User.id}}}},[i("img",{staticClass:"tweet-card-img",attrs:{src:e._f("emptyImage")(e.likedTweet.Tweet.User.avatar)}})]),i("div",{staticClass:"tweet-card-content"},[i("div",{staticClass:"tweet-card-content-info"},[i("span",{staticClass:"name"},[e._v(e._s(e._f("nameLength")(e.likedTweet.Tweet.User.name)))]),i("span",{staticClass:"account"},[e._v("@"+e._s(e.likedTweet.Tweet.User.account))]),i("span",{staticClass:"created-at"},[e._v(e._s(e._f("fromNow")(e.likedTweet.createdAt)))])]),i("router-link",{attrs:{to:{name:"tweets-detail",params:{id:e.likedTweet.TweetId}}}},[i("div",{staticClass:"tweet-card-content-text"},[e._v(" "+e._s(e.likedTweet.Tweet.description)+" ")])]),i("div",{staticClass:"tweet-card-content-reply"},[i("div",{staticClass:"content-reply",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.replyModalClick(e.likedTweet.TweetId)}}},[i("img",{staticClass:"content-reply-icon",attrs:{src:a("1eba")}}),i("span",{staticClass:"content-reply-number"},[e._v(e._s(e.likedTweet.Tweet.commentCounts))])]),i("div",{staticClass:"content-reply",on:{click:function(t){return e.unlike(e.likedTweet.TweetId)}}},[i("img",{staticClass:"content-reply-icon",attrs:{src:a("5263")}}),i("span",{staticClass:"content-reply-number",class:{active:1===e.likedTweet.Tweet.isLiked}},[e._v(e._s(e.likedTweet.Tweet.likeCounts))])])])],1)],1)},l=[],d=a("7482"),u=a("2fa3"),w={mixins:[c["c"],c["b"],c["d"]],name:"UserLikedFeed",props:{initialLikedTweet:{type:Object,required:!0}},data:function(){return{likedTweet:this.initialLikedTweet}},methods:{unlike:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var i,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isProcessing=!0,a.next=4,d["a"].deleteLike({tweetId:e});case 4:if(i=a.sent,s=i.data,"success"===s.status){a.next=8;break}throw new Error(s.message);case 8:t.$emit("after-unlike-tweet"),t.isProcessing=!1,a.next=16;break;case 12:a.prev=12,a.t0=a["catch"](0),t.isProcessing=!1,u["a"].fire({icon:"warning",title:a.t0.message});case 16:case"end":return a.stop()}}),a,null,[[0,12]])})))()},replyModalClick:function(e){this.$emit("after-reply-modal-click",e),console.log(e)}},watch:{initialLikedTweet:function(e){this.likedTweet=Object(n["a"])(Object(n["a"])({},this.likedTweet),e)}}},p=w,m=(a("a296"),a("2877")),f=Object(m["a"])(p,o,l,!1,null,"1bfe2706",null),k=f.exports,v=a("4cce"),h=a("2375"),g=a("2f62"),T=a("cf6a"),b={mixins:[c["c"]],name:"UserLikedView",components:{UserLikedFeed:k,Spinner:h["a"],ReplyPostModal:T["a"]},data:function(){return{likedTweets:[],isLoading:!0,modaltweet:{}}},created:function(){var e=this.$route.params.id;this.fetchLikedTweets(e)},beforeRouteUpdate:function(e,t,a){var i=e.params.id;this.fetchLikedTweets(i),a()},methods:{fetchLikedTweets:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var i,s,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,v["a"].getUserLikes({userId:e});case 3:i=a.sent,s=i.data,t.likedTweets=s,t.isLoading=!1,a.next=13;break;case 9:a.prev=9,a.t0=a["catch"](0),n=a.t0.response.data,u["a"].fire({icon:"warning",title:n.message});case 13:case"end":return a.stop()}}),a,null,[[0,9]])})))()},afterUnlikeTweet:function(){var e=this.$route.params.id;this.fetchLikedTweets(e)},afterReplyModalClick:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var i,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.$store.commit("toggleReplyPostModal"),a.next=4,d["a"].getTweet({tweetId:e});case 4:i=a.sent,s=i.data,t.modaltweet=s,console.log(s),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),u["a"].fire({icon:"warning",title:"無法取得推文資料，請稍後再試"});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()},afterReplySubmit:function(e,t){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){var s,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,d["a"].addTweetReply({tweetId:e,comment:t});case 3:if(s=i.sent,n=s.data,"success"===n.status){i.next=7;break}throw new Error(n.message);case 7:u["a"].fire({icon:"success",title:"回覆推文成功"}),a.$store.commit("toggleReplyPostModal"),a.$store.commit("toggleReplyCreated"),i.next=15;break;case 12:i.prev=12,i.t0=i["catch"](0),u["a"].fire({icon:"warning",title:"無法回覆留言，請稍後再試"});case 15:case"end":return i.stop()}}),i,null,[[0,12]])})))()}},computed:Object(n["a"])({},Object(g["c"])(["getReplyCreated"])),watch:{getReplyCreated:{deep:!0,handler:function(){var e=this.$route.params.id;this.fetchLikedTweets(e)}}}},C=b,y=(a("8d7b"),Object(m["a"])(C,i,s,!1,null,"7067d5e5",null));t["default"]=y.exports},5263:function(e,t,a){e.exports=a.p+"img/active-like-icon.b9abe96b.svg"},"65df":function(e,t,a){},8350:function(e,t,a){},"8d7b":function(e,t,a){"use strict";a("65df")},a296:function(e,t,a){"use strict";a("8350")}}]);
//# sourceMappingURL=chunk-1813bc46.ab3994c2.js.map