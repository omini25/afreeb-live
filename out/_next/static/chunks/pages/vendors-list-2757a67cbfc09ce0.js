(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1692],{9123:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vendors-list",function(){return a(6905)}])},8787:function(e,s,a){"use strict";a.d(s,{f:function(){return c}});let c="https://api.afreebmart.com/api"},6905:function(e,s,a){"use strict";a.r(s);var c=a(5893),r=a(1664),t=a.n(r),n=a(7294),i=a(9583),l=a(7066),d=a(8787);s.default=()=>{let[e,s]=(0,n.useState)([]),[a,r]=(0,n.useState)({});return(0,n.useEffect)(()=>{let e=async()=>{try{let e=await l.Z.get("".concat(d.f,"/vendors"));s(e.data)}catch(e){console.error("Error fetching data",e)}};e()},[]),(0,n.useEffect)(()=>{let e=async()=>{try{let e=await l.Z.get("".concat(d.f,"/vendors"));for(let a of(s(e.data),e.data))await l.Z.get("".concat(d.f,"/landing/").concat(a.id,"/details"))}catch(e){console.error("Error fetching data",e)}};e()},[]),(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i.Z,{pageclassName:"pageclass",parent:"Home",child:"Stores",children:(0,c.jsx)("div",{className:"page-content pt-50",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsxs)("div",{className:"archive-header-2 text-center",children:[(0,c.jsx)("h1",{className:"display-2 mb-50",children:"Vendors List"}),(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("div",{className:"col-lg-5 mx-auto",children:(0,c.jsx)("div",{className:"sidebar-widget-2 widget_search mb-50",children:(0,c.jsx)("div",{className:"search-form",children:(0,c.jsxs)("form",{action:"#",children:[(0,c.jsx)("input",{type:"text",placeholder:"Search vendors (by name or ID)..."}),(0,c.jsx)("button",{type:"submit",children:(0,c.jsx)("i",{className:"fi-rs-search"})})]})})})})})]}),(0,c.jsx)("div",{className:"row mb-50",children:(0,c.jsx)("div",{className:"col-12 col-lg-8 mx-auto",children:(0,c.jsxs)("div",{className:"product-fillter",children:[(0,c.jsx)("div",{className:"totall-product",children:(0,c.jsxs)("p",{children:["We have ",(0,c.jsx)("strong",{className:"text-brand",children:e.length})," vendors now"]})}),(0,c.jsx)("div",{className:"sort-by-product-area"})]})})}),(0,c.jsx)("div",{className:"row vendor-grid",children:e.map((e,s)=>(0,c.jsx)("div",{className:"col-lg-6 col-md-6 col-12 col-sm-6",children:(0,c.jsxs)("div",{className:"vendor-wrap mb-40  style-2",children:[(0,c.jsxs)("div",{className:"vendor-img-action-wrap",children:[(0,c.jsx)("div",{className:"vendor-img",children:(0,c.jsx)(t(),{legacyBehavior:!0,href:"vendor/".concat(e.id),children:(0,c.jsx)("a",{children:(0,c.jsx)("img",{className:"default-img",src:"assets/imgs/vendor/".concat(e.img),alt:""})})})}),(0,c.jsx)("div",{className:"mt-10",children:(0,c.jsxs)("span",{className:"font-small total-product",children:[e.product_count||0," products"]})})]}),(0,c.jsx)("div",{className:"vendor-content-wrap",children:(0,c.jsxs)("div",{className:"mb-30",children:[(0,c.jsx)("div",{className:"product-category",children:(0,c.jsx)("span",{className:"text-muted",children:new Date(e.created_at).toLocaleString("default",{month:"long",year:"numeric"})})}),(0,c.jsx)("h4",{className:"mb-5",children:(0,c.jsx)(t(),{legacyBehavior:!0,href:"vendor/".concat(e.id),children:(0,c.jsx)("a",{children:e.store_name})})}),(0,c.jsx)("div",{className:"vendor-info d-flex justify-content-between align-items-end mt-30",children:(0,c.jsx)(t(),{legacyBehavior:!0,href:"vendor/".concat(e.id),children:(0,c.jsxs)("a",{className:"btn btn-xs",children:["Visit Store ",(0,c.jsx)("i",{className:"fi-rs-arrow-small-right"})]})})})]})})]})},s))}),(0,c.jsx)("div",{className:"pagination-area mt-20 mb-20"})]})})})})}},9008:function(e,s,a){e.exports=a(3121)}},function(e){e.O(0,[1664,4143,9583,9774,2888,179],function(){return e(e.s=9123)}),_N_E=e.O()}]);