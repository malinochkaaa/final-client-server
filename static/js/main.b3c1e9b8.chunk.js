(this["webpackJsonpsalute-demo-app"]=this["webpackJsonpsalute-demo-app"]||[]).push([[0],{121:function(e,t,n){},178:function(e,t,n){},182:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n(0),a=n.n(s),i=n(48),r=n.n(i),o=(n(89),n(73)),l=n(74),d=n(83),u=n(82),j=n(20),p=n(75),b=(n(90),n(1)),h=n(34),f=n(3),x=n(81),O=n(13),m=n(6),v=(n(121),n(4)),g=function(e){e.sendData({action:{action_id:"shut_up",parameters:{}}})},y=function(e){var t=e.prefix,n=Object(m.g)();return Object(s.useEffect)((function(){-1!==e.nextPage&&(0===e.nextPage?n.push("".concat(t,"/museums")):1===e.nextPage&&n.push("".concat(t,"/fav")))}),[e.nextPage]),window.currentURL="/",Object(c.jsxs)("div",{className:document.documentElement.clientWidth<=400?"phone-menu-container":"menu-container",children:[Object(c.jsx)("h1",{style:f.headline1,children:"\u041c\u0435\u043d\u044e"}),Object(c.jsxs)(v.MarkedList,{children:[Object(c.jsx)(v.MarkedItem,{children:Object(c.jsx)("h2",{style:f.headline2,children:Object(c.jsx)(O.b,{to:"".concat(t,"/museums"),onClick:function(){return g(e.assistant)},children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043c\u0443\u0437\u0435\u0435\u0432 \u041c\u043e\u0441\u043a\u0432\u044b"})})}),Object(c.jsx)(v.MarkedItem,{children:Object(c.jsx)("h2",{style:f.headline2,children:Object(c.jsx)(O.b,{to:"".concat(t,"/fav"),onClick:function(){console.log("shut up"),g(e.assistant)},children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0445 \u043c\u0443\u0437\u0435\u0435\u0432"})})})]})]})};function k(){var e=Object(j.a)(["\n    padding-top: 190px;\n    padding-bottom: 430px;\n    padding-left: 200px;\n    padding-right: 170px;\n"]);return k=function(){return e},e}var w=b.default.div(k()),_=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(w,{children:Object(c.jsx)("h1",{style:f.headline1,children:"404 Not Found"})})})},C=n(9),I=(n(31),n(10)),N=n(18),S=n.n(N),B=n(23),E=n(24),F=n.n(E),M="https://museumguide.herokuapp.com/";function A(){return(A=Object(B.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.post("".concat(M,"add_to_favorites"),{user_id:window.user_id,fav_id:t});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(B.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.post("".concat(M,"delete_from_favorites"),{user_id:window.user_id,fav_id:t});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return(L=Object(B.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(window.user_id),e.next=3,F.a.post("".concat(M,"museums"),{user_id:window.user_id});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return(R=Object(B.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.post("".concat(M,"museums/by_id"),{museum_id:t,user_id:window.user_id});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return(q=Object(B.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.post("".concat(M,"favorites"),{user_id:window.user_id});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e,t){e?function(e){T.apply(this,arguments)}(t):function(e){A.apply(this,arguments)}(t)}window.user_id="";var z=function(e){var t=Object(s.useState)(e.info.in_favourites),n=Object(C.a)(t,2),a=n[0],i=n[1];return Object(s.useEffect)((function(){return i(e.info.in_favourites)}),[e.info.in_favourites]),Object(c.jsx)("div",{className:"card-style",children:Object(c.jsx)(v.Card,{style:{width:"30rem",backgroundColor:"rgba(0, 44, 66, 0.7)"},children:Object(c.jsxs)(v.CardContent,{compact:!0,children:[Object(c.jsx)(v.TextBox,{style:{fontSize:"16px",position:"absolute",top:"10px"},title:e.ind}),Object(c.jsx)(v.Cell,{contentLeft:Object(c.jsx)("div",{className:"img-style",children:Object(c.jsx)(v.Image,{className:"img-m",src:e.info.pictures})}),content:Object(c.jsxs)(v.TextBox,{children:[Object(c.jsx)(v.TextBoxTitle,{className:"text-style",children:Object(c.jsx)(O.b,{to:{pathname:"".concat(e.prefix,"/museums/first")},onClick:function(){return e.openMuseum(e.info.id)},children:e.info.name})}),Object(c.jsx)(v.TextBoxSubTitle,{className:"text-style",children:e.info.address}),Object(c.jsx)(v.ActionButton,{onClick:function(){U(a,e.info.id),i(!a)},size:"m",view:"primary",pin:"square-square",contentLeft:a?Object(c.jsx)(I.f,{}):Object(c.jsx)(I.g,{})})]})})]})})})},P=function(e){var t=Object(s.useState)(e.info.in_favourites),n=Object(C.a)(t,2),a=n[0],i=n[1];return Object(s.useEffect)((function(){return i(e.info.in_favourites)}),[e.info.in_favourites]),Object(c.jsx)("div",{className:"card-vert-style",children:Object(c.jsx)(v.Card,{style:{width:"20rem",backgroundColor:"rgba(0, 44, 66, 0.7)"},children:Object(c.jsxs)(v.CardBody,{className:"img-style",children:[Object(c.jsx)(v.Image,{className:"img-m",src:e.info.pictures}),Object(c.jsxs)(v.CardContent,{children:[Object(c.jsxs)(v.TextBox,{style:{fontSize:"16px",position:"absolute",top:"10px"},title:e.ind,children:[Object(c.jsx)(v.TextBoxTitle,{className:"text-style",children:Object(c.jsx)(O.b,{to:{pathname:"".concat(e.prefix,"/museums/first")},onClick:function(){return e.openMuseum(e.info.id)},children:e.info.name})}),Object(c.jsx)(v.TextBoxSubTitle,{className:"text-style",children:e.info.address})]}),Object(c.jsx)(v.ActionButton,{onClick:function(){U(a,e.info.id),i(!a)},size:"m",view:"primary",pin:"square-square",contentLeft:a?Object(c.jsx)(I.f,{}):Object(c.jsx)(I.g,{})})]})]})})})};function D(){var e=Object(j.a)(["padding: 30px;"]);return D=function(){return e},e}var W=b.default.div(D());var G=function(e){var t=function(t){e.openMuseumById(t)},n=function(){""!==window.user_id&&function(){return L.apply(this,arguments)}().then((function(t){j(t.data),e.fillArrayInd_Id(t.data,"all"),console.log("loaded")}))},a=Object(s.useState)(!1),i=Object(C.a)(a,2),r=i[0],o=i[1],l=Object(s.useState)([]),d=Object(C.a)(l,2),u=d[0],j=d[1];Object(s.useEffect)((function(){return o(!0)}),[u]),Object(s.useEffect)((function(){r||n()})),Object(s.useEffect)((function(){-1!==e.openId&&r&&p.push({pathname:"".concat(e.prefix,"/museums/first")})}),[e.openId]);var p=Object(m.g)();return Object(s.useEffect)((function(){!function(e,t){var n=t.id-1;if(0!==e.length&&n>=0){var c=e[n].id,s=e[n].in_favourites;console.log("inFave = ",s);var a=t.action;(s&&"del"===a||!s&&"add"===a)&&U(s,c)}}(u,e.editFav),setTimeout(n(),1e3)}),[e.editFav]),window.currentURL=p.location.pathname,console.log(document.documentElement.clientWidth),Object(c.jsxs)("div",{className:"list-scroll",children:[Object(c.jsx)("div",{children:Object(c.jsx)(W,{children:Object(c.jsx)(v.Container,{children:Object(c.jsx)(v.Header,{back:!0,title:"\u041c\u0443\u0437\u0435\u0438",subtitle:"\u0421\u043f\u0438\u0441\u043e\u043a \u043c\u0443\u0437\u0435\u0435\u0432 \u041c\u043e\u0441\u043a\u0432\u044b",onClick:function(){o(!1),p.goBack()}})})})}),Object(c.jsx)("div",{children:0===u.length?Object(c.jsx)(v.Spinner,{size:100,style:{margin:"auto"}}):Object(c.jsx)("div",{children:u===[]?Object(c.jsx)("div",{}):u.map((function(n,s){return document.documentElement.clientWidth<=400?Object(c.jsx)(P,{ind:s+1,info:n,openMuseum:t,prefix:e.prefix},n.id):Object(c.jsx)(z,{ind:s+1,info:n,openMuseum:t,prefix:e.prefix},n.id)}))})})]})};function J(){var e=Object(j.a)(["padding: 30px;"]);return J=function(){return e},e}var H=b.default.div(J());var K=function(e){var t=function(t){e.openMuseumById(t)},n=function(){(function(){return q.apply(this,arguments)})().then((function(t){j(t.data),e.fillArrayInd_Id(t.data,"fav")}))},a=Object(s.useState)(!1),i=Object(C.a)(a,2),r=i[0],o=i[1],l=Object(s.useState)([]),d=Object(C.a)(l,2),u=d[0],j=d[1];Object(s.useEffect)((function(){return o(!0)}),[u]),Object(s.useEffect)((function(){r||n()})),Object(s.useEffect)((function(){-1!==e.openId&&r&&p.push({pathname:"".concat(e.prefix,"/museums/first")})}),[e.openId]);var p=Object(m.g)();return Object(s.useEffect)((function(){"del"===e.editFav.action&&function(e,t){var n=t.id-1;return 0!==e.length&&n>=0&&(U(!0,e[n].id),console.log(!0),!0)}(u,e.editFav)&&n()}),[e.editFav]),window.currentURL=p.location.pathname,Object(c.jsxs)("div",{className:"list-scroll",children:[Object(c.jsx)("div",{children:Object(c.jsx)(H,{children:Object(c.jsx)(v.Container,{children:Object(c.jsx)(v.Header,{back:!0,title:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",subtitle:"\u0421\u043f\u0438\u0441\u043e\u043a \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0445 \u043c\u0443\u0437\u0435\u0435\u0432",onClick:function(){p.goBack()}})})})}),0===u.length&&r?Object(c.jsx)("h1",{children:"\u041d\u0435\u0442 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0445 \u043c\u0443\u0437\u0435\u0435\u0432"}):Object(c.jsx)("div",{className:"card-style",children:u===[]?Object(c.jsx)("div",{}):u.map((function(n,s){return document.documentElement.clientWidth<=400?(console.log("vert"),Object(c.jsx)(P,{ind:s+1,info:n,openMuseum:t,prefix:e.prefix},n.id)):Object(c.jsx)(z,{ind:s+1,info:n,openMuseum:t,prefix:e.prefix},n.id)}))})]})},Q=(n(178),n(27)),V="https://online-fotoshop.ru/wp-content/uploads/bfi_thumb/dummy-transparent-p2gfbv7qayyokn2iuybz9hr1rkhapcogpd9eywlyeq.png",X=function(e){var t=Object(s.useState)(1),n=Object(C.a)(t,2),a=n[0],i=n[1],r=(void 0==e.pictures?[V,V]:e.pictures).map((function(e,t){return Object(c.jsx)(v.CarouselItem,{children:Object(c.jsx)(v.Card,{style:{width:"14rem",height:"11rem",margin:"0.4rem"},children:Object(c.jsx)(v.CardBody,{children:Object(c.jsx)(v.CardContent,{children:Object(c.jsx)("div",{className:"phone-img-t",children:Object(c.jsx)(v.Image,{title:"Item ".concat(t),src:e})})})})})},t)}));return Object(c.jsx)(v.Container,{children:Object(c.jsx)(v.CarouselGridWrapper,{children:Object(c.jsx)(v.Carousel,{as:Q.Row,axis:"x",index:a,scrollSnapType:"mandatory",detectActive:!0,detectThreshold:.5,stylingCallback:v.stylingCallback,stylingResetCallback:v.stylingResetCallback,onIndexChange:function(e){return i(e)},paddingStart:"50%",paddingEnd:"50%",children:r})})})},Y="https://online-fotoshop.ru/wp-content/uploads/bfi_thumb/dummy-transparent-p2gfbv7qayyokn2iuybz9hr1rkhapcogpd9eywlyeq.png",Z=function(e){var t=Object(s.useState)(1),n=Object(C.a)(t,2),a=n[0],i=n[1],r=(void 0==e.pictures?[Y,Y]:e.pictures).map((function(e,t){return Object(c.jsx)(v.CarouselItem,{children:Object(c.jsx)(v.Card,{style:{width:"12.5rem",height:"10rem",margin:"0.4rem"},children:Object(c.jsx)(v.CardBody,{children:Object(c.jsx)(v.CardContent,{children:Object(c.jsx)("div",{className:"img-t",children:Object(c.jsx)(v.Image,{title:"Item ".concat(t),src:e})})})})})},t)}));return Object(c.jsx)(v.Container,{children:Object(c.jsx)(v.CarouselGridWrapper,{children:Object(c.jsx)(v.Carousel,{as:Q.Row,axis:"x",index:a,scrollSnapType:"mandatory",detectActive:!0,detectThreshold:.5,stylingCallback:v.stylingCallback,stylingResetCallback:v.stylingResetCallback,onIndexChange:function(e){return i(e)},paddingStart:"50%",paddingEnd:"50%",children:r})})})},$=n(19);var ee=function(e){var t=function(){(function(e){return R.apply(this,arguments)})(e.id).then((function(e){u(e.data),h(e.data.in_favourites)}))},n=Object(s.useState)(!1),a=Object(C.a)(n,2),i=a[0],r=a[1],o=Object(s.useState)({}),l=Object(C.a)(o,2),d=l[0],u=l[1],j=Object(s.useState)(!1),p=Object(C.a)(j,2),b=p[0],h=p[1],x=Object(m.g)();Object(s.useEffect)((function(){return r(!0)}),[d]),Object(s.useEffect)((function(){i||t()})),Object(s.useEffect)((function(){i&&t()}),[e.id]),Object(s.useEffect)((function(){i&&function(e,t,n,c){("add"===n&&!t||"del"===n&&t)&&(console.log("update fav"),U(t,e),c(!t))}(e.id,b,e.editFav.action,h)}),[e.editFav]),window.currentURL=x.location.pathname;var O=void 0!=d.worktime?d.worktime:new Array(7).fill("loading..."),g=void 0==d.station?Object(c.jsx)("p",{children:"loading..."}):d.station.map((function(e,t){return Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{style:f.paragraph1,children:e}),Object(c.jsx)("p",{style:f.paragraph1,children:" (".concat(d.distance[t],".)")})]})}));return i?Object(c.jsx)("div",{className:"scroll",children:Object(c.jsxs)("div",{className:"name-container",children:[Object(c.jsx)(v.ActionButton,{back:!0,size:"m",view:"clear",pin:"square-square",contentLeft:Object(c.jsx)(I.b,{}),onClick:function(){console.log("back"),x.goBack()}}),Object(c.jsx)("h1",{style:f.headline1,children:d.name}),Object(c.jsx)("p",{style:f.paragraph1,className:"block-style",children:d.description}),Object(c.jsx)("div",{className:"div-style",children:1280==document.documentElement.clientWidth&&800==document.documentElement.clientHeight?Object(c.jsx)(Z,{pictures:d.pictures}):Object(c.jsx)(X,{pictures:d.pictures})}),Object(c.jsx)("div",{className:"align-right",children:Object(c.jsx)(v.Button,{onClick:function(){U(b,d.id),h(!b)},text:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",size:"l",view:"primary",contentLeft:b?Object(c.jsx)(I.f,{}):Object(c.jsx)(I.g,{})})}),Object(c.jsxs)("div",{className:"div-style",children:[Object(c.jsx)($.e,{className:"small-icon"}),Object(c.jsx)("h3",{style:f.headline3,children:" \u0410\u0434\u0440\u0435\u0441: "}),Object(c.jsx)("p",{style:f.paragraph1,children:d.address})]}),Object(c.jsxs)("div",{className:"div-style",children:[Object(c.jsx)($.g,{className:"small-icon"}),Object(c.jsx)("h3",{style:f.headline3,children:" \u0422\u0435\u043b\u0435\u0444\u043e\u043d: "}),Object(c.jsx)("p",{style:f.paragraph1,children:d.phone})]}),Object(c.jsxs)("div",{className:"div-style",children:[Object(c.jsx)($.d,{className:"small-icon"}),Object(c.jsx)("h3",{style:f.headline3,children:" \u0421\u0430\u0439\u0442: "}),Object(c.jsx)("a",{href:d.website,className:"inline-style",children:Object(c.jsx)("p",{style:f.paragraph1,children:d.website})})]}),Object(c.jsxs)("div",{className:"div-style",children:[Object(c.jsx)($.a,{className:"small-icon"}),Object(c.jsx)("h3",{style:f.headline3,children:" \u0412\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b:"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{style:f.paragraph1,children:"\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a: "}),Object(c.jsx)("p",{style:f.paragraph1,children:O[0]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{style:f.paragraph1,children:"\u0412\u0442\u043e\u0440\u043d\u0438\u043a: "}),Object(c.jsx)("p",{style:f.paragraph1,children:O[1]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{style:f.paragraph1,children:"\u0421\u0440\u0435\u0434\u0430: "}),Object(c.jsx)("p",{style:f.paragraph1,children:O[2]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{style:f.paragraph1,children:"\u0427\u0435\u0442\u0432\u0435\u0440\u0433: "}),Object(c.jsx)("p",{style:f.paragraph1,children:O[3]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{style:f.paragraph1,children:"\u041f\u044f\u0442\u043d\u0438\u0446\u0430: "}),Object(c.jsx)("p",{style:f.paragraph1,children:O[4]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{style:f.paragraph1,children:"\u0421\u0443\u0431\u0431\u043e\u0442\u0430: "}),Object(c.jsx)("p",{style:f.paragraph1,children:O[5]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{style:f.paragraph1,children:"\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435: "}),Object(c.jsx)("p",{style:f.paragraph1,children:O[6]})]})]}),Object(c.jsxs)("div",{className:"div-style",children:[Object(c.jsx)($.h,{className:"small-icon"}),Object(c.jsx)("h3",{style:f.headline3,children:" \u0421\u0442\u0430\u043d\u0446\u0438\u044f \u043c\u0435\u0442\u0440\u043e: "}),g]}),Object(c.jsxs)("div",{className:"div-style",children:[Object(c.jsx)($.f,{className:"small-icon"}),Object(c.jsx)("h3",{style:f.headline3,children:" \u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0431\u0438\u043b\u0435\u0442\u043e\u0432: "}),Object(c.jsx)("p",{style:f.paragraph1,children:d.payment})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("a",{target:"_blank",href:d.inst,className:"inline-style",children:Object(c.jsx)($.c,{className:"null"===d.inst?"icon-no-link":"icon-with-link"})}),Object(c.jsx)("a",{target:"_blank",href:d.facebook,className:"inline-style",children:Object(c.jsx)($.b,{className:"null"===d.facebook?"icon-no-link":"icon-with-link"})}),Object(c.jsx)("a",{target:"_blank",href:d.twitter,className:"inline-style",children:Object(c.jsx)($.i,{className:"null"===d.twitter?"icon-no-link":"icon-with-link"})}),Object(c.jsx)("a",{target:"_blank",href:d.vk,className:"inline-style",children:Object(c.jsx)($.j,{className:"null"===d.vk?"icon-no-link":"icon-with-link"})})]})]})}):Object(c.jsx)("div",{children:"loading..."})},te=n(80);function ne(){var e=Object(j.a)(["\n    html:root {\n        min-height: 100vh;\n        color: ",';\n        background-position: center center;\n        background-attachment: fixed;\n        background-image: url("https://res.cloudinary.com/museums/image/upload/e_blur:400/v1632137644/back2.jpg");\n    }\n']);return ne=function(){return e},e}var ce=Object(b.createGlobalStyle)(h.darkEva),se=Object(b.createGlobalStyle)(h.darkSber),ae=Object(b.createGlobalStyle)(h.darkJoy),ie=Object(b.createGlobalStyle)(ne(),f.text),re=[],oe=[],le=te.homepage?"/client-server":"";window.currentURL=le+"/";var de=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var c,s;return Object(o.a)(this,n),(c=t.call(this,e)).openMuseumById=function(e){console.log("id: ",e),c.setState({openMusId:e})},c.fillArrayInd_Id=function(e,t){for(var n=0;n<e.length;n++)"all"===t?re[n]=e[n].id:"fav"===t&&(oe[n]=e[n].id)},console.log(e),c.state={character:"sber",openMusId:-1,page:-1,editFav:{id:-1,action:"add"}},c.assistant=(s=function(){return c.getStateForAssistant()},Object(p.createAssistant)({getState:s})),c.assistant.on("start",(function(e){setTimeout(c.assistant.sendData({action:{action_id:"getSub"}}),300)})),c.assistant.on("data",(function(e){"character"===e.type&&(console.log("\u0431\u044b\u043b \u0432\u044b\u0437\u0432\u0430\u043d "+e.character.id),c.setState({character:e.character.id}));var t=e.action;c.dispatchAssistantAction(t)})),c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){console.log("componentDidMount")}},{key:"getStateForAssistant",value:function(){return{item_selector:{items:null}}}},{key:"dispatchAssistantAction",value:function(e){if(console.log("action: ",e),e)switch(e.type){case"get_sub":window.user_id=e.data;break;case"open_museums_list":this.setState({page:0}),this.setState({page:-1});break;case"open_favor_museums":this.setState({page:1}),this.setState({page:-1});break;case"open_museum":var t=1;window.currentURL===le+"/museums"&&(t=re[e.data-1]),window.currentURL===le+"/fav"&&(t=oe[e.data-1]),t&&this.setState({openMusId:t});break;case"add_favorite":window.currentURL!==le+"/"&&this.setState({editFav:{id:e.data,action:"add"}});break;case"delete_favorite":window.currentURL!==le+"/"&&this.setState({editFav:{id:e.data,action:"del"}});break;case"back":window.currentURL!==le+"/"&&window.history.back()}}},{key:"render",value:function(){var e=this;return console.log(le),Object(c.jsxs)(x.DeviceThemeProvider,{children:[Object(c.jsx)(ie,{}),function(){switch(e.state.character){case"sber":return Object(c.jsx)(se,{});case"eva":return Object(c.jsx)(ce,{});case"joy":return Object(c.jsx)(ae,{});default:return}}(),Object(c.jsx)(O.a,{children:Object(c.jsxs)(m.d,{children:[Object(c.jsx)(m.b,{exact:!0,path:"".concat(le,"/"),render:function(t){return Object(c.jsx)(y,{assistant:e.assistant,nextPage:e.state.page,prefix:le})}}),Object(c.jsx)(m.b,{exact:!0,path:"".concat(le,"/404"),component:_}),Object(c.jsx)(m.b,{exact:!0,path:"".concat(le,"/museums"),render:function(t){return Object(c.jsx)(G,{openId:e.state.openMusId,fillArrayInd_Id:e.fillArrayInd_Id,openMuseumById:e.openMuseumById,editFav:e.state.editFav,prefix:le})}}),Object(c.jsx)(m.b,{exact:!0,path:"".concat(le,"/museums/first"),render:function(t){return Object(c.jsx)(ee,{id:e.state.openMusId,editFav:e.state.editFav})}}),Object(c.jsx)(m.b,{exact:!0,path:"".concat(le,"/fav/first"),component:ee}),Object(c.jsx)(m.b,{exact:!0,path:"".concat(le,"/fav"),render:function(t){return Object(c.jsx)(K,{openId:e.state.openMusId,openMuseumById:e.openMuseumById,fillArrayInd_Id:e.fillArrayInd_Id,editFav:e.state.editFav,prefix:le})}}),Object(c.jsx)(m.a,{to:"".concat(le,"/404")})]})})]})}}]),n}(a.a.Component),ue=(Object(m.h)(de),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,183)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))});r.a.render(Object(c.jsx)(O.a,{children:Object(c.jsx)(de,{})}),document.getElementById("root")),ue()},31:function(e,t,n){},80:function(e){e.exports=JSON.parse('{"name":"salute-demo-app","version":"0.1.0","private":true,"homepage":"https://malinochkaaa.github.io/client-server/","dependencies":{"2gis-maps":"^3.6.6","@2gis/mapgl":"^1.12.1","@sberdevices/assistant-client":"^2.14.0","@sberdevices/plasma-icons":"^1.7.0","@sberdevices/plasma-tokens":"^1.3.0","@sberdevices/plasma-ui":"^1.10.0","@testing-library/jest-dom":"^5.11.5","@testing-library/react":"^11.1.0","@testing-library/user-event":"^12.1.10","@types/jest":"^26.0.15","@types/node":"^12.19.2","@types/react":"^16.9.53","@types/react-dom":"^16.9.8","google-maps-react":"^2.0.6","leaflet":"^1.7.1","prop-types":"^15.7.2","react":"^17.0.2","react-dom":"^17.0.2","react-icons":"^4.2.0","react-leaflet":"^3.2.0","react-router":"^5.2.0","react-router-dom":"^5.2.0","react-scripts":"4.0.0","social-media-icons-react":"^1.1.2","styled-components":"^5.3.0","typescript":"^4.0.5","web-vitals":"^0.2.4"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","deploy":"gh-pages -d build","predeploy":"npm run build"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"gh-pages":"^3.2.3"}}')},89:function(e,t,n){},90:function(e,t,n){}},[[182,1,2]]]);
//# sourceMappingURL=main.b3c1e9b8.chunk.js.map