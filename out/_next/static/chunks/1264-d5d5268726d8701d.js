"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1264],{8504:function(e,s,l){var t=l(5893),r=l(2664);l(1190);var i=l(9216),n=l(1664),a=l.n(n),c=l(2920),d=l(8866);let o={addToCart:d.Xq};var h=(0,r.$j)(null,o)(e=>{let{data:s,features:l,deleteFromCompare:r,addToCart:i}=e,n=e=>{i(e),(0,c.Am)("Product added to Cart !")};return(0,t.jsx)("table",{className:"table text-center",children:(0,t.jsx)("tbody",{children:l.map(e=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{className:"text-muted font-md fw-600",style:{textTransform:"capitalize"},children:e}),s.map(s=>"preview"==e?(0,t.jsx)("td",{className:"row_img",children:(0,t.jsx)("img",{src:s.images[0].img})}):"name"==e?(0,t.jsx)("td",{className:"product_name",children:(0,t.jsx)("h5",{children:(0,t.jsx)("a",{href:"#",children:s.title})})}):"price"==e?(0,t.jsx)("td",{className:"product_price",children:(0,t.jsxs)("span",{className:"price",children:["$",s.price]})}):"rating"==e?(0,t.jsx)("td",{children:(0,t.jsx)("div",{className:"rating_wrap",children:s.review>=0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"product-rate d-inline-block",children:(0,t.jsx)("div",{className:"product-rating",style:{width:"".concat(s.ratingScore,"%")}})}),(0,t.jsxs)("span",{className:"rating_num",children:["(",s.review,")"]})]})})}):"description"==e?(0,t.jsx)("td",{className:"row_text font-xs",children:(0,t.jsx)("p",{children:s.desc})}):"stock"==e?(0,t.jsx)("td",{className:"row_stock",children:s.stock>=0?(0,t.jsx)("span",{children:"In Stock"}):(0,t.jsx)("span",{className:"text-danger font-weight-bold",children:"Out of stock"})}):"weight"==e?(0,t.jsxs)("td",{className:"row_weight",children:[s.weight," gram"]}):"dimensions"==e?(0,t.jsx)("td",{className:"row_dimensions",children:"N/A"}):"buy"==e?(0,t.jsx)("td",{className:"row_btn",children:s.stock>=0?(0,t.jsxs)("button",{className:"btn  btn-sm",onClick:e=>n(s),children:[(0,t.jsx)("i",{className:"fi-rs-shopping-bag mr-5"}),"Add to cart"]}):(0,t.jsx)(a(),{legacyBehavior:!0,href:"/contact",children:(0,t.jsxs)("button",{className:"btn  btn-sm btn-secondary",children:[(0,t.jsx)("i",{className:"fi-rs-headset mr-5"}),"Contact Us"]})})}):" "==e?(0,t.jsx)("td",{className:"row_remove",children:(0,t.jsxs)("a",{onClick:()=>r(s.id),children:[(0,t.jsx)("i",{className:"fi-rs-trash mr-5"}),(0,t.jsx)("span",{children:"Remove"})]})}):null)]}))})})});let x={closeCompareModal:i.iH,clearCompare:i._Z,deleteFromCompare:i.Ht};(0,r.$j)(e=>({compare:e.compare}),x)(e=>{let{compare:s,closeCompareModal:l,deleteFromCompare:r,clearCompare:i}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-xl-12",children:s.items.length>0?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h,{data:s.items,features:["name","price","size"],deleteFromCompare:r}),(0,t.jsx)("div",{className:"text-right",children:(0,t.jsx)("span",{className:"clear-btn",onClick:i,children:"Clear All"})})]}):(0,t.jsx)("h4",{children:"No Products"})})})})})})},1578:function(e,s,l){var t=l(5893);s.Z=function(e){let{selectChange:s,showLimit:l}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"sort-by-product-wrap",children:[(0,t.jsx)("div",{className:"sort-by",children:(0,t.jsxs)("span",{children:[(0,t.jsx)("i",{className:"fi-rs-apps"}),"Show:"]})}),(0,t.jsx)("div",{className:"sort-by-dropdown-wrap custom-select",children:(0,t.jsxs)("select",{onChange:s,children:[(0,t.jsx)("option",{value:l,children:l}),(0,t.jsx)("option",{value:5,children:"5"}),(0,t.jsx)("option",{value:10,children:"10"})]})})]})})}},769:function(e,s,l){var t=l(5893),r=l(1163),i=l(7294),n=l(2664),a=l(7330);let c={updateProductFilters:a.lG};s.Z=(0,n.$j)(e=>({products:e.products?e.products.items:[]}),c)(e=>{let{updateProductFilters:s}=e,l=(0,r.useRouter)(),n=l.query?l.query.search:void 0,[a,c]=(0,i.useState)("");(0,i.useEffect)(()=>{s({featured:a})},[n,a]);let d=e=>{c(e.target.value)};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"sort-by-product-wrap",children:[(0,t.jsx)("div",{className:"sort-by",children:(0,t.jsxs)("span",{children:[(0,t.jsx)("i",{className:"fi-rs-apps-sort"}),"Sort by:"]})}),(0,t.jsx)("div",{className:"sort-by-dropdown-wrap custom-select",children:(0,t.jsxs)("select",{onChange:e=>d(e),children:[(0,t.jsx)("option",{value:"",children:"Defaults"}),(0,t.jsx)("option",{value:"featured",children:"Featured"}),(0,t.jsx)("option",{value:"trending",children:"Trending"}),(0,t.jsx)("option",{value:"lowToHigh",children:"Low To High"}),(0,t.jsx)("option",{value:"highToLow",children:"High To Low"})]})})]})})})},8722:function(e,s,l){var t=l(5893);l(7294),s.Z=function(e){let{prev:s,currentPage:l,getPaginationGroup:r,next:i,pages:n,handleActive:a}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("ul",{className:"pagination justify-content-start",children:[r.length<=0?null:(0,t.jsx)("li",{onClick:s,className:"page-item",children:1===l?null:(0,t.jsx)("a",{className:"page-link",children:(0,t.jsx)("i",{className:"fi-rs-angle-double-small-left"})})}),r.map((e,s)=>(0,t.jsx)("li",{onClick:()=>a(e),className:l===e?"page-item active":"page-item",children:(0,t.jsx)("a",{className:"page-link",children:e})},s)),r.length<=0?null:(0,t.jsx)("li",{onClick:i,className:"page-item",children:l>=n?null:(0,t.jsx)("a",{className:"page-link",children:(0,t.jsx)("i",{className:"fi-rs-angle-double-small-right"})})})]}),r.length<=0?null:(0,t.jsxs)("p",{children:["show ",l," of ",n]})]})}},5303:function(e,s,l){var t=l(5893);l(7294);var r=l(2664),i=l(1190),n=l(3181),a=l(7730);s.Z=(0,r.$j)(e=>({quickView:e.quickView}),{closeQuickView:n.z})(e=>{let{quickView:s,closeQuickView:l}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(i.u,{open:!!s,onClose:l,styles:{modal:{width:"80%",height:"70%",marginTop:"70px"}},children:s&&(0,t.jsx)("div",{className:"quick-view ",children:(0,t.jsx)(a.Z,{product:s,quickView:s})})})})})},3094:function(e,s,l){var t=l(5893),r=l(2664),i=l(1190),n=l(8866),a=l(2920),c=l(5644);let d={closeWishlistModal:c.j2,deleteFromWishlist:c.ib,clearWishlist:c.y6,addToCart:n.Xq};s.Z=(0,r.$j)(e=>({wishlist:e.wishlist}),d)(e=>{let{wishlist:s,clearWishlist:l,closeWishlistModal:r,deleteFromWishlist:n,addToCart:c}=e,d=e=>{c(e),(0,a.Am)("Product added to Cart !")};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(i.u,{open:!!s&&!!s.modal,onClose:r,center:!0,classNames:{modal:"full-modal"},children:s&&s.items.length>0?(0,t.jsxs)("div",{className:"table-responsive",children:[(0,t.jsx)("table",{className:"table",children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Product Name"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Price"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Quantity"})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Action"})})]}),s&&s.items.map(e=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("img",{src:e.image,alt:"",className:"img-fluid",width:"70"})}),(0,t.jsxs)("td",{children:["$",e.price]}),(0,t.jsx)("td",{style:{width:"200px"},children:(0,t.jsx)("span",{onClick:s=>d(e),children:"Add To Cart"})}),(0,t.jsx)("td",{style:{width:"50px"},className:"text-center",children:(0,t.jsx)("span",{onClick:s=>n(e.id),children:(0,t.jsx)("button",{children:"Delete"})})})]}))]})}),(0,t.jsx)("div",{className:"text-right",children:(0,t.jsx)("span",{className:"clear-btn",onClick:l,children:"Clear All"})})]}):(0,t.jsx)("h4",{className:"mb-0",children:"No Products"})})})})},8658:function(e,s,l){l.d(s,{MX:function(){return a}});var t=(e,s)=>{let l=[...e];for(let e in s)"price"!==e?"featured"===s[e]||"trending"===s[e]||"lowToHigh"===s[e]||"highToLow"===s[e]?"lowToHigh"===s[e]?l=[...l.sort((e,s)=>e.price<s.price?-1:e.price>s.price?1:void 0)]:"highToLow"===s[e]?(console.log("hi"),l=[...l.sort((e,s)=>s.price<e.price?-1:s.price>e.price?1:void 0)]):(console.log("hi1"),l=l.filter(l=>l[s[e]])):l=function(e,s,l){let t=[];if(!s||0===s.length)return e;for(let r=0;r<e.length;r++){let i=e[r];if(void 0!=s.indexOf){let e=s&&s.indexOf(i[l]);-1!==e&&t.push(i)}}return e=t}(l,s[e],e):l=function(e,s,l){let t=[];for(let r=0;r<e.length;r++){let i=e[r],n=i[l];n>=s.min&&n<=s.max&&t.push(i)}return e=t}(l,s[e],e);return l},r=(e,s)=>{if(!e)return s;let l=[],t=e.toLowerCase().split(" ");for(let e=0;e<s.length;e++){let r=s[e],n=i(r.title,t);n&&l.push(r)}return l};let i=(e,s)=>{let l=!1;for(let t=0;t<s.length;t++){let r=s[t],i=-1!==e.toLowerCase().indexOf(r);if(l=!!i,!i)break}return l};var n=l(6330);let a=(e,s,l)=>async i=>{try{let a=await fetch(s),c=await a.json();window.products=c;let d=r(e,c),o=t(d,l);i({type:n.jP,payload:{products:o}})}catch(e){console.log(e)}}}}]);