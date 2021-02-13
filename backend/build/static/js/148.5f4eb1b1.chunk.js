(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[148],{1304:function(e,a){e.exports={servername:"http://18.220.159.109:5000"}},2483:function(e,a,t){"use strict";t.r(a);var l=t(115),n=t(140),r=t(1226),m=t(1238),s=t(1245),o=t(1249),c=t(1237),i=t(1173),d=t(1224),f=t(1218),u=t(89),p=t(1241),E=t(206),g=t(2),x=t(0),b=t.n(x),h=t(77),w=t.n(h),N=t(27),v=Object(f.a)((function(e){return{root:{background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(Object(u.darken)(e.palette.primary.dark,.5)," 100%)"),color:e.palette.primary.contrastText}}}));a.default=function(){var e=v(),a=Object(n.c)({email:"",password:"",remember:!0}),f=a.form,u=a.handleChange,x=a.resetForm;function h(e){e.preventDefault(),x();var a={email:f.email,pass:f.password,name:f.name},l=t(1304);w.a.post(l.servername+"/api/memberlogin",a).then((function(e){"fail"==e.data?alert("Wrong Attempt"):(localStorage.setItem("smartsystem",JSON.stringify(e.data)),window.location.href="/")}))}return b.a.createElement("div",{className:Object(g.default)(e.root,"flex flex-col flex-auto flex-shrink-0 p-24 md:flex-row md:p-0")},b.a.createElement("div",{className:"flex flex-col flex-grow-0 items-center text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left"},b.a.createElement(l.a,{animation:"transition.expandIn"},b.a.createElement("img",{className:"w-128 mb-32",src:"assets/images/logos/fuse.svg",alt:"logo"})),b.a.createElement(l.a,{animation:"transition.slideUpIn",delay:400},b.a.createElement(E.a,{variant:"h3",color:"inherit",className:"font-800 leading-tight"},"Welcome to the ",b.a.createElement("br",null)," FUSE React!")),b.a.createElement(l.a,{delay:500},b.a.createElement(E.a,{variant:"subtitle1",color:"inherit",className:"mt-32"},"Powerful and professional admin template for Web Applications, CRM, CMS, Admin Panels and more."))),b.a.createElement(l.a,{animation:{translateX:[0,"100%"]}},b.a.createElement(m.a,{className:"w-full max-w-400 mx-auto m-16 md:m-0",square:!0},b.a.createElement(s.a,{className:"flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 "},b.a.createElement(E.a,{variant:"h6",className:"mb-32 font-bold text-20 sm:text-24"},"Login"),b.a.createElement("form",{name:"loginForm",noValidate:!0,className:"flex flex-col justify-center w-full",onSubmit:h},b.a.createElement(p.a,{className:"mb-16",label:"Email",autoFocus:!0,type:"email",name:"email",value:f.email,onChange:u,variant:"outlined",required:!0,fullWidth:!0}),b.a.createElement(p.a,{className:"mb-16",label:"Password",type:"password",name:"password",value:f.password,onChange:u,variant:"outlined",required:!0,fullWidth:!0}),b.a.createElement("div",{className:"flex flex-col sm:flex-row items-center justify-center sm:justify-between"},b.a.createElement(i.a,null,b.a.createElement(d.a,{control:b.a.createElement(o.a,{name:"remember",checked:f.remember,onChange:u}),label:"Remember Me"})),b.a.createElement(N.a,{className:"font-medium",to:"/pages/auth/forgot-password-2"},"Forgot Password?")),b.a.createElement(r.a,{variant:"contained",onClick:h,color:"primary",className:"w-full mx-auto mt-16","aria-label":"LOG IN",disabled:!(f.email.length>0&&f.email.includes("@")&&f.password.length>0)},"Login")),b.a.createElement("div",{className:"my-24 flex items-center justify-center"},b.a.createElement(c.a,{className:"w-32"}),b.a.createElement("span",{className:"mx-8 font-bold"},"OR"),b.a.createElement(c.a,{className:"w-32"})),b.a.createElement(r.a,{variant:"contained",color:"secondary",size:"small",className:"w-192 mb-8"},"Log in with Google"),b.a.createElement(r.a,{variant:"contained",color:"primary",size:"small",className:"w-192"},"Log in with Facebook"),b.a.createElement("div",{className:"flex flex-col items-center justify-center pt-32 pb-24"},b.a.createElement("span",{className:"font-medium"},"Don't have an account?"),b.a.createElement(N.a,{className:"font-medium",to:"/pages/auth/register"},"Create an account"))))))}}}]);