(this["webpackJsonponline-shop"]=this["webpackJsonponline-shop"]||[]).push([[16],{104:function(e,c,t){"use strict";t(0);var s=t(29),n=[{id:1,name:"Home",fullName:"Home",link:"/"},{id:2,name:"Shop",fullName:"Shop Page",link:"/shop"},{id:3,name:"Women",fullName:"Women Collections",link:"/shop/women"},{id:4,name:"Men",fullName:"Men Collections",link:"/shop/men"},{id:5,name:"Kids",fullName:"Kids Collections",link:"/shop/kids"},{id:6,name:"Accessories",fullName:"Accessories",link:"/shop/accessories"},{id:7,name:"New Arrivals",fullName:"New Arrivals",link:"/shop/new-arrivals"},{id:8,name:"Sale",fullName:"All Sale Collections",link:"/shop/sale"},{id:9,name:"Stores",fullName:"Store Locator",link:"/stores"},{id:10,name:"Checkout",fullName:"Checkout",link:"/checkout"},{id:10,name:"Favourites",fullName:"Favourites",link:"/favourites"},{id:11,name:"Account",fullName:"My Account",link:"/account"},{id:12,name:"Popular",fullName:"Best Sellers",link:"/shop/popular"}],i=t(1);c.a=function(e){var c=e.path,t=e.productName,a=e.productPath,r=c.split(", ").map((function(e){return n.filter((function(c){return c.name.toLowerCase()===e.replace("-"," ")}))[0]}));return Object(i.jsx)("div",{className:"breadcrumbs py-5",children:Object(i.jsxs)("div",{className:"wrapper",children:[Object(i.jsx)("h2",{className:"title uppercase bold",children:t||r.slice(-1)[0].fullName}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{className:"link-group",children:Object(i.jsxs)("span",{className:"link",children:[r.map((function(e){return Object(i.jsx)(s.b,{to:e.link,children:e.name},e.id)})),a&&Object(i.jsx)(s.b,{to:a,children:t})]})})]})})}},111:function(e,c,t){"use strict";var s=t(0),n=t(97),i=t(18),a=t(29),r=t(24),l=t(16),o=t(99),j=t(117),d=t(116),u=t(5),b=t(98),m=t(12),O=t(109),p=t(1),x=Object(i.connect)(null,(function(e){return{addItemToFavourite:function(c){return e(Object(o.a)(c))},addItemToCart:function(c,t){return e(Object(O.a)(c,t))}}}))((function(e){var c=e.product,t=e.addItemToFavourite,i=e.addItemToCart,r=c.name,l=c.price,o=c.discount,O=c.variation,x=c.rating,h=c.shortDescription,f=c.sku,N=Object(s.useState)(O?O[0].color:""),v=Object(n.a)(N,2),g=v[0],k=v[1],w=Object(s.useState)(),C=Object(n.a)(w,2),y=C[0],S=C[1],F=Object(s.useState)(1),P=Object(n.a)(F,2),$=P[0],L=P[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"star",children:Object(m.j)(x)}),Object(p.jsx)(a.b,{to:"/products/".concat(r.toLowerCase().replace(/ /g,"-"),".").concat(f),children:Object(p.jsx)("h3",{className:"title mt-3",children:r})}),Object(p.jsx)("div",{className:"price my-4",children:0===o?Object(p.jsxs)("span",{className:"mr-5",children:["$",l.toFixed(2)]}):Object(p.jsxs)("div",{children:[Object(p.jsxs)("span",{className:"mr-4 old-price",children:["$",l.toFixed(2)]}),Object(p.jsxs)("span",{className:"sale-price",children:["$",Object(m.c)(l,o)]})]})}),Object(p.jsx)("p",{className:"description pb-1",children:h}),Object(p.jsxs)("div",{className:"options d-flex pt-2",children:[Object(p.jsxs)("div",{className:"colorPick mr-5",children:[Object(p.jsx)("h5",{children:"Color"}),Object(p.jsx)("div",{className:"color-btn color d-flex py-3",children:Object(p.jsx)(j.a,{title:g,onSelect:function(e){k(e)},children:O.map((function(e,c){return Object(p.jsx)(d.a.Item,{eventKey:e.color,children:e.color},c)}))})})]}),Object(p.jsxs)("div",{className:"sizePick ml-4",children:[Object(p.jsx)("h5",{children:"Size"}),Object(p.jsx)("div",{className:"size-content d-flex my-4 w-100",children:O.filter((function(e){return e.color===g}))[0].size.map((function(e,c){return 0===e.stock?Object(p.jsx)("div",{className:"outOfStock mr-3 ",children:Object(p.jsx)("div",{className:"text d-flex justify-content-center align-items-center",children:e.name.toUpperCase()})},c):Object(p.jsx)("button",{className:"box sizebtn s".concat(e.name," mr-3 d-flex justify-content-center align-items-center"),onClick:function(){return function(e,c){document.querySelectorAll(".sizebtn").forEach((function(e){e.classList.remove("focus")})),document.querySelector(".box.sizebtn.s".concat(e)).classList.add("focus"),S(e)}(e.name)},children:e.name.toUpperCase()},c)}))})]})]}),Object(p.jsxs)("div",{className:"quantity pt-1 d-flex align-items-center",children:[Object(p.jsx)("h5",{className:"mr-5 my-0",children:"Quantity"}),Object(p.jsx)("div",{className:"quantity-btn",children:Object(p.jsx)("input",{className:"py-3 text-center",type:"number",pattern:"[0-9]*",min:"1",value:$,onChange:function(e){return L(Number(e.target.value))}})})]}),Object(p.jsxs)("div",{className:"py-5",children:[Object(p.jsx)(b.a,{styleClass:"color square lighter mx-4",name:"Add To Cart",onClick:function(){return function(e,t,s){e&&t&&s?(i(c,{color:e,size:t,quantity:s}),u.b.success("You've just added ".concat(s," ").concat(r," - Size: ").concat(t.toUpperCase()," & Color: ").concat(e," successfully !"),m.m),k(O[0].color),document.querySelectorAll(".sizebtn").forEach((function(e){e.classList.remove("focus")})),L(1)):u.b.error("Please choose Color & Size",m.m)}(g,y,$)}}),Object(p.jsx)(b.a,{onClick:function(){return t(c)},styleClass:"color square lighter mx-4",children:Object(p.jsx)("i",{className:"bi bi-heart"})})]})]})})),h=t(2),f=t(121),N=t.n(f),v={lazyLoad:!0,showBullets:!0,showPlayButton:!1,showFullscreenButton:!1},g=function(e){var c=e.product,t=[];return c.image.map((function(e){return t.push({original:e,thumbnail:e})})),Object(p.jsx)("div",{className:"image-gallery-wrapper",children:Object(p.jsx)(N.a,Object(h.a)(Object(h.a)({},v),{},{items:t}))})},k=function(e){var c=e.product,t=e.onClick;return Object(p.jsx)("div",{className:"product-quickview",id:"quickview",children:Object(p.jsxs)("div",{className:"inner row",children:[Object(p.jsx)("div",{className:"image",children:Object(p.jsx)(g,{product:c})}),Object(p.jsx)("div",{className:"detail",children:Object(p.jsx)(x,{product:c})}),Object(p.jsx)("div",{className:"close-btn px-4 py-3",onClick:t,children:Object(p.jsx)("i",{className:"bi bi-x-circle"})})]})})},w=t(105),C=t(113),y=document.getElementById("product_modal"),S=Object(r.b)({showProductModal:C.d}),F=Object(i.connect)(S,(function(e){return{addItemToFavourite:function(c){return e(Object(o.a)(c))},toggleProductModal:function(){return e(Object(w.d)())}}}))((function(e){var c=e.product,t=e.addItemToFavourite,i=Object(s.useState)(!1),r=Object(n.a)(i,2),o=r[0],j=r[1],d=window.screen.width<600,u=c.name,b=c.image,O=c.sku,x=c.price,h=c.discount;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"product-card-grid",children:[Object(p.jsxs)("div",{className:"image-box mb-3",children:[Object(p.jsx)(a.b,{to:"/products/".concat(u.toLowerCase().replace(/ /g,"-"),".").concat(O),children:Object(p.jsx)("img",{src:b[0],alt:u})}),c.new&&Object(p.jsx)("div",{className:"special new p-3",children:"New"}),0!==h&&Object(p.jsxs)("div",{className:"special sale p-3",children:["-",h,"%"]}),Object(p.jsxs)("div",{className:"icon-group",children:[Object(p.jsx)("div",{className:"box favourite mb-2 px-3 py-2",onClick:function(){return t(c)},children:Object(p.jsx)("i",{className:"bi bi-heart icon"})}),!0===d?Object(p.jsx)("div",{className:"box cart px-3 py-2",children:Object(p.jsx)(a.b,{to:"/products/".concat(u.toLowerCase().replace(/ /g,"-"),".").concat(O),children:Object(p.jsx)("i",{className:"bi bi-bag-plus icon"})})}):Object(p.jsx)("div",{className:"box cart px-3 py-2",onClick:function(){return j(!0)},children:Object(p.jsx)("i",{className:"bi bi-bag-plus icon"})})]})]}),Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)(a.b,{to:"/products/".concat(u.toLowerCase().replace(/ /g,"-"),".").concat(O),children:Object(p.jsx)("h3",{className:"name",children:u})}),0===h?Object(p.jsx)("div",{children:Object(p.jsxs)("span",{className:"mr-4",children:["$",x.toFixed(2)]})}):Object(p.jsxs)("div",{children:[Object(p.jsxs)("span",{className:"mr-4 old-price",children:["$",x.toFixed(2)]}),Object(p.jsxs)("span",{className:"sale-price",children:["$",Object(m.c)(x,h)]})]})]})]}),o&&!1===d?Object(l.createPortal)(Object(p.jsx)(k,{product:c,onClick:function(){return j(!1)}}),y):""]})})),P=document.getElementById("product_modal"),$=Object(i.connect)(null,(function(e){return{addItemToFavourite:function(c){return e(Object(o.a)(c))}}}))((function(e){var c=e.product,t=e.addItemToFavourite,i=Object(s.useState)(!1),r=Object(n.a)(i,2),o=r[0],j=r[1],d=c.name,u=c.image,b=c.sku,O=c.price,x=c.discount,h=c.shortDescription;return Object(p.jsxs)("div",{className:"product-card-single row",children:[Object(p.jsxs)("div",{className:"image-box col-sm-4 mb-4",children:[Object(p.jsx)(a.b,{to:"/products/".concat(d.toLowerCase().replace(/ /g,"-"),".").concat(b),children:Object(p.jsx)("img",{src:u,alt:d})}),c.new&&Object(p.jsx)("div",{className:"special new p-3",children:"New"}),0!==x&&Object(p.jsxs)("div",{className:"special sale p-3",children:["-",x,"%"]})]}),Object(p.jsxs)("div",{className:"content px-4 col-sm-8 d-flex flex-column",children:[Object(p.jsx)(a.b,{to:"/products/".concat(d.toLowerCase().replace(/ /g,"-"),".").concat(b),className:"my-3 order-md-1 order-lg-2",children:Object(p.jsx)("h4",{className:"bold",children:d})}),Object(p.jsx)("div",{className:"price mb-3 order-md-2 order-lg-1",children:0===x?Object(p.jsxs)("span",{className:"mr-4",children:["$",O.toFixed(2)]}):Object(p.jsxs)("div",{children:[Object(p.jsxs)("span",{className:"mr-4 old-price",children:["$",O.toFixed(2)]}),Object(p.jsxs)("span",{className:"sale-price",children:["$",Object(m.c)(O,x)]})]})}),Object(p.jsxs)("div",{className:"icon-group d-flex order-md-3 order-lg-4 mb-3",children:[Object(p.jsx)("i",{className:"bi bi-heart icon mr-5",onClick:function(){return t(c)}}),Object(p.jsx)("i",{className:"bi bi-bag-plus icon",onClick:function(){return j(!0)}})]}),Object(p.jsx)("p",{className:"description order-md-4 order-lg-2 mb-4",children:h})]}),o?Object(l.createPortal)(Object(p.jsx)(k,{product:c,onClick:function(){return j(!1)}}),P):""]})}));c.a=function(e){var c=e.product,t=e.singleColumn;e.related;return Object(p.jsx)("div",{className:"product-card col px-4 pb-5 mb-2",children:t?Object(p.jsx)($,{product:c}):Object(p.jsx)(F,{related:!0,product:c})})}},324:function(e,c,t){"use strict";t.r(c);var s=t(97),n=t(0),i=t(25),a=t.n(i),r=t(102),l=t.n(r),o=t(4),j=t(108),d=t(111),u=t(1),b=function(e){var c=e.handleSelectGrid;return Object(u.jsxs)("div",{className:"display-option ml-auto",children:[Object(u.jsx)("i",{className:"bi bi-layout-text-sidebar-reverse icon mr-4",onClick:function(){return c("row-cols-1")}}),Object(u.jsx)("i",{className:"bi bi-grid icon mr-4",onClick:function(){return c("row-cols-2")}}),Object(u.jsx)("i",{className:"bi bi-grid-3x3-gap-fill icon d-none d-sm-inline",onClick:function(){return c("row-cols-3")}})]})},m=function(e){var c=e.setSortFilterOption,t=e.setShowFilter;return Object(u.jsxs)("div",{className:"filter-dropdown pb-4 mb-4 d-flex justify-content-center",children:[Object(u.jsx)("div",{className:"close-btn",onClick:function(){return t(!1)},children:Object(u.jsx)("i",{className:"bi bi-x-circle"})}),Object(u.jsxs)("div",{className:"price-filter",children:[Object(u.jsx)("h4",{className:"choice bold",children:"By Price"}),Object(u.jsxs)("div",{className:"d-flex flex-column",children:[Object(u.jsx)("span",{className:"item",onClick:function(){return c("0-20")},children:"$0.00 - $20.00"}),Object(u.jsx)("span",{className:"item",onClick:function(){return c("21-50")},children:"$21.00 - $50.00"}),Object(u.jsx)("span",{className:"item",onClick:function(){return c("51-100")},children:"$51.00 - $100.00"}),Object(u.jsx)("span",{className:"item",onClick:function(){return c("101-above")},children:"Above $101.00"})]})]}),Object(u.jsxs)("div",{className:"color-filter",children:[Object(u.jsx)("h4",{className:"choice bold",children:"By Color"}),Object(u.jsxs)("div",{className:"d-flex flex-wrap",children:[Object(u.jsx)("span",{className:"item red",onClick:function(){return c("red")}}),Object(u.jsx)("span",{className:"item blue",onClick:function(){return c("blue")}}),Object(u.jsx)("span",{className:"item yellow",onClick:function(){return c("yellow")}}),Object(u.jsx)("span",{className:"item pink",onClick:function(){return c("pink")}}),Object(u.jsx)("span",{className:"item brown",onClick:function(){return c("brown")}}),Object(u.jsx)("span",{className:"item green",onClick:function(){return c("green")}}),Object(u.jsx)("span",{className:"item orange",onClick:function(){return c("orange")}}),Object(u.jsx)("span",{className:"item white",onClick:function(){return c("white")}}),Object(u.jsx)("span",{className:"item black",onClick:function(){return c("black")}}),Object(u.jsx)("span",{className:"item purple",onClick:function(){return c("purple")}})]})]})]})},O=function(e){var c=e.setSortFilterOption;return Object(u.jsxs)("div",{className:"sort-option mr-5",children:[Object(u.jsxs)("span",{className:"icon-wrapper",children:[Object(u.jsx)("i",{className:"bi bi-sort-down icon mr-2"}),"Sort"]}),Object(u.jsxs)("div",{className:"dropdown row d-flex flex-column",children:[Object(u.jsx)("div",{className:"item",onClick:function(){return c("default")},children:"Default"}),Object(u.jsx)("div",{className:"item",onClick:function(){return c("popular")},children:"Popularity"}),Object(u.jsx)("div",{className:"item",onClick:function(){return c("price-lth")},children:"Price: Low to High"}),Object(u.jsx)("div",{className:"item",onClick:function(){return c("price-htl")},children:"Price: High to Low"})]})]})},p=t(12),x=function(e){var c=e.categoryProducts,t=Object(n.useState)(c),i=Object(s.a)(t,2),a=i[0],r=i[1],l=Object(n.useState)("row-cols-2 row-cols-md-3"),o=Object(s.a)(l,2),j=o[0],x=o[1],h=Object(n.useState)(!1),f=Object(s.a)(h,2),N=f[0],v=f[1],g=Object(n.useState)("default"),k=Object(s.a)(g,2),w=k[0],C=k[1],y=Object(n.useState)(!1),S=Object(s.a)(y,2),F=S[0],P=S[1];return Object(n.useEffect)((function(){if(w){var e=Object(p.l)(w,c);r(e)}return function(){}}),[w,c]),Object(u.jsx)("div",{className:"section category-single",children:Object(u.jsxs)("div",{className:"wrapper container mt-5",children:[Object(u.jsxs)("div",{className:"row my-5",children:[Object(u.jsx)("div",{className:"col-lg-6 mb-4 result-numbers",children:a&&Object(u.jsx)(u.Fragment,{children:a.length<=1?"Showing ".concat(a.length," result"):"Showing ".concat(a.length," results")})}),Object(u.jsxs)("div",{className:"options col-lg-6 mb-4 d-flex",children:[Object(u.jsx)("div",{className:"filter-option mr-5",onClick:function(){return P(!F)},children:Object(u.jsxs)("span",{className:"icon-wrapper",children:[Object(u.jsx)("i",{className:"bi bi-funnel icon mr-2"}),"Filter"]})}),Object(u.jsx)(O,{setSortFilterOption:C}),Object(u.jsx)(b,{handleSelectGrid:function(e){x(e),v("row-cols-1"===e)}})]}),"default"!==w&&Object(u.jsxs)("div",{className:"mx-4 mb-5 d-flex justify-content-center",children:[Object(p.f)(w),Object(u.jsx)("i",{className:"bi bi-x-circle clear-filter-icon ml-4",onClick:function(){return C("default")}})]})]}),F&&Object(u.jsx)(m,{setSortFilterOption:C,setShowFilter:P}),Object(u.jsx)("div",{className:"row ".concat(j),children:a&&a.map((function(e){return Object(u.jsx)(d.a,{product:e,singleColumn:N},e.sku)}))})]})})},h=t(119),f=function(){var e=Object(n.useState)(),c=Object(s.a)(e,2),t=c[0],i=c[1],r=JSON.parse(localStorage.getItem("recentViewed")||"[]");return Object(n.useEffect)((function(){return a.a.get("".concat("https://shine-shop.herokuapp.com/","/api/v1/shops/new-arrivals/products")).then((function(e){var c=e.data.data;i(Object(p.k)(c).slice(0,4))})),function(){}}),[]),Object(u.jsx)("div",{className:"sidebar",children:Object(u.jsxs)("div",{className:"wrapper container",children:[0!==r.length&&Object(u.jsxs)("div",{className:"row mb-4",children:[Object(u.jsx)("h3",{className:"title bold px-4",children:"Recently Viewed"}),r.reverse().map((function(e){return Object(u.jsx)(h.a,{product:e},e._id)}))]}),Object(u.jsxs)("div",{className:"row mb-4",children:[Object(u.jsx)("h3",{className:"title bold px-4",children:"New Products"}),t&&t.map((function(e){return Object(u.jsx)(h.a,{product:e},e.sku)}))]})]})})},N=t(104);c.default=function(){var e=Object(o.h)().category,c=Object(n.useState)(),t=Object(s.a)(c,2),i=t[0],r=t[1];return Object(n.useEffect)((function(){return a.a.get("".concat("https://shine-shop.herokuapp.com/","/api/v1/shops/").concat(e,"/products")).then((function(e){var c=e.data.data;r(c)})).catch((function(e){return console.log(e)})),function(){}}),[e]),Object(u.jsxs)("div",{className:"shop-single",children:[Object(u.jsxs)(l.a,{children:[Object(u.jsxs)("title",{children:["Shine | ",Object(p.d)(e)]}),Object(u.jsx)("meta",{name:"description",content:"Shine Online Shop"})]}),Object(u.jsxs)(j.a,{children:[Object(u.jsx)(N.a,{path:"home, shop, ".concat(e),name:"Shop Page"}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-9",children:i&&Object(u.jsx)(x,{categoryProducts:i})}),Object(u.jsx)("div",{className:"col-sm-3",children:Object(u.jsx)(f,{})})]})})]})]})}}}]);