(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[84],{1258:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var r,o=n(0),a=(r=o)&&r.__esModule?r:{default:r};var i=void 0,l=void 0;"undefined"!==typeof document&&(i=document),"undefined"!==typeof window&&(l=window);var c=t.FrameContext=a.default.createContext({document:i,window:l}),s=c.Provider,u=c.Consumer;t.FrameContextProvider=s,t.FrameContextConsumer=u},1259:function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var r=n(14),o=n(135),a=n(1229),i=n(1238),l=n(1220),c=n(1246),s=n(1247),u=n(2),p=n(0),d=n.n(p),f=n(13),m=n(9),h=n(80),y=n(87),b=n(137),v=n(136),g=n(1162),E=n(633),x=n(1217),j=n(1228),w=n(8),O=n(411),C=n(412),N=n(1260),S=n.n(N),P=Object(g.a)({productionPrefix:"iframe-"}),_=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(O.a)(Object(m.a)(Object(m.a)({},Object(E.a)()),{},{plugins:[].concat(Object(f.a)(Object(E.a)().plugins),[Object(C.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),d.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(y.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,r=e.theme;return d.a.createElement(S.a,{head:this.renderHead(),ref:this.handleRef,className:Object(u.default)(n.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?d.a.createElement(x.b,{jss:this.state.jss,generateClassName:P,sheetsManager:this.state.sheetsManager},d.a.createElement(j.a,{theme:r},d.a.cloneElement(t,{container:this.state.container}))):null)}}]),n}(d.a.Component),D=Object(w.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(_);function T(e){var t=Object(p.useState)(e.currentTabIndex),n=Object(r.a)(t,2),f=n[0],m=n[1],h=e.component,y=e.raw,b=e.iframe,v=e.className;return d.a.createElement(i.a,{className:Object(u.default)(v,"shadow")},d.a.createElement(a.a,{position:"static",color:"default",className:"shadow-0"},d.a.createElement(s.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:f,onChange:function(e,t){m(t)}},h&&d.a.createElement(c.a,{classes:{root:"min-w-64"},icon:d.a.createElement(l.a,null,"remove_red_eye")}),y&&d.a.createElement(c.a,{classes:{root:"min-w-64"},icon:d.a.createElement(l.a,null,"code")}))),d.a.createElement("div",{className:"flex justify-center max-w-full"},d.a.createElement("div",{className:0===f?"flex flex-1 max-w-full":"hidden"},h&&(b?d.a.createElement(D,null,d.a.createElement(h,null)):d.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},d.a.createElement(h,null)))),d.a.createElement("div",{className:1===f?"flex flex-1":"hidden"},y&&d.a.createElement("div",{className:"flex flex-1"},d.a.createElement(o.a,{component:"pre",className:"language-javascript w-full"},y.default)))))}T.defaultProps={currentTabIndex:0};var M=T},1260:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var r=n(1258);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return r.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return r.FrameContextConsumer}});var o,a=n(1261),i=(o=a)&&o.__esModule?o:{default:o};t.default=i.default},1261:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=p(a),l=p(n(20)),c=p(n(4)),s=n(1258),u=p(n(1262));function p(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.handleLoad=function(){r.forceUpdate()},r._isMounted=!1,r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,n=this.props.contentDidUpdate,r=e.defaultView||e.parentView,o=i.default.createElement(u.default,{contentDidMount:t,contentDidUpdate:n},i.default.createElement(s.FrameContextProvider,{value:{document:e,window:r}},i.default.createElement("div",{className:"frame-content"},this.props.children)));e.body.children.length<1&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close());var a=this.getMountTarget();return[l.default.createPortal(this.props.head,this.getDoc().head),l.default.createPortal(o,a)]}},{key:"render",value:function(){var e=this,t=r({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,i.default.createElement("iframe",r({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(a.Component);d.propTypes={style:c.default.object,head:c.default.node,initialContent:c.default.string,mountTarget:c.default.string,contentDidMount:c.default.func,contentDidUpdate:c.default.func,children:c.default.oneOfType([c.default.element,c.default.arrayOf(c.default.element)])},d.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=d},1262:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=(i(o),i(n(4)));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s=function(e){function t(){return l(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return o.Children.only(this.props.children)}}]),t}(o.Component);s.propTypes={children:a.default.element.isRequired,contentDidMount:a.default.func.isRequired,contentDidUpdate:a.default.func.isRequired},t.default=s},1383:function(e,t,n){"use strict";var r=n(83),o=n(1),a=(n(4),n(245));var i=function(e){var t=function(t){var n=e(t);return t.css?Object(o.a)({},Object(a.a)(n,e(Object(o.a)({theme:t.theme},t.css))),function(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}(t.css,[e.filterProps])):n};return t.propTypes={},t.filterProps=["css"].concat(Object(r.a)(e.filterProps)),t};var l=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=function(e){return t.reduce((function(t,n){var r=n(e);return r?Object(a.a)(t,r):t}),{})};return r.propTypes={},r.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),r},c=n(11),s=n(424);function u(e,t){return t&&"string"===typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var p=function(e){var t=e.prop,n=e.cssProperty,r=void 0===n?e.prop:n,o=e.themeKey,a=e.transform,i=function(e){if(null==e[t])return null;var n=e[t],i=u(e.theme,o)||{};return Object(s.a)(e,n,(function(e){var t;return"function"===typeof i?t=i(e):Array.isArray(i)?t=i[e]||e:(t=u(i,e)||e,a&&(t=a(t))),!1===r?t:Object(c.a)({},r,t)}))};return i.propTypes={},i.filterProps=[t],i};function d(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var f=l(p({prop:"border",themeKey:"borders",transform:d}),p({prop:"borderTop",themeKey:"borders",transform:d}),p({prop:"borderRight",themeKey:"borders",transform:d}),p({prop:"borderBottom",themeKey:"borders",transform:d}),p({prop:"borderLeft",themeKey:"borders",transform:d}),p({prop:"borderColor",themeKey:"palette"}),p({prop:"borderRadius",themeKey:"shape"})),m=l(p({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),p({prop:"display"}),p({prop:"overflow"}),p({prop:"textOverflow"}),p({prop:"visibility"}),p({prop:"whiteSpace"})),h=l(p({prop:"flexBasis"}),p({prop:"flexDirection"}),p({prop:"flexWrap"}),p({prop:"justifyContent"}),p({prop:"alignItems"}),p({prop:"alignContent"}),p({prop:"order"}),p({prop:"flex"}),p({prop:"flexGrow"}),p({prop:"flexShrink"}),p({prop:"alignSelf"}),p({prop:"justifyItems"}),p({prop:"justifySelf"})),y=l(p({prop:"gridGap"}),p({prop:"gridColumnGap"}),p({prop:"gridRowGap"}),p({prop:"gridColumn"}),p({prop:"gridRow"}),p({prop:"gridAutoFlow"}),p({prop:"gridAutoColumns"}),p({prop:"gridAutoRows"}),p({prop:"gridTemplateColumns"}),p({prop:"gridTemplateRows"}),p({prop:"gridTemplateAreas"}),p({prop:"gridArea"})),b=l(p({prop:"position"}),p({prop:"zIndex",themeKey:"zIndex"}),p({prop:"top"}),p({prop:"right"}),p({prop:"bottom"}),p({prop:"left"})),v=l(p({prop:"color",themeKey:"palette"}),p({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),g=p({prop:"boxShadow",themeKey:"shadows"});function E(e){return e<=1?"".concat(100*e,"%"):e}var x=p({prop:"width",transform:E}),j=p({prop:"maxWidth",transform:E}),w=p({prop:"minWidth",transform:E}),O=p({prop:"height",transform:E}),C=p({prop:"maxHeight",transform:E}),N=p({prop:"minHeight",transform:E}),S=(p({prop:"size",cssProperty:"width",transform:E}),p({prop:"size",cssProperty:"height",transform:E}),l(x,j,w,O,C,N,p({prop:"boxSizing"}))),P=n(1252),_=l(p({prop:"fontFamily",themeKey:"typography"}),p({prop:"fontSize",themeKey:"typography"}),p({prop:"fontStyle",themeKey:"typography"}),p({prop:"fontWeight",themeKey:"typography"}),p({prop:"letterSpacing"}),p({prop:"lineHeight"}),p({prop:"textAlign"})),D=n(5),T=n(0),M=n.n(T),R=n(2),k=n(128),F=n.n(k),A=n(1181);function K(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}var U=n(176),I=function(e){var t=function(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.name,a=Object(D.a)(n,["name"]);var i,l=r,c="function"===typeof t?function(e){return{root:function(n){return t(Object(o.a)({theme:e},n))}}}:{root:t},s=Object(A.a)(c,Object(o.a)({Component:e,name:r||e.displayName,classNamePrefix:l},a));t.filterProps&&(i=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var u=M.a.forwardRef((function(t,n){var r=t.children,a=t.className,l=t.clone,c=t.component,u=Object(D.a)(t,["children","className","clone","component"]),p=s(t),d=Object(R.default)(p.root,a),f=u;if(i&&(f=K(f,i)),l)return M.a.cloneElement(r,Object(o.a)({className:Object(R.default)(r.props.className,d)},f));if("function"===typeof r)return r(Object(o.a)({className:d},f));var m=c||e;return M.a.createElement(m,Object(o.a)({ref:n,className:d},f),r)}));return F()(u,e),u}}(e);return function(e,n){return t(e,Object(o.a)({defaultTheme:U.a},n))}},B=i(l(f,m,h,y,b,v,g,S,P.b,_)),L=I("div")(B,{name:"MuiBox"});t.a=L},1939:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n(0),o=n.n(r),a=n(1240),i=n(1383);function l(){return o.a.createElement("div",null,o.a.createElement(i.a,{p:2,bgcolor:"primary.main",color:"primary.contrastText"},"Server and Client"),o.a.createElement(a.a,null,o.a.createElement(i.a,{p:2,bgcolor:"secondary.main",color:"primary.contrastText"},"Client only")))}},1940:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport NoSsr from \'@material-ui/core/NoSsr\';\nimport Box from \'@material-ui/core/Box\';\n\nexport default function SimpleNoSsr() {\n  return (\n    <div>\n      <Box p={2} bgcolor="primary.main" color="primary.contrastText">\n        Server and Client\n      </Box>\n      <NoSsr>\n        <Box p={2} bgcolor="secondary.main" color="primary.contrastText">\n          Client only\n        </Box>\n      </NoSsr>\n    </div>\n  );\n}\n'},1941:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n(14),o=n(0),a=n.n(o),i=n(1218),l=n(1240),c=Object(i.a)({container:{width:300,display:"flex",flexWrap:"wrap"}});function s(){return Array.from(new Array(5e3)).map((function(e,t){return a.a.createElement("span",{key:t},".")}))}function u(){var e=c(),t=a.a.useState({open:!1,defer:!1}),n=Object(r.a)(t,2),o=n[0],i=n[1];return a.a.createElement("div",null,a.a.createElement("button",{type:"button",onClick:function(){return i({open:!o.open,defer:!1})}},'Render NoSsr defer="false"'),a.a.createElement("br",null),a.a.createElement("button",{type:"button",onClick:function(){return i({open:!o.open,defer:!0})}},'Render NoSsr defer="true"'),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("div",{className:e.container},o.open?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,"Outside NoSsr"),a.a.createElement(l.a,{defer:o.defer},".....Inside NoSsr",a.a.createElement(s,null))):null))}},1942:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport NoSsr from '@material-ui/core/NoSsr';\n\nconst useStyles = makeStyles({\n  container: {\n    width: 300,\n    display: 'flex',\n    flexWrap: 'wrap',\n  },\n});\n\nfunction LargeTree() {\n  return Array.from(new Array(5000)).map((_, index) => <span key={index}>.</span>);\n}\n\nexport default function FrameDeferring() {\n  const classes = useStyles();\n  const [state, setState] = React.useState({ open: false, defer: false });\n\n  return (\n    <div>\n      <button\n        type=\"button\"\n        onClick={() =>\n          setState({\n            open: !state.open,\n            defer: false,\n          })\n        }\n      >\n        {'Render NoSsr defer=\"false\"'}\n      </button>\n      <br />\n      <button\n        type=\"button\"\n        onClick={() =>\n          setState({\n            open: !state.open,\n            defer: true,\n          })\n        }\n      >\n        {'Render NoSsr defer=\"true\"'}\n      </button>\n      <br />\n      <br />\n      <div className={classes.container}>\n        {state.open ? (\n          <React.Fragment>\n            <div>Outside NoSsr</div>\n            <NoSsr defer={state.defer}>\n              .....Inside NoSsr\n              <LargeTree />\n            </NoSsr>\n          </React.Fragment>\n        ) : null}\n      </div>\n    </div>\n  );\n}\n"},2426:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(1259),i=(n(135),n(1226)),l=n(1220),c=n(206),s=n(1218),u=Object(s.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){return u(),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"flex flex-1 flex-grow-0 items-center justify-end"},o.a.createElement(i.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/no-ssr",target:"_blank",role:"button"},o.a.createElement(l.a,null,"link"),o.a.createElement("span",{className:"mx-4"},"Reference"))),o.a.createElement(c.a,{className:"text-44 mt-32 mb-8",component:"h1"},"No SSR"),o.a.createElement(c.a,{className:"description"},"NoSsr purposely removes components from the subject of Server Side Rendering (SSR)."),o.a.createElement(c.a,{className:"mb-16",component:"div"},"This component can be useful in a variety of situations:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Escape hatch for broken dependencies not supporting SSR."),o.a.createElement("li",null,"Improve the time-to-first paint on the client by only rendering above the fold."),o.a.createElement("li",null,"Reduce the rendering time on the server."),o.a.createElement("li",null,"Under too heavy server load, you can turn on service degradation."),o.a.createElement("li",null,"Improve the time-to-interactive by only rendering what's important (with the ",o.a.createElement("code",null,"defer")," property).")),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Client side deferring"),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(a.a,{className:"my-24",iframe:!1,component:n(1939).default,raw:n(1940)})),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Frame deferring"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"In it's core, the NoSsr component purpose is to ",o.a.createElement("strong",null,"defer rendering"),". As it's illustrated in the previous demo, you can use it to defer the rendering from the server to the client."),o.a.createElement(c.a,{className:"mb-16",component:"div"},"But you can also use it to defer the rendering within the client itself. You can ",o.a.createElement("strong",null,"wait a screen frame")," with the ",o.a.createElement("code",null,"defer")," property to render the children. React does ",o.a.createElement("a",{href:"https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects"},"2 commits")," instead of 1."),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(a.a,{className:"my-24",iframe:!1,component:n(1941).default,raw:n(1942)})))}}}]);