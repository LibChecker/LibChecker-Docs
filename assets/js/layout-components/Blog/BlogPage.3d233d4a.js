(window.webpackJsonp=window.webpackJsonp||[]).push([[20,12,15,16,22,24,25,29,33],{181:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return s})),n.d(e,"j",(function(){return a})),n.d(e,"i",(function(){return u})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return l})),n.d(e,"c",(function(){return h})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return d})),n.d(e,"k",(function(){return p}));const r=/#.*$/u,i=/\.(md|html)$/u,s=/\/$/u,a=/^[a-z]+:/iu,u=t=>decodeURI(t).replace(r,"").replace(i,""),o=t=>a.test(t),c=t=>t.startsWith("mailto:"),l=t=>t.startsWith("tel:"),h=t=>{if(o(t))return t;const e=r.exec(t),n=e?e[0]:"",i=u(t);return i.endsWith("/")?t:`${i}.html${n}`},f=t=>/(\.html|\/)$/u.test(t)?t:t+"/",d=(t,e)=>{const n=decodeURIComponent(t.hash),i=(t=>{const e=r.exec(t);return e?e[0]:""})(e);if(i&&n!==i)return!1;return u(t.path)===u(e)},p=(t,e,n)=>{if(o(t))return t;const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return`${e}${t}`;const i=e.split("/");n&&i[i.length-1]||i.pop();const s=t.replace(/^\//u,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?i.pop():"."!==e&&i.push(e)}return""!==i[0]&&i.unshift(""),i.join("/")}},185:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({name:"MyTransition",props:{delay:{type:Number,default:0},duration:{type:Number,default:.25}},methods:{setStyle(t){t.style.transition=`transform ${this.duration}s ease-in-out ${this.delay}s, opacity ${this.duration}s ease-in-out ${this.delay}s`,t.style.transform="translateY(-20px)",t.style.opacity="0"},unsetStyle(t){t.style.transform="translateY(0)",t.style.opacity="1"}}}),i=(n(215),n(1)),s=Object(i.a)(r,(function(){var t=this._self._c;this._self._setupProxy;return t("transition",{attrs:{name:"drop",appear:""},on:{appear:this.setStyle,"after-appear":this.unsetStyle,enter:this.setStyle,"after-enter":this.unsetStyle,"before-leave":this.setStyle}},[this._t("default")],2)}),[],!1,null,null,null);e.default=s.exports},187:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=(t,e,n)=>{if(t)if(t.startsWith("/"))n.path!==t&&e.push(t);else if(t.startsWith("http://")||t.startsWith("https://")||t.startsWith("mailto:"))window&&window.open(t);else{const r=n.path.slice(0,n.path.lastIndexOf("/"));e.push(`${r}/${encodeURI(t)}`)}}},189:function(t,e,n){},191:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=t=>`${t.charAt(0).toUpperCase()}${t.slice(1)}`,i={"en-US":"/en/","zh-CN":"/zh/","zh-TW":"/zh-tw/","de-AT":"/de/","vi-VN":"/vi/","ru-RU":"/ru/","uk-UA":"/uk/","pt-BR":"/br/"},s=Object.keys(i);Object.fromEntries(s.map(t=>[i[t],t]))},196:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return u}));var r=n(258),i=n.n(r);const s=t=>{const e=i()(t instanceof Date||"number"==typeof t?t:t.trim());if(e.isValid()){const t=e.year(),n=e.month()+1,r=e.date(),i=e.hour(),s=e.minute(),a=e.second(),u=e.millisecond();return 8!==i&&0!==i||0!==s||0!==a||0!==u?[t,n,r,i,s,a]:[t,n,r,void 0,void 0,void 0]}const[,n,r,s,a,u,o]=/(?:(\d+)[/-](\d+)[/-](\d+))?\s*(?:(\d+):(\d+)(?::(\d+))?)?/u.exec(t.trim())||[],c=t=>void 0===t?void 0:Number(t);return[(h=c(n),h&&h<100?h+2e3:h),c(r),c(s),c(a),c(u),(l=c(o),a&&u&&!o?0:l)];var l,h},a=(t,e)=>t.filter(t=>{const{frontmatter:{article:n,blogpage:r,home:i},title:s}=t;return void 0!==s&&!0!==r&&!0!==i&&!1!==n&&(!e||e(t))}),u=(t,e)=>t.slice(0).sort((t,n)=>{if(e){const r=t.frontmatter[e],i=n.frontmatter[e];if(r&&i&&r!==i)return Number(i)-Number(r);if(r&&!i)return-1;if(!r&&i)return 1}return((t,e)=>{if(!t)return 1;if(!e)return-1;const n=(t,e)=>0===t.length?0:void 0===e[0]?void 0===t[0]||0===t[0]?0:-1:void 0===t[0]?0===e[0]?0:1:e[0]-t[0]==0?(t.shift(),e.shift(),n(t,e)):e[0]-t[0];return n(s(t),s(e))})(t.frontmatter.time||t.frontmatter.date||t.createTimeStamp,n.frontmatter.time||n.frontmatter.date||n.createTimeStamp)})},211:function(t,e,n){},215:function(t,e,n){"use strict";n(189)},216:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(0),i=n(196);const s=r.a.extend({computed:{$timelineItems(){const{pages:t}=this.$site;return Object(i.c)(Object(i.a)(t,t=>Boolean(t.frontmatter.time||t.frontmatter.date||t.createTimeStamp)&&!1!==t.frontmatter.timeline))},$timeline(){const t=[];return this.$timelineItems.forEach(e=>{const{frontmatter:{date:n,time:r=n},createTimeStamp:s}=e,[a,u,o]=Object(i.b)(r||s);a&&u&&o&&(t[0]&&t[0].year===a||t.unshift({year:a,articles:[]}),e.frontmatter.parsedDate=`${u}/${o}`,t[0].articles.push(e))}),t.reverse()}}})},250:function(t,e,n){"use strict";var r=n(1),i=Object(r.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"icon category-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zm-.854 446.486H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zm446.371-446.486h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zm136.293 813.51H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z",fill:"currentColor"}})])}),[],!1,null,null,null);e.a=i.exports},251:function(t,e,n){"use strict";var r=n(1),i=Object(r.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"icon tag-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M939.902 458.563 910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 0 0 0 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z",fill:"currentColor"}})])}),[],!1,null,null,null);e.a=i.exports},255:function(t,e,n){"use strict";n(211)},258:function(t,e,n){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",r="second",i="minute",s="hour",a="day",u="week",o="month",c="quarter",l="year",h="date",f="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,o),s=n-i<0,a=e.clone().add(r+(s?-1:1),o);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:l,w:u,d:a,D:h,h:s,m:i,s:r,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",g={};g[y]=m;var _=function(t){return t instanceof b},w=function t(e,n,r){var i;if(!e)return y;if("string"==typeof e){var s=e.toLowerCase();g[s]&&(i=s),n&&(g[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var u=e.name;g[u]=e,i=u}return!r&&i&&(y=i),i||!r&&y},x=function(t,e){if(_(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new b(n)},M=v;M.l=w,M.i=_,M.w=function(t,e){return x(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function m(t){this.$L=w(t.locale,null,!0),this.parse(t)}var $=m.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(d);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return M},$.isValid=function(){return!(this.$d.toString()===f)},$.isSame=function(t,e){var n=x(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return x(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<x(t)},$.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var n=this,c=!!M.u(e)||e,f=M.p(t),d=function(t,e){var r=M.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?r:r.endOf(a)},p=function(t,e){return M.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,$=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(f){case l:return c?d(1,0):d(31,11);case o:return c?d(1,$):d(0,$+1);case u:var g=this.$locale().weekStart||0,_=(m<g?m+7:m)-g;return d(c?v-_:v+(6-_),$);case a:case h:return p(y+"Hours",0);case s:return p(y+"Minutes",1);case i:return p(y+"Seconds",2);case r:return p(y+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var u,c=M.p(t),f="set"+(this.$u?"UTC":""),d=(u={},u[a]=f+"Date",u[h]=f+"Date",u[o]=f+"Month",u[l]=f+"FullYear",u[s]=f+"Hours",u[i]=f+"Minutes",u[r]=f+"Seconds",u[n]=f+"Milliseconds",u)[c],p=c===a?this.$D+(e-this.$W):e;if(c===o||c===l){var m=this.clone().set(h,1);m.$d[d](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else d&&this.$d[d](p);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[M.p(t)]()},$.add=function(n,c){var h,f=this;n=Number(n);var d=M.p(c),p=function(t){var e=x(f);return M.w(e.date(e.date()+Math.round(t*n)),f)};if(d===o)return this.set(o,this.$M+n);if(d===l)return this.set(l,this.$y+n);if(d===a)return p(1);if(d===u)return p(7);var m=(h={},h[i]=t,h[s]=e,h[r]=1e3,h)[d]||1,$=this.$d.getTime()+n*m;return M.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=M.z(this),s=this.$H,a=this.$m,u=this.$M,o=n.weekdays,c=n.months,l=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},h=function(t){return M.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:M.s(u+1,2,"0"),MMM:l(n.monthsShort,u,c,3),MMMM:l(c,u),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,o,2),ddd:l(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:M.s(s,2,"0"),h:h(1),hh:h(2),a:d(s,a,!0),A:d(s,a,!1),m:String(a),mm:M.s(a,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(t,e){return e||m[t]||i.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(n,h,f){var d,p=M.p(h),m=x(n),$=(m.utcOffset()-this.utcOffset())*t,v=this-m,y=M.m(this,m);return y=(d={},d[l]=y/12,d[o]=y,d[c]=y/3,d[u]=(v-$)/6048e5,d[a]=(v-$)/864e5,d[s]=v/e,d[i]=v/t,d[r]=v/1e3,d)[p]||v,f?y:M.a(y)},$.daysInMonth=function(){return this.endOf(o).$D},$.$locale=function(){return g[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return M.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},m}(),S=b.prototype;return x.prototype=S,[["$ms",n],["$s",r],["$m",i],["$H",s],["$W",a],["$M",o],["$y",l],["$D",h]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),x.extend=function(t,e){return t.$i||(t(e,b,x),t.$i=!0),x},x.locale=w,x.isDayjs=_,x.unix=function(t){return x(1e3*t)},x.en=g[y],x.Ls=g,x.p={},x}()},271:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n(181);const s=(t,{text:e,link:n,level:r})=>t("RouterLink",{props:{to:n,activeClass:"",exactActiveClass:""},class:{"anchor-link":!0,[r?"heading"+r:""]:r}},[t("div",{},[e])]),a=(t,{children:e,route:n})=>t("ul",{class:"anchor-list"},e.map(e=>{const r=Object(i.e)(n,`${n.path}#${e.slug}`);return t("li",{class:{anchor:!0,active:r}},[s(t,{text:e.title,link:`${n.path}#${e.slug}`,level:e.level})])}));var u=r.a.extend({name:"Anchor",functional:!0,props:{items:{type:Array,default:()=>[]}},render:(t,{props:e,parent:{$page:n,$route:r}})=>t("div",{attrs:{class:"anchor-place-holder"}},[t("aside",{attrs:{id:"anchor"}},[t("div",{class:"anchor-wrapper"},[e.items.length?a(t,{children:e.items,route:r}):n.headers?a(t,{children:n.headers,route:r}):null])])])}),o=(n(255),n(1)),c=Object(o.a)(u,void 0,void 0,!1,null,null,null);e.default=c.exports},281:function(t,e,n){},282:function(t,e,n){},286:function(t,e,n){},287:function(t,e,n){},329:function(t,e,n){"use strict";n(281)},330:function(t,e,n){"use strict";n(282)},340:function(t,e,n){"use strict";n(286)},341:function(t,e,n){"use strict";n(287)},342:function(t,e,n){},347:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n(191),s=n(187),a=r.a.extend({name:"CategoryList",methods:{capitalize:i.a,clickCategory(t){Object(s.a)(t,this.$router,this.$route)}}}),u=(n(329),n(1)),o=Object(u.a)(a,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ul",{staticClass:"category-list-wrapper"},t._l(t.$category.list,(function(n,r){return e("li",{key:n.path,staticClass:"category",class:{active:n.path===t.$route.path,["category"+r%9]:!0},on:{click:function(e){return t.clickCategory(n.path)}}},[t._v("\n    "+t._s(t.capitalize(n.name))+"\n    "),e("span",{staticClass:"category-num"},[t._v(t._s(n.pages.length))])])})),0)}),[],!1,null,null,null);e.default=o.exports},348:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n(187),s=r.a.extend({name:"TagList",computed:{tagList(){return[{name:this.$themeLocaleConfig.blog.allText,path:"/tag/"},...this.$tag.list]}},methods:{isActive(t){return t===(this.$currentTag&&this.$currentTag.key||this.$themeLocaleConfig.blog.allText)},clickTag(t){Object(i.a)(t,this.$router,this.$route)}}}),a=(n(330),n(1)),u=Object(a.a)(s,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ul",{staticClass:"tag-list-wrapper"},t._l(t.tagList,(function(n,r){return e("li",{key:n.path,staticClass:"tag",class:{active:t.isActive(n.name),["tag"+r%9]:!0},on:{click:function(e){return t.clickTag(n.path)}}},[e("div",{staticClass:"tag-name"},[t._v(t._s(n.name))])])})),0)}),[],!1,null,null,null);e.default=u.exports},356:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n(187),s=r.a.extend({name:"ArticleType",computed:{types(){const t=this.$themeLocaleConfig.blog;return[{text:t.allText,path:"/article/"},{text:t.star,path:"/star/"},{text:t.slides,path:"/slide/"},{text:t.encrypt,path:"/encrypt/"}]}},methods:{navigate(t){Object(i.a)(t,this.$router,this.$route)}}}),a=(n(340),n(1)),u=Object(a.a)(s,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ul",{staticClass:"article-type-wrapper"},t._l(t.types,(function(n){return e("li",{key:n.text,staticClass:"article-type",class:{active:n.path===t.$route.path},attrs:{role:"navigation"},on:{click:function(e){return t.navigate(n.path)}}},[e("span",[t._v(t._s(n.text))])])})),0)}),[],!1,null,null,null);e.default=u.exports},357:function(t,e,n){"use strict";n.r(e);var r=n(271),i=n(185),s=n(216).a.extend({name:"Timeline",components:{Anchor:r.default,MyTransition:i.default},computed:{hint(){return this.$themeConfig.blog&&this.$themeConfig.blog.timeline||this.$themeLocaleConfig.blog.timelineText},anchorConfig(){return this.$timeline.map(t=>({title:t.year.toString(),level:2,slug:t.year.toString()}))}},methods:{navigate(t){this.$router.push(t)}}}),a=(n(341),n(1)),u=Object(a.a)(s,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"timeline-wrapper"},[e("ul",{staticClass:"timeline-content"},[e("MyTransition",[e("li",{staticClass:"desc"},[t._v(t._s(t.hint))])]),t._v(" "),e("Anchor",{attrs:{items:t.anchorConfig}}),t._v(" "),t._l(t.$timeline,(function(n,r){return e("MyTransition",{key:r,attrs:{delay:.08*(r+1)}},[e("li",[e("h3",{staticClass:"year",attrs:{id:n.year}},[e("span",[t._v(t._s(n.year))])]),t._v(" "),e("ul",{staticClass:"year-wrapper"},t._l(n.articles,(function(n,r){return e("li",{key:r},[e("span",{staticClass:"date"},[t._v(t._s(n.frontmatter.parsedDate))]),t._v(" "),e("span",{staticClass:"title",on:{click:function(e){return t.navigate(n.path)}}},[t._v("\n              "+t._s(n.title)+"\n            ")])])})),0)])])}))],2)])}),[],!1,null,null,null);e.default=u.exports},385:function(t,e,n){"use strict";n(342)},436:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n(308),s=n(356),a=n(347),u=n(185),o=n(348),c=n(357),l=r.a.extend({name:"BlogPage",components:{ArticleList:i.default,ArticleType:s.default,CategoryList:a.default,MyTransition:u.default,TagList:o.default,Timeline:c.default},computed:{showArticles(){const{path:t}=this.$route;return!t.includes("/timeline")},componentName(){const t=this.$route.path.split("/")[1];return["category","tag"].includes(t)?t+"List":"timeline"===t?"timeline":"articleType"}}}),h=(n(385),n(1)),f=Object(h.a)(l,(function(){var t=this._self._c;this._self._setupProxy;return t("main",{staticClass:"blog-page"},[t("MyTransition",[this.componentName?t(this.componentName,{tag:"component"}):this._e()],1),this._v(" "),t("MyTransition",{attrs:{delay:.24}},[this.showArticles?t("ArticleList",{key:this.$route.path}):this._e()],1)],1)}),[],!1,null,null,null);e.default=f.exports}}]);