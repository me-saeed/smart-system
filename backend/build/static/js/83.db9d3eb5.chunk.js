(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[83],{1258:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var a,o=n(0),r=(a=o)&&a.__esModule?a:{default:a};var i=void 0,l=void 0;"undefined"!==typeof document&&(i=document),"undefined"!==typeof window&&(l=window);var c=t.FrameContext=r.default.createContext({document:i,window:l}),s=c.Provider,u=c.Consumer;t.FrameContextProvider=s,t.FrameContextConsumer=u},1259:function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var a=n(14),o=n(135),r=n(1229),i=n(1238),l=n(1220),c=n(1246),s=n(1247),u=n(2),d=n(0),m=n.n(d),f=n(13),p=n(9),h=n(80),b=n(87),y=n(137),v=n(136),g=n(1162),E=n(633),w=n(1217),k=n(1228),j=n(8),x=n(411),O=n(412),C=n(1260),D=n.n(C),_=Object(g.a)({productionPrefix:"iframe-"}),N=function(e){Object(y.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(x.a)(Object(p.a)(Object(p.a)({},Object(E.a)()),{},{plugins:[].concat(Object(f.a)(Object(E.a)().plugins),[Object(O.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),m.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,a=e.theme;return m.a.createElement(D.a,{head:this.renderHead(),ref:this.handleRef,className:Object(u.default)(n.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?m.a.createElement(w.b,{jss:this.state.jss,generateClassName:_,sheetsManager:this.state.sheetsManager},m.a.createElement(k.a,{theme:a},m.a.cloneElement(t,{container:this.state.container}))):null)}}]),n}(m.a.Component),T=Object(j.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(N);function L(e){var t=Object(d.useState)(e.currentTabIndex),n=Object(a.a)(t,2),f=n[0],p=n[1],h=e.component,b=e.raw,y=e.iframe,v=e.className;return m.a.createElement(i.a,{className:Object(u.default)(v,"shadow")},m.a.createElement(r.a,{position:"static",color:"default",className:"shadow-0"},m.a.createElement(s.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:f,onChange:function(e,t){p(t)}},h&&m.a.createElement(c.a,{classes:{root:"min-w-64"},icon:m.a.createElement(l.a,null,"remove_red_eye")}),b&&m.a.createElement(c.a,{classes:{root:"min-w-64"},icon:m.a.createElement(l.a,null,"code")}))),m.a.createElement("div",{className:"flex justify-center max-w-full"},m.a.createElement("div",{className:0===f?"flex flex-1 max-w-full":"hidden"},h&&(y?m.a.createElement(T,null,m.a.createElement(h,null)):m.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},m.a.createElement(h,null)))),m.a.createElement("div",{className:1===f?"flex flex-1":"hidden"},b&&m.a.createElement("div",{className:"flex flex-1"},m.a.createElement(o.a,{component:"pre",className:"language-javascript w-full"},b.default)))))}L.defaultProps={currentTabIndex:0};var M=L},1260:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var a=n(1258);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return a.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return a.FrameContextConsumer}});var o,r=n(1261),i=(o=r)&&o.__esModule?o:{default:o};t.default=i.default},1261:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),i=d(r),l=d(n(20)),c=d(n(4)),s=n(1258),u=d(n(1262));function d(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.handleLoad=function(){a.forceUpdate()},a._isMounted=!1,a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,n=this.props.contentDidUpdate,a=e.defaultView||e.parentView,o=i.default.createElement(u.default,{contentDidMount:t,contentDidUpdate:n},i.default.createElement(s.FrameContextProvider,{value:{document:e,window:a}},i.default.createElement("div",{className:"frame-content"},this.props.children)));e.body.children.length<1&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close());var r=this.getMountTarget();return[l.default.createPortal(this.props.head,this.getDoc().head),l.default.createPortal(o,r)]}},{key:"render",value:function(){var e=this,t=a({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,i.default.createElement("iframe",a({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(r.Component);m.propTypes={style:c.default.object,head:c.default.node,initialContent:c.default.string,mountTarget:c.default.string,contentDidMount:c.default.func,contentDidUpdate:c.default.func,children:c.default.oneOfType([c.default.element,c.default.arrayOf(c.default.element)])},m.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=m},1262:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),r=(i(o),i(n(4)));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s=function(e){function t(){return l(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return o.Children.only(this.props.children)}}]),t}(o.Component);s.propTypes={children:r.default.element.isRequired,contentDidMount:r.default.func.isRequired,contentDidUpdate:r.default.func.isRequired},t.default=s},1669:function(e,t,n){"use strict";var a=n(1),o=n(5),r=n(0),i=(n(4),n(2)),l=n(10),c=n(8),s=n(238),u=n(24),d=n(206),m=r.forwardRef((function(e,t){var n=e.classes,c=e.className,m=e.color,f=void 0===m?"primary":m,p=e.component,h=void 0===p?"a":p,b=e.onBlur,y=e.onFocus,v=e.TypographyClasses,g=e.underline,E=void 0===g?"hover":g,w=e.variant,k=void 0===w?"inherit":w,j=Object(o.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),x=Object(s.a)(),O=x.isFocusVisible,C=x.onBlurVisible,D=x.ref,_=r.useState(!1),N=_[0],T=_[1],L=Object(u.a)(t,D);return r.createElement(d.a,Object(a.a)({className:Object(i.default)(n.root,n["underline".concat(Object(l.a)(E))],c,N&&n.focusVisible,"button"===h&&n.button),classes:v,color:f,component:h,onBlur:function(e){N&&(C(),T(!1)),b&&b(e)},onFocus:function(e){O(e)&&T(!0),y&&y(e)},ref:L,variant:k},j))}));t.a=Object(c.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(m)},1879:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(0),o=n.n(a),r=n(1218),i=n(1669),l=n(206),c=Object(r.a)((function(e){return{root:{"& > * + *":{marginLeft:e.spacing(2)}}}}));function s(){var e=c(),t=function(e){return e.preventDefault()};return o.a.createElement(l.a,{className:e.root},o.a.createElement(i.a,{href:"#",onClick:t},"Link"),o.a.createElement(i.a,{href:"#",onClick:t,color:"inherit"},'color="inherit"'),o.a.createElement(i.a,{href:"#",onClick:t,variant:"body2"},'variant="body2"'))}},1880:function(e,t,n){"use strict";n.r(t),t.default="/* eslint-disable jsx-a11y/anchor-is-valid */\nimport React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Link from '@material-ui/core/Link';\nimport Typography from '@material-ui/core/Typography';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    '& > * + *': {\n      marginLeft: theme.spacing(2),\n    },\n  },\n}));\n\nexport default function Links() {\n  const classes = useStyles();\n  const preventDefault = (event) => event.preventDefault();\n\n  return (\n    <Typography className={classes.root}>\n      <Link href=\"#\" onClick={preventDefault}>\n        Link\n      </Link>\n      <Link href=\"#\" onClick={preventDefault} color=\"inherit\">\n        {'color=\"inherit\"'}\n      </Link>\n      <Link href=\"#\" onClick={preventDefault} variant=\"body2\">\n        {'variant=\"body2\"'}\n      </Link>\n    </Typography>\n  );\n}\n"},1881:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n(0),o=n.n(a),r=n(1669);function i(){return o.a.createElement(r.a,{component:"button",variant:"body2",onClick:function(){console.info("I'm a button.")}},"Button Link")}},1882:function(e,t,n){"use strict";n.r(t),t.default='/* eslint-disable jsx-a11y/anchor-is-valid */\nimport React from \'react\';\nimport Link from \'@material-ui/core/Link\';\n\nexport default function ButtonLink() {\n  return (\n    <Link\n      component="button"\n      variant="body2"\n      onClick={() => {\n        console.info("I\'m a button.");\n      }}\n    >\n      Button Link\n    </Link>\n  );\n}\n'},2422:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(1259),i=(n(135),n(1226)),l=n(1220),c=n(206),s=n(1218),u=Object(s.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){return u(),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"flex flex-1 flex-grow-0 items-center justify-end"},o.a.createElement(i.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/links",target:"_blank",role:"button"},o.a.createElement(l.a,null,"link"),o.a.createElement("span",{className:"mx-4"},"Reference"))),o.a.createElement(c.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Links"),o.a.createElement(c.a,{className:"description"},"The Link component allows you to easily customize anchor elements with your theme colors and typography styles."),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Simple links"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"The Link component is built on top of the ",o.a.createElement("a",{href:"/api/typography/"},"Typography")," component. You can leverage its properties."),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(1879).default,raw:n(1880)})),o.a.createElement(c.a,{className:"mb-16",component:"div"},"However, the Link component has different default properties than the Typography component:"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("code",null,'color="primary"')," as the link needs to stand out."),o.a.createElement("li",null,o.a.createElement("code",null,'variant="inherit"')," as the link will, most of the time, be used as a child of a Typography component.")),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Security"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"When you use ",o.a.createElement("code",null,'target="_blank"')," with Links, it is ",o.a.createElement("a",{href:"https://developers.google.com/web/tools/lighthouse/audits/noopener"},"recommended")," to always set ",o.a.createElement("code",null,'rel="noopener"')," or ",o.a.createElement("code",null,'rel="noreferrer"')," when linking to third party content."),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("code",null,'rel="noopener"')," prevents the new page from being able to access the ",o.a.createElement("code",null,"window.opener")," property and ensures it runs in a separate process. Without this, the target page can potentially redirect your page to a malicious URL."),o.a.createElement("li",null,o.a.createElement("code",null,'rel="noreferrer"')," has the same effect, but also prevents the ",o.a.createElement("em",null,"Referer")," header from being sent to the new page. \u26a0\ufe0f Removing the referrer header will affect analytics.")),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Third-party routing library"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"One common use case is to perform navigation on the client only, without an HTTP round-trip to the server. The ",o.a.createElement("code",null,"Link")," component provides a property to handle this use case: ",o.a.createElement("code",null,"component"),"."),o.a.createElement(c.a,{className:"mb-16",component:"div"},"Here is an ",o.a.createElement("a",{href:"/guides/composition/#link"},"integration example with react-router"),"."),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Accessibility"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"(WAI-ARIA: ",o.a.createElement("a",{href:"https://www.w3.org/TR/wai-aria-practices/#link"},"https://www.w3.org/TR/wai-aria-practices/#link"),")"),o.a.createElement("ul",null,o.a.createElement("li",null,'When providing the content for the link, avoid generic descriptions like "click here" or "go to". Instead, use ',o.a.createElement("a",{href:"https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text"},"specific descriptions"),"."),o.a.createElement("li",null,"For the best user experience, links should stand out from the text on the page."),o.a.createElement("li",null,"If a link doesn't have a meaningful href, ",o.a.createElement("a",{href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md"},"it should be rendered using a ",o.a.createElement("code",null,"<button>")," element"),".")),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(1881).default,raw:n(1882)})))}}}]);