(this["webpackJsonponline-shop"]=this["webpackJsonponline-shop"]||[]).push([[18],{123:function(e,t,n){"use strict";var a=n(2),s=n(126),c=(n(0),n(1));t.a=function(e){var t=e.handleChange,n=e.label,r=Object(s.a)(e,["handleChange","label"]);return Object(c.jsxs)("div",{className:"custom-form",children:[Object(c.jsx)("input",Object(a.a)({className:"form-input",onChange:t},r)),n?Object(c.jsx)("label",{className:"".concat(r.value.length?"shrink":""," form-input-label"),children:n}):null]})}},126:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}n.d(t,"a",(function(){return a}))},329:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(102),c=n.n(s),r=n(108),i=n(142),l=n.n(i),o=n(143),u=n(38),j=n(2),m=n(97),d=n(25),b=n.n(d),h=n(10),p=n(18),O=n(4),f=n(98),x=n(123),g=n(12),v=n(36),w=n(1),y=Object(p.connect)(null,(function(e){return{setCurrentUser:function(t){return e(Object(v.b)(t))}}}))((function(e){var t=e.setCurrentUser,n=Object(O.g)(),s=Object(a.useState)({email:"",password:""}),c=Object(m.a)(s,2),r=c[0],i=c[1],d=r.email,p=r.password,v=function(e){var t=e.target,n=t.value,a=t.name;i(Object(j.a)(Object(j.a)({},r),{},Object(u.a)({},a,n)))},y=function(){var e=Object(o.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),b.a.post("".concat("https://online-shop-vp7rk.ondigitalocean.app","/api/v1/users/login"),r).then((function(e){200===e.status?(t(e.data.user),document.cookie="jwt=".concat(e.data.token),Object(h.toast)(" Hi ".concat(e.data.user.name,"! Welcome back!"),g.m),window.setTimeout((function(){n.push("/")}),100)):400===e.status&&h.toast.error(e.data.message,g.m)})).catch((function(e){console.log(e),h.toast.error(e.response.data.message,g.m)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{className:"section sign-in d-flex flex-column justify-content-center mx-auto",children:[Object(w.jsx)("h3",{className:"mx-auto mt-5 mb-4",children:"Sign In"}),Object(w.jsx)("h5",{className:"py-3 mx-auto",children:"Sign in with your email and password"}),Object(w.jsxs)("form",{onSubmit:y,children:[Object(w.jsx)(x.a,{name:"email",type:"email",onChange:v,value:d,label:"Email",required:!0}),Object(w.jsx)(x.a,{name:"password",type:"password",onChange:v,value:p,label:"Password",required:!0}),Object(w.jsxs)("div",{className:"row-cols-md-2 pt-4 d-flex",children:[Object(w.jsx)("div",{className:"pr-3",children:Object(w.jsx)(f.a,{name:"Sign In",styleClass:"white square fullWidth",onClick:function(e){return y(e)}})}),Object(w.jsx)("div",{className:"",children:Object(w.jsx)(f.a,{name:"Become A Member",link:"/register",styleClass:"square color fullWidth lighter"})})]})]}),Object(w.jsxs)("div",{className:"my-5 py-5 d-flex flex-column",children:[Object(w.jsx)("span",{className:"mb-4",children:"* Hi there! For testing purpose: I already created one account. But you can also create your own new account. *"}),Object(w.jsx)("span",{className:"",children:"Email: test@gmail.com"}),Object(w.jsx)("span",{className:"",children:"Password: 12345678"})]})]})}));t.default=function(){return Object(w.jsxs)("div",{className:"log-in",children:[Object(w.jsxs)(c.a,{children:[Object(w.jsx)("title",{children:"Login | Shine "}),Object(w.jsx)("meta",{name:"description",content:"Login Shine Online Shop"})]}),Object(w.jsx)(r.a,{children:Object(w.jsx)("div",{className:"container",children:Object(w.jsx)("div",{className:"row mx-3",children:Object(w.jsx)(y,{})})})})]})}}}]);
//# sourceMappingURL=18.3756cdb4.chunk.js.map