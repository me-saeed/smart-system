(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[61],{1258:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var a,r=n(0),o=(a=r)&&a.__esModule?a:{default:a};var i=void 0,s=void 0;"undefined"!==typeof document&&(i=document),"undefined"!==typeof window&&(s=window);var l=t.FrameContext=o.default.createContext({document:i,window:s}),c=l.Provider,m=l.Consumer;t.FrameContextProvider=c,t.FrameContextConsumer=m},1259:function(e,t,n){"use strict";n.d(t,"a",(function(){return T}));var a=n(14),r=n(135),o=n(1229),i=n(1238),s=n(1220),l=n(1246),c=n(1247),m=n(2),p=n(0),d=n.n(p),u=n(13),f=n(9),h=n(80),y=n(87),g=n(137),x=n(136),v=n(1162),w=n(633),b=n(1217),E=n(1228),N=n(8),j=n(411),P=n(412),O=n(1260),D=n.n(O),U=Object(v.a)({productionPrefix:"iframe-"}),k=function(e){Object(g.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(j.a)(Object(f.a)(Object(f.a)({},Object(w.a)()),{},{plugins:[].concat(Object(u.a)(Object(w.a)().plugins),[Object(P.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),d.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(y.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,a=e.theme;return d.a.createElement(D.a,{head:this.renderHead(),ref:this.handleRef,className:Object(m.default)(n.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?d.a.createElement(b.b,{jss:this.state.jss,generateClassName:U,sheetsManager:this.state.sheetsManager},d.a.createElement(E.a,{theme:a},d.a.cloneElement(t,{container:this.state.container}))):null)}}]),n}(d.a.Component),C=Object(N.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(k);function H(e){var t=Object(p.useState)(e.currentTabIndex),n=Object(a.a)(t,2),u=n[0],f=n[1],h=e.component,y=e.raw,g=e.iframe,x=e.className;return d.a.createElement(i.a,{className:Object(m.default)(x,"shadow")},d.a.createElement(o.a,{position:"static",color:"default",className:"shadow-0"},d.a.createElement(c.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:u,onChange:function(e,t){f(t)}},h&&d.a.createElement(l.a,{classes:{root:"min-w-64"},icon:d.a.createElement(s.a,null,"remove_red_eye")}),y&&d.a.createElement(l.a,{classes:{root:"min-w-64"},icon:d.a.createElement(s.a,null,"code")}))),d.a.createElement("div",{className:"flex justify-center max-w-full"},d.a.createElement("div",{className:0===u?"flex flex-1 max-w-full":"hidden"},h&&(g?d.a.createElement(C,null,d.a.createElement(h,null)):d.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},d.a.createElement(h,null)))),d.a.createElement("div",{className:1===u?"flex flex-1":"hidden"},y&&d.a.createElement("div",{className:"flex flex-1"},d.a.createElement(r.a,{component:"pre",className:"language-javascript w-full"},y.default)))))}H.defaultProps={currentTabIndex:0};var T=H},1260:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var a=n(1258);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return a.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return a.FrameContextConsumer}});var r,o=n(1261),i=(r=o)&&r.__esModule?r:{default:r};t.default=i.default},1261:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),i=p(o),s=p(n(20)),l=p(n(4)),c=n(1258),m=p(n(1262));function p(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.handleLoad=function(){a.forceUpdate()},a._isMounted=!1,a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,n=this.props.contentDidUpdate,a=e.defaultView||e.parentView,r=i.default.createElement(m.default,{contentDidMount:t,contentDidUpdate:n},i.default.createElement(c.FrameContextProvider,{value:{document:e,window:a}},i.default.createElement("div",{className:"frame-content"},this.props.children)));e.body.children.length<1&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close());var o=this.getMountTarget();return[s.default.createPortal(this.props.head,this.getDoc().head),s.default.createPortal(r,o)]}},{key:"render",value:function(){var e=this,t=a({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,i.default.createElement("iframe",a({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(o.Component);d.propTypes={style:l.default.object,head:l.default.node,initialContent:l.default.string,mountTarget:l.default.string,contentDidMount:l.default.func,contentDidUpdate:l.default.func,children:l.default.oneOfType([l.default.element,l.default.arrayOf(l.default.element)])},d.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=d},1262:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),o=(i(r),i(n(4)));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var c=function(e){function t(){return s(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return r.Children.only(this.props.children)}}]),t}(r.Component);c.propTypes={children:o.default.element.isRequired,contentDidMount:o.default.func.isRequired,contentDidUpdate:o.default.func.isRequired},t.default=c},1286:function(e,t,n){"use strict";var a=n(5),r=n(1),o=n(0),i=(n(4),n(2)),s=n(8),l=[0,1,2,3,4,5,6,7,8,9,10],c=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var p=o.forwardRef((function(e,t){var n=e.alignContent,s=void 0===n?"stretch":n,l=e.alignItems,c=void 0===l?"stretch":l,m=e.classes,p=e.className,d=e.component,u=void 0===d?"div":d,f=e.container,h=void 0!==f&&f,y=e.direction,g=void 0===y?"row":y,x=e.item,v=void 0!==x&&x,w=e.justify,b=void 0===w?"flex-start":w,E=e.lg,N=void 0!==E&&E,j=e.md,P=void 0!==j&&j,O=e.sm,D=void 0!==O&&O,U=e.spacing,k=void 0===U?0:U,C=e.wrap,H=void 0===C?"wrap":C,T=e.xl,_=void 0!==T&&T,M=e.xs,S=void 0!==M&&M,G=e.zeroMinWidth,W=void 0!==G&&G,R=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),B=Object(i.default)(m.root,p,h&&[m.container,0!==k&&m["spacing-xs-".concat(String(k))]],v&&m.item,W&&m.zeroMinWidth,"row"!==g&&m["direction-xs-".concat(String(g))],"wrap"!==H&&m["wrap-xs-".concat(String(H))],"stretch"!==c&&m["align-items-xs-".concat(String(c))],"stretch"!==s&&m["align-content-xs-".concat(String(s))],"flex-start"!==b&&m["justify-xs-".concat(String(b))],!1!==S&&m["grid-xs-".concat(String(S))],!1!==D&&m["grid-sm-".concat(String(D))],!1!==P&&m["grid-md-".concat(String(P))],!1!==N&&m["grid-lg-".concat(String(N))],!1!==_&&m["grid-xl-".concat(String(_))]);return o.createElement(u,Object(r.a)({className:B,ref:t},R))})),d=Object(s.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return l.forEach((function(a){var r=e.spacing(a);0!==r&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(m(r,2)),width:"calc(100% + ".concat(m(r),")"),"& > $item":{padding:m(r,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};c.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(r.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(p);t.a=d},1871:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1218),i=n(205),s=n(1250),l=n(1239),c=n(206),m=Object(o.a)((function(e){return{root:{flexGrow:1},container:{display:"flex",flexWrap:"wrap"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,flex:"1 0 auto",margin:e.spacing(1)}}}));t.default=Object(l.a)()((function(e){var t=m(),n=e.width;return r.a.createElement("div",{className:t.root},r.a.createElement(c.a,{variant:"subtitle1"},"Current width: ",n),r.a.createElement("div",{className:t.container},r.a.createElement(s.a,{xsUp:!0},r.a.createElement(i.a,{className:t.paper},"xsUp")),r.a.createElement(s.a,{smUp:!0},r.a.createElement(i.a,{className:t.paper},"smUp")),r.a.createElement(s.a,{mdUp:!0},r.a.createElement(i.a,{className:t.paper},"mdUp")),r.a.createElement(s.a,{lgUp:!0},r.a.createElement(i.a,{className:t.paper},"lgUp")),r.a.createElement(s.a,{xlUp:!0},r.a.createElement(i.a,{className:t.paper},"xlUp"))))}))},1872:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Paper from '@material-ui/core/Paper';\nimport Hidden from '@material-ui/core/Hidden';\nimport withWidth from '@material-ui/core/withWidth';\nimport Typography from '@material-ui/core/Typography';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    flexGrow: 1,\n  },\n  container: {\n    display: 'flex',\n    flexWrap: 'wrap',\n  },\n  paper: {\n    padding: theme.spacing(2),\n    textAlign: 'center',\n    color: theme.palette.text.secondary,\n    flex: '1 0 auto',\n    margin: theme.spacing(1),\n  },\n}));\n\nfunction BreakpointUp(props) {\n  const classes = useStyles();\n  const { width } = props;\n\n  return (\n    <div className={classes.root}>\n      <Typography variant=\"subtitle1\">Current width: {width}</Typography>\n      <div className={classes.container}>\n        <Hidden xsUp>\n          <Paper className={classes.paper}>xsUp</Paper>\n        </Hidden>\n        <Hidden smUp>\n          <Paper className={classes.paper}>smUp</Paper>\n        </Hidden>\n        <Hidden mdUp>\n          <Paper className={classes.paper}>mdUp</Paper>\n        </Hidden>\n        <Hidden lgUp>\n          <Paper className={classes.paper}>lgUp</Paper>\n        </Hidden>\n        <Hidden xlUp>\n          <Paper className={classes.paper}>xlUp</Paper>\n        </Hidden>\n      </div>\n    </div>\n  );\n}\n\nBreakpointUp.propTypes = {\n  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,\n};\n\nexport default withWidth()(BreakpointUp);\n"},1873:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1218),i=n(205),s=n(1250),l=n(1239),c=n(206),m=Object(o.a)((function(e){return{root:{flexGrow:1},container:{display:"flex",flexWrap:"wrap"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,flex:"1 0 auto",margin:e.spacing(1)}}}));t.default=Object(l.a)()((function(e){var t=m(),n=e.width;return r.a.createElement("div",{className:t.root},r.a.createElement(c.a,{variant:"subtitle1"},"Current width: ",n),r.a.createElement("div",{className:t.container},r.a.createElement(s.a,{xsDown:!0},r.a.createElement(i.a,{className:t.paper},"xsDown")),r.a.createElement(s.a,{smDown:!0},r.a.createElement(i.a,{className:t.paper},"smDown")),r.a.createElement(s.a,{mdDown:!0},r.a.createElement(i.a,{className:t.paper},"mdDown")),r.a.createElement(s.a,{lgDown:!0},r.a.createElement(i.a,{className:t.paper},"lgDown")),r.a.createElement(s.a,{xlDown:!0},r.a.createElement(i.a,{className:t.paper},"xlDown"))))}))},1874:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Paper from '@material-ui/core/Paper';\nimport Hidden from '@material-ui/core/Hidden';\nimport withWidth from '@material-ui/core/withWidth';\nimport Typography from '@material-ui/core/Typography';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    flexGrow: 1,\n  },\n  container: {\n    display: 'flex',\n    flexWrap: 'wrap',\n  },\n  paper: {\n    padding: theme.spacing(2),\n    textAlign: 'center',\n    color: theme.palette.text.secondary,\n    flex: '1 0 auto',\n    margin: theme.spacing(1),\n  },\n}));\n\nfunction BreakpointDown(props) {\n  const classes = useStyles();\n  const { width } = props;\n\n  return (\n    <div className={classes.root}>\n      <Typography variant=\"subtitle1\">Current width: {width}</Typography>\n      <div className={classes.container}>\n        <Hidden xsDown>\n          <Paper className={classes.paper}>xsDown</Paper>\n        </Hidden>\n        <Hidden smDown>\n          <Paper className={classes.paper}>smDown</Paper>\n        </Hidden>\n        <Hidden mdDown>\n          <Paper className={classes.paper}>mdDown</Paper>\n        </Hidden>\n        <Hidden lgDown>\n          <Paper className={classes.paper}>lgDown</Paper>\n        </Hidden>\n        <Hidden xlDown>\n          <Paper className={classes.paper}>xlDown</Paper>\n        </Hidden>\n      </div>\n    </div>\n  );\n}\n\nBreakpointDown.propTypes = {\n  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,\n};\n\nexport default withWidth()(BreakpointDown);\n"},1875:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1218),i=n(205),s=n(1250),l=n(1239),c=n(206),m=Object(o.a)((function(e){return{root:{flexGrow:1},container:{display:"flex",flexWrap:"wrap"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,flex:"1 0 auto",margin:e.spacing(1)}}}));t.default=Object(l.a)()((function(e){var t=m(),n=e.width;return r.a.createElement("div",{className:t.root},r.a.createElement(c.a,{variant:"subtitle1"},"Current width: ",n),r.a.createElement("div",{className:t.container},r.a.createElement(s.a,{only:"lg"},r.a.createElement(i.a,{className:t.paper},"Hidden on lg")),r.a.createElement(s.a,{only:"sm"},r.a.createElement(i.a,{className:t.paper},"Hidden on sm")),r.a.createElement(s.a,{only:["sm","lg"]},r.a.createElement(i.a,{className:t.paper},"Hidden on sm and lg"))))}))},1876:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Paper from '@material-ui/core/Paper';\nimport Hidden from '@material-ui/core/Hidden';\nimport withWidth from '@material-ui/core/withWidth';\nimport Typography from '@material-ui/core/Typography';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    flexGrow: 1,\n  },\n  container: {\n    display: 'flex',\n    flexWrap: 'wrap',\n  },\n  paper: {\n    padding: theme.spacing(2),\n    textAlign: 'center',\n    color: theme.palette.text.secondary,\n    flex: '1 0 auto',\n    margin: theme.spacing(1),\n  },\n}));\n\nfunction BreakpointOnly(props) {\n  const classes = useStyles();\n  const { width } = props;\n\n  return (\n    <div className={classes.root}>\n      <Typography variant=\"subtitle1\">Current width: {width}</Typography>\n      <div className={classes.container}>\n        <Hidden only=\"lg\">\n          <Paper className={classes.paper}>Hidden on lg</Paper>\n        </Hidden>\n        <Hidden only=\"sm\">\n          <Paper className={classes.paper}>Hidden on sm</Paper>\n        </Hidden>\n        <Hidden only={['sm', 'lg']}>\n          <Paper className={classes.paper}>Hidden on sm and lg</Paper>\n        </Hidden>\n      </div>\n    </div>\n  );\n}\n\nBreakpointOnly.propTypes = {\n  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,\n};\n\nexport default withWidth()(BreakpointOnly);\n"},1877:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1218),i=n(205),s=n(1286),l=n(1250),c=n(1239),m=n(206),p=Object(o.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));t.default=Object(c.a)()((function(e){var t=p(),n=e.width;return r.a.createElement("div",{className:t.root},r.a.createElement(m.a,{variant:"subtitle1",gutterBottom:!0},"Current width: ",n),r.a.createElement(s.a,{container:!0,spacing:3},r.a.createElement(l.a,{xsUp:!0},r.a.createElement(s.a,{item:!0,xs:!0},r.a.createElement(i.a,{className:t.paper},"xsUp"))),r.a.createElement(l.a,{smUp:!0},r.a.createElement(s.a,{item:!0,xs:!0},r.a.createElement(i.a,{className:t.paper},"smUp"))),r.a.createElement(l.a,{mdUp:!0},r.a.createElement(s.a,{item:!0,xs:!0},r.a.createElement(i.a,{className:t.paper},"mdUp"))),r.a.createElement(l.a,{lgUp:!0},r.a.createElement(s.a,{item:!0,xs:!0},r.a.createElement(i.a,{className:t.paper},"lgUp"))),r.a.createElement(l.a,{xlUp:!0},r.a.createElement(s.a,{item:!0,xs:!0},r.a.createElement(i.a,{className:t.paper},"xlUp")))))}))},1878:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Paper from '@material-ui/core/Paper';\nimport Grid from '@material-ui/core/Grid';\nimport Hidden from '@material-ui/core/Hidden';\nimport withWidth from '@material-ui/core/withWidth';\nimport Typography from '@material-ui/core/Typography';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    flexGrow: 1,\n  },\n  paper: {\n    padding: theme.spacing(2),\n    textAlign: 'center',\n    color: theme.palette.text.secondary,\n  },\n}));\n\nfunction GridIntegration(props) {\n  const classes = useStyles();\n  const { width } = props;\n\n  return (\n    <div className={classes.root}>\n      <Typography variant=\"subtitle1\" gutterBottom>\n        Current width: {width}\n      </Typography>\n      <Grid container spacing={3}>\n        <Hidden xsUp>\n          <Grid item xs>\n            <Paper className={classes.paper}>xsUp</Paper>\n          </Grid>\n        </Hidden>\n        <Hidden smUp>\n          <Grid item xs>\n            <Paper className={classes.paper}>smUp</Paper>\n          </Grid>\n        </Hidden>\n        <Hidden mdUp>\n          <Grid item xs>\n            <Paper className={classes.paper}>mdUp</Paper>\n          </Grid>\n        </Hidden>\n        <Hidden lgUp>\n          <Grid item xs>\n            <Paper className={classes.paper}>lgUp</Paper>\n          </Grid>\n        </Hidden>\n        <Hidden xlUp>\n          <Grid item xs>\n            <Paper className={classes.paper}>xlUp</Paper>\n          </Grid>\n        </Hidden>\n      </Grid>\n    </div>\n  );\n}\n\nGridIntegration.propTypes = {\n  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,\n};\n\nexport default withWidth()(GridIntegration);\n"},2421:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1259),i=n(135),s=n(1226),l=n(1220),c=n(206),m=n(1218),p=Object(m.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){return p(),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex flex-1 flex-grow-0 items-center justify-end"},r.a.createElement(s.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/hidden",target:"_blank",role:"button"},r.a.createElement(l.a,null,"link"),r.a.createElement("span",{className:"mx-4"},"Reference"))),r.a.createElement(c.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Hidden"),r.a.createElement(c.a,{className:"description"},"Quickly and responsively toggle the visibility value of components and more with the hidden utilities."),r.a.createElement(c.a,{className:"mb-16",component:"div"},"All elements are visible unless ",r.a.createElement("strong",null,"they are explicitly hidden"),". To ease integration with Material-UI's ",r.a.createElement("a",{href:"/customization/breakpoints/"},"responsive breakpoints"),", this component can be used to hide any content, or you can use it in conjunction with the ",r.a.createElement("a",{href:"/components/grid/"},r.a.createElement("code",null,"Grid"))," component."),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"How it works"),r.a.createElement(c.a,{className:"mb-16",component:"div"},"Hidden works with a range of breakpoints e.g. ",r.a.createElement("code",null,"xsUp")," or ",r.a.createElement("code",null,"mdDown"),", or one or more breakpoints e.g. ",r.a.createElement("code",null,"only='sm'")," or ",r.a.createElement("code",null,"only={['md', 'xl']}"),". Ranges and individual breakpoints can be used simultaneously to achieve very customized behavior. The ranges are inclusive of the specified breakpoints."),r.a.createElement(i.a,{component:"pre",className:"language-js"}," \ninnerWidth  |xs      sm       md       lg       xl\n            |--------|--------|--------|--------|--------\x3e\nwidth       |   xs   |   sm   |   md   |   lg   |   xl\n\nsmUp        |   show | hide\nmdDown      |                     hide | show\n\n"),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Implementations"),r.a.createElement(c.a,{className:"text-24 mt-32 mb-8",component:"h3"},"js"),r.a.createElement(c.a,{className:"mb-16",component:"div"},"By default, the ",r.a.createElement("code",null,"js")," implementation is used, responsively hiding content based on using the ",r.a.createElement("a",{href:"/customization/breakpoints/#withwidth"},r.a.createElement("code",null,"withWidth()"))," higher-order component that watches screen size. This has the benefit of not rendering any content at all unless the breakpoint is met."),r.a.createElement(c.a,{className:"text-24 mt-32 mb-8",component:"h3"},"css"),r.a.createElement(c.a,{className:"mb-16",component:"div"},"If you are using server-side rendering, you can set ",r.a.createElement("code",null,'implementation="css"')," if you don't want the browser to re-flow your content on the screen."),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Breakpoint up"),r.a.createElement(c.a,{className:"mb-16",component:"div"},"Using any breakpoint ",r.a.createElement("code",null,"up")," property, the given ",r.a.createElement("em",null,"children")," will be hidden ",r.a.createElement("em",null,"at or above")," the breakpoint."),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(1871).default,raw:n(1872)})),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Breakpoint down"),r.a.createElement(c.a,{className:"mb-16",component:"div"},"Using any breakpoint ",r.a.createElement("code",null,"down")," property, the given ",r.a.createElement("em",null,"children")," will be hidden ",r.a.createElement("em",null,"at or below")," the breakpoint."),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(1873).default,raw:n(1874)})),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Breakpoint only"),r.a.createElement(c.a,{className:"mb-16",component:"div"},"Using the breakpoint ",r.a.createElement("code",null,"only")," property, the given ",r.a.createElement("em",null,"children")," will be hidden ",r.a.createElement("em",null,"at")," the specified breakpoint(s)."),r.a.createElement(c.a,{className:"mb-16",component:"div"},"The ",r.a.createElement("code",null,"only")," property can be used in two ways:"),r.a.createElement("ul",null,r.a.createElement("li",null,"list a single breakpoint"),r.a.createElement("li",null,"list an array of breakpoints")),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(1875).default,raw:n(1876)})),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Integration with Grid"),r.a.createElement(c.a,{className:"mb-16",component:"div"},"It is quite common to alter ",r.a.createElement("code",null,"Grid")," at different responsive breakpoints, and in many cases, you want to hide some of those elements."),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(o.a,{className:"my-24",iframe:!1,component:n(1877).default,raw:n(1878)})))}}}]);