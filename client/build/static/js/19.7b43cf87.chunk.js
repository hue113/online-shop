(this["webpackJsonponline-shop"]=this["webpackJsonponline-shop"]||[]).push([[19],{123:function(e,a,t){"use strict";var n=t(2),r=t(126),s=(t(0),t(1));a.a=function(e){var a=e.handleChange,t=e.label,c=Object(r.a)(e,["handleChange","label"]);return Object(s.jsxs)("div",{className:"custom-form",children:[Object(s.jsx)("input",Object(n.a)({className:"form-input",onChange:a},c)),t?Object(s.jsx)("label",{className:"".concat(c.value.length?"shrink":""," form-input-label"),children:t}):null]})}},126:function(e,a,t){"use strict";function n(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(a,"a",(function(){return n}))},329:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t(102),s=t.n(r),c=t(108),o=t(142),i=t.n(o),l=t(143),u=t(38),m=t(2),b=t(97),d=t(25),p=t.n(d),h=t(5),j=t(18),f=t(4),x=t(159),O=t.n(x),g=t(98),v=t(123),w=t(12),y=t(36),k=t(1),C=Object(j.connect)(null,(function(e){return{setCurrentUser:function(a){return e(Object(y.b)(a))}}}))((function(e){var a=e.setCurrentUser,t=Object(n.useState)({name:"",email:"",password:"",passwordConfirm:""}),r=Object(b.a)(t,2),s=r[0],c=r[1],o=s.name,d=s.email,j=s.password,x=s.passwordConfirm,y=Object(f.g)(),C=function(e){var a=e.target,t=a.name,n=a.value;c(Object(m.a)(Object(m.a)({},s),{},Object(u.a)({},t,n)))},N=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(s),t.preventDefault(),/^[a-zA-Z0-9 _]*$/.test(o)&&0!==o.length){e.next=5;break}return h.b.error("Please provide a display name, with no special characters",w.m),e.abrupt("return");case 5:if(O.a.isEmail(d)){e.next=8;break}return h.b.error("Please provide a valid email",w.m),e.abrupt("return");case 8:if(j===x){e.next=11;break}return h.b.error("Passwords don't match, please try again",w.m),e.abrupt("return");case 11:if(!(j.length<8||x.length<8)){e.next=14;break}return h.b.error("Password: Be 8 or more characters long",w.m),e.abrupt("return");case 14:p.a.get("".concat("https://shine-shop.herokuapp.com/","/api/v1/users/checkemail/").concat(d)).then((function(e){return 0!==e.data.data?(console.log(e),void h.b.error("Email already exists, please choose a different email.",w.m)):p.a.post("".concat("https://shine-shop.herokuapp.com/","/api/v1/users/signup"),s).then((function(e){a(e.data.user),c({name:"",email:"",password:"",passwordConfirm:""}),h.b.success("Account successfully created. Thank you for your registration!",w.m),window.setTimeout((function(){y.push("/")}),2e3)}))})).catch((function(e){console.log(e),h.b.error("Error happened!",w.m)}));case 15:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(k.jsxs)("div",{className:"section sign-in d-flex flex-column justify-content-center mx-auto",children:[Object(k.jsx)("h3",{className:"mx-auto mt-5 mb-4",children:"Become a member"}),Object(k.jsx)("h5",{className:"py-3 text-center",children:"Become a member - Get a gift on your birthday, exlusive member offers, and new product sneak peeks"}),Object(k.jsxs)("form",{onSubmit:N,children:[Object(k.jsx)(v.a,{type:"text",name:"name",value:o,onChange:C,label:"Display Name",required:!0}),Object(k.jsx)(v.a,{type:"email",name:"email",value:d,onChange:C,label:"Email",required:!0}),Object(k.jsx)(v.a,{type:"password",name:"password",value:j,onChange:C,label:"Password",required:!0}),Object(k.jsx)(v.a,{type:"password",name:"passwordConfirm",value:x,onChange:C,label:"Confirm Password",required:!0}),Object(k.jsx)("div",{className:"row-cols-md-2 pt-4 d-flex",children:Object(k.jsx)("div",{className:" mx-auto",children:Object(k.jsx)(g.a,{onClick:N,name:"Become A Member",styleClass:"square color fullWidth lighter"})})})]}),Object(k.jsxs)("div",{className:"my-5 py-5 d-flex flex-column",children:[Object(k.jsx)("span",{className:"mb-4",children:"* Hi there! For testing purpose: I already created one account. But you can also create your own new account. *"}),Object(k.jsx)("span",{className:"",children:"Email: test@gmail.com"}),Object(k.jsx)("span",{className:"",children:"Password: 12345678"})]})]})}));a.default=function(){return Object(k.jsxs)("div",{className:"log-in",children:[Object(k.jsxs)(s.a,{children:[Object(k.jsx)("title",{children:"Register | Shine "}),Object(k.jsx)("meta",{name:"description",content:"Register Shine Online Shop"})]}),Object(k.jsx)(c.a,{children:Object(k.jsx)("div",{className:"container",children:Object(k.jsx)("div",{className:"row mx-3",children:Object(k.jsx)(C,{})})})})]})}}}]);