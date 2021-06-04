(this["webpackJsonplive-covid-tracker"]=this["webpackJsonplive-covid-tracker"]||[]).push([[0],{23:function(e,c,t){},24:function(e,c,t){},35:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t.n(s),n=t(17),r=t.n(n),i=(t(23),t(24),t(9)),d=t.n(i),j=t(11),l=t(12),h=t(7),b=t(0),O=function(){var e=Object(s.useState)([]),c=Object(l.a)(e,2),t=c[0],a=c[1],n=function(){var e=Object(j.a)(d.a.mark((function e(){var c,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.covid19india.org/data.json");case 3:return c=e.sent,e.next=6,c.json();case 6:t=e.sent,console.log(t.statewise[0]),a(t.statewise[0]),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){n()}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("section",{children:[Object(b.jsx)("h1",{children:"\ud83d\udd34 LIVE"}),Object(b.jsx)("h2",{children:"COVID-19 CORONAVIRUS TRACKER"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{className:"card",children:Object(b.jsx)("div",{className:"card__main",children:Object(b.jsxs)("div",{className:"card__inner",children:[Object(b.jsxs)("p",{className:"card__name1",children:[Object(b.jsx)("span",{children:" OUR "})," COUNTRY"]}),Object(b.jsx)("p",{className:"card__total card__small",children:"INDIA"}),Object(b.jsx)(h.b,{exact:!0,activeClassName:"active-page",className:"nav-link",to:"/statewise",children:Object(b.jsx)("button",{class:"button",children:Object(b.jsx)("span",{children:"View Statewise data "})})})]})})}),Object(b.jsx)("li",{className:"card",children:Object(b.jsx)("div",{className:"card__main",children:Object(b.jsxs)("div",{className:"card__inner",children:[Object(b.jsxs)("p",{className:"card__name",children:[Object(b.jsx)("span",{children:" TOTAL "}),"  RECOVERED"]}),Object(b.jsx)("p",{className:"card__total card__small",children:t.recovered})]})})}),Object(b.jsx)("li",{className:"card",children:Object(b.jsx)("div",{className:"card__main",children:Object(b.jsxs)("div",{className:"card__inner",children:[Object(b.jsxs)("p",{className:"card__name",children:[Object(b.jsx)("span",{children:" TOTAL "})," CONFIRMED"]}),Object(b.jsx)("p",{className:"card__total card__small",children:t.confirmed})]})})}),Object(b.jsx)("li",{className:"card",children:Object(b.jsx)("div",{className:"card__main",children:Object(b.jsxs)("div",{className:"card__inner",children:[Object(b.jsxs)("p",{className:"card__name",children:[Object(b.jsx)("span",{children:" TOTAL "})," DEATHS "]}),Object(b.jsx)("p",{className:"card__total card__small",children:t.deaths})]})})}),Object(b.jsx)("li",{className:"card",children:Object(b.jsx)("div",{className:"card__main",children:Object(b.jsxs)("div",{className:"card__inner",children:[Object(b.jsxs)("p",{className:"card__name",children:[Object(b.jsx)("span",{children:" TOTAL "})," ACTIVE"]}),Object(b.jsx)("p",{className:"card__total card__small",children:t.active})]})})}),Object(b.jsx)("li",{className:"card",children:Object(b.jsx)("div",{className:"card__main",children:Object(b.jsxs)("div",{className:"card__inner",children:[Object(b.jsxs)("p",{className:"card__name",children:[Object(b.jsx)("span",{children:" LAST "})," UPDATED"]}),Object(b.jsx)("p",{className:"card__total card__small",children:t.lastupdatedtime})]})})})]})]})})},o=t(2),x=function(){var e=Object(s.useState)([]),c=Object(l.a)(e,2),t=c[0],a=c[1],n=function(){var e=Object(j.a)(d.a.mark((function e(){var c,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19india.org/data.json");case 2:return c=e.sent,e.next=5,c.json();case 5:t=e.sent,console.log(t.statewise),a(t.statewise);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){n()}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"container-fluid mt-5",children:[Object(b.jsx)("div",{className:"main-heading",children:Object(b.jsxs)("h1",{className:"mb-5 text-center",children:[" ",Object(b.jsx)("span",{className:"font-weight-bold",children:" INDIA "}),"COVID-19 Dashboard"]})}),Object(b.jsx)("div",{className:"table-responsive",children:Object(b.jsxs)("table",{className:"table table-hover",children:[Object(b.jsx)("thead",{className:"thead-dark",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:" State "}),Object(b.jsx)("th",{children:" Confirmed "}),Object(b.jsx)("th",{children:" recovered "}),Object(b.jsx)("th",{children:" deaths "}),Object(b.jsx)("th",{children:" active "}),Object(b.jsx)("th",{children:" updated "})]})}),Object(b.jsx)("tbody",{children:t.map((function(e,c){return Object(b.jsxs)("tr",{children:[Object(b.jsxs)("th",{children:[" ",e.state," "]}),Object(b.jsxs)("td",{children:[" ",e.confirmed," "]}),Object(b.jsxs)("td",{children:[" ",e.recovered," "]}),Object(b.jsxs)("td",{children:[" ",e.deaths," "]}),Object(b.jsxs)("td",{children:[" ",e.active," "]}),Object(b.jsxs)("td",{children:[" ",e.lastupdatedtime," "]})]},c)}))})]})}),Object(b.jsxs)(h.b,{to:"/",children:[" ",Object(b.jsx)("button",{class:"button",children:Object(b.jsx)("span",{children:"Back To Previouspage  "})})]})]})})},m=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{id:"notfound",children:Object(b.jsxs)("div",{className:"notfound",children:[Object(b.jsx)("div",{className:"notfound-404",children:Object(b.jsx)("h1",{children:"404"})}),Object(b.jsx)("h2",{children:"we are sorry, page not found!"}),Object(b.jsx)("p",{className:"mb-5",children:"The page you are looking for might have been removed had its name changed or is temporarily unavailable."}),Object(b.jsx)(h.b,{to:"/",children:" Back To Homepage "})]})})})},u=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",component:O,children:Object(b.jsx)(O,{})}),Object(b.jsx)(o.a,{path:"/statewise",component:x,children:Object(b.jsx)(x,{})}),Object(b.jsx)(o.a,{children:Object(b.jsx)(m,{})})]})})},_=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,36)).then((function(c){var t=c.getCLS,s=c.getFID,a=c.getFCP,n=c.getLCP,r=c.getTTFB;t(e),s(e),a(e),n(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(h.a,{children:Object(b.jsx)(u,{})})}),document.getElementById("root")),_()}},[[35,1,2]]]);
//# sourceMappingURL=main.a047c291.chunk.js.map