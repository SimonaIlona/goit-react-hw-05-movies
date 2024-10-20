"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[135],{7135:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(5861),a=n(9439),i=n(4687),c=n.n(i),s=n(2791),u=n(7689),o=n(1087),p=n(5562),l=n(3187),v={movieDetailsContainer:"MovieDetails_movieDetailsContainer__hxmcN",detailsContainer:"MovieDetails_detailsContainer__Y0Fjr",link:"MovieDetails_link__U+v+7",error:"MovieDetails_error__uOHXe"},f=n(184),h=function(){var e=(0,u.UO)().movieId,t=(0,u.TH)(),n=(0,s.useState)(null),i=(0,a.Z)(n,2),h=i[0],d=i[1],m=(0,s.useState)(!1),x=(0,a.Z)(m,2),_=x[0],w=x[1],g=(0,s.useState)(null),k=(0,a.Z)(g,2),y=k[0],Z=k[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(!0),Z(null),t.prev=2,t.next=5,(0,l.t2)(e);case 5:n=t.sent,d(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),Z("Failed to fetch movie details. Please try again later.");case 12:return t.prev=12,w(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),_?(0,f.jsx)(p.Z,{}):y?(0,f.jsx)("p",{className:v.error,children:y}):h?(0,f.jsxs)("div",{className:v.movieDetailsContainer,children:[(0,f.jsx)("h1",{children:h.title}),(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(h.poster_path),alt:h.title}),(0,f.jsx)("p",{children:h.overview}),(0,f.jsxs)("nav",{className:v.detailsContainer,children:[(0,f.jsx)(o.rU,{to:"cast",className:t.pathname.includes("cast")?v.activeLink:v.link,children:"Cast"}),(0,f.jsx)(o.rU,{to:"reviews",className:t.pathname.includes("reviews")?v.activeLink:v.link,children:"Reviews"})]}),(0,f.jsx)(u.j3,{})]}):null}},3187:function(e,t,n){n.d(t,{Cp:function(){return l},M1:function(){return d},WG:function(){return w},t2:function(){return f},tx:function(){return x}});var r=n(5861),a=n(4687),i=n.n(a),c=n(8),s=n(7694),u="https://api.themoviedb.org/3",o="62fd1f6f75634c3e4cf1834399c4aa19",p={position:"center-center",timeout:4e3,width:"750px",fontSize:"30px"};function l(){return v.apply(this,arguments)}function v(){return v=(0,r.Z)(i().mark((function e(){var t,n,r=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.prev=1,e.next=4,c.Z.get("".concat(u,"/trending/movie/day"),{params:{api_key:o,page:t||1}});case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),k(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),v.apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(u,"/movie/").concat(t),{params:{api_key:o}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(u,"/movie/").concat(t,"/credits?"),{params:{api_key:o}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),k(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function x(e){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(u,"/movie/").concat(t,"/reviews?"),{params:{api_key:o}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),k(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function w(e){return g.apply(this,arguments)}function g(){return g=(0,r.Z)(i().mark((function e(t){var n,r,a=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,c.Z.get("".concat(u,"/search/movie"),{params:{api_key:o,query:t,page:n,language:"en-US",include_adult:!1}});case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function k(e){console.error("An error occurred:",e),s.Notify.failure("Oops! Something went wrong! Try reloading the page or make another choice!",p)}}}]);
//# sourceMappingURL=135.6a05e19d.chunk.js.map