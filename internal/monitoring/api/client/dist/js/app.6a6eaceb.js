(function(t){function e(e){for(var n,u,s=e[0],i=e[1],l=e[2],v=0,f=[];v<s.length;v++)u=s[v],a[u]&&f.push(a[u][0]),a[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);c&&c(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var i=r[s];0!==a[i]&&(n=!1)}n&&(o.splice(e--,1),t=u(u.s=r[0]))}return t}var n={},a={1:0},o=[];function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=t,u.c=n,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(r,n,function(e){return t[e]}.bind(null,n));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=i;o.push([2,0]),r()})({2:function(t,e,r){t.exports=r("Vtdi")},"3FUn":function(t,e,r){"use strict";var n=r("TpYw"),a=r.n(n);a.a},EDI0:function(t,e,r){},TpYw:function(t,e,r){},Vtdi:function(t,e,r){"use strict";r.r(e);r("VRzm");var n=r("Kw5r"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),r("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),r("router-view")],1)},o=[],u=(r("ZL7j"),r("KHd+")),s={},i=Object(u["a"])(s,a,o,!1,null,null,null),l=i.exports,c=r("jE9Z"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{src:r("zwU1")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},f=[],p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),t._m(0),r("h3",[t._v("Installed CLI Plugins")]),t._m(1),r("h3",[t._v("Essential Links")]),t._m(2),r("h3",[t._v("Ecosystem")]),t._m(3),r("p",[t._v("My Test "+t._s(t.text))])])},h=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("\n    For guide and recipes on how to configure / customize this project,"),r("br"),t._v("\n    check out the\n    "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank"}},[t._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank"}},[t._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank"}},[t._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank"}},[t._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank"}},[t._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}],m={name:"HelloWorld",props:{msg:String},computed:{text:function(){return this.$store.state.images.images}},mounted:function(){this.$store.dispatch("getImages")}},_=m,g=(r("3FUn"),Object(u["a"])(_,p,h,!1,null,"ec3a15a2",null)),d=g.exports,b={name:"home",components:{HelloWorld:d}},j=b,w=Object(u["a"])(j,v,f,!1,null,null,null),k=w.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("h1",[t._v("This is an about page")])])}],x={},O=Object(u["a"])(x,y,E,!1,null,null,null),$=O.exports;n["a"].use(c["a"]);var P=new c["a"]({routes:[{path:"/",name:"home",component:k},{path:"/about",name:"about",component:$}]}),I=r("L2JU"),T=r("vDqi"),S=r.n(T),D=function(){return S.a.get("http://0.0.0.0:8080/api/").then(function(t){return Promise.resolve(t.data)}).catch(function(t){return Promise.reject(t)})},C={getImages:D},M={images:"asd"},U={getImages:function(t){C.getImages().then(function(e){return t.commit("IMAGES_UPDATED",e)}).catch(function(t){return console.error(t)})}},A={IMAGES_UPDATED:function(t,e){t.images=e}},H={},L={state:M,getters:H,actions:U,mutations:A};n["a"].use(I["a"]);var z=new I["a"].Store({modules:{images:L}});n["a"].config.productionTip=!1,new n["a"]({router:P,store:z,render:function(t){return t(l)}}).$mount("#app")},ZL7j:function(t,e,r){"use strict";var n=r("EDI0"),a=r.n(n);a.a},zwU1:function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.6a6eaceb.js.map