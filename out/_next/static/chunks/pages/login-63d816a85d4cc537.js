(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3459],{6429:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return a(4754)}])},8787:function(e,s,a){"use strict";a.d(s,{f:function(){return r}});let r="https://api.afreebmart.com/api"},4754:function(e,s,a){"use strict";a.r(s);var r=a(5893),t=a(1664),c=a.n(t);a(9583);var l=a(2664),n=a(3070),o=a(7294),i=a(2920),d=a(1163);a(7066),a(8787),s.default=function(){let e=(0,l.I0)(),[s,a]=(0,o.useState)(""),[t,m]=(0,o.useState)(""),u=(0,l.v9)(e=>e.error),h=(0,d.useRouter)(),p=async a=>{a.preventDefault(),await e((0,n.x)(s,t)),u?i.Am.error("Login failed!"):(i.Am.success("Login successful!"),h.push("/account"))};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"page-content pt-50 pb-50",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"col-xl-8 col-lg-10 col-md-12 m-auto",children:[(0,r.jsx)("div",{className:"col-lg-6 col-md-8",children:(0,r.jsx)(c(),{legacyBehavior:!0,href:"/",children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{src:"assets/afreemart-logo.png",alt:"",style:{width:"50%",height:"auto"}})})})}),(0,r.jsxs)("div",{className:"row mt-30",children:[(0,r.jsx)("div",{className:"col-lg-6 pr-30 d-none d-lg-block",children:(0,r.jsx)("img",{className:"border-radius-15",src:"https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:""})}),(0,r.jsx)("div",{className:"col-lg-6 col-md-8",children:(0,r.jsx)("div",{className:"login_wrap widget-taber-content background-white",children:(0,r.jsxs)("div",{className:"padding_eight_all bg-white",children:[(0,r.jsxs)("div",{className:"heading_s1",children:[(0,r.jsx)("h1",{className:"mb-5",children:"Login"}),(0,r.jsxs)("p",{className:"mb-30",children:["Don't have an account? ",(0,r.jsx)(c(),{legacyBehavior:!0,href:"/register",children:(0,r.jsx)("a",{children:"Create here"})})]})]}),(0,r.jsxs)("form",{onSubmit:p,children:[(0,r.jsx)("div",{className:"form-group",children:(0,r.jsx)("input",{type:"email",value:s,onChange:e=>a(e.target.value),placeholder:"Email",required:!0})}),(0,r.jsx)("div",{className:"form-group",children:(0,r.jsx)("input",{type:"password",value:t,onChange:e=>m(e.target.value),placeholder:"Password",required:!0})}),(0,r.jsxs)("div",{className:"login_footer form-group mb-50",children:[(0,r.jsx)("div",{className:"chek-form",children:(0,r.jsxs)("div",{className:"custome-checkbox",children:[(0,r.jsx)("input",{className:"form-check-input",type:"checkbox",name:"checkbox",id:"exampleCheckbox1",value:""}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"exampleCheckbox1",children:(0,r.jsx)("span",{children:"Remember me"})})]})}),(0,r.jsx)("a",{className:"text-muted",href:"/reset-password-email",children:"Forgot password?"})]}),(0,r.jsx)("div",{className:"form-group",children:(0,r.jsx)("button",{type:"submit",className:"btn btn-heading btn-block hover-up",name:"login",children:"Log in"})})]}),(0,r.jsx)("div",{className:"",children:(0,r.jsx)("div",{className:"card-login mt-20 pt-10"})})]})})})]})]})})})})})}},3070:function(e,s,a){"use strict";a.d(s,{I:function(){return l},x:function(){return n}});var r=a(7066),t=a(8787),c=a(2920);let l=(e,s,a,c)=>async l=>{try{l({type:"USER_REGISTER_REQUEST"});let{data:n}=await r.Z.post("".concat(t.f,"/register"),{name:e,email:s,phone:a,password:c});l({type:"USER_REGISTER_SUCCESS",payload:n}),localStorage.setItem("userInfo",JSON.stringify(n)),localStorage.setItem("isLoggedIn","true"),console.log("data")}catch(e){l({type:"USER_REGISTER_FAIL",payload:e.response&&e.response.data.message?e.response.data.message:e.message}),console.log("error")}},n=(e,s)=>async a=>{try{a({type:"USER_LOGIN_REQUEST"});let{data:l}=await r.Z.post("".concat(t.f,"/login"),{email:e,password:s});if("suspended"===l.user.status)return localStorage.removeItem("userInfo"),a({type:"USER_LOGOUT"}),c.Am.error("You have been suspended. Please contact us.");a({type:"USER_LOGIN_SUCCESS",payload:l}),localStorage.setItem("userInfo",JSON.stringify(l)),localStorage.setItem("isLoggedIn","true")}catch(e){a({type:"USER_LOGIN_FAIL",payload:e.response&&e.response.data.message?e.response.data.message:e.message})}}},9008:function(e,s,a){e.exports=a(3121)}},function(e){e.O(0,[1664,4143,9583,9774,2888,179],function(){return e(e.s=6429)}),_N_E=e.O()}]);