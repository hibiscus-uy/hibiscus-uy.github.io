(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{170:function(t,e,n){var content=n(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(72).default)("6548d95e",content,!0,{sourceMap:!1})},171:function(t,e,n){var content=n(240);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(72).default)("4e6b8f76",content,!0,{sourceMap:!1})},187:function(t,e,n){t.exports=n.p+"img/hibiscus_background_1.ac399b4.svg"},188:function(t,e,n){"use strict";n.r(e);var o={name:"Menu",data:function(){return{scroll:0,menuExpanded:!1}},computed:{faded:function(){return this.scroll>70}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.scroll=window.scrollY},handler:function(t){this.menuExpanded&&this.menu()},menu:function(){this.menuExpanded=!this.menuExpanded,document.body.style.overflowY=this.menuExpanded?"hidden":""}}},r=(n(239),n(30)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{class:{"fade-in":!t.faded,responsive:t.menuExpanded}},[o("div",{staticClass:"menu"},[o("img",{staticClass:"logo",attrs:{alt:"hibiscus_menu_icon",src:n(236)}}),t._v(" "),o("a",{staticClass:"icon",attrs:{href:"javascript:void(0);"},on:{click:t.menu}},[o("img",{attrs:{alt:"hibiscus_menu_icon",src:n(237)}})]),t._v(" "),o("nuxt-link",{class:{active:"#home"===t.$route.hash},attrs:{to:{path:"/",hash:"#home"}},nativeOn:{click:function(e){return t.handler.apply(null,arguments)}}},[t._v("Home")]),t._v(" "),o("nuxt-link",{class:{active:"#services"===t.$route.hash},attrs:{to:{path:"/",hash:"#services"}},nativeOn:{click:function(e){return t.handler.apply(null,arguments)}}},[t._v("Services")]),t._v(" "),o("nuxt-link",{attrs:{to:{path:"/"}},nativeOn:{click:function(e){return t.handler.apply(null,arguments)}}},[o("img",{attrs:{alt:"hibiscus_menu_icon",src:n(238)}})]),t._v(" "),o("nuxt-link",{class:{active:"#about"===t.$route.hash},attrs:{to:{path:"/",hash:"#about"}},nativeOn:{click:function(e){return t.handler.apply(null,arguments)}}},[t._v("About us")]),t._v(" "),o("nuxt-link",{class:{active:"#contact"===t.$route.hash},attrs:{to:{path:"/",hash:"#contact"}},nativeOn:{click:function(e){return t.handler.apply(null,arguments)}}},[t._v("Contact us")])],1)])}),[],!1,null,"72863392",null);e.default=component.exports},189:function(t,e,n){n(190),t.exports=n(191)},234:function(t,e,n){"use strict";n(170)},235:function(t,e,n){var o=n(71)(!1);o.push([t.i,".error[data-v-41368e45]{display:flex;justify-content:center;height:100vh;align-items:center}.error h1[data-v-41368e45]{position:relative}.error #background_1[data-v-41368e45]{position:absolute;top:0;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}",""]),t.exports=o},236:function(t,e,n){t.exports=n.p+"img/hibiscus_logo_dark.6bc3832.svg"},237:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAyNSAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeDE9IjYiIHkxPSI4LjUiIHgyPSIyNCIgeTI9IjguNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPGxpbmUgeDE9IjEiIHkxPSIxNS45OTk5IiB4Mj0iMjQiIHkyPSIxNS45OTk5IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8bGluZSB4MT0iMSIgeTE9IjEiIHgyPSIyNCIgeTI9IjEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo="},238:function(t,e,n){t.exports=n.p+"img/hibiscus_logo_dark_m.f5d2384.png"},239:function(t,e,n){"use strict";n(171)},240:function(t,e,n){var o=n(71)(!1);o.push([t.i,"nav a[data-v-72863392]{display:none}nav .logo[data-v-72863392]{height:6rem}nav .icon[data-v-72863392]{display:inline-block;position:fixed;right:2rem;top:3rem}nav .menu[data-v-72863392]{max-width:1200px;margin-right:auto;margin-left:auto;padding:2rem}@media screen and (max-width:767px){.responsive[data-v-72863392]{background-color:#000;height:100vh}.responsive a[data-v-72863392]{display:block;margin-bottom:2rem;margin-left:2rem}.responsive a[data-v-72863392]:nth-child(3){margin-top:3rem}.responsive a[data-v-72863392]:nth-child(5){display:none}.responsive a[data-v-72863392]:not(:nth-child(2)){font-size:3rem}}@media screen and (min-width:768px){nav a[data-v-72863392]{display:inline-block}nav .icon[data-v-72863392],nav .logo[data-v-72863392]{display:none}nav.fade-in[data-v-72863392]{top:6rem}nav .menu[data-v-72863392]{display:flex;justify-content:space-around;align-items:center}}",""]),t.exports=o},243:function(t,e,n){var content=n(244);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(72).default)("a07579c2",content,!0,{sourceMap:!1})},244:function(t,e,n){var o=n(71)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap);"]),o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),o.push([t.i,"body,html{font-size:10px}@media (min-width:320px){body,html{font-size:12px}}@media (min-width:480px){body,html{font-size:14px}}@media (min-width:768px){body,html{font-size:16px}}@media (min-width:1024px){body,html{font-size:18px}}@media (min-width:1200px){body,html{font-size:20px}}*{font-family:Roboto,sans-serif;box-sizing:border-box}::-moz-selection{background-color:#fff;color:#1e1e1e}::selection{background-color:#fff;color:#1e1e1e}body,html{height:100%;background-color:#1e1e1e;color:#fff;margin:0}body::-webkit-scrollbar,html::-webkit-scrollbar{width:5px;height:5px}body::-webkit-scrollbar-thumb,html::-webkit-scrollbar-thumb{background:linear-gradient(275.68deg,#ff1744 -54.94%,#ff1744 -14.15%,#ff616f 34.87%,#5cc6ac 105.61%,#00ffcf 144.78%)}body::-webkit-scrollbar-thumb:hover,html::-webkit-scrollbar-thumb:hover{background:#c4c4c4}body::-webkit-scrollbar-track,html::-webkit-scrollbar-track{box-shadow:inset 0 0 1px #c4c4c4}h1,h2,h3{margin:0;font-weight:700}h1{font-size:2.5rem}h2{font-size:1.7rem}h3{font-size:1.3rem}.container{max-width:1440px;margin-left:auto;margin-right:auto}header,nav{position:fixed;top:0;right:0;left:0;z-index:1030;transition:all .4s ease}nav a{text-decoration:none;font-size:1.2rem;font-weight:700}nav a,nav a:visited{color:#fff}nav a.active,nav a:hover{color:linear-gradient(275.68deg,#ff1744 -54.94%,#ff1744 -14.15%,#ff616f 34.87%,#5cc6ac 105.61%,#00ffcf 144.78%)}a{text-decoration:none}a,a:visited{color:#000}a.active,a:hover{color:linear-gradient(275.68deg,#ff1744 -54.94%,#ff1744 -14.15%,#ff616f 34.87%,#5cc6ac 105.61%,#00ffcf 144.78%)}section{position:relative;min-height:95vh;padding-top:2.5rem;overflow:hidden}section:last-child{min-height:100vh}",""]),t.exports=o},39:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}}},r=(n(234),n(30)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"error"},[o("Navigation"),t._v(" "),o("img",{attrs:{id:"background_1",alt:"background_1",src:n(187)}}),t._v(" "),o("h1",[t._v("Page not found")])],1)}),[],!1,null,"41368e45",null);e.a=component.exports;installComponents(component,{Navigation:n(188).default})}},[[189,8,1,9]]]);