(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2,6],{254:function(t,n,e){var content=e(260);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(103).default)("cb73150a",content,!0,{sourceMap:!1})},255:function(t,n,e){var content=e(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(103).default)("66421c53",content,!0,{sourceMap:!1})},256:function(t,n,e){t.exports=e.p+"img/hibiscus_logo_dark_s.be9425c.png"},257:function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAyNSAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeDE9IjYiIHkxPSI4LjUiIHgyPSIyNCIgeTI9IjguNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPGxpbmUgeDE9IjEiIHkxPSIxNS45OTk5IiB4Mj0iMjQiIHkyPSIxNS45OTk5IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8bGluZSB4MT0iMSIgeTE9IjEiIHgyPSIyNCIgeTI9IjEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo="},258:function(t,n,e){t.exports=e.p+"img/hibiscus_logo_dark_m.f5d2384.png"},259:function(t,n,e){"use strict";e(254)},260:function(t,n,e){var o=e(102)(!1);o.push([t.i,"nav a[data-v-70871b04]{display:none}nav .icon[data-v-70871b04]{display:inline-block;position:fixed;right:2rem;top:3rem}nav .menu[data-v-70871b04]{max-width:1200px;margin-right:auto;margin-left:auto;padding:2rem}@media screen and (max-width:767px){.responsive[data-v-70871b04]{background-color:#000;height:100vh}.responsive a[data-v-70871b04]{display:block;margin-bottom:2rem;margin-left:2rem}.responsive a[data-v-70871b04]:nth-child(3){margin-top:3rem}.responsive a[data-v-70871b04]:nth-child(5){display:none}.responsive a[data-v-70871b04]:not(:nth-child(2)){font-size:3rem}}@media screen and (min-width:768px){nav a[data-v-70871b04]{display:inline-block}nav .icon[data-v-70871b04],nav .logo[data-v-70871b04]{display:none}nav.fade-in[data-v-70871b04]{top:6rem}nav .menu[data-v-70871b04]{display:flex;justify-content:space-around;align-items:center}}",""]),t.exports=o},261:function(t,n,e){t.exports=e.p+"img/hibiscus_background_1.ac399b4.svg"},262:function(t,n,e){"use strict";e(255)},263:function(t,n,e){var o=e(102)(!1);o.push([t.i,"#home[data-v-a0ff3ab0]{background-color:#1e1e1e;color:#fff}#home #background_1[data-v-a0ff3ab0]{position:absolute;top:0;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}#home .content[data-v-a0ff3ab0]{position:relative;margin-top:15rem;padding:1rem 3rem 1rem 1rem}#home .content p[data-v-a0ff3ab0]{font-size:2rem;margin-bottom:3rem;font-weight:300}#home .content p[data-v-a0ff3ab0]:first-child{font-weight:700}#home .content .btn-contact[data-v-a0ff3ab0]{padding:1rem 6rem;border-radius:4rem;background:linear-gradient(275.68deg,#ff1744 -54.94%,#ff1744 -14.15%,#ff616f 34.87%,#5cc6ac 105.61%,#00ffcf 144.78%);color:#fff;text-decoration:none;text-align:center;font-size:1.5rem}@media screen and (min-width:768px){#home #background_1[data-v-a0ff3ab0]{position:absolute;top:0;height:100%;width:100%}#home .content p[data-v-a0ff3ab0]{width:50%}}",""]),t.exports=o},268:function(t,n,e){"use strict";e.r(n);var o={name:"Menu",data:function(){return{scroll:0,menuExpanded:!1}},computed:{faded:function(){return this.scroll>70}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.scroll=window.scrollY},handler:function(t){this.menuExpanded&&this.menu()},menu:function(){this.menuExpanded=!this.menuExpanded,document.body.style.overflowY=this.menuExpanded?"hidden":""}}},r=(e(259),e(45)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("nav",{class:{"fade-in":!t.faded,responsive:t.menuExpanded}},[o("div",{staticClass:"menu"},[o("img",{staticClass:"logo",attrs:{alt:"hibiscus_menu_icon",src:e(256)}}),t._v(" "),o("a",{staticClass:"icon",attrs:{href:"javascript:void(0);"},on:{click:t.menu}},[o("img",{attrs:{alt:"hibiscus_menu_icon",src:e(257)}})]),t._v(" "),o("nuxt-link",{class:{active:"#home"===t.$route.hash},attrs:{to:{path:"/",hash:"#home"}},nativeOn:{click:function(n){return t.handler.apply(null,arguments)}}},[t._v("Home")]),t._v(" "),o("nuxt-link",{class:{active:"#services"===t.$route.hash},attrs:{to:{path:"/",hash:"#services"}},nativeOn:{click:function(n){return t.handler.apply(null,arguments)}}},[t._v("Services")]),t._v(" "),o("nuxt-link",{attrs:{to:{path:"/"}},nativeOn:{click:function(n){return t.handler.apply(null,arguments)}}},[o("img",{attrs:{alt:"hibiscus_menu_icon",src:e(258)}})]),t._v(" "),o("nuxt-link",{class:{active:"#about"===t.$route.hash},attrs:{to:{path:"/",hash:"#about"}},nativeOn:{click:function(n){return t.handler.apply(null,arguments)}}},[t._v("About us")]),t._v(" "),o("nuxt-link",{class:{active:"#contact"===t.$route.hash},attrs:{to:{path:"/",hash:"#contact"}},nativeOn:{click:function(n){return t.handler.apply(null,arguments)}}},[t._v("Contact us")])],1)])}),[],!1,null,"70871b04",null);n.default=component.exports},269:function(t,n,e){"use strict";e.r(n);e(70);var o={name:"home",computed:{styleLogo:function(){var t=(this.x+window.innerWidth)/-200,n=(this.y+window.innerHeight)/-200;return"transform: translateX(".concat(t,"px) translateY(").concat(n,"px);")},styleSlogan:function(){var t=(this.x-window.innerWidth)/200,n=(this.y-window.innerHeight)/200;return"transform: translateX(".concat(t,"px) translateY(").concat(n,"px);")},styleAstronaut:function(){var t=4+this.x/200,n=5+this.y/-200;return"left: ".concat(t,"rem; bottom:").concat(n,"rem;")},styleMoon:function(){var t=2+this.x/200,n=12+this.y/-200;return"right: ".concat(t,"rem; top:").concat(n,"rem;")}},data:function(){return{x:null,y:null}},mounted:function(){this.$refs.home.addEventListener("mousemove",function(t){this.move(t.x,t.y,null)}.bind(this),!0),window.addEventListener("deviceorientation",function(t){var n=(t.alpha+180)%360*2,e=5*(t.beta+t.gamma);this.move(n,e)}.bind(this),!0)},methods:{move:function(t,n){this.x=t,this.y=n}}},r=(e(262),e(45)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("section",{ref:"home",attrs:{id:"home"}},[o("img",{attrs:{id:"background_1",alt:"background_1",src:e(261)}}),t._v(" "),o("div",{staticClass:"container content"},[o("p",[t._v("We are a human center software products developer team.")]),t._v(" "),o("p",[t._v("Tell us about your goals and lets take the journey together to make them real!")]),t._v(" "),o("nuxt-link",{staticClass:"btn-contact",attrs:{to:{path:"/",hash:"#contact"}}},[t._v("Contact us")])],1)])}),[],!1,null,"a0ff3ab0",null);n.default=component.exports},278:function(t,n,e){"use strict";e.r(n);var o={name:"IndexPage",mounted:function(){window.onscroll=function(t){}},methods:{change:function(t){window.history.pushState("","","#"+t),console.log(this.$router),this.$router.push("#"+t)}}},r=e(45),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("Navigation"),t._v(" "),e("section-home")],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Navigation:e(268).default,SectionHome:e(269).default})}}]);