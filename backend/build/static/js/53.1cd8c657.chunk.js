(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[53],{1258:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var a,o=n(0),r=(a=o)&&a.__esModule?a:{default:a};var l=void 0,s=void 0;"undefined"!==typeof document&&(l=document),"undefined"!==typeof window&&(s=window);var i=t.FrameContext=r.default.createContext({document:l,window:s}),c=i.Provider,m=i.Consumer;t.FrameContextProvider=c,t.FrameContextConsumer=m},1259:function(e,t,n){"use strict";n.d(t,"a",(function(){return T}));var a=n(14),o=n(135),r=n(1229),l=n(1238),s=n(1220),i=n(1246),c=n(1247),m=n(2),p=n(0),d=n.n(p),u=n(13),h=n(9),f=n(80),v=n(87),g=n(137),y=n(136),E=n(1162),b=n(633),w=n(1217),N=n(1228),C=n(8),k=n(411),x=n(412),S=n(1260),O=n.n(S),j=Object(E.a)({productionPrefix:"iframe-"}),P=function(e){Object(g.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(k.a)(Object(h.a)(Object(h.a)({},Object(b.a)()),{},{plugins:[].concat(Object(u.a)(Object(b.a)().plugins),[Object(x.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),d.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(v.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,a=e.theme;return d.a.createElement(O.a,{head:this.renderHead(),ref:this.handleRef,className:Object(m.default)(n.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?d.a.createElement(w.b,{jss:this.state.jss,generateClassName:j,sheetsManager:this.state.sheetsManager},d.a.createElement(N.a,{theme:a},d.a.cloneElement(t,{container:this.state.container}))):null)}}]),n}(d.a.Component),F=Object(C.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(P);function M(e){var t=Object(p.useState)(e.currentTabIndex),n=Object(a.a)(t,2),u=n[0],h=n[1],f=e.component,v=e.raw,g=e.iframe,y=e.className;return d.a.createElement(l.a,{className:Object(m.default)(y,"shadow")},d.a.createElement(r.a,{position:"static",color:"default",className:"shadow-0"},d.a.createElement(c.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:u,onChange:function(e,t){h(t)}},f&&d.a.createElement(i.a,{classes:{root:"min-w-64"},icon:d.a.createElement(s.a,null,"remove_red_eye")}),v&&d.a.createElement(i.a,{classes:{root:"min-w-64"},icon:d.a.createElement(s.a,null,"code")}))),d.a.createElement("div",{className:"flex justify-center max-w-full"},d.a.createElement("div",{className:0===u?"flex flex-1 max-w-full":"hidden"},f&&(g?d.a.createElement(F,null,d.a.createElement(f,null)):d.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},d.a.createElement(f,null)))),d.a.createElement("div",{className:1===u?"flex flex-1":"hidden"},v&&d.a.createElement("div",{className:"flex flex-1"},d.a.createElement(o.a,{component:"pre",className:"language-javascript w-full"},v.default)))))}M.defaultProps={currentTabIndex:0};var T=M},1260:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var a=n(1258);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return a.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return a.FrameContextConsumer}});var o,r=n(1261),l=(o=r)&&o.__esModule?o:{default:o};t.default=l.default},1261:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),l=p(r),s=p(n(20)),i=p(n(4)),c=n(1258),m=p(n(1262));function p(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.handleLoad=function(){a.forceUpdate()},a._isMounted=!1,a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,n=this.props.contentDidUpdate,a=e.defaultView||e.parentView,o=l.default.createElement(m.default,{contentDidMount:t,contentDidUpdate:n},l.default.createElement(c.FrameContextProvider,{value:{document:e,window:a}},l.default.createElement("div",{className:"frame-content"},this.props.children)));e.body.children.length<1&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close());var r=this.getMountTarget();return[s.default.createPortal(this.props.head,this.getDoc().head),s.default.createPortal(o,r)]}},{key:"render",value:function(){var e=this,t=a({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,l.default.createElement("iframe",a({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(r.Component);d.propTypes={style:i.default.object,head:i.default.node,initialContent:i.default.string,mountTarget:i.default.string,contentDidMount:i.default.func,contentDidUpdate:i.default.func,children:i.default.oneOfType([i.default.element,i.default.arrayOf(i.default.element)])},d.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=d},1262:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),r=(l(o),l(n(4)));function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var c=function(e){function t(){return s(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return o.Children.only(this.props.children)}}]),t}(o.Component);c.propTypes={children:r.default.element.isRequired,contentDidMount:r.default.func.isRequired,contentDidUpdate:r.default.func.isRequired},t.default=c},1406:function(e,t,n){"use strict";var a=n(1),o=n(67),r=n(5),l=n(0),s=(n(4),n(306)),i=n(59),c=n(45),m=n(74),p=n(24),d={entering:{transform:"none"},entered:{transform:"none"}},u={enter:i.b.enteringScreen,exit:i.b.leavingScreen},h=l.forwardRef((function(e,t){var n=e.children,i=e.disableStrictModeCompat,h=void 0!==i&&i,f=e.in,v=e.onEnter,g=e.onEntered,y=e.onEntering,E=e.onExit,b=e.onExited,w=e.onExiting,N=e.style,C=e.timeout,k=void 0===C?u:C,x=e.TransitionComponent,S=void 0===x?s.a:x,O=Object(r.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),j=Object(c.a)(),P=j.unstable_strictMode&&!h,F=l.useRef(null),M=Object(p.a)(n.ref,t),T=Object(p.a)(P?F:void 0,M),_=function(e){return function(t,n){if(e){var a=P?[F.current,t]:[t,n],r=Object(o.a)(a,2),l=r[0],s=r[1];void 0===s?e(l):e(l,s)}}},D=_(y),R=_((function(e,t){Object(m.b)(e);var n=Object(m.a)({style:N,timeout:k},{mode:"enter"});e.style.webkitTransition=j.transitions.create("transform",n),e.style.transition=j.transitions.create("transform",n),v&&v(e,t)})),L=_(g),U=_(w),G=_((function(e){var t=Object(m.a)({style:N,timeout:k},{mode:"exit"});e.style.webkitTransition=j.transitions.create("transform",t),e.style.transition=j.transitions.create("transform",t),E&&E(e)})),W=_(b);return l.createElement(S,Object(a.a)({appear:!0,in:f,nodeRef:P?F:void 0,onEnter:R,onEntered:L,onEntering:D,onExit:G,onExited:W,onExiting:U,timeout:k},O),(function(e,t){return l.cloneElement(n,Object(a.a)({style:Object(a.a)({transform:"scale(0)",visibility:"exited"!==e||f?void 0:"hidden"},d[e],N,n.props.style),ref:T},t))}))}));t.a=h},2279:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n(14),o=n(0),r=n.n(o),l=n(1218),s=n(1225),i=n(205),c=n(1235),m=n(1224),p=Object(l.a)((function(e){return{root:{height:180},container:{display:"flex"},paper:{margin:e.spacing(1)},svg:{width:100,height:100},polygon:{fill:e.palette.common.white,stroke:e.palette.divider,strokeWidth:1}}}));function d(){var e=p(),t=r.a.useState(!1),n=Object(a.a)(t,2),o=n[0],l=n[1];return r.a.createElement("div",{className:e.root},r.a.createElement(m.a,{control:r.a.createElement(s.a,{checked:o,onChange:function(){l((function(e){return!e}))}}),label:"Show"}),r.a.createElement("div",{className:e.container},r.a.createElement(c.a,{in:o},r.a.createElement(i.a,{elevation:4,className:e.paper},r.a.createElement("svg",{className:e.svg},r.a.createElement("polygon",{points:"0,100 50,00, 100,100",className:e.polygon})))),r.a.createElement(c.a,{in:o,collapsedHeight:40},r.a.createElement(i.a,{elevation:4,className:e.paper},r.a.createElement("svg",{className:e.svg},r.a.createElement("polygon",{points:"0,100 50,00, 100,100",className:e.polygon}))))))}},2280:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Switch from '@material-ui/core/Switch';\nimport Paper from '@material-ui/core/Paper';\nimport Collapse from '@material-ui/core/Collapse';\nimport FormControlLabel from '@material-ui/core/FormControlLabel';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    height: 180,\n  },\n  container: {\n    display: 'flex',\n  },\n  paper: {\n    margin: theme.spacing(1),\n  },\n  svg: {\n    width: 100,\n    height: 100,\n  },\n  polygon: {\n    fill: theme.palette.common.white,\n    stroke: theme.palette.divider,\n    strokeWidth: 1,\n  },\n}));\n\nexport default function SimpleCollapse() {\n  const classes = useStyles();\n  const [checked, setChecked] = React.useState(false);\n\n  const handleChange = () => {\n    setChecked((prev) => !prev);\n  };\n\n  return (\n    <div className={classes.root}>\n      <FormControlLabel\n        control={<Switch checked={checked} onChange={handleChange} />}\n        label=\"Show\"\n      />\n      <div className={classes.container}>\n        <Collapse in={checked}>\n          <Paper elevation={4} className={classes.paper}>\n            <svg className={classes.svg}>\n              <polygon points=\"0,100 50,00, 100,100\" className={classes.polygon} />\n            </svg>\n          </Paper>\n        </Collapse>\n        <Collapse in={checked} collapsedHeight={40}>\n          <Paper elevation={4} className={classes.paper}>\n            <svg className={classes.svg}>\n              <polygon points=\"0,100 50,00, 100,100\" className={classes.polygon} />\n            </svg>\n          </Paper>\n        </Collapse>\n      </div>\n    </div>\n  );\n}\n"},2281:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n(14),o=n(0),r=n.n(o),l=n(1218),s=n(1225),i=n(205),c=n(628),m=n(1224),p=Object(l.a)((function(e){return{root:{height:180},container:{display:"flex"},paper:{margin:e.spacing(1)},svg:{width:100,height:100},polygon:{fill:e.palette.common.white,stroke:e.palette.divider,strokeWidth:1}}}));function d(){var e=p(),t=r.a.useState(!1),n=Object(a.a)(t,2),o=n[0],l=n[1];return r.a.createElement("div",{className:e.root},r.a.createElement(m.a,{control:r.a.createElement(s.a,{checked:o,onChange:function(){l((function(e){return!e}))}}),label:"Show"}),r.a.createElement("div",{className:e.container},r.a.createElement(c.a,{in:o},r.a.createElement(i.a,{elevation:4,className:e.paper},r.a.createElement("svg",{className:e.svg},r.a.createElement("polygon",{points:"0,100 50,00, 100,100",className:e.polygon}))))))}},2282:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Switch from '@material-ui/core/Switch';\nimport Paper from '@material-ui/core/Paper';\nimport Fade from '@material-ui/core/Fade';\nimport FormControlLabel from '@material-ui/core/FormControlLabel';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    height: 180,\n  },\n  container: {\n    display: 'flex',\n  },\n  paper: {\n    margin: theme.spacing(1),\n  },\n  svg: {\n    width: 100,\n    height: 100,\n  },\n  polygon: {\n    fill: theme.palette.common.white,\n    stroke: theme.palette.divider,\n    strokeWidth: 1,\n  },\n}));\n\nexport default function SimpleFade() {\n  const classes = useStyles();\n  const [checked, setChecked] = React.useState(false);\n\n  const handleChange = () => {\n    setChecked((prev) => !prev);\n  };\n\n  return (\n    <div className={classes.root}>\n      <FormControlLabel\n        control={<Switch checked={checked} onChange={handleChange} />}\n        label=\"Show\"\n      />\n      <div className={classes.container}>\n        <Fade in={checked}>\n          <Paper elevation={4} className={classes.paper}>\n            <svg className={classes.svg}>\n              <polygon points=\"0,100 50,00, 100,100\" className={classes.polygon} />\n            </svg>\n          </Paper>\n        </Fade>\n      </div>\n    </div>\n  );\n}\n"},2283:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n(14),o=n(0),r=n.n(o),l=n(1218),s=n(1225),i=n(205),c=n(407),m=n(1224),p=Object(l.a)((function(e){return{root:{height:180},container:{display:"flex"},paper:{margin:e.spacing(1)},svg:{width:100,height:100},polygon:{fill:e.palette.common.white,stroke:e.palette.divider,strokeWidth:1}}}));function d(){var e=p(),t=r.a.useState(!1),n=Object(a.a)(t,2),o=n[0],l=n[1];return r.a.createElement("div",{className:e.root},r.a.createElement(m.a,{control:r.a.createElement(s.a,{checked:o,onChange:function(){l((function(e){return!e}))}}),label:"Show"}),r.a.createElement("div",{className:e.container},r.a.createElement(c.a,{in:o},r.a.createElement(i.a,{elevation:4,className:e.paper},r.a.createElement("svg",{className:e.svg},r.a.createElement("polygon",{points:"0,100 50,00, 100,100",className:e.polygon})))),r.a.createElement(c.a,Object.assign({in:o,style:{transformOrigin:"0 0 0"}},o?{timeout:1e3}:{}),r.a.createElement(i.a,{elevation:4,className:e.paper},r.a.createElement("svg",{className:e.svg},r.a.createElement("polygon",{points:"0,100 50,00, 100,100",className:e.polygon}))))))}},2284:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Switch from '@material-ui/core/Switch';\nimport Paper from '@material-ui/core/Paper';\nimport Grow from '@material-ui/core/Grow';\nimport FormControlLabel from '@material-ui/core/FormControlLabel';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    height: 180,\n  },\n  container: {\n    display: 'flex',\n  },\n  paper: {\n    margin: theme.spacing(1),\n  },\n  svg: {\n    width: 100,\n    height: 100,\n  },\n  polygon: {\n    fill: theme.palette.common.white,\n    stroke: theme.palette.divider,\n    strokeWidth: 1,\n  },\n}));\n\nexport default function SimpleGrow() {\n  const classes = useStyles();\n  const [checked, setChecked] = React.useState(false);\n\n  const handleChange = () => {\n    setChecked((prev) => !prev);\n  };\n\n  return (\n    <div className={classes.root}>\n      <FormControlLabel\n        control={<Switch checked={checked} onChange={handleChange} />}\n        label=\"Show\"\n      />\n      <div className={classes.container}>\n        <Grow in={checked}>\n          <Paper elevation={4} className={classes.paper}>\n            <svg className={classes.svg}>\n              <polygon points=\"0,100 50,00, 100,100\" className={classes.polygon} />\n            </svg>\n          </Paper>\n        </Grow>\n        {/* Conditionally applies the timeout prop to change the entry speed. */}\n        <Grow\n          in={checked}\n          style={{ transformOrigin: '0 0 0' }}\n          {...(checked ? { timeout: 1000 } : {})}\n        >\n          <Paper elevation={4} className={classes.paper}>\n            <svg className={classes.svg}>\n              <polygon points=\"0,100 50,00, 100,100\" className={classes.polygon} />\n            </svg>\n          </Paper>\n        </Grow>\n      </div>\n    </div>\n  );\n}\n"},2285:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n(14),o=n(0),r=n.n(o),l=n(1225),s=n(205),i=n(1176),c=n(1224),m=n(1218),p=Object(m.a)((function(e){return{root:{height:180},wrapper:{width:100+e.spacing(2)},paper:{zIndex:1,position:"relative",margin:e.spacing(1)},svg:{width:100,height:100},polygon:{fill:e.palette.common.white,stroke:e.palette.divider,strokeWidth:1}}}));function d(){var e=p(),t=r.a.useState(!1),n=Object(a.a)(t,2),o=n[0],m=n[1];return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.wrapper},r.a.createElement(c.a,{control:r.a.createElement(l.a,{checked:o,onChange:function(){m((function(e){return!e}))}}),label:"Show"}),r.a.createElement(i.a,{direction:"up",in:o,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(s.a,{elevation:4,className:e.paper},r.a.createElement("svg",{className:e.svg},r.a.createElement("polygon",{points:"0,100 50,00, 100,100",className:e.polygon}))))))}},2286:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Switch from '@material-ui/core/Switch';\nimport Paper from '@material-ui/core/Paper';\nimport Slide from '@material-ui/core/Slide';\nimport FormControlLabel from '@material-ui/core/FormControlLabel';\nimport { makeStyles } from '@material-ui/core/styles';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    height: 180,\n  },\n  wrapper: {\n    width: 100 + theme.spacing(2),\n  },\n  paper: {\n    zIndex: 1,\n    position: 'relative',\n    margin: theme.spacing(1),\n  },\n  svg: {\n    width: 100,\n    height: 100,\n  },\n  polygon: {\n    fill: theme.palette.common.white,\n    stroke: theme.palette.divider,\n    strokeWidth: 1,\n  },\n}));\n\nexport default function SimpleSlide() {\n  const classes = useStyles();\n  const [checked, setChecked] = React.useState(false);\n\n  const handleChange = () => {\n    setChecked((prev) => !prev);\n  };\n\n  return (\n    <div className={classes.root}>\n      <div className={classes.wrapper}>\n        <FormControlLabel\n          control={<Switch checked={checked} onChange={handleChange} />}\n          label=\"Show\"\n        />\n        <Slide direction=\"up\" in={checked} mountOnEnter unmountOnExit>\n          <Paper elevation={4} className={classes.paper}>\n            <svg className={classes.svg}>\n              <polygon points=\"0,100 50,00, 100,100\" className={classes.polygon} />\n            </svg>\n          </Paper>\n        </Slide>\n      </div>\n    </div>\n  );\n}\n"},2287:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n(14),o=n(0),r=n.n(o),l=n(1225),s=n(205),i=n(1406),c=n(1224),m=n(1218),p=Object(m.a)((function(e){return{root:{height:180},container:{display:"flex"},paper:{margin:e.spacing(1)},svg:{width:100,height:100},polygon:{fill:e.palette.common.white,stroke:e.palette.divider,strokeWidth:1}}}));function d(){var e=p(),t=r.a.useState(!1),n=Object(a.a)(t,2),o=n[0],m=n[1];return r.a.createElement("div",{className:e.root},r.a.createElement(c.a,{control:r.a.createElement(l.a,{checked:o,onChange:function(){m((function(e){return!e}))}}),label:"Show"}),r.a.createElement("div",{className:e.container},r.a.createElement(i.a,{in:o},r.a.createElement(s.a,{elevation:4,className:e.paper},r.a.createElement("svg",{className:e.svg},r.a.createElement("polygon",{points:"0,100 50,00, 100,100",className:e.polygon})))),r.a.createElement(i.a,{in:o,style:{transitionDelay:o?"500ms":"0ms"}},r.a.createElement(s.a,{elevation:4,className:e.paper},r.a.createElement("svg",{className:e.svg},r.a.createElement("polygon",{points:"0,100 50,00, 100,100",className:e.polygon}))))))}},2288:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Switch from '@material-ui/core/Switch';\nimport Paper from '@material-ui/core/Paper';\nimport Zoom from '@material-ui/core/Zoom';\nimport FormControlLabel from '@material-ui/core/FormControlLabel';\nimport { makeStyles } from '@material-ui/core/styles';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    height: 180,\n  },\n  container: {\n    display: 'flex',\n  },\n  paper: {\n    margin: theme.spacing(1),\n  },\n  svg: {\n    width: 100,\n    height: 100,\n  },\n  polygon: {\n    fill: theme.palette.common.white,\n    stroke: theme.palette.divider,\n    strokeWidth: 1,\n  },\n}));\n\nexport default function SimpleZoom() {\n  const classes = useStyles();\n  const [checked, setChecked] = React.useState(false);\n\n  const handleChange = () => {\n    setChecked((prev) => !prev);\n  };\n\n  return (\n    <div className={classes.root}>\n      <FormControlLabel\n        control={<Switch checked={checked} onChange={handleChange} />}\n        label=\"Show\"\n      />\n      <div className={classes.container}>\n        <Zoom in={checked}>\n          <Paper elevation={4} className={classes.paper}>\n            <svg className={classes.svg}>\n              <polygon points=\"0,100 50,00, 100,100\" className={classes.polygon} />\n            </svg>\n          </Paper>\n        </Zoom>\n        <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>\n          <Paper elevation={4} className={classes.paper}>\n            <svg className={classes.svg}>\n              <polygon points=\"0,100 50,00, 100,100\" className={classes.polygon} />\n            </svg>\n          </Paper>\n        </Zoom>\n      </div>\n    </div>\n  );\n}\n"},2463:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(1259),l=n(135),s=n(1226),i=n(1220),c=n(206),m=n(1218),p=Object(m.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){return p(),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"flex flex-1 flex-grow-0 items-center justify-end"},o.a.createElement(s.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/transitions",target:"_blank",role:"button"},o.a.createElement(i.a,null,"link"),o.a.createElement("span",{className:"mx-4"},"Reference"))),o.a.createElement(c.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Transitions"),o.a.createElement(c.a,{className:"description"},"Transition helps make a UI expressive and easy to use."),o.a.createElement(c.a,{className:"mb-16",component:"div"},"Material-UI provides a number of transitions that can be used to introduce some basic",o.a.createElement("a",{href:"https://material.io/design/motion/"},"motion"),"to your applications components."),o.a.createElement(c.a,{className:"mb-16",component:"div"},"To better support server rendering Material-UI provides a ",o.a.createElement("code",null,"style")," property to the children of some transition components (Fade, Grow, Zoom, Slide). The ",o.a.createElement("code",null,"style")," property must be applied to the DOM for the animation to work as expected."),o.a.createElement(l.a,{component:"pre",className:"language-jsx"}," \n// The `props` object contains a `style` property.\n// You need to provide it to the `div` element as shown here.\nfunction MyComponent(props) {\n  return (\n    <div {...props}>\n      Fade\n    </div>\n  );\n}\n\nexport default Main() {\n  return (\n    <Fade>\n      <MyComponent />\n    </Fade>\n  );\n}\n"),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Collapse"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"Expand vertically from the top of the child element. The ",o.a.createElement("code",null,"collapsedHeight")," property can be used to set the minimum height when not expanded."),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(2279).default,raw:n(2280)})),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Fade"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"Fade in from transparent to opaque."),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(2281).default,raw:n(2282)})),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Grow"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"Expand outwards from the center of the child element, while also fading in from transparent to opaque."),o.a.createElement(c.a,{className:"mb-16",component:"div"},"The second example demonstrates how to change the ",o.a.createElement("code",null,"transform-origin"),", and conditionally applies the ",o.a.createElement("code",null,"timeout")," property to change the entry speed."),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(2283).default,raw:n(2284)})),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Slide"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"Slide in from the edge of the screen. The ",o.a.createElement("code",null,"direction")," property controls which edge of the screen the transition starts from."),o.a.createElement(c.a,{className:"mb-16",component:"div"},"The Transition component's ",o.a.createElement("code",null,"mountOnEnter")," property prevents the child component from being mounted until ",o.a.createElement("code",null,"in")," is ",o.a.createElement("code",null,"true"),". This prevents the relatively positioned component from scrolling into view from it's off-screen position. Similarly the ",o.a.createElement("code",null,"unmountOnExit")," property removes the component from the DOM after it has been transition off screen."),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(2285).default,raw:n(2286)})),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Zoom"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"Expand outwards from the center of the child element."),o.a.createElement(c.a,{className:"mb-16",component:"div"},"This example also demonstrates how to delay the enter transition."),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(2287).default,raw:n(2288)})),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"TransitionComponent prop"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"The components accept a ",o.a.createElement("code",null,"TransitionComponent")," prop to customize the default transitions. You can use any of the above components or your own. It should respect the following conditions:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Accepts an ",o.a.createElement("code",null,"in")," prop. This corresponds to the open/close state."),o.a.createElement("li",null,"Call the ",o.a.createElement("code",null,"onEnter")," callback prop when the enter transition starts."),o.a.createElement("li",null,"Call the ",o.a.createElement("code",null,"onExited")," callback prop when the exit transition is completed. These two callbacks allow to unmount the children when in a closed state and fully transitioned.")),o.a.createElement(c.a,{className:"mb-16",component:"div"},"For more information on creating a custom transition, visit the ",o.a.createElement("a",{href:"http://reactcommunity.org/react-transition-group/transition"},"React Transition Group Transition docs"),"."))}}}]);