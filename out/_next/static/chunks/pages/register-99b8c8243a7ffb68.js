(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{5511:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return s(3187)}])},8787:function(e,a,s){"use strict";s.d(a,{f:function(){return t}});let t="https://api.afreebmart.com/api"},3187:function(e,a,s){"use strict";s.r(a);var t=s(5893),r=s(1664),n=s.n(r);s(9583);var l=s(2664),o=s(3070),i=s(7294),c=s(2920),d=s(1163);a.default=function(){let e=(0,l.I0)(),[a,s]=(0,i.useState)(""),[r,u]=(0,i.useState)(""),[m,p]=(0,i.useState)(""),[h,g]=(0,i.useState)(""),x=(0,l.v9)(e=>e.error),f=(0,d.useRouter)(),v=async a=>{a.preventDefault();let s=a.target.elements.name.value,t=a.target.elements.email.value,r=a.target.elements.phone.value,n=a.target.elements.password.value;await e((0,o.I)(s,t,r,n)),x?c.Am.error("Sign Up failed!"):(c.Am.success("Sign-Up successful!"),f.push("/account"))};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"page-content pt-50 pb-50",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsxs)("div",{className:"col-xl-8 col-lg-10 col-md-12 m-auto",children:[(0,t.jsx)("div",{className:"col-lg-6 col-md-8",children:(0,t.jsx)(n(),{legacyBehavior:!0,href:"/",children:(0,t.jsx)("a",{children:(0,t.jsx)("img",{src:"assets/afreemart-logo.png",alt:"",style:{width:"50%",height:"auto"}})})})}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-6 pr-30 d-none d-lg-block",children:(0,t.jsx)("img",{className:"border-radius-15",src:"https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:""})}),(0,t.jsx)("div",{className:"col-lg-6 col-md-8",children:(0,t.jsx)("div",{className:"login_wrap widget-taber-content background-white",children:(0,t.jsxs)("div",{className:"padding_eight_all bg-white",children:[(0,t.jsxs)("div",{className:"heading_s1",children:[(0,t.jsx)("h1",{className:"mb-5",children:"Signup"}),(0,t.jsxs)("p",{className:"mb-30",children:["Have an account? ",(0,t.jsx)(n(),{legacyBehavior:!0,href:"/login",children:(0,t.jsx)("a",{children:"Login here"})})]})]}),(0,t.jsxs)("form",{onSubmit:v,method:"post",children:[(0,t.jsx)("div",{className:"form-group",children:(0,t.jsx)("input",{id:"name",name:"name",type:"text",autoComplete:"name",value:a,onChange:e=>s(e.target.value),required:!0,placeholder:"Full Name"})}),(0,t.jsx)("div",{className:"form-group",children:(0,t.jsx)("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,placeholder:"Email Address",value:r,onChange:e=>u(e.target.value)})}),(0,t.jsx)("div",{className:"form-group",children:(0,t.jsx)("input",{id:"phone",name:"phone",type:"tel",autoComplete:"phone",value:m,onChange:e=>p(e.target.value),required:!0,placeholder:"Phone Number"})}),(0,t.jsx)("div",{className:"form-group",children:(0,t.jsx)("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,placeholder:"Password",value:h,onChange:e=>g(e.target.value)})}),(0,t.jsx)("div",{className:"form-group",children:(0,t.jsx)("button",{type:"submit",className:"btn btn-heading btn-block hover-up",name:"login",children:"Sign Up"})}),(0,t.jsx)("div",{className:"heading_s1",children:(0,t.jsxs)("p",{className:"mb-30",children:["By clicking signup you agree to our ",(0,t.jsx)(n(),{legacyBehavior:!0,href:"/terms",children:(0,t.jsx)("a",{children:"Terms "})}),"and ",(0,t.jsx)(n(),{legacyBehavior:!0,href:"/privacy-policy",children:(0,t.jsx)("a",{children:"Privacy Policy"})})]})}),x&&(0,t.jsx)("p",{children:x})]})]})})})]})]})})})})})}},3070:function(e,a,s){"use strict";s.d(a,{I:function(){return l},x:function(){return o}});var t=s(7066),r=s(8787),n=s(2920);let l=(e,a,s,n)=>async l=>{try{l({type:"USER_REGISTER_REQUEST"});let{data:o}=await t.Z.post("".concat(r.f,"/register"),{name:e,email:a,phone:s,password:n});l({type:"USER_REGISTER_SUCCESS",payload:o}),localStorage.setItem("userInfo",JSON.stringify(o)),localStorage.setItem("isLoggedIn","true"),console.log("data")}catch(e){l({type:"USER_REGISTER_FAIL",payload:e.response&&e.response.data.message?e.response.data.message:e.message}),console.log("error")}},o=(e,a)=>async s=>{try{s({type:"USER_LOGIN_REQUEST"});let{data:l}=await t.Z.post("".concat(r.f,"/login"),{email:e,password:a});if("suspended"===l.user.status)return localStorage.removeItem("userInfo"),s({type:"USER_LOGOUT"}),n.Am.error("You have been suspended. Please contact us.");s({type:"USER_LOGIN_SUCCESS",payload:l}),localStorage.setItem("userInfo",JSON.stringify(l)),localStorage.setItem("isLoggedIn","true")}catch(e){s({type:"USER_LOGIN_FAIL",payload:e.response&&e.response.data.message?e.response.data.message:e.message})}}},9008:function(e,a,s){e.exports=s(3121)}},function(e){e.O(0,[1664,4143,9583,9774,2888,179],function(){return e(e.s=5511)}),_N_E=e.O()}]);