(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fb87b8d"],{"00b4":function(e,t,r){"use strict";r("ac1f");var a=r("23e7"),s=r("da84"),n=r("c65b"),i=r("e330"),o=r("1626"),c=r("861d"),u=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),l=s.Error,d=i(/./.test);a({target:"RegExp",proto:!0,forced:!u},{test:function(e){var t=this.exec;if(!o(t))return d(this,e);var r=n(t,this,e);if(null!==r&&!c(r))throw new l("RegExp exec method returned something other than an Object or null");return!!r}})},"107c":function(e,t,r){var a=r("d039"),s=r("da84"),n=s.RegExp;e.exports=a((function(){var e=n("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"32c7":function(e,t,r){"use strict";r("c67d")},9263:function(e,t,r){"use strict";var a=r("c65b"),s=r("e330"),n=r("577e"),i=r("ad6d"),o=r("9f7f"),c=r("5692"),u=r("7c73"),l=r("69f3").get,d=r("fce3"),m=r("107c"),p=c("native-string-replace",String.prototype.replace),f=RegExp.prototype.exec,v=f,g=s("".charAt),w=s("".indexOf),h=s("".replace),x=s("".slice),b=function(){var e=/a/,t=/b*/g;return a(f,e,"a"),a(f,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),k=o.UNSUPPORTED_Y||o.BROKEN_CARET,P=void 0!==/()??/.exec("")[1],E=b||P||k||d||m;E&&(v=function(e){var t,r,s,o,c,d,m,E=this,C=l(E),N=n(e),R=C.raw;if(R)return R.lastIndex=E.lastIndex,t=a(v,R,N),E.lastIndex=R.lastIndex,t;var y=C.groups,U=k&&E.sticky,_=a(i,E),I=E.source,$=0,O=N;if(U&&(_=h(_,"y",""),-1===w(_,"g")&&(_+="g"),O=x(N,E.lastIndex),E.lastIndex>0&&(!E.multiline||E.multiline&&"\n"!==g(N,E.lastIndex-1))&&(I="(?: "+I+")",O=" "+O,$++),r=new RegExp("^(?:"+I+")",_)),P&&(r=new RegExp("^"+I+"$(?!\\s)",_)),b&&(s=E.lastIndex),o=a(f,U?r:E,O),U?o?(o.input=x(o.input,$),o[0]=x(o[0],$),o.index=E.lastIndex,E.lastIndex+=o[0].length):E.lastIndex=0:b&&o&&(E.lastIndex=E.global?o.index+o[0].length:s),P&&o&&o.length>1&&a(p,o[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(o[c]=void 0)})),o&&y)for(o.groups=d=u(null),c=0;c<y.length;c++)m=y[c],d[m[0]]=o[m[1]];return o}),e.exports=v},"9f7f":function(e,t,r){var a=r("d039"),s=r("da84"),n=s.RegExp;t.UNSUPPORTED_Y=a((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a584:function(e,t,r){"use strict";r("e720")},ac1f:function(e,t,r){"use strict";var a=r("23e7"),s=r("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==s},{exec:s})},ad6d:function(e,t,r){"use strict";var a=r("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},c67d:function(e,t,r){},da5c:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("div",{staticClass:"side"},[r("NavBar")],1),r("div",{staticClass:"main"},[r("UserForm")],1),r("div",{staticClass:"modal"},[r("CreateNewTweetModal",{directives:[{name:"show",rawName:"v-show",value:e.openCreateNewTweetModal,expression:"openCreateNewTweetModal"}]})],1)])},s=[],n=r("5530"),i=r("d000"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"page-title"},[e._v("帳戶設定")]),r("div",{staticClass:"page-content"},[r("form",{staticClass:"page-content-form",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"account"}},[e._v("帳號")]),r("span",{staticClass:"symbol"},[e._v("@")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.user.account,expression:"user.account",modifiers:{trim:!0}}],attrs:{type:"text",id:"account",name:"account"},domProps:{value:e.user.account},on:{input:function(t){t.target.composing||e.$set(e.user,"account",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{staticClass:"form-group",class:{"input-error":e.nameLengthError}},[r("label",{attrs:{for:"name"}},[e._v("名稱")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.user.name,expression:"user.name",modifiers:{trim:!0}}],attrs:{type:"text",id:"name",name:"name"},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.nameLengthError,expression:"nameLengthError"}],staticClass:"error-message"},[e._v("字數超出上限")])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.user.email,expression:"user.email",modifiers:{trim:!0}}],attrs:{type:"text",id:"email",name:"email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[e._v("密碼")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.user.password,expression:"user.password",modifiers:{trim:!0}}],attrs:{type:"password",id:"password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"checkPassword"}},[e._v("密碼確認")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.user.checkPassword,expression:"user.checkPassword",modifiers:{trim:!0}}],attrs:{type:"password",id:"checkPassword",name:"checkPassword"},domProps:{value:e.user.checkPassword},on:{input:function(t){t.target.composing||e.$set(e.user,"checkPassword",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{staticClass:"button-wrapper"},[r("button",{staticClass:"form-button",attrs:{type:"submit",disabled:e.isProcessing||e.nameLengthError}},[e._v(" "+e._s(e.isProcessing?"處理中":"儲存")+" ")])])])])])},c=[],u=r("1da1"),l=(r("96cf"),r("b0c0"),r("ac1f"),r("00b4"),r("2f62")),d=r("2fa3"),m=r("4cce"),p={name:"UserForm",data:function(){return{user:{id:-1,name:"",account:"",email:"",password:"",checkPassword:""},isProcessing:!1,nameLengthError:!1}},methods:{fetchUser:function(){var e=this.currentUser,t=e.id,r=e.account,a=e.name,s=e.email;this.user=Object(n["a"])(Object(n["a"])({},this.user),{},{id:t,name:a,email:s,account:r})},handleSubmit:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r,a,s,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.user.account){t.next=6;break}return d["a"].fire({icon:"warning",title:"請填寫註冊帳號"}),t.abrupt("return");case 6:if(e.user.name){t.next=11;break}return d["a"].fire({icon:"warning",title:"請填寫註冊名稱"}),t.abrupt("return");case 11:if(!(e.user.name.length>50)){t.next=16;break}return d["a"].fire({icon:"warning",title:"名稱字數超出上限"}),t.abrupt("return");case 16:if(e.user.email){t.next=21;break}return d["a"].fire({icon:"warning",title:"請填寫註冊信箱"}),t.abrupt("return");case 21:if(e.user.password&&e.user.checkPassword){t.next=26;break}return d["a"].fire({icon:"warning",title:"請填寫密碼"}),t.abrupt("return");case 26:if(e.user.password===e.user.checkPassword){t.next=31;break}return d["a"].fire({icon:"warning",title:"密碼與密碼確認不同，請重新輸入"}),e.user.password="",e.user.checkPassword="",t.abrupt("return");case 31:if(r=/[\w-]+@([\w-]+\.)+[\w-]+/,1==r.test(e.user.email)){t.next=35;break}return d["a"].fire({icon:"warning",title:"email格式錯誤"}),t.abrupt("return");case 35:return e.isProcessing=!0,a={account:e.user.account,name:e.user.name,email:e.user.email,password:e.user.password,checkPassword:e.user.checkPassword},t.next=39,m["a"].update({userId:e.user.id,formData:a});case 39:if(s=t.sent,n=s.data,"success"===n.status){t.next=43;break}throw new Error(n.message);case 43:e.isProcessing=!1,d["a"].fire({icon:"success",title:"資料修改成功"}),e.user.password="",e.user.checkPassword="",e.$store.commit("setCurrentUser",e.user),t.next=55;break;case 50:t.prev=50,t.t0=t["catch"](0),e.isProcessing=!1,i=t.t0.response.data,d["a"].fire({icon:"error",title:i.message});case 55:case"end":return t.stop()}}),t,null,[[0,50]])})))()}},created:function(){this.fetchUser()},computed:Object(n["a"])({},Object(l["d"])(["currentUser"])),watch:{"user.name":function(){this.user.name.length>50?this.nameLengthError=!0:this.nameLengthError=!1}}},f=p,v=(r("32c7"),r("2877")),g=Object(v["a"])(f,o,c,!1,null,"09a18140",null),w=g.exports,h=r("2791"),x={name:"UserEdit",components:{NavBar:i["a"],UserForm:w,CreateNewTweetModal:h["a"]},computed:Object(n["a"])({},Object(l["d"])(["openCreateNewTweetModal"])),sockets:{messageNotRead:function(e){this.$store.commit("updateReadMessage",e)}}},b=x,k=(r("a584"),Object(v["a"])(b,a,s,!1,null,"1db13d32",null));t["default"]=k.exports},e720:function(e,t,r){},fce3:function(e,t,r){var a=r("d039"),s=r("da84"),n=s.RegExp;e.exports=a((function(){var e=n(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-3fb87b8d.25ac80fa.js.map