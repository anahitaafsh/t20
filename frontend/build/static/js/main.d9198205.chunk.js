(this["webpackJsonpana-test"]=this["webpackJsonpana-test"]||[]).push([[0],{88:function(e,t,n){},92:function(e,t,n){},94:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t),n.d(t,"msalInstance",(function(){return U}));n(78);var r=n(2),c=n.n(r),a=n(34),s=n.n(a),i=n(102),o=n(20),l=n(33),d=n(9),j=n(3),u=n(56),b={signUpSignIn:"B2C_1_t20signupsignin",forgotPassword:"b2c_1_reset",editProfile:"b2c_1_edit_profile"},h={signUpSignIn:{authority:"https://t20b2c.b2clogin.com/t20b2c.onmicrosoft.com/B2C_1_t20signupsignin"},forgotPassword:{authority:"https://t20b2c.b2clogin.com/t20b2c.onmicrosoft.com/b2c_1_reset"},editProfile:{authority:"https://t20b2c.b2clogin.com/t20b2c.onmicrosoft.com/b2c_1_edit_profile"}},p="t20b2c.b2clogin.com",O={auth:{clientId:"dfc41c62-bb90-4d3b-adc2-b837b9569f71",authority:h.signUpSignIn.authority,knownAuthorities:[p],redirectUri:"https://t20.azurewebsites.net/",postLogoutRedirectUri:"https://t20.azurewebsites.net/",navigateToLoginRequestUrl:!1},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!1},system:{loggerOptions:{loggerCallback:function(e,t,n){if(!n)switch(e){case u.a.Error:return void console.error(t);case u.a.Info:return void console.info(t);case u.a.Verbose:return void console.debug(t);case u.a.Warning:return void console.warn(t)}}}}},m={scopes:[]},x=n(5);var g=function(e){return Object(x.jsxs)("div",{id:"token-div",children:[Object(x.jsxs)("p",{children:[Object(x.jsx)("strong",{children:"Audience: "})," ",e.idTokenClaims.aud]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("strong",{children:"Issuer: "})," ",e.idTokenClaims.iss]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("strong",{children:"OID: "})," ",e.idTokenClaims.oid]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("strong",{children:"UPN: "})," ",e.idTokenClaims.preferred_username]})]})},f=n(31),v=n(35),y=(n(88),n(95).default);var N=function(e){var t=Object(r.useState)(""),n=Object(o.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(""),i=Object(o.a)(s,2),l=i[0],d=i[1],j=Object(r.useState)(""),u=Object(o.a)(j,2),b=u[0],h=u[1],p=Object(r.useState)(""),O=Object(o.a)(p,2),m=O[0],g=O[1],N=Object(r.useState)(""),k=Object(o.a)(N,2),C=k[0],w=k[1],P=Object(r.useState)(""),S=Object(o.a)(P,2),B=S[0],T=S[1],I=Object(r.useState)({anomaly_bodyTemp:null,anomaly_bs:null,anomaly_dbp:null,anomaly_hr:null,anomaly_sbp:null,riskLevel:null}),_=Object(o.a)(I,2),R=_[0],A=_[1];console.log(R);var F=function(){var t=Object(v.a)(Object(f.a)().mark((function t(n){var r;return Object(f.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),console.log("An entry was submitted with the Age: "+c+", SystolicBP: "+l+", DiastolicBP: "+b+", Blood Sugar: "+m+", Body Temperature: "+C+", Heart Rate: "+B),t.next=4,y.post("https://apit20.azurewebsites.net/predict",{age:c,systolicBP:l,diastolicBP:b,BS:m,bodyTemp:C,heartRate:B});case 4:r=t.sent,console.log(r.data),A(r.data),e.refresh((function(e){return!e}));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("form",{id:"entryForm",onSubmit:function(e){F(e)},children:[Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"col-6",children:[Object(x.jsxs)("div",{className:"input-group mb-2",children:[Object(x.jsx)("div",{className:"input-group-prepend",children:Object(x.jsx)("span",{className:"input-group-text",children:"Age "})}),Object(x.jsx)("input",{type:"text",className:"form-control",value:c,required:!0,onChange:function(e){!function(e){isNaN(c)?alert("Please enter a numerical value"):a(e.target.value)}(e)}})]}),Object(x.jsxs)("div",{className:"input-group mb-2",children:[Object(x.jsx)("div",{className:"input-group-prepend",children:Object(x.jsx)("span",{className:"input-group-text",children:"Systolic Blood Pressure"})}),Object(x.jsx)("input",{type:"text",className:"form-control",value:l,required:!0,onChange:function(e){!function(e){isNaN(l)?alert("Please enter a numerical value"):d(e.target.value)}(e)}})]}),Object(x.jsxs)("div",{className:"input-group mb-2",children:[Object(x.jsx)("div",{className:"input-group-prepend ",children:Object(x.jsx)("span",{className:"input-group-text",children:"Diastolic Blood Pressure"})}),Object(x.jsx)("input",{type:"text",className:"form-control",value:b,required:!0,onChange:function(e){!function(e){isNaN(b)?alert("Please enter a numerical value"):h(e.target.value)}(e)}})]})]}),Object(x.jsxs)("div",{className:"col-6",children:[Object(x.jsxs)("div",{className:"input-group mb-2",children:[Object(x.jsx)("div",{className:"input-group-prepend",children:Object(x.jsx)("span",{className:"input-group-text",children:"Blood Sugar"})}),Object(x.jsx)("input",{type:"text",className:"form-control",value:m,required:!0,onChange:function(e){!function(e){isNaN(m)?alert("Please enter a numerical value"):g(e.target.value)}(e)}})]}),Object(x.jsxs)("div",{className:"input-group mb-2",children:[Object(x.jsx)("div",{className:"input-group-prepend",children:Object(x.jsx)("span",{className:"input-group-text",children:"Body Temperature"})}),Object(x.jsx)("input",{type:"text",className:"form-control",value:C,required:!0,onChange:function(e){!function(e){isNaN(C)?alert("Please enter a numerical value"):w(e.target.value)}(e)}}),-1==R.anomaly_sbp&&Object(x.jsx)("div",{className:"feedback-invalid",children:"!!"})]}),Object(x.jsxs)("div",{className:"input-group mb-2",children:[Object(x.jsx)("div",{className:"input-group-prepend",children:Object(x.jsx)("span",{className:"input-group-text",children:"Heart Rate"})}),Object(x.jsx)("input",{type:"text",className:"form-control",value:B,required:!0,onChange:function(e){!function(e){isNaN(B)?alert("Please enter a numerical value"):T(e.target.value)}(e)}})]})]})]}),Object(x.jsx)("input",{id:"submitBtn",type:"submit",value:"Submit"})]}),Object(x.jsx)("div",{id:"result",children:Object(x.jsx)("h7",{children:'Click on "Submit" to view your results.'})}),Object(x.jsx)("div",{id:"result2",children:Object(x.jsx)("h8",{children:R.riskLevel})})]})};var k=n(58),C=n(101),w=n(76),P=n(103);var S=function(e){var t=function(){var e=Object(l.d)().instance,t=function(){window.location.replace("https://github.com/anahitaafsh/t20")},n=function(){window.location.replace("/")};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(l.a,{children:[Object(x.jsxs)("div",{className:"navLinks",children:[Object(x.jsx)(k.a,{variant:"primary",onClick:n,style:{margin:"10px;"},children:"Home"}),Object(x.jsx)(k.a,{variant:"secondary",onClick:t,style:{margin:"10px;"},children:"Github"})]}),Object(x.jsxs)("div",{className:"ml-auto",children:[Object(x.jsx)(k.a,{variant:"info",onClick:function(){return e.loginPopup(h.editProfile)},className:"ml-auto",children:"Edit Profile"}),Object(x.jsxs)(C.a,{variant:"warning",className:"ml-auto",drop:"left",title:"Sign Out",children:[Object(x.jsx)(w.a.Item,{as:"button",onClick:function(){return e.logoutPopup({postLogoutRedirectUri:"/",mainWindowRedirectUri:"/"})},children:"Sign out using Popup"}),Object(x.jsx)(w.a.Item,{as:"button",onClick:function(){return e.logoutRedirect({postLogoutRedirectUri:"/"})},children:"Sign out using Redirect"})]})]})]}),Object(x.jsxs)(l.c,{children:[Object(x.jsxs)("div",{className:"navLinks",children:[Object(x.jsx)(k.a,{variant:"primary",onClick:n,style:{margin:"10px;"},children:"Home"}),Object(x.jsx)(k.a,{variant:"secondary",onClick:t,style:{margin:"10px;"},children:"Github"})]}),Object(x.jsxs)(C.a,{variant:"secondary",className:"ml-auto",drop:"left",title:"Sign In",children:[Object(x.jsx)(w.a.Item,{as:"button",onClick:function(){e.loginPopup(m).catch((function(e){return console.log(e)}))},children:"Sign in using Popup"}),Object(x.jsx)(w.a.Item,{as:"button",onClick:function(){return e.loginRedirect(m)},children:"Sign in using Redirect"})]})]})]})};return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(P.a,{bg:"#01A6F0",variant:"dark",style:{backgroundColor:"#01A6F0",color:"#01A6F0"},children:[Object(x.jsx)("a",{className:"navbar-brand",href:"/",children:"2022 Aspire T20 Project"}),Object(x.jsx)(t,{})]})})},B=n(52),T=n(28);T.d.register(T.g,T.c,T.h,T.j);var I=function(e){var t=Object(r.useState)([]),n=Object(o.a)(t,2),c=n[0],a=n[1],s=e.refresh;Object(r.useEffect)(Object(v.a)(Object(f.a)().mark((function e(){var t,n;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:4000/maternal");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n);case 7:case"end":return e.stop()}}),e)}))),[s]);for(var i=[c.length],l=[c.length],d=[c.length],j=[c.length],u=[c.length],b=0;b<c.length;b++)i[b]=c[b].id,l[b]=c[b].BS,d[b]=c[b].systolicBP,j[b]=c[b].diastolicBP,u[b]=c[b].bodyTemp;var h={labels:i,datasets:[{data:l,backgroundColor:"transparent",fill:"false",borderColor:"#36A2EB"}]},p={labels:i,datasets:[{data:d,backgroundColor:"transparent",fill:"false",borderColor:"Ff0000"}]},O={labels:i,datasets:[{data:j,backgroundColor:"transparent",fill:"false",borderColor:"rgb(54, 162, 235)"}]},m={labels:i,datasets:[{data:u,backgroundColor:"transparent",fill:"false",borderColor:"FFA500"}]},g={};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"row p-4",style:{width:"1000px"},children:Object(x.jsx)("div",{className:"col-12",children:Object(x.jsxs)("table",{className:"table table-striped",children:[Object(x.jsxs)("thead",{children:[Object(x.jsx)("th",{children:"ID"}),Object(x.jsx)("th",{children:"Age"}),Object(x.jsx)("th",{children:"Systolic BP"}),Object(x.jsx)("th",{children:"Diastolic BP"}),Object(x.jsx)("th",{children:"Blood Sugar"}),Object(x.jsx)("th",{children:"Body Temp (F)"}),Object(x.jsx)("th",{children:"Heart Rate"})]}),Object(x.jsx)("tbody",{children:c.map((function(e){return function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:e.id}),Object(x.jsx)("td",{children:e.age}),Object(x.jsx)("td",{children:e.systolicBP}),Object(x.jsx)("td",{children:e.diastolicBP}),Object(x.jsx)("td",{children:e.BS}),Object(x.jsx)("td",{children:e.bodyTemp}),Object(x.jsx)("td",{children:e.heartRate})]})}(e)}))})]})})}),Object(x.jsxs)("div",{style:{width:"1200px",height:"800px",marginLeft:"20px"},children:[Object(x.jsx)("h3",{children:"Blood Sugar"}),Object(x.jsx)(B.a,{data:h,options:g}),Object(x.jsx)("h3",{children:"Systolic Blood Pressure"}),Object(x.jsx)(B.a,{data:p,options:g}),Object(x.jsx)("h3",{children:"Diastolic Blood Pressure"}),Object(x.jsx)(B.a,{data:O,options:g}),Object(x.jsx)("h3",{children:"Body Temperature"}),Object(x.jsx)(B.a,{data:m,options:g})]})]})};var _=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"10px"},children:Object(x.jsx)("h6",{style:{display:"center",border:"2px solid",maxWidth:"1000px"},children:"Welcome to the Maternal Health Risk Tracker! We aim to help pregnant women track their maternal health and predict potential risk based on age, blood pressure, blood glucose and heart rate using a pre-trained classification machine learning model. Enter your information to view risk level and trend information below."})})})},R=function(e){console.log(e);var t=Object(r.useState)(!1),n=Object(o.a)(t,2),c=n[0],a=n[1];return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{style:{backgroundColor:"#f5f5f5"},children:[Object(x.jsx)(S,{}),Object(x.jsx)(_,{}),Object(x.jsx)(N,{refresh:a}),Object(x.jsx)(I,{refresh:c})]})})},A=(n(92),function(){var e=Object(l.d)().accounts,t=Object(r.useState)(null),n=Object(o.a)(t,2),c=n[0],a=n[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("h5",{className:"card-title",children:["Welcome ",e[0].name]}),c?Object(x.jsx)(g,{idTokenClaims:c}):Object(x.jsx)(k.a,{variant:"secondary",onClick:function(){a(e[0].idTokenClaims)},children:"View ID Token Claims"})]})}),F=function(){var e=Object(l.d)().instance;return Object(r.useEffect)((function(){var t=e.addEventCallback((function(t){if(t.eventType===d.a.LOGIN_FAILURE&&t.error&&t.error.errorMessage.indexOf("AADB2C90118")>-1&&(t.interactionType===j.l.Redirect?e.loginRedirect(h.forgotPassword):t.interactionType===j.l.Popup&&e.loginPopup(h.forgotPassword).catch((function(e){}))),t.eventType===d.a.LOGIN_SUCCESS&&null!==t&&void 0!==t&&t.payload&&t.payload.idTokenClaims.acr===b.forgotPassword)return window.alert("Password has been reset successfully. \nPlease sign-in with your new password"),e.logout()}));return function(){t&&e.removeEventCallback(t)}}),[]),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(l.a,{children:Object(x.jsx)(A,{})}),Object(x.jsx)(l.c,{children:Object(x.jsx)("h5",{className:"card-title",children:"Please sign-in to see your profile information."})})]})};function L(e){var t=e.msalInstance;return Object(x.jsx)(l.b,{instance:t,children:Object(x.jsx)(R,{children:Object(x.jsx)(F,{})})})}n(93),n(94);var U=new i.a(O);s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(L,{msalInstance:U})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.d9198205.chunk.js.map