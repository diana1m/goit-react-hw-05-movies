"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[623],{570:function(n,e,t){t.d(e,{e:function(){return g}});var r,a,i,o,c=t(689),u=t(168),s=t(444),p=t(87),l=s.ZP.li(r||(r=(0,u.Z)(["\n    width: 300px;\n    text-decoration: none; \n\n    /* display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; */\n    text-align: center;\n    background-color: #F6F6C9;\n    border-radius: 4px;\n    transition: transform 300ms linear;\n    overflow: hidden;\n    cursor: zoom-in;\n    &:hover,\n    &:focus {\n        transform: scale(1.05);\n        box-shadow: 0px 2px 10px 2px grey;\n    }\n"]))),f=s.ZP.p(a||(a=(0,u.Z)(["\n    text-decoration: none;\n    color: #153462;\n    padding: 8px;\n"]))),d=(0,s.ZP)(p.rU)(i||(i=(0,u.Z)(["\n    text-decoration: none;\n    font-size: 20px;\n    &:hover,\n    &:focus {\n        color: black;\n    }\n"]))),h=t(184),x=function(n){var e=n.movie,t=e.title,r=e.id,a=e.poster_path,i=(0,c.TH)(),o=a?"https://image.tmdb.org/t/p/w500".concat(a):"https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923";return(0,h.jsx)(l,{children:(0,h.jsxs)(d,{to:"/movies/".concat(r),state:{from:i},children:[(0,h.jsx)("img",{src:o,alt:"poster",width:"300px",height:"450px"}),(0,h.jsx)(f,{children:t})]})})},m=s.ZP.ul(o||(o=(0,u.Z)(["\n    display: flex;\n    gap: 15px;\n    flex-wrap: wrap;\n    justify-content: center;\n\n    margin-top: 40px;\n"]))),g=function(n){var e=n.movies;return(0,h.jsx)(m,{children:e.map((function(n){return(0,h.jsx)(x,{movie:n,children:" "},n.id)}))})}},623:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,a,i,o,c=t(861),u=t(439),s=t(757),p=t.n(s),l=t(791),f=t(87),d=t(82),h=t(168),x=t(444),m=t(185),g=x.ZP.form(r||(r=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  margin-top: 40px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),v=x.ZP.button(a||(a=(0,h.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  /* background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg'); */\n  /* background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center; */\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n      opacity: 1;\n  }\n"]))),b=(0,x.ZP)(m.dVI)(i||(i=(0,h.Z)(["\n  fill: #346251;\n  width: 20px;\n  height: 20px;\n"]))),w=x.ZP.input(o||(o=(0,h.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n      font: inherit;\n      font-size: 18px;\n  }\n"]))),y=t(184),Z=function(n){var e=n.onSubmit;return(0,y.jsxs)(g,{onSubmit:function(n){n.preventDefault(),e(n.target[0].value),n.target.reset()},children:[(0,y.jsx)(w,{type:"text",name:"search",placeholder:"search movies",required:!0}),(0,y.jsx)(v,{type:"submit",children:(0,y.jsx)(b,{})})]})},k=t(570),j=function(){var n=(0,f.lr)(),e=(0,u.Z)(n,2),t=e[0],r=e[1],a=(0,l.useState)([]),i=(0,u.Z)(a,2),o=i[0],s=i[1],h=(0,l.useState)(null),x=(0,u.Z)(h,2),m=x[0],g=x[1];(0,l.useEffect)((function(){var n=t.get("value");if(n){var e=function(){var e=(0,c.Z)(p().mark((function e(){var t,r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.qF)(n);case 3:t=e.sent,r=t.data,s(r.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),g(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}}),[t]);return(0,y.jsxs)("div",{children:[m&&(0,y.jsxs)("p",{children:["Ooooops... ",m]}),(0,y.jsx)(Z,{onSubmit:function(n){r({value:n})}}),(0,y.jsx)(k.e,{movies:o})]})}},82:function(n,e,t){t.d(e,{Cm:function(){return g},LP:function(){return s},jf:function(){return x},qF:function(){return l},sO:function(){return d}});var r=t(861),a=t(757),i=t.n(a),o=t(243),c="f74d35c77cf5d32effd7c6bb9dddc2ef",u="https://api.themoviedb.org/3";function s(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(i().mark((function n(){var e,t,r,a=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,t={url:"".concat(u,"/trending/movie/day"),params:{api_key:c,page:e}},n.next=4,(0,o.Z)(t);case 4:return r=n.sent,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(i().mark((function n(e){var t,r,a,s=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:1,r={url:"".concat(u,"/search/movie"),params:{api_key:c,language:"en-US",page:t,query:e}},n.next=4,(0,o.Z)(r);case 4:return a=n.sent,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)}))),f.apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={url:"".concat(u,"/movie/").concat(e),params:{api_key:c,language:"en-US"}},n.next=3,(0,o.Z)(t);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={url:"".concat(u,"/movie/").concat(e,"/credits"),params:{api_key:c,language:"en-US"}},n.next=3,(0,o.Z)(t);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={url:"".concat(u,"/movie/").concat(e,"/reviews"),params:{api_key:c,language:"en-US",page:1}},n.next=3,(0,o.Z)(t);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=623.937dd8e1.chunk.js.map