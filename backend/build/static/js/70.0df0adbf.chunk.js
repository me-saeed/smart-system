(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[70],{1184:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return r.a})),n.d(t,"createChainedFunction",(function(){return o.a})),n.d(t,"createSvgIcon",(function(){return i.a})),n.d(t,"debounce",(function(){return a.a})),n.d(t,"deprecatedPropType",(function(){return c})),n.d(t,"isMuiElement",(function(){return u.a})),n.d(t,"ownerDocument",(function(){return s.a})),n.d(t,"ownerWindow",(function(){return l.a})),n.d(t,"requirePropFactory",(function(){return d.a})),n.d(t,"setRef",(function(){return f.a})),n.d(t,"unsupportedProp",(function(){return p.a})),n.d(t,"useControlled",(function(){return v.a})),n.d(t,"useEventCallback",(function(){return m.a})),n.d(t,"useForkRef",(function(){return h.a})),n.d(t,"unstable_useId",(function(){return b.a})),n.d(t,"useIsFocusVisible",(function(){return y.a}));var r=n(10),o=n(88),i=n(63),a=n(107);function c(e,t){return function(){return null}}var u=n(167),s=n(58),l=n(168),d=n(1263),f=n(98),p=n(637),v=n(139),m=n(57),h=n(24),b=n(239),y=n(238)},1256:function(e,t,n){var r=n(413);function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var c=i?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(n,a,c):n[a]=e[a]}return n.default=e,t&&t.set(e,n),n}},1257:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(1184)},1258:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var r,o=n(0),i=(r=o)&&r.__esModule?r:{default:r};var a=void 0,c=void 0;"undefined"!==typeof document&&(a=document),"undefined"!==typeof window&&(c=window);var u=t.FrameContext=i.default.createContext({document:a,window:c}),s=u.Provider,l=u.Consumer;t.FrameContextProvider=s,t.FrameContextConsumer=l},1260:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var r=n(1258);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return r.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return r.FrameContextConsumer}});var o,i=n(1261),a=(o=i)&&o.__esModule?o:{default:o};t.default=a.default},1261:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=d(i),c=d(n(20)),u=d(n(4)),s=n(1258),l=d(n(1262));function d(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.handleLoad=function(){r.forceUpdate()},r._isMounted=!1,r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,n=this.props.contentDidUpdate,r=e.defaultView||e.parentView,o=a.default.createElement(l.default,{contentDidMount:t,contentDidUpdate:n},a.default.createElement(s.FrameContextProvider,{value:{document:e,window:r}},a.default.createElement("div",{className:"frame-content"},this.props.children)));e.body.children.length<1&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close());var i=this.getMountTarget();return[c.default.createPortal(this.props.head,this.getDoc().head),c.default.createPortal(o,i)]}},{key:"render",value:function(){var e=this,t=r({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,a.default.createElement("iframe",r({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(i.Component);f.propTypes={style:u.default.object,head:u.default.node,initialContent:u.default.string,mountTarget:u.default.string,contentDidMount:u.default.func,contentDidUpdate:u.default.func,children:u.default.oneOfType([u.default.element,u.default.arrayOf(u.default.element)])},f.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=f},1262:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),i=(a(o),a(n(4)));function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s=function(e){function t(){return c(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return o.Children.only(this.props.children)}}]),t}(o.Component);s.propTypes={children:i.default.element.isRequired,contentDidMount:i.default.func.isRequired,contentDidUpdate:i.default.func.isRequired},t.default=s},1263:function(e,t,n){"use strict";function r(e){return function(){return null}}n.d(t,"a",(function(){return r}))},1286:function(e,t,n){"use strict";var r=n(5),o=n(1),i=n(0),a=(n(4),n(2)),c=n(8),u=[0,1,2,3,4,5,6,7,8,9,10],s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var d=i.forwardRef((function(e,t){var n=e.alignContent,c=void 0===n?"stretch":n,u=e.alignItems,s=void 0===u?"stretch":u,l=e.classes,d=e.className,f=e.component,p=void 0===f?"div":f,v=e.container,m=void 0!==v&&v,h=e.direction,b=void 0===h?"row":h,y=e.item,g=void 0!==y&&y,x=e.justify,w=void 0===x?"flex-start":x,j=e.lg,O=void 0!==j&&j,C=e.md,_=void 0!==C&&C,M=e.sm,E=void 0!==M&&M,P=e.spacing,D=void 0===P?0:P,S=e.wrap,k=void 0===S?"wrap":S,F=e.xl,T=void 0!==F&&F,W=e.xs,R=void 0!==W&&W,U=e.zeroMinWidth,z=void 0!==U&&U,I=Object(r.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),V=Object(a.default)(l.root,d,m&&[l.container,0!==D&&l["spacing-xs-".concat(String(D))]],g&&l.item,z&&l.zeroMinWidth,"row"!==b&&l["direction-xs-".concat(String(b))],"wrap"!==k&&l["wrap-xs-".concat(String(k))],"stretch"!==s&&l["align-items-xs-".concat(String(s))],"stretch"!==c&&l["align-content-xs-".concat(String(c))],"flex-start"!==w&&l["justify-xs-".concat(String(w))],!1!==R&&l["grid-xs-".concat(String(R))],!1!==E&&l["grid-sm-".concat(String(E))],!1!==_&&l["grid-md-".concat(String(_))],!1!==O&&l["grid-lg-".concat(String(O))],!1!==T&&l["grid-xl-".concat(String(T))]);return i.createElement(p,Object(o.a)({className:V,ref:t},I))})),f=Object(c.a)((function(e){return Object(o.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return u.forEach((function(r){var o=e.spacing(r);0!==o&&(n["spacing-".concat(t,"-").concat(r)]={margin:"-".concat(l(o,2)),width:"calc(100% + ".concat(l(o),")"),"& > $item":{padding:l(o,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var r={};s.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var o="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:o,flexGrow:0,maxWidth:o}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(o.a)(e,r):e[t.breakpoints.up(n)]=r}(t,e,n),t}),{}))}),{name:"MuiGrid"})(d);t.a=f},1289:function(e,t,n){"use strict";var r=n(634),o=n(1256);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(0)),a=(0,r(n(1257)).default)(i.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=a},1306:function(e,t,n){"use strict";var r=n(634),o=n(1256);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(0)),a=(0,r(n(1257)).default)(i.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=a},1406:function(e,t,n){"use strict";var r=n(1),o=n(67),i=n(5),a=n(0),c=(n(4),n(306)),u=n(59),s=n(45),l=n(74),d=n(24),f={entering:{transform:"none"},entered:{transform:"none"}},p={enter:u.b.enteringScreen,exit:u.b.leavingScreen},v=a.forwardRef((function(e,t){var n=e.children,u=e.disableStrictModeCompat,v=void 0!==u&&u,m=e.in,h=e.onEnter,b=e.onEntered,y=e.onEntering,g=e.onExit,x=e.onExited,w=e.onExiting,j=e.style,O=e.timeout,C=void 0===O?p:O,_=e.TransitionComponent,M=void 0===_?c.a:_,E=Object(i.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),P=Object(s.a)(),D=P.unstable_strictMode&&!v,S=a.useRef(null),k=Object(d.a)(n.ref,t),F=Object(d.a)(D?S:void 0,k),T=function(e){return function(t,n){if(e){var r=D?[S.current,t]:[t,n],i=Object(o.a)(r,2),a=i[0],c=i[1];void 0===c?e(a):e(a,c)}}},W=T(y),R=T((function(e,t){Object(l.b)(e);var n=Object(l.a)({style:j,timeout:C},{mode:"enter"});e.style.webkitTransition=P.transitions.create("transform",n),e.style.transition=P.transitions.create("transform",n),h&&h(e,t)})),U=T(b),z=T(w),I=T((function(e){var t=Object(l.a)({style:j,timeout:C},{mode:"exit"});e.style.webkitTransition=P.transitions.create("transform",t),e.style.transition=P.transitions.create("transform",t),g&&g(e)})),V=T(x);return a.createElement(M,Object(r.a)({appear:!0,in:m,nodeRef:D?S:void 0,onEnter:R,onEntered:U,onEntering:W,onExit:I,onExited:V,onExiting:z,timeout:C},E),(function(e,t){return a.cloneElement(n,Object(r.a)({style:Object(r.a)({transform:"scale(0)",visibility:"exited"!==e||m?void 0:"hidden"},f[e],j,n.props.style),ref:F},t))}))}));t.a=v},637:function(e,t,n){"use strict";function r(e,t,n,r,o){return null}n.d(t,"a",(function(){return r}))}}]);