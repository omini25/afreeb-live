(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4540],{1013:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/filter",function(){return l(9676)}])},6371:function(e,s,l){"use strict";var a=l(5893),t=l(1163),c=l(7294),r=l(2664),i=l(7330);let d={updateProductFilters:i.lG};s.Z=(0,r.$j)(null,d)(e=>{let{updateProductFilters:s}=e;(0,t.useRouter)();let[l,r]=(0,c.useState)([]),[i,d]=(0,c.useState)(0);(0,c.useEffect)(()=>{s({tags:l})},[l]);let n=(e,s)=>{r(s),d(i==e?0:e)};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("ul",{className:"tags-list",children:[{value:""},{value:"snack"},{value:"milk"},{value:"fruit"},{value:"broccoli"},{value:"salad"},{value:"appetizer"}].map((e,s)=>(0,a.jsx)("li",{className:"hover-up",onClick:()=>n(s,e.value),children:(0,a.jsxs)("a",{className:i==s?"cat-item text-brand-2":"cat-item text-brand",children:[(0,a.jsx)("i",{className:"fi-rs-cross mr-10"}),0==s?"All":"".concat(e.value)]})},s))})})})},3094:function(e,s,l){"use strict";var a=l(5893),t=l(2664),c=l(1190),r=l(8866),i=l(2920),d=l(5644);let n={closeWishlistModal:d.j2,deleteFromWishlist:d.ib,clearWishlist:d.y6,addToCart:r.Xq};s.Z=(0,t.$j)(e=>({wishlist:e.wishlist}),n)(e=>{let{wishlist:s,clearWishlist:l,closeWishlistModal:t,deleteFromWishlist:r,addToCart:d}=e,n=e=>{d(e),(0,i.Am)("Product added to Cart !")};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(c.u,{open:!!s&&!!s.modal,onClose:t,center:!0,classNames:{modal:"full-modal"},children:s&&s.items.length>0?(0,a.jsxs)("div",{className:"table-responsive",children:[(0,a.jsx)("table",{className:"table",children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"Product Name"})}),(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"Price"})}),(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"Quantity"})}),(0,a.jsx)("td",{children:(0,a.jsx)("strong",{children:"Action"})})]}),s&&s.items.map(e=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("img",{src:e.image,alt:"",className:"img-fluid",width:"70"})}),(0,a.jsxs)("td",{children:["$",e.price]}),(0,a.jsx)("td",{style:{width:"200px"},children:(0,a.jsx)("span",{onClick:s=>n(e),children:"Add To Cart"})}),(0,a.jsx)("td",{style:{width:"50px"},className:"text-center",children:(0,a.jsx)("span",{onClick:s=>r(e.id),children:(0,a.jsx)("button",{children:"Delete"})})})]}))]})}),(0,a.jsx)("div",{className:"text-right",children:(0,a.jsx)("span",{className:"clear-btn",onClick:l,children:"Clear All"})})]}):(0,a.jsx)("h4",{className:"mb-0",children:"No Products"})})})})},9676:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return k}});var a=l(5893),t=l(1163),c=l(7294),r=l(2664),i=l(8722),d=l(5303),n=l(1578),m=l(1601),u=l(769),o=l(3094),h=l(9583),x=l(8658),j=l(3169),v=l(7330);let g={updateProductFilters:v.lG};(0,r.$j)(null,g)(e=>{let{updateProductFilters:s}=e,[l,t]=(0,c.useState)([]),[r,i]=(0,c.useState)(0);(0,c.useEffect)(()=>{s({color:l})},[l]);let d=(e,s)=>{t(s),i(r==e?0:e)};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("ul",{className:"list-filter color-filter",children:[{value:""},{value:"red"},{value:"yellow"},{value:"white"},{value:"orange"},{value:"cyan"},{value:"green"},{value:"purple"}].map((e,s)=>(0,a.jsx)("li",{className:r==s&&"active",onClick:()=>d(s,e.value),children:(0,a.jsx)("a",{children:0==s?"All":(0,a.jsx)("span",{className:"product-color-".concat(e.value)})})}))})})});let N={updateProductFilters:v.lG};var p=(0,r.$j)(e=>({products:e.products?e.products.items:[]}),N)(e=>{let{updateProductFilters:s}=e,l=(0,t.useRouter)(),r=l.query.search,[i,d]=(0,c.useState)({value:{min:0,max:500}}),[n,m]=(0,c.useState)(0);return(0,c.useEffect)(()=>{let e={price:i.value};s(e)},[i,r]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("label",{className:"fw-900 mt-15",children:"Range"}),(0,a.jsx)("div",{className:"custome-checkbox",children:[{min:0,max:500},{min:50,max:100},{min:100,max:150},{min:150,max:200},{min:200,max:250},{min:250,max:300},{min:300,max:350}].map((e,s)=>(0,a.jsxs)("div",{children:[(0,a.jsx)("input",{type:"checkbox",className:"form-check-input",id:s,onChange:()=>d({value:{min:e.min,max:e.max}})}),(0,a.jsxs)("label",{htmlFor:s,className:"form-check-label",children:["$",e.min," - $",e.max]}),(0,a.jsx)("br",{})]},s))})]})});let b={updateProductRating:v.m7};(0,r.$j)(null,b)(e=>{let{updateProductRating:s}=e,[l,t]=(0,c.useState)(""),[r,i]=(0,c.useState)(0);(0,c.useEffect)(()=>{s({rating:l})},[l]);let d=(e,s)=>{t(s),i(r==e?0:e)};return(0,a.jsx)(a.Fragment,{children:[{value:""},{value:"5"},{value:"4"},{value:"3"},{value:"2 "},{value:"1"}].map((e,s)=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:r==s&&"active",onClick:()=>d(s,e.value),children:(0,a.jsx)("a",{children:0==s?"All":(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"product-rate-cover",children:(0,a.jsxs)("div",{className:"product-rate d-inline-block",children:[1==e.value&&(0,a.jsx)("div",{className:"product-rating",style:{width:"20%"}}),2==e.value&&(0,a.jsx)("div",{className:"product-rating",style:{width:"40%"}}),3==e.value&&(0,a.jsx)("div",{className:"product-rating",style:{width:"60%"}}),4==e.value&&(0,a.jsx)("div",{className:"product-rating",style:{width:"80%"}}),5==e.value&&(0,a.jsx)("div",{className:"product-rating",style:{width:"100%"}})]})})})})})}))})}),l(2763);var f=l(6371),w=l(3828),y=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"product-fillter-header",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-xl-3 col-lg-6 col-md-6 mb-lg-0 mb-md-2 mb-sm-2",children:(0,a.jsxs)("div",{className:"card",children:[(0,a.jsx)("h5",{className:"mb-30",children:"By Categories"}),(0,a.jsx)("div",{className:"categories-dropdown-wrap font-heading",children:(0,a.jsx)(j.Z,{})})]})}),(0,a.jsx)("div",{className:"col-xl-3 col-lg-6 col-md-6 mb-lg-0 mb-md-2 mb-sm-2",children:(0,a.jsxs)("div",{className:"card",children:[(0,a.jsx)("h5",{className:"mb-30",children:"By Vendors"}),(0,a.jsx)(w.Z,{})]})}),(0,a.jsx)("div",{className:"col-xl-3 col-lg-6 col-md-6 mb-lg-0 mb-md-2 mb-sm-2",children:(0,a.jsxs)("div",{className:"card",children:[(0,a.jsx)("h5",{className:"mb-30",children:"By Tags"}),(0,a.jsx)("div",{className:"sidebar-widget widget-tags",children:(0,a.jsx)(f.Z,{})})]})}),(0,a.jsx)("div",{className:"col-xl-3 col-lg-6 col-md-6 mb-lg-0 mb-md-2 mb-sm-2",children:(0,a.jsxs)("div",{className:"card",children:[(0,a.jsx)("h5",{className:"mb-30",children:"Price range"}),(0,a.jsx)(p,{})]})})]})})});let F={fetchProduct:x.MX};var k=(0,r.$j)(e=>({products:e.products,productFilters:e.productFilters}),F)(e=>{let{products:s,productFilters:l,fetchProduct:r}=e,x=(0,t.useRouter)().query.search,[j,v]=(0,c.useState)([]),[g,N]=(0,c.useState)(12),[p,b]=(0,c.useState)(Math.ceil(s&&s.items.length/g)),[f,w]=(0,c.useState)(1);(0,c.useEffect)(()=>{r(x,"/static/product.json",l),F()},[l,g,p,s&&s.items.length]);let F=()=>{let e;if(s&&s.items){let l=Math.ceil(s.items.length/g);Number.isInteger(l)&&l>=0&&l<4294967295&&(e=Array(l))}v(e),b(Math.ceil(s&&s.items.length/g))},k=f*g-g,C=k+g,P=s&&s.items.slice(k,C),S=4*Math.floor((f-1)/4),Z=S+4,_=j?j.slice(S,Z):[];return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(h.Z,{parent:"Home",sub:"Shop",subChild:"Filter",children:[(0,a.jsx)("section",{className:"mt-50 mb-50",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-12",children:(0,a.jsx)(y,{})}),(0,a.jsxs)("div",{className:"col-lg-12",children:[(0,a.jsxs)("div",{className:"product-fillter",children:[(0,a.jsx)("div",{className:"totall-product",children:(0,a.jsxs)("p",{children:["We found",(0,a.jsx)("strong",{className:"text-brand",children:s&&s.items.length}),"items for you!"]})}),(0,a.jsxs)("div",{className:"sort-by-product-area",children:[(0,a.jsx)("div",{className:"sort-by-cover mr-10",children:(0,a.jsx)(n.Z,{selectChange:e=>{N(Number(e.target.value)),w(1),b(Math.ceil(s&&s.items.length/Number(e.target.value)))},showLimit:12})}),(0,a.jsx)("div",{className:"sort-by-cover",children:(0,a.jsx)(u.Z,{})})]})]}),(0,a.jsxs)("div",{className:"row product-grid-3",children:[P&&0===P.length&&(0,a.jsx)("h3",{children:"No Products Found "}),P&&P.map((e,s)=>(0,a.jsx)("div",{className:"col-lg-1-5 col-md-4 col-12 col-sm-6",children:(0,a.jsx)(m.Z,{product:e})},s))]}),(0,a.jsx)("div",{className:"pagination-area mt-15 mb-sm-5 mb-lg-0",children:(0,a.jsx)("nav",{"aria-label":"Page navigation example",children:(0,a.jsx)(i.Z,{getPaginationGroup:_,currentPage:f,pages:p,next:()=>{w(e=>e+1)},prev:()=>{w(e=>e-1)},handleActive:e=>{w(e)}})})})]})]})})}),(0,a.jsx)(o.Z,{}),(0,a.jsx)(d.Z,{})]})})})}},function(e){e.O(0,[1664,4143,1001,9038,2093,9583,7730,5399,9774,2888,179],function(){return e(e.s=1013)}),_N_E=e.O()}]);