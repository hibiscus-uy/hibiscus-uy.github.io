(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{170:function(e,t,n){var content=n(236);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(72).default)("14ae4020",content,!0,{sourceMap:!1})},171:function(e,t,n){e.exports=n.p+"img/hibiscus_logo_dark.aadee16.svg"},172:function(e,t,n){var content=n(241);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(72).default)("5d91df0e",content,!0,{sourceMap:!1})},188:function(e,t,n){e.exports=n.p+"img/hibiscus_background_1.ac399b4.svg"},189:function(e,t,n){"use strict";n.r(t);var o={name:"Menu",data:function(){return{scroll:0,menuExpanded:!1}},computed:{faded:function(){return this.scroll>70},light:function(){return this.scroll>100}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.scroll=window.scrollY},handler:function(e){this.menuExpanded&&this.menu()},menu:function(){this.menuExpanded=!this.menuExpanded,document.body.style.overflowY=this.menuExpanded?"hidden":""}}},r=(n(240),n(30)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("nav",{class:{"fade-in":!e.faded,responsive:e.menuExpanded}},[o("div",{staticClass:"menu",class:{light:e.light&!e.menuExpanded}},[e.light&!e.menuExpanded?o("img",{staticClass:"logo",attrs:{alt:"hibiscus_menu_icon",src:n(237)}}):o("img",{staticClass:"logo",attrs:{alt:"hibiscus_menu_icon",src:n(171)}}),e._v(" "),o("a",{staticClass:"icon",attrs:{href:"javascript:void(0);"},on:{click:e.menu}},[e.menuExpanded?o("img",{attrs:{alt:"hibiscus_menu_close_icon",src:n(238)}}):o("img",{class:{light:e.light},attrs:{alt:"hibiscus_menu_icon",src:n(239)}})]),e._v(" "),o("nuxt-link",{class:{active:"#home"===e.$route.hash},attrs:{to:{path:"/",hash:"#home"}},nativeOn:{click:function(t){return e.handler.apply(null,arguments)}}},[e._v("Home")]),e._v(" "),o("nuxt-link",{class:{active:"#services"===e.$route.hash},attrs:{to:{path:"/",hash:"#services"}},nativeOn:{click:function(t){return e.handler.apply(null,arguments)}}},[e._v("Services")]),e._v(" "),o("nuxt-link",{attrs:{to:{path:"/"}},nativeOn:{click:function(t){return e.handler.apply(null,arguments)}}},[o("img",{attrs:{alt:"hibiscus_menu_icon",src:n(171)}})]),e._v(" "),o("nuxt-link",{class:{active:"#about"===e.$route.hash},attrs:{to:{path:"/",hash:"#about"}},nativeOn:{click:function(t){return e.handler.apply(null,arguments)}}},[e._v("About us")]),e._v(" "),o("nuxt-link",{class:{active:"#contact"===e.$route.hash},attrs:{to:{path:"/",hash:"#contact"}},nativeOn:{click:function(t){return e.handler.apply(null,arguments)}}},[e._v("Contact us")])],1)])}),[],!1,null,"2474eafe",null);t.default=component.exports},190:function(e,t,n){n(191),e.exports=n(192)},235:function(e,t,n){"use strict";n(170)},236:function(e,t,n){var o=n(71)(!1);o.push([e.i,".error{display:flex;justify-content:center;height:100vh;align-items:center}.error h1{position:relative}.error #background_1{position:absolute;top:0;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}",""]),e.exports=o},237:function(e,t,n){e.exports=n.p+"img/hibiscus_logo_light.db5c43c.svg"},238:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAyMCAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeDE9IjIuODI4NDMiIHkxPSIyIiB4Mj0iMTYuNzkzOSIgeTI9IjE1Ljk2NTUiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTMgMTYuMTQyMkwxNy4xNDIxIDIuMDAwMDIiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg=="},239:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAyNSAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeDE9IjYiIHkxPSI4LjUiIHgyPSIyNCIgeTI9IjguNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPGxpbmUgeDE9IjEiIHkxPSIxNS45OTk5IiB4Mj0iMjQiIHkyPSIxNS45OTk5IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8bGluZSB4MT0iMSIgeTE9IjEiIHgyPSIyNCIgeTI9IjEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo="},240:function(e,t,n){"use strict";n(172)},241:function(e,t,n){var o=n(71)(!1);o.push([e.i,"nav a[data-v-2474eafe]{display:none}nav .logo[data-v-2474eafe]{height:6rem;padding-top:1rem;padding-bottom:1rem}nav .icon[data-v-2474eafe]{display:inline-block;position:fixed;right:2rem;top:3rem}nav .menu[data-v-2474eafe]{max-width:1200px;margin-right:auto;margin-left:auto;padding:0 2rem}nav .menu.light[data-v-2474eafe]{background-color:#fff}@media screen and (max-width:767px){.responsive[data-v-2474eafe]{background-color:#000;height:100vh}.responsive a[data-v-2474eafe]{display:block;margin-bottom:2rem;margin-left:2rem}.responsive a[data-v-2474eafe]:nth-child(3){margin-top:3rem}.responsive a[data-v-2474eafe]:nth-child(5){display:none}.responsive a[data-v-2474eafe]:not(:nth-child(2)){font-size:3rem}.icon img.light[data-v-2474eafe]{filter:invert(100%)}}@media screen and (min-width:768px){nav[data-v-2474eafe]{top:-10rem}nav a[data-v-2474eafe]{display:inline-block}nav .icon[data-v-2474eafe],nav .logo[data-v-2474eafe]{display:none}nav.fade-in[data-v-2474eafe]{top:0}nav .menu[data-v-2474eafe]{display:flex;justify-content:space-around;align-items:center}nav .menu [alt=hibiscus_menu_icon][data-v-2474eafe]{width:10rem;padding:1rem}nav .menu.light[data-v-2474eafe]{background-color:inherit}}",""]),e.exports=o},244:function(e,t,n){var content=n(245);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(72).default)("a07579c2",content,!0,{sourceMap:!1})},245:function(e,t,n){var o=n(71)(!1);o.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap);"]),o.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),o.push([e.i,"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}body,html{font-size:10px}@media (min-width:320px){body,html{font-size:12px}}@media (min-width:480px){body,html{font-size:14px}}@media (min-width:768px){body,html{font-size:16px}}@media (min-width:1024px){body,html{font-size:18px}}@media (min-width:1200px){body,html{font-size:20px}}*{font-family:Roboto,sans-serif;box-sizing:border-box;scrollbar-width:thin;scrollbar-color:#1e1e1e #f8f8f8}::-moz-selection{background-color:#1e1e1e;color:#f8f8f8}::selection{background-color:#1e1e1e;color:#f8f8f8}::-webkit-scrollbar{width:5px;height:5px}::-webkit-scrollbar-thumb{background:linear-gradient(275.68deg,#ff1744 -54.94%,#ff1744 -14.15%,#ff616f 34.87%,#5cc6ac 105.61%,#00ffcf 144.78%)}::-webkit-scrollbar-thumb:hover{background:#c4c4c4}::-webkit-scrollbar-track{box-shadow:inset 0 0 1px #c4c4c4}body,html{height:100%;background-color:#f8f8f8;color:#1e1e1e;margin:0}h1,h2,h3{margin:0;font-weight:700}h1{font-size:2.5rem}h2{font-size:1.7rem}h3{font-size:1.3rem}.container{max-width:1440px;margin-left:auto;margin-right:auto}header,nav{position:fixed;top:0;right:0;left:0;z-index:1030;transition:all .6s ease}nav a{text-decoration:none;font-size:1.2rem;font-weight:700}nav a,nav a:visited{color:#fff}nav a.active,nav a:hover{color:linear-gradient(275.68deg,#ff1744 -54.94%,#ff1744 -14.15%,#ff616f 34.87%,#5cc6ac 105.61%,#00ffcf 144.78%)}a{text-decoration:none}a,a:visited{color:#000}a.active,a:hover{color:linear-gradient(275.68deg,#ff1744 -54.94%,#ff1744 -14.15%,#ff616f 34.87%,#5cc6ac 105.61%,#00ffcf 144.78%)}section{position:relative;min-height:95vh;padding:4rem 0;overflow:hidden}section:last-child{min-height:100vh}input,textarea{outline:none;border-radius:0}input:invalid,textarea:invalid{box-shadow:none}input:focus,textarea:focus{border:1px solid}",""]),e.exports=o},39:function(e,t,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}}},r=(n(235),n(30)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"error"},[o("Navigation"),e._v(" "),o("img",{attrs:{id:"background_1",alt:"background_1",src:n(188)}}),e._v(" "),o("h1",[e._v("Page not found")])],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{Navigation:n(189).default})}},[[190,8,1,9]]]);