(this["webpackJsonponline-shop"]=this["webpackJsonponline-shop"]||[]).push([[0],{105:function(e,t,c){"use strict";c.d(t,"c",(function(){return s})),c.d(t,"b",(function(){return r})),c.d(t,"a",(function(){return a})),c.d(t,"d",(function(){return i})),c.d(t,"e",(function(){return o}));var n=c(17),s=function(){return{type:n.a.TOOGLE_LOGOUT}},r=function(){return{type:n.a.TOOGLE_FAVOURITE}},a=function(){return{type:n.a.TOOGLE_CART}},i=function(){return{type:n.a.TOOGLE_PRODUCT_MODAL}},o=function(){return{type:n.a.TOOGLE_SEARCH}}},108:function(e,t,c){"use strict";var n=c(0),s=c(29),r=c(1),a=function(){return Object(r.jsx)("footer",{className:"footer bg-dark py-5 px-4",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-6 col-md-3",children:[Object(r.jsx)(s.b,{to:"/shop",className:"title",children:"Shop"}),Object(r.jsx)("div",{className:"",id:"shop",children:Object(r.jsxs)("div",{className:"d-none d-flex flex-column",id:"shop2",children:[Object(r.jsx)(s.b,{className:"item",to:"/shop/women",children:"Women"}),Object(r.jsx)(s.b,{className:"item",to:"/shop/men",children:"Men"}),Object(r.jsx)(s.b,{className:"item",to:"/shop/kids",children:"Kids"}),Object(r.jsx)(s.b,{className:"item",to:"/shop/new-arrivals",children:"New Arrivals"}),Object(r.jsx)(s.b,{className:"item",to:"/shop/sale",children:"Sale"})]})})]}),Object(r.jsxs)("div",{className:"col-6 col-md-3",children:[Object(r.jsx)("h4",{children:"Useful Links"}),Object(r.jsx)("div",{className:"",id:"usefulLinks",children:Object(r.jsxs)("div",{className:"collapse d-flex flex-column",children:[Object(r.jsx)(s.b,{className:"item",to:"/",children:"Customer Service"}),Object(r.jsx)(s.b,{className:"item",to:"/",children:"Legal & Privacy"}),Object(r.jsx)(s.b,{className:"item",to:"/",children:"Returns"}),Object(r.jsx)(s.b,{className:"item",to:"/",children:"FAQs"})]})})]}),Object(r.jsxs)("div",{className:"col-6 col-md-3",children:[Object(r.jsx)("h4",{className:"title",children:"Follow us"}),Object(r.jsx)("div",{className:"",id:"followUs",children:Object(r.jsxs)("div",{className:"collapse d-flex flex-column",children:[Object(r.jsx)(s.b,{className:"item",to:"/",children:"Facebook"}),Object(r.jsx)(s.b,{className:"item",to:"/",children:"Twitter"}),Object(r.jsx)(s.b,{className:"item",to:"/",children:"Instagram"}),Object(r.jsx)(s.b,{className:"item",to:"/",children:"Youtube"})]})})]}),Object(r.jsxs)("div",{className:"col-6 col-md-3",children:[Object(r.jsx)(s.b,{className:"title",to:"/register",children:Object(r.jsx)("h4",{children:"Become A Member"})}),Object(r.jsx)("span",{className:"pb-2",children:"Get E-mail updates about our latest shop and special offers."})]})]})})})},i=c(97),o=function(){return Object(r.jsxs)("div",{className:"shop-dropdown",children:[Object(r.jsx)("div",{className:"gap-fill"}),Object(r.jsxs)("div",{className:"content px-4 d-flex flex-column align-items-start",children:[Object(r.jsx)(s.b,{className:"item",to:"/shop",children:"Shop All"}),Object(r.jsx)(s.b,{className:"item",to:"/shop/women",children:"Women"}),Object(r.jsx)(s.b,{className:"item",to:"/shop/men",children:"Men"}),Object(r.jsx)(s.b,{className:"item",to:"/shop/kids",children:"Kids"}),Object(r.jsx)(s.b,{className:"item",to:"/shop/accessories",children:"Accessories"}),Object(r.jsx)(s.b,{className:"item",to:"/shop/new-arrivals",children:"New Arrivals"}),Object(r.jsx)(s.b,{className:"item",to:"/shop/sale",children:"Hot Sale"})]})]})},l=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(r.jsxs)("div",{className:"desktop-nav flex-row justify-content-center d-none d-lg-flex",children:[Object(r.jsx)(s.b,{className:"item p-4",to:"/",children:"Home"}),Object(r.jsxs)("div",{className:"item shop-wrapper px-4",onMouseEnter:function(e){return a(!0)},onMouseLeave:function(e){return a(!1)},onClick:function(){return a(!c)},children:[Object(r.jsx)(s.b,{className:"item shop",to:"/shop",children:"Shop"}),c?Object(r.jsx)(o,{}):""]}),Object(r.jsx)(s.b,{className:"item px-4",to:"/shop/new-arrivals",children:"New Arrivals"}),Object(r.jsx)("div",{className:"item",children:Object(r.jsx)(s.b,{className:"sale px-3 py-2",to:"/shop/sale",children:"Hot Sale"})}),Object(r.jsx)(s.b,{className:"item px-4",to:"/stores",children:"Store Locator"})]})},u=c(16),j=c(18),d=c(24),b=c(98),m=c(119),O=c(120),h=c(99),x=c(105),f=Object(d.b)({favourites:O.a}),p=Object(j.connect)(f,(function(e){return{removeItemFromFavourite:function(t){return e(Object(h.b)(t))},toggleFavourite:function(){return e(Object(x.b)())}}}))((function(e){var t=e.favourites,c=e.removeItemFromFavourite,n=e.toggleFavourite;return Object(r.jsxs)("div",{className:"favourites-dropdown",children:[Object(r.jsx)("div",{className:"gap-fill"}),Object(r.jsxs)("div",{className:"favourites-dropdown-wrapper d-flex flex-column justify-content-between",children:[Object(r.jsxs)("div",{className:"items",children:[t.length?t.slice(0,3).map((function(e){return Object(r.jsxs)("div",{className:"wrapper d-flex flex-row",children:[Object(r.jsx)(m.a,{product:e}),Object(r.jsx)("span",{className:"remove p-3 m-auto",onClick:function(){return c(e)},children:Object(r.jsx)("i",{className:"bi bi-x"})})]},e.sku)})):Object(r.jsx)("span",{className:"empty-message",children:"Your wishlist is empty."}),t.length>3?Object(r.jsx)("span",{className:"more text-center",children:"..."}):""]}),Object(r.jsx)("div",{onClick:n,className:"text-center pb-2 mt-auto",children:Object(r.jsx)(b.a,{link:"/favourites",name:"View All",styleClass:"square color lighter"})})]})]})})),N=c(37),v=c(110),g=c(113),y=c(25),w=c.n(y),C=c(10),k=c(4),S=c(12),E=c(36),L=Object(d.b)({currentUser:N.a}),F=Object(j.connect)(L,(function(e){return{setCurrentUser:function(t){return e(Object(E.b)(t))}}}))((function(e){var t=e.currentUser,c=e.setCurrentUser,n=Object(k.g)();return Object(r.jsxs)("div",{className:"sign-out",children:[Object(r.jsx)("div",{className:"gap-fill"}),Object(r.jsxs)("div",{className:"wrapper d-flex flex-column justify-content-center align-items-center",children:[t&&Object(r.jsxs)("h5",{className:"view mb-4 d-lg-none",children:["Hi ",t.name]}),Object(r.jsx)("div",{className:"my-4",children:Object(r.jsxs)(s.b,{to:"/account",className:"view-account",children:[Object(r.jsx)("i",{className:"bi bi-person-lines-fill mr-3"}),Object(r.jsx)("span",{className:"text my-5",children:"View Profile"})]})}),Object(r.jsx)(b.a,{name:"Sign Out",styleClass:"square color lighter",onClick:function(){w.a.get("".concat("https://online-shop-vp7rk.ondigitalocean.app/","/api/v1/users/logout")).then((function(e){200===e.status&&(document.cookie=document.cookie+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;",c(null),window.setTimeout((function(){n.push("/")}),0),Object(C.toast)("Logged out successfully!",S.m))})).catch((function(e){console.log(e),C.toast.error(e.response.data.message,S.m)}))}})]})]})})),T=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1];return console.log(c),Object(r.jsxs)("div",{className:"mobile-menu",children:[Object(r.jsx)("div",{className:"gap-fill"}),Object(r.jsxs)("div",{className:"mobile-menu-inner",children:[Object(r.jsx)("div",{className:"mobile-item",children:Object(r.jsx)(s.b,{to:"/",children:"Home"})}),Object(r.jsxs)("div",{className:"mobile-item shop-wrapper",onClick:function(){return a(!c)},children:[Object(r.jsx)(s.b,{className:"shop",to:"/shop",children:"Shop"}),c?Object(r.jsx)(o,{}):""]}),Object(r.jsx)("div",{className:"mobile-item",children:Object(r.jsx)(s.b,{className:"",to:"/shop/new-arrivals",children:"New Arrivals"})}),Object(r.jsx)("div",{className:"mobile-item",children:Object(r.jsx)(s.b,{className:"",to:"/shop/sale",children:"Hot Sale"})}),Object(r.jsx)("div",{className:"mobile-item",children:Object(r.jsx)(s.b,{className:"",to:"/stores",children:"Store Locator"})})]}),Object(r.jsx)("div",{className:"invisible",children:"A"})]})},A=c(109),I=Object(d.b)({cartItemOrders:v.a}),_=Object(j.connect)(I,(function(e){return{toggleCart:function(){return e(Object(x.a)())},removeItemOrderFromCart:function(t,c){return e(Object(A.d)(t,c))},decreaseQuantity:function(t,c){return e(Object(A.b)(t,c))},increaseQuantity:function(t,c){return e(Object(A.c)(t,c))}}}))((function(e){var t=e.product,c=e.toggleCart,n=e.removeItemOrderFromCart,a=e.order,i=e.decreaseQuantity,o=e.increaseQuantity,l=t.name,u=t.image,j=t.price,d=t.discount,b=t.sku,m=a.size,O=a.color,h=a.quantity;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"cart-item row d-flex flex-wrap mx-2 my-4 pt-3 pb-4",children:[Object(r.jsx)("div",{className:"image pr-2",onClick:function(){return c(!1)},children:Object(r.jsx)(s.b,{to:"/products/".concat(l.toLowerCase().replace(/ /g,"-"),".").concat(b),children:Object(r.jsx)("img",{src:u,alt:""})})}),Object(r.jsxs)("div",{className:"detail pl-4 d-flex flex-column",children:[Object(r.jsx)("h5",{className:"mb-2 name bold",children:Object(r.jsx)(s.b,{to:"/products/".concat(l.toLowerCase().replace(/ /g,"-"),".").concat(b),children:l})}),Object(r.jsxs)("div",{className:"choice mt-1 mb-3",children:[Object(r.jsxs)("span",{className:"choice-color",children:[" Color: ",O]}),Object(r.jsxs)("span",{className:"choice-size",children:["Size: ",m.toUpperCase()]}),Object(r.jsxs)("div",{className:"choice-quantity my-2 text-center d-flex",children:[Object(r.jsx)("i",{className:"bi bi-dash icon",onClick:function(){return i(t,a)}}),Object(r.jsx)("div",{className:"quantity mx-4",children:Object(r.jsxs)("span",{className:"mx-3",children:["Qty: ",h]})}),Object(r.jsx)("i",{className:"bi bi-plus icon",onClick:function(){return o(t,a)}})]})]}),Object(r.jsx)("div",{className:"price",children:0===d?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("span",{className:"mr-3",children:["$",j.toFixed(2)]}),Object(r.jsx)("span",{className:"quantity",children:h})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("span",{className:"mr-4 old-price",children:["$",j.toFixed(2)]}),Object(r.jsxs)("span",{className:"sale-price mr-3",children:["$",Object(S.c)(j,d)]}),Object(r.jsx)("span",{className:"quantity",children:h})]})})]}),Object(r.jsxs)("div",{className:"item-total bold align-self-end ml-auto pb-4",children:["$",Object(S.c)(j,d,h)]}),Object(r.jsx)("i",{className:"bi bi-trash remove-icon icon pt-3",onClick:function(){return n(t,a)}})]})})})),M=Object(d.b)({cartLength:v.c,cartItems:v.b,cartTotal:v.d,cartItemOrders:v.a}),R=Object(j.connect)(M)((function(e){var t=e.cartLength,c=e.cartTotal,n=e.toggleCart,s=e.cartItemOrders;return Object(r.jsx)("div",{className:"cart-list",children:Object(r.jsxs)("div",{className:"cart-list-inner d-flex flex-column p-5",children:[Object(r.jsx)("div",{className:"close-btn px-4 py-3",onClick:n,children:Object(r.jsx)("i",{className:"bi bi-x-circle"})}),Object(r.jsxs)("h3",{className:"title my-3 text-center",children:["Cart List ",0===t?"":"(".concat(t,")")]}),Object(r.jsx)("div",{className:"cart-item-wrapper w-100",children:0===t&&s?Object(r.jsx)("div",{className:"text-center my-5",children:"Your Cart is Empty"}):s.map((function(e,t){return Object(r.jsx)(_,{product:e.product,order:e.order},"".concat(e.product.sku).concat(t))}))}),Object(r.jsxs)("div",{className:"subtotal pt-1 d-flex justify-content-between",children:[Object(r.jsx)("h4",{className:"title bold",children:"Sub Total"}),Object(r.jsxs)("h4",{className:"total bold mr-2",children:["$",c]})]}),Object(r.jsx)("div",{className:"text-center mt-5",onClick:n,children:Object(r.jsx)(b.a,{link:"/checkout",name:"Check Out",styleClass:"square color lighter mx-3"})}),Object(r.jsx)("h5",{className:"free-shipping text-center mt-auto",children:"Free Shipping on All Orders Over $50!"})]})})})),U=c(122),H=c(128),q=Object(d.b)({allProducts:U.e}),D=Object(j.connect)(q,(function(e){return{fetchProductsStartAsync:function(){return e(Object(H.a)())}}}))((function(e){var t=e.allProducts,c=e.fetchProductsStartAsync,s=e.toggleSearch,a=Object(n.useState)(),o=Object(i.a)(a,2),l=o[0],u=o[1],j=Object(n.useState)(),d=Object(i.a)(j,2),b=d[0],O=d[1];return Object(n.useEffect)((function(){if(0===t.length&&l&&(console.log("fetching for search"),c()),""===l&&O(null),l&&""!==l){var e=t.filter((function(e){var t=e.tag.join("").toLowerCase();return e.name.toLowerCase().includes(l.toLowerCase())||t.includes(l.toLowerCase())}));O(e)}}),[l]),Object(r.jsx)("div",{className:"search-product",children:Object(r.jsxs)("div",{className:"wrapper d-flex flex-column px-4 pb-5 pt-4 mx-auto",children:[Object(r.jsx)("input",{className:"input py-3",type:"search",placeholder:"Search product ...",onChange:function(e){return u(e.target.value)}}),Object(r.jsx)("div",{className:"close-btn py-3",onClick:s,children:Object(r.jsx)("i",{className:"bi bi-x-circle"})}),b&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("span",{className:"result-count",children:["Found ",b.length," matched products"]}),Object(r.jsx)("div",{className:"result w-100",children:b.map((function(e){return Object(r.jsx)("div",{onClick:s,children:Object(r.jsx)(m.a,{product:e},e.sku)},e.sku)}))})]})]})})})),P=document.getElementById("cart_modal"),$=Object(d.b)({currentUser:N.a,showLogOut:g.c,showFavourite:g.b,showCart:g.a,showSearch:g.e,favouriteLength:O.b,cartLength:v.c}),G=Object(j.connect)($,(function(e){return{toggleLogOut:function(){return e(Object(x.c)())},toggleFavourite:function(){return e(Object(x.b)())},toggleCart:function(){return e(Object(x.a)())},toggleSearch:function(){return e(Object(x.e)())}}}))((function(e){var t=e.currentUser,c=e.toggleLogOut,a=e.showLogOut,o=e.toggleFavourite,l=e.showFavourite,j=e.favouriteLength,d=e.toggleCart,b=e.showCart,m=e.cartLength,O=e.showSearch,h=e.toggleSearch,x=Object(n.useState)(!1),f=Object(i.a)(x,2),N=f[0],v=f[1];return Object(r.jsxs)("div",{className:"icon-group d-flex justify-content-between",children:[t?Object(r.jsxs)("div",{className:"item account-wrapper px-3",onMouseEnter:c,onMouseLeave:c,onClick:c,children:[Object(r.jsxs)(s.b,{className:"item",to:"/account","aria-label":"account",children:[Object(r.jsx)("i",{className:"bi bi-person icon"}),Object(r.jsxs)("span",{className:"name ml-2 d-none d-lg-inline-block",children:["Hi ",t.name]})]}),a?"":Object(r.jsx)(F,{})]}):Object(r.jsxs)(s.b,{className:"item px-3",to:"/login","aria-label":"login",children:[Object(r.jsx)("i",{className:"bi bi-person icon"}),Object(r.jsx)("span",{className:"name ml-2 d-none d-lg-inline-block",children:"Sign in"})]}),Object(r.jsxs)("div",{className:"item favourite-wrapper px-3",onMouseLeave:o,children:[Object(r.jsx)(s.b,{className:"item",to:"/favourites","aria-label":"favourites",children:Object(r.jsxs)("div",{onClick:o,onMouseEnter:o,children:[j>0?Object(r.jsx)("span",{className:"favourite-count",children:j}):"",Object(r.jsxs)("div",{className:"d-flex",children:[Object(r.jsx)("i",{className:"bi bi-heart icon"}),Object(r.jsx)("span",{className:"name ml-2 d-none d-xl-inline-block align-self-center",children:"Favourites"})]})]})}),l?"":Object(r.jsx)(p,{})]}),Object(r.jsxs)("div",{className:"item cart-wrapper px-3",children:[m>0?Object(r.jsx)("span",{className:"cart-count",children:m}):"",Object(r.jsxs)("div",{className:"d-flex",onClick:d,children:[Object(r.jsx)("i",{className:"bi bi-bag icon"}),Object(r.jsx)("span",{className:"name ml-2 d-none d-xl-inline-block align-self-center",children:"Bags"})]}),b?"":Object(u.createPortal)(Object(r.jsx)(R,{toggleCart:d}),P)]}),Object(r.jsxs)("div",{className:"item search-wrapper px-3",children:[Object(r.jsxs)("div",{className:"d-flex",onClick:h,children:[Object(r.jsx)("i",{className:"bi bi-search icon"}),Object(r.jsx)("span",{className:"name ml-2 d-none d-xl-inline-block align-self-center",children:"Search"})]}),O?"":Object(r.jsx)(D,{toggleSearch:h})]}),Object(r.jsxs)("div",{className:"item mobile-wrapper d-lg-none",children:[Object(r.jsx)("i",{className:"bi bi-list icon",onClick:function(){return v(!N)}}),N?Object(r.jsx)(T,{}):""]})]})})),Q=function(){return Object(r.jsx)("div",{className:"logo px-2 py-1",children:Object(r.jsx)(s.b,{className:"",to:"/",children:Object(r.jsx)("h3",{className:"title py-2",children:"Shine"})})})},V=function(){return Object(r.jsx)("header",{className:"header px-4 py-4 ",children:Object(r.jsx)("div",{className:"container-fluid",children:Object(r.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(r.jsx)(Q,{}),Object(r.jsx)(l,{}),Object(r.jsx)(G,{})]})})})},Y=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){function e(){var e=window.pageYOffset;s(e<=0?0:e)}return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[c]),Object(r.jsx)(r.Fragment,{children:c>100&&Object(r.jsx)("div",{className:"scrolltop",onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},children:Object(r.jsx)("i",{className:"bi bi-arrow-up-circle-fill icon"})})})},z=function(){var e=Object(n.useState)(function(){var e="";return localStorage.getItem("theme")&&(e=localStorage.getItem("theme")),e}()),t=Object(i.a)(e,2),c=t[0],s=t[1];Object(n.useEffect)((function(){document.body.className=c,localStorage.setItem("theme",c)}),[c]);var a=Object(n.useState)(!1),o=Object(i.a)(a,2),l=o[0],u=o[1];return Object(r.jsxs)("div",{className:"theme-setting",onMouseEnter:function(e){return u(!l)},onMouseLeave:function(e){return u(!l)},onClick:function(e){return u(!l)},children:[Object(r.jsx)("div",{className:"icon-wrapper",children:Object(r.jsx)("i",{className:"bi bi-gear icon"})}),l&&Object(r.jsxs)("div",{className:"options pr-3",children:[Object(r.jsx)("div",{className:"item",onClick:function(e){return s("theme-default")}}),Object(r.jsx)("div",{className:"item",onClick:function(e){return s("theme-yellow")}}),Object(r.jsx)("div",{className:"item",onClick:function(e){return s("theme-blue")}}),Object(r.jsx)("div",{className:"item",onClick:function(e){return s("theme-violet")}}),Object(r.jsx)("div",{className:"item",onClick:function(e){return s("theme-green")}})]})]})};t.a=function(e){var t=e.children;return Object(r.jsxs)("div",{className:"d-flex flex-column min-vh-100",children:[Object(r.jsx)(V,{}),Object(r.jsx)(z,{}),t,Object(r.jsx)(Y,{}),Object(r.jsx)(a,{})]})}},109:function(e,t,c){"use strict";c.d(t,"a",(function(){return s})),c.d(t,"d",(function(){return r})),c.d(t,"b",(function(){return a})),c.d(t,"c",(function(){return i}));var n=c(14),s=function(e,t){return{type:n.a.ADD_ITEM_TO_CART,payload1:e,payload2:t}},r=function(e,t){return{type:n.a.REMOVE_ITEM_ORDER_FROM_CART,payload1:e,payload2:t}},a=function(e,t){return{type:n.a.DECREASE_QUANTITY,payload1:e,payload2:t}},i=function(e,t){return{type:n.a.INCREASE_QUANTITY,payload1:e,payload2:t}}},110:function(e,t,c){"use strict";c.d(t,"b",(function(){return s})),c.d(t,"c",(function(){return r})),c.d(t,"a",(function(){return a})),c.d(t,"d",(function(){return i}));var n=c(24),s=Object(n.a)([function(e){return e.cart}],(function(e){return e.cartItems})),r=Object(n.a)([s],(function(e){return e.map((function(e){return e.orders.map((function(e){return e.quantity}))})).flat().reduce((function(e,t){return e+t}),0)})),a=Object(n.a)([s],(function(e){var t=[];return e.map((function(e){return e.orders.map((function(c){return t.push({product:e,order:c})}))})),t})),i=Object(n.a)([s],(function(e){var t=[];return e.map((function(e){var c=e.price*(100-e.discount)/100,n=[];return e.orders.map((function(e){return n.push(e.quantity*c)})),t.push(n)})),t.flat().reduce((function(e,t){return 1*(e+t)}),0).toFixed(2)}))},113:function(e,t,c){"use strict";c.d(t,"c",(function(){return r})),c.d(t,"b",(function(){return a})),c.d(t,"a",(function(){return i})),c.d(t,"d",(function(){return o})),c.d(t,"e",(function(){return l}));var n=c(24),s=function(e){return e.toggle},r=Object(n.a)([s],(function(e){return e.logOutHidden})),a=Object(n.a)([s],(function(e){return e.favouriteHidden})),i=Object(n.a)([s],(function(e){return e.cartHidden})),o=Object(n.a)([s],(function(e){return e.productModalHidden})),l=Object(n.a)([s],(function(e){return e.searchHidden}))},119:function(e,t,c){"use strict";c(0);var n=c(29),s=c(12),r=c(1);t.a=function(e){var t=e.product,c=t.name,a=t.image,i=t.sku,o=t.price,l=t.discount;return Object(r.jsx)("div",{className:"product-card-small p-4",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-4 pr-0 image",children:Object(r.jsx)(n.b,{to:"/products/".concat(c.toLowerCase().replace(/ /g,"-"),".").concat(i),children:Object(r.jsx)("img",{src:a[0],alt:c})})}),Object(r.jsxs)("div",{className:"price col-8 pr-0 my-auto",children:[Object(r.jsx)(n.b,{to:"/products/".concat(c.toLowerCase().replace(/ /g,"-"),".").concat(i),children:Object(r.jsx)("h5",{className:"product-title bold",children:c})}),0===l?Object(r.jsxs)("span",{className:"mr-3",children:["$",o.toFixed(2)]}):Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{className:"mr-3 old-price",children:["$",o.toFixed(2)]}),Object(r.jsxs)("span",{className:"sale-price",children:["$",Object(s.c)(o,l)]})]})]})]})})}},120:function(e,t,c){"use strict";c.d(t,"a",(function(){return s})),c.d(t,"b",(function(){return r}));var n=c(24),s=Object(n.a)([function(e){return e.favourite}],(function(e){return e.favouriteItems})),r=Object(n.a)([s],(function(e){return e.length}))},122:function(e,t,c){"use strict";c.d(t,"e",(function(){return s})),c.d(t,"g",(function(){return r})),c.d(t,"c",(function(){return a})),c.d(t,"b",(function(){return i})),c.d(t,"a",(function(){return o})),c.d(t,"d",(function(){return l})),c.d(t,"f",(function(){return u}));var n=c(24),s=Object(n.a)((function(e){return e.product}),(function(e){return e.products})),r=Object(n.a)(s,(function(e){return e.filter((function(e){return"607b4a406a8ae23bbfd5a9da"===e.category}))})),a=Object(n.a)(s,(function(e){return e.filter((function(e){return"607b4a8b6a8ae23bbfd5a9db"===e.category}))})),i=Object(n.a)(s,(function(e){return e.filter((function(e){return"607b4a9c6a8ae23bbfd5a9dc"===e.category}))})),o=Object(n.a)(s,(function(e){return e.filter((function(e){return"607b4ab76a8ae23bbfd5a9dd"===e.category}))})),l=Object(n.a)(s,(function(e){return e.filter((function(e){return"607b4d71a07c4d3cd29eec13"===e.category}))})),u=Object(n.a)(s,(function(e){return e.filter((function(e){return 0!==e.discount}))}))},128:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(26),s=c(25),r=c.n(s),a=function(){return function(e){return r.a.get("".concat("https://online-shop-vp7rk.ondigitalocean.app/","/api/v1/products")).then((function(t){var c,s=t.data.data;e((c=s,{type:n.a.FETCH_PRODUCTS_SUCCESS,payload:c}))})).catch((function(t){return e((c=t.message,{type:n.a.FETCH_PRODUCTS_FAILURE,payload:c}));var c}))}}},98:function(e,t,c){"use strict";c(0);var n=c(29),s=c(1);t.a=function(e){var t=e.name,c=e.children,r=e.link,a=e.styleClass,i=e.onClick;return Object(s.jsx)(s.Fragment,{children:r?Object(s.jsx)(n.b,{to:r,children:Object(s.jsxs)("button",{className:"custom-button ".concat(a),children:[t,c]})}):Object(s.jsxs)("button",{className:"custom-button ".concat(a),onClick:i,children:[t,c]})})}},99:function(e,t,c){"use strict";c.d(t,"a",(function(){return s})),c.d(t,"b",(function(){return r}));var n=c(19),s=function(e){return{type:n.a.ADD_ITEM_TO_FAVOURITE,payload:e}},r=function(e){return{type:n.a.REMOVE_ITEM_FROM_FAVOURITE,payload:e}}}}]);