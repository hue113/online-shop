(this["webpackJsonponline-shop"]=this["webpackJsonponline-shop"]||[]).push([[20],{111:function(e,c,t){"use strict";var s=t(0),a=t(97),n=t(18),r=t(29),l=t(24),i=t(16),o=t(99),d=t(117),j=t(116),m=t(5),b=t(98),h=t(12),u=t(109),p=t(1),O=Object(n.connect)(null,(function(e){return{addItemToFavourite:function(c){return e(Object(o.a)(c))},addItemToCart:function(c,t){return e(Object(u.a)(c,t))}}}))((function(e){var c=e.product,t=e.addItemToFavourite,n=e.addItemToCart,l=c.name,i=c.price,o=c.discount,u=c.variation,O=c.rating,x=c.shortDescription,v=c.sku,f=Object(s.useState)(u?u[0].color:""),g=Object(a.a)(f,2),N=g[0],y=g[1],w=Object(s.useState)(),S=Object(a.a)(w,2),C=S[0],E=S[1],k=Object(s.useState)(1),z=Object(a.a)(k,2),I=z[0],M=z[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"star",children:Object(h.j)(O)}),Object(p.jsx)(r.b,{to:"/products/".concat(l.toLowerCase().replace(/ /g,"-"),".").concat(v),children:Object(p.jsx)("h3",{className:"title mt-3",children:l})}),Object(p.jsx)("div",{className:"price my-4",children:0===o?Object(p.jsxs)("span",{className:"mr-5",children:["$",i.toFixed(2)]}):Object(p.jsxs)("div",{children:[Object(p.jsxs)("span",{className:"mr-4 old-price",children:["$",i.toFixed(2)]}),Object(p.jsxs)("span",{className:"sale-price",children:["$",Object(h.c)(i,o)]})]})}),Object(p.jsx)("p",{className:"description pb-1",children:x}),Object(p.jsxs)("div",{className:"options d-flex pt-2",children:[Object(p.jsxs)("div",{className:"colorPick mr-5",children:[Object(p.jsx)("h5",{children:"Color"}),Object(p.jsx)("div",{className:"color-btn color d-flex py-3",children:Object(p.jsx)(d.a,{title:N,onSelect:function(e){y(e)},children:u.map((function(e,c){return Object(p.jsx)(j.a.Item,{eventKey:e.color,children:e.color},c)}))})})]}),Object(p.jsxs)("div",{className:"sizePick ml-4",children:[Object(p.jsx)("h5",{children:"Size"}),Object(p.jsx)("div",{className:"size-content d-flex my-4 w-100",children:u.filter((function(e){return e.color===N}))[0].size.map((function(e,c){return 0===e.stock?Object(p.jsx)("div",{className:"outOfStock mr-3 ",children:Object(p.jsx)("div",{className:"text d-flex justify-content-center align-items-center",children:e.name.toUpperCase()})},c):Object(p.jsx)("button",{className:"box sizebtn s".concat(e.name," mr-3 d-flex justify-content-center align-items-center"),onClick:function(){return function(e,c){document.querySelectorAll(".sizebtn").forEach((function(e){e.classList.remove("focus")})),document.querySelector(".box.sizebtn.s".concat(e)).classList.add("focus"),E(e)}(e.name)},children:e.name.toUpperCase()},c)}))})]})]}),Object(p.jsxs)("div",{className:"quantity pt-1 d-flex align-items-center",children:[Object(p.jsx)("h5",{className:"mr-5 my-0",children:"Quantity"}),Object(p.jsx)("div",{className:"quantity-btn",children:Object(p.jsx)("input",{className:"py-3 text-center",type:"number",pattern:"[0-9]*",min:"1",value:I,onChange:function(e){return M(Number(e.target.value))}})})]}),Object(p.jsxs)("div",{className:"py-5",children:[Object(p.jsx)(b.a,{styleClass:"color square lighter mx-4",name:"Add To Cart",onClick:function(){return function(e,t,s){e&&t&&s?(n(c,{color:e,size:t,quantity:s}),m.b.success("You've just added ".concat(s," ").concat(l," - Size: ").concat(t.toUpperCase()," & Color: ").concat(e," successfully !"),h.m),y(u[0].color),document.querySelectorAll(".sizebtn").forEach((function(e){e.classList.remove("focus")})),M(1)):m.b.error("Please choose Color & Size",h.m)}(N,C,I)}}),Object(p.jsx)(b.a,{onClick:function(){return t(c)},styleClass:"color square lighter mx-4",children:Object(p.jsx)("i",{className:"bi bi-heart"})})]})]})})),x=t(2),v=t(121),f=t.n(v),g={lazyLoad:!0,showBullets:!0,showPlayButton:!1,showFullscreenButton:!1},N=function(e){var c=e.product,t=[];return c.image.map((function(e){return t.push({original:e,thumbnail:e})})),Object(p.jsx)("div",{className:"image-gallery-wrapper",children:Object(p.jsx)(f.a,Object(x.a)(Object(x.a)({},g),{},{items:t}))})},y=function(e){var c=e.product,t=e.onClick;return Object(p.jsx)("div",{className:"product-quickview",id:"quickview",children:Object(p.jsxs)("div",{className:"inner row",children:[Object(p.jsx)("div",{className:"image",children:Object(p.jsx)(N,{product:c})}),Object(p.jsx)("div",{className:"detail",children:Object(p.jsx)(O,{product:c})}),Object(p.jsx)("div",{className:"close-btn px-4 py-3",onClick:t,children:Object(p.jsx)("i",{className:"bi bi-x-circle"})})]})})},w=t(105),S=t(113),C=document.getElementById("product_modal"),E=Object(l.b)({showProductModal:S.d}),k=Object(n.connect)(E,(function(e){return{addItemToFavourite:function(c){return e(Object(o.a)(c))},toggleProductModal:function(){return e(Object(w.d)())}}}))((function(e){var c=e.product,t=e.addItemToFavourite,n=Object(s.useState)(!1),l=Object(a.a)(n,2),o=l[0],d=l[1],j=window.screen.width<600,m=c.name,b=c.image,u=c.sku,O=c.price,x=c.discount;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"product-card-grid",children:[Object(p.jsxs)("div",{className:"image-box mb-3",children:[Object(p.jsx)(r.b,{to:"/products/".concat(m.toLowerCase().replace(/ /g,"-"),".").concat(u),children:Object(p.jsx)("img",{src:b[0],alt:m})}),c.new&&Object(p.jsx)("div",{className:"special new p-3",children:"New"}),0!==x&&Object(p.jsxs)("div",{className:"special sale p-3",children:["-",x,"%"]}),Object(p.jsxs)("div",{className:"icon-group",children:[Object(p.jsx)("div",{className:"box favourite mb-2 px-3 py-2",onClick:function(){return t(c)},children:Object(p.jsx)("i",{className:"bi bi-heart icon"})}),!0===j?Object(p.jsx)("div",{className:"box cart px-3 py-2",children:Object(p.jsx)(r.b,{to:"/products/".concat(m.toLowerCase().replace(/ /g,"-"),".").concat(u),children:Object(p.jsx)("i",{className:"bi bi-bag-plus icon"})})}):Object(p.jsx)("div",{className:"box cart px-3 py-2",onClick:function(){return d(!0)},children:Object(p.jsx)("i",{className:"bi bi-bag-plus icon"})})]})]}),Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)(r.b,{to:"/products/".concat(m.toLowerCase().replace(/ /g,"-"),".").concat(u),children:Object(p.jsx)("h3",{className:"name",children:m})}),0===x?Object(p.jsx)("div",{children:Object(p.jsxs)("span",{className:"mr-4",children:["$",O.toFixed(2)]})}):Object(p.jsxs)("div",{children:[Object(p.jsxs)("span",{className:"mr-4 old-price",children:["$",O.toFixed(2)]}),Object(p.jsxs)("span",{className:"sale-price",children:["$",Object(h.c)(O,x)]})]})]})]}),o&&!1===j?Object(i.createPortal)(Object(p.jsx)(y,{product:c,onClick:function(){return d(!1)}}),C):""]})})),z=document.getElementById("product_modal"),I=Object(n.connect)(null,(function(e){return{addItemToFavourite:function(c){return e(Object(o.a)(c))}}}))((function(e){var c=e.product,t=e.addItemToFavourite,n=Object(s.useState)(!1),l=Object(a.a)(n,2),o=l[0],d=l[1],j=c.name,m=c.image,b=c.sku,u=c.price,O=c.discount,x=c.shortDescription;return Object(p.jsxs)("div",{className:"product-card-single row",children:[Object(p.jsxs)("div",{className:"image-box col-sm-4 mb-4",children:[Object(p.jsx)(r.b,{to:"/products/".concat(j.toLowerCase().replace(/ /g,"-"),".").concat(b),children:Object(p.jsx)("img",{src:m,alt:j})}),c.new&&Object(p.jsx)("div",{className:"special new p-3",children:"New"}),0!==O&&Object(p.jsxs)("div",{className:"special sale p-3",children:["-",O,"%"]})]}),Object(p.jsxs)("div",{className:"content px-4 col-sm-8 d-flex flex-column",children:[Object(p.jsx)(r.b,{to:"/products/".concat(j.toLowerCase().replace(/ /g,"-"),".").concat(b),className:"my-3 order-md-1 order-lg-2",children:Object(p.jsx)("h4",{className:"bold",children:j})}),Object(p.jsx)("div",{className:"price mb-3 order-md-2 order-lg-1",children:0===O?Object(p.jsxs)("span",{className:"mr-4",children:["$",u.toFixed(2)]}):Object(p.jsxs)("div",{children:[Object(p.jsxs)("span",{className:"mr-4 old-price",children:["$",u.toFixed(2)]}),Object(p.jsxs)("span",{className:"sale-price",children:["$",Object(h.c)(u,O)]})]})}),Object(p.jsxs)("div",{className:"icon-group d-flex order-md-3 order-lg-4 mb-3",children:[Object(p.jsx)("i",{className:"bi bi-heart icon mr-5",onClick:function(){return t(c)}}),Object(p.jsx)("i",{className:"bi bi-bag-plus icon",onClick:function(){return d(!0)}})]}),Object(p.jsx)("p",{className:"description order-md-4 order-lg-2 mb-4",children:x})]}),o?Object(i.createPortal)(Object(p.jsx)(y,{product:c,onClick:function(){return d(!1)}}),z):""]})}));c.a=function(e){var c=e.product,t=e.singleColumn;e.related;return Object(p.jsx)("div",{className:"product-card col px-4 pb-5 mb-2",children:t?Object(p.jsx)(I,{product:c}):Object(p.jsx)(k,{related:!0,product:c})})}},139:function(e,c,t){"use strict";t.d(c,"a",(function(){return s}));var s=[{id:1,name:"Shine Toronto",address1:"50 Toronto Street",address2:"Toronto, ON",postalCode:"M3F 1Z3",coordinates:[-79.2576797,43.7728978]},{id:2,name:"Shine Winnipeg",address1:"50 Winnipeg Centre",address2:"Winnipeg, MB",postalCode:"R3I 2Q6",coordinates:[-97.1732823,49.8562634]},{id:3,name:"Shine Regina",address1:"50 Regina Street",address2:"Regina, SK",postalCode:"S4A 1G7",coordinates:[-104.7054489,50.4586825]},{id:4,name:"Shine Marie",address1:"50 Marie Street",address2:"Sault Ste. Marie, ON",postalCode:"P6N 6W4",coordinates:[-84.5638875,46.5318913]},{id:5,name:"Shine Ottawa",address1:"50 Ottawa Street",address2:"Ottawa, ON",postalCode:"K1V 7I8",coordinates:[-75.5942867,45.4473421]},{id:6,name:"Shine Calgary",address1:"50 Calgary Street",address2:"Calgary, AB",postalCode:"T2U 1D9",coordinates:[-114.3680166,51.0277202]},{id:7,name:"Shine Montreal",address1:"50 Montreal Street",address2:"Montreal, QC",postalCode:"H4J 1C5",coordinates:[-73.680954,45.8138783]},{id:8,name:"Shine Dartmouth",address1:"50 Dartmouth Street",address2:"Dartmouth, NS",postalCode:"B2X 2L1",coordinates:[-62.5281757,44.917696]}]},322:function(e,c,t){"use strict";t.r(c);var s,a,n,r,l,i,o,d,j,m=t(0),b=t(102),h=t.n(b),u=t(29),p=t(1),O=function(e){var c=e.category,t=e.styleClass,s=c.title,a=c.startPrice,n=c.link,r=c.image;return Object(p.jsxs)("div",{className:"category-card col mb-4",children:[Object(p.jsx)("div",{className:"image-box",children:Object(p.jsx)("img",{src:r,alt:"",className:"".concat(t," background-image}")})}),Object(p.jsx)(u.b,{to:n,children:Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("h3",{className:"title bold mb-2",children:s}),Object(p.jsxs)("h4",{className:"price",children:["Starting at ",Object(p.jsxs)("span",{children:["$",a.toFixed(2)]})]}),Object(p.jsx)("i",{className:"bi bi-arrow-right-circle"})]})})]})},x=t(18),v=t(24),f=Object(v.a)((function(e){return e.category}),(function(e){return e.categories})),g=t(27),N=t(25),y=t.n(N),w=function(){return function(e){return y.a.get("".concat("https://shine-shop-demo.herokuapp.com","/api/v1/shops")).then((function(c){var t=c.data.data;e(function(e){return{type:g.a.FETCH_CATEGORIES_SUCCESS,payload:e}}(t))})).catch((function(c){return e((t=c.message,{type:g.a.FETCH_CATEGORIES_FAILURE,payload:t}));var t}))}},S=Object(v.b)({categories:f}),C=Object(x.connect)(S,(function(e){return{fetchCategories:function(){return e(w())}}}))((function(e){var c=e.categories,t=e.fetchCategories;return Object(m.useEffect)((function(){return t(),function(){}}),[t]),Object(p.jsx)("div",{className:"section category",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"row row-cols-1 row-cols-md-3 mb-4",children:c&&c.slice(0,3).map((function(e,c){return Object(p.jsx)(O,{category:e,styleClass:"small"},c)}))}),Object(p.jsx)("div",{className:"row row-cols-1 row-cols-md-2 mb-2",children:c&&c.slice(3,5).map((function(e,c){return Object(p.jsx)(O,{category:e,styleClass:"large"},c)}))})]})})})),E=t(97),k=t(111),z=function(){var e=Object(m.useState)(),c=Object(E.a)(e,2),t=c[0],s=c[1];return Object(m.useEffect)((function(){return y.a.get("".concat("https://shine-shop-demo.herokuapp.com","/api/v1/shops/popular/products")).then((function(e){var c=e.data.data;s(c)})),function(){}}),[]),Object(p.jsx)("div",{className:"section featured-products",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"section-title py-4 mb-5",children:[Object(p.jsx)(u.b,{to:"/shop/popular",className:"title",children:Object(p.jsx)("h2",{className:"title",children:"Popular Products"})}),Object(p.jsx)("p",{className:"text-desc",children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form"})]}),Object(p.jsx)("div",{className:"row row-cols-2 row-cols-md-4",children:t&&t.map((function(e){return Object(p.jsx)(k.a,{product:e},e.sku)}))})]})})},I=t(108);function M(){return(M=Object.assign||function(e){for(var c=1;c<arguments.length;c++){var t=arguments[c];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}function F(e,c){if(null==e)return{};var t,s,a=function(e,c){if(null==e)return{};var t,s,a={},n=Object.keys(e);for(s=0;s<n.length;s++)t=n[s],c.indexOf(t)>=0||(a[t]=e[t]);return a}(e,c);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)t=n[s],c.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function P(e,c){var t=e.title,b=e.titleId,h=F(e,["title","titleId"]);return m.createElement("svg",M({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:c,"aria-labelledby":b},h),t?m.createElement("title",{id:b},t):null,s||(s=m.createElement("g",null,m.createElement("g",null,m.createElement("path",{d:"M476.158,286.938l-13.259-53.035c3.625-0.77,6.345-3.986,6.345-7.839v-8.551c0-18.566-15.105-33.67-33.67-33.67h-60.392 v-17.637c0-9.136-7.432-16.568-16.568-16.568H246.32l68.24-27.296c4.111-1.644,6.11-6.31,4.466-10.421 c-1.644-4.11-6.307-6.111-10.421-4.466l-55.874,22.349c17.026-10.924,33.871-22.947,40.284-31.355 c12.485-16.369,9.323-39.843-7.046-52.328c-16.369-12.486-39.843-9.323-52.328,7.046c-9.122,11.962-21.158,45.573-28.948,69.258 c-7.79-23.683-19.826-57.296-28.948-69.258c-12.484-16.369-35.959-19.53-52.328-7.046c-16.369,12.484-19.53,35.958-7.046,52.328 c6.413,8.409,23.257,20.431,40.284,31.355l-55.874-22.349c-4.113-1.647-8.777,0.355-10.421,4.466 c-1.645,4.111,0.355,8.777,4.466,10.421l68.24,27.296H50.772c-9.136,0-16.568,7.432-16.568,16.568v145.37 c0,4.427,3.589,8.017,8.017,8.017c4.427,0,8.017-3.589,8.017-8.017v-145.37c0-0.295,0.239-0.534,0.534-0.534h307.841 c0.295,0,0.534,0.239,0.534,0.534v145.372c0,4.427,3.589,8.017,8.017,8.017c4.427,0,8.017-3.589,8.017-8.017v-9.088h94.566 c0.009,0,0.016,0.002,0.025,0.002s0.017-0.001,0.026-0.001c11.636,0.009,21.516,7.647,24.908,18.171h-24.928 c-4.427,0-8.017,3.589-8.017,8.017v17.102c0,13.851,11.268,25.119,25.119,25.119h9.086v35.273h-20.962 c-6.886-19.882-25.787-34.205-47.982-34.205s-41.097,14.322-47.982,34.205h-3.86V345.78c0-4.427-3.589-8.017-8.017-8.017 c-4.427,0-8.017,3.589-8.017,8.017v60.392H192.817c-6.886-19.882-25.787-34.205-47.982-34.205s-41.097,14.322-47.982,34.205 H50.772c-0.295,0-0.534-0.239-0.534-0.534v-17.637h34.739c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017H8.017 c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h26.188v17.637c0,9.136,7.432,16.568,16.568,16.568h43.304 c-0.002,0.178-0.014,0.355-0.014,0.534c0,27.995,22.777,50.772,50.772,50.772s50.772-22.777,50.772-50.772 c0-0.18-0.012-0.356-0.014-0.534h180.67c-0.002,0.178-0.014,0.355-0.014,0.534c0,27.995,22.777,50.772,50.772,50.772 c27.995,0,50.772-22.777,50.772-50.772c0-0.18-0.012-0.356-0.014-0.534h26.203c4.427,0,8.017-3.589,8.017-8.017v-85.511 C512,307.564,496.423,290.022,476.158,286.938z M172.9,121.059c-31.623-19.651-41.003-28.692-43.78-32.334 c-7.123-9.339-5.319-22.732,4.021-29.855c3.85-2.936,8.388-4.355,12.893-4.355c6.422,0,12.776,2.886,16.963,8.376 c7.755,10.168,19.9,44.391,27.918,69.052C185.504,128.757,179.284,125.028,172.9,121.059z M218.473,131.942 c8.018-24.66,20.163-58.882,27.917-69.052c7.123-9.339,20.516-11.142,29.855-4.02c9.34,7.123,11.143,20.516,4.021,29.855 c-2.777,3.641-12.157,12.683-43.778,32.333C230.105,125.026,223.885,128.756,218.473,131.942z M375.182,199.875h60.392 c9.725,0,17.637,7.912,17.637,17.637v0.534h-78.029V199.875z M375.182,286.456V234.08h71.235l13.094,52.376H375.182z  M144.835,457.479c-19.155,0-34.739-15.584-34.739-34.739s15.584-34.739,34.739-34.739c19.155,0,34.739,15.584,34.739,34.739 S163.99,457.479,144.835,457.479z M427.023,457.479c-19.155,0-34.739-15.584-34.739-34.739s15.584-34.739,34.739-34.739 c19.155,0,34.739,15.584,34.739,34.739S446.178,457.479,427.023,457.479z M495.967,354.865h-9.086 c-5.01,0-9.086-4.076-9.086-9.086v-9.086h18.171V354.865z"})))),a||(a=m.createElement("g",null,m.createElement("g",null,m.createElement("path",{d:"M144.835,406.172c-9.136,0-16.568,7.432-16.568,16.568s7.432,16.568,16.568,16.568c9.136,0,16.568-7.432,16.568-16.568 S153.971,406.172,144.835,406.172z"})))),n||(n=m.createElement("g",null,m.createElement("g",null,m.createElement("path",{d:"M427.023,406.172c-9.136,0-16.568,7.432-16.568,16.568s7.432,16.568,16.568,16.568c9.136,0,16.568-7.432,16.568-16.568 S436.159,406.172,427.023,406.172z"})))),r||(r=m.createElement("g",null,m.createElement("g",null,m.createElement("path",{d:"M332.96,371.967H213.244c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017H332.96 c4.427,0,8.017-3.589,8.017-8.017S337.388,371.967,332.96,371.967z"})))),l||(l=m.createElement("g",null,m.createElement("g",null,m.createElement("path",{d:"M127.733,337.763H25.119c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h102.614 c4.427,0,8.017-3.589,8.017-8.017S132.16,337.763,127.733,337.763z"})))),i||(i=m.createElement("g",null,m.createElement("g",null,m.createElement("path",{d:"M127.733,218.046H93.528c-4.427,0-8.017,3.589-8.017,8.017v68.409c0,4.427,3.589,8.017,8.017,8.017 s8.017-3.589,8.017-8.017v-26.188h17.637c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017h-17.637V234.08h26.188 c4.427,0,8.017-3.589,8.017-8.017C135.749,221.636,132.16,218.046,127.733,218.046z"})))),o||(o=m.createElement("g",null,m.createElement("g",null,m.createElement("path",{d:"M190.822,272.043c8.023-5.255,13.337-14.317,13.337-24.602c0-16.209-13.186-29.395-29.395-29.395h-21.378 c-4.427,0-8.017,3.589-8.017,8.017v68.409c0,4.427,3.589,8.017,8.017,8.017s8.017-3.589,8.017-8.017v-17.637h13.346l14.722,22.083 c1.545,2.317,4.086,3.571,6.677,3.571c1.529,0,3.073-0.436,4.439-1.348c3.685-2.455,4.68-7.433,2.223-11.116L190.822,272.043z  M174.764,260.802h-13.361V234.08h13.361c7.368,0,13.361,5.993,13.361,13.361C188.125,254.809,182.132,260.802,174.764,260.802z"})))),d||(d=m.createElement("g",null,m.createElement("g",null,m.createElement("path",{d:"M256,286.456h-26.188v-18.198c0.177,0.012,0.354,0.027,0.534,0.027h17.102c4.427,0,8.017-3.589,8.017-8.017 s-3.589-8.017-8.017-8.017h-17.102c-0.181,0-0.357,0.015-0.534,0.027V234.08H256c4.427,0,8.017-3.589,8.017-8.017 c0-4.427-3.589-8.017-8.017-8.017h-34.205c-4.427,0-8.017,3.589-8.017,8.017v68.409c0,4.427,3.589,8.017,8.017,8.017H256 c4.427,0,8.017-3.589,8.017-8.017S260.427,286.456,256,286.456z"})))),j||(j=m.createElement("g",null,m.createElement("g",null,m.createElement("path",{d:"M315.858,286.456H289.67v-18.171h9.086c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017h-9.086V234.08h26.188 c4.427,0,8.017-3.589,8.017-8.017c0-4.427-3.589-8.017-8.017-8.017h-34.205c-4.427,0-8.017,3.589-8.017,8.017v68.409 c0,4.427,3.589,8.017,8.017,8.017h34.205c4.427,0,8.017-3.589,8.017-8.017S320.285,286.456,315.858,286.456z"})))))}var T,L=m.forwardRef(P);t.p;function H(){return(H=Object.assign||function(e){for(var c=1;c<arguments.length;c++){var t=arguments[c];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}function B(e,c){if(null==e)return{};var t,s,a=function(e,c){if(null==e)return{};var t,s,a={},n=Object.keys(e);for(s=0;s<n.length;s++)t=n[s],c.indexOf(t)>=0||(a[t]=e[t]);return a}(e,c);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)t=n[s],c.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function V(e,c){var t=e.title,s=e.titleId,a=B(e,["title","titleId"]);return m.createElement("svg",H({id:"Capa_1",enableBackground:"new 0 0 512 512",height:512,viewBox:"0 0 512 512",width:512,xmlns:"http://www.w3.org/2000/svg",ref:c,"aria-labelledby":s},a),t?m.createElement("title",{id:s},t):null,T||(T=m.createElement("g",null,m.createElement("path",{d:"m488.505 78.371-89.102-37.121c-9.774-4.071-20.984-4.07-30.757.001l-42.78 17.819c-3.824 1.594-5.633 5.984-4.04 9.808s5.983 5.634 9.808 4.04l42.78-17.82c6.105-2.544 13.112-2.545 19.222-.001l89.097 37.119c8.666 3.615 14.267 11.744 14.267 20.707v320.75c0 12.473-10.713 22.62-23.88 22.62h-12.16c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h12.16c21.438 0 38.88-16.876 38.88-37.62v-320.75c0-15.036-9.222-28.598-23.495-34.552z"}),m.createElement("path",{d:"m428.27 456.294h-126.02c5.189-5.898 8.03-13.381 8.03-21.3 0-7.903-2.861-15.146-7.595-20.762 2.985-1.523 5.749-3.516 8.189-5.955 6.092-6.093 9.446-14.194 9.446-22.813 0-8.216-3.092-15.72-8.167-21.422 2.513-1.423 4.853-3.187 6.949-5.285 6.092-6.091 9.447-14.192 9.447-22.813 0-8.192-3.073-15.677-8.119-21.374 2.555-1.434 4.935-3.22 7.069-5.349 6.088-6.102 9.44-14.201 9.44-22.808 0-17.794-14.472-32.27-32.261-32.27h-33.63v-141.22c0-8.964 5.601-17.093 14.263-20.706l13.641-5.68c3.824-1.592 5.633-5.982 4.041-9.807-1.593-3.824-5.983-5.636-9.807-4.041l-13.646 5.682c-14.271 5.953-23.492 19.516-23.492 34.552v141.221h-31.337c10.435-32.976 9.547-67.391-2.631-107.334-1.85-6.049-5.53-11.23-10.645-14.983-5.085-3.73-11.111-5.703-17.428-5.703-8.138 0-15.705 3.25-21.309 9.151-5.601 5.9-8.453 13.624-8.031 21.748 2.345 45.097-18.457 60.619-47.248 82.104-9.479 7.073-19.839 14.809-30.021 24.296v-9.83c0-4.143-3.357-7.5-7.5-7.5h-72.398c-4.143 0-7.5 3.357-7.5 7.5v212.71c0 4.143 3.357 7.5 7.5 7.5h72.4c4.143 0 7.5-3.357 7.5-7.5v-18.868c14.245 1.355 24.649 4.194 34.757 11.941 6.636 5.086 14.816 7.887 23.033 7.887h132.271c5.404 2.634 11.395 4.03 17.468 4.03h133.34c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.499-7.499-7.499zm-296.988-8.824c-14.142-10.837-29.256-13.848-43.882-15.111v-87.575c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v114.02h-57.4v-197.71h57.4v51.011c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-27.375c12.546-13.845 25.98-23.87 38.992-33.58 28.809-21.497 56.019-41.803 53.258-94.905-.207-3.975 1.188-7.754 3.93-10.641 2.742-2.889 6.446-4.479 10.43-4.479 3.103 0 6.06.967 8.553 2.797 2.489 1.826 4.278 4.342 5.174 7.271 12.403 40.685 12.209 74.915-.611 107.724-.902 2.308-.605 4.912.792 6.959s3.715 3.271 6.193 3.271h90.569c9.518 0 17.261 7.747 17.261 17.27 0 4.605-1.797 8.942-5.048 12.201-3.27 3.262-7.606 5.059-12.213 5.059h-30.81c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h22.42c9.517 0 17.26 7.747 17.26 17.271 0 4.613-1.794 8.948-5.054 12.207-3.258 3.259-7.593 5.053-12.206 5.053h-22.42c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h14.189c9.518 0 17.261 7.743 17.261 17.26 0 4.612-1.795 8.948-5.053 12.207-3.266 3.266-7.602 5.063-12.208 5.063h-10.04-12.38c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h12.38c9.518 0 17.261 7.743 17.261 17.26 0 4.612-1.797 8.952-5.047 12.21-3.046 3.039-7.858 4.978-11.459 5.042-.249.004-133.584.018-133.584.018-4.936-.005-9.876-1.707-13.908-4.798z"}),m.createElement("path",{d:"m411.092 116.255c0-15.76-12.822-28.582-28.582-28.582s-28.582 12.822-28.582 28.582 12.822 28.582 28.582 28.582 28.582-12.822 28.582-28.582zm-42.164 0c0-7.489 6.093-13.582 13.582-13.582s13.582 6.093 13.582 13.582-6.093 13.582-13.582 13.582-13.582-6.092-13.582-13.582z"}),m.createElement("path",{d:"m387.196 372.165h-13.451c-7.085 0-12.849-5.765-12.849-12.85 0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5c0 15.097 12.076 27.417 27.074 27.83v16.598c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-16.598c14.999-.413 27.075-12.733 27.075-27.83v-10.383c0-9.633-6.155-18.104-15.317-21.082l-33.88-11.005c-2.962-.963-4.952-3.701-4.952-6.815v-14.867c0-5.754 4.681-10.436 10.435-10.436h18.28c5.754 0 10.435 4.682 10.435 10.436 0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5c0-14.025-11.41-25.436-25.435-25.436h-1.641v-16.578c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v16.578h-1.64c-14.024 0-25.435 11.41-25.435 25.436v14.867c0 9.633 6.155 18.104 15.317 21.081l33.879 11.005c2.963.963 4.953 3.702 4.953 6.816v10.383c.002 7.085-5.763 12.85-12.848 12.85z"}))))}var A,q,R=m.forwardRef(V);t.p;function D(){return(D=Object.assign||function(e){for(var c=1;c<arguments.length;c++){var t=arguments[c];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}function $(e,c){if(null==e)return{};var t,s,a=function(e,c){if(null==e)return{};var t,s,a={},n=Object.keys(e);for(s=0;s<n.length;s++)t=n[s],c.indexOf(t)>=0||(a[t]=e[t]);return a}(e,c);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)t=n[s],c.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function _(e,c){var t=e.title,s=e.titleId,a=$(e,["title","titleId"]);return m.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",width:45.03,height:41,viewBox:"0 0 45.03 41",ref:c,"aria-labelledby":s},a),t?m.createElement("title",{id:s},t):null,A||(A=m.createElement("defs",null,m.createElement("style",null,"\n      .cls-1 {\n        fill: #555;\n        fill-rule: evenodd;\n      }\n    "))),q||(q=m.createElement("path",{id:"icon",className:"cls-1",d:"M1229.28,3149.01l-27.56-5.96a2.179,2.179,0,0,0-2.57,1.71l-0.52,3.44,31.8,6.88,0.52-3.44A2.214,2.214,0,0,0,1229.28,3149.01Zm-11.59,6.79a2.183,2.183,0,0,0-2.69-1.55l-5.23,1.48-12.34-2.67-1.35,6.56-8.48,2.4a2.248,2.248,0,0,0-1.52,2.75l4.77,17.59a2.2,2.2,0,0,0,2.7,1.56l27.39-7.77a2.254,2.254,0,0,0,1.53-2.75l-0.82-3.02,3.07,0.66a2.179,2.179,0,0,0,2.57-1.71l1.94-9.39-11.07-2.39Zm3.16,8.95,0.68-3.28a0.9,0.9,0,0,1,1.06-.7l3.2,0.69a0.92,0.92,0,0,1,.69,1.08l-0.68,3.28a0.9,0.9,0,0,1-1.06.7l-3.2-.69A0.92,0.92,0,0,1,1220.85,3164.75Zm-32.77-.98,7.58-2.15,17.89-5.07,1.92-.55a0.426,0.426,0,0,1,.5.29l0.23,0.83,0.71,2.61-28.18,7.99-0.93-3.44A0.423,0.423,0,0,1,1188.08,3163.77Zm32.67,10.11a0.45,0.45,0,0,1-.04.32,0.442,0.442,0,0,1-.24.19l-27.4,7.77a0.355,0.355,0,0,1-.1.02,0.432,0.432,0,0,1-.4-0.3l-2.78-10.27,28.17-7.99,1.72,6.33Zm-23.25.7a0.9,0.9,0,0,0-1.1-.63l-3.2.91a0.917,0.917,0,0,0-.62,1.12l0.89,3.27a0.88,0.88,0,0,0,1.09.63l3.2-.9a0.925,0.925,0,0,0,.63-1.13Z",transform:"translate(-1185.97 -3143)"})))}var Z=m.forwardRef(_),U=(t.p,function(e){var c=e.name,t=e.content,s=e.children;return Object(p.jsxs)("div",{className:"service-card col-md-4 d-flex",children:[Object(p.jsx)("div",{className:"image-container mr-4",children:s}),Object(p.jsxs)("div",{className:"ml-2",children:[Object(p.jsx)("h4",{className:"title bold",children:c}),Object(p.jsx)("p",{className:"mb-3",children:t})]})]})}),G=function(){return Object(p.jsx)("div",{className:"section service mt-5",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row px-3",children:[Object(p.jsx)(U,{name:"Free Shipping",content:"Variations of passages of lorem isum is available here.",children:Object(p.jsx)(L,{})}),Object(p.jsx)(U,{name:"Member Discount",content:"Variations of passages of lorem isum is available here.",children:Object(p.jsx)(R,{})}),Object(p.jsx)(U,{name:"Free Returns",content:"Variations of passages of lorem isum is available here.",children:Object(p.jsx)(Z,{})})]})})})},Q=t(315),W=t(98),J=function(){return Object(p.jsx)("div",{className:"ImageSlider",children:Object(p.jsxs)(Q.a,{fade:!0,children:[Object(p.jsxs)(Q.a.Item,{interval:2e3,children:[Object(p.jsx)("img",{className:"d-block w-100 image",src:"https://i.imgur.com/pdfQDik.png",alt:"First slide"}),Object(p.jsxs)(Q.a.Caption,{children:[Object(p.jsx)("h1",{className:"title p-2 bold",children:"Stylish clothes"}),Object(p.jsx)("h1",{className:"title p-1 bold",children:"Stylish life"}),Object(p.jsx)("h4",{className:"subtitle d-none d-md-block  m-4 p-4",children:"Embrace styles that make your energy flow"}),Object(p.jsx)(W.a,{name:"Shop Now",link:"/shop",styleClass:"transparent slide"})]})]}),Object(p.jsxs)(Q.a.Item,{interval:2e3,children:[Object(p.jsx)("img",{className:"d-block w-100 image",src:"https://i.imgur.com/icbB0O1.png",alt:"First slide"}),Object(p.jsxs)(Q.a.Caption,{className:"reverse",children:[Object(p.jsx)("h1",{className:"title p-2 bold",children:"New for Spring"}),Object(p.jsx)("h1",{className:"title p-1 bold",children:"Shop Your Style"}),Object(p.jsx)("h4",{className:"subtitle d-none d-md-block m-4 p-4",children:"Get the best outfit of your life"}),Object(p.jsx)(W.a,{name:"Shop Now",link:"/shop/new-arrivals",styleClass:"transparent slide"})]})]})]})})},K=function(){var e=Object(m.useState)(),c=Object(E.a)(e,2),t=c[0],s=c[1];return Object(m.useEffect)((function(){return y.a.get("".concat("https://shine-shop-demo.herokuapp.com","/api/v1/shops/new-arrivals/products")).then((function(e){var c=e.data.data;s(c)})),function(){}}),[]),Object(p.jsx)("div",{className:"section new-arrival",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"section-title py-4 my-5",children:[Object(p.jsx)(u.b,{to:"/shop/new-arrivals",className:"title",children:Object(p.jsx)("h2",{className:"title",children:"New Arrivals"})}),Object(p.jsx)("p",{className:"text-desc",children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form"})]}),Object(p.jsx)("div",{className:"row row-cols-2 row-cols-md-4",children:t&&t.slice(0,8).map((function(e){return Object(p.jsx)(k.a,{product:e},e.sku)}))})]})})},X=t(198),Y=function(e){var c=e.days,t=e.hours,s=e.minutes,a=e.seconds;if(!e.completed)return Object(p.jsxs)("div",{className:"countdown row my-4",children:[Object(p.jsx)(X.a,{}),Object(p.jsxs)("span",{className:"col-3",children:[c," ",Object(p.jsx)("p",{children:"days"})]}),Object(p.jsxs)("span",{className:"col-3",children:[t," ",Object(p.jsx)("p",{children:"hours"})]}),Object(p.jsxs)("span",{className:"col-3",children:[s," ",Object(p.jsx)("p",{children:"minutes"})]}),Object(p.jsxs)("span",{className:"col-3",children:[a," ",Object(p.jsx)("p",{children:"seconds"})]})]})},ee=function(){var e=Date.now()+4e8;return Object(p.jsx)("div",{className:"section hot-deal",children:Object(p.jsx)("div",{className:"container py-4",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-5",children:Object(p.jsx)(u.b,{to:"/products/denim-shirt.m201",children:Object(p.jsx)("img",{src:"https://i.imgur.com/yvqOm6V.png",alt:"hot sale product"})})}),Object(p.jsxs)("div",{className:"col-md-7 content d-flex flex-column justify-content-center",children:[Object(p.jsx)("h2",{className:"title",children:"Deal of the day"}),Object(p.jsxs)("span",{className:"mt-4 mb-5",children:["Get ",Object(p.jsx)("span",{className:"color bold",children:"50%"})," off to your order"]}),Object(p.jsx)(X.a,{date:e,renderer:Y}),Object(p.jsx)("div",{className:"py-4",children:Object(p.jsx)(W.a,{name:"Shop Now",link:"/products/denim-shirt.m201",styleClass:"color slide"})})]})]})})})},ce=t(139),te=function(){return Object(p.jsx)("div",{className:"section stores",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"section-title py-4 my-5",children:[Object(p.jsx)(u.b,{to:"/stores",className:"title",children:Object(p.jsx)("h2",{className:"title",children:"Store Locator"})}),Object(p.jsxs)("p",{className:"text-desc",children:["There are many variations of passages of Lorem Ipsum available."," ",Object(p.jsx)(u.b,{to:"/stores",className:"text-link",children:"Find a store."})]})]}),Object(p.jsx)("div",{className:"content row row-cols-md-4 row-cols-2",children:ce.a.map((function(e){return Object(p.jsxs)("div",{className:"col py-3",children:[Object(p.jsx)("h5",{children:e.name}),Object(p.jsx)("h6",{children:e.address1}),Object(p.jsxs)("h6",{children:[e.address2," ",e.postalCode]})]},e.id)}))})]})})};c.default=function(){return Object(p.jsxs)("div",{className:"home",children:[Object(p.jsxs)(h.a,{children:[Object(p.jsx)("title",{children:"Shine | New Clothes, New Passion"}),Object(p.jsx)("meta",{name:"description",content:"Shine Online Shop"})]}),Object(p.jsxs)(I.a,{children:[Object(p.jsx)(J,{}),Object(p.jsx)(G,{}),Object(p.jsx)(C,{}),Object(p.jsx)(z,{}),Object(p.jsx)(ee,{}),Object(p.jsx)(K,{}),Object(p.jsx)(te,{})]})]})}}}]);
//# sourceMappingURL=20.73c915a9.chunk.js.map