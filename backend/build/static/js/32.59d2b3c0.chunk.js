(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[32],{1259:function(e,t,n){"use strict";n.d(t,"a",(function(){return G}));var a=n(14),o=n(135),l=n(1229),r=n(1238),i=n(1220),c=n(1246),m=n(1247),s=n(2),u=n(0),d=n.n(u),p=n(13),f=n(9),h=n(80),E=n(87),b=n(137),T=n(136),v=n(1162),g=n(633),y=n(1217),B=n(1228),w=n(8),N=n(411),x=n(412),A=n(1260),C=n.n(A),j=Object(v.a)({productionPrefix:"iframe-"}),O=function(e){Object(b.a)(n,e);var t=Object(T.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(N.a)(Object(f.a)(Object(f.a)({},Object(g.a)()),{},{plugins:[].concat(Object(p.a)(Object(g.a)().plugins),[Object(x.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),d.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(E.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,a=e.theme;return d.a.createElement(C.a,{head:this.renderHead(),ref:this.handleRef,className:Object(s.default)(n.root,"shadow"),contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?d.a.createElement(y.b,{jss:this.state.jss,generateClassName:j,sheetsManager:this.state.sheetsManager},d.a.createElement(B.a,{theme:a},d.a.cloneElement(t,{container:this.state.container}))):null)}}]),n}(d.a.Component),k=Object(w.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none"}}}),{withTheme:!0})(O);function S(e){var t=Object(u.useState)(e.currentTabIndex),n=Object(a.a)(t,2),p=n[0],f=n[1],h=e.component,E=e.raw,b=e.iframe,T=e.className;return d.a.createElement(r.a,{className:Object(s.default)(T,"shadow")},d.a.createElement(l.a,{position:"static",color:"default",className:"shadow-0"},d.a.createElement(m.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:p,onChange:function(e,t){f(t)}},h&&d.a.createElement(c.a,{classes:{root:"min-w-64"},icon:d.a.createElement(i.a,null,"remove_red_eye")}),E&&d.a.createElement(c.a,{classes:{root:"min-w-64"},icon:d.a.createElement(i.a,null,"code")}))),d.a.createElement("div",{className:"flex justify-center max-w-full"},d.a.createElement("div",{className:0===p?"flex flex-1 max-w-full":"hidden"},h&&(b?d.a.createElement(k,null,d.a.createElement(h,null)):d.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},d.a.createElement(h,null)))),d.a.createElement("div",{className:1===p?"flex flex-1":"hidden"},E&&d.a.createElement("div",{className:"flex flex-1"},d.a.createElement(o.a,{component:"pre",className:"language-javascript w-full"},E.default)))))}S.defaultProps={currentTabIndex:0};var G=S},2253:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n(0),o=n.n(a),l=n(1218),r=n(1289),i=n.n(r),c=n(1231),m=n(1306),s=n.n(m),u=n(1166),d=n(1227),p=Object(l.a)((function(e){return{fab:{margin:e.spacing(2)},absolute:{position:"absolute",bottom:e.spacing(2),right:e.spacing(3)}}}));function f(){var e=p();return o.a.createElement("div",null,o.a.createElement(d.a,{title:"Delete"},o.a.createElement(u.a,{"aria-label":"delete"},o.a.createElement(s.a,null))),o.a.createElement(d.a,{title:"Add","aria-label":"add"},o.a.createElement(c.a,{color:"primary",className:e.fab},o.a.createElement(i.a,null))),o.a.createElement(d.a,{title:"Add","aria-label":"add"},o.a.createElement(c.a,{color:"secondary",className:e.absolute},o.a.createElement(i.a,null))))}},2254:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport AddIcon from '@material-ui/icons/Add';\nimport Fab from '@material-ui/core/Fab';\nimport DeleteIcon from '@material-ui/icons/Delete';\nimport IconButton from '@material-ui/core/IconButton';\nimport Tooltip from '@material-ui/core/Tooltip';\n\nconst useStyles = makeStyles((theme) => ({\n  fab: {\n    margin: theme.spacing(2),\n  },\n  absolute: {\n    position: 'absolute',\n    bottom: theme.spacing(2),\n    right: theme.spacing(3),\n  },\n}));\n\nexport default function SimpleTooltips() {\n  const classes = useStyles();\n\n  return (\n    <div>\n      <Tooltip title=\"Delete\">\n        <IconButton aria-label=\"delete\">\n          <DeleteIcon />\n        </IconButton>\n      </Tooltip>\n      <Tooltip title=\"Add\" aria-label=\"add\">\n        <Fab color=\"primary\" className={classes.fab}>\n          <AddIcon />\n        </Fab>\n      </Tooltip>\n      <Tooltip title=\"Add\" aria-label=\"add\">\n        <Fab color=\"secondary\" className={classes.absolute}>\n          <AddIcon />\n        </Fab>\n      </Tooltip>\n    </div>\n  );\n}\n"},2255:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(0),o=n.n(a),l=n(1218),r=n(1286),i=n(1226),c=n(1227),m=Object(l.a)({root:{width:500}});function s(){var e=m();return o.a.createElement("div",{className:e.root},o.a.createElement(r.a,{container:!0,justify:"center"},o.a.createElement(r.a,{item:!0},o.a.createElement(c.a,{title:"Add",placement:"top-start"},o.a.createElement(i.a,null,"top-start")),o.a.createElement(c.a,{title:"Add",placement:"top"},o.a.createElement(i.a,null,"top")),o.a.createElement(c.a,{title:"Add",placement:"top-end"},o.a.createElement(i.a,null,"top-end")))),o.a.createElement(r.a,{container:!0,justify:"center"},o.a.createElement(r.a,{item:!0,xs:6},o.a.createElement(c.a,{title:"Add",placement:"left-start"},o.a.createElement(i.a,null,"left-start")),o.a.createElement("br",null),o.a.createElement(c.a,{title:"Add",placement:"left"},o.a.createElement(i.a,null,"left")),o.a.createElement("br",null),o.a.createElement(c.a,{title:"Add",placement:"left-end"},o.a.createElement(i.a,null,"left-end"))),o.a.createElement(r.a,{item:!0,container:!0,xs:6,alignItems:"flex-end",direction:"column"},o.a.createElement(r.a,{item:!0},o.a.createElement(c.a,{title:"Add",placement:"right-start"},o.a.createElement(i.a,null,"right-start"))),o.a.createElement(r.a,{item:!0},o.a.createElement(c.a,{title:"Add",placement:"right"},o.a.createElement(i.a,null,"right"))),o.a.createElement(r.a,{item:!0},o.a.createElement(c.a,{title:"Add",placement:"right-end"},o.a.createElement(i.a,null,"right-end"))))),o.a.createElement(r.a,{container:!0,justify:"center"},o.a.createElement(r.a,{item:!0},o.a.createElement(c.a,{title:"Add",placement:"bottom-start"},o.a.createElement(i.a,null,"bottom-start")),o.a.createElement(c.a,{title:"Add",placement:"bottom"},o.a.createElement(i.a,null,"bottom")),o.a.createElement(c.a,{title:"Add",placement:"bottom-end"},o.a.createElement(i.a,null,"bottom-end")))))}},2256:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Grid from \'@material-ui/core/Grid\';\nimport Button from \'@material-ui/core/Button\';\nimport Tooltip from \'@material-ui/core/Tooltip\';\n\nconst useStyles = makeStyles({\n  root: {\n    width: 500,\n  },\n});\n\nexport default function PositionedTooltips() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Grid container justify="center">\n        <Grid item>\n          <Tooltip title="Add" placement="top-start">\n            <Button>top-start</Button>\n          </Tooltip>\n          <Tooltip title="Add" placement="top">\n            <Button>top</Button>\n          </Tooltip>\n          <Tooltip title="Add" placement="top-end">\n            <Button>top-end</Button>\n          </Tooltip>\n        </Grid>\n      </Grid>\n      <Grid container justify="center">\n        <Grid item xs={6}>\n          <Tooltip title="Add" placement="left-start">\n            <Button>left-start</Button>\n          </Tooltip>\n          <br />\n          <Tooltip title="Add" placement="left">\n            <Button>left</Button>\n          </Tooltip>\n          <br />\n          <Tooltip title="Add" placement="left-end">\n            <Button>left-end</Button>\n          </Tooltip>\n        </Grid>\n        <Grid item container xs={6} alignItems="flex-end" direction="column">\n          <Grid item>\n            <Tooltip title="Add" placement="right-start">\n              <Button>right-start</Button>\n            </Tooltip>\n          </Grid>\n          <Grid item>\n            <Tooltip title="Add" placement="right">\n              <Button>right</Button>\n            </Tooltip>\n          </Grid>\n          <Grid item>\n            <Tooltip title="Add" placement="right-end">\n              <Button>right-end</Button>\n            </Tooltip>\n          </Grid>\n        </Grid>\n      </Grid>\n      <Grid container justify="center">\n        <Grid item>\n          <Tooltip title="Add" placement="bottom-start">\n            <Button>bottom-start</Button>\n          </Tooltip>\n          <Tooltip title="Add" placement="bottom">\n            <Button>bottom</Button>\n          </Tooltip>\n          <Tooltip title="Add" placement="bottom-end">\n            <Button>bottom-end</Button>\n          </Tooltip>\n        </Grid>\n      </Grid>\n    </div>\n  );\n}\n'},2257:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n(0),o=n.n(a),l=n(8),r=n(1218),i=n(1226),c=n(1227),m=n(206),s=Object(l.a)((function(e){return{tooltip:{backgroundColor:e.palette.common.white,color:"rgba(0, 0, 0, 0.87)",boxShadow:e.shadows[1],fontSize:11}}}))(c.a),u=Object(r.a)((function(e){return{arrow:{color:e.palette.common.black},tooltip:{backgroundColor:e.palette.common.black}}}));function d(e){var t=u();return o.a.createElement(c.a,Object.assign({arrow:!0,classes:t},e))}var p=Object(l.a)((function(e){return{tooltip:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",maxWidth:220,fontSize:e.typography.pxToRem(12),border:"1px solid #dadde9"}}}))(c.a);function f(){return o.a.createElement("div",null,o.a.createElement(s,{title:"Add"},o.a.createElement(i.a,null,"Light")),o.a.createElement(d,{title:"Add"},o.a.createElement(i.a,null,"Bootstrap")),o.a.createElement(p,{title:o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{color:"inherit"},"Tooltip with HTML"),o.a.createElement("em",null,"And here's")," ",o.a.createElement("b",null,"some")," ",o.a.createElement("u",null,"amazing content"),"."," ","It's very engaging. Right?")},o.a.createElement(i.a,null,"HTML")))}},2258:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { withStyles, makeStyles } from '@material-ui/core/styles';\nimport Button from '@material-ui/core/Button';\nimport Tooltip from '@material-ui/core/Tooltip';\nimport Typography from '@material-ui/core/Typography';\n\nconst LightTooltip = withStyles((theme) => ({\n  tooltip: {\n    backgroundColor: theme.palette.common.white,\n    color: 'rgba(0, 0, 0, 0.87)',\n    boxShadow: theme.shadows[1],\n    fontSize: 11,\n  },\n}))(Tooltip);\n\nconst useStylesBootstrap = makeStyles((theme) => ({\n  arrow: {\n    color: theme.palette.common.black,\n  },\n  tooltip: {\n    backgroundColor: theme.palette.common.black,\n  },\n}));\n\nfunction BootstrapTooltip(props) {\n  const classes = useStylesBootstrap();\n\n  return <Tooltip arrow classes={classes} {...props} />;\n}\n\nconst HtmlTooltip = withStyles((theme) => ({\n  tooltip: {\n    backgroundColor: '#f5f5f9',\n    color: 'rgba(0, 0, 0, 0.87)',\n    maxWidth: 220,\n    fontSize: theme.typography.pxToRem(12),\n    border: '1px solid #dadde9',\n  },\n}))(Tooltip);\n\nexport default function CustomizedTooltips() {\n  return (\n    <div>\n      <LightTooltip title=\"Add\">\n        <Button>Light</Button>\n      </LightTooltip>\n      <BootstrapTooltip title=\"Add\">\n        <Button>Bootstrap</Button>\n      </BootstrapTooltip>\n      <HtmlTooltip\n        title={\n          <React.Fragment>\n            <Typography color=\"inherit\">Tooltip with HTML</Typography>\n            <em>{\"And here's\"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}\n            {\"It's very engaging. Right?\"}\n          </React.Fragment>\n        }\n      >\n        <Button>HTML</Button>\n      </HtmlTooltip>\n    </div>\n  );\n}\n"},2259:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n(0),o=n.n(a),l=n(1226),r=n(1227);function i(){return o.a.createElement(r.a,{title:"Add",arrow:!0},o.a.createElement(l.a,null,"Arrow"))}},2260:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport Tooltip from '@material-ui/core/Tooltip';\n\nexport default function ArrowTooltips() {\n  return (\n    <Tooltip title=\"Add\" arrow>\n      <Button>Arrow</Button>\n    </Tooltip>\n  );\n}\n"},2261:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(14),o=n(0),l=n.n(o),r=n(1286),i=n(1226),c=n(1227),m=n(1164);function s(){var e=l.a.useState(!1),t=Object(a.a)(e,2),n=t[0],o=t[1],s=function(){o(!1)};return l.a.createElement("div",null,l.a.createElement(r.a,{container:!0,justify:"center"},l.a.createElement(r.a,{item:!0},l.a.createElement(c.a,{disableFocusListener:!0,title:"Add"},l.a.createElement(i.a,null,"Hover or touch"))),l.a.createElement(r.a,{item:!0},l.a.createElement(c.a,{disableHoverListener:!0,title:"Add"},l.a.createElement(i.a,null,"Focus or touch"))),l.a.createElement(r.a,{item:!0},l.a.createElement(c.a,{disableFocusListener:!0,disableTouchListener:!0,title:"Add"},l.a.createElement(i.a,null,"Hover"))),l.a.createElement(r.a,{item:!0},l.a.createElement(m.a,{onClickAway:s},l.a.createElement("div",null,l.a.createElement(c.a,{PopperProps:{disablePortal:!0},onClose:s,open:n,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,title:"Add"},l.a.createElement(i.a,{onClick:function(){o(!0)}},"Click")))))))}},2262:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Grid from '@material-ui/core/Grid';\nimport Button from '@material-ui/core/Button';\nimport Tooltip from '@material-ui/core/Tooltip';\nimport ClickAwayListener from '@material-ui/core/ClickAwayListener';\n\nexport default function TriggersTooltips() {\n  const [open, setOpen] = React.useState(false);\n\n  const handleTooltipClose = () => {\n    setOpen(false);\n  };\n\n  const handleTooltipOpen = () => {\n    setOpen(true);\n  };\n\n  return (\n    <div>\n      <Grid container justify=\"center\">\n        <Grid item>\n          <Tooltip disableFocusListener title=\"Add\">\n            <Button>Hover or touch</Button>\n          </Tooltip>\n        </Grid>\n        <Grid item>\n          <Tooltip disableHoverListener title=\"Add\">\n            <Button>Focus or touch</Button>\n          </Tooltip>\n        </Grid>\n        <Grid item>\n          <Tooltip disableFocusListener disableTouchListener title=\"Add\">\n            <Button>Hover</Button>\n          </Tooltip>\n        </Grid>\n        <Grid item>\n          <ClickAwayListener onClickAway={handleTooltipClose}>\n            <div>\n              <Tooltip\n                PopperProps={{\n                  disablePortal: true,\n                }}\n                onClose={handleTooltipClose}\n                open={open}\n                disableFocusListener\n                disableHoverListener\n                disableTouchListener\n                title=\"Add\"\n              >\n                <Button onClick={handleTooltipOpen}>Click</Button>\n              </Tooltip>\n            </div>\n          </ClickAwayListener>\n        </Grid>\n      </Grid>\n    </div>\n  );\n}\n"},2263:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n(14),o=n(0),l=n.n(o),r=n(1226),i=n(1227);function c(){var e=l.a.useState(!1),t=Object(a.a)(e,2),n=t[0],o=t[1];return l.a.createElement(i.a,{open:n,onClose:function(){o(!1)},onOpen:function(){o(!0)},title:"Add"},l.a.createElement(r.a,null,"Controlled"))}},2264:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport Tooltip from '@material-ui/core/Tooltip';\n\nexport default function ControlledTooltips() {\n  const [open, setOpen] = React.useState(false);\n\n  const handleClose = () => {\n    setOpen(false);\n  };\n\n  const handleOpen = () => {\n    setOpen(true);\n  };\n\n  return (\n    <Tooltip open={open} onClose={handleClose} onOpen={handleOpen} title=\"Add\">\n      <Button>Controlled</Button>\n    </Tooltip>\n  );\n}\n"},2265:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(0),o=n.n(a),l=n(1218),r=n(1226),i=n(1227),c=Object(l.a)((function(e){return{button:{margin:e.spacing(1)},customWidth:{maxWidth:500},noMaxWidth:{maxWidth:"none"}}})),m="\nAliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.\nPraesent non nunc mollis, fermentum neque at, semper arcu.\nNullam eget est sed sem iaculis gravida eget vitae justo.\n";function s(){var e=c();return o.a.createElement("div",null,o.a.createElement(i.a,{title:m},o.a.createElement(r.a,{className:e.button},"Default Width [300px]")),o.a.createElement(i.a,{title:m,classes:{tooltip:e.customWidth}},o.a.createElement(r.a,{className:e.button},"Custom Width [500px]")),o.a.createElement(i.a,{title:m,classes:{tooltip:e.noMaxWidth}},o.a.createElement(r.a,{className:e.button},"No wrapping")))}},2266:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Button from '@material-ui/core/Button';\nimport Tooltip from '@material-ui/core/Tooltip';\n\nconst useStyles = makeStyles((theme) => ({\n  button: {\n    margin: theme.spacing(1),\n  },\n  customWidth: {\n    maxWidth: 500,\n  },\n  noMaxWidth: {\n    maxWidth: 'none',\n  },\n}));\n\nconst longText = `\nAliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.\nPraesent non nunc mollis, fermentum neque at, semper arcu.\nNullam eget est sed sem iaculis gravida eget vitae justo.\n`;\n\nexport default function VariableWidth() {\n  const classes = useStyles();\n\n  return (\n    <div>\n      <Tooltip title={longText}>\n        <Button className={classes.button}>Default Width [300px]</Button>\n      </Tooltip>\n      <Tooltip title={longText} classes={{ tooltip: classes.customWidth }}>\n        <Button className={classes.button}>Custom Width [500px]</Button>\n      </Tooltip>\n      <Tooltip title={longText} classes={{ tooltip: classes.noMaxWidth }}>\n        <Button className={classes.button}>No wrapping</Button>\n      </Tooltip>\n    </div>\n  );\n}\n"},2267:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n(0),o=n.n(a),l=n(1226),r=n(1227);function i(){return o.a.createElement(r.a,{title:"Add",interactive:!0},o.a.createElement(l.a,null,"Interactive"))}},2268:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport Tooltip from '@material-ui/core/Tooltip';\n\nexport default function InteractiveTooltips() {\n  return (\n    <Tooltip title=\"Add\" interactive>\n      <Button>Interactive</Button>\n    </Tooltip>\n  );\n}\n"},2269:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n(0),o=n.n(a),l=n(1226),r=n(1227);function i(){return o.a.createElement(r.a,{title:"You don't have permission to do this"},o.a.createElement("span",null,o.a.createElement(l.a,{disabled:!0},"A Disabled Button")))}},2270:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport Tooltip from '@material-ui/core/Tooltip';\n\nexport default function DisabledTooltips() {\n  return (\n    <Tooltip title=\"You don't have permission to do this\">\n      <span>\n        <Button disabled>A Disabled Button</Button>\n      </span>\n    </Tooltip>\n  );\n}\n"},2271:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(0),o=n.n(a),l=n(1226),r=n(1227),i=n(628),c=n(1406);function m(){return o.a.createElement("div",null,o.a.createElement(r.a,{title:"Add"},o.a.createElement(l.a,null,"Grow")),o.a.createElement(r.a,{TransitionComponent:i.a,TransitionProps:{timeout:600},title:"Add"},o.a.createElement(l.a,null,"Fade")),o.a.createElement(r.a,{TransitionComponent:c.a,title:"Add"},o.a.createElement(l.a,null,"Zoom")))}},2272:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport Tooltip from '@material-ui/core/Tooltip';\nimport Fade from '@material-ui/core/Fade';\nimport Zoom from '@material-ui/core/Zoom';\n\nexport default function TransitionsTooltips() {\n  return (\n    <div>\n      <Tooltip title=\"Add\">\n        <Button>Grow</Button>\n      </Tooltip>\n      <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title=\"Add\">\n        <Button>Fade</Button>\n      </Tooltip>\n      <Tooltip TransitionComponent={Zoom} title=\"Add\">\n        <Button>Zoom</Button>\n      </Tooltip>\n    </div>\n  );\n}\n"},2273:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n(0),o=n.n(a),l=n(1226),r=n(1227);function i(){return o.a.createElement(r.a,{title:"Add",enterDelay:500,leaveDelay:200},o.a.createElement(l.a,null,"[500ms, 200ms]"))}},2274:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport Tooltip from '@material-ui/core/Tooltip';\n\nexport default function DelayTooltips() {\n  return (\n    <Tooltip title=\"Add\" enterDelay={500} leaveDelay={200}>\n      <Button>[500ms, 200ms]</Button>\n    </Tooltip>\n  );\n}\n"},2461:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(1259),r=n(135),i=n(1226),c=n(1220),m=n(206),s=n(1218),u=Object(s.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){return u(),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"flex flex-1 flex-grow-0 items-center justify-end"},o.a.createElement(i.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/tooltips",target:"_blank",role:"button"},o.a.createElement(c.a,null,"link"),o.a.createElement("span",{className:"mx-4"},"Reference"))),o.a.createElement(m.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Tooltip"),o.a.createElement(m.a,{className:"description"},"Tooltips display informative text when users hover over, focus on, or tap an element."),o.a.createElement(m.a,{className:"mb-16",component:"div"},"When activated, ",o.a.createElement("a",{href:"https://material.io/design/components/tooltips.html"},"Tooltips")," display a text label identifying an element, such as a description of its function."),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Simple Tooltips"),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(l.a,{className:"my-24",iframe:!1,component:n(2253).default,raw:n(2254)})),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Positioned Tooltips"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"The ",o.a.createElement("code",null,"Tooltip")," has 12 ",o.a.createElement("strong",null,"placements")," choice. They don\u2019t have directional arrows; instead, they rely on motion emanating from the source to convey direction."),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(l.a,{className:"my-24",iframe:!1,component:n(2255).default,raw:n(2256)})),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Customized tooltips"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"Here are some examples of customizing the component. You can learn more about this in the",o.a.createElement("a",{href:"/customization/components/"},"overrides documentation page"),"."),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(l.a,{className:"my-24",iframe:!1,component:n(2257).default,raw:n(2258)})),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Arrow Tooltips"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"You can use the ",o.a.createElement("code",null,"arrow")," prop to give your tooltip an arrow indicating which element it refers to."),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(l.a,{className:"my-24",iframe:!1,component:n(2259).default,raw:n(2260)})),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Custom child element"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"The tooltip needs to apply DOM event listeners to its child element. If the child is a custom React element, you need to make sure that it spreads its properties to the underlying DOM element."),o.a.createElement(r.a,{component:"pre",className:"language-jsx"},' \nconst MyComponent = React.forwardRef(function MyComponent(props, ref) {\n  //  Spread the props to the underlying DOM element.\n  return <div {...props} ref={ref}>Bin</div>\n});\n\n// ...\n\n<Tooltip title="Delete">\n  <MyComponent>\n</Tooltip>\n'),o.a.createElement(m.a,{className:"mb-16",component:"div"},"You can find a similar concept in the ",o.a.createElement("a",{href:"/guides/composition/#wrapping-components"},"wrapping components")," guide."),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Triggers"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"You can define the types of events that cause a tooltip to show."),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(l.a,{className:"my-24",iframe:!1,component:n(2261).default,raw:n(2262)})),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Controlled Tooltips"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"You can use the ",o.a.createElement("code",null,"open"),", ",o.a.createElement("code",null,"onOpen")," and ",o.a.createElement("code",null,"onClose")," properties to control the behavior of the tooltip."),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(l.a,{className:"my-24",iframe:!1,component:n(2263).default,raw:n(2264)})),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Variable Width"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"The ",o.a.createElement("code",null,"Tooltip")," wraps long text by default to make it readable."),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(l.a,{className:"my-24",iframe:!1,component:n(2265).default,raw:n(2266)})),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Interactive"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"A tooltip can be interactive. It won't close when the user hovers over the tooltip before the ",o.a.createElement("code",null,"leaveDelay")," is expired."),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(l.a,{className:"my-24",iframe:!1,component:n(2267).default,raw:n(2268)})),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Disabled Elements"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"By default disabled elements like ",o.a.createElement("code",null,"<button>")," do not trigger user interactions so a ",o.a.createElement("code",null,"Tooltip")," will not activate on normal events like hover. To accommodate disabled elements, add a simple wrapper element, such as a ",o.a.createElement("code",null,"span"),"."),o.a.createElement("blockquote",null,o.a.createElement(m.a,{className:"mb-16",component:"div"},"\u26a0\ufe0f In order to work with Safari, you need at least one display block or flex item below the tooltip wrapper.")),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(l.a,{className:"my-24",iframe:!1,component:n(2269).default,raw:n(2270)})),o.a.createElement("blockquote",null,o.a.createElement(m.a,{className:"mb-16",component:"div"},"If you're not wrapping a Material-UI component that inherits from ",o.a.createElement("code",null,"ButtonBase"),", for instance, a native ",o.a.createElement("code",null,"<button>")," element, you should also add the CSS property ",o.a.createElement("em",null,"pointer-events: none;")," to your element when disabled:")),o.a.createElement(r.a,{component:"pre",className:"language-jsx"},' \n<Tooltip title="You don\'t have permission to do this">\n  <span>\n    <button disabled={disabled} style={disabled ? { pointerEvents: "none" } : {}}>\n      {\'A disabled button\'}\n    </button>\n  </span>\n</Tooltip>\n'),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Transitions"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"Use a different transition."),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(l.a,{className:"my-24",iframe:!1,component:n(2271).default,raw:n(2272)})),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Showing and hiding"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"The tooltip is normally shown immediately when the user's mouse hovers over the element, and hides immediately when the user's mouse leaves. A delay in showing or hiding the tooltip can be added through the properties ",o.a.createElement("code",null,"enterDelay")," and ",o.a.createElement("code",null,"leaveDelay"),", as shown in the Controlled Tooltips demo above."),o.a.createElement(m.a,{className:"mb-16",component:"div"},"On mobile, the tooltip is displayed when the user longpresses the element and hides after a delay of 1500ms. You can disable this feature with the ",o.a.createElement("code",null,"disableTouchListener")," property."),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(l.a,{className:"my-24",iframe:!1,component:n(2273).default,raw:n(2274)})))}}}]);