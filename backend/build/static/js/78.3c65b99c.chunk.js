(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[78],{1258:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var a,o=n(0),r=(a=o)&&a.__esModule?a:{default:a};var l=void 0,i=void 0;"undefined"!==typeof document&&(l=document),"undefined"!==typeof window&&(i=window);var c=t.FrameContext=r.default.createContext({document:l,window:i}),s=c.Provider,u=c.Consumer;t.FrameContextProvider=s,t.FrameContextConsumer=u},1259:function(e,t,n){"use strict";n.d(t,"a",(function(){return A}));var a=n(14),o=n(135),r=n(1229),l=n(1238),i=n(1220),c=n(1246),s=n(1247),u=n(2),d=n(0),m=n.n(d),p=n(13),f=n(9),h=n(80),y=n(87),b=n(137),v=n(136),w=n(1162),k=n(633),C=n(1217),g=n(1228),E=n(8),O=n(411),x=n(412),j=n(1260),N=n.n(j),_=Object(w.a)({productionPrefix:"iframe-"}),D=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(O.a)(Object(f.a)(Object(f.a)({},Object(k.a)()),{},{plugins:[].concat(Object(p.a)(Object(k.a)().plugins),[Object(x.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),m.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(y.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,a=e.theme;return m.a.createElement(N.a,{head:this.renderHead(),ref:this.handleRef,className:Object(u.default)(n.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?m.a.createElement(C.b,{jss:this.state.jss,generateClassName:_,sheetsManager:this.state.sheetsManager},m.a.createElement(g.a,{theme:a},m.a.cloneElement(t,{container:this.state.container}))):null)}}]),n}(m.a.Component),M=Object(E.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(D);function P(e){var t=Object(d.useState)(e.currentTabIndex),n=Object(a.a)(t,2),p=n[0],f=n[1],h=e.component,y=e.raw,b=e.iframe,v=e.className;return m.a.createElement(l.a,{className:Object(u.default)(v,"shadow")},m.a.createElement(r.a,{position:"static",color:"default",className:"shadow-0"},m.a.createElement(s.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:p,onChange:function(e,t){f(t)}},h&&m.a.createElement(c.a,{classes:{root:"min-w-64"},icon:m.a.createElement(i.a,null,"remove_red_eye")}),y&&m.a.createElement(c.a,{classes:{root:"min-w-64"},icon:m.a.createElement(i.a,null,"code")}))),m.a.createElement("div",{className:"flex justify-center max-w-full"},m.a.createElement("div",{className:0===p?"flex flex-1 max-w-full":"hidden"},h&&(b?m.a.createElement(M,null,m.a.createElement(h,null)):m.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},m.a.createElement(h,null)))),m.a.createElement("div",{className:1===p?"flex flex-1":"hidden"},y&&m.a.createElement("div",{className:"flex flex-1"},m.a.createElement(o.a,{component:"pre",className:"language-javascript w-full"},y.default)))))}P.defaultProps={currentTabIndex:0};var A=P},1260:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var a=n(1258);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return a.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return a.FrameContextConsumer}});var o,r=n(1261),l=(o=r)&&o.__esModule?o:{default:o};t.default=l.default},1261:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),l=d(r),i=d(n(20)),c=d(n(4)),s=n(1258),u=d(n(1262));function d(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.handleLoad=function(){a.forceUpdate()},a._isMounted=!1,a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,n=this.props.contentDidUpdate,a=e.defaultView||e.parentView,o=l.default.createElement(u.default,{contentDidMount:t,contentDidUpdate:n},l.default.createElement(s.FrameContextProvider,{value:{document:e,window:a}},l.default.createElement("div",{className:"frame-content"},this.props.children)));e.body.children.length<1&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close());var r=this.getMountTarget();return[i.default.createPortal(this.props.head,this.getDoc().head),i.default.createPortal(o,r)]}},{key:"render",value:function(){var e=this,t=a({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,l.default.createElement("iframe",a({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(r.Component);m.propTypes={style:c.default.object,head:c.default.node,initialContent:c.default.string,mountTarget:c.default.string,contentDidMount:c.default.func,contentDidUpdate:c.default.func,children:c.default.oneOfType([c.default.element,c.default.arrayOf(c.default.element)])},m.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=m},1262:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),r=(l(o),l(n(4)));function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s=function(e){function t(){return i(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return o.Children.only(this.props.children)}}]),t}(o.Component);s.propTypes={children:r.default.element.isRequired,contentDidMount:r.default.func.isRequired,contentDidUpdate:r.default.func.isRequired},t.default=s},1763:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(14),o=n(0),r=n.n(o),l=n(1218),i=n(1164),c=Object(l.a)((function(e){return{root:{position:"relative"},dropdown:{position:"absolute",top:28,right:0,left:0,zIndex:1,border:"1px solid",padding:e.spacing(1),backgroundColor:e.palette.background.paper}}}));function s(){var e=c(),t=r.a.useState(!1),n=Object(a.a)(t,2),o=n[0],l=n[1];return r.a.createElement(i.a,{onClickAway:function(){l(!1)}},r.a.createElement("div",{className:e.root},r.a.createElement("button",{type:"button",onClick:function(){l((function(e){return!e}))}},"Open menu dropdown"),o?r.a.createElement("div",{className:e.dropdown},"Click me, I will stay visible until you click outside."):null))}},1764:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport ClickAwayListener from '@material-ui/core/ClickAwayListener';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    position: 'relative',\n  },\n  dropdown: {\n    position: 'absolute',\n    top: 28,\n    right: 0,\n    left: 0,\n    zIndex: 1,\n    border: '1px solid',\n    padding: theme.spacing(1),\n    backgroundColor: theme.palette.background.paper,\n  },\n}));\n\nexport default function ClickAway() {\n  const classes = useStyles();\n  const [open, setOpen] = React.useState(false);\n\n  const handleClick = () => {\n    setOpen((prev) => !prev);\n  };\n\n  const handleClickAway = () => {\n    setOpen(false);\n  };\n\n  return (\n    <ClickAwayListener onClickAway={handleClickAway}>\n      <div className={classes.root}>\n        <button type=\"button\" onClick={handleClick}>\n          Open menu dropdown\n        </button>\n        {open ? (\n          <div className={classes.dropdown}>\n            Click me, I will stay visible until you click outside.\n          </div>\n        ) : null}\n      </div>\n    </ClickAwayListener>\n  );\n}\n"},1765:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(14),o=n(0),r=n.n(o),l=n(1218),i=n(1164),c=n(1163),s=Object(l.a)((function(e){return{dropdown:{position:"fixed",width:200,top:"50%",left:"50%",transform:"translate(-50%, -50%)",border:"1px solid",padding:e.spacing(1),backgroundColor:e.palette.background.paper}}}));function u(){var e=s(),t=r.a.useState(!1),n=Object(a.a)(t,2),o=n[0],l=n[1];return r.a.createElement(i.a,{onClickAway:function(){l(!1)}},r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:function(){l((function(e){return!e}))}},"Open menu dropdown"),o?r.a.createElement(c.a,null,r.a.createElement("div",{className:e.dropdown},"Click me, I will stay visible until you click outside.")):null))}},1766:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport ClickAwayListener from '@material-ui/core/ClickAwayListener';\nimport Portal from '@material-ui/core/Portal';\n\nconst useStyles = makeStyles((theme) => ({\n  dropdown: {\n    position: 'fixed',\n    width: 200,\n    top: '50%',\n    left: '50%',\n    transform: 'translate(-50%, -50%)',\n    border: '1px solid',\n    padding: theme.spacing(1),\n    backgroundColor: theme.palette.background.paper,\n  },\n}));\n\nexport default function PortalClickAway() {\n  const classes = useStyles();\n  const [open, setOpen] = React.useState(false);\n\n  const handleClick = () => {\n    setOpen((prev) => !prev);\n  };\n\n  const handleClickAway = () => {\n    setOpen(false);\n  };\n\n  return (\n    <ClickAwayListener onClickAway={handleClickAway}>\n      <div>\n        <button type=\"button\" onClick={handleClick}>\n          Open menu dropdown\n        </button>\n        {open ? (\n          <Portal>\n            <div className={classes.dropdown}>\n              Click me, I will stay visible until you click outside.\n            </div>\n          </Portal>\n        ) : null}\n      </div>\n    </ClickAwayListener>\n  );\n}\n"},1767:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(14),o=n(0),r=n.n(o),l=n(1218),i=n(1164),c=Object(l.a)((function(e){return{root:{position:"relative"},dropdown:{position:"absolute",top:28,right:0,left:0,zIndex:1,border:"1px solid",padding:e.spacing(1),backgroundColor:e.palette.background.paper}}}));function s(){var e=c(),t=r.a.useState(!1),n=Object(a.a)(t,2),o=n[0],l=n[1];return r.a.createElement(i.a,{mouseEvent:"onMouseDown",touchEvent:"onTouchStart",onClickAway:function(){l(!1)}},r.a.createElement("div",{className:e.root},r.a.createElement("button",{type:"button",onClick:function(){l((function(e){return!e}))}},"Open menu dropdown"),o?r.a.createElement("div",{className:e.dropdown},"Click me, I will stay visible until you click outside."):null))}},1768:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport ClickAwayListener from '@material-ui/core/ClickAwayListener';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    position: 'relative',\n  },\n  dropdown: {\n    position: 'absolute',\n    top: 28,\n    right: 0,\n    left: 0,\n    zIndex: 1,\n    border: '1px solid',\n    padding: theme.spacing(1),\n    backgroundColor: theme.palette.background.paper,\n  },\n}));\n\nexport default function LeadingClickAway() {\n  const classes = useStyles();\n  const [open, setOpen] = React.useState(false);\n\n  const handleClick = () => {\n    setOpen((prev) => !prev);\n  };\n\n  const handleClickAway = () => {\n    setOpen(false);\n  };\n\n  return (\n    <ClickAwayListener\n      mouseEvent=\"onMouseDown\"\n      touchEvent=\"onTouchStart\"\n      onClickAway={handleClickAway}\n    >\n      <div className={classes.root}>\n        <button type=\"button\" onClick={handleClick}>\n          Open menu dropdown\n        </button>\n        {open ? (\n          <div className={classes.dropdown}>\n            Click me, I will stay visible until you click outside.\n          </div>\n        ) : null}\n      </div>\n    </ClickAwayListener>\n  );\n}\n"},2412:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(1259),l=(n(135),n(1226)),i=n(1220),c=n(206),s=n(1218),u=Object(s.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){return u(),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"flex flex-1 flex-grow-0 items-center justify-end"},o.a.createElement(l.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/click-away-listener",target:"_blank",role:"button"},o.a.createElement(i.a,null,"link"),o.a.createElement("span",{className:"mx-4"},"Reference"))),o.a.createElement(c.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Click away listener"),o.a.createElement(c.a,{className:"description"},"Detect if a click event happened outside of an element. It listens for clicks that occur somewhere in the document."),o.a.createElement("ul",null,o.a.createElement("li",null,"\ud83d\udce6 ",o.a.createElement("a",{href:"/size-snapshot"},"1.5 kB gzipped"),"."),o.a.createElement("li",null,"\u269b\ufe0f Support portals")),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Example"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"For instance, if you need to hide a menu dropdown when people click anywhere else on your page:"),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(1763).default,raw:n(1764)})),o.a.createElement(c.a,{className:"mb-16",component:"div"},"Notice that the component only accepts one child element. You can find a more advanced demo on the ",o.a.createElement("a",{href:"/components/menus/#menulist-composition"},"Menu documentation section"),"."),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Portal"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"The following demo uses ",o.a.createElement("a",{href:"/components/portal/"},o.a.createElement("code",null,"Portal")),' to render the dropdown into a new "subtree" outside of current DOM hierarchy.'),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(1765).default,raw:n(1766)})),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Leading edge"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"By default, the component responds to the trailing events (click + touch end). However, you can configure it to respond to the leading events (mouse down + touch start)."),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(1767).default,raw:n(1768)})),o.a.createElement("blockquote",null,o.a.createElement(c.a,{className:"mb-16",component:"div"},"\u26a0\ufe0f In this mode, only interactions on the scrollbar of the document is ignored.")))}}}]);