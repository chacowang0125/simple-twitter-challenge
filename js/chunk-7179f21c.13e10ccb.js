(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7179f21c"],{"00b4":function(e,r,t){"use strict";t("ac1f");var a=t("23e7"),n=t("da84"),s=t("c65b"),i=t("e330"),o=t("1626"),u=t("861d"),c=function(){var e=!1,r=/[ac]/;return r.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===r.test("abc")&&e}(),l=n.Error,d=i(/./.test);a({target:"RegExp",proto:!0,forced:!c},{test:function(e){var r=this.exec;if(!o(r))return d(this,e);var t=s(r,this,e);if(null!==t&&!u(t))throw new l("RegExp exec method returned something other than an Object or null");return!!t}})},"107c":function(e,r,t){var a=t("d039"),n=t("da84"),s=n.RegExp;e.exports=a((function(){var e=s("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"3a36":function(e,r,t){"use strict";t("4bda")},"4bda":function(e,r,t){},"5c9c":function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"container"},[e._m(0),t("div",{staticClass:"signup-title"},[e._v("建立你的帳號")]),t("div",{staticClass:"page-content"},[t("form",{attrs:{action:"post"}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"account"}},[e._v("帳號")]),t("span",{staticClass:"symbol"},[e._v("@")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.user.account,expression:"user.account",modifiers:{trim:!0}}],attrs:{type:"text",id:"account",name:"account",required:""},domProps:{value:e.user.account},on:{input:function(r){r.target.composing||e.$set(e.user,"account",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}})]),t("div",{staticClass:"form-group",class:{"input-error":e.nameLengthError}},[t("label",{attrs:{for:"name"}},[e._v("名稱")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.user.name,expression:"user.name",modifiers:{trim:!0}}],attrs:{type:"text",id:"name",name:"name",required:""},domProps:{value:e.user.name},on:{input:function(r){r.target.composing||e.$set(e.user,"name",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.nameLengthError,expression:"nameLengthError"}],staticClass:"error-message"},[e._v("字數超出上限")])]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"email"}},[e._v("Email")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.user.email,expression:"user.email",modifiers:{trim:!0}}],attrs:{type:"text",id:"email",name:"email",required:""},domProps:{value:e.user.email},on:{input:function(r){r.target.composing||e.$set(e.user,"email",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"password"}},[e._v("密碼")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.user.password,expression:"user.password",modifiers:{trim:!0}}],attrs:{type:"password",id:"password",name:"password",required:""},domProps:{value:e.user.password},on:{input:function(r){r.target.composing||e.$set(e.user,"password",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"checkPassword"}},[e._v("密碼確認")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.user.checkPassword,expression:"user.checkPassword",modifiers:{trim:!0}}],attrs:{type:"password",id:"checkPassword",name:"checkPassword",required:""},domProps:{value:e.user.checkPassword},on:{input:function(r){r.target.composing||e.$set(e.user,"checkPassword",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}})])]),t("div",{staticClass:"button-wrapper"},[t("button",{staticClass:"form-button",attrs:{disabled:e.isProcessing||e.nameLengthError},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[e._v(" "+e._s(e.isProcessing?"發送中":"註冊")+" ")]),t("router-link",{attrs:{to:"/signin"}},[t("div",{staticClass:"cancel-button"},[e._v("取消")])])],1)])])},n=[function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",[a("img",{staticClass:"logo",attrs:{src:t("e347"),alt:"logo"}})])}],s=t("1da1"),i=(t("96cf"),t("b0c0"),t("ac1f"),t("00b4"),t("7696")),o=t("2fa3"),u={name:"UserForm",data:function(){return{user:{name:"",account:"",email:"",password:"",checkPassword:""},isProcessing:!1,nameLengthError:!1}},methods:{handleSubmit:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var t,a,n,s,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,e.user.account){r.next=6;break}return o["a"].fire({icon:"warning",title:"請填寫註冊帳號"}),r.abrupt("return");case 6:if(e.user.name){r.next=11;break}return o["a"].fire({icon:"warning",title:"請填寫註冊名稱"}),r.abrupt("return");case 11:if(!(e.user.name.length>50)){r.next=16;break}return o["a"].fire({icon:"warning",title:"名稱超過字數上限"}),r.abrupt("return");case 16:if(e.user.email){r.next=21;break}return o["a"].fire({icon:"warning",title:"請填寫註冊信箱"}),r.abrupt("return");case 21:if(e.user.email){r.next=26;break}return o["a"].fire({icon:"warning",title:"請填寫註冊信箱"}),r.abrupt("return");case 26:if(e.user.password&&e.user.checkPassword){r.next=31;break}return o["a"].fire({icon:"warning",title:"請填寫註冊密碼"}),r.abrupt("return");case 31:if(e.user.password===e.user.checkPassword){r.next=36;break}return o["a"].fire({icon:"warning",title:"密碼與密碼確認不同，請重新輸入"}),e.user.password="",e.user.checkPassword="",r.abrupt("return");case 36:if(t=/[\w-]+@([\w-]+\.)+[\w-]+/,1==t.test(e.user.email)){r.next=40;break}return o["a"].fire({icon:"warning",title:"email格式錯誤"}),r.abrupt("return");case 40:return a={name:e.user.name,account:e.user.account,email:e.user.email,password:e.user.password,checkPassword:e.user.checkPassword},e.isProcessing=!0,r.next=44,i["a"].signup({formData:a});case 44:if(n=r.sent,s=n.data,"success"===s.status){r.next=48;break}throw new Error(s.message);case 48:e.isProcessing=!1,o["a"].fire({icon:"success",title:"註冊成功"}),e.$router.push({name:"SignIn"}),r.next=58;break;case 53:r.prev=53,r.t0=r["catch"](0),e.isProcessing=!1,u=r.t0.response.data,o["a"].fire({icon:"error",title:u.message});case 58:case"end":return r.stop()}}),r,null,[[0,53]])})))()}},watch:{"user.name":function(){this.user.name.length>50?this.nameLengthError=!0:this.nameLengthError=!1}}},c=u,l=(t("3a36"),t("2877")),d=Object(l["a"])(c,a,n,!1,null,"0db865c6",null);r["default"]=d.exports},9263:function(e,r,t){"use strict";var a=t("c65b"),n=t("e330"),s=t("577e"),i=t("ad6d"),o=t("9f7f"),u=t("5692"),c=t("7c73"),l=t("69f3").get,d=t("fce3"),m=t("107c"),p=u("native-string-replace",String.prototype.replace),f=RegExp.prototype.exec,g=f,v=n("".charAt),x=n("".indexOf),w=n("".replace),b=n("".slice),h=function(){var e=/a/,r=/b*/g;return a(f,e,"a"),a(f,r,"a"),0!==e.lastIndex||0!==r.lastIndex}(),k=o.UNSUPPORTED_Y||o.BROKEN_CARET,P=void 0!==/()??/.exec("")[1],E=h||P||k||d||m;E&&(g=function(e){var r,t,n,o,u,d,m,E=this,_=l(E),C=s(e),I=_.raw;if(I)return I.lastIndex=E.lastIndex,r=a(g,I,C),E.lastIndex=I.lastIndex,r;var R=_.groups,y=k&&E.sticky,$=a(i,E),N=E.source,U=0,O=C;if(y&&($=w($,"y",""),-1===x($,"g")&&($+="g"),O=b(C,E.lastIndex),E.lastIndex>0&&(!E.multiline||E.multiline&&"\n"!==v(C,E.lastIndex-1))&&(N="(?: "+N+")",O=" "+O,U++),t=new RegExp("^(?:"+N+")",$)),P&&(t=new RegExp("^"+N+"$(?!\\s)",$)),h&&(n=E.lastIndex),o=a(f,y?t:E,O),y?o?(o.input=b(o.input,U),o[0]=b(o[0],U),o.index=E.lastIndex,E.lastIndex+=o[0].length):E.lastIndex=0:h&&o&&(E.lastIndex=E.global?o.index+o[0].length:n),P&&o&&o.length>1&&a(p,o[0],t,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)})),o&&R)for(o.groups=d=c(null),u=0;u<R.length;u++)m=R[u],d[m[0]]=o[m[1]];return o}),e.exports=g},"9f7f":function(e,r,t){var a=t("d039"),n=t("da84"),s=n.RegExp;r.UNSUPPORTED_Y=a((function(){var e=s("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),r.BROKEN_CARET=a((function(){var e=s("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,r,t){"use strict";var a=t("23e7"),n=t("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(e,r,t){"use strict";var a=t("825a");e.exports=function(){var e=a(this),r="";return e.global&&(r+="g"),e.ignoreCase&&(r+="i"),e.multiline&&(r+="m"),e.dotAll&&(r+="s"),e.unicode&&(r+="u"),e.sticky&&(r+="y"),r}},fce3:function(e,r,t){var a=t("d039"),n=t("da84"),s=n.RegExp;e.exports=a((function(){var e=s(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-7179f21c.13e10ccb.js.map