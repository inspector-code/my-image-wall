(this["webpackJsonpmy-image-wall"]=this["webpackJsonpmy-image-wall"]||[]).push([[0],{101:function(e,t,a){e.exports=a(148)},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),c=a.n(r),l=(a(106),a(9)),s=(a(107),a(108),a(177)),i=a(26),m=a.n(i),u=m.a.initializeApp({apiKey:"AIzaSyAIrB3p2KXHrdECt2w5cNjIbFMTHVFFsgM",authDomain:"my-image-wall.firebaseapp.com",databaseURL:"https://my-image-wall.firebaseio.com",projectId:"my-image-wall",storageBucket:"my-image-wall.appspot.com",messagingSenderId:"540912265746",appId:"1:540912265746:web:a50d3f609ed791dbe786cb",measurementId:"G-BVDKVYDK20"}).firestore(),d=m.a.auth(),p=m.a.storage(),f=a(169),g=a(85),v=a.n(g),_=a(58),E=a.n(_),b=a(84),h=a.n(b)()({deleteComment:{color:"gray",fontSize:"15px","&:hover":{color:"#646464"},"&:active":{color:"#888888"}}});var N=function(e){var t,a=e.postId,r=e.imageUrl,c=e.caption,i=e.username,g=e.user,_=e.imageName,b=e.uid,N=e.avatarURL,O=h(),y=Object(n.useState)([]),j=Object(l.a)(y,2),S=j[0],x=j[1],w=Object(n.useState)(""),C=Object(l.a)(w,2),I=C[0],k=C[1],U=Object(n.useState)(!1),F=Object(l.a)(U,2),B=F[0],D=F[1];return Object(n.useEffect)((function(){var e;return a&&(e=u.collection("posts").doc(a).collection("comments").orderBy("timestamp","asc").onSnapshot((function(e){x(e.docs.map((function(e){return{commentId:e.id,data:e.data()}})))}))),function(){e()}}),[a]),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"post"},o.a.createElement("div",{className:"post__header"},o.a.createElement("div",{className:"post__header__left"},o.a.createElement(s.a,{className:"post__header__left__avatar",alt:i,src:N}),o.a.createElement("div",null,i)),o.a.createElement("div",{className:"post__header__right"},(null===(t=d.currentUser)||void 0===t?void 0:t.uid)===b&&o.a.createElement(f.a,{"aria-label":"delete",onClick:function(){return e=a,t=_,void u.collection("posts").doc(e).delete().then((function(){console.log("Document successfully deleted!"),p.ref("image/".concat(t)).delete().then((function(){console.log("File successfully deleted!")})).catch((function(e){console.error("Error removing document: ",e)}))})).catch((function(e){console.error("Error removing document: ",e)}));var e,t}},o.a.createElement(v.a,null)))),o.a.createElement("div",{className:"post__image"},o.a.createElement("img",{src:r,alt:""})),o.a.createElement("div",{className:"post__text",onMouseEnter:function(){return D(!0)},onMouseLeave:function(){return D(!1)}},o.a.createElement("div",{className:"post__text__caption"},o.a.createElement("div",{className:"post__text__caption-userName"},i),o.a.createElement("div",{className:"post__text__caption-captionText"},c)),S.map((function(e){var t;return o.a.createElement("div",{key:e.commentId,className:"post__text__comments"},o.a.createElement("div",{className:"post__text__comments__left"},o.a.createElement("div",{className:"post__text__comments__left-userName"},e.data.username),o.a.createElement("div",{className:"post__text__comments__left-message"},e.data.text)),o.a.createElement("div",{className:"post__text__comments__right"},e.data.uid===(null===(t=d.currentUser)||void 0===t?void 0:t.uid)&&B&&o.a.createElement("button",{className:"post__text__comments__right-button",onClick:function(){return function(e,t){u.collection("posts").doc(e).collection("comments").doc(t).delete().then((function(){console.log("Document successfully deleted!")})).catch((function(e){console.error("Error removing document: ",e)}))}(a,e.commentId)}},o.a.createElement(E.a,{className:O.deleteComment}))))}))),g&&o.a.createElement("form",{className:"post__commentBox"},o.a.createElement("input",{className:"post__commentBox__input",type:"text",placeholder:"\u041a\u0430\u043c\u0435\u043d\u0442\u0430\u0432\u0430\u0446\u044c...",value:I,onChange:function(e){return k(e.target.value)}}),o.a.createElement("button",{disabled:!I,className:"post__commentBox__button",type:"submit",onClick:function(e){e.preventDefault(),u.collection("posts").doc(a).collection("comments").add({text:I,username:g.displayName,timestamp:m.a.firestore.FieldValue.serverTimestamp(),uid:d.currentUser.uid}),k("")}},"\u0410\u0434\u043f\u0440\u0430\u0432i\u0446\u044c"))))},O=a(86),y=a(173),j=(a(143),a(4)),S=a(7),x=a(170),w=a(172),C=a(61),I=a(171),k=a(88),U=a.n(k),F=a(89),B=a.n(F),D=a(176);function A(){for(var e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",t="",a=0,n=e.length;a<8;++a)t+=e.charAt(Math.floor(Math.random()*n));return t}var L=a(87),P=a.n(L),R=a(174),z=Object(S.a)({root:{position:"fixed",bottom:"15px",left:"50%",transform:"translate(-50%, 0)"}})(f.a),M=Object(S.a)({root:{fontSize:"4rem"}})(P.a),T=Object(S.a)({paper:{maxWidth:"600px",margin:"0 auto"}})(R.a),V=Object(x.a)((function(e){return{root:{display:"flex",alignSelf:"center"},wrapper:{margin:e.spacing(1),position:"relative"},buttonSuccess:{backgroundColor:C.a[500],"&:hover":{backgroundColor:C.a[700]}},fabProgress:{color:C.a[500],position:"absolute",top:-6,left:-6,zIndex:1},buttonProgress:{color:C.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},customButton:{position:"fixed",bottom:"15px",left:"50%",transform:"translate(-50%, 0)",svg:{fontSize:"40px"}},captionInput:{marginBottom:"20px"},input:{display:"none"},inputRoot:{"& > *":{margin:e.spacing(1)},alignSelf:"center"}}}));var W=function(){var e=V(),t=Object(n.useState)(null),a=Object(l.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(""),i=Object(l.a)(s,2),f=i[0],g=i[1],v=Object(n.useState)(!1),_=Object(l.a)(v,2),E=_[0],b=_[1],h=Object(n.useState)(!1),N=Object(l.a)(h,2),S=N[0],x=N[1],C=o.a.useState(!1),k=Object(l.a)(C,2),F=k[0],L=k[1],P=Object(j.a)(Object(O.a)({},e.buttonSuccess,S)),R=function(e,t,a){return function(n){(!n||"keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&(L(e),g(t),c(a))}};return o.a.createElement(o.a.Fragment,null,o.a.createElement(z,{color:"secondary","aria-controls":"customized-menu","aria-haspopup":"true",onClick:R(!0)},o.a.createElement(M,null)),o.a.createElement(T,{anchor:"bottom",open:F,onClose:R(!1,"",null),onOpen:R(!0)},o.a.createElement("div",{className:"imageUpload"},o.a.createElement(D.a,{className:e.captionInput,placeholder:"\u0423\u0432\u044f\u0434\u0437i \u0437\u0430\u0433\u0430\u043b\u043e\u0432\u0430\u043a...",type:"text",value:f,onChange:function(e){return g(e.target.value)}}),r?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"imageName"},r.name),o.a.createElement("div",{className:e.root},o.a.createElement("div",{className:e.wrapper},o.a.createElement(I.a,{"aria-label":"save",color:"primary",className:P,onClick:function(){var e=A();p.ref("image/".concat(e)).put(r).on("state_changed",(function(){x(!1),b(!0)}),(function(e){alert(e.message)}),(function(){p.ref("image").child(e).getDownloadURL().then((function(t){u.collection("posts").add({timestamp:m.a.firestore.FieldValue.serverTimestamp(),caption:f,imageUrl:t,imageName:e,username:d.currentUser.displayName,uid:d.currentUser.uid,avatarURL:d.currentUser.photoURL}).then((function(){L(!1),b(!1),g(""),c(null)}))}))}))},disabled:!f},S?o.a.createElement(U.a,null):o.a.createElement(B.a,null)),E&&o.a.createElement(w.a,{size:68,className:e.fabProgress})))):o.a.createElement("div",{className:e.inputRoot},o.a.createElement("input",{className:e.input,id:"contained-button-file",multiple:!0,type:"file",onChange:function(e){e.target.files[0]&&c(e.target.files[0])}}),o.a.createElement("label",{htmlFor:f?"contained-button-file":""},o.a.createElement(y.a,{variant:"contained",color:"primary",component:"span",disabled:!f},"\u0412\u044b\u0431\u0440\u0430\u0446\u044c \u0444\u0430\u0439\u043b"))))))},K=a(178),H=a(93),J=a(175),G=(a(144),a(90)),X=a.n(G),Y=Object(x.a)((function(e){return{paper:{position:"absolute",width:315,backgroundColor:e.palette.background.paper,border:"1px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),top:"50%",left:"50%",transform:"translate(-50%, -50%)",outline:"none"},input:{display:"none"},deleteImage:{color:"gray",fontSize:"15px","&:hover":{color:"#646464"},"&:active":{color:"#888888"}}}}));var q=function(e){var t=e.open,a=e.openSignIn,r=e.setOpen,c=e.setOpenSignIn,s=e.setUserDisplayName,i=Y(),m=Object(n.useState)(""),u=Object(l.a)(m,2),g=u[0],v=u[1],_=Object(n.useState)(""),b=Object(l.a)(_,2),h=b[0],N=b[1],O=Object(n.useState)(""),j=Object(l.a)(O,2),S=j[0],x=j[1],w=Object(n.useState)(null),C=Object(l.a)(w,2),I=C[0],k=C[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(J.a,{open:a,onClose:function(){return c(!1)}},o.a.createElement("div",{className:i.paper},o.a.createElement("form",{className:"modal__sign"},o.a.createElement("div",{className:"modal-logo"},"\u0424\u043e\u0442\u0430\u043a\u0430\u0440\u0442\u043ai"),o.a.createElement(D.a,{placeholder:"E-mail",type:"text",value:S,onChange:function(e){return x(e.target.value)}}),o.a.createElement(D.a,{placeholder:"Password",type:"password",value:h,onChange:function(e){return N(e.target.value)}}),o.a.createElement(y.a,{type:"submit",onClick:function(e){e.preventDefault(),d.signInWithEmailAndPassword(S,h).catch((function(e){return alert(e.message)})),c(!1)}},"\u0423\u0432\u0430\u0439\u0441\u0446i")))),o.a.createElement(J.a,{open:t,onClose:function(){r(!1),k(null)}},o.a.createElement("div",{className:i.paper},o.a.createElement("form",{className:"modal__sign"},o.a.createElement("div",{className:"modal-logo"},"\u0424\u043e\u0442\u0430\u043a\u0430\u0440\u0442\u043ai"),o.a.createElement(D.a,{placeholder:"Username",type:"text",value:g,onChange:function(e){return v(e.target.value)}}),o.a.createElement(D.a,{placeholder:"E-mail",type:"text",value:S,onChange:function(e){return x(e.target.value)}}),o.a.createElement(D.a,{placeholder:"Password",type:"password",value:h,onChange:function(e){return N(e.target.value)}}),o.a.createElement("div",{className:"uploadAvatarForm"},o.a.createElement("span",null,"\u0410\u0432\u0430\u0442\u0430\u0440:"),I?o.a.createElement("div",{className:"uploadAvatarForm__nameButton"},o.a.createElement("span",{className:"uploadAvatarForm__nameButton__imageName"},I.name),o.a.createElement("button",{className:"uploadAvatarForm__nameButton__deleteImageButton",onClick:function(){k(null)}},o.a.createElement(E.a,{className:i.deleteImage}))):o.a.createElement("div",{className:"uploadAvatarForm__button"},o.a.createElement("input",{className:i.input,id:"icon-button-file",type:"file",onChange:function(e){e.target.files[0]&&k(e.target.files[0])}}),o.a.createElement("label",{htmlFor:"icon-button-file"},o.a.createElement(f.a,{color:"secondary","aria-label":"upload picture",component:"span"},o.a.createElement(X.a,null))))),o.a.createElement(y.a,{type:"submit",onClick:function(e){e.preventDefault(),d.createUserWithEmailAndPassword(S,h).then((function(e){if(I){var t=A();p.ref("avatars/".concat(t)).put(I).on("state_changed",(function(){}),(function(e){alert(e.message)}),(function(){p.ref("avatars").child(t).getDownloadURL().then((function(t){return e.user.updateProfile({photoURL:t})}))}))}e.user.updateProfile({displayName:g}).then((function(){s(g),k(null),r(!1)}))})).catch((function(e){return alert(e.message)}))}},"\u0417\u0430\u0440\u044d\u0433i\u0441\u0442\u0440\u0430\u0432\u0430\u0446\u0446\u0430")))))};a(145);var Q=function(e){var t=e.user,a=e.setOpenSignIn,n=e.setOpen,r=e.userDisplayName,c=e.loginProgress;return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"header__content"},o.a.createElement("div",{className:"header__content__logo"},"\u0424\u043e\u0442\u0430\u043a\u0430\u0440\u0442\u043ai",o.a.createElement("span",{className:"header__content__logo-userName"},t&&!c?"@".concat(r||t.displayName):!c&&!t&&"@not logged")),t&&!c?o.a.createElement("div",{className:"header__content__buttons-signOut"},o.a.createElement(y.a,{onClick:function(){return d.signOut()}},"\u0412\u044b\u0439\u0441\u0446i")):!c&&!t&&o.a.createElement("div",{className:"header__content__buttons-signInOut"},o.a.createElement(y.a,{onClick:function(){return a(!0)}},"\u0423\u0432\u0430\u0445\u043e\u0434"),o.a.createElement(y.a,{onClick:function(){return n(!0)}},"\u041d\u043e\u0432\u044b")))))},Z=a(91),$=a.n(Z),ee=(a(146),Object(S.a)({root:{color:"lightgray",fontSize:"20rem"}})($.a)),te=function(){return o.a.createElement("div",{className:"noImage-container"},o.a.createElement(ee,null),o.a.createElement("div",{className:"noImage-container__text"},"\u041d\u044f\u043c\u0430 \u0444\u0430\u0442\u0430\u0433\u0440\u0430\u0444i\u0439 :("))},ae=a(92),ne=a.n(ae),oe=(a(147),function(){return o.a.createElement("div",{className:"preloader"},o.a.createElement("img",{src:ne.a,alt:"preloader"}))});var re=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),s=Object(l.a)(c,2),i=s[0],m=s[1],p=Object(n.useState)(!1),f=Object(l.a)(p,2),g=f[0],v=f[1],_=Object(n.useState)(null),E=Object(l.a)(_,2),b=E[0],h=E[1],O=Object(n.useState)(""),y=Object(l.a)(O,2),j=y[0],S=y[1],x=Object(n.useState)(!1),w=Object(l.a)(x,2),C=w[0],I=w[1],k=Object(n.useState)(!1),U=Object(l.a)(k,2),F=U[0],B=U[1];return Object(n.useEffect)((function(){B(!0);var e=d.onAuthStateChanged((function(e){e?(h(e),B(!1)):(h(null),B(!1))}));return function(){e()}}),[b]),Object(n.useEffect)((function(){I(!0),u.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){r(e.docs.map((function(e){return{id:e.id,post:e.data()}}))),I(!1)}))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"image-wall"},o.a.createElement(Q,{loginProgress:F,user:b,setOpenSignIn:v,setOpen:m,userDisplayName:j}),a.length||C?C?o.a.createElement(oe,null):o.a.createElement(K.a,null,a.map((function(e){var t=e.id,a=e.post;return o.a.createElement(H.a,{key:t,classNames:"postEffect",timeout:{enter:800,exit:300}},o.a.createElement(N,{postId:t,avatarURL:a.avatarURL,imageName:a.imageName,user:b,uid:a.uid,username:a.username,caption:a.caption,imageUrl:a.imageUrl}))}))):o.a.createElement(te,null),o.a.createElement(q,{setUserDisplayName:S,setUser:h,open:i,openSignIn:g,setOpen:m,setOpenSignIn:v}),b?o.a.createElement(W,null):""),o.a.createElement("div",{className:"footer"},"\u0424\u043e\u0442\u0430\u043a\u0430\u0440\u0442\u043ai by @bamboleylo"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},92:function(e,t,a){e.exports=a.p+"static/media/loader.f1e99469.svg"}},[[101,1,2]]]);
//# sourceMappingURL=main.9cc2b783.chunk.js.map