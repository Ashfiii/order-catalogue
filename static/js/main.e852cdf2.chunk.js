(this["webpackJsonporder-catalogue"]=this["webpackJsonporder-catalogue"]||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},54:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(17),i=c.n(r),s=(c(38),c(14)),j=(c(39),c(29)),o=c.n(j),l=c(30),d=c.n(l),h=c(12),u=(c(40),c(6)),b=c(1);var O=function(e){var t=Object(a.useState)(""),c=Object(s.a)(t,2),n=c[0],r=c[1],i=Object(u.c)((function(e){return e.carts.cartData})),j=Object(u.c)((function(e){return e.jsonInfo.jsonData}));return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("div",{className:"header__logo",children:Object(b.jsx)(h.b,{to:"/",children:"LOGO"})}),Object(b.jsxs)("div",{className:"header__search",children:[Object(b.jsx)("input",{className:"header__searchInput",type:"text",placeholder:"Search here...",onChange:function(t){return function(t){r(t.target.value);var c=j.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}));e(c,n)}(t)}}),Object(b.jsx)(o.a,{className:"header__searchIcon"})]}),Object(b.jsx)(h.b,{to:"/checkout",children:Object(b.jsxs)("div",{className:"header__optionBasket",children:[Object(b.jsx)(d.a,{}),Object(b.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:i.length})]})})]})},p=c(3);c(48),c(49);var x=function(e){var t=e.id,c=e.title,a=e.price,n=e.image,r=e.category,i=Object(u.b)();return Object(b.jsxs)("div",{className:"product",children:[Object(b.jsxs)("div",{className:"product__info",children:[Object(b.jsx)("p",{children:c}),Object(b.jsxs)("p",{className:"product__price",children:["Rs ",Object(b.jsx)("strong",{children:a})]}),Object(b.jsx)("p",{className:"product__category",children:r})]}),Object(b.jsx)("img",{src:n,alt:"ProductImage"}),Object(b.jsx)("button",{onClick:function(){i({type:"ADD_TO_CART",item:{id:t,title:c,price:a,image:n,category:r}})},children:"Add to Cart"})]})};var m=function(e){var t=e.searchData,c=Object(a.useState)(""),n=Object(s.a)(c,2),r=n[0],i=n[1],j=t.filter((function(e){return e.group.category===r}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"dropdown",children:Object(b.jsxs)("select",{value:r,onChange:function(e){i(e.target.value)},children:[Object(b.jsx)("option",{children:"Clothing"}),Object(b.jsx)("option",{children:"Food and Beverages"}),Object(b.jsx)("option",{children:"Electronics"})]})}),Object(b.jsx)("div",{className:"home",children:Object(b.jsx)("div",{className:"home__row",children:j.length>0?j.map((function(e){return Object(b.jsx)(x,{id:e.id,title:e.title,price:e.price,image:e.image,category:e.group.category})})):t.map((function(e){return Object(b.jsx)(x,{id:e.id,title:e.title,price:e.price,image:e.image,category:e.group.category})}))})})]})};c(50),c(51);var f=function(e){var t=e.id,c=e.image,a=e.title,n=e.price,r=Object(u.b)();return Object(b.jsxs)("div",{className:"checkoutProduct",children:[Object(b.jsx)("img",{className:"checkoutProduct__image",src:c,alt:"CheckoutImage"}),Object(b.jsxs)("div",{className:"checkoutProduct__info",children:[Object(b.jsx)("p",{className:"checkoutProduct__title",children:a}),Object(b.jsxs)("p",{className:"checkoutProduct__price",children:[Object(b.jsx)("small",{children:"\u20b9"}),Object(b.jsx)("strong",{children:n})]}),Object(b.jsx)("button",{onClick:function(){r({type:"REMOVE_FROM_CART",id:t})},children:"Remove"})]})]})},v=c(22),g=c(13),_={cartData:[],jsonData:[]},N=function(e){var t;for(t=0;t<e.length;t++)parseInt(e[t].price)};var D=function(){var e=Object(p.f)(),t=Object(u.c)((function(e){return e.carts.cartData}));return Object(b.jsxs)("div",{className:"checkout",children:[Object(b.jsx)("h2",{className:"checkout__title",children:"Shopping Cart"}),Object(b.jsxs)("div",{className:"checkout__total",children:[Object(b.jsx)("p",{children:Object(b.jsxs)("strong",{children:["Subtotal (",t.length," items): ",N(t)]})}),0===t.length?Object(b.jsx)("button",{className:"hideButton"}):Object(b.jsx)("button",{onClick:function(t){return e.push("/payment")},children:"Proceed to Checkout"})]}),Object(b.jsx)("div",{className:"checkout__info",children:Object(b.jsx)("div",{children:0===t.length?Object(b.jsx)("h2",{className:"checkout__header",children:"No Items in the Cart"}):t.map((function(e){return Object(b.jsx)(f,{id:e.id,title:e.title,price:e.price,image:e.image})}))})})]})};c(52);var y=function(){var e=Object(u.c)((function(e){return e.carts.cartData}));return Object(b.jsxs)("div",{className:"payment",children:[Object(b.jsx)("h1",{children:Object(b.jsxs)(h.b,{to:"/checkout",children:["Checkout (",null===e||void 0===e?void 0:e.length,") items"]})}),Object(b.jsxs)("div",{className:"payment__container",children:[Object(b.jsxs)("div",{className:"payment__section",children:[Object(b.jsx)("div",{className:"payment__title",children:Object(b.jsx)("h3",{children:"Review Items and Delivery"})}),Object(b.jsx)("div",{className:"payment__items",children:e.map((function(e){return Object(b.jsx)(f,{id:e.id,title:e.title,price:e.price,image:e.image,rating:e.rating})}))})]}),Object(b.jsx)("div",{className:"button__container",children:0===e.length?Object(b.jsx)("button",{className:"hideButton"}):Object(b.jsx)("button",{children:Object(b.jsx)(h.b,{to:"/orderconfirm",children:"Place Order"})})})]})]})};var k=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Payment Successful"})})};var C=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)([]),i=Object(s.a)(r,2),j=i[0],o=i[1],l=Object(a.useState)(""),d=Object(s.a)(l,2),x=d[0],f=d[1];console.log("app.js",c),u.b,Object(a.useEffect)((function(){fetch("product.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){n(e)}))}),[]);var v=function(e,t){o(e),f(t)};return Object(b.jsx)("div",{className:"app",children:Object(b.jsx)(h.a,{children:Object(b.jsxs)(p.c,{children:[Object(b.jsxs)(p.a,{path:"/checkout",children:[Object(b.jsx)(O,{filterSearch:v}),Object(b.jsx)(D,{})]}),Object(b.jsxs)(p.a,{path:"/payment",children:[Object(b.jsx)(O,{filterSearch:v}),Object(b.jsx)(y,{})]}),Object(b.jsx)(p.a,{path:"/orderconfirm",children:Object(b.jsx)(k,{})}),Object(b.jsxs)(p.a,{exact:!0,path:"/",children:[Object(b.jsx)(O,{filterSearch:v}),Object(b.jsx)(m,{searchData:0===x.length?c:j})]})]})})})},S=c(18),A=c(31),w=c(32),I=Object(S.combineReducers)({carts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DATA":return Object(g.a)(Object(g.a)({},e),{},{jsonData:t.payload});case"ADD_TO_CART":return console.log(t),Object(g.a)(Object(g.a)({},e),{},{cartData:[].concat(Object(v.a)(e.cartData),[t.item])});case"REMOVE_FROM_CART":var c=e.cartData.findIndex((function(e){return e.id===t.id})),a=Object(v.a)(e.cartData);return c>=0?a.splice(c,1):console.warn("Cannot remove product as (id: ".concat(t.id,") is not in cartData")),Object(g.a)(Object(g.a)({},e),{},{cartData:a});default:return e}},jsonInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DATA":return Object(g.a)(Object(g.a)({},e),{},{jsonData:[].concat(Object(v.a)(e.jsonData),[t.dataItems])});default:return e}}}),R=Object(S.createStore)(I,{},Object(w.composeWithDevTools)(Object(S.applyMiddleware)(A.a)));i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(u.a,{store:R,children:Object(b.jsx)(C,{})})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.e852cdf2.chunk.js.map