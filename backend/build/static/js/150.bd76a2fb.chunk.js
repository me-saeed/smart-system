(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[150],{1293:function(e,a){e.exports={servername:"http://18.220.159.109:5000"}},2489:function(e,a,t){"use strict";t.r(a);var n=t(115),r=t(140),l=t(1226),s=t(1238),m=t(1245),o=t(1249),c=t(1173),i=t(1224),d=t(1218),u=t(89),p=t(1241),f=t(206),b=t(2),h=t(0),w=t.n(h),g=t(77),v=t.n(g),E=t(27),x=Object(d.a)((function(e){return{root:{background:"radial-gradient(".concat(Object(u.darken)(e.palette.primary.dark,.5)," 0%, ").concat(e.palette.primary.dark," 80%)"),color:e.palette.primary.contrastText}}}));a.default=function(){var e=x(),a=Object(r.c)({name:"",email:"",password:"",passwordConfirm:"",acceptTermsConditions:!1}),d=a.form,u=a.handleChange,h=a.resetForm;return w.a.createElement("div",{className:Object(b.default)(e.root,"flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32")},w.a.createElement("div",{className:"flex flex-col items-center justify-center w-full"},w.a.createElement(n.a,{animation:"transition.expandIn"},w.a.createElement(s.a,{className:"w-full max-w-384 rounded-8"},w.a.createElement(m.a,{className:"flex flex-col items-center justify-center p-32"},w.a.createElement("img",{className:"w-128 m-32",src:"assets/images/logos/fuse.svg",alt:"logo"}),w.a.createElement(f.a,{variant:"h6",className:"mt-16 mb-32 font-bold text-20 sm:text-24"},"Create Account For Member"),w.a.createElement("form",{name:"registerForm",noValidate:!0,className:"flex flex-col justify-center w-full",onSubmit:function(e){e.preventDefault(),h();var a={email:d.email,pass:d.password,name:d.name},n=t(1293);v.a.post(n.servername+"/api/memberregister",a).then((function(e){alert(e.data),window.location.href="/"}))}},w.a.createElement(p.a,{className:"mb-16",label:"Name",autoFocus:!0,type:"name",name:"name",value:d.name,onChange:u,variant:"outlined",required:!0,fullWidth:!0}),w.a.createElement(p.a,{className:"mb-16",label:"Email",type:"email",name:"email",value:d.email,onChange:u,variant:"outlined",required:!0,fullWidth:!0}),w.a.createElement(p.a,{className:"mb-16",label:"Password",type:"password",name:"password",value:d.password,onChange:u,variant:"outlined",required:!0,fullWidth:!0}),w.a.createElement(p.a,{className:"mb-16",label:"Password (Confirm)",type:"password",name:"passwordConfirm",value:d.passwordConfirm,onChange:u,variant:"outlined",required:!0,fullWidth:!0}),w.a.createElement(c.a,{className:"items-center"},w.a.createElement(i.a,{control:w.a.createElement(o.a,{name:"acceptTermsConditions",checked:d.acceptTermsConditions,onChange:u}),label:"I read and accept terms and conditions"})),w.a.createElement(l.a,{variant:"contained",color:"primary",className:"w-224 mx-auto mt-16","aria-label":"Register",disabled:!(d.email.length>0&&d.email.includes("@")&&d.password.length>0&&d.password.length>3&&d.password===d.passwordConfirm&&d.acceptTermsConditions),type:"submit"},"Create an account")),w.a.createElement("div",{className:"flex flex-col items-center justify-center pt-32 pb-24"},w.a.createElement("span",{className:"font-medium"},"Already have an account?"),w.a.createElement(E.a,{className:"font-medium",to:"/pages/auth/login"},"Login")))))))}}}]);