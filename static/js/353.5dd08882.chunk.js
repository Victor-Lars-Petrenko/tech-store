"use strict";(self.webpackChunktech_store=self.webpackChunktech_store||[]).push([[353],{353:(e,t,s)=>{s.r(t),s.d(t,{default:()=>M});var n=s(3),o=s(216),l=s(268),r=s(43);const c={filterSection:"Filter_filterSection__N5x2R",filterForm:"Filter_filterForm__+l+6Q",filterMenu:"Filter_filterMenu__GBiPG",filterList:"Filter_filterList__Sfn16",filterOption:"Filter_filterOption__jXYy1",addBtn:"Filter_addBtn__shgn2"},a=["A to Z","Z to A","popularity","quantity"];var i=s(790),d=s(163),u=s(579);const m={imageUrl:"",name:"",count:0,size:{width:0,height:0},weight:"",comments:[]},h=()=>{const[e,t]=(0,r.useState)(m),s=e=>{const{name:s,value:n}=e.target;"width"===s&&"height"===s&&t({size:{[s]:n}}),t({[s]:n})};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h3",{children:"Add New Product"}),(0,u.jsxs)("form",{children:[(0,u.jsxs)("label",{children:["Name",(0,u.jsx)("input",{type:"text",autocopmlete:"off",name:"name",value:e.name,onChange:s})]}),(0,u.jsxs)("label",{children:["Image link",(0,u.jsx)("input",{type:"text",autocopmlete:"off",name:"imageUrl",value:e.name,onChange:s})]}),(0,u.jsxs)("label",{children:["Number of products",(0,u.jsx)("input",{type:"number",min:"0",autocopmlete:"off",name:"count",value:e.name,onChange:s})]}),(0,u.jsx)("h4",{children:"Size of the product"}),(0,u.jsxs)("div",{children:[(0,u.jsxs)("label",{children:["Width",(0,u.jsx)("input",{type:"number",min:"0",autocopmlete:"off",name:"width",value:e.name,onChange:s})]}),(0,u.jsxs)("label",{children:["Height",(0,u.jsx)("input",{type:"number",min:"0",autocopmlete:"off",name:"height",value:e.name,onChange:s})]})]}),(0,u.jsxs)("label",{children:["Weight",(0,u.jsx)("input",{type:"text",autocopmlete:"off",name:"weight",value:e.name,onChange:s})]}),(0,u.jsx)("button",{type:"submit",children:"Add"})]})]})};var p=s(950),x=s(676);const _="Modal_overlay__r63M6",j="Modal_modal__DJDMv",f="Modal_iconCross__WRT4o",g="Modal_closeBtn__mlOa4",b=e=>{let{close:t,children:s}=e;const n=(0,r.useCallback)((e=>{e.target!==e.currentTarget&&"Escape"!==e.code||t()}),[t]);(0,r.useEffect)((()=>{document.addEventListener("keydown",n);const e=window.scrollY;return document.body.style.position="fixed",document.body.style.top=`-${e}px`,()=>{document.removeEventListener("keydown",n);const e=document.body.style.top;document.body.style.position="",document.body.style.top="",window.scrollTo(0,-1*parseInt(e||"0"))}}),[n]);const o=document.querySelector("#modal-root");return(0,p.createPortal)((0,u.jsx)("div",{className:_,onClick:n,children:(0,u.jsxs)("div",{className:j,children:[(0,u.jsx)("button",{type:"button",className:g,onClick:t,children:(0,u.jsx)("svg",{className:f,children:(0,u.jsx)("use",{href:`${x.A}#icon-cross`})})}),s]})}),o)},y=()=>{const[e,t]=(0,r.useState)(!1),[s,o]=(0,r.useState)(!1),l=(0,n.d4)(i.d),m=(0,n.wA)(),p=()=>{o((e=>!e))};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("section",{className:c.filterSection,children:[(0,u.jsxs)("form",{className:c.filterForm,children:[(0,u.jsx)("button",{type:"button",className:c.filterMenu,onClick:()=>{t((e=>!e))},children:l}),e&&(0,u.jsx)("ul",{className:c.filterList,children:a.map((e=>(0,u.jsx)("li",{className:c.filterOption,children:(0,u.jsx)("button",{type:"button",className:c.filterBtn,onClick:()=>(e=>{m((0,d.R)(e)),t(!1)})(e),children:e})},e)))})]}),(0,u.jsx)("button",{type:"button",className:c.addBtn,onClick:p,children:"Add Product"})]}),s&&(0,u.jsx)(b,{close:p,children:(0,u.jsx)(h,{})})]})},C="Products_homeContainer__Lg8Fv",N="Products_productList__JBaKC",v="Products_productCard__fsJ8j",w="Products_productCardTitle__xEJGb",k="Products_productCardDescription__BcxqC",P="Products_buttons__RuEIU",F="Products_button__AxGMs",M=()=>{const e=(0,n.d4)(l.VW),t=(0,n.d4)(l.hT),s=(0,n.d4)(l.f1),r=(0,o.Zp)();return(0,u.jsxs)("main",{className:C,children:[(0,u.jsx)("h1",{children:"Products"}),(0,u.jsx)(y,{}),!s&&!t&&e[0]&&(0,u.jsx)("ul",{className:N,children:e.map((e=>{let{id:t,imageUrl:s,name:n,count:o,size:{height:l,width:c},weight:a,comments:i}=e;return(0,u.jsxs)("li",{className:v,onClick:()=>(e=>{r(`/product/${e}`)})(t),children:[(0,u.jsx)("img",{src:s,alt:n}),(0,u.jsxs)("div",{className:w,children:[(0,u.jsx)("h2",{className:w,children:n}),(0,u.jsxs)("p",{className:k,children:["Count: ",o]}),(0,u.jsxs)("p",{className:k,children:["Weight: ",a]}),(0,u.jsxs)("p",{className:k,children:["Size: ",c,"x",l," px"]}),(0,u.jsxs)("p",{className:k,children:["Comments: ",i.length]})]}),(0,u.jsxs)("div",{className:P,children:[(0,u.jsx)("button",{className:F,onClick:e=>e.stopPropagation(),children:"Edit"}),(0,u.jsx)("button",{className:F,onClick:e=>e.stopPropagation(),children:"Delete"})]})]},t)}))})]})}},790:(e,t,s)=>{s.d(t,{d:()=>n});const n=e=>e.filter},268:(e,t,s)=>{s.d(t,{VW:()=>l,f1:()=>c,hT:()=>r});var n=s(99),o=s(790);const l=(0,n.Mz)([e=>e.products.items,o.d],((e,t)=>{if(!e)return[];switch(t){case"A to Z":return[...e].sort(((e,t)=>e.name.localeCompare(t.name)));case"Z to A":return[...e].sort(((e,t)=>t.name.localeCompare(e.name)));case"popularity":return[...e].sort(((e,t)=>t.comments.length-e.comments.length));case"quantity":return[...e].sort(((e,t)=>t.count-e.count));default:return e}})),r=e=>e.products.isLoading,c=e=>e.products.error}}]);
//# sourceMappingURL=353.5dd08882.chunk.js.map