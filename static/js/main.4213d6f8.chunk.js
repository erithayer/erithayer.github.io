(this.webpackJsonperithayer=this.webpackJsonperithayer||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(22),i=c.n(a),r=(c(28),c(9)),l=c(13),j=(c(29),c(11)),o=c(12),d=c(15),b=c(14),h=(c(30),c(7)),u=(c(31),c(0));var O=function(){return Object(u.jsx)("div",{className:"Loading-container",children:Object(u.jsxs)("h1",{className:"Loading",children:[Object(u.jsx)("span",{className:"let1",children:"\u0532 "}),Object(u.jsx)("span",{className:"let2",children:" \u0535 "}),Object(u.jsx)("span",{className:"let3",children:" \u054c "}),Object(u.jsx)("span",{className:"let4",children:" \u0546 "}),Object(u.jsx)("span",{className:"let5",children:" \u0548\u0552 "}),Object(u.jsx)("span",{className:"let6",children:" \u0544 "})]})})},m=(s.a.PureComponent,c(8)),x=c(2);c(33);var p=function(e){var t=Object(n.useState)({loading:!1,details:[]}),c=Object(l.a)(t,2),s=c[0],a=c[1],i=e.match.params.name;Object(n.useEffect)((function(){fetch("https://my-json-server.typicode.com/erithayer/".concat(i,"/").concat(i)).then((function(e){return e.ok?e.json():Promise.reject()})).then((function(e){a((function(t){return Object(r.a)(Object(r.a)({},t),{},{details:e})}))}))}),[i]);var j=e.click;return Object(u.jsx)("div",{children:s.details.map((function(e){return Object(u.jsxs)("div",{className:j?"detail-container active":"detail-container",children:[Object(u.jsxs)("div",{className:"top-container",children:[Object(u.jsx)("div",{className:"image",children:Object(u.jsx)("img",{src:e.img,alt:""})}),Object(u.jsxs)("div",{className:"info",children:[Object(u.jsxs)("h3",{children:[e.firstName," ",e.lastName]}),Object(u.jsxs)("div",{className:"details",children:[Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:"\u053f\u0561\u0580\u0578\u0572\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0568: "})," ",e.netWorth]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:"\u054f\u0561\u0580\u056b\u0584\u0568: "})," ",e.age]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:"\u053e\u0576\u0576\u0564\u0561\u057e\u0561\u0575\u0580\u0568: "})," ",e.cityBorn]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:"\u054a\u0561\u0577\u057f\u0578\u0576\u0568: "})," ",e.position]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:"\u0544\u0561\u057d\u0576\u0561\u0563\u056b\u057f\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0568: "})," ",e.proffesion]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:"\u053f\u0578\u0582\u057d\u0561\u056f\u0581\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0568: "})," ",e.party]})]})]})]}),Object(u.jsxs)("div",{className:"biography",children:[Object(u.jsx)("div",{className:"title",children:Object(u.jsx)("h2",{children:"\u053f\u0565\u0576\u057d\u0561\u0563\u0580\u0578\u0582\u0569\u0575\u0578\u0582\u0576"})}),Object(u.jsx)("p",{children:e.biography})]})]},e.rank)}))})};c(34);var v=function(){return Object(u.jsx)("div",{className:"Login",children:Object(u.jsxs)("div",{className:"login-container",children:[Object(u.jsx)("div",{className:"username",children:Object(u.jsx)("input",{type:"text",placeholder:"username"})}),Object(u.jsx)("div",{className:"password",children:Object(u.jsx)("input",{type:"text",placeholder:"password"})}),Object(u.jsx)("button",{onClick:function(){console.log("event.target.checked")},children:"Login"})]})})},f=(c(35),c.p+"static/media/logo-5.11e427cb.png");var N=function(e){var t=e.click,c=e.setClick,s=Object(n.useState)(!1),a=Object(l.a)(s,2),i=a[0],r=a[1],j=function(){c(!1)},o=function(){window.scrollY>=70?r(!0):r(!1)};return Object(n.useEffect)((function(){window.addEventListener("scroll",o)}),[]),Object(u.jsx)("nav",{className:"navbar",children:Object(u.jsxs)("div",{className:"nav-container",children:[Object(u.jsx)(m.b,{to:"/",onClick:function(){window.scrollTo(0,0)},className:i?"nav-logo hidden":"nav-logo ",children:Object(u.jsx)("img",{src:f,alt:""})}),Object(u.jsxs)("ul",{className:t?"nav-menu active":"nav-menu",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(m.b,{exact:!0,onClick:function(){return j()},to:"/",className:"nav-links",activeClassName:t?"":"selected",id:"home",children:Object(u.jsx)("span",{children:"\u0533\u056c\u056d\u0561\u057e\u0578\u0580"})})}),Object(u.jsx)("li",{className:"nav-item ",children:Object(u.jsx)(m.b,{exact:!0,onClick:function(){return j()},to:"/erithayer",className:"nav-links erithay",activeClassName:t?"":"selected",children:Object(u.jsx)("span",{children:"\u0565\u0580\u056b\u057f\u0570\u0561\u0575\u0565\u0580"})})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(m.b,{onClick:function(){return j()},to:"/statistics",className:"nav-links",activeClassName:t?"":"selected",children:Object(u.jsx)("span",{children:"\u054e\u056b\u0573\u0561\u056f\u0561\u0563\u0580\u0578\u0582\u0569\u0575\u0578\u0582\u0576"})})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(m.b,{onClick:function(){return j()},to:"/about",className:"nav-links",activeClassName:t?"":"selected",children:Object(u.jsx)("span",{children:"\u0544\u0565\u0580 \u0574\u0561\u057d\u056b\u0576"})})})]}),Object(u.jsx)("div",{className:"nav-icon",onClick:function(){return c(!t)},children:Object(u.jsx)("i",{className:t?"fas fa-times ":"fas fa-bars"})})]})})};var g=Object(x.f)((function(e){var t=e.history;return Object(n.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[t]),null}));c(41);var k=function(){return Object(u.jsx)("div",{className:"Stat-container",children:"\u0540\u0565\u0572\u0561\u0583\u0578\u056d\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u056b\u0581 \u0570\u0565\u057f\u0578 \u057e\u056b\u0573\u0561\u056f\u0561\u0563\u0580\u0578\u0582\u0569\u0575\u0578\u0582\u0576 \u0535\u0580\u056b\u057f\u0570\u0561\u0575\u0565\u0580\u056b \u0574\u0561\u057d\u056b\u0576"})};c(42);var y=function(){return Object(u.jsx)("div",{className:"About",children:Object(u.jsx)("img",{src:"https://i.ibb.co/n0L3MZW/arskez.png",alt:""})})},C=function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){var e;return Object(j.a)(this,c),(e=t.call(this)).state={facebook:"",twitter:"",instagram:""},e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){window.location.replace("https://www.google.com")}},{key:"render",value:function(){return Object(u.jsx)("div",{})}}]),c}(s.a.Component);c(43);var w=function(){return Object(u.jsx)("div",{className:"erithayer",children:"Erithayer"})},L=(c(44),c.p+"static/media/logo.393b0091.png"),S=c.p+"static/media/search.1ed6812e.png";var E=function(e){return Object(u.jsx)("div",{className:"Header-container",children:Object(u.jsxs)("div",{className:"Container",children:[Object(u.jsx)("div",{className:"Logo",children:Object(u.jsx)("img",{src:L,alt:""})}),Object(u.jsxs)("div",{className:"Search",children:[Object(u.jsx)("input",{type:"text",placeholder:"\u0548\u0580\u0578\u0576\u0578\u0582\u0574"}),Object(u.jsx)("img",{src:S,alt:""})]})]})})},P=(c(45),function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){var e;return Object(j.a)(this,c),(e=t.call(this)).handleCardClick=function(t){e.props.history.push("/details/".concat(t.link))},e.handleFacebookClick=function(e,t){e.stopPropagation();var c=t.facebook;window.open(c)},e.state={loading:!1,general:[]},e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),fetch("http://my-json-server.typicode.com/erithayer/newData/things").then((function(e){return e.ok?e.json():Promise.reject()})).then((function(t){return e.setState({general:t,loading:!1})}))}},{key:"render",value:function(){var e=this,t=this.props.click,c=this.state,n=c.general,s=c.loading;return console.log("rendered"),s?Object(u.jsx)(O,{}):Object(u.jsx)("div",{className:t?"Container active":"Container",children:Object(u.jsx)("div",{className:"cards",children:n.map((function(t){return Object(u.jsxs)("div",{className:"card card1",onClick:function(){return e.handleCardClick(t)},children:[Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("img",{src:t.img,alt:"",className:"Image"})}),Object(u.jsxs)("div",{className:"details",children:[Object(u.jsxs)("h3",{children:[" ",t.firstName," ",t.lastName]}),Object(u.jsx)("p",{children:t.position.first})]})]},t.id)}))})})}}]),c}(s.a.PureComponent));function D(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(u.jsxs)(m.a,{children:[Object(u.jsx)(g,{}),Object(u.jsx)(E,{}),Object(u.jsx)(N,{click:c,setClick:s}),Object(u.jsxs)(x.c,{children:[Object(u.jsx)(x.a,{path:"/",exact:!0,component:w}),Object(u.jsx)(x.a,{path:"/erithayer",component:function(e){return Object(u.jsx)(P,Object(r.a)(Object(r.a)({},e),{},{click:c}))}}),Object(u.jsx)(x.a,{path:"/details/:name",component:function(e){return Object(u.jsx)(p,Object(r.a)(Object(r.a)({},e),{},{click:c}))}}),Object(u.jsx)(x.a,{path:"/login",component:v}),Object(u.jsx)(x.a,{path:"/statistics",component:k}),Object(u.jsx)(x.a,{path:"/about",component:y}),Object(u.jsx)(x.a,{path:"/privacy-policy",component:C})]})]})}var M=Object(n.memo)(D);i.a.render(Object(u.jsx)(M,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.4213d6f8.chunk.js.map