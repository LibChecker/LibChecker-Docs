(window.webpackJsonp=window.webpackJsonp||[]).push([[12,33],{181:function(t,n,e){"use strict";e.d(n,"d",(function(){return r})),e.d(n,"a",(function(){return c})),e.d(n,"j",(function(){return i})),e.d(n,"i",(function(){return s})),e.d(n,"f",(function(){return o})),e.d(n,"g",(function(){return l})),e.d(n,"h",(function(){return a})),e.d(n,"c",(function(){return d})),e.d(n,"b",(function(){return h})),e.d(n,"e",(function(){return p})),e.d(n,"k",(function(){return f}));const r=/#.*$/u,u=/\.(md|html)$/u,c=/\/$/u,i=/^[a-z]+:/iu,s=t=>decodeURI(t).replace(r,"").replace(u,""),o=t=>i.test(t),l=t=>t.startsWith("mailto:"),a=t=>t.startsWith("tel:"),d=t=>{if(o(t))return t;const n=r.exec(t),e=n?n[0]:"",u=s(t);return u.endsWith("/")?t:`${u}.html${e}`},h=t=>/(\.html|\/)$/u.test(t)?t:t+"/",p=(t,n)=>{const e=decodeURIComponent(t.hash),u=(t=>{const n=r.exec(t);return n?n[0]:""})(n);if(u&&e!==u)return!1;return s(t.path)===s(n)},f=(t,n,e)=>{if(o(t))return t;const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return`${n}${t}`;const u=n.split("/");e&&u[u.length-1]||u.pop();const c=t.replace(/^\//u,"").split("/");for(let t=0;t<c.length;t++){const n=c[t];".."===n?u.pop():"."!==n&&u.push(n)}return""!==u[0]&&u.unshift(""),u.join("/")}},211:function(t,n,e){},255:function(t,n,e){"use strict";e(211)},271:function(t,n,e){"use strict";e.r(n);var r=e(0),u=e(181);const c=(t,{text:n,link:e,level:r})=>t("RouterLink",{props:{to:e,activeClass:"",exactActiveClass:""},class:{"anchor-link":!0,[r?"heading"+r:""]:r}},[t("div",{},[n])]),i=(t,{children:n,route:e})=>t("ul",{class:"anchor-list"},n.map(n=>{const r=Object(u.e)(e,`${e.path}#${n.slug}`);return t("li",{class:{anchor:!0,active:r}},[c(t,{text:n.title,link:`${e.path}#${n.slug}`,level:n.level})])}));var s=r.a.extend({name:"Anchor",functional:!0,props:{items:{type:Array,default:()=>[]}},render:(t,{props:n,parent:{$page:e,$route:r}})=>t("div",{attrs:{class:"anchor-place-holder"}},[t("aside",{attrs:{id:"anchor"}},[t("div",{class:"anchor-wrapper"},[n.items.length?i(t,{children:n.items,route:r}):e.headers?i(t,{children:e.headers,route:r}):null])])])}),o=(e(255),e(1)),l=Object(o.a)(s,void 0,void 0,!1,null,null,null);n.default=l.exports}}]);