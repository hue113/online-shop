(this["webpackJsonponline-shop"]=this["webpackJsonponline-shop"]||[]).push([[6],{12:function(e,t,r){"use strict";r.d(t,"k",(function(){return i})),r.d(t,"j",(function(){return u})),r.d(t,"d",(function(){return s})),r.d(t,"m",(function(){return d})),r.d(t,"n",(function(){return l})),r.d(t,"c",(function(){return O})),r.d(t,"b",(function(){return f})),r.d(t,"a",(function(){return b})),r.d(t,"h",(function(){return h})),r.d(t,"i",(function(){return p})),r.d(t,"e",(function(){return E})),r.d(t,"g",(function(){return T})),r.d(t,"l",(function(){return j})),r.d(t,"f",(function(){return _}));var n=r(2),c=r(23),a=r(1),o=r(10).toast,i=function(e){for(var t,r,n=e.length;0!==n;)r=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[r],e[r]=t;return e},u=function(e){return Object(c.a)(Array(5)).map((function(t,r){return r<e&&r+1>e?Object(a.jsx)("i",{className:"bi bi-star-half icon"},r):r<e?Object(a.jsx)("i",{className:"bi bi-star-fill icon"},r):Object(a.jsx)("i",{className:"bi bi-star icon"},r)}))},s=function(e){for(var t=e.replace("-"," ").split(" "),r=0;r<t.length;r++)t[r]=t[r][0].toUpperCase()+t[r].substr(1);return t.join(" "),t},d={position:o.POSITION.TOP_CENTER,draggable:!0},l={position:o.POSITION.TOP_RIGHT,draggable:!0},O=function(e,t,r){return r?(r*e*(100-t)/100).toFixed(2):(e*(100-t)/100).toFixed(2)},f=function(e,t){return e.find((function(e){return e._id===t._id}))?(o.warn("Item already exists in your favourite list",d),e):(o("Item was successfully added to Favourites !",d),[].concat(Object(c.a)(e),[t]))},b=function(e,t,r){var a=e.find((function(e){return e._id===t._id}));if(a){var o=a.orders.find((function(e){return e.color===r.color&&e.size===r.size}));if(o){var i=a,u=o;u.quantity+=r.quantity;var s=i.orders.map((function(e){return e.color===r.color&&e.size===r.size?u:e}));return i.orders=s,e.map((function(e){return e._id===t._id?i:e}))}var d=a;return d.orders.push(r),e.map((function(e){return e._id===t._id?d:e}))}var l=[];return l.push(r),[].concat(Object(c.a)(e),[Object(n.a)(Object(n.a)({},t),{},{orders:l})])},h=function(e,t){return e.filter((function(e){return e._id!==t._id}))},p=function(e,t,r){var n=t;if(1===n.orders.length)return o.warn("Order was removed successfully",d),e.filter((function(e){return e._id!==t._id}));var c=n.orders.filter((function(e){return e.size!==r.size||e.color!==r.color}));return n.orders=c,o.warn("Order was removed successfully",d),e.map((function(e){return e._id===t._id?n:e}))},E=function(e,t,r){var n=t;if(1===r.quantity){var c=n.orders.filter((function(e){return e.size!==r.size||e.color!==r.color}));return n.orders=c,e.map((function(e){return e._id===t._id?n:e}))}r.quantity-=1;var a=n.orders.map((function(e){return e.size!==r.size||e.color!==r.color?e:r}));return n.orders=a,e.map((function(e){return e._id===t._id?n:e}))},T=function(e,t,r){var n=t;r.quantity+=1;var c=n.orders.map((function(e){return e.size!==r.size||e.color!==r.color?e:r}));return n.orders=c,e.map((function(e){return e._id===t._id?n:e}))},j=function(e,t){var r,n=Object(c.a)(t);switch(e){case"popular":n.sort((function(e,t){return t.saleCount-e.saleCount})),r=n;break;case"price-lth":n.sort((function(e,t){return e.price*(100-e.discount)-t.price*(100-t.discount)})),r=n;break;case"price-htl":n.sort((function(e,t){return t.price*(100-t.discount)-e.price*(100-e.discount)})),r=n;break;case"0-20":case"21-50":case"51-100":case"101-above":var a=e.split("-");r=isNaN(1*a[1])?n.filter((function(e){return 1*O(e.price,e.discount)>1*a[0]})):n.filter((function(e){return 1*O(e.price,e.discount)>1*a[0]&&1*O(e.price,e.discount)<1*a[1]}));break;case"red":case"blue":case"yellow":case"pink":case"white":case"brown":case"green":case"orange":case"black":case"purple":r=t.filter((function(t){return t.variation.find((function(t){return t.color===e}))?t:""}));break;default:r=t}return r},_=function(e){switch(e){case"popular":return"Sort by Popularity";case"price-lth":return"Sort by price: Low To High";case"price-htl":return"Sort: Price High To Low";case"0-20":case"21-50":case"51-100":case"101-above":var t=e.split("-");return isNaN(1*t[1])?"Filter: Price above $".concat(t[0]):"Filter: Price between $".concat(t[0]," and $").concat(t[1]);case"red":case"blue":case"yellow":case"pink":case"white":case"brown":case"green":case"orange":case"black":case"purple":return"Sort by color: ".concat(e)}}},14:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={ADD_ITEM_TO_CART:"ADD_ITEM_TO_CART",DECREASE_QUANTITY:"DECREASE_QUANTITY",INCREASE_QUANTITY:"INCREASE_QUANTITY",REMOVE_ITEM_ORDER_FROM_CART:"REMOVE_ITEM_ORDER_FROM_CART",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",CLEAR_LIST:"CLEAR_LIST"}},17:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={TOOGLE_LOGOUT:"TOOGLE_LOGOUT",TOOGLE_FAVOURITE:"TOOGLE_FAVOURITE",TOOGLE_CART:"TOOGLE_CART",TOOGLE_PRODUCT_MODAL:"TOOGLE_PRODUCT_MODAL",TOOGLE_SEARCH:"TOOGLE_SEARCH"}},19:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={ADD_ITEM_TO_FAVOURITE:"ADD_ITEM_TO_FAVOURITE",REMOVE_ITEM_FROM_FAVOURITE:"REMOVE_ITEM_FROM_FAVOURITE",CLEAR_ITEM_FROM_LIST:"CLEAR_ITEM_FROM_LIST",CLEAR_LIST:"CLEAR_LIST"}},21:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={SET_CURRENT_USER:"SET_CURRENT_USER",UPDATE_USER_INFO:"UPDATE_USER_INFO"}},26:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={FETCH_PRODUCTS_START:"FETCH_PRODUCTS_START",FETCH_PRODUCTS_SUCCESS:"FETCH_PRODUCTS_SUCCESS",FETCH_PRODUCTS_FAILURE:"FETCH_PRODUCTS_FAILURE"}},27:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={FETCH_CATEGORIES_START:"FETCH_CATEGORIES_START",FETCH_CATEGORIES_SUCCESS:"FETCH_CATEGORIES_SUCCESS",FETCH_CATEGORIES_FAILURE:"FETCH_CATEGORIES_FAILURE"}},36:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return u})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return d}));var n=r(25),c=r.n(n),a=r(21),o=r(10),i=function(e){return{type:a.a.SET_CURRENT_USER,payload:e}},u=function(){return function(e){var t=document.cookie.split("=")[1];if(t)return c.a.get("".concat("https://shine-shop.herokuapp.com","/api/v1/users/me"),{headers:{Authorization:"Bearer "+t}}).then((function(t){var r=t.data.data.user;e(i(r))})).catch((function(e){return console.log(e)}))}},s=function(e){return function(t){var r=document.cookie.split("=")[1];if(r)return c.a.patch("".concat("https://shine-shop.herokuapp.com","/api/v1/users/updateMe"),e,{headers:{Authorization:"Bearer "+r}}).then((function(e){var r=e.data.data.user;console.log(e),t(i(r)),Object(o.toast)("Account was updated successfully!")})).catch((function(e){console.log(e),o.toast.error("Error happened! Please try again")}))}},d=function(e){return function(t){var r=document.cookie.split("=")[1];if(r)return c.a.patch("".concat("https://shine-shop.herokuapp.com","/api/v1/users/updatePassword"),e,{headers:{Authorization:"Bearer "+r}}).then((function(e){if(console.log(e),401===e.status)return o.toast.error(e.data.message);if(400===e.status)return o.toast.error(e.data.message);document.cookie+="=; expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="jwt=".concat(e.data.token);var r=e.data.user;t(i(r)),Object(o.toast)("Password was changed successfully!")})).catch((function(e){console.log(e),o.toast.error("There was something wrong! Please try again!")}))}}},37:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(24),c=Object(n.a)([function(e){return e.user}],(function(e){return e.currentUser}))},91:function(e,t,r){},92:function(e,t,r){},95:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(16),o=r.n(a),i=r(29),u=r(4),s=r(10),d=r(18),l=r(24),O=r(50),f=r(51),b=r(58),h=r(57),p=r(1),E=function(e){Object(b.a)(r,e);var t=Object(h.a)(r);function r(){var e;return Object(O.a)(this,r),(e=t.call(this)).state={hasErrored:!1},e}return Object(f.a)(r,[{key:"componentDidCatch",value:function(e,t){console.log(e)}},{key:"render",value:function(){return this.state.hasErrored?Object(p.jsx)("div",{className:"error-boundary vh-100",children:Object(p.jsxs)("div",{className:"wrapper p-5 w-100 h-80 d-flex flex-column justify-content-center align-items-center ",children:[Object(p.jsx)("div",{className:"image mb-5"}),Object(p.jsx)("h2",{className:"title mb-4",children:"Sorry! This Page is Not on the Map"}),Object(p.jsxs)("p",{className:"description",children:["Please contact us to report any technical difficulties you experience with our website, or provide suggestions for improvement.",Object(p.jsx)("br",{})," We appreciate your help!"]})]})}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasErrored:!0}}}]),r}(c.a.Component),T=function(){return Object(p.jsx)("div",{className:"spinner vh-100",children:Object(p.jsx)("div",{className:"h-75 d-flex justify-content-center align-items-center",children:Object(p.jsx)("div",{className:"spinner-border text-primary",style:{width:45,height:45},role:"status",children:Object(p.jsx)("span",{className:"sr-only",children:"Loading..."})})})})},j=r(36),_=r(37);var R=Object(u.i)((function(e){var t=e.history,r=e.children;return Object(n.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[t]),Object(p.jsx)(n.Fragment,{children:r})})),v=Object(n.lazy)((function(){return Promise.all([r.e(1),r.e(2),r.e(14),r.e(0),r.e(20)]).then(r.bind(null,322))})),C=Object(n.lazy)((function(){return Promise.all([r.e(1),r.e(2),r.e(5),r.e(0),r.e(15)]).then(r.bind(null,328))})),g=Object(n.lazy)((function(){return Promise.all([r.e(1),r.e(2),r.e(0),r.e(16)]).then(r.bind(null,325))})),m=Object(n.lazy)((function(){return Promise.all([r.e(1),r.e(2),r.e(5),r.e(11),r.e(10)]).then(r.bind(null,324))})),I=Object(n.lazy)((function(){return Promise.all([r.e(3),r.e(0),r.e(18)]).then(r.bind(null,329))})),A=Object(n.lazy)((function(){return Promise.all([r.e(3),r.e(4),r.e(0),r.e(19)]).then(r.bind(null,330))})),S=Object(n.lazy)((function(){return Promise.all([r.e(9),r.e(0),r.e(17)]).then(r.bind(null,327))})),y=Object(n.lazy)((function(){return Promise.all([r.e(13),r.e(0),r.e(22)]).then(r.bind(null,326))})),F=Object(n.lazy)((function(){return Promise.all([r.e(1),r.e(0),r.e(23)]).then(r.bind(null,331))})),U=Object(n.lazy)((function(){return Promise.all([r.e(3),r.e(4),r.e(12),r.e(0),r.e(21)]).then(r.bind(null,323))}));s.toast.configure();var H=Object(l.b)({currentUser:_.a}),x=Object(d.connect)(H,(function(e){return{getCurrentUser:function(){return e(Object(j.a)())}}}))((function(e){var t=e.getCurrentUser,r=e.currentUser;return console.log("public url: ".concat("")),console.log("api url: ".concat("https://shine-shop.herokuapp.com")),Object(n.useEffect)((function(){t()}),[t]),Object(p.jsx)(i.a,{children:Object(p.jsx)(n.Suspense,{fallback:Object(p.jsx)(T,{}),children:Object(p.jsx)(R,{children:Object(p.jsxs)(u.d,{children:[Object(p.jsxs)(E,{children:[Object(p.jsx)(u.b,{exact:!0,path:"/",component:v}),Object(p.jsx)(u.b,{exact:!0,path:"/home",component:v}),Object(p.jsx)(u.b,{exact:!0,path:"/shop",component:C}),Object(p.jsx)(u.b,{exact:!0,path:"/shop/:category",component:g}),Object(p.jsx)(u.b,{exact:!0,path:"/products/:name",component:m}),Object(p.jsx)(u.b,{exact:!0,path:"/login",render:function(){return r?Object(p.jsx)(u.a,{to:"/"}):Object(p.jsx)(I,{})}}),Object(p.jsx)(u.b,{exact:!0,path:"/account",render:function(){return r?Object(p.jsx)(U,{}):Object(p.jsx)(u.a,{to:"/"})}}),Object(p.jsx)(u.b,{exact:!0,path:"/register",render:function(){return r?Object(p.jsx)(u.a,{to:"/"}):Object(p.jsx)(A,{})}}),Object(p.jsx)(u.b,{exact:!0,path:"/stores",component:S}),Object(p.jsx)(u.b,{exact:!0,path:"/checkout",component:y}),Object(p.jsx)(u.b,{exact:!0,path:"/favourites",component:F})]}),Object(p.jsx)(s.ToastContainer,{})]})})})})})),L=(r(91),r(92),function(e){e&&e instanceof Function&&r.e(24).then(r.bind(null,321)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;r(e),n(e),c(e),a(e),o(e)}))}),M=r(52),P=r(11),w=r(28),D=r(53),N=r.n(D),G=r(54),k=r(55),z=r.n(k),V=r(56),Q=r(2),Y=r(21),q={toggleLogout:!1,currentUser:null},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y.a.SET_CURRENT_USER:case Y.a.UPDATE_USER_INFO:return Object(Q.a)(Object(Q.a)({},e),{},{currentUser:t.payload});default:return e}},J=r(26),$={products:[],isFetching:!1,errorMessage:void 0},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J.a.FETCH_PRODUCTS_START:return Object(Q.a)(Object(Q.a)({},e),{},{isFetching:!0});case J.a.FETCH_PRODUCTS_SUCCESS:return Object(Q.a)(Object(Q.a)({},e),{},{isFetching:!1,products:t.payload});case J.a.FETCH_PRODUCTS_FAILURE:return Object(Q.a)(Object(Q.a)({},e),{},{isFetching:!1,error:t.payload});default:return e}},K=r(27),X={categories:[],isFetching:!1,errorMessage:void 0},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K.a.FETCH_CATEGORIES_START:return Object(Q.a)(Object(Q.a)({},e),{},{isFetching:!0});case K.a.FETCH_CATEGORIES_SUCCESS:return Object(Q.a)(Object(Q.a)({},e),{},{isFetching:!1,categories:t.payload});case K.a.FETCH_CATEGORIES_FAILURE:return Object(Q.a)(Object(Q.a)({},e),{},{isFetching:!1,error:t.payload});default:return e}},ee=r(19),te=r(12),re={favouriteItems:[]},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee.a.ADD_ITEM_TO_FAVOURITE:return Object(Q.a)(Object(Q.a)({},e),{},{favouriteItems:Object(te.b)(e.favouriteItems,t.payload)});case ee.a.REMOVE_ITEM_FROM_FAVOURITE:return Object(Q.a)(Object(Q.a)({},e),{},{favouriteItems:Object(te.h)(e.favouriteItems,t.payload)});case ee.a.CLEAR_ITEM_FROM_LIST:return Object(Q.a)(Object(Q.a)({},e),{},{favouriteItems:e.favouriteItems.filter((function(e){return e.id!==t.payload.id}))});case ee.a.CLEAR_LIST:return Object(Q.a)(Object(Q.a)({},e),{},{favouriteItems:[]});default:return e}},ce=r(14),ae={cartItems:[]},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce.a.ADD_ITEM_TO_CART:return Object(Q.a)(Object(Q.a)({},e),{},{cartItems:Object(te.a)(e.cartItems,t.payload1,t.payload2)});case ce.a.REMOVE_ITEM_ORDER_FROM_CART:return Object(Q.a)(Object(Q.a)({},e),{},{cartItems:Object(te.i)(e.cartItems,t.payload1,t.payload2)});case ce.a.DECREASE_QUANTITY:return Object(Q.a)(Object(Q.a)({},e),{},{cartItems:Object(te.e)(e.cartItems,t.payload1,t.payload2)});case ce.a.INCREASE_QUANTITY:return Object(Q.a)(Object(Q.a)({},e),{},{cartItems:Object(te.g)(e.cartItems,t.payload1,t.payload2)});case ce.a.CLEAR_ITEM_FROM_CART:return Object(Q.a)(Object(Q.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case ce.a.CLEAR_LIST:return Object(Q.a)(Object(Q.a)({},e),{},{cartItems:[]});default:return e}},ie=r(17),ue={logOutHidden:!0,favouriteHidden:!0,cartHidden:!0,productModalHidden:!0,searchHidden:!0},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie.a.TOOGLE_LOGOUT:return{logOutHidden:!e.logOutHidden,favouriteHidden:!0,cartHidden:!0,productModalHidden:!0,searchHidden:e.searchHidden};case ie.a.TOOGLE_FAVOURITE:return{logOutHidden:!0,favouriteHidden:!e.favouriteHidden,cartHidden:!0,productModalHidden:!0,searchHidden:e.searchHidden};case ie.a.TOOGLE_CART:return{logOutHidden:!0,favouriteHidden:!0,cartHidden:!e.cartHidden,productModalHidden:!0,searchHidden:e.searchHidden};case ie.a.TOOGLE_PRODUCT_MODAL:return{logOutHidden:!0,favouriteHidden:!0,cartHidden:!0,productModalHidden:!e.productModalHidden,searchHidden:e.searchHidden};case ie.a.TOOGLE_SEARCH:return{logOutHidden:!0,favouriteHidden:!0,cartHidden:!0,productModalHidden:!0,searchHidden:!e.searchHidden};default:return e}},de={key:"root",storage:z.a,whitelist:["product","category","favourite","cart"]},le=Object(P.c)({user:B,product:W,category:Z,favourite:ne,cart:oe,toggle:se,multilanguage:Object(V.createMultilanguageReducer)({currentLanguageCode:"fn"})}),Oe=Object(w.a)(de,le),fe=[G.a,N.a];var be=Object(P.d)(Oe,P.a.apply(void 0,fe)),he=Object(w.b)(be);o.a.render(Object(p.jsx)(d.Provider,{store:be,children:Object(p.jsx)(M.a,{persistor:he,children:Object(p.jsx)(x,{})})}),document.getElementById("root")),L()}},[[95,7,8]]]);
//# sourceMappingURL=main.2155974e.chunk.js.map