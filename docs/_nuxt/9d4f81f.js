(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{180:function(t,n,e){},181:function(t,n,e){t.exports=e.p+"img/hibiscus_logo_dark.9922ab9.svg"},182:function(t,n,e){},198:function(t,n,e){t.exports=e.p+"img/hibiscus_background_1.ac399b4.svg"},199:function(t,n,e){"use strict";e.r(n);var c={name:"Menu",data:function(){return{scroll:0,menuExpanded:!1}},computed:{faded:function(){return this.scroll>70},light:function(){return this.scroll>100}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.scroll=window.scrollY},handler:function(t){this.menuExpanded&&this.menu()},menu:function(){this.menuExpanded=!this.menuExpanded,document.body.style.overflowY=this.menuExpanded?"hidden":""}}},l=(e(268),e(30)),component=Object(l.a)(c,(function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("nav",{class:{"fade-in":!t.faded,responsive:t.menuExpanded}},[c("div",{staticClass:"menu",class:{light:t.light&!t.menuExpanded}},[t.light&!t.menuExpanded?c("img",{staticClass:"logo",attrs:{alt:"hibiscus_menu_icon",src:e(265)}}):c("img",{staticClass:"logo",attrs:{alt:"hibiscus_menu_icon",src:e(181)}}),t._v(" "),c("a",{staticClass:"icon",attrs:{href:"javascript:void(0);"},on:{click:t.menu}},[t.menuExpanded?c("img",{attrs:{alt:"hibiscus_menu_close_icon",src:e(266)}}):c("img",{class:{light:t.light},attrs:{alt:"hibiscus_menu_icon",src:e(267)}})]),t._v(" "),c("nuxt-link",{class:{active:"#home"===t.$route.hash},attrs:{to:{path:"/",hash:"#home"}},nativeOn:{click:function(n){return t.handler.apply(null,arguments)}}},[t._v("Home")]),t._v(" "),c("nuxt-link",{class:{active:"#services"===t.$route.hash},attrs:{to:{path:"/",hash:"#services"}},nativeOn:{click:function(n){return t.handler.apply(null,arguments)}}},[t._v("Services")]),t._v(" "),c("nuxt-link",{attrs:{to:{path:"/"}},nativeOn:{click:function(n){return t.handler.apply(null,arguments)}}},[c("img",{attrs:{alt:"hibiscus_menu_icon",src:e(181)}})]),t._v(" "),c("nuxt-link",{class:{active:"#about"===t.$route.hash},attrs:{to:{path:"/",hash:"#about"}},nativeOn:{click:function(n){return t.handler.apply(null,arguments)}}},[t._v("About us")]),t._v(" "),c("nuxt-link",{class:{active:"#contact"===t.$route.hash},attrs:{to:{path:"/",hash:"#contact"}},nativeOn:{click:function(n){return t.handler.apply(null,arguments)}}},[t._v("Contact us")])],1)])}),[],!1,null,"2474eafe",null);n.default=component.exports},200:function(t,n,e){e(201),t.exports=e(202)},264:function(t,n,e){"use strict";e(180)},265:function(t,n,e){t.exports=e.p+"img/hibiscus_logo_light.ad1b817.svg"},266:function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAyMCAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeDE9IjIuODI4NDMiIHkxPSIyIiB4Mj0iMTYuNzkzOSIgeTI9IjE1Ljk2NTUiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTMgMTYuMTQyMkwxNy4xNDIxIDIuMDAwMDIiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg=="},267:function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAyNSAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeDE9IjYiIHkxPSI4LjUiIHgyPSIyNCIgeTI9IjguNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPGxpbmUgeDE9IjEiIHkxPSIxNS45OTk5IiB4Mj0iMjQiIHkyPSIxNS45OTk5IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8bGluZSB4MT0iMSIgeTE9IjEiIHgyPSIyNCIgeTI9IjEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo="},268:function(t,n,e){"use strict";e(182)},270:function(t,n,e){},40:function(t,n,e){"use strict";var c={layout:"empty",props:{error:{type:Object,default:null}}},l=(e(264),e(30)),component=Object(l.a)(c,(function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"error"},[c("Navigation"),t._v(" "),c("img",{attrs:{id:"background_1",alt:"background_1",src:e(198)}}),t._v(" "),c("h1",[t._v("Page not found")])],1)}),[],!1,null,null,null);n.a=component.exports;installComponents(component,{Navigation:e(199).default})}},[[200,8,1,9]]]);