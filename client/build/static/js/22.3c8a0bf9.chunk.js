(this["webpackJsonponline-shop"]=this["webpackJsonponline-shop"]||[]).push([[22],{104:function(e,s,c){"use strict";c(0);var a=c(29),n=[{id:1,name:"Home",fullName:"Home",link:"/"},{id:2,name:"Shop",fullName:"Shop Page",link:"/shop"},{id:3,name:"Women",fullName:"Women Collections",link:"/shop/women"},{id:4,name:"Men",fullName:"Men Collections",link:"/shop/men"},{id:5,name:"Kids",fullName:"Kids Collections",link:"/shop/kids"},{id:6,name:"Accessories",fullName:"Accessories",link:"/shop/accessories"},{id:7,name:"New Arrivals",fullName:"New Arrivals",link:"/shop/new-arrivals"},{id:8,name:"Sale",fullName:"All Sale Collections",link:"/shop/sale"},{id:9,name:"Stores",fullName:"Store Locator",link:"/stores"},{id:10,name:"Checkout",fullName:"Checkout",link:"/checkout"},{id:10,name:"Favourites",fullName:"Favourites",link:"/favourites"},{id:11,name:"Account",fullName:"My Account",link:"/account"},{id:12,name:"Popular",fullName:"Best Sellers",link:"/shop/popular"}],l=c(1);s.a=function(e){var s=e.path,c=e.productName,t=e.productPath,i=s.split(", ").map((function(e){return n.filter((function(s){return s.name.toLowerCase()===e.replace("-"," ")}))[0]}));return Object(l.jsx)("div",{className:"breadcrumbs py-5",children:Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)("h2",{className:"title uppercase bold",children:c||i.slice(-1)[0].fullName}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{className:"link-group",children:Object(l.jsxs)("span",{className:"link",children:[i.map((function(e){return Object(l.jsx)(a.b,{to:e.link,children:e.name},e.id)})),t&&Object(l.jsx)(a.b,{to:t,children:c})]})})]})})}},326:function(e,s,c){"use strict";c.r(s);var a=c(0),n=c(102),l=c.n(n),t=c(108),i=c(104),r=c(38),o=c(2),d=c(97),j=c(305),m=c(1),b=function(){var e=Object(a.useState)({country:"Canada",region:""}),s=Object(d.a)(e,2),c=s[0],n=s[1],l=Object(a.useState)({name:"",cardNumber:"",mmyy:"",cvv:"",addressLine:"",postal:""}),t=Object(d.a)(l,2),i=t[0],b=t[1],u=i.name,h=i.cardNumber,p=i.mmyy,O=i.cvv,x=i.addressLine,N=i.postal,v=function(e){var s=e.target,c=s.name,a=s.value;b(Object(o.a)(Object(o.a)({},i),{},Object(r.a)({},c,a)))};return Object(m.jsxs)("div",{className:"section billing-details",children:[Object(m.jsx)("h3",{className:"bold my-5",children:"Billing Details"}),Object(m.jsxs)("div",{className:"d-flex ml-3",children:[Object(m.jsx)("h4",{className:"col-6 label",children:"Country*"}),Object(m.jsx)("h4",{className:"col-6 label",children:"Province*"})]}),Object(m.jsxs)("div",{className:"d-flex flex-wrap justify-content-around select-country",children:[Object(m.jsx)("div",{className:"col-5 option",children:Object(m.jsx)(j.a,{value:c.country,onChange:function(e){return function(e){n(Object(o.a)(Object(o.a)({},c),{},{country:e}))}(e)}})}),Object(m.jsx)("div",{className:"col-5 option",children:Object(m.jsx)(j.b,{country:c.country,value:c.region,onChange:function(e){return function(e){n(Object(o.a)(Object(o.a)({},c),{},{region:e}))}(e)}})})]}),Object(m.jsxs)("div",{className:"form p-5  my-5",children:[Object(m.jsx)("input",{className:"input",name:"name",value:u,onChange:v,placeholder:"Name on Card"}),Object(m.jsx)("input",{className:"input",name:"cardNumber",value:h,onChange:v,placeholder:"Card Number"}),Object(m.jsxs)("div",{className:"d-flex ",children:[Object(m.jsx)("input",{className:"input mr-5",name:"mmyy",value:p,onChange:v,placeholder:"MM / YY"}),Object(m.jsx)("input",{className:"input w-50",name:"cvv",value:O,onChange:v,placeholder:"CVV"})]}),Object(m.jsx)("input",{className:"input",name:"addressLine",value:x,onChange:v,placeholder:"Address Line"}),Object(m.jsx)("input",{className:"input",name:"postal",value:N,onChange:v,placeholder:"Zip / Postal Code"}),Object(m.jsxs)("div",{className:"mt-4",children:[Object(m.jsx)("input",{type:"checkbox",id:"shippingAddress",name:"shippingAddress",defaultChecked:!0,onChange:function(){return console.log("change")}}),Object(m.jsxs)("label",{htmlFor:"shippingAddress",className:"ml-4",children:["Shipping Address is the same as billing address"," "]})]}),Object(m.jsxs)("div",{className:"secure-connection m-4 d-flex justify-content-center align-items-end",children:[Object(m.jsx)("i",{className:"bi bi-shield-lock-fill icon"}),Object(m.jsx)("h5",{className:"ml-2",children:"Secure Connection"})]})]}),Object(m.jsxs)("div",{className:"test-card color",children:[Object(m.jsx)("span",{className:"",children:"*Please use the following mock credit card for testing payments*"}),Object(m.jsxs)("div",{className:"pl-5 mt-3",children:["Address: any place",Object(m.jsx)("br",{}),"Name on Card: any name",Object(m.jsx)("br",{}),"Card Number: 4242 4242 4242 4242",Object(m.jsx)("br",{}),"MM / YY: 01/23",Object(m.jsx)("br",{}),"CVV: 123",Object(m.jsx)("br",{}),"Zip: 10000"]})]})]})},u=c(18),h=c(24),p=c(98),O=c(110),x=c(12),N=function(e){var s=e.product,c=e.order,a=s.price,n=s.discount,l=s.name,t=c.size,i=c.color,r=c.quantity;return Object(m.jsxs)("div",{className:"line row",children:[Object(m.jsxs)("div",{className:"col-7",children:[Object(m.jsxs)("span",{children:[l," \xd7 ",r]}),Object(m.jsx)("br",{}),Object(m.jsxs)("span",{children:["Color: ",i,Object(m.jsx)("span",{className:"px-3",children:"-"}),"Size: ",t.toUpperCase()]})]}),Object(m.jsxs)("span",{className:"col-5 text-center",children:["$",Object(x.c)(a,n,r)]})]})},v=Object(h.b)({cartLength:O.c,cartItemOrders:O.a,cartTotal:O.d}),f=Object(u.connect)(v)((function(e){var s,c=e.cartTotal,a=e.cartItemOrders,n=Number(5.18);return s=1*c>50||1*c===0?c:(1*c+n).toFixed(2),Object(m.jsx)("div",{className:"section order-summary",children:Object(m.jsxs)("div",{className:"inner mt-5 px-5 py-3",children:[Object(m.jsx)("h3",{className:"bold my-5",children:"Order Summary"}),Object(m.jsxs)("div",{className:"line row",children:[Object(m.jsx)("span",{className:"col-7 text-center",children:"PRODUCT"}),Object(m.jsx)("span",{className:"col-5 text-center",children:"TOTAL"})]}),a.map((function(e,s){return Object(m.jsx)(N,{product:e.product,order:e.order},s)})),Object(m.jsxs)("div",{className:"line row",children:[Object(m.jsx)("span",{className:"col-7 bold",children:"Cart Subtotal"}),Object(m.jsxs)("span",{className:"col-5 text-center bold",children:["$",c]})]}),Object(m.jsxs)("div",{className:"line row",children:[Object(m.jsx)("span",{className:"col-7 bold",children:"Shipping & Handling:"}),Object(m.jsx)("span",{className:"col-5 text-center bold",children:c>50?"Free":"$ ".concat(n)})]}),Object(m.jsxs)("div",{className:"row total mb-4 mt-3",children:[Object(m.jsx)("span",{className:"col-7 bold",children:"Order Total"}),Object(m.jsxs)("span",{className:"col-5 text-center bold color",children:["$",s]})]}),Object(m.jsx)("h5",{className:"terms",children:"By completing your purchase you agree to these Terms of Service."}),Object(m.jsx)("div",{className:"text-center my-5",children:Object(m.jsx)(p.a,{styleClass:"color square mx-4",name:"Complete Payment"})})]})})}));s.default=function(){return Object(m.jsxs)("div",{className:"checkout",children:[Object(m.jsxs)(l.a,{children:[Object(m.jsx)("title",{children:"Shine | Checkout"}),Object(m.jsx)("meta",{name:"description",content:"Shine Online Shop"})]}),Object(m.jsxs)(t.a,{children:[Object(m.jsx)(i.a,{path:"home, checkout"}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"row"}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)(b,{})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)(f,{})})]})]})]})]})}}}]);