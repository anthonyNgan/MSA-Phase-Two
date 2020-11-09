(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{115:function(e,t,n){e.exports=n(154)},120:function(e,t,n){},154:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),o=n.n(c),i=(n(120),n(14)),l=n(63),u=n(12),s=n(57),m=n(102),p=n(214),f=n(202),d=n(215),h=n(219),E=n(216),b=n(66),g=n(155),v=n(220),w=n(207),j=n(221),O=n(201),y=n(94),k=n.n(y),x=n(95),I=n.n(x),N=n(97),S=n.n(N),C=n(98),P=n.n(C),T=n(99),W=n.n(T),L=n(96),A=n.n(L),D=n(43),B=n.n(D),F=n(197),z=n(198),M=n(200),R=n(199),U=n(93),H=n.n(U),J=n(92),G=n.n(J),V=n(193),q=function(e){var t=e.className,n=e.link,c=e.onClick,o=e.children;return n&&"string"===typeof n?r.a.createElement(V.a,{button:!0,className:t,children:o,component:Object(a.forwardRef)((function(e,t){return r.a.createElement(l.b,Object.assign({exact:!0},e,{innerRef:t}))})),to:n}):r.a.createElement(V.a,{button:!0,className:t,children:o,onClick:c})},K=(B.a.string.isRequired,B.a.string,B.a.elementType,B.a.array,Object(f.a)((function(e){return Object(j.a)({menuItem:{"&.active":{background:"light-blue","& .MuiListItemIcon-root":{color:"#fff"}}},menuItemIcon:{color:"#fff"}})}))),$=function e(t){var n=t.name,c=t.link,o=t.Icon,l=t.items,u=void 0===l?[]:l,s=K(),m=u&&u.length>0,p=Object(a.useState)(!1),f=Object(i.a)(p,2),d=f[0],h=f[1];var E=r.a.createElement(q,{className:s.menuItem,link:c,onClick:function(){h(!d)}},!!o&&r.a.createElement(F.a,{className:s.menuItemIcon},r.a.createElement(o,null)),r.a.createElement(z.a,{primary:n,inset:!o}),m&&!d&&r.a.createElement(G.a,null),m&&d&&r.a.createElement(H.a,null)),b=m?r.a.createElement(R.a,{in:d,timeout:"auto",unmountOnExit:!0},r.a.createElement(M.a,null),r.a.createElement(O.a,{component:"div",disablePadding:!0},u.map((function(t,n){return r.a.createElement(e,Object.assign({},t,{key:n}))})))):null;return r.a.createElement(r.a.Fragment,null,E,b)},Q=[{name:"Dashboard",link:"/",Icon:k.a},{name:"Orders",link:"/orders",Icon:I.a},{name:"Chiropractor List",link:"/chiropractors",Icon:A.a},{name:"Patient List",link:"/patients",Icon:S.a},{name:"Reports",link:"/reports",Icon:P.a},{name:"Appointments",Icon:W.a,items:[{name:"Urgrent"},{name:"All"}]}],X=Object(f.a)((function(e){return Object(j.a)({appMenu:{width:"100"},navList:{width:240},menuItem:{width:240},menuItemIcon:{color:"#fff"}})})),Y=function(){var e=X();return r.a.createElement(O.a,{component:"nav",className:e.appMenu,disablePadding:!0},Q.map((function(e,t){return r.a.createElement($,Object.assign({},e,{key:t}))})))},Z=n(203),_=n(204),ee=n(205),te=n(206),ne=n(104),ae=n(105),re=n(106),ce=Object(f.a)({root:{minWidth:275}}),oe=function(){var e=ce(),t=Object(a.useState)([]),n=Object(i.a)(t,2),c=n[0];n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{className:e.root},r.a.createElement(_.a,null,r.a.createElement(ee.a,{container:!0,justify:"space-between",spacing:3},"Hello Bro!"),r.a.createElement(te.a,null,"What do you have on today?"))),r.a.createElement(ne.a,{plugins:[ae.a,re.a],initialView:"dayGridMonth",editable:!0,selectable:!0,select:function(e){var t=prompt("Please enter your new booking"),n=e.view.calendar;n.unselect(),t&&n.addEvent({title:t,start:e.startStr,end:e.endStr,allDay:e.allDay})},eventClick:function(e){console.log("hello world"),e.event.remove()},events:c}))},ie=n(7),le=n.n(ie),ue=n(15),se=n(26),me=n(70),pe=(n(100),"https://chiropractor-api.azurewebsites.net/api/"),fe=pe+"chiropractors/",de=function(){var e=Object(ue.a)(le.a.mark((function e(){var t;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(fe,{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=Object(ue.a)(le.a.mark((function e(t){var n;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(fe,{method:"POST",body:JSON.stringify(t),headers:{Accept:"application/json","Content-Type":"application/json"}});case 2:return n=e.sent,e.abrupt("return",n.json().then((function(e){console.log("Success:",e)})).catch((function(e){console.log("Error:",e)})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(ue.a)(le.a.mark((function e(t){var n;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(fe+"".concat(t),{method:"PUT",body:JSON.stringify({chiropractorId:5,firstname:"WHO",lastname:"WHO"}),headers:{Accept:"application/json","Content-Type":"application/json"}});case 2:return n=e.sent,e.abrupt("return",n.json().then((function(e){console.log("Success:",e)})).catch((function(e){console.log("Error:",e)})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),be=function(){var e=Object(ue.a)(le.a.mark((function e(t){var n;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(fe+"".concat(t),{method:"DELETE"});case 2:return n=e.sent,e.abrupt("return",n.json().then((function(e){console.log("Success:",e)})).catch((function(e){console.log("Error:",e)})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ge=n(103),ve=n(217),we=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),l=Object(i.a)(o,2),u=l[0],s=l[1],m=Object(ge.a)(),p=m.handleSubmit,f=m.errors,d=function(e){s(Object(me.a)(Object(me.a)({},u),{},Object(se.a)({},e.target.name,e.target.value))),console.log(u)},h=function(){var e=Object(ue.a)(le.a.mark((function e(t){return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(ue.a)(le.a.mark((function e(t){return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,Ee(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){(function(){var e=Object(ue.a)(le.a.mark((function e(){return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,de();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[d,h,E]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"List of Chiropractors"),n.map((function(e){return r.a.createElement("li",{key:e.chiropractorId}," ",e.firstName," ",e.lastName," ",e.emailAddress," ",e.phoneNumber," ",e.timeCreated)})),r.a.createElement("h3",null,"Add new Chiropractor"),r.a.createElement("form",{onSubmit:p((function(e){console.log("Submit: ",u),he(u)}))},r.a.createElement("label",null,"Id: "),r.a.createElement(ve.a,{type:"text",id:"id",name:"ID"}),r.a.createElement("label",null,"First Name: "),r.a.createElement(ve.a,{type:"text",id:"firstName",name:"firstName",onChange:d}),f.firstName&&f.firstName.message,r.a.createElement("label",null,"Last Name: "),r.a.createElement(ve.a,{type:"text",id:"lastName",name:"lastName",onChange:d}),f.lastname&&f.lastname.message,r.a.createElement(w.a,{variant:"contained",color:"primary",type:"submit",value:"Submit"},"Submit"),r.a.createElement(w.a,{variant:"contained",color:"default",onClick:function(){return E(5)}},"Update"),r.a.createElement(w.a,{variant:"contained",color:"secondary",onClick:function(){return h(1)}}," Delete")))},je=function(){return r.a.createElement(r.a.Fragment,null,"Hello Patients")},Oe=n(208),ye=n(209),ke=n(210),xe=n(211),Ie=n(212),Ne=n(213),Se=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(Oe.a,{children:r.a.createElement(ye.a,{size:60,round:!0}),url:"https://www.facebook.com/sharer/sharer.php?u="+window.location}),r.a.createElement(ke.a,{children:r.a.createElement(xe.a,{size:60,round:!0}),url:window.location.href}),r.a.createElement(Ie.a,{children:r.a.createElement(Ne.a,{size:60,round:!0}),url:window.location.href})))},Ce=n(47),Pe=function(){return r.a.createElement(oe,null)},Te=function(){return r.a.createElement(we,null)},We=function(){return r.a.createElement(b.a,{variant:"h3",component:"h1"},"Orders Page")},Le=function(){return r.a.createElement(je,null)},Ae=Object(f.a)((function(e){return{root:{display:"flex"},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,paddingTop:e.spacing(4),paddingBottom:e.spacing(4),background:"#0253B3",color:"#fff"},content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)}}})),De=Object(Ce.c)((function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Ae(),f=Object(m.a)({palette:{type:n?"dark":"light"}}),b=Object(Ce.b)().loginWithRedirect,j=Object(Ce.b)().logout;return r.a.createElement(p.a,{theme:f},r.a.createElement(g.a,null,r.a.createElement(l.a,null,r.a.createElement("div",{className:Object(s.a)("App",o.root)},r.a.createElement(d.a,null),r.a.createElement(h.a,{variant:"permanent",classes:{paper:o.drawerPaper}},r.a.createElement(Y,null),r.a.createElement(v.a,{selected:n,onChange:function(){return c(!n)}},"DarkMode"),r.a.createElement(Se,null),r.a.createElement(w.a,{onClick:function(){return b()}},"Log In"),r.a.createElement(w.a,{onClick:function(){return j({returnTo:window.location.origin})}},"Log Out")),r.a.createElement("main",{className:o.content},r.a.createElement(E.a,{maxWidth:"lg",className:o.container},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,component:Pe}),r.a.createElement(u.a,{path:"/chiropractors",exact:!0,component:Te}),r.a.createElement(u.a,{path:"/orders",component:We}),r.a.createElement(u.a,{path:"/patients",component:Le}))))))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ce.a,{domain:"dashboardhealthboard.au.auth0.com",clientId:"f9Ne81UOg4KOWkzg0ixsW0PpeVIhjDgj",redirectUri:window.location.origin},r.a.createElement(De,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[115,1,2]]]);
//# sourceMappingURL=main.4bc7f70c.chunk.js.map