"use strict";(self.webpackChunktech_store=self.webpackChunktech_store||[]).push([[419],{419:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var s=r(216),n=r(3),c=r(268);const o={};var i=r(579);const d=()=>{const{id:e}=(0,s.g)(),t=(0,n.d4)(c.VW).find((t=>t.id===Number(e)));if(!t)return(0,i.jsx)("p",{children:"Product not found."});const{imageUrl:r,name:d,count:a,size:u,weight:l,comments:h}=t;return(0,i.jsxs)("div",{className:o.productContainer,children:[(0,i.jsx)("img",{src:r,alt:d}),(0,i.jsx)("h1",{children:d}),(0,i.jsxs)("p",{children:["Count: ",a]}),(0,i.jsxs)("p",{children:["Size: ",u.width,"x",u.height," px"]}),(0,i.jsxs)("p",{children:["Weight: ",l]}),(0,i.jsx)("h2",{children:"Comments"}),(0,i.jsx)("ul",{children:h.map((e=>(0,i.jsx)("li",{children:e.description},e.id)))})]})}},790:(e,t,r)=>{r.d(t,{d:()=>s});const s=e=>e.filter},268:(e,t,r)=>{r.d(t,{VW:()=>c,f1:()=>i,hT:()=>o});var s=r(99),n=r(790);const c=(0,s.Mz)([e=>e.products.items,n.d],((e,t)=>{if(!e)return[];switch(t){case"A to Z":return[...e].sort(((e,t)=>e.name.localeCompare(t.name)));case"Z to A":return[...e].sort(((e,t)=>t.name.localeCompare(e.name)));case"popularity":return[...e].sort(((e,t)=>t.comments.length-e.comments.length));case"quantity":return[...e].sort(((e,t)=>t.count-e.count));default:return e}})),o=e=>e.products.isLoading,i=e=>e.products.error}}]);
//# sourceMappingURL=419.c9c4b385.chunk.js.map