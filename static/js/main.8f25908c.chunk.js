(this["webpackJsonpinfo-hub"]=this["webpackJsonpinfo-hub"]||[]).push([[0],{102:function(e,t,s){},103:function(e,t,s){},104:function(e,t,s){},105:function(e,t,s){},106:function(e,t,s){},107:function(e,t,s){"use strict";s.r(t);var c=s(2),i=s.n(c),a=s(25),n=s.n(a),A=(s(77),s(18)),o=(s(81),s(19)),l=s.p+"static/media/logo.6bcce706.png",r=(s(82),s(56)),j=s.n(r),d=s(27),h=d.a.initializeApp({apiKey:"AIzaSyABw7zTT2lDYiS7UyPsl0OwqzxfmXeVGxY",authDomain:"info-hub-2c97d.firebaseapp.com",projectId:"info-hub-2c97d",storageBucket:"info-hub-2c97d.appspot.com",messagingSenderId:"69662163414",appId:"1:69662163414:web:4a0137928b56614d94e477",measurementId:"G-X8XX4W8SS8"}),b=d.a.auth(),u=new d.a.auth.GoogleAuthProvider,m=h.firestore(),x=s(3);var O=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),s=t[0],i=t[1],a=Object(c.useState)(""),n=Object(o.a)(a,2),A=n[0],r=n[1];return Object(x.jsx)("div",{className:"login",children:Object(x.jsxs)("div",{className:"login__container",children:[Object(x.jsx)("div",{className:"login__logo",children:Object(x.jsx)("img",{src:l,alt:"logo_image"})}),Object(x.jsxs)("div",{className:"login__desc",children:[Object(x.jsx)("p",{children:"A Place to Share knowledge and better understand the world"}),Object(x.jsxs)("p",{style:{color:"royalblue",fontSize:"25px"},children:["HandCrafted with \u2764\ufe0f by"," "]}),Object(x.jsx)("h3",{children:"IIIT kota batch-2020"})]}),Object(x.jsxs)("div",{className:"login__auth",children:[Object(x.jsxs)("div",{className:"login__authOptions",children:[Object(x.jsxs)("div",{className:"login__authOption",children:[Object(x.jsx)("img",{className:"login__googleAuth",src:"https://media-public.canva.com/MADnBiAubGA/3/screen.svg",alt:""}),Object(x.jsx)("p",{onClick:function(){b.signInWithPopup(u).catch((function(e){return alert(e.message)})),console.log(b)},children:"Continue With Google"})]}),Object(x.jsxs)("div",{className:"login__authOption",children:[Object(x.jsx)("img",{className:"login__googleAuth",src:"https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png",alt:""}),Object(x.jsx)("span",{children:"Continue With Facebook"})]}),Object(x.jsx)("div",{className:"login__authDesc",children:Object(x.jsxs)("p",{children:[Object(x.jsx)("span",{style:{color:"blue",cursor:"pointer"},children:"Sign Up With Email"}),". By continuing you indicate that you have read and agree to Quora's",Object(x.jsxs)("span",{style:{color:"blue",cursor:"pointer"},children:["Terms of Service"," "]}),"and"," ",Object(x.jsx)("span",{style:{color:"blue",cursor:"pointer"},children:"Privacy Policy"}),"."]})})]}),Object(x.jsxs)("div",{className:"login__emailPass",children:[Object(x.jsx)("div",{className:"login__label",children:Object(x.jsx)("h4",{children:"Login"})}),Object(x.jsxs)("div",{className:"login__inputFields",children:[Object(x.jsx)("div",{className:"login__inputField",children:Object(x.jsx)("input",{value:s,onChange:function(e){return i(e.target.value)},type:"text",placeholder:"Email"})}),Object(x.jsx)("div",{className:"login__inputField",children:Object(x.jsx)("input",{value:A,onChange:function(e){return r(e.target.value)},type:"password",placeholder:"Password"})})]}),Object(x.jsxs)("div",{className:"login__forgButt",children:[Object(x.jsx)("small",{children:"Forgot Password?"}),Object(x.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),b.signInWithEmailAndPassword(s,A).then((function(e){console.log(e)})).catch((function(e){return alert(e.message)})),i(""),r("")},children:"Login"})]}),Object(x.jsx)("button",{onClick:function(e){e.preventDefault(),b.createUserWithEmailAndPassword(s,A).then((function(e){e&&console.log(e)})).catch((function(e){return alert(e.message)})),i(""),r("")},children:"Register"})]})]}),Object(x.jsxs)("div",{className:"login__lang",children:[Object(x.jsx)("p",{children:"\u0939\u093f\u0928\u094d\u0926\u0940"}),Object(x.jsx)(j.a,{fontSize:"small"})]}),Object(x.jsxs)("div",{className:"login__footer",children:[Object(x.jsx)("p",{children:"About"}),Object(x.jsx)("p",{children:"Languages"}),Object(x.jsx)("p",{children:"Careers"}),Object(x.jsx)("p",{children:"Businesses"}),Object(x.jsx)("p",{children:"Privacy"}),Object(x.jsx)("p",{children:"Terms"}),Object(x.jsx)("p",{children:"Contact"}),Object(x.jsx)("p",{children:"\xa9 Quora Fake Inc. 2021"})]})]})})},p=s(130),g=s(31),P=Object(g.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),z=P.actions,v=z.login,f=z.logout,N=function(e){return e.user.user},C=P.reducer;s(90);function w(){var e=Object(A.c)(N);return Object(x.jsxs)("div",{className:"quoraBox",children:[Object(x.jsxs)("div",{className:"quoraBox__info",children:[Object(x.jsx)(p.a,{src:e.photo?e.photo:"https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573",className:"quoraBox__infoAvatar"}),Object(x.jsx)("h5",{children:e.displayName?e.displayName:e.email})]}),Object(x.jsx)("div",{className:"quoraBox__quora",children:Object(x.jsx)("p",{children:"Post here with link.."})})]})}s(91),s(92);var y=s(61),B=s.n(y),Q=s(62),E=s.n(Q),q=s(63),D=s.n(q),I=s(64),H=s.n(I),K=s(124),V=s(125),M=s(33),k=s.n(M),Z=Object(g.b)({name:"question",initialState:{questionId:null,questionName:null},reducers:{setQuestionInfo:function(e,t){e.questionId=t.payload.questionId,e.questionName=t.payload.questionName}}}),S=Z.actions.setQuestionInfo,R=function(e){return e.question.questionId},U=Z.reducer;s(55);k.a.setAppElement("#root");var F=function(e){var t=e.Id,s=e.question,i=e.image,a=e.timestamp,n=e.users,l=Object(A.c)(N),r=Object(A.b)(),j=Object(c.useState)(!1),h=Object(o.a)(j,2),b=h[0],u=h[1],O=Object(A.c)(R),g=Object(c.useState)(""),P=Object(o.a)(g,2),z=P[0],v=P[1],f=Object(c.useState)([]),C=Object(o.a)(f,2),w=C[0],y=C[1];return Object(c.useEffect)((function(){O&&m.collection("questions").doc(O).collection("answer").orderBy("timestamp","desc").onSnapshot((function(e){return y(e.docs.map((function(e){return{id:e.id,answers:e.data()}})))}))}),[O]),Object(x.jsxs)("div",{className:"post",onClick:function(){return r(S({questionId:t,questionName:s}))},children:[Object(x.jsxs)("div",{className:"post__info",children:[Object(x.jsx)(p.a,{src:n.photo?n.photo:"https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"}),Object(x.jsx)("h5",{children:n.displayName?n.displayName:n.email}),Object(x.jsx)("small",{children:new Date(null===a||void 0===a?void 0:a.toDate()).toLocaleString()})]}),Object(x.jsx)("div",{className:"post__body",children:Object(x.jsxs)("div",{className:"post__question",children:[Object(x.jsx)("p",{children:s}),Object(x.jsx)("button",{onClick:function(){return u(!0)},className:"post__btnAnswer",children:"Answer"}),Object(x.jsxs)(k.a,{isOpen:b,onRequestClose:function(){return u(!1)},shouldCloseOnOverlayClick:!1,style:{overlay:{width:700,height:600,backgroundColor:"rgba(0,0,0,0.8)",zIndex:"1000",top:"50%",left:"50%",marginTop:"-300px",marginLeft:"-350px"}},children:[Object(x.jsxs)("div",{className:"modal__question",children:[Object(x.jsx)("h1",{children:s}),Object(x.jsxs)("p",{children:["asked by"," ",Object(x.jsx)("span",{className:"name",children:n.displayName?n.displayName:n.email})," ","","on"," ",Object(x.jsx)("span",{className:"name",children:new Date(null===a||void 0===a?void 0:a.toDate()).toLocaleString()})]})]}),Object(x.jsx)("div",{className:"modal__answer",children:Object(x.jsx)("textarea",{value:z,onChange:function(e){return v(e.target.value)},placeholder:"Enter Your Answer",type:"text"})}),Object(x.jsxs)("div",{className:"modal__buttons",children:[Object(x.jsx)("button",{className:"cancle",onClick:function(){return u(!1)},children:"Cancel"}),Object(x.jsx)("button",{type:"sumbit",onClick:function(e){e.preventDefault(),O&&m.collection("questions").doc(O).collection("answer").add({user:l,answer:z,questionId:O,timestamp:d.a.firestore.FieldValue.serverTimestamp()}),console.log(O),v(""),u(!1)},className:"add",children:"Add answer"})]})]})]})}),Object(x.jsx)("div",{className:"post__answer",children:w.map((function(e){var s,c=e.id,i=e.answers;return Object(x.jsx)("p",{style:{position:"relative",paddingBottom:"5px"},children:t===i.questionId?Object(x.jsxs)("span",{children:[i.answer,Object(x.jsx)("br",{}),Object(x.jsx)("span",{style:{position:"absolute",color:"gray",fontSize:"small",display:"flex",right:"0px"},children:Object(x.jsxs)("span",{style:{color:"#b92b27"},children:[i.user.displayName?i.user.displayName:i.user.email," ","on"," ",new Date(null===(s=i.timestamp)||void 0===s?void 0:s.toDate()).toLocaleString()]})})]}):""},c)}))}),Object(x.jsx)("img",{src:i,alt:""}),Object(x.jsxs)("div",{className:"post__footer",children:[Object(x.jsxs)("div",{className:"post__footerAction",children:[Object(x.jsx)(B.a,{}),Object(x.jsx)(E.a,{})]}),Object(x.jsx)(D.a,{}),Object(x.jsx)(H.a,{}),Object(x.jsxs)("div",{className:"post__footerLeft",children:[Object(x.jsx)(K.a,{}),Object(x.jsx)(V.a,{})]})]})]})};var G=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),s=t[0],i=t[1];return Object(c.useEffect)((function(){m.collection("questions").orderBy("timestamp","desc").onSnapshot((function(e){return i(e.docs.map((function(e){return{id:e.id,questions:e.data()}})))}))}),[]),Object(x.jsxs)("div",{className:"feed",children:[Object(x.jsx)(w,{}),s.map((function(e){var t=e.id,s=e.questions;return Object(x.jsx)(F,{Id:t,question:s.question,image:s.imageUrl,timestamp:s.timestamp,users:s.user},t)}))]})},X=s.p+"static/media/logo.6bcce706.png",L=s(65),W=s.n(L),Y=s(66),T=s.n(Y),_=s(67),J=s.n(_),$=s(48),ee=s.n($),te=s(68),se=s.n(te),ce=s(69),ie=s.n(ce),ae=s(128),ne=s(129),Ae=s(70),oe=s.n(Ae),le=s(126);k.a.setAppElement("#root");var re=function(){var e=Object(A.c)(N),t=Object(c.useState)(!1),s=Object(o.a)(t,2),i=s[0],a=s[1],n=Object(c.useState)(""),l=Object(o.a)(n,2),r=l[0],j=l[1],h=Object(c.useState)(""),u=Object(o.a)(h,2),O=u[0],g=u[1],P=r;return Object(x.jsxs)("div",{className:"qHeader",children:[Object(x.jsx)("div",{className:"qHeader__logo",children:Object(x.jsx)("img",{src:X,className:"qHeader__logo",alt:"logo_image"})}),Object(x.jsxs)("div",{className:"qHeader__icons",children:[Object(x.jsx)("div",{className:"active qHeader__icon",children:Object(x.jsx)(W.a,{})}),Object(x.jsx)("div",{className:"qHeader__icon",children:Object(x.jsx)(T.a,{})}),Object(x.jsx)("div",{className:"qHeader__icon",children:Object(x.jsx)(J.a,{})}),Object(x.jsx)("div",{className:"qHeader__icon",children:Object(x.jsx)(ee.a,{})}),Object(x.jsx)("div",{className:"qHeader__icon",children:Object(x.jsx)(se.a,{})})]}),Object(x.jsxs)("div",{className:"qHeader__input",children:[Object(x.jsx)(ie.a,{}),Object(x.jsx)("input",{type:"text",placeholder:"Search "})]}),Object(x.jsxs)("div",{className:"qHeader__Rem",children:[Object(x.jsx)("div",{className:"qHeader__avatar",children:Object(x.jsx)(p.a,{onClick:function(){return b.signOut()},className:"Avatar",src:e.photo?e.photo:"https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"})}),Object(x.jsx)(ae.a,{onClick:function(){return a(!0)},children:"Post"}),Object(x.jsxs)(k.a,{isOpen:i,onRequestClose:function(){return a(!1)},shouldCloseOnOverlayClick:!1,style:{overlay:{width:700,height:600,backgroundColor:"rgba(0,0,0,0.8)",zIndex:"1000",top:"50%",left:"50%",marginTop:"-300px",marginLeft:"-350px"}},children:[Object(x.jsxs)("div",{className:"modal__title",children:[Object(x.jsx)("h5",{children:"Add Question"}),Object(x.jsx)("h5",{children:"Share Link"})]}),Object(x.jsxs)("div",{className:"modal__info",children:[Object(x.jsx)(p.a,{className:"avatar",src:e.photo?e.photo:"https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"}),Object(x.jsxs)("p",{children:[e.disPlayName?e.disPlayName:e.email," asked"]}),Object(x.jsxs)("div",{className:"modal__scope",children:[Object(x.jsx)(ee.a,{}),Object(x.jsx)("p",{children:"Public"}),Object(x.jsx)(le.a,{})]})]}),Object(x.jsxs)("div",{className:"modal__Field",children:[Object(x.jsx)(ne.a,{value:r,onChange:function(e){return j(e.target.value)},type:"text",placeholder:"Start your question with 'What', 'How', 'Why', etc. "}),Object(x.jsxs)("div",{className:"modal__fieldLink",children:[Object(x.jsx)(oe.a,{}),Object(x.jsx)("input",{value:O,onChange:function(e){return g(e.target.value)},type:"text",placeholder:"Optional: inclue a link that gives context"})]})]}),Object(x.jsxs)("div",{className:"modal__buttons",children:[Object(x.jsx)("button",{className:"cancle",onClick:function(){return a(!1)},children:"Cancel"}),Object(x.jsx)("button",{type:"sumbit",onClick:function(t){t.preventDefault(),a(!1),P&&m.collection("questions").add({user:e,question:r,imageUrl:O,timestamp:d.a.firestore.FieldValue.serverTimestamp()}),j(""),g("")},className:"add",children:"Add Question"})]})]})]})]})},je=(s(102),s(127));s(103);var de=function(){return Object(x.jsxs)("div",{className:"sidebarOptions",children:[Object(x.jsxs)("div",{className:"sidebarOption",children:[Object(x.jsx)("img",{src:"https://tse1.mm.bing.net/th?id=OIP.XxjHjw9Je18g8UxBhVsl3gHaEK&pid=Api&P=0&w=289&h=163",alt:""}),Object(x.jsxs)("a",{href:"https://www.nytimes.com/trending/",target:"_self",children:[" ",Object(x.jsx)("p",{children:"Trending"})]})]}),Object(x.jsxs)("div",{className:"sidebarOption",children:[Object(x.jsx)("img",{src:"https://qphs.fs.quoracdn.net/main-thumb-t-858-100-VnZbEVtOIGkEHXlnYId9slumV59IPgkA.jpeg",alt:""}),Object(x.jsx)("p",{children:"Business"})]}),Object(x.jsxs)("div",{className:"sidebarOption",children:[Object(x.jsx)("img",{src:"https://tse2.mm.bing.net/th?id=OIP.l4gVkEnI-xusZcV81ymvGQHaDU&pid=Api&P=0&w=406&h=183",alt:""}),Object(x.jsx)("p",{children:"communities"})]}),Object(x.jsxs)("div",{className:"sidebarOption",children:[Object(x.jsx)("img",{src:"https://tse4.mm.bing.net/th?id=OIP.qzdn9bm2SGbibOQcAdrGDwHaMi&pid=Api&P=0&w=300&h=300",alt:""}),Object(x.jsx)("p",{children:"Badge"})]}),Object(x.jsxs)("div",{className:"sidebarOption",children:[Object(x.jsx)("img",{src:"https://tse4.mm.bing.net/th?id=OIP.sUPAXD58hfd2iTpzkfLQlAHaEK&pid=Api&P=0&w=270&h=152",alt:""}),Object(x.jsx)("p",{children:"Academic Notes"})]}),Object(x.jsxs)("div",{className:"sidebarOption",children:[Object(x.jsx)("img",{src:"https://qphs.fs.quoracdn.net/main-thumb-t-931-100-c8WCPwZ9qPsh5zLGQ5wHh1ddxtc9Cch7.jpeg",alt:""}),Object(x.jsx)("p",{children:"Science"})]}),Object(x.jsxs)("div",{className:"sidebarOption",children:[Object(x.jsx)("img",{src:"https://qphs.fs.quoracdn.net/main-thumb-t-2177-100-JiR07D1TQSfeQzRvWXomVaY4Poj2f8Yb.jpeg",alt:""}),Object(x.jsx)("p",{children:"Technology"})]}),Object(x.jsxs)("div",{className:"sidebarOption",children:[Object(x.jsx)(je.a,{}),Object(x.jsx)("p",{className:"text",children:"Discover Spaces"})]})]})};s(104);var he=function(){return Object(x.jsxs)("div",{className:"sidebars",children:[Object(x.jsx)("div",{className:"sidebar__header",children:Object(x.jsx)("h4",{children:"Explore new stuffs.."})}),Object(x.jsx)("div",{className:"sidebar",children:Object(x.jsx)(de,{})})]})};s(105),s(106);var be=function(){return Object(x.jsxs)("div",{className:"widget__contents",children:[Object(x.jsxs)("div",{className:"widget__content",children:[Object(x.jsx)("img",{src:"https://s.yimg.com/fz/api/res/1.2/0GtBThkXya5zZvVl8VV__A--~C/YXBwaWQ9c3JjaGRkO2g9MTE2O3E9ODA7dz0yMDA-/https://www.bing.com/th?id=OIP.8LXSaY8p06NqTBinDmtPxAHaEV&w=200&h=116&rs=1&qlt=80&pid=3.1",alt:""}),Object(x.jsxs)("div",{className:"widget__contentTitle",children:[Object(x.jsx)("h5",{children:"Robotics Club(ARC)"}),Object(x.jsx)("p",{children:"Organize various competitions within the club such as project exhibitions, paper presentations, quizzes etc "})]})]}),Object(x.jsxs)("div",{className:"widget__content",children:[Object(x.jsx)("img",{src:"https://iiitkota.ac.in/static/media/incognito.30ca3a30.png",alt:""}),Object(x.jsxs)("div",{className:"widget__contentTitle",children:[Object(x.jsx)("h5",{children:"INCOGNITO CLUB"}),Object(x.jsx)("p",{children:"Official Cultural club of @iiitkotaoffice which helps to step over the fear and bring out the stage talent."})]})]}),Object(x.jsxs)("div",{className:"widget__content",children:[Object(x.jsx)("img",{src:"https://iiitkota.ac.in/static/media/odyssey.3f66d4b8.png",alt:""}),Object(x.jsxs)("div",{className:"widget__contentTitle",children:[Object(x.jsx)("h5",{children:"ODYSSEY"}),Object(x.jsx)("p",{children:"Official Literary Club of @iiitkotaoffice with a vision to diversify the way we catch a glimpse at literature.."})]})]}),Object(x.jsxs)("div",{className:"widget__content",children:[Object(x.jsx)("img",{src:"https://iiitkota.ac.in/static/media/fitindia.e170401a.png",alt:""}),Object(x.jsxs)("div",{className:"widget__contentTitle",children:[Object(x.jsx)("h5",{children:"FIT INDIA CLUB"}),Object(x.jsx)("p",{children:"Official Fitness Club of IIIT Kota"})]})]}),Object(x.jsxs)("div",{className:"widget__content",children:[Object(x.jsx)("img",{src:"data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/7QCEUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAGgcAigAYkZCTUQwYTAwMGE3MTAxMDAwMGE5MDQwMDAwZTkwODAwMDA3YjBhMDAwMGY2MGIwMDAwODIxMjAwMDA3NDE4MDAwMGRiMTkwMDAwNjIxYjAwMDBlNDFjMDAwMDBjMjYwMDAwAP/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/CABEIAUABQAMBIgACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAABAUGBwMCAQj/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/9oADAMBAAIQAxAAAAHqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACJEm1sqpx7iKgAAAAAAAAAAAAAAHzze/Rqc7Q2PR7H59eMnWvx6fvzbkv8AQZOXzcuuR5HNzAAAADyPUAAAAAB5YK3Rv/vlvRpvM8PPGxn84uZ49f03rq6zp+fmU9n7OfyPCpvUxidTNWsPnPP6QvSZkq6PNrWty99fos8/C9bb2MqpvIwtBjyAAAACvThL3nfQ9veq7u25sw8LOlm29GqsKjRdNemSjzvmSh+b20EX3w1mgifcHTSPK0Wejew877HUy1dDOrlquz+tJOuSmzLOKZCTrjKLKMucAAQ0w6bA+PT9D1XnsbV1iL0j953n5vtiNFnNfatPyHdaVzOqx9ptj24eb89yz7ga30e7R4SNo88bW4+fXkw/MHvVpQprOK+wAEAAAAAI0kni9dtcH1/SX9xRQnJ2LinVeWy0eevc/p0/OyxmqtlkPmZBtPYtDwnrXH5X7fGHMEQwM/CehaXocPou/m6j9ngbgAAAAAAAQsR0SPbTgsqssfR9XpPNdrkq4zIUfT9EZiP6fW2u9557dB5OLm/1I/OubzRc9/c6brM5/wCIzs48e31r8do87PyahzAAAAAAAAEaSP5x9tdkPV9K26Vye1z5qmTqffWlfk+l+eVeZt/K0mD7yJXPXI13V4t553N2ViVeuyFxy0uXOtnCyGUAAAAAAAAAZvin9H5fp1492b0v4fPNemRccuYWe2+9Zwn50OBacX96ifM4uTf+KIFv43+cY2VqEMZpJ6AZwAAAAAAAAAAAAA5r0qu0nFXt1Ks557bv7liNNaftAZwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//8QAMBAAAgMAAQIEBAQGAwAAAAAAAwQBAgUAERIGExQhECAwQBUiIzEkJTVBUIAzNEL/2gAIAQEAAQUC/wByrshpydBeOQ+vPBmGT/Bs6Y6cOyUvInk/AP7hZIPgGKl+/taK109OzEhnryef35Mcp7WrykcD39n0vMr3/WtatfiUsD5uuTe9uKz+ZdS7HA5wKcgVI5YI7cNnDtyq54MuCBR81r1py+gvTi7ImIO4xBvSsk4qlAC/UISg40NYslrnuNcUiarNMUWDVq/p6z3VLHthpSwSI6R88zEcsyKowGqarxLiCneWF1xwVm6yQq5cT63Wp0arGieEBlCH6m41JHmrp55Q6zBm2kgCI83dom1+kMdunKV82Vg1XB8l2BU5fSDHG3rWVkmlUagPVwyv5SGPb2ar3r49vzux2OMZ00FlujHO30rRdxnyZA+eFq2oD6TzNVFyWm9zZ3ri1EumHSes4VOve3t37tPmDHfo/DRelQmW7LE3r3UHI5dJZCo8cdvUO071ca/6pa94kienObQFFMkVvN0kzMMgi8BJmLlPQI6V+lovUToHdHPC6y1BvN3bJkZknn2rXxIfupzM/qGvH8y54cmI0fh4itJ9Z6LZ2gkzRoGgKLaC+auKKVikTzNXYE3wqoizRMFfruHhZY57nN15a3crlZUWt+0bel5s7P8Ax8Wv5bPiCnZpdffKN5Gj8KCnS2fwBfsx6urHfzStPCiaj+0ZDU4HlCJF4mSwEfDbEy7ol8hK376H587luaX8Xk3/AH/94bvqlr17qK5SqxPk8Rtd8K6DA+D2TU5Se6n2Piut+VtzP6WJlGlbS8RT0zbe9F/4jCietSc8PnrfjoLqMzMdyzBFzZumF2Pk1NeoYvet6ltHXFBZxr7JxajS84MCRpfml0sZq/rvDw/fmQeF33AWTct7ciZHeYpuIXpIyVt0taeKbTgYH4gmeH8RTXjOo01Ml9vN6cUXI2dFWii/2bBPKBe/dcH6gfCx4sNsFknS9Lc6fi2dW3Wlo7qKMkVNca24FhcqZvO7uX5BYrWevKzMcmeZ+Yd+6CQkg/aMj81eY6WDNqWEf0T+qjTSVtFxECey5ml6aIpJ2zN47qkIK6u2JgZMFVmDYTlOfhrVZjObvwXh9wkpYKweREVj7bxUKg3OvtX9QGdou1CvhNMEHl5ZDIp5wDGpkaJaBxvKgeVAO3N7LWRAk29YUxpzaCadx0fZMsgVp4AnDXE3dti1c0tzIfabqPrU/wC44tF8bPGmL36oBMV7Pgnm4tolgntl3LTr5hS1HFrqjGUtG8/oWQXulrAuwkyN1tc9HGIqgzSqAZXU+10cVd0mflLJT8ALjByia9JCqAN4EOIqwpy+mkOhWhCFbSBUV9UULMaVAL/4IX/aH/RPEUTKFiVpk90Ex9HvYNlF87P/AMDCS/fCYICQdCV8ofIpWK9P9pP/xAAtEQACAQQBAgMGBwAAAAAAAAABAgADBBESMRAhEzBBBSAiMmCBFCNAUWFx8P/aAAgBAwEBPwH6tCMeBCpHP6G3tnuDhYtmlLiMJUzHQHzbe1e4OElzbrRAw+TKVBqg2lui0afhiXt7o2qcxqjN3Jiuy8R6hfpg8zQ67Q0UQ4bJiUEWtof2lbKj5h9veVSx1EuKdOgKaOcDvn+ZRX8TU/JGq+sZFWslNeAMy5c0svCcnJnhtrv6RVBGYqjG2IKm1IkDBifGhEVCKTbR7jVEKGPXp+IKqfeG475VRCc9QMnAlH2ZR0xU5iU6FkDUPMzVv6uP8JYLrRGJVObgf1Lhy1Ir02FMBTAFRu/EJMDYgJHELFuffBx3EtrrxUG8rjG6H1ns4YpFhLOtrlTLpirbD0j1gfiEuaPhtkcQktz0AiVG21I8pKjL2EZ9x3lrV8Jihj1NX2EaruJvp29IGDesKLmFRAusPPl02DDYx85zC+ZviFs9MmEnoRjy6dTXsZUcN8vTMzMzJ6ZhbPniZmZn6u//xAAtEQACAQMCBAQFBQAAAAAAAAABAgADERIhMQQTIjAQQVFhFCAyQmAjM0BSsf/aAAgBAgEBPwH8txJhUj+CiFjAgXwGojoO6q5RlxgF4q4yrUsbCFiYGI2jVC3haY6XmCrvAoDWjMQN/nYWtB1Hpg1n2X9PDltjlKdPO8wXHK0U3QkQdSkQCyG8L6C0yF8hOZ6D5RRFotkGs1cykfti9Dx0BB8MlpABouNGpvpGYtuYlQoCPWbS9+xS2uIyXvOGUMCIKfT7iVk6Q4iLoJVpEdY2hYtv4cJwxJzcSvRohc2HaViNoB5ygLMUjfpvn5TDTSfsHX6f8ikEaQ8NSO4i0qaHQR62IuZxHEmrp5dtOtbjzlRCSCu4nxKWsdYnE4aDaGvfQgzb6LiLXq2vaPxFU2FowdzqY9IoLnt0K+GhlatnoIrYw1QYK3tOa39ZnUvoIzMLNOb7R6rOLHvo+M5vUGnO9o1S64/l3//EAD4QAAEDAQUEBgcGBQUAAAAAAAEAAgMRBBITITEiQVFhECMyQnGBBTBAUpGhwRQgM2Jy0UNQgJKxVHOCsvD/2gAIAQEABj8C/rK2pGrtH4Lt08Qth7XeB/kd2Hbdx3LbeacPu63hwK4O4e3kuNAEWRG7D/29T1mvq7ldrWnr9ogePS2urjQDivs8Z2B2uZ6Assm8StoXzzWTGjyW0xp8l1ewVh3M+O5cXcfv7TgPFduvgEcN2m5Ojq1pBpkF1k1PNYjZL2VD62sjg0E0zTo4OraDSu8q8WnxkKjY4guaLpojJIch81P6Ql7R6uEcEDv6MR/4TfmVQaeozNEH3tk6K8ytNFfjon33VNaIMkJzRv083ZoXdM6q8O8KoEPDWnyRbPdqDkRw9aGA7MX+U6YsvzybQCibsta5wFAFJaXTyxtObg00quDBkxvBWWyj+Gyp8VyQa3tE0TImaN+7tPasrzvJYljO21wq0hYlp2G8qJxfIck5oNbpvKRvmpG8lI3lVSDQVV6J193BYUlG1737qN540TY4Ir1N91Ukfdad1VG1/aAp6t0jvIcSnPd2jmVZ5XOpFhioGqLg1jGN3rhEOyFC3i8KblQfLoYDoAT0xMut6zQkp7JSMUbhwRad6bHN2dNaJzWYZP5c0XbrtCpW8k5vEVTm8RRbemhRuVcUZO7SniqxNFLuZJTRJS8BnROlkaSXbq5JrQwUbpy9XntSHRq62NzeYzV5ri/wCvSeQ4ISzjqdw95cAFZwx2w7b8eiz/rCtH6ug82HpihZ3QB5lRuY6rdxr8kJGeY4KRtaZ/JZAu/UVRoAHRewnYYNKnLLoq5ufJfhg+Ofr5JSK3QjJIauPREBuc76K/aqVGeF+/Q6zQHZ7x48lYf9kdET+DgU4++0HoheTlWh6ZKPu3nE14AI1kkL6aqrIHvj0duB+KEzC2Nt0VrqgHGpG/2V8T9HCiuy6HRw39FomiPWtc0ZjQcVKHuJMja5qaQagZdHo+X8pZ02a1DtM2X9Ia49azI8+aLaltd4Qkja7EHeLvu/ZYXaZv8A2VzFeCPNda1rh8ECRQkaexQP/h5jz6JIXGjZ2XPPd81CXZUdQ/4R/UOiaPvQPvjwXgqqWxzdiYZeKdG/u/NV4pskJo4K7W5NvYfp90ssxDpPe3BYjKh/eFaprhqg534UeZ58vY3RS9l3yU9XX59WHoxo9JMzydvWINbgcfEaohASfhSbD0+I7jlzC5FAtNDqCg5tG2yLUJzXCjhlnuWiqMigHOErfz/us7NnyeurgFeblddJRvutyCo4LLRCKEVvb+CbFHu1PE+ySSHRrSUXEAV3BPj39tv1/wDclNZH5jtDw3p8Z7unMKoQ/wBbZx/e1UXNCWE0cNeaxIiI7UBmCrs7C07uB8F3T5dFPudWLsW950WHEPFx1PsssfvNIRqM0Ht7pqo54ux2gPy8E2SEjEAqx3HkrjwWvGRBTZYTR7UbZYBSX+LD9Qs1UIPhcWEaELA9KRBw98D6LEsFooOHaCyjDx+Vyzs0v9qys8nmKLbuRDmaoGas7vzafBUAoPZ4yxgbfbU03mqonM7zNtv1H1QsllzJOVBUhGW2zXSf+TlhNtj3Se7eChks9plvPqW56ga7lJJtF7W3jcBF4fVOkwZy1uWd7MrEFlldt4dzO9eUTorA57pCW3d4IUdsisvaNAK0KgEMWLitLhtUTSyPJ0BmzPDcqvY3biD4uZ4IPAZjG63lUo44YCJmNvtGTmlWNrTsyOId8FFetZhBY41oMyCoJJe25tT7LsDrWbTf2VDqmlgN6uSv3Lssmbq93khwXVw7ENre50lfkrEH3cOszG0151Xo6hFfs7wfirT+S2V+alma4YYtrXX92iszmSNv/aHtY+5QHJejooW33bby12S9Hx1kjewvic4DRQRNa90bIHivNejeqJfG5t4U0CcyIVfUEDzUt6G7tsMcZI3aqGTBYySKS8G361FFCQInOAdUOOWZUcTjUtHs2JtRyby3erzAXSe+7Xpkwm0xHX3eKZdiAuEubyJ1RfFCxjjvATgGNo41OWqDGuZQuLaAbxqoyZMnC83ZKikdW7IQ1uXFPk2y1smFkO0eSxxHM5lS07PZ8VFLJFI3ENLp1H8jjHC2yD4hejT7s7f8lNumhxW0KgYdh9mtLRJ8dV6Vcw3mYriD8FZoY2YhwC6laa5VULj2rtD4j+RXsPaxMXXvcU2IRNw2m8BzVJGhw1zTthu12stVdDQG8Kf1S//EACsQAQACAQMDAQgDAQEAAAAAAAEAESExQVFhcYGREEChscHR4fAgMPFQgP/aAAgBAQABPyH/ANlaT3i7m8XZz69H/DPBa10jDQXg+8ayODBLH2dCZdUpj1rBqO89/LIK1dooYMde7p0mm9gKnVJj9nymhWvSYn5PP9YrBSeD+8WxeVUESzJ7KJZqPVRFyGeh2JhPUp179LxARXn0+kL9KELqMJVvqkBNbuhzcGL1/s/mdZfVU5r6zHC51IpIbf1AMr4uizDKcgVr/abAAK1XQmXonuvpGMK8S/XMNDtHZZiVbtI3XBNMHTPb+7SzG7UzXEZCj/ihEADQP6DbIcrFlzQOYjCh1SyAppsuFzKk6VxpKZxIprcGM9ckFy6ng/ai8Y+RiG1qxsw8RjrFTh5fODZZ/ZlDZ979IhDt5fylvnpcxfLHTNrc/MJrerN0+8W0/Jv19Zn3q1iBLBXrDAoq7u7/AAWtZpe83F6Pap85pQVfqOPnGCNoVRr2h5U6rVl7ppXsXLW7IJ18dSnkgzLtl74GW1BlRVnSUlu4pWeIb5WX1/SMRgVmYmpymg+BKq6apvT+tYc6fCI+Fqp1Y2F71B1x6wMKW1z6zfrfyvWW/oH4zuX6Ig12jGL9G6fP2lRKOwJ08wVd7qrwhFLBUoI1q9SoRlJ0WvvOB6hzZdPGYBf+2/2X3vRbIbGPaZgkxiiNSIaHlDGIikLmFdCzEaR1uD0E2CWpf9YfhufXq9ImHXWsabZBsvFyzVVg9BKUwzu/jOiF2AmS4nDTRXsRkghyZ/CDmEG4j1PbqZeTP8mLlW1nuionHI4j906nKzieXNbBp1sFQCI6MO5o3Ly9mtf1VVxexHMgAo0/uoDLq5dpYueftGKB5tVuuE2igWyXo/bAKDQhYB4Pd9EXY1vSE2cPjkYXQH5fSKJxzHxXHtAWNHy6D6S629BoA81Ero1VR5GkCfAttPYgzzUgq/ddxDK2hypyaQRyQyQkoRrw63i5YkZVao/mKgr1JwTG0e+Fzx/kCmo8ze/7N8z4zUY4UHG2Dw2hjmCtwjsGgpft/FCyEMPp9UqzoC2nxlR1MFo9GQvD3K9fj4fyPlNtiMiGXnLlDPsOU7hN9ZWzeYFkxdev1nePkmRSa8mUejJ6fKA/asPDZlrtjmiPZ6PSCaAMj48j+OkWbq+6yqFrNQ9SGa6iBDpddt7mDaw1NVskcqfEKANq6yqqadR4lM2LSrg+ufM3G8wPsYpdPJSdKdPjL36zfQYMH8USoTQ2ZUFFaF/h24i4mWBqlleqZxKciM2GADmBKV8D5THdevD0Jmyc/qLKsD2lk72sskMraDlgd4yTXcX3QCFqTsREgV00HaIbyT0NHpHAubusD5esOK7fQspOmzQM0q3+59e8snrB6CaH1h0HD0n+nShydZzKI/EbxY19JKINkSlyxraI3OSFHJYfwcsL/FR6+6/7ZpHBUMJEVpoLpMxr1yFr4ZPE6T5cXdLgypsks+6+j0eko2uT1H9O/eVPLUhR5CPQq1ZIZT8ZI9XZ3InMm9/IRvvIvkz6oTMZ+tbzyBb3oS3AeFft1hkQYAKD3e5MqivuJmBoRdRuqft4My2w4q3DpvLYTzb+CZPilLrNdpQkTdO9cO8Dt+vMNwqFGQidQao6wSoa34FXMSk1+RG2ZE1IoOftBrqwaIX8oLWjbCopW4VeXV+WMsIljVKWVdXeSlDK4xVWuyPahr1qBpNLO4az7rflj93nyiIgQNI4qYd6xLV7byk2ahW9HoR0Vc+ZQwvCfg1ibnrVtfwQZUAhyVvmr6MumMsQV1mjky2pRI2BrrLFNZKXkRe6xEZDmofaAXYDfUWnXaX3aMyqzfwhWszKurRtLXZFtTHDfxq6ysQwc7FM2IPymU092ySrZ+s5m2m9UduPakslyLb1Y6NKM8h5mr6sYsF7UNKTu8wwNFYjkGm0GKY7mLrjoxALeG7RNPEGX6qUdipos+CbDoQdRhk/4RqJ1ZOyliEeiN1CROjJF8V3EyUP6JlDlHamlTUifg5j8v8AhApGS1tRUdLIPLXfrMivKGyyLLXeL6+Z0/oFekANgXp/6k//2gAMAwEAAgADAAAAEPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPM8vPPPPPPPPPPPPPPPITrwx/8Azzzz7zzzzzzGSUvN51TzzzLK/Tzzzz82ypP7dTk8KesT3/zzoC64PjvQKv2y6/zzzzzzwlMZIKob3zo5zzzzzzzzy5qfwjvuv2ffzzzzzzzzy/6gXneVSBTnzzzzzzzzzzmys8Hjenw/zzzzzzzzzzzzzzi0i7zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz/xAAqEQEAAgEDAAoCAwEAAAAAAAABABEhMUFRECAwYXGBkaGx4WDBQNHw8f/aAAgBAwEBPxD8tyyek0cn8GsmDV2P9xKMFvLKJU4mW0YlNdWr69FsGq6Epy3g295WBiwO9dD9vBN1Jq8vM4javH3G7TFLU1wroSMMQbhuoQZHgjvMNi9mBIo8f8dYGNrpFICCnga82V+OKXP361DapVO/Q/cIDiI2oxI0yiBOktdrneCPA7G0Lr7rKm1pV8xCS6yf3KsN7NrrZ+oVgF833lhXpctRgMx3o6eEvocgvLhrHj+4l6D2H9/ME3ev1Z4qZ5jcJZnPQpnbJXMejy9orC2RihvHbVMat310RqEvVbdyYttFj8e5N31/BO4JT1bPmEtZ35bwrmR8pc67SOW7ehks1lxarssm7wxNZ8fU2qXAdMP+IZu578ku6ZkCmAZaSxgxASjKNjshpsntdjQLkginMFgRBklcQ1qnCiLrF1dn3AjWFEGo2h3Zc26JXC9BBT26qaug2K/Lv//EACkRAQACAgEACQUBAQAAAAAAAAEAESExQRAwUWFxocHR8CCBkbHhYED/2gAIAQIBAT8Q/wBaaRNkf8NCI3qaiEj86YlNfSF/Wqoh6Nx8odQnbRNgx+1CKehQXUF3cUBZ8JzcVEpTwPqBWiERBqUQXA4glluFVtnE4hWPGcQtBFdvMUBSRvIbjAwjiKJmCRsTzi230heJsdxsRmLanIlMuklZOzHQubjJXbCisxh949d0EBcC5EVs9QVuX2ntALIwNssVbfKE8B+paF8bgtOXkxi1b0CcDj3jMGD79UuWmT8WCzsbPB+ExubD6PpK2NGC0C+D8amVBGP36Uvvr/uFYURmmB8vqhpuMAO9Gqrk7o3fHUWRrkvDGTuhh7C1/YlxKLVYq/C+6UiL88e6YsF4IQbt+Rc+ePmOrAuua5R+5SQ5hiVv++82UnPt3d0QAKbrz7uLg4atn3bfWLIVSp+cwRVDHjyU8z7gP379eV75iKBpX8spva787lFTX9/13//EACsQAQACAgIBAwMEAgMBAAAAAAEAESExQVFhcYGhkbHBEDBA8CDxUIDR4f/aAAgBAQABPxD/ALkqG2PoC2LvoWz7/b+IaZW6f4hgpdAv03/wRFUALV4gn4Bvm9fwx5mVQ56/Y/MCgxAlERViMOBmzcDshyaeHZD11GX36PP89Hyn6AbVjPIsmPN0/wBnUsAmYdMQU1KCWamICPpBUuoAjcz1ueOVwnE6eH5ftXLm8QbS1X9f3rniPpHzCSiFiNifpgs/zIa8BavAR0Qt8C/3O30gXnmWEvSXSQaJPsHLAQDa/AY+8LBnhfiKLJ2b+s4y5FX9nJEAaYP9R8+IjIhkNeBx/lcajXI/dGEanHzNVORlq8pHjzK6wbsuqbtWyYUh2E/QojHNXGrJpHFJ5/dqWwQtUHlZZtXrYGmulmKz5nMy7vqBb4TBq7Ydi/aaCUDY0HKxNZav2K5ezeV5vLngSra3m2OVMkr2BeHo+Dl9CDbSgUB0f41+tHl4QfMyhhEVhp4hDDQmlSrx7x2kPhy1ZnuGaoDgQwwqBeoRoHlvkjU5GW9gHftHE5F9OL9/qjrBRJ6j7EC8pRFc0FiDNuBFNrCswAIIlic/tuCMACgHeD6hj2MUjSumuyKUVvOXcAQI4lARya5KmB9wpeCs2uO2EpuQ4Ba7WLYD2igc47foouh8Xh0yiwh2TR94XIGweRPK2/4AFQByze70WfQl/f2Q+RDbqHFxAnSjIwjBsKlqMWfqy9PFUsEu7X14hXn3NKZGPC5l7tK9Sn7E72R6jJ8kvdwQ8jT9yIiySOi38sSYrl9k58O4/e0942fZ40z5x+WUx/WY5oQ1VqboNwpCigo8IvywyRjEcDPoH7ZxkmXltD89FzyojBFfvKF4yeAWgTbxqW81Y6cqyvzL0XIf+1vgx3AECsHkrca86DPH5Cy+rlYSNQtl5RS/rj9TpVtrpYQawzcoWD0biDZVzv1IGJRCXKs1E0AJLbOvmO5ZBqWMbrPNykVtDhVEPXFynC16xg+00oGDyv8AyBAFZTySq6wBar3XhIT24C5KbV/EQ21BVia7CoZIgnkOjLgriMo2JlIVZYMyw0DdQcG6ze7g3lpsDdLaSivEr9lyATVR8jgd88S+P4QB7YfvK1JQgKXkAKMvVncKmDUXxjz28xxjLWE78ff6Rbi+PBHwBBfrueDB+dqesGyYisMXvj5hrwWHSH8ysDpj1r3UF/H6MWJqtcW34YdWFHCaac4vnYywQdq09r7jySybEfQt5Uv0lHv82LexR8TTCIwPpAZsKTshXCnBfsEEOqdTiLewI/VW4TMdI/diGgAFAaP3mqUA8iA91I0u4XAcA4DQSouWGoAFotHLRXtNQioEsgcDTXLnqGBAKAKDxKhLr+rYejt5caMmHuhAcyzmynwFfiYQnfhxf+u5VtQE6+ujXf1H2g3HUqGDPQEFnAN8xBOCmixQZp4WO63gIUKxZsemuZf5BAm7wVgQ3xB1doenNW1HEv8Ah2KXU2tpPI0+0Mux0maU6cljq5Zala0cEwGmM3QPmXegks61fC+ktIOLr8wkyxnvzCcfaFYflEvZ6ezhlVNViGv1rjZpr6EyCp2QNPmhPaDTvM50+5VPk8kZWM15yrLEv2ly2djCnAi+n6UfqmgqnZM3H1e0SxaC8rxaUTnTqPZT4jW0EbUl1/CPdOBDD02+h/TPZJfHJjBseMAvzLHCB4ZNnpfxHEOPQmX3CCkMcMeCDpun/wCvtK6s/PDog08tE1iDygTzO0fprhfCfNnEde562j1Nz2WyDsuVyfkhCsTOPk+1k5P8FDbLO2perr7Bg56mTn1RDm5zl2NwE19GxgOR6Bjbd6lvg8w1/CT/AEmgGVcI5gi7Ca5p5jd9NVrKJISA2uGaaHVoA+SPAl7c4RmhUgq2NfWMCenQU+lPZZsLBeXP0seowAGcHq6hl7q0m2I+EnXQXH17drlZ3HDbpiHCS6WUHGrmXicCR7E0w03wgk9FL73BXjm+6b58bQj0C/rGwxWK86a+RlYKmrwTKgobajn86Tn5fgPlwRFDiLK+qfgo4/iFe7pBGviLxywmeAaDUHX1BU4fW76iNaUP+2Kt7ohoZTzZLvGPUYBGzyVSPmPafezp3/6RWfF04bPzAlQ78hLnnyvjZHhyGY+AntnJ8SrR5XYHOgf1CZp2KCip0JdXL7HMS9bAyomkmW7K8xp+A8A5PtjHaRXdtNB7C+wYP4rg1Zd9qfmNUSt4TCPvCKHckG68jqEDactZPX+rMZ/zBQV2dPDw+8bt1SkOz88zB2h08hyjCQQWSg80Ob38NhBuFKbYmPrM2Q8GyY3Gte9+OZkJuC73S/0kywjKK9Xf1riujaYv6DMaJ8E+pDwt1dD60h7IZaSeLflILnhKCfA37mFOujA6A1LP4yvABwSFa3RLfJHThfVhlokTmnB7APyRP3MEzNnBa7Ji3MyywyY4FunpbXUblaL3ZQOZTjxNRLhuY4ClZKax3CCSlwKaix2Zb5g2BaDQMwNtnEpgEHUu7xx5lRhuorqlNl8dQdIBcY2FFur93KjZmgG+G8l9oLYGragqjJjfxH6Q81iHYoHFYjf2moigN0Lq4cpo0Z3CiOLgj3/LUtk5KeoPAHb03hYBjqUIKoZu1cXv+KxEt5dV7DXkIvWASkYROEi8hQ5BwG1tVzEozGiObjk+vOphhibK5YquK3ftDAZfNCVXZses8RJCmHI7zFWmHm4KLj6oIDZjOYxzrwAHz1u4nR3CVbTghS/Z0urAdsvebqXVbVecINBSxmiK+IAiQNpVIC3DeJTHgwpw0DKejqKLxVRKVOgS3oQiJajDItxdDGtgsZWMaKXJcqevWghxyW6itqfFQGFtDuZ1ebsquL4z/F3HKb8R5IV6inu4CqbLCchAPaX5/W5Q4NJsWtGDEtmXxOqWwMHEPRbSw1AJEfmYKye2Vrxfh4RSxlmQHQmVYDDIVhxLkMht8s2HrqOUWK7HYRw2XjUFkCRodhU2QPWWhYIhl2V6qnHZEAjY5HuV/wADZzhN7oolQGXcZoKpyQYKuYb8LcBNV3vS3oZPWO6l23Ng8yxX1m0ROGN1tl/1BYU8l7/8EFUYDWrjbrjXiBYHSKNA23dlhgkIW4saeRzKcc2Uaa104ubeaVme8CpTCpkHHUANf9o//9k=",alt:""}),Object(x.jsxs)("div",{className:"widget__contentTitle",children:[Object(x.jsx)("h5",{children:"CAPTURE CLUB"}),Object(x.jsx)("p",{children:"\ud835\udde2\ud835\uddf3\ud835\uddf3\ud835\uddf6\ud835\uddf0\ud835\uddf6\ud835\uddee\ud835\uddf9 \ud835\udde3\ud835\uddf5\ud835\uddfc\ud835\ude01\ud835\uddfc\ud835\uddf4\ud835\uddff\ud835\uddee\ud835\uddfd\ud835\uddf5\ud835\ude06 \ud835\uddd6\ud835\uddf9\ud835\ude02\ud835\uddef \ud835\uddfc\ud835\uddf3 \ud835\udddc\ud835\udddc\ud835\udddc\ud835\udde7 \ud835\uddde\ud835\uddfc\ud835\ude01\ud835\uddee"})]})]}),Object(x.jsxs)("div",{className:"widget__content",children:[Object(x.jsx)("img",{src:"https://iiitkota.ac.in/static/media/codebase.e7678156.png",alt:""}),Object(x.jsxs)("div",{className:"widget__contentTitle",children:[Object(x.jsx)("h5",{children:"IIIT KOTA CODEBASE"}),Object(x.jsx)("p",{children:"https://iiitkota.ac.in/static/media/codebase.e7678156.png"})]})]}),Object(x.jsxs)("div",{className:"widget__content",children:[Object(x.jsx)("img",{src:"https://iiitkota.ac.in/static/media/dsc.ba791cdd.png",alt:""}),Object(x.jsxs)("div",{className:"widget__contentTitle",children:[Object(x.jsx)("h5",{children:"DEVELOPER STUDENTS CLUB"}),Object(x.jsx)("p",{children:"DSC IIIT Kota, powered by Google Developers, is a diverse community to learn and grow in a learning environment. "})]})]})]})};var ue=function(){return Object(x.jsxs)("div",{className:"widget",children:[Object(x.jsx)("div",{className:"widget__header",children:Object(x.jsx)("h5",{children:"Spaces to follow"})}),Object(x.jsx)("div",{className:"widget__contents",children:Object(x.jsx)(be,{})})]})};var me=function(){return Object(x.jsxs)("div",{className:"quora",children:[Object(x.jsx)(re,{}),Object(x.jsxs)("div",{className:"quora__content",children:[Object(x.jsx)(he,{}),Object(x.jsx)(G,{}),Object(x.jsx)(ue,{})]})]})};var xe=function(){var e=Object(A.c)(N),t=Object(A.b)();return Object(c.useEffect)((function(){b.onAuthStateChanged((function(e){t(e?v({uid:e.uid,email:e.email,displayName:e.displayName,photo:e.photoURL}):f()),console.log(e)}))}),[t]),Object(x.jsx)("div",{className:"App",children:e?Object(x.jsx)(me,{}):Object(x.jsx)(O,{})})},Oe=Object(g.a)({reducer:{user:C,question:U}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(A.a,{store:Oe,children:Object(x.jsx)(xe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},55:function(e,t,s){},77:function(e,t,s){},81:function(e,t,s){},82:function(e,t,s){},90:function(e,t,s){},91:function(e,t,s){},92:function(e,t,s){}},[[107,1,2]]]);
//# sourceMappingURL=main.8f25908c.chunk.js.map