(this.webpackJsonperithayer=this.webpackJsonperithayer||[]).push([[0],{28:function(c,e,t){},29:function(c,e,t){},30:function(c,e,t){},31:function(c,e,t){},33:function(c,e,t){},34:function(c,e,t){},35:function(c,e,t){},41:function(c,e,t){},42:function(c,e,t){},43:function(c,e,t){},44:function(c,e,t){},45:function(c,e,t){"use strict";t.r(e);var n=t(1),i=t.n(n),a=t(22),s=t.n(a),l=(t(28),t(8)),j=t(12),o=(t(29),t(10)),r=t(11),b=t(15),d=t(13),O=(t(30),t(14)),h=(t(31),t(0));var m=function(){return Object(h.jsx)("div",{className:"Loading-container",children:Object(h.jsxs)("h1",{className:"Loading",children:[Object(h.jsx)("span",{className:"let1",children:"\u0532 "}),Object(h.jsx)("span",{className:"let2",children:" \u0535 "}),Object(h.jsx)("span",{className:"let3",children:" \u054c "}),Object(h.jsx)("span",{className:"let4",children:" \u0546 "}),Object(h.jsx)("span",{className:"let5",children:" \u0548\u0552 "}),Object(h.jsx)("span",{className:"let6",children:" \u0544 "})]})})},A=function(c){Object(b.a)(t,c);var e=Object(d.a)(t);function t(){var c;return Object(o.a)(this,t),(c=e.call(this)).handleCardClick=function(e){c.props.history.push("/details/".concat(e.link))},c.handleFacebookClick=function(c,e){c.stopPropagation();var t=e.facebook;window.open(t)},c.state={loading:!1,general:[]},c}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var c=this;this.setState({loading:!0}),fetch("https://my-json-server.typicode.com/erithayer/data/general").then((function(c){return c.ok?c.json():Promise.reject()})).then((function(e){return c.setState({general:e,loading:!1})}))}},{key:"render",value:function(){var c=this,e=this.props.click,t=this.state,n=t.general,i=t.loading;return console.log("rendered"),i?Object(h.jsx)(m,{}):Object(h.jsx)("div",{className:e?"Container active":"Container",children:Object(h.jsx)("div",{className:"cards",children:n.map((function(e){return Object(h.jsxs)("div",{className:"card card1",onClick:function(){return c.handleCardClick(e)},children:[Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("img",{src:e.img,alt:"",className:"Image"})}),Object(h.jsxs)("div",{className:"details",children:[Object(h.jsxs)("h3",{children:[e.rank,". ",e.firstName," ",e.lastName]}),Object(h.jsx)("p",{children:e.position}),Object(h.jsxs)("i",{className:"icons",children:[Object(h.jsx)(O.a,{onClick:function(t){return c.handleFacebookClick(t,e)},className:"faicon",style:{color:"#385d98"},size:32}),Object(h.jsx)(O.c,{style:{color:"#00acee"},size:32}),Object(h.jsx)(O.b,{style:{color:"#8a3ab9"},size:32})]})]})]},e.rank)}))})})}}]),t}(i.a.PureComponent),u=t(6),g=t(2);t(33);var v=function(c){var e=Object(n.useState)({loading:!1,details:[]}),t=Object(j.a)(e,2),i=t[0],a=t[1],s=c.match.params.name;Object(n.useEffect)((function(){fetch("https://my-json-server.typicode.com/erithayer/".concat(s,"/").concat(s)).then((function(c){return c.ok?c.json():Promise.reject()})).then((function(c){a((function(e){return Object(l.a)(Object(l.a)({},e),{},{details:c})}))}))}),[]);var o=c.click;return Object(h.jsx)("div",{children:i.details.map((function(c){return Object(h.jsxs)("div",{className:o?"detail-container active":"detail-container",children:[Object(h.jsxs)("div",{className:"top-container",children:[Object(h.jsx)("div",{className:"image",children:Object(h.jsx)("img",{src:c.img,alt:""})}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsxs)("h3",{children:[c.firstName," ",c.lastName]}),Object(h.jsxs)("div",{className:"details",children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"\u053f\u0561\u0580\u0578\u0572\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0568: "})," ",c.netWorth]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"\u054f\u0561\u0580\u056b\u0584\u0568: "})," ",c.age]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"\u053e\u0576\u0576\u0564\u0561\u057e\u0561\u0575\u0580\u0568: "})," ",c.cityBorn]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"\u054a\u0561\u0577\u057f\u0578\u0576\u0568: "})," ",c.position]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"\u0544\u0561\u057d\u0576\u0561\u0563\u056b\u057f\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0568: "})," ",c.proffesion]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"\u053f\u0578\u0582\u057d\u0561\u056f\u0581\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0568: "})," ",c.party]})]})]})]}),Object(h.jsxs)("div",{className:"biography",children:[Object(h.jsx)("div",{className:"title",children:Object(h.jsx)("h2",{children:"\u053f\u0565\u0576\u057d\u0561\u0563\u0580\u0578\u0582\u0569\u0575\u0578\u0582\u0576"})}),Object(h.jsx)("p",{children:c.biography})]})]},c.rank)}))})};t(34);var N=function(){return Object(h.jsx)("div",{className:"Login",children:Object(h.jsxs)("div",{className:"login-container",children:[Object(h.jsx)("div",{className:"username",children:Object(h.jsx)("input",{type:"text",placeholder:"username"})}),Object(h.jsx)("div",{className:"password",children:Object(h.jsx)("input",{type:"text",placeholder:"password"})}),Object(h.jsx)("button",{onClick:function(){console.log("event.target.checked")},children:"Login"})]})})},x=(t(35),t.p+"static/media/logo-5.11e427cb.png");var I=function(c){var e=c.click,t=c.setClick,i=Object(n.useState)(!1),a=Object(j.a)(i,2),s=a[0],l=a[1],o=function(){t(!1)},r=function(){window.scrollY>=200?l(!0):l(!1)};return Object(n.useEffect)((function(){window.addEventListener("scroll",r)}),[]),Object(h.jsx)("nav",{className:"navbar",children:Object(h.jsxs)("div",{className:"nav-container",children:[Object(h.jsx)(u.c,{to:"/",onClick:function(){window.scrollTo(0,0)},className:s?"nav-logo hidden":"nav-logo ",children:Object(h.jsx)("img",{src:x,alt:""})}),Object(h.jsxs)("ul",{className:e?"nav-menu active":"nav-menu",children:[Object(h.jsx)("li",{className:"search",children:Object(h.jsxs)("div",{className:"search-div",children:[Object(h.jsx)("input",{type:"text",placeholder:"\u0548\u0580\u0578\u0576\u0578\u0582\u0574"}),Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAC4jAAAuIwF4pT92AAAGYmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA0LTA5VDE3OjU5OjQ1LTA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNC0wOVQxODo1NToyMC0wNzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNC0wOVQxODo1NToyMC0wNzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZjIyMzFkOS01NzM1LWE2NGYtOTg0Zi1jNGVmNGMwOGQ1YWYiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2Y2VjMzYwNS0xNDllLTg2NGItODY5NC02NWRjZjFlZTFlZWEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MWI4N2EwYS01NmE2LWQ2NDktYjI2MC0xYjI4MDAyODc5YTIiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYxYjg3YTBhLTU2YTYtZDY0OS1iMjYwLTFiMjgwMDI4NzlhMiIgc3RFdnQ6d2hlbj0iMjAyMS0wNC0wOVQxNzo1OTo0NS0wNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjVmMjIzMWQ5LTU3MzUtYTY0Zi05ODRmLWM0ZWY0YzA4ZDVhZiIgc3RFdnQ6d2hlbj0iMjAyMS0wNC0wOVQxODo1NToyMC0wNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjeQ7RoAAB3XSURBVHic7Z15vFRl/cffc+/lsl9AQAERRBQ11DDXOyquaZQt7luGlpZrmWZZ+St/uWSl5lKZW2nmkkulpaYpgvqbm4qZSwISEikqAhLL5QJ3md8fn5nXHS4zd87znGXO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",alt:""})]})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(u.c,{exact:!0,onClick:function(){return o()},to:"/",className:"nav-links",activeClassName:e?"":"selected",id:"home",children:Object(h.jsx)("span",{children:"\u0533\u056c\u056d\u0561\u057e\u0578\u0580"})})}),Object(h.jsx)("li",{className:"nav-item ",children:Object(h.jsx)(u.c,{exact:!0,onClick:function(){return o()},to:"/erithayer",className:"nav-links erithay",activeClassName:e?"":"selected",children:Object(h.jsx)("span",{children:"\u0565\u0580\u056b\u057f\u0570\u0561\u0575\u0565\u0580"})})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(u.c,{onClick:function(){return o()},to:"/statistics",className:"nav-links",activeClassName:e?"":"selected",children:Object(h.jsx)("span",{children:"\u054e\u056b\u0573\u0561\u056f\u0561\u0563\u0580\u0578\u0582\u0569\u0575\u0578\u0582\u0576"})})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(u.c,{onClick:function(){return o()},to:"/about",className:"nav-links",activeClassName:e?"":"selected",children:Object(h.jsx)("span",{children:"\u0544\u0565\u0580 \u0574\u0561\u057d\u056b\u0576"})})}),Object(h.jsx)("li",{className:"nav-item",id:"login-button",children:Object(h.jsx)(u.c,{onClick:function(){return o()},to:"/login",className:"nav-links button",children:Object(h.jsx)("button",{className:"login-button",onClick:function(){return o()},children:"\u0544\u0578\u0582\u057f\u0584"})})})]}),Object(h.jsx)("div",{className:"nav-icon",onClick:function(){return t(!e)},children:Object(h.jsx)("i",{className:e?"fas fa-times ":"fas fa-bars"})})]})})};var p=Object(g.f)((function(c){var e=c.history;return Object(n.useEffect)((function(){var c=e.listen((function(){window.scrollTo(0,0)}));return function(){c()}}),[]),null}));t(41);var k=function(){return Object(h.jsx)("div",{className:"Stat-container",children:"\u0540\u0565\u0572\u0561\u0583\u0578\u056d\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u056b\u0581 \u0570\u0565\u057f\u0578 \u057e\u056b\u0573\u0561\u056f\u0561\u0563\u0580\u0578\u0582\u0569\u0575\u0578\u0582\u0576 \u0535\u0580\u056b\u057f\u0570\u0561\u0575\u0565\u0580\u056b \u0574\u0561\u057d\u056b\u0576"})};t(42);var w=function(){return Object(h.jsx)("div",{className:"About",children:Object(h.jsx)("img",{src:"https://i.ibb.co/n0L3MZW/arskez.png",alt:""})})},G=function(c){Object(b.a)(t,c);var e=Object(d.a)(t);function t(){var c;return Object(o.a)(this,t),(c=e.call(this)).state={facebook:"",twitter:"",instagram:""},c}return Object(r.a)(t,[{key:"componentDidMount",value:function(){window.location.replace("https://www.google.com")}},{key:"render",value:function(){return Object(h.jsx)("div",{})}}]),t}(i.a.Component),B=(t(43),t.p+"static/media/logo.393b0091.png");var M=function(c){return Object(h.jsx)(u.b,{to:"/",children:Object(h.jsxs)("div",{className:"Header-container",children:[Object(h.jsxs)("div",{className:"Container",children:[Object(h.jsx)("div",{className:"Logo",children:Object(h.jsx)("img",{src:B,alt:""})}),Object(h.jsx)("div",{className:"Title",children:Object(h.jsx)("h1",{children:"\u054e\u0561\u057c\u0565\u056c \u0562\u0578\u056c\u0578\u0580\u056b\u0576 \u057f\u0576\u0578\u057e \u057f\u0565\u0572\u0578\u057e"})})]}),Object(h.jsx)("div",{className:"title"})]})})};t(44);var R=function(){return Object(h.jsx)("div",{className:"erithayer",children:"Erithayer"})},y=function(c){Object(b.a)(t,c);var e=Object(d.a)(t);function t(){var c;return Object(o.a)(this,t),(c=e.call(this)).state={data:[]},c}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var c=this;fetch("https://api.erithay.com/things").then((function(c){return c.ok?c.json():Promise.reject()})).then((function(e){console.log(e),c.setState({data:e})}))}},{key:"render",value:function(){return Object(h.jsx)("div",{children:this.state.data.name})}}]),t}(i.a.Component);function T(){var c=Object(n.useState)(!1),e=Object(j.a)(c,2),t=e[0],i=e[1];return Object(h.jsxs)(u.a,{children:[Object(h.jsx)(p,{}),Object(h.jsx)(M,{click:t,setClick:i}),Object(h.jsx)(I,{click:t,setClick:i}),Object(h.jsx)(y,{}),Object(h.jsxs)(g.c,{children:[Object(h.jsx)(g.a,{path:"/",exact:!0,component:function(c){return Object(h.jsx)(A,Object(l.a)(Object(l.a)({},c),{},{click:t}))}}),Object(h.jsx)(g.a,{path:"/details/:name",component:function(c){return Object(h.jsx)(v,Object(l.a)(Object(l.a)({},c),{},{click:t}))}}),Object(h.jsx)(g.a,{path:"/login",component:N}),Object(h.jsx)(g.a,{path:"/statistics",component:k}),Object(h.jsx)(g.a,{path:"/about",component:w}),Object(h.jsx)(g.a,{path:"/erithayer",component:R}),Object(h.jsx)(g.a,{path:"/privacy-policy",component:G})]})]})}var E=Object(n.memo)(T);s.a.render(Object(h.jsx)(E,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.2b2ee4be.chunk.js.map