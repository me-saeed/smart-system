(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[107],{1390:function(e,a,t){"use strict";var l=t(1),n=t(5),r=t(0),c=(t(4),t(2)),s=t(8),i=r.forwardRef((function(e,a){var t=e.disableSpacing,s=void 0!==t&&t,i=e.classes,m=e.className,o=Object(n.a)(e,["disableSpacing","classes","className"]);return r.createElement("div",Object(l.a)({className:Object(c.default)(i.root,m,!s&&i.spacing),ref:a},o))}));a.a=Object(s.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(i)},1457:function(e,a,t){"use strict";var l=t(1),n=t(5),r=t(0),c=(t(4),t(2)),s=t(8),i=t(206),m=r.forwardRef((function(e,a){var t=e.action,s=e.avatar,m=e.classes,o=e.className,d=e.component,p=void 0===d?"div":d,u=e.disableTypography,f=void 0!==u&&u,E=e.subheader,b=e.subheaderTypographyProps,v=e.title,x=e.titleTypographyProps,N=Object(n.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),h=v;null==h||h.type===i.a||f||(h=r.createElement(i.a,Object(l.a)({variant:s?"body2":"h5",className:m.title,component:"span",display:"block"},x),h));var g=E;return null==g||g.type===i.a||f||(g=r.createElement(i.a,Object(l.a)({variant:s?"body2":"body1",className:m.subheader,color:"textSecondary",component:"span",display:"block"},b),g)),r.createElement(p,Object(l.a)({className:Object(c.default)(m.root,o),ref:a},N),s&&r.createElement("div",{className:m.avatar},s),r.createElement("div",{className:m.content},h,g),t&&r.createElement("div",{className:m.action},t))}));a.a=Object(s.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(m)},1860:function(e,a,t){"use strict";var l=t(1),n=t(5),r=t(0),c=(t(152),t(4),t(2)),s=t(8),i=r.forwardRef((function(e,a){var t=e.cellHeight,s=void 0===t?180:t,i=e.children,m=e.classes,o=e.className,d=e.cols,p=void 0===d?2:d,u=e.component,f=void 0===u?"ul":u,E=e.spacing,b=void 0===E?4:E,v=e.style,x=Object(n.a)(e,["cellHeight","children","classes","className","cols","component","spacing","style"]);return r.createElement(f,Object(l.a)({className:Object(c.default)(m.root,o),ref:a,style:Object(l.a)({margin:-b/2},v)},x),r.Children.map(i,(function(e){if(!r.isValidElement(e))return null;var a=e.props.cols||1,t=e.props.rows||1;return r.cloneElement(e,{style:Object(l.a)({width:"".concat(100/p*a,"%"),height:"auto"===s?"auto":s*t+b,padding:b/2},e.props.style)})})))}));a.a=Object(s.a)({root:{display:"flex",flexWrap:"wrap",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"}},{name:"MuiGridList"})(i)},1861:function(e,a,t){"use strict";var l=t(1),n=t(5),r=t(83),c=t(0),s=(t(4),t(2)),i=t(107),m=t(8),o=t(167),d=function(e,a){var t,l,n,c;e&&e.complete&&(e.width/e.height>e.parentElement.offsetWidth/e.parentElement.offsetHeight?((t=e.classList).remove.apply(t,Object(r.a)(a.imgFullWidth.split(" "))),(l=e.classList).add.apply(l,Object(r.a)(a.imgFullHeight.split(" ")))):((n=e.classList).remove.apply(n,Object(r.a)(a.imgFullHeight.split(" "))),(c=e.classList).add.apply(c,Object(r.a)(a.imgFullWidth.split(" ")))))};var p=c.forwardRef((function(e,a){var t=e.children,r=e.classes,m=e.className,p=(e.cols,e.component),u=void 0===p?"li":p,f=(e.rows,Object(n.a)(e,["children","classes","className","cols","component","rows"])),E=c.useRef(null);return c.useEffect((function(){!function(e,a){e&&(e.complete?d(e,a):e.addEventListener("load",(function(){d(e,a)})))}(E.current,r)})),c.useEffect((function(){var e=Object(i.a)((function(){d(E.current,r)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[r]),c.createElement(u,Object(l.a)({className:Object(s.default)(r.root,m),ref:a},f),c.createElement("div",{className:r.tile},c.Children.map(t,(function(e){return c.isValidElement(e)?"img"===e.type||Object(o.a)(e,["Image"])?c.cloneElement(e,{ref:E}):e:null}))))}));a.a=Object(m.a)({root:{boxSizing:"border-box",flexShrink:0},tile:{position:"relative",display:"block",height:"100%",overflow:"hidden"},imgFullHeight:{height:"100%",transform:"translateX(-50%)",position:"relative",left:"50%"},imgFullWidth:{width:"100%",position:"relative",transform:"translateY(-50%)",top:"50%"}},{name:"MuiGridListTile"})(p)},1864:function(e,a,t){"use strict";var l=t(1),n=t(5),r=t(0),c=(t(4),t(2)),s=t(8),i=r.forwardRef((function(e,a){var t=e.actionIcon,s=e.actionPosition,i=void 0===s?"right":s,m=e.classes,o=e.className,d=e.subtitle,p=e.title,u=e.titlePosition,f=void 0===u?"bottom":u,E=Object(n.a)(e,["actionIcon","actionPosition","classes","className","subtitle","title","titlePosition"]),b=t&&i;return r.createElement("div",Object(l.a)({className:Object(c.default)(m.root,o,"top"===f?m.titlePositionTop:m.titlePositionBottom,d&&m.rootSubtitle),ref:a},E),r.createElement("div",{className:Object(c.default)(m.titleWrap,{left:m.titleWrapActionPosLeft,right:m.titleWrapActionPosRight}[b])},r.createElement("div",{className:m.title},p),d?r.createElement("div",{className:m.subtitle},d):null),t?r.createElement("div",{className:Object(c.default)(m.actionIcon,"left"===b&&m.actionIconActionPosLeft)},t):null)}));a.a=Object(s.a)((function(e){return{root:{position:"absolute",left:0,right:0,height:48,background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",fontFamily:e.typography.fontFamily},titlePositionBottom:{bottom:0},titlePositionTop:{top:0},rootSubtitle:{height:68},titleWrap:{flexGrow:1,marginLeft:16,marginRight:16,color:e.palette.common.white,overflow:"hidden"},titleWrapActionPosLeft:{marginLeft:0},titleWrapActionPosRight:{marginRight:0},title:{fontSize:e.typography.pxToRem(16),lineHeight:"24px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},subtitle:{fontSize:e.typography.pxToRem(12),lineHeight:1,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},actionIcon:{},actionIconActionPosLeft:{order:-1}}}),{name:"MuiGridListTileBar"})(i)},2543:function(e,a,t){"use strict";t.r(a);var l=t(14),n=t(31),r=t(115),c=t(173),s=t(1253),i=t(1226),m=t(1237),o=t(1218),d=t(1246),p=t(1247),u=t(206),f=t(0),E=t.n(f),b=t(174),v=t(1229),x=t(1238),N=t(1245),h=t(1220),g=t(1166),y=t(1171),w=t(1172),j=t(1243),O=t(1233),S=t(1230),k=t(77),I=t.n(k);var P=function(){var e=Object(f.useState)(null),a=Object(l.a)(e,2),t=a[0],n=a[1];if(Object(f.useEffect)((function(){I.a.get("/api/profile/about").then((function(e){n(e.data)}))}),[]),!t)return null;var r=t.general,c=t.work,m=t.contact,o=t.groups,d=t.friends;return E.a.createElement("div",{className:"md:flex max-w-2xl"},E.a.createElement("div",{className:"flex flex-col flex-1 md:ltr:pr-32 md:rtl:pl-32"},E.a.createElement(b.a,{enter:{animation:"transition.slideUpBigIn"}},E.a.createElement(x.a,{className:"w-full mb-16 rounded-8 shadow"},E.a.createElement(v.a,{position:"static",elevation:0},E.a.createElement(S.a,{className:"px-8"},E.a.createElement(u.a,{variant:"subtitle1",color:"inherit",className:"flex-1 px-12"},"General Information"))),E.a.createElement(N.a,null,E.a.createElement("div",{className:"mb-24"},E.a.createElement(u.a,{className:"font-bold mb-4 text-15"},"Gender"),E.a.createElement(u.a,null,r.gender)),E.a.createElement("div",{className:"mb-24"},E.a.createElement(u.a,{className:"font-bold mb-4 text-15"},"Birthday"),E.a.createElement(u.a,null,r.birthday)),E.a.createElement("div",{className:"mb-24"},E.a.createElement(u.a,{className:"font-bold mb-4 text-15"},"Locations"),r.locations.map((function(e){return E.a.createElement("div",{className:"flex items-center",key:e},E.a.createElement(u.a,null,e),E.a.createElement(h.a,{className:"text-16 mx-4",color:"action"},"location_on"))}))),E.a.createElement("div",{className:"mb-24"},E.a.createElement(u.a,{className:"font-bold mb-4 text-15"},"About Me"),E.a.createElement(u.a,null,r.about)))),E.a.createElement(x.a,{className:"w-full mb-16 rounded-8 shadow"},E.a.createElement(v.a,{position:"static",elevation:0},E.a.createElement(S.a,{className:"px-8"},E.a.createElement(u.a,{variant:"subtitle1",color:"inherit",className:"flex-1 px-12"},"Work"))),E.a.createElement(N.a,null,E.a.createElement("div",{className:"mb-24"},E.a.createElement(u.a,{className:"font-bold mb-4 text-15"},"Occupation"),E.a.createElement(u.a,null,c.occupation)),E.a.createElement("div",{className:"mb-24"},E.a.createElement(u.a,{className:"font-bold mb-4 text-15"},"Skills"),E.a.createElement(u.a,null,c.skills)),E.a.createElement("div",{className:"mb-24"},E.a.createElement(u.a,{className:"font-bold mb-4 text-15"},"Jobs"),E.a.createElement("table",{className:""},E.a.createElement("tbody",null,c.jobs.map((function(e){return E.a.createElement("tr",{key:e.company},E.a.createElement("td",null,E.a.createElement(u.a,null,e.company)),E.a.createElement("td",{className:"px-16"},E.a.createElement(u.a,{color:"textSecondary"},e.date)))}))))))),E.a.createElement(x.a,{className:"w-full mb-16 rounded-8 shadow"},E.a.createElement(v.a,{position:"static",elevation:0},E.a.createElement(S.a,{className:"px-8"},E.a.createElement(u.a,{variant:"subtitle1",color:"inherit",className:"flex-1 px-12"},"Contact"))),E.a.createElement(N.a,null,E.a.createElement("div",{className:"mb-24"},E.a.createElement(u.a,{className:"font-bold mb-4 text-15"},"Address"),E.a.createElement(u.a,null,m.address)),E.a.createElement("div",{className:"mb-24"},E.a.createElement(u.a,{className:"font-bold mb-4 text-15"},"Tel."),m.tel.map((function(e){return E.a.createElement("div",{className:"flex items-center",key:e},E.a.createElement(u.a,null,e))}))),E.a.createElement("div",{className:"mb-24"},E.a.createElement(u.a,{className:"font-bold mb-4 text-15"},"Website"),m.websites.map((function(e){return E.a.createElement("div",{className:"flex items-center",key:e},E.a.createElement(u.a,null,e))}))),E.a.createElement("div",{className:"mb-24"},E.a.createElement(u.a,{className:"font-bold mb-4 text-15"},"Emails"),m.emails.map((function(e){return E.a.createElement("div",{className:"flex items-center",key:e},E.a.createElement(u.a,null,e))}))))))),E.a.createElement("div",{className:"flex flex-col md:w-320"},E.a.createElement(b.a,{enter:{animation:"transition.slideUpBigIn"}},E.a.createElement(x.a,{className:"w-full mb-16 rounded-8 shadow"},E.a.createElement(v.a,{position:"static",elevation:0},E.a.createElement(S.a,{className:"px-8"},E.a.createElement(u.a,{variant:"subtitle1",color:"inherit",className:"flex-1 px-12"},"Friends"),E.a.createElement(i.a,{color:"inherit",size:"small"},"See 454 more"))),E.a.createElement(N.a,{className:"flex flex-wrap p-8"},d.map((function(e){return E.a.createElement("img",{key:e.id,className:"w-64 m-4 rounded-4 block",src:e.avatar,alt:e.name})})))),E.a.createElement(x.a,{className:"w-full mb-16 rounded-8 shadow"},E.a.createElement(v.a,{position:"static",elevation:0},E.a.createElement(S.a,{className:"px-8"},E.a.createElement(u.a,{variant:"subtitle1",color:"inherit",className:"flex-1 px-12"},"Joined Groups"),E.a.createElement(i.a,{color:"inherit",size:"small"},"See 6 more"))),E.a.createElement(N.a,{className:"p-0"},E.a.createElement(y.a,{className:"p-0"},o.map((function(e){return E.a.createElement(w.a,{key:e.id,className:"px-8"},E.a.createElement(s.a,{className:"mx-8",alt:e.name},e.name[0]),E.a.createElement(O.a,{primary:E.a.createElement("div",{className:"flex"},E.a.createElement(u.a,{className:"font-medium",color:"secondary",paragraph:!1},e.name),E.a.createElement(u.a,{className:"mx-4",paragraph:!1},e.category)),secondary:e.members}),E.a.createElement(j.a,null,E.a.createElement(g.a,null,E.a.createElement(h.a,null,"more_vert"))))}))))))))},L=t(1860),R=t(1861),T=t(1864),A=t(1236);var W=function(){var e=Object(f.useState)(null),a=Object(l.a)(e,2),t=a[0],n=a[1];return Object(f.useEffect)((function(){I.a.get("/api/profile/photos-videos").then((function(e){n(e.data)}))}),[]),t?E.a.createElement("div",{className:"md:flex max-w-2xl"},E.a.createElement("div",{className:"flex flex-col flex-1 md:ltr:pr-32 md:rtl:pl-32"},E.a.createElement(b.a,{enter:{animation:"transition.slideUpBigIn"}},t.map((function(e){return E.a.createElement("div",{key:e.id,className:"mb-48"},E.a.createElement(A.a,{component:"div",className:"flex items-center px-0 mb-24"},E.a.createElement(u.a,{variant:"h6"},e.name),E.a.createElement(u.a,{className:"mx-16",variant:"subtitle1",color:"textSecondary"},e.info)),E.a.createElement(L.a,{className:"",spacing:8,cols:0},e.media.map((function(e){return E.a.createElement(R.a,{classes:{root:"w-full sm:w-1/2 md:w-1/4",tile:"rounded-8 shadow"},key:e.preview},E.a.createElement("img",{src:e.preview,alt:e.title}),E.a.createElement(T.a,{title:e.title,actionIcon:E.a.createElement(g.a,null,E.a.createElement(h.a,{className:"text-white opacity-75"},"info"))}))}))))}))))):null},H=t(1390),z=t(1457),F=t(630),B=t(205);var C=function(){var e=Object(f.useState)(null),a=Object(l.a)(e,2),t=a[0],n=a[1];return Object(f.useEffect)((function(){I.a.get("/api/profile/timeline").then((function(e){n(e.data)}))}),[]),t?E.a.createElement("div",{className:"md:flex max-w-2xl"},E.a.createElement("div",{className:"flex flex-col flex-1 md:ltr:pr-32 md:rtl:pl-32"},E.a.createElement(b.a,{enter:{animation:"transition.slideUpBigIn"}},E.a.createElement("div",null,E.a.createElement(x.a,{className:"w-full overflow-hidden rounded-8 shadow"},E.a.createElement(F.a,{className:"p-16 w-full",classes:{root:"text-14"},placeholder:"Write something..",multiline:!0,rows:"6",margin:"none",disableUnderline:!0}),E.a.createElement(v.a,{className:"card-footer flex flex-row border-t-1",position:"static",color:"default",elevation:0},E.a.createElement("div",{className:"flex-1 items-center"},E.a.createElement(g.a,{"aria-label":"Add photo"},E.a.createElement(h.a,null,"photo")),E.a.createElement(g.a,{"aria-label":"Mention somebody"},E.a.createElement(h.a,null,"person")),E.a.createElement(g.a,{"aria-label":"Add location"},E.a.createElement(h.a,null,"location_on"))),E.a.createElement("div",{className:"p-8"},E.a.createElement(i.a,{variant:"contained",color:"primary",size:"small","aria-label":"post"},"Post")))),E.a.createElement(m.a,{className:"my-32"})),t.posts.map((function(e){return E.a.createElement(x.a,{key:e.id,className:"mb-32 overflow-hidden rounded-8 shadow"},E.a.createElement(z.a,{avatar:E.a.createElement(s.a,{"aria-label":"Recipe",src:e.user.avatar}),action:E.a.createElement(g.a,{"aria-label":"more"},E.a.createElement(h.a,null,"more_vert")),title:E.a.createElement("span",{className:"flex"},E.a.createElement(u.a,{className:"font-medium",color:"primary",paragraph:!1},e.user.name),E.a.createElement("span",{className:"mx-4"},"post"===e.type&&"posted on your timeline","something"===e.type&&"shared something with you","video"===e.type&&"shared a video with you","article"===e.type&&"shared an article with you")),subheader:e.time}),E.a.createElement(N.a,{className:"py-0"},e.message&&E.a.createElement(u.a,{component:"p",className:"mb-16"},e.message),e.media&&E.a.createElement("img",{src:e.media.preview,alt:"post"}),e.article&&E.a.createElement("div",{className:"border-1"},E.a.createElement("img",{className:"w-full border-b-1",src:e.article.media.preview,alt:"article"}),E.a.createElement("div",{className:"p-16"},E.a.createElement(u.a,{variant:"subtitle1"},e.article.title),E.a.createElement(u.a,{variant:"caption"},e.article.subtitle),E.a.createElement(u.a,{className:"mt-16"},e.article.excerpt)))),E.a.createElement(H.a,{disableSpacing:!0,className:"px-12"},E.a.createElement(i.a,{size:"small","aria-label":"Add to favorites"},E.a.createElement(h.a,{className:"text-16",color:"action"},"favorite"),E.a.createElement(u.a,{className:"mx-4"},"Like"),E.a.createElement(u.a,null,"(",e.like,")")),E.a.createElement(i.a,{"aria-label":"Share"},E.a.createElement(h.a,{className:"text-16",color:"action"},"share"),E.a.createElement(u.a,{className:"mx-4"},"Share"),E.a.createElement(u.a,null,"(",e.share,")"))),E.a.createElement(v.a,{className:"card-footer flex flex-column p-16",position:"static",color:"default",elevation:0},e.comments&&e.comments.length>0&&E.a.createElement("div",{className:""},E.a.createElement("div",{className:"flex items-center"},E.a.createElement(u.a,null,e.comments.length," comments"),E.a.createElement(h.a,{className:"text-16 mx-4",color:"action"},"keyboard_arrow_down")),E.a.createElement(y.a,null,e.comments.map((function(e){return E.a.createElement("div",{key:e.id},E.a.createElement(w.a,{className:"px-0 -mx-8"},E.a.createElement(s.a,{alt:e.user.name,src:e.user.avatar,className:"mx-8"}),E.a.createElement(O.a,{className:"px-4",primary:E.a.createElement("div",{className:"flex"},E.a.createElement(u.a,{className:"font-medium",color:"initial",paragraph:!1},e.user.name),E.a.createElement(u.a,{className:"mx-4",variant:"caption"},e.time)),secondary:e.message})),E.a.createElement("div",{className:"flex items-center mx-52 mb-8"},E.a.createElement(i.a,null,"Reply"),E.a.createElement(h.a,{className:"text-14 mx-8 cursor-pointer"},"flag")))})))),E.a.createElement("div",{className:"flex flex-auto -mx-4"},E.a.createElement(s.a,{className:"mx-4",src:"assets/images/avatars/profile.jpg"}),E.a.createElement("div",{className:"flex-1 mx-4"},E.a.createElement(B.a,{className:"w-full mb-16 shadow-0"},E.a.createElement(F.a,{className:"p-8 w-full border-1",classes:{root:"text-13"},placeholder:"Add a comment..",multiline:!0,rows:"6",margin:"none",disableUnderline:!0})),E.a.createElement(i.a,{variant:"contained",color:"primary",size:"small"},"Post Comment")))))})))),E.a.createElement("div",{className:"flex flex-col md:w-320"},E.a.createElement(b.a,{enter:{animation:"transition.slideUpBigIn"}},E.a.createElement(x.a,{className:"w-full rounded-8 shadow"},E.a.createElement(v.a,{position:"static",elevation:0},E.a.createElement(S.a,{className:"px-8"},E.a.createElement(u.a,{variant:"subtitle1",color:"inherit",className:"flex-1 px-12"},"Latest Activity"),E.a.createElement(i.a,{color:"inherit",size:"small"},"See All"))),E.a.createElement(N.a,{className:"p-0"},E.a.createElement(y.a,null,t.activities.map((function(e){return E.a.createElement(w.a,{key:e.id,className:"px-12"},E.a.createElement(s.a,{className:"mx-4",alt:e.user.name,src:e.user.avatar}),E.a.createElement(O.a,{className:"flex-1 mx-4",primary:E.a.createElement("div",{className:"flex"},E.a.createElement(u.a,{className:"font-medium whitespace-nowrap",color:"primary",paragraph:!1},e.user.name),E.a.createElement(u.a,{className:"px-4 truncate",paragraph:!1},e.message)),secondary:e.time}))})))))))):null},M=Object(o.a)((function(e){return{layoutHeader:Object(n.a)({height:320,minHeight:320},e.breakpoints.down("md"),{height:240,minHeight:240})}}));a.default=function(){var e=M(),a=Object(f.useState)(0),t=Object(l.a)(a,2),n=t[0],o=t[1];return E.a.createElement(c.a,{classes:{header:e.layoutHeader,toolbar:"min-h-56 h-56 items-end"},header:E.a.createElement("div",{className:"p-24 flex flex-1 flex-codisableRipple l items-center justify-center md:flex-row md:items-end"},E.a.createElement("div",{className:"flex flex-1 flex-col items-center justify-center md:flex-row md:items-center md:justify-start"},E.a.createElement(r.a,{animation:"transition.expandIn",delay:300},E.a.createElement(s.a,{className:"w-96 h-96",src:JSON.parse(localStorage.getItem("smartsystem")).pic})),E.a.createElement(r.a,{animation:"transition.slideLeftIn",delay:300},E.a.createElement(u.a,{className:"md:mx-24 text-24 md:text-32 my-8 md:my-0",variant:"h4",color:"inherit"},JSON.parse(localStorage.getItem("smartsystem")).name))),E.a.createElement("div",{className:"flex items-center justify-end"},E.a.createElement(i.a,{className:"mx-8",variant:"contained",color:"secondary","aria-label":"Follow"},"Follow"),E.a.createElement(i.a,{variant:"contained",color:"primary","aria-label":"Send Message"},"Send Message"))),contentToolbar:E.a.createElement(p.a,{value:n,onChange:function(e,a){o(a)},indicatorColor:"primary",textColor:"inherit",variant:"scrollable",scrollButtons:"off",className:"w-full px-24 -mx-4 min-h-40",classes:{indicator:"flex justify-center bg-transparent w-full h-full"},TabIndicatorProps:{children:E.a.createElement(m.a,{className:"w-full h-full rounded-full opacity-50"})}},E.a.createElement(d.a,{className:"text-14 font-bold min-h-40 min-w-64 mx-4",disableRipple:!0,label:"Timeline"}),E.a.createElement(d.a,{className:"text-14 font-bold min-h-40 min-w-64 mx-4",disableRipple:!0,label:"About"}),E.a.createElement(d.a,{className:"text-14 font-bold min-h-40 min-w-64 mx-4",disableRipple:!0,label:"Photos & Videos"})),content:E.a.createElement("div",{className:"p-16 sm:p-24"},0===n&&E.a.createElement(C,null),1===n&&E.a.createElement(P,null),2===n&&E.a.createElement(W,null))})}}}]);