(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[102],{1266:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var r=a(31),n=a(37),c=a(1218),o=a(2),i=a(0),l=a.n(i),s=a(45),u=a(1228),d=a(32),m=a(6);var p=function(e){var t=Object(s.a)(),a=Object(m.d)(Object(d.c)(t.palette.primary.main));return l.a.createElement("div",{className:e.classes.header},e.header&&l.a.createElement(u.a,{theme:a},e.header))},f=a(14),b=a(105),h=a(1250),g=a(1254);var v=function(e){var t=Object(s.a)(),a=Object(m.d)(Object(d.c)(t.palette.primary.main)),r=e.classes;return l.a.createElement(l.a.Fragment,null,e.header&&l.a.createElement(u.a,{theme:a},l.a.createElement("div",{className:Object(o.default)(r.sidebarHeader,e.variant)},e.header)),e.content&&l.a.createElement(n.a,{className:r.sidebarContent,enable:e.innerScroll},e.content))};var x=l.a.forwardRef((function(e,t){var a=Object(i.useState)(!1),r=Object(f.a)(a,2),n=r[0],c=r[1],s=e.classes;Object(i.useImperativeHandle)(t,(function(){return{toggleSidebar:u}}));var u=function(){c(!n)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{lgUp:"permanent"===e.variant},l.a.createElement(g.a,{variant:"temporary",anchor:e.position,open:n,onOpen:function(e){},onClose:function(e){return u()},disableSwipeToOpen:!0,classes:{root:Object(o.default)(s.sidebarWrapper,e.variant),paper:Object(o.default)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:s.backdrop}},style:{position:"absolute"}},l.a.createElement(v,e))),"permanent"===e.variant&&l.a.createElement(h.a,{mdDown:!0},l.a.createElement(b.a,{variant:"permanent",className:Object(o.default)(s.sidebarWrapper,e.variant),open:n,classes:{paper:Object(o.default)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)}},l.a.createElement(v,e))))})),E=Object(c.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:200,background:"linear-gradient(to left, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},contentWrapper:Object(r.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:136,minHeight:136,maxHeight:136,display:"flex",color:e.palette.primary.contrastText},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(r.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(r.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:240,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:200,minHeight:200,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(r.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(r.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),O=l.a.forwardRef((function(e,t){var a=Object(i.useRef)(null),r=Object(i.useRef)(null),c=Object(i.useRef)(null),s=E(e),u=e.rightSidebarHeader||e.rightSidebarContent,d=e.leftSidebarHeader||e.leftSidebarContent;return l.a.useImperativeHandle(t,(function(){return{rootRef:c,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){r.current.toggleSidebar()}}})),l.a.createElement("div",{className:Object(o.default)(s.root,e.innerScroll&&s.innerScroll),ref:c},l.a.createElement("div",{className:s.topBg}),l.a.createElement("div",{className:"flex container w-full"},d&&l.a.createElement(x,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:a,rootRef:c}),l.a.createElement("div",{className:Object(o.default)(s.contentWrapper,d&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",u&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},l.a.createElement(p,{header:e.header,classes:s}),l.a.createElement("div",{className:Object(o.default)(s.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&l.a.createElement("div",{className:s.toolbar},e.contentToolbar),e.content&&l.a.createElement(n.a,{className:s.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),u&&l.a.createElement(x,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:r,rootRef:c})))}));O.defaultProps={};var j=l.a.memo(O)},1298:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return m})),a.d(t,"d",(function(){return b})),a.d(t,"e",(function(){return g}));var r,n=a(31),c=a(28),o=a.n(c),i=a(51),l=a(22),s=a(77),u=a.n(s),d=Object(l.b)("eCommerceApp/orders/getOrders",Object(i.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api/e-commerce-app/orders");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),m=Object(l.b)("eCommerceApp/orders/removeOrders",function(){var e=Object(i.a)(o.a.mark((function e(t,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.dispatch,a.getState,e.next=3,u.a.post("/api/e-commerce-app/remove-orders",{orderIds:t});case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),p=Object(l.c)({}),f=p.getSelectors((function(e){return e.eCommerceApp.orders})),b=f.selectAll,h=(f.selectById,Object(l.d)({name:"eCommerceApp/orders",initialState:p.getInitialState({searchText:""}),reducers:{setOrdersSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}}},extraReducers:(r={},Object(n.a)(r,d.fulfilled,p.setAll),Object(n.a)(r,m.fulfilled,(function(e,t){return p.removeMany(e,t.payload)})),r)})),g=h.actions.setOrdersSearchText;t.a=h.reducer},1299:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return m})),a.d(t,"d",(function(){return b})),a.d(t,"e",(function(){return g}));var r,n=a(31),c=a(28),o=a.n(c),i=a(51),l=a(22),s=a(77),u=a.n(s),d=Object(l.b)("eCommerceApp/products/getProducts",Object(i.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api/e-commerce-app/products");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),m=Object(l.b)("eCommerceApp/products/removeProducts",function(){var e=Object(i.a)(o.a.mark((function e(t,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.dispatch,a.getState,e.next=3,u.a.post("/api/e-commerce-app/remove-products",{productIds:t});case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),p=Object(l.c)({}),f=p.getSelectors((function(e){return e.eCommerceApp.products})),b=f.selectAll,h=(f.selectById,Object(l.d)({name:"eCommerceApp/products",initialState:p.getInitialState({searchText:""}),reducers:{setProductsSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}}},extraReducers:(r={},Object(n.a)(r,d.fulfilled,p.setAll),Object(n.a)(r,m.fulfilled,(function(e,t){return p.removeMany(e,t.payload)})),r)})),g=h.actions.setProductsSearchText;t.a=h.reducer},1315:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"e",(function(){return p})),a.d(t,"c",(function(){return h})),a.d(t,"d",(function(){return g}));var r,n=a(31),c=a(28),o=a.n(c),i=a(51),l=a(22),s=a(77),u=a.n(s),d=a(30),m=Object(l.b)("eCommerceApp/product/getProduct",function(){var e=Object(i.a)(o.a.mark((function e(t){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api/e-commerce-app/product",{params:t});case 2:return a=e.sent,e.next=5,a.data;case 5:return r=e.sent,e.abrupt("return",void 0===r?null:r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=Object(l.b)("eCommerceApp/product/saveProduct",function(){var e=Object(i.a)(o.a.mark((function e(t){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("/api/e-commerce-app/product/save",t);case 2:return a=e.sent,e.next=5,a.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f=Object(l.d)({name:"eCommerceApp/product",initialState:null,reducers:{resetProduct:function(){return null},newProduct:{reducer:function(e,t){return t.payload},prepare:function(e){return{payload:{id:d.a.generateGUID(),name:"",handle:"",description:"",categories:[],tags:[],images:[],priceTaxExcl:0,priceTaxIncl:0,taxRate:0,comparedPrice:0,quantity:0,sku:"",width:"",height:"",depth:"",weight:"",extraShippingFee:0,active:!0}}}}},extraReducers:(r={},Object(n.a)(r,m.fulfilled,(function(e,t){return t.payload})),Object(n.a)(r,p.fulfilled,(function(e,t){return t.payload})),r)}),b=f.actions,h=b.newProduct,g=b.resetProduct;t.a=f.reducer},1316:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return f}));var r,n=a(31),c=a(28),o=a.n(c),i=a(51),l=a(22),s=a(77),u=a.n(s),d=Object(l.b)("eCommerceApp/order/getOrder",function(){var e=Object(i.a)(o.a.mark((function e(t){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api/e-commerce-app/order",{params:t});case 2:return a=e.sent,e.next=5,a.data;case 5:return r=e.sent,e.abrupt("return",void 0===r?null:r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),m=Object(l.b)("eCommerceApp/order/saveOrder",function(){var e=Object(i.a)(o.a.mark((function e(t){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("/api/e-commerce-app/order/save",t);case 2:return a=e.sent,e.next=5,a.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=Object(l.d)({name:"eCommerceApp/order",initialState:null,reducers:{resetOrder:function(){return null}},extraReducers:(r={},Object(n.a)(r,d.fulfilled,(function(e,t){return t.payload})),Object(n.a)(r,m.fulfilled,(function(e,t){return t.payload})),r)}),f=p.actions.resetOrder;t.a=p.reducer},1327:function(e,t,a){"use strict";var r=a(112),n=a(1316),c=a(1298),o=a(1315),i=a(1299),l=Object(r.c)({products:i.a,product:o.a,orders:c.a,order:n.a});t.a=l},2356:function(e,t,a){"use strict";a.r(t);var r=a(13),n=a(9),c=a(14),o=a(115),i=a(433),l=a(432),s=a(1266),u=a(140),d=a(30),m=a(7),p=a(1226),f=a(197),b=a(1220),h=a(1244),g=a(1218),v=a(45),x=a(1246),E=a(1247),O=a(1241),j=a(206),w=a(243),y=a(2),S=a(0),I=a.n(S),C=a(6),N=a(49),k=a(27),P=a(1315),T=a(1327),A=Object(g.a)((function(e){return{productImageFeaturedStar:{position:"absolute",top:0,right:0,color:f.a[400],opacity:0},productImageUpload:{transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut},productImageItem:{transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut,"&:hover":{"& $productImageFeaturedStar":{opacity:.8}},"&.featured":{pointerEvents:"none",boxShadow:e.shadows[3],"& $productImageFeaturedStar":{opacity:1},"&:hover $productImageFeaturedStar":{opacity:1}}}}}));t.default=Object(w.a)("eCommerceApp",T.a)((function(e){var t=Object(C.c)(),a=Object(C.d)((function(e){return e.eCommerceApp.product})),f=Object(v.a)(),g=A(e),w=Object(S.useState)(0),T=Object(c.a)(w,2),F=T[0],R=T[1],W=Object(S.useState)(!1),H=Object(c.a)(W,2),D=H[0],B=H[1],$=Object(u.c)(null),q=$.form,M=$.handleChange,U=$.setForm,V=$.setInForm,z=Object(N.i)();return Object(u.b)((function(){"new"===z.productId?t(Object(P.c)()):t(Object(P.b)(z)).then((function(e){e.payload||B(!0)}))}),[t,z]),Object(S.useEffect)((function(){(a&&!q||a&&q&&a.id!==q.id)&&U(a)}),[q,a,U]),Object(S.useEffect)((function(){return function(){t(Object(P.d)()),B(!1)}}),[t]),D?I.a.createElement(o.a,{delay:100},I.a.createElement("div",{className:"flex flex-col flex-1 items-center justify-center h-full"},I.a.createElement(j.a,{color:"textSecondary",variant:"h5"},"There is no such product!"),I.a.createElement(p.a,{className:"mt-24",component:k.a,variant:"outlined",to:"/apps/e-commerce/products",color:"inherit"},"Go to Products Page"))):(!a||a&&z.productId!==a.id)&&"new"!==z.productId?I.a.createElement(l.a,null):I.a.createElement(s.a,{classes:{toolbar:"p-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:q&&I.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},I.a.createElement("div",{className:"flex flex-col items-start max-w-full"},I.a.createElement(o.a,{animation:"transition.slideRightIn",delay:300},I.a.createElement(j.a,{className:"flex items-center sm:mb-12",component:k.a,role:"button",to:"/apps/e-commerce/products",color:"inherit"},I.a.createElement(b.a,{className:"text-20"},"ltr"===f.direction?"arrow_back":"arrow_forward"),I.a.createElement("span",{className:"mx-4"},"Products"))),I.a.createElement("div",{className:"flex items-center max-w-full"},I.a.createElement(o.a,{animation:"transition.expandIn",delay:300},q.images.length>0&&q.featuredImageId?I.a.createElement("img",{className:"w-32 sm:w-48 rounded",src:m.a.find(q.images,{id:q.featuredImageId}).url,alt:q.name}):I.a.createElement("img",{className:"w-32 sm:w-48 rounded",src:"assets/images/ecommerce/product-image-placeholder.png",alt:q.name})),I.a.createElement("div",{className:"flex flex-col min-w-0 mx-8 sm:mc-16"},I.a.createElement(o.a,{animation:"transition.slideLeftIn",delay:300},I.a.createElement(j.a,{className:"text-16 sm:text-20 truncate"},q.name?q.name:"New Product")),I.a.createElement(o.a,{animation:"transition.slideLeftIn",delay:300},I.a.createElement(j.a,{variant:"caption"},"Product Detail"))))),I.a.createElement(o.a,{animation:"transition.slideRightIn",delay:300},I.a.createElement(p.a,{className:"whitespace-nowrap",variant:"contained",color:"secondary",disabled:!(q.name.length>0&&!m.a.isEqual(a,q)),onClick:function(){return t(Object(P.e)(q))}},"Save"))),contentToolbar:I.a.createElement(E.a,{value:F,onChange:function(e,t){R(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"}},I.a.createElement(x.a,{className:"h-64",label:"Basic Info"}),I.a.createElement(x.a,{className:"h-64",label:"Product Images"}),I.a.createElement(x.a,{className:"h-64",label:"Pricing"}),I.a.createElement(x.a,{className:"h-64",label:"Inventory"}),I.a.createElement(x.a,{className:"h-64",label:"Shipping"})),content:q&&I.a.createElement("div",{className:"p-16 sm:p-24 max-w-2xl"},0===F&&I.a.createElement("div",null,I.a.createElement(O.a,{className:"mt-8 mb-16",error:""===q.name,required:!0,label:"Name",autoFocus:!0,id:"name",name:"name",value:q.name,onChange:M,variant:"outlined",fullWidth:!0}),I.a.createElement(O.a,{className:"mt-8 mb-16",id:"description",name:"description",onChange:M,label:"Description",type:"text",value:q.description,multiline:!0,rows:5,variant:"outlined",fullWidth:!0}),I.a.createElement(i.a,{className:"mt-8 mb-24",value:q.categories.map((function(e){return{value:e,label:e}})),onChange:function(e){return V("categories",e)},placeholder:"Select multiple categories",textFieldProps:{label:"Categories",InputLabelProps:{shrink:!0},variant:"outlined"},isMulti:!0}),I.a.createElement(i.a,{className:"mt-8 mb-16",value:q.tags.map((function(e){return{value:e,label:e}})),onChange:function(e){return V("tags",e)},placeholder:"Select multiple tags",textFieldProps:{label:"Tags",InputLabelProps:{shrink:!0},variant:"outlined"},isMulti:!0})),1===F&&I.a.createElement("div",null,I.a.createElement("div",{className:"flex justify-center sm:justify-start flex-wrap -mx-8"},I.a.createElement("label",{htmlFor:"button-file",className:Object(y.default)(g.productImageUpload,"flex items-center justify-center relative w-128 h-128 rounded-8 mx-8 mb-16 overflow-hidden cursor-pointer shadow hover:shadow-lg")},I.a.createElement("input",{accept:"image/*",className:"hidden",id:"button-file",type:"file",onChange:function(e){var t=e.target.files[0];if(t){var a=new FileReader;a.readAsBinaryString(t),a.onload=function(){U(m.a.set(Object(n.a)({},q),"images",[{id:d.a.generateGUID(),url:"data:".concat(t.type,";base64,").concat(btoa(a.result)),type:"image"}].concat(Object(r.a)(q.images))))},a.onerror=function(){console.log("error on load image")}}}}),I.a.createElement(b.a,{fontSize:"large",color:"action"},"cloud_upload")),q.images.map((function(e){return I.a.createElement("div",{onClick:function(){return V("featuredImageId",e.id)},onKeyDown:function(){return V("featuredImageId",e.id)},role:"button",tabIndex:0,className:Object(y.default)(g.productImageItem,"flex items-center justify-center relative w-128 h-128 rounded-8 mx-8 mb-16 overflow-hidden cursor-pointer outline-none shadow hover:shadow-lg",e.id===q.featuredImageId&&"featured"),key:e.id},I.a.createElement(b.a,{className:g.productImageFeaturedStar},"star"),I.a.createElement("img",{className:"max-w-none w-auto h-full",src:e.url,alt:"product"}))})))),2===F&&I.a.createElement("div",null,I.a.createElement(O.a,{className:"mt-8 mb-16",label:"Tax Excluded Price",id:"priceTaxExcl",name:"priceTaxExcl",value:q.priceTaxExcl,onChange:M,InputProps:{startAdornment:I.a.createElement(h.a,{position:"start"},"$")},type:"number",variant:"outlined",autoFocus:!0,fullWidth:!0}),I.a.createElement(O.a,{className:"mt-8 mb-16",label:"Tax Included Price",id:"priceTaxIncl",name:"priceTaxIncl",value:q.priceTaxIncl,onChange:M,InputProps:{startAdornment:I.a.createElement(h.a,{position:"start"},"$")},type:"number",variant:"outlined",fullWidth:!0}),I.a.createElement(O.a,{className:"mt-8 mb-16",label:"Tax Rate",id:"taxRate",name:"taxRate",value:q.taxRate,onChange:M,InputProps:{startAdornment:I.a.createElement(h.a,{position:"start"},"$")},type:"number",variant:"outlined",fullWidth:!0}),I.a.createElement(O.a,{className:"mt-8 mb-16",label:"Compared Price",id:"comparedPrice",name:"comparedPrice",value:q.comparedPrice,onChange:M,InputProps:{startAdornment:I.a.createElement(h.a,{position:"start"},"$")},type:"number",variant:"outlined",fullWidth:!0,helperText:"Add a compare price to show next to the real price"})),3===F&&I.a.createElement("div",null,I.a.createElement(O.a,{className:"mt-8 mb-16",required:!0,label:"SKU",autoFocus:!0,id:"sku",name:"sku",value:q.sku,onChange:M,variant:"outlined",fullWidth:!0}),I.a.createElement(O.a,{className:"mt-8 mb-16",label:"Quantity",id:"quantity",name:"quantity",value:q.quantity,onChange:M,variant:"outlined",type:"number",fullWidth:!0})),4===F&&I.a.createElement("div",null,I.a.createElement("div",{className:"flex -mx-4"},I.a.createElement(O.a,{className:"mt-8 mb-16 mx-4",label:"Width",autoFocus:!0,id:"width",name:"width",value:q.width,onChange:M,variant:"outlined",fullWidth:!0}),I.a.createElement(O.a,{className:"mt-8 mb-16 mx-4",label:"Height",id:"height",name:"height",value:q.height,onChange:M,variant:"outlined",fullWidth:!0}),I.a.createElement(O.a,{className:"mt-8 mb-16 mx-4",label:"Depth",id:"depth",name:"depth",value:q.depth,onChange:M,variant:"outlined",fullWidth:!0})),I.a.createElement(O.a,{className:"mt-8 mb-16",label:"Weight",id:"weight",name:"weight",value:q.weight,onChange:M,variant:"outlined",fullWidth:!0}),I.a.createElement(O.a,{className:"mt-8 mb-16",label:"Extra Shipping Fee",id:"extraShippingFee",name:"extraShippingFee",value:q.extraShippingFee,onChange:M,variant:"outlined",InputProps:{startAdornment:I.a.createElement(h.a,{position:"start"},"$")},fullWidth:!0}))),innerScroll:!0})}))}}]);