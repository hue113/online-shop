(this["webpackJsonponline-shop"]=this["webpackJsonponline-shop"]||[]).push([[21],{104:function(e,s,t){"use strict";t(0);var a=t(29),c=[{id:1,name:"Home",fullName:"Home",link:"/"},{id:2,name:"Shop",fullName:"Shop Page",link:"/shop"},{id:3,name:"Women",fullName:"Women Collections",link:"/shop/women"},{id:4,name:"Men",fullName:"Men Collections",link:"/shop/men"},{id:5,name:"Kids",fullName:"Kids Collections",link:"/shop/kids"},{id:6,name:"Accessories",fullName:"Accessories",link:"/shop/accessories"},{id:7,name:"New Arrivals",fullName:"New Arrivals",link:"/shop/new-arrivals"},{id:8,name:"Sale",fullName:"All Sale Collections",link:"/shop/sale"},{id:9,name:"Stores",fullName:"Store Locator",link:"/stores"},{id:10,name:"Checkout",fullName:"Checkout",link:"/checkout"},{id:10,name:"Favourites",fullName:"Favourites",link:"/favourites"},{id:11,name:"Account",fullName:"My Account",link:"/account"},{id:12,name:"Popular",fullName:"Best Sellers",link:"/shop/popular"}],n=t(1);s.a=function(e){var s=e.path,t=e.productName,r=e.productPath,i=s.split(", ").map((function(e){return c.filter((function(s){return s.name.toLowerCase()===e.replace("-"," ")}))[0]}));return Object(n.jsx)("div",{className:"breadcrumbs py-5",children:Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)("h2",{className:"title uppercase bold",children:t||i.slice(-1)[0].fullName}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{className:"link-group",children:Object(n.jsxs)("span",{className:"link",children:[i.map((function(e){return Object(n.jsx)(a.b,{to:e.link,children:e.name},e.id)})),r&&Object(n.jsx)(a.b,{to:r,children:t})]})})]})})}},323:function(e,s,t){"use strict";t.r(s);var a=t(97),c=t(0),n=t(102),r=t.n(n),i=t(108),l=t(104),o=t(18),m=t(24),d=t(37),j=t(1),b=Object(m.b)({currentUser:d.a}),u=Object(o.connect)(b)((function(e){var s=e.setSelection,t=e.currentUser;return Object(j.jsx)("div",{className:"dashboard p-0",children:Object(j.jsxs)("div",{className:"dashboard-wrapper d-flex flex-lg-column flex-row p-5",children:[Object(j.jsxs)("div",{className:"profile-picture mb-5 mx-auto",children:[Object(j.jsx)("div",{className:"avatar mb-4",children:Object(j.jsx)("img",{src:"https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=624&q=80",alt:"user profile"})}),Object(j.jsx)("h4",{className:"name bold text-center",children:t.name}),Object(j.jsxs)("h4",{className:"points text-center mt-3",children:[t.points," points"]})]}),Object(j.jsxs)("div",{className:"options",children:[Object(j.jsxs)("div",{className:"item py-4",onClick:function(){return s("orders")},children:[Object(j.jsx)("i",{className:"bi bi-cart4 icon mr-4"}),"My Orders"]}),Object(j.jsxs)("div",{className:"item py-4",onClick:function(){return s("reviews")},children:[Object(j.jsx)("i",{className:"bi bi-star icon mr-4"}),"My Reviews"]}),Object(j.jsxs)("div",{className:"item py-4",onClick:function(){return s("payment")},children:[Object(j.jsx)("i",{className:"bi bi-credit-card icon mr-4"}),"Payment Information"]}),Object(j.jsxs)("div",{className:"item py-4",onClick:function(){return s("settings")},children:[Object(j.jsx)("i",{className:"bi bi-gear-fill icon mr-4"}),"Settings"]})]})]})})})),h=t(25),p=t.n(h),x=t(306),O=t.n(x),f=function(e){var s=e.item,t=Object(c.useState)(),n=Object(a.a)(t,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){var e=document.cookie.split("=")[1];return e&&p.a.get("".concat("https://shine-shop-demo.herokuapp.com","/api/v1/products/").concat(s.product),{headers:{Authorization:"Bearer "+e}}).then((function(e){i(e.data.data)})).catch((function(e){console.log(e)})),function(){}}),[s.product]),Object(j.jsx)(j.Fragment,{children:r&&Object(j.jsxs)("div",{className:"item my-4 d-md-flex",children:[Object(j.jsx)("div",{className:"image mr-5",children:Object(j.jsx)("img",{src:r.image[0],alt:r.name})}),Object(j.jsxs)("div",{className:"",children:[Object(j.jsx)("h5",{className:"bold my-3",children:r.name}),Object(j.jsxs)("div",{className:"description",children:[Object(j.jsx)("span",{className:"mr-2",children:"Color:"}),Object(j.jsx)("span",{className:"mr-5",children:s.color}),Object(j.jsx)("span",{className:"mr-2",children:"Size:"}),Object(j.jsx)("span",{className:"mr-5",children:s.size.toUpperCase()}),Object(j.jsx)("span",{className:"mr-2",children:"Quantity:"}),Object(j.jsx)("span",{className:"",children:s.quantity})]})]})]})})},N=function(e){var s=e.order,t=Object(c.useState)(!1),n=Object(a.a)(t,2),r=n[0],i=n[1],l=s.createdAt,o=s.items,m=s.total,d=s._id,b=new Date(l);return Object(j.jsxs)("div",{className:"order-card d-md-flex justify-content-between",onClick:function(){return i(!r)},children:[Object(j.jsxs)("div",{className:"content",children:[Object(j.jsxs)("div",{className:"",children:[Object(j.jsx)("h4",{className:"date  mr-4 mb-4",children:"Order Placed:"}),b.toDateString()]}),Object(j.jsxs)("div",{className:"",children:[Object(j.jsx)("h4",{className:"total mr-4 mb-3",children:"Total:"}),"$",m]}),Object(j.jsxs)("div",{className:"",children:[Object(j.jsx)("h4",{className:"items mr-4 mb-4",children:"Items:"}),o.length]}),Object(j.jsx)("h5",{className:"view-details color",children:"View details"}),Object(j.jsx)("div",{className:"",children:r?o.map((function(e,s){return Object(j.jsx)(f,{item:e},s)})):""})]}),Object(j.jsx)("div",{className:"",children:Object(j.jsx)(O.a,{value:d,size:90})})]})},v=function(e){var s=e.user,t=Object(c.useState)(),n=Object(a.a)(t,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){var e=document.cookie.split("=")[1];return e?p.a.get("".concat("https://shine-shop-demo.herokuapp.com","/api/v1/users/").concat(s._id,"/orders"),{headers:{Authorization:"Bearer "+e}}).then((function(e){i(e.data.data)})).catch((function(e){console.log(e)})):function(){}}),[s._id]),Object(j.jsxs)("div",{className:"my-orders",children:[Object(j.jsx)("h2",{className:"title bold py-5 mb-5",children:"My Orders"}),r&&r.map((function(e,s){return Object(j.jsx)(N,{order:e},s)})),Object(j.jsx)("div",{className:"py-4 mb-3 text-md-right text-sm-center"})]})},g=t(38),w=t(2),y=t(159),C=t.n(y),k=t(10),S=t(98),P=t(12),A=t(36),M=Object(o.connect)(null,(function(e){return{updateUserInfo:function(s){return e(Object(A.c)(s))}}}))((function(e){var s=e.user,t=e.updateUserInfo,n=Object(c.useState)({country:s.address.country,state:s.address.state,addressLine:s.address.addressLine,postal:s.address.postal}),r=Object(a.a)(n,2),i=r[0],l=r[1],o=i.country,m=i.state,d=i.addressLine,b=i.postal,u=Object(c.useState)({name:s.name,email:s.email}),h=Object(a.a)(u,2),p=h[0],x=h[1],O=p.name,f=p.email,N=function(e){var s=e.target,t=s.name,a=s.value;x(Object(w.a)(Object(w.a)({},p),{},Object(g.a)({},t,a)))},v=function(e){var s=e.target,t=s.name,a=s.value;l(Object(w.a)(Object(w.a)({},i),{},Object(g.a)({},t,a)))};return Object(j.jsxs)("div",{className:"account-settings",children:[Object(j.jsx)("h2",{className:"title bold py-5 mb-5",children:"Account Settings"}),Object(j.jsxs)("div",{className:"field mb-5",children:[Object(j.jsx)("h4",{className:"label bold mb-4 mx-2",children:"Display Name"}),Object(j.jsx)("input",{className:"input",type:"text",name:"name",value:O,onChange:N})]}),Object(j.jsxs)("div",{className:"field mb-5",children:[Object(j.jsx)("h4",{className:"label bold mb-4 mx-2",children:"Email"}),Object(j.jsx)("input",{className:"input",type:"text",name:"email",value:f,onChange:N})]}),Object(j.jsxs)("div",{className:"field mb-5",children:[Object(j.jsx)("h4",{className:"label bold mb-4 mx-2",children:"My Address"}),Object(j.jsxs)("div",{className:"half-wrapper d-flex justify-content-between mb-4",children:[Object(j.jsxs)("div",{className:"half mr-3",children:[Object(j.jsx)("h5",{className:"sub-label mx-2",children:"Country"}),Object(j.jsx)("input",{className:"input",type:"text",name:"country",value:o,onChange:v})]}),Object(j.jsxs)("div",{className:"half",children:[Object(j.jsx)("h5",{className:"sub-label mx-2",children:"State/Province"}),Object(j.jsx)("input",{className:"input",type:"text",name:"state",value:m,onChange:v})]})]}),Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)("h5",{className:"sub-label mx-2",children:"Address Line"}),Object(j.jsx)("input",{className:"input",type:"text",name:"addressLine",value:d,onChange:v})]}),Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)("h5",{className:"sub-label mx-2",children:"Postal Code"}),Object(j.jsx)("input",{className:"input",type:"text",name:"postal",value:b.toUpperCase(),onChange:v})]})]}),Object(j.jsx)("div",{className:"py-4 mb-3 text-md-right text-sm-center",onClick:function(e){if(e.preventDefault(),/^[a-zA-Z0-9 _]*$/.test(O)&&0!==O.length)if(C.a.isEmail(f)){var s=b.replace(/ /g,"");if(console.log(s),6===s.length){var a={name:p.name,email:p.email,address:Object(w.a)(Object(w.a)({},i),{},{postal:s})};console.log(a),t(a)}else k.toast.error("Postal code is not valid",P.n)}else k.toast.error("Email is not valid",P.n);else k.toast.error("Please provide a display name, with no special characters",P.n)},children:Object(j.jsx)(S.a,{name:"Save Settings",styleClass:"round color lighter"})})]})})),U=t(142),D=t.n(U),L=t(143),z=Object(o.connect)(null,(function(e){return{updateUserPassword:function(s){return e(Object(A.d)(s))}}}))((function(e){var s=e.updateUserPassword,t=Object(c.useState)({passwordCurrent:"12345678",password:"12345678",passwordConfirm:"12345678"}),n=Object(a.a)(t,2),r=n[0],i=n[1],l=r.passwordCurrent,o=r.password,m=r.passwordConfirm,d=function(e){var s=e.target,t=s.name,a=s.value;i(Object(w.a)(Object(w.a)({},r),{},Object(g.a)({},t,a)))},b=function(){var e=Object(L.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(r),t.preventDefault(),o===m){e.next=5;break}return k.toast.error("Passwords don't match, please try again",P.n),e.abrupt("return");case 5:if(!(o.length<8||m.length<8)){e.next=8;break}return k.toast.error("Password: Be 8 or more characters long",P.n),e.abrupt("return");case 8:s(r);case 9:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"password-settings",children:[Object(j.jsx)("h2",{className:"title bold py-5 mb-5",children:"Password Change"}),Object(j.jsxs)("div",{className:"field mb-5",children:[Object(j.jsx)("h5",{className:"label mb-4 mx-2",children:"Current Password"}),Object(j.jsx)("input",{className:"input",type:"password",name:"passwordCurrent",value:l,onChange:d})]}),Object(j.jsxs)("div",{className:"field mb-5",children:[Object(j.jsx)("h4",{className:"label mb-4 mx-2",children:"New Password"}),Object(j.jsx)("input",{className:"input",type:"password",name:"password",value:o,onChange:d})]}),Object(j.jsxs)("div",{className:"field mb-5",children:[Object(j.jsx)("h4",{className:"label mb-4 mx-2",children:"Confirm New Password"}),Object(j.jsx)("input",{className:"input",type:"password",name:"passwordConfirm",value:m,onChange:d})]})]}),Object(j.jsx)("div",{className:"py-4 text-md-right text-sm-center",onClick:function(e){return b(e)},children:Object(j.jsx)(S.a,{name:"Save Change",styleClass:"round color lighter"})})]})})),B=function(e){var s=e.user;return Object(j.jsxs)("div",{className:"settings",children:[Object(j.jsx)(M,{user:s}),Object(j.jsx)(z,{})]})},E=function(){return Object(j.jsxs)("div",{className:"payment-info",children:[Object(j.jsx)("h2",{className:"title bold py-5 mb-5",children:"Payment Methods"}),Object(j.jsxs)("p",{children:["This feature is being implemented. ",Object(j.jsx)("br",{}),"Comming soon!"]}),Object(j.jsx)("div",{className:"py-4 mb-3 text-md-right text-sm-center"})]})},H=function(){return Object(j.jsxs)("div",{className:"my-reviews",children:[Object(j.jsx)("h2",{className:"title bold py-5 mb-5",children:"My Reviews"}),Object(j.jsxs)("p",{children:["This feature is being implemented. ",Object(j.jsx)("br",{}),"Comming soon!"]}),Object(j.jsx)("div",{className:"py-4 mb-3 text-md-right text-sm-center"})]})},F=Object(m.b)({currentUser:d.a}),I=Object(o.connect)(F)((function(e){var s=e.selection,t=e.currentUser;return Object(j.jsx)("div",{className:"account-main p-0 flex-grow-1",children:Object(j.jsxs)("div",{className:"account-main-wrapper",children:["orders"===s&&Object(j.jsx)(v,{user:t}),"reviews"===s&&Object(j.jsx)(H,{user:t}),"payment"===s&&Object(j.jsx)(E,{user:t}),"settings"===s&&Object(j.jsx)(B,{user:t})]})})}));s.default=function(){var e=Object(c.useState)("orders"),s=Object(a.a)(e,2),t=s[0],n=s[1];return Object(j.jsxs)("div",{className:"account-page",children:[Object(j.jsxs)(r.a,{children:[Object(j.jsx)("title",{children:"Shine | Account"}),Object(j.jsx)("meta",{name:"description",content:"Shine Online Shop"})]}),Object(j.jsxs)(i.a,{children:[Object(j.jsx)(l.a,{path:"home, account"}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row content-wrapper mb-5 d-flex flex-wrap",children:[Object(j.jsx)(u,{setSelection:n}),Object(j.jsx)(I,{selection:t})]})})]})]})}}}]);