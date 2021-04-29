(this["webpackJsonponline-shop"]=this["webpackJsonponline-shop"]||[]).push([[15],{104:function(e,c,t){"use strict";t(0);var s=t(29),n=[{id:1,name:"Home",fullName:"Home",link:"/"},{id:2,name:"Shop",fullName:"Shop Page",link:"/shop"},{id:3,name:"Women",fullName:"Women Collections",link:"/shop/women"},{id:4,name:"Men",fullName:"Men Collections",link:"/shop/men"},{id:5,name:"Kids",fullName:"Kids Collections",link:"/shop/kids"},{id:6,name:"Accessories",fullName:"Accessories",link:"/shop/accessories"},{id:7,name:"New Arrivals",fullName:"New Arrivals",link:"/shop/new-arrivals"},{id:8,name:"Sale",fullName:"All Sale Collections",link:"/shop/sale"},{id:9,name:"Stores",fullName:"Store Locator",link:"/stores"},{id:10,name:"Checkout",fullName:"Checkout",link:"/checkout"},{id:10,name:"Favourites",fullName:"Favourites",link:"/favourites"},{id:11,name:"Account",fullName:"My Account",link:"/account"},{id:12,name:"Popular",fullName:"Best Sellers",link:"/shop/popular"}],a=t(1);c.a=function(e){var c=e.path,t=e.productName,i=e.productPath,r=c.split(", ").map((function(e){return n.filter((function(c){return c.name.toLowerCase()===e.replace("-"," ")}))[0]}));return Object(a.jsx)("div",{className:"breadcrumbs py-5",children:Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsx)("h2",{className:"title uppercase bold",children:t||r.slice(-1)[0].fullName}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{className:"link-group",children:Object(a.jsxs)("span",{className:"link",children:[r.map((function(e){return Object(a.jsx)(s.b,{to:e.link,children:e.name},e.id)})),i&&Object(a.jsx)(s.b,{to:i,children:t})]})})]})})}},111:function(e,c,t){"use strict";var s=t(0),n=t(97),a=t(18),i=t(29),r=t(24),l=t(16),o=t(99),d=t(117),j=t(116),u=t(10),m=t(98),b=t(12),h=t(109),p=t(1),x=Object(a.connect)(null,(function(e){return{addItemToFavourite:function(c){return e(Object(o.a)(c))},addItemToCart:function(c,t){return e(Object(h.a)(c,t))}}}))((function(e){var c=e.product,t=e.addItemToFavourite,a=e.addItemToCart,r=c.name,l=c.price,o=c.discount,h=c.variation,x=c.rating,O=c.shortDescription,f=c.sku,v=Object(s.useState)(h?h[0].color:""),N=Object(n.a)(v,2),g=N[0],k=N[1],w=Object(s.useState)(),C=Object(n.a)(w,2),y=C[0],P=C[1],S=Object(s.useState)(1),A=Object(n.a)(S,2),F=A[0],L=A[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"star",children:Object(b.j)(x)}),Object(p.jsx)(i.b,{to:"/products/".concat(r.toLowerCase().replace(/ /g,"-"),".").concat(f),children:Object(p.jsx)("h3",{className:"title mt-3",children:r})}),Object(p.jsx)("div",{className:"price my-4",children:0===o?Object(p.jsxs)("span",{className:"mr-5",children:["$",l.toFixed(2)]}):Object(p.jsxs)("div",{children:[Object(p.jsxs)("span",{className:"mr-4 old-price",children:["$",l.toFixed(2)]}),Object(p.jsxs)("span",{className:"sale-price",children:["$",Object(b.c)(l,o)]})]})}),Object(p.jsx)("p",{className:"description pb-1",children:O}),Object(p.jsxs)("div",{className:"options d-flex pt-2",children:[Object(p.jsxs)("div",{className:"colorPick mr-5",children:[Object(p.jsx)("h5",{children:"Color"}),Object(p.jsx)("div",{className:"color-btn color d-flex py-3",children:Object(p.jsx)(d.a,{title:g,onSelect:function(e){k(e)},children:h.map((function(e,c){return Object(p.jsx)(j.a.Item,{eventKey:e.color,children:e.color},c)}))})})]}),Object(p.jsxs)("div",{className:"sizePick ml-4",children:[Object(p.jsx)("h5",{children:"Size"}),Object(p.jsx)("div",{className:"size-content d-flex my-4 w-100",children:h.filter((function(e){return e.color===g}))[0].size.map((function(e,c){return 0===e.stock?Object(p.jsx)("div",{className:"outOfStock mr-3 ",children:Object(p.jsx)("div",{className:"text d-flex justify-content-center align-items-center",children:e.name.toUpperCase()})},c):Object(p.jsx)("button",{className:"box sizebtn s".concat(e.name," mr-3 d-flex justify-content-center align-items-center"),onClick:function(){return function(e,c){document.querySelectorAll(".sizebtn").forEach((function(e){e.classList.remove("focus")})),document.querySelector(".box.sizebtn.s".concat(e)).classList.add("focus"),P(e)}(e.name)},children:e.name.toUpperCase()},c)}))})]})]}),Object(p.jsxs)("div",{className:"quantity pt-1 d-flex align-items-center",children:[Object(p.jsx)("h5",{className:"mr-5 my-0",children:"Quantity"}),Object(p.jsx)("div",{className:"quantity-btn",children:Object(p.jsx)("input",{className:"py-3 text-center",type:"number",pattern:"[0-9]*",min:"1",value:F,onChange:function(e){return L(Number(e.target.value))}})})]}),Object(p.jsxs)("div",{className:"py-5",children:[Object(p.jsx)(m.a,{styleClass:"color square lighter mx-4",name:"Add To Cart",onClick:function(){return function(e,t,s){e&&t&&s?(a(c,{color:e,size:t,quantity:s}),u.toast.success("You've just added ".concat(s," ").concat(r," - Size: ").concat(t.toUpperCase()," & Color: ").concat(e," successfully !"),b.m),k(h[0].color),document.querySelectorAll(".sizebtn").forEach((function(e){e.classList.remove("focus")})),L(1)):u.toast.error("Please choose Color & Size",b.m)}(g,y,F)}}),Object(p.jsx)(m.a,{onClick:function(){return t(c)},styleClass:"color square lighter mx-4",children:Object(p.jsx)("i",{className:"bi bi-heart"})})]})]})})),O=t(2),f=t(121),v=t.n(f),N={lazyLoad:!0,showBullets:!0,showPlayButton:!1,showFullscreenButton:!1},g=function(e){var c=e.product,t=[];return c.image.map((function(e){return t.push({original:e,thumbnail:e})})),Object(p.jsx)("div",{className:"image-gallery-wrapper",children:Object(p.jsx)(v.a,Object(O.a)(Object(O.a)({},N),{},{items:t}))})},k=function(e){var c=e.product,t=e.onClick;return Object(p.jsx)("div",{className:"product-quickview",id:"quickview",children:Object(p.jsxs)("div",{className:"inner row",children:[Object(p.jsx)("div",{className:"image",children:Object(p.jsx)(g,{product:c})}),Object(p.jsx)("div",{className:"detail",children:Object(p.jsx)(x,{product:c})}),Object(p.jsx)("div",{className:"close-btn px-4 py-3",onClick:t,children:Object(p.jsx)("i",{className:"bi bi-x-circle"})})]})})},w=t(105),C=t(113),y=document.getElementById("product_modal"),P=Object(r.b)({showProductModal:C.d}),S=Object(a.connect)(P,(function(e){return{addItemToFavourite:function(c){return e(Object(o.a)(c))},toggleProductModal:function(){return e(Object(w.d)())}}}))((function(e){var c=e.product,t=e.addItemToFavourite,a=Object(s.useState)(!1),r=Object(n.a)(a,2),o=r[0],d=r[1],j=window.screen.width<600,u=c.name,m=c.image,h=c.sku,x=c.price,O=c.discount;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"product-card-grid",children:[Object(p.jsxs)("div",{className:"image-box mb-3",children:[Object(p.jsx)(i.b,{to:"/products/".concat(u.toLowerCase().replace(/ /g,"-"),".").concat(h),children:Object(p.jsx)("img",{src:m[0],alt:u})}),c.new&&Object(p.jsx)("div",{className:"special new p-3",children:"New"}),0!==O&&Object(p.jsxs)("div",{className:"special sale p-3",children:["-",O,"%"]}),Object(p.jsxs)("div",{className:"icon-group",children:[Object(p.jsx)("div",{className:"box favourite mb-2 px-3 py-2",onClick:function(){return t(c)},children:Object(p.jsx)("i",{className:"bi bi-heart icon"})}),!0===j?Object(p.jsx)("div",{className:"box cart px-3 py-2",children:Object(p.jsx)(i.b,{to:"/products/".concat(u.toLowerCase().replace(/ /g,"-"),".").concat(h),children:Object(p.jsx)("i",{className:"bi bi-bag-plus icon"})})}):Object(p.jsx)("div",{className:"box cart px-3 py-2",onClick:function(){return d(!0)},children:Object(p.jsx)("i",{className:"bi bi-bag-plus icon"})})]})]}),Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)(i.b,{to:"/products/".concat(u.toLowerCase().replace(/ /g,"-"),".").concat(h),children:Object(p.jsx)("h3",{className:"name",children:u})}),0===O?Object(p.jsx)("div",{children:Object(p.jsxs)("span",{className:"mr-4",children:["$",x.toFixed(2)]})}):Object(p.jsxs)("div",{children:[Object(p.jsxs)("span",{className:"mr-4 old-price",children:["$",x.toFixed(2)]}),Object(p.jsxs)("span",{className:"sale-price",children:["$",Object(b.c)(x,O)]})]})]})]}),o&&!1===j?Object(l.createPortal)(Object(p.jsx)(k,{product:c,onClick:function(){return d(!1)}}),y):""]})})),A=document.getElementById("product_modal"),F=Object(a.connect)(null,(function(e){return{addItemToFavourite:function(c){return e(Object(o.a)(c))}}}))((function(e){var c=e.product,t=e.addItemToFavourite,a=Object(s.useState)(!1),r=Object(n.a)(a,2),o=r[0],d=r[1],j=c.name,u=c.image,m=c.sku,h=c.price,x=c.discount,O=c.shortDescription;return Object(p.jsxs)("div",{className:"product-card-single row",children:[Object(p.jsxs)("div",{className:"image-box col-sm-4 mb-4",children:[Object(p.jsx)(i.b,{to:"/products/".concat(j.toLowerCase().replace(/ /g,"-"),".").concat(m),children:Object(p.jsx)("img",{src:u,alt:j})}),c.new&&Object(p.jsx)("div",{className:"special new p-3",children:"New"}),0!==x&&Object(p.jsxs)("div",{className:"special sale p-3",children:["-",x,"%"]})]}),Object(p.jsxs)("div",{className:"content px-4 col-sm-8 d-flex flex-column",children:[Object(p.jsx)(i.b,{to:"/products/".concat(j.toLowerCase().replace(/ /g,"-"),".").concat(m),className:"my-3 order-md-1 order-lg-2",children:Object(p.jsx)("h4",{className:"bold",children:j})}),Object(p.jsx)("div",{className:"price mb-3 order-md-2 order-lg-1",children:0===x?Object(p.jsxs)("span",{className:"mr-4",children:["$",h.toFixed(2)]}):Object(p.jsxs)("div",{children:[Object(p.jsxs)("span",{className:"mr-4 old-price",children:["$",h.toFixed(2)]}),Object(p.jsxs)("span",{className:"sale-price",children:["$",Object(b.c)(h,x)]})]})}),Object(p.jsxs)("div",{className:"icon-group d-flex order-md-3 order-lg-4 mb-3",children:[Object(p.jsx)("i",{className:"bi bi-heart icon mr-5",onClick:function(){return t(c)}}),Object(p.jsx)("i",{className:"bi bi-bag-plus icon",onClick:function(){return d(!0)}})]}),Object(p.jsx)("p",{className:"description order-md-4 order-lg-2 mb-4",children:O})]}),o?Object(l.createPortal)(Object(p.jsx)(k,{product:c,onClick:function(){return d(!1)}}),A):""]})}));c.a=function(e){var c=e.product,t=e.singleColumn;e.related;return Object(p.jsx)("div",{className:"product-card col px-4 pb-5 mb-2",children:t?Object(p.jsx)(F,{product:c}):Object(p.jsx)(S,{related:!0,product:c})})}},140:function(e,c,t){"use strict";var s=t(0),n=t(158),a=t.n(n),i=t(111),r=t(1),l={container:".my-slider",lazyload:!0,mouseDrag:!0,loop:!0,items:1,gutter:10,controlsText:["<",">"],arrowKeys:!0,nav:!0,navPosition:"bottom",navContainer:!1,navAsThumbnails:!0,responsive:{350:{items:2,controls:!0,edgePadding:10},700:{items:4,edgePadding:10}}};c.a=function(e){var c=e.products;return Object(s.useEffect)((function(){return document.querySelectorAll('button[data-controls="next"]').forEach((function(e){e.innerHTML='<i class="bi bi-chevron-right icon" />'})),document.querySelectorAll('button[data-controls="prev"]').forEach((function(e){e.innerHTML='<i class="bi bi-chevron-left icon" />'})),function(){}}),[]),Object(r.jsx)("div",{className:"product-slider",children:Object(r.jsx)(a.a,{settings:l,className:"row mx-1 my-2",children:c.map((function(e){return Object(r.jsx)(i.a,{product:e},e.sku)}))})})}},328:function(e,c,t){"use strict";t.r(c);var s=t(0),n=t(102),a=t.n(n),i=t(18),r=t(24),l=t(108),o=t(29),d=t(140),j=t(1),u=function(e){var c=e.data,t=e.title,s=e.link;return Object(j.jsx)("div",{className:"section shop-preview",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"section-title d-flex align-items-baseline pb-4 mb-4",children:[Object(j.jsx)("h2",{className:"ml-5",children:t}),Object(j.jsxs)(o.b,{to:s,className:"text-link ml-auto mr-5",children:["View all ",Object(j.jsx)("i",{className:"bi bi-arrow-right"})]})]}),Object(j.jsx)("div",{className:"row",children:c&&Object(j.jsx)(d.a,{products:c})})]})})},m=t(104),b=t(128),h=t(122),p=Object(r.b)({allProducts:h.e,womenProducts:h.g,menProducts:h.c,kidsProducts:h.b,accessoriesProducts:h.a,newArrivalsProducts:h.d,saleProducts:h.f});c.default=Object(i.connect)(p,(function(e){return{fetchProductsStartAsync:function(){return e(Object(b.a)())}}}))((function(e){var c=e.fetchProductsStartAsync,t=e.allProducts,n=e.womenProducts,i=e.menProducts,r=e.kidsProducts,o=e.accessoriesProducts,d=e.newArrivalsProducts,b=e.saleProducts;return Object(s.useEffect)((function(){c()}),[c]),Object(j.jsxs)("div",{className:"shop",children:[Object(j.jsxs)(a.a,{children:[Object(j.jsx)("title",{children:"Shine | Shop All Collections "}),Object(j.jsx)("meta",{name:"description",content:"Shine Online Shop"})]}),Object(j.jsxs)(l.a,{children:[Object(j.jsx)(m.a,{path:"home, shop"}),t&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{title:"Women Collections",link:"/shop/women",data:n}),Object(j.jsx)(u,{title:"Men Collections",link:"/shop/men",data:i}),Object(j.jsx)(u,{title:"Kids Collections",link:"/shop/kids",data:r}),Object(j.jsx)(u,{title:"Shoes & Accessories",link:"/shop/accessories",data:o}),Object(j.jsx)(u,{title:"New Arrivals",link:"/shop/new-arrivals",data:d}),Object(j.jsx)(u,{title:"All Sale Products",link:"/shop/sale",data:b})]})]})]})}))}}]);
//# sourceMappingURL=15.51bff748.chunk.js.map