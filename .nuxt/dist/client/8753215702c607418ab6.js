(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{569:function(t,e,r){var content=r(589);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("3f8aeb9e",content,!0,{sourceMap:!1})},588:function(t,e,r){"use strict";var n=r(569);r.n(n).a},589:function(t,e,r){(t.exports=r(18)(!1)).push([t.i,".slide-left-enter-active,.slide-left-leave-active,.slide-right-enter-active,.slide-right-leave-active{transition-duration:.35s;transition-property:height,opacity,-webkit-transform;transition-property:height,opacity,transform;transition-property:height,opacity,transform,-webkit-transform;transition-timing-function:cubic-bezier(.55,0,.1,1);overflow:hidden}.slide-left-enter,.slide-right-leave-active{opacity:0;-webkit-transform:translate(2em);transform:translate(2em)}.slide-left-leave-active,.slide-right-enter{opacity:0;-webkit-transform:translate(-2em);transform:translate(-2em)}",""])},602:function(t,e,r){"use strict";r.r(e);r(62);var n=r(20),o=(r(9),{data:function(){return{currentStep:"register"}},methods:{signUpQuick:function(){var t=this;this.$store.dispatch("signUpQuick",{username:this.cred.username,password:this.cred.password,email:this.cred.email,legal_name:this.cred.name}).then(function(e){t.verified=!0})}},asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,o,address,c,data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,n=e.route,e.params,o=n.query.i,address=n.query.address,t.next=5,r.get("/auth/verify/email",{params:{i:o,o:address}});case 5:return c=t.sent,data=c.data,t.abrupt("return",{verified:!0,tasks:data,address:address});case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}),c=(r(588),r(10)),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",{staticClass:"mt-2 mb-2 text-md-center",staticStyle:{"max-width":"22rem"},attrs:{"img-src":"https://picsum.photos/600/300/?image=7","img-alt":"Image","img-top":"",tag:"article"}},[r("b-card-title",[r("b-badge",{attrs:{variant:"info"}},[t._v("SKE17")]),t._v(" SOSKE Registration")],1),t._v(" "),r("h2",{staticClass:"login-heading"}),t._v(" "),r("transition",{attrs:{name:"slide-left",mode:"out-in"}},[t.verified?r("b-form",{key:"verified"},[r("hr"),t._v(" "),r("h3",[t._v("Verified ID")]),t._v(" "),r("p",[t._v("Your SOSKE-ID confirmation has been associated "),r("code",[t._v(t._s(t.address))]),t._v(" with this ID. You can now log in to SOSKE with your SOSKE-ID")]),t._v(" "),r("nuxt-link",{attrs:{to:"/login"}},[r("b-button",{attrs:{variant:"primary"}},[t._v("Proceed to Login")])],1)],1):t._e()],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);