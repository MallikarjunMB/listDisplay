(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e){e.exports=[{id:1,price:"120$",duration:"Sbm won last 7 days"},{id:2,price:"120$",duration:"Sbm won last 7 days"},{id:3,price:"120$",duration:"Sbm won last 7 days"},{id:4,price:"120$",duration:"Sbm won last 7 days"},{id:5,price:"120$",duration:"Sbm won last 7 days"},{id:6,price:"120$",duration:"Sbm won last 7 days"},{id:7,price:"120$",duration:"Sbm won last 7 days"},{id:8,price:"120$",duration:"Sbm won last 7 days"},{id:9,price:"120$",duration:"Sbm won last 7 days"},{id:10,price:"120$",duration:"Sbm won last 7 days"}]},28:function(e){e.exports=[{id:1,act:" Ramu doing the home work"},{id:2,act:" Bhim doing the home work"},{id:3,act:" Amit doing the home work"},{id:4,act:" Amit u doing the home work"},{id:5,act:" Gajendra doing the home work"},{id:6,act:" Maltesh doing the home work"},{id:7,act:" Mallikarjun doing the home work"},{id:8,act:" jack doing the home work"},{id:9,act:" john doing the home work"},{id:10,act:" Mac doing the home work"},{id:11,act:" oscar doing the home work"}]},38:function(e,t,a){e.exports=a(56)},43:function(e,t,a){},44:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(14),c=a.n(i),r=(a(43),a(9)),l=a(10),s=a(12),d=a(11),u=a(13),m=a(34),p=a(15),h=(a(44),a(16)),b=a(22),y=a(37),w={datas:[],activity:[]},f=Object(b.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(console.log("action",t.payload),t.type){case"DISPLAY_LIST":return Object(y.a)({},e,{datas:t.payload});case"ACTIVITY_LIST":return{activity:t.payload};default:return e}}),j=a(5),g=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(j.f,{className:"ml-auto",pills:!0},o.a.createElement(j.g,null,o.a.createElement(j.h,{href:"/home"},"Home")),o.a.createElement(j.g,null,o.a.createElement(j.h,{href:"/list"},"List"))))}}]),t}(o.a.Component),v=a(27),E=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.props.displayList(v)}},{key:"render",value:function(){var e=this.props.productDetails.datas.map(function(e){return o.a.createElement(j.e,{md:"3",style:{padding:"50px"}},o.a.createElement(j.b,{body:!0},o.a.createElement(j.a,null,e.id),o.a.createElement(j.d,null,e.price),o.a.createElement(j.c,null,e.duration)))});return console.log("data",v),o.a.createElement("div",null,"Home Component",o.a.createElement(j.i,{style:{display:"inline-flex"}},e))}}]),t}(n.Component),O=Object(h.b)(function(e){return console.log("mapstate",e),{productDetails:e}},{displayList:function(e){return console.log(e),{type:"DISPLAY_LIST",payload:e}}})(E),k=a(28),S=a(36),I=(a(49),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.props.activityList(k)}},{key:"render",value:function(){var e=[{Header:"Sl.no",accessor:"id"},{Header:"Activity",accessor:"act",Cell:function(e){return o.a.createElement("span",{className:"number"},e.value)}}];return o.a.createElement(S.a,{data:k,columns:e})}}]),t}(n.Component)),L=Object(h.b)(function(e){return console.log("mapstate",e),{activityDetails:e}},{activityList:function(e){return console.log(e),{type:"ACTIVITY_LIST",payload:e}}})(I),$=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,{store:f},o.a.createElement("div",{className:"App"},o.a.createElement(g,null),o.a.createElement(m.a,null,o.a.createElement(p.a,{exact:!0,path:"/",component:O}),o.a.createElement(p.a,{path:"/home",component:O}),o.a.createElement(p.a,{path:"/list",component:L}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(55);c.a.render(o.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.c16a865d.chunk.js.map