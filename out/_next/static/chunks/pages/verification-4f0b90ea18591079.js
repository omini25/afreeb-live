(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1342],{5871:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/verification",function(){return a(3545)}])},8787:function(e,s,a){"use strict";a.d(s,{f:function(){return t}});let t="https://api.afreebmart.com/api"},3545:function(e,s,a){"use strict";a.r(s);var t=a(5893),l=a(1664),r=a.n(l);a(9583);var o=a(2664),c=a(3070),i=a(7294),n=a(2920),d=a(1163);s.default=function(){let e=(0,o.I0)(),[s,a]=(0,i.useState)(""),[l,m]=(0,i.useState)(""),h=(0,o.v9)(e=>e.error),g=(0,d.useRouter)(),p=async a=>{a.preventDefault(),await e((0,c.x)(s,l)),h?n.Am.error("Login failed!"):(n.Am.success("Login successful!"),g.push("/account"))};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"page-content pt-50 pb-50",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsxs)("div",{className:"col-xl-8 col-lg-10 col-md-12 m-auto",children:[(0,t.jsx)("div",{className:"col-lg-6 col-md-8",children:(0,t.jsx)(r(),{legacyBehavior:!0,href:"/",children:(0,t.jsx)("a",{children:(0,t.jsx)("img",{src:"assets/afreemart-logo.png",alt:"",style:{width:"50%",height:"auto"}})})})}),(0,t.jsxs)("div",{className:"row mt-30",children:[(0,t.jsx)("div",{className:"col-lg-6 pr-30 d-none d-lg-block",children:(0,t.jsx)("img",{className:"border-radius-15",src:"https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:""})}),(0,t.jsx)("div",{className:"col-lg-6 col-md-8",children:(0,t.jsx)("div",{className:"login_wrap widget-taber-content background-white",children:(0,t.jsxs)("div",{className:"padding_eight_all bg-white",children:[(0,t.jsxs)("div",{className:"heading_s1",children:[(0,t.jsx)("h1",{className:"mb-5",children:"Login"}),(0,t.jsxs)("p",{className:"mb-30",children:["Don't have an account? ",(0,t.jsx)(r(),{legacyBehavior:!0,href:"/register",children:(0,t.jsx)("a",{children:"Create here"})})]})]}),(0,t.jsxs)("form",{onSubmit:p,children:[(0,t.jsx)("div",{className:"form-group",children:(0,t.jsx)("input",{type:"email",value:s,onChange:e=>a(e.target.value),placeholder:"Email",required:!0})}),(0,t.jsx)("div",{className:"form-group",children:(0,t.jsx)("input",{type:"password",value:l,onChange:e=>m(e.target.value),placeholder:"Password",required:!0})}),(0,t.jsxs)("div",{className:"login_footer form-group mb-50",children:[(0,t.jsx)("div",{className:"chek-form",children:(0,t.jsxs)("div",{className:"custome-checkbox",children:[(0,t.jsx)("input",{className:"form-check-input",type:"checkbox",name:"checkbox",id:"exampleCheckbox1",value:""}),(0,t.jsx)("label",{className:"form-check-label",htmlFor:"exampleCheckbox1",children:(0,t.jsx)("span",{children:"Remember me"})})]})}),(0,t.jsx)("a",{className:"text-muted",href:"/reset-password-email",children:"Forgot password?"})]}),(0,t.jsx)("div",{className:"form-group",children:(0,t.jsx)("button",{type:"submit",className:"btn btn-heading btn-block hover-up",name:"login",children:"Log in"})})]}),(0,t.jsx)("div",{className:"",children:(0,t.jsxs)("div",{className:"card-login mt-20 pt-10",children:[(0,t.jsxs)("a",{href:"#",className:"social-login google-login",children:[(0,t.jsx)("img",{src:"/assets/imgs/theme/icons/logo-google.svg",alt:"",style:{width:"20px",height:"20px"}}),(0,t.jsx)("span",{children:"Login with Google"})]}),(0,t.jsxs)("a",{href:"#",className:"social-login apple-login",children:[(0,t.jsx)("img",{src:"/assets/imgs/theme/icons/logo-apple.svg",alt:"",style:{width:"20px",height:"20px"}}),(0,t.jsx)("span",{children:"Login with Apple"})]})]})})]})})})]})]})})})})})}},3070:function(e,s,a){"use strict";a.d(s,{I:function(){return o},x:function(){return c}});var t=a(7066),l=a(8787),r=a(2920);let o=(e,s,a,r)=>async o=>{try{o({type:"USER_REGISTER_REQUEST"});let{data:c}=await t.Z.post("".concat(l.f,"/register"),{name:e,email:s,phone:a,password:r});o({type:"USER_REGISTER_SUCCESS",payload:c}),localStorage.setItem("userInfo",JSON.stringify(c)),localStorage.setItem("isLoggedIn","true"),console.log("data")}catch(e){o({type:"USER_REGISTER_FAIL",payload:e.response&&e.response.data.message?e.response.data.message:e.message}),console.log("error")}},c=(e,s)=>async a=>{try{a({type:"USER_LOGIN_REQUEST"});let{data:o}=await t.Z.post("".concat(l.f,"/login"),{email:e,password:s});if("suspended"===o.user.status)return localStorage.removeItem("userInfo"),a({type:"USER_LOGOUT"}),r.Am.error("You have been suspended. Please contact us.");a({type:"USER_LOGIN_SUCCESS",payload:o}),localStorage.setItem("userInfo",JSON.stringify(o)),localStorage.setItem("isLoggedIn","true")}catch(e){a({type:"USER_LOGIN_FAIL",payload:e.response&&e.response.data.message?e.response.data.message:e.message})}}},9008:function(e,s,a){e.exports=a(3121)}},function(e){e.O(0,[1664,4143,9583,9774,2888,179],function(){return e(e.s=5871)}),_N_E=e.O()}]);