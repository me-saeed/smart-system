(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[167],{2383:function(e,t,a){"use strict";a.r(t);var n=a(14),i=a(174),s=a(135),r=a(1171),m=a(1172),c=a(206),l=a(0),o=a.n(l),u=["List Item 1","List Item 2","List Item 3","List Item 4","List Item 5","List Item 6","List Item 7","List Item 8","List Item 9","List Item 10","List Item 11","List Item 12","List Item 13","List Item 14","List Item 15"];t.default=function(){var e=Object(l.useState)(u),t=Object(n.a)(e,2),a=t[0],p=t[1],f=Object(l.useRef)();return Object(l.useEffect)((function(){return f.current=setInterval((function(){p(0!==a.length?[]:u)}),2e3),function(){clearInterval(f.current)}})),o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{variant:"h4",className:"mb-24"},"FuseAnimateGroup"),o.a.createElement(c.a,{className:"mb-16",component:"p"},o.a.createElement("code",null,"FuseAnimateGroup")," is a container component which uses",o.a.createElement("code",null,"VelocityTransitionGroup")," of ",o.a.createElement("code",null,"velocity-react"),"library. Delegates to the React TransitionGroup addon."),o.a.createElement(c.a,{className:"mt-32 mb-8",variant:"h5"},"Sample Usage"),o.a.createElement("div",{className:"flex flex-wrap p-48 items-start"},o.a.createElement("div",{className:"flex w-full sm:w-1/2 p-24 justify-center"},o.a.createElement(r.a,null,o.a.createElement(i.a,{enter:{animation:"transition.slideUpBigIn"},leave:{animation:"transition.slideUpBigOut"}},a.map((function(e,t){return o.a.createElement(m.a,{key:t},e)}))))),o.a.createElement("div",{className:"flex w-full sm:w-1/2 p-24 justify-center"},o.a.createElement(s.a,{component:"pre",className:"language-jsx"},'\n                                     <List>\n                                        <FuseAnimateGroup\n                                            enter={{\n                                                animation: "transition.slideUpBigIn"\n                                            }}\n                                            leave={{\n                                                animation: "transition.slideUpBigOut"\n                                            }}\n                                        >\n                                            {\n                                                list.map((item) => (\n                                                        <ListItem key={item}>\n                                                            {item}\n                                                        </ListItem>\n                                                    )\n                                                )\n                                            }\n                                        </FuseAnimateGroup>\n                                    </List>\n                                    '))),o.a.createElement(c.a,{className:"mb-16",component:"p"},"For more information checkout the",o.a.createElement("a",{href:"https://github.com/google-fabric/velocity-react",target:"_blank",rel:"noopener noreferrer",className:"ml-8"},"velocity-react"),"."))}}}]);