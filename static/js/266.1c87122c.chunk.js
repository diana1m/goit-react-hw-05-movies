"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[266],{570:function(n,e,r){r.d(e,{e:function(){return d}});var t,a,c=r(87),i=r(689),u=r(168),o=r(444),s=o.ZP.li(t||(t=(0,u.Z)(["\n    width: 150px;\n    text-decoration: none; \n\n    /* display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; */\n    text-align: center;\n    background-color: #F6F6C9;\n    border-radius: 4px;\n    transition: transform 300ms linear;\n    overflow: hidden;\n    cursor: zoom-in;\n    &:hover,\n    &:focus {\n        transform: scale(1.05);\n        box-shadow: 0px 2px 10px 2px grey;\n    }\n"]))),p=r(184),f=function(n){var e=n.movie,r=e.title,t=e.id,a=e.poster_path,u=(0,i.TH)(),o=a?"https://image.tmdb.org/t/p/w500".concat(a):"https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923";return(0,p.jsx)(s,{children:(0,p.jsxs)(c.rU,{to:"/movies/".concat(t),state:{from:u},children:[(0,p.jsx)("img",{src:o,alt:"poster",width:"150px",height:"225px"}),(0,p.jsxs)("p",{children:[" ",r]})]})})},l=o.ZP.ul(a||(a=(0,u.Z)(["\n    display: flex;\n    gap: 15px;\n    flex-wrap: wrap;\n    /* display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    grid-gap: 15px; */\n\n    margin-top: 40px;\n"]))),d=function(n){var e=n.movies;return(0,p.jsx)(l,{children:e.map((function(n){return(0,p.jsx)(f,{movie:n,children:" "},n.id)}))})}},266:function(n,e,r){r.r(e);var t=r(861),a=r(439),c=r(757),i=r.n(c),u=r(791),o=r(82),s=r(570),p=r(184);e.default=function(){var n=(0,u.useState)([]),e=(0,a.Z)(n,2),r=e[0],c=e[1],f=(0,u.useState)(null),l=(0,a.Z)(f,2),d=l[0],m=l[1];return(0,u.useEffect)((function(){var n=function(){var n=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.LP)();case 3:e=n.sent,r=e.data,c(r.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),m(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),console.log(r),(0,p.jsxs)("div",{children:[(0,p.jsx)(s.e,{movies:r}),d&&(0,p.jsxs)("p",{children:["Ooooops... ",d]})]})}},82:function(n,e,r){r.d(e,{Cm:function(){return v},LP:function(){return s},jf:function(){return h},qF:function(){return f},sO:function(){return d}});var t=r(861),a=r(757),c=r.n(a),i=r(243),u="f74d35c77cf5d32effd7c6bb9dddc2ef",o="https://api.themoviedb.org/3";function s(){return p.apply(this,arguments)}function p(){return p=(0,t.Z)(c().mark((function n(){var e,r,t,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,r={url:"".concat(o,"/trending/movie/day"),params:{api_key:u,page:e}},n.next=4,(0,i.Z)(r);case 4:return t=n.sent,n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return l=(0,t.Z)(c().mark((function n(e){var r,t,a,s=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:1,t={url:"".concat(o,"/search/movie"),params:{api_key:u,language:"en-US",page:r,query:e}},n.next=4,(0,i.Z)(t);case 4:return a=n.sent,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)}))),l.apply(this,arguments)}function d(n){return m.apply(this,arguments)}function m(){return(m=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={url:"".concat(o,"/movie/").concat(e),params:{api_key:u,language:"en-US"}},n.next=3,(0,i.Z)(r);case 3:return t=n.sent,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={url:"".concat(o,"/movie/").concat(e,"/credits"),params:{api_key:u,language:"en-US"}},n.next=3,(0,i.Z)(r);case 3:return t=n.sent,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={url:"".concat(o,"/movie/").concat(e,"/reviews"),params:{api_key:u,language:"en-US",page:1}},n.next=3,(0,i.Z)(r);case 3:return t=n.sent,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=266.1c87122c.chunk.js.map