(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[81],{1258:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var a,r=n(0),o=(a=r)&&a.__esModule?a:{default:a};var i=void 0,l=void 0;"undefined"!==typeof document&&(i=document),"undefined"!==typeof window&&(l=window);var c=t.FrameContext=o.default.createContext({document:i,window:l}),u=c.Provider,s=c.Consumer;t.FrameContextProvider=u,t.FrameContextConsumer=s},1259:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var a=n(14),r=n(135),o=n(1229),i=n(1238),l=n(1220),c=n(1246),u=n(1247),s=n(2),d=n(0),m=n.n(d),f=n(13),p=n(9),h=n(80),b=n(87),y=n(137),v=n(136),x=n(1162),E=n(633),g=n(1217),w=n(1228),j=n(8),O=n(411),M=n(412),C=n(1260),_=n.n(C),D=Object(x.a)({productionPrefix:"iframe-"}),T=function(e){Object(y.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(O.a)(Object(p.a)(Object(p.a)({},Object(E.a)()),{},{plugins:[].concat(Object(f.a)(Object(E.a)().plugins),[Object(M.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),m.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,a=e.theme;return m.a.createElement(_.a,{head:this.renderHead(),ref:this.handleRef,className:Object(s.default)(n.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?m.a.createElement(g.b,{jss:this.state.jss,generateClassName:D,sheetsManager:this.state.sheetsManager},m.a.createElement(w.a,{theme:a},m.a.cloneElement(t,{container:this.state.container}))):null)}}]),n}(m.a.Component),N=Object(j.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(T);function P(e){var t=Object(d.useState)(e.currentTabIndex),n=Object(a.a)(t,2),f=n[0],p=n[1],h=e.component,b=e.raw,y=e.iframe,v=e.className;return m.a.createElement(i.a,{className:Object(s.default)(v,"shadow")},m.a.createElement(o.a,{position:"static",color:"default",className:"shadow-0"},m.a.createElement(u.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:f,onChange:function(e,t){p(t)}},h&&m.a.createElement(c.a,{classes:{root:"min-w-64"},icon:m.a.createElement(l.a,null,"remove_red_eye")}),b&&m.a.createElement(c.a,{classes:{root:"min-w-64"},icon:m.a.createElement(l.a,null,"code")}))),m.a.createElement("div",{className:"flex justify-center max-w-full"},m.a.createElement("div",{className:0===f?"flex flex-1 max-w-full":"hidden"},h&&(y?m.a.createElement(N,null,m.a.createElement(h,null)):m.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},m.a.createElement(h,null)))),m.a.createElement("div",{className:1===f?"flex flex-1":"hidden"},b&&m.a.createElement("div",{className:"flex flex-1"},m.a.createElement(r.a,{component:"pre",className:"language-javascript w-full"},b.default)))))}P.defaultProps={currentTabIndex:0};var k=P},1260:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var a=n(1258);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return a.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return a.FrameContextConsumer}});var r,o=n(1261),i=(r=o)&&r.__esModule?r:{default:r};t.default=i.default},1261:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),i=d(o),l=d(n(20)),c=d(n(4)),u=n(1258),s=d(n(1262));function d(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.handleLoad=function(){a.forceUpdate()},a._isMounted=!1,a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,n=this.props.contentDidUpdate,a=e.defaultView||e.parentView,r=i.default.createElement(s.default,{contentDidMount:t,contentDidUpdate:n},i.default.createElement(u.FrameContextProvider,{value:{document:e,window:a}},i.default.createElement("div",{className:"frame-content"},this.props.children)));e.body.children.length<1&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close());var o=this.getMountTarget();return[l.default.createPortal(this.props.head,this.getDoc().head),l.default.createPortal(r,o)]}},{key:"render",value:function(){var e=this,t=a({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,i.default.createElement("iframe",a({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(o.Component);m.propTypes={style:c.default.object,head:c.default.node,initialContent:c.default.string,mountTarget:c.default.string,contentDidMount:c.default.func,contentDidUpdate:c.default.func,children:c.default.oneOfType([c.default.element,c.default.arrayOf(c.default.element)])},m.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=m},1262:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),o=(i(r),i(n(4)));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var u=function(e){function t(){return l(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return r.Children.only(this.props.children)}}]),t}(r.Component);u.propTypes={children:o.default.element.isRequired,contentDidMount:o.default.func.isRequired,contentDidUpdate:o.default.func.isRequired},t.default=u},2229:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n(0),r=n.n(a),o=n(1167);function i(){return r.a.createElement(o.a,{"aria-label":"empty textarea",placeholder:"Empty"})}},2230:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport TextareaAutosize from '@material-ui/core/TextareaAutosize';\n\nexport default function EmptyTextarea() {\n  return <TextareaAutosize aria-label=\"empty textarea\" placeholder=\"Empty\" />;\n}\n"},2231:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n(0),r=n.n(a),o=n(1167);function i(){return r.a.createElement(o.a,{"aria-label":"minimum height",rowsMin:3,placeholder:"Minimum 3 rows"})}},2232:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport TextareaAutosize from '@material-ui/core/TextareaAutosize';\n\nexport default function MinHeightTextarea() {\n  return <TextareaAutosize aria-label=\"minimum height\" rowsMin={3} placeholder=\"Minimum 3 rows\" />;\n}\n"},2233:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n(0),r=n.n(a),o=n(1167);function i(){return r.a.createElement(o.a,{rowsMax:4,"aria-label":"maximum height",placeholder:"Maximum 4 rows",defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})}},2234:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport TextareaAutosize from \'@material-ui/core/TextareaAutosize\';\n\nexport default function MaxHeightTextarea() {\n  return (\n    <TextareaAutosize\n      rowsMax={4}\n      aria-label="maximum height"\n      placeholder="Maximum 4 rows"\n      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n          ut labore et dolore magna aliqua."\n    />\n  );\n}\n'},2452:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1259),i=(n(135),n(1226)),l=n(1220),c=n(206),u=n(1218),s=Object(u.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){return s(),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex flex-1 flex-grow-0 items-center justify-end"},r.a.createElement(i.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/textarea-autosize",target:"_blank",role:"button"},r.a.createElement(l.a,null,"link"),r.a.createElement("span",{className:"mx-4"},"Reference"))),r.a.createElement(c.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Textarea Autosize"),r.a.createElement(c.a,{className:"description"},"A textarea component for React which grows with content."),r.a.createElement("ul",null,r.a.createElement("li",null,"\ud83d\udce6 ",r.a.createElement("a",{href:"/size-snapshot"},"2.1 kB gzipped"))),r.a.createElement(c.a,{className:"mb-16",component:"div"},"The ",r.a.createElement("code",null,"TextareaAutosize")," component automatically adjust the textarea height on keyboard and window resize events."),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Empty"),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(2229).default,raw:n(2230)})),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Minimum height"),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(2231).default,raw:n(2232)})),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Maximum height"),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(2233).default,raw:n(2234)})))}}}]);