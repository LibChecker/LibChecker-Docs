if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const f=e=>a(e,r),b={module:{uri:r},exports:c,require:f};s[r]=Promise.all(i.map((e=>b[e]||f(e)))).then((e=>(d(...e),c)))}}define(["./workbox-2572b17b"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.2e89484a.css",revision:"67b777476273222a6cc8f249ef7cb6d2"},{url:"assets/img/danger-dark.86c63c40.svg",revision:"86c63c4006d5cd5f860cdef57310696a"},{url:"assets/img/danger.1c7d8a0f.svg",revision:"1c7d8a0f45b8bee5d5b92334a16e2711"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.a1decb69.svg",revision:"a1decb69db82fb8eebb48704dd74e649"},{url:"assets/img/info.6f2cfedb.svg",revision:"6f2cfedb8e6d19d1b24eb73943f7ff4e"},{url:"assets/img/note-dark.8668720f.svg",revision:"8668720f2e50ebd01173f11a89d9da6e"},{url:"assets/img/note.32319b2e.svg",revision:"32319b2e9c86860d8a4f1c8f660096cb"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.0d0028db.svg",revision:"0d0028db13caec45ac1527d8b673fae0"},{url:"assets/img/tip.a9004be5.svg",revision:"a9004be5a8a5a83cc9c77bba88c816ff"},{url:"assets/img/warning-dark.b995cb45.svg",revision:"b995cb45fa552ac10ad35fa7716af15b"},{url:"assets/img/warning.57a43d6d.svg",revision:"57a43d6dcdee07d8db78a5dd3d6137ba"},{url:"assets/js/23.44a1e962.js",revision:"7ac9c8f573c5f6ed8919e494e884ec48"},{url:"assets/js/24.9564e234.js",revision:"28ee52ec72678bda1829cd3b71342936"},{url:"assets/js/25.1a8e454d.js",revision:"8de5ee1b2a8cf6a51cf96a030e7da693"},{url:"assets/js/app.e3e38d7b.js",revision:"1d28c0c706bcc357ff543a202f92441f"},{url:"assets/js/layout-Blog.03bd29e4.js",revision:"b4b8914fb9284527c1443efb46d39025"},{url:"assets/js/layout-Layout.86e2e3bb.js",revision:"915779518cf3fffedaa37526105726ad"},{url:"assets/js/layout-NotFound.03296140.js",revision:"8e566c17cb439e66d1cd59c5116a9c8f"},{url:"assets/js/layout-Slide.7d754441.js",revision:"a4f504d35eb893a80067eb1c93e2d501"},{url:"assets/js/page-Download.989fc46c.js",revision:"07ea48b7c05d028a96351c1af817ddde"},{url:"assets/js/page-Home.cf80985f.js",revision:"4be24a65f107e8e6f6bee644cec88c6b"},{url:"assets/js/page-什么是原生库架构？.d838d114.js",revision:"7f24889158c09a83ebca7308cc807780"},{url:"assets/js/page-什么是注册组件？.1e502967.js",revision:"a5caea082c7e90b408d241ce1097b346"},{url:"assets/js/page-包特性分析.5104d267.js",revision:"6729f5d3c7f2fe0d8fa7741821dc7295"},{url:"assets/js/page-库引用统计.1472ddfb.js",revision:"2b995d4a909be130244af6f254e47e61"},{url:"assets/js/page-快照.f9296c7f.js",revision:"1d770ebe377a66079a9823db89d2622b"},{url:"assets/js/page-思维导图.6e4d7d9d.js",revision:"2e05b74a7a59581263b5482b6bdaab24"},{url:"assets/js/page-更新日志.52cd9eb4.js",revision:"f91baf7fab077fd97da32f6898b38acd"},{url:"assets/js/page-服务协议.0a6f1a36.js",revision:"47f230d533249d7fb2502d9a6af53f2e"},{url:"assets/js/page-概要.87e5e560.js",revision:"5878e5f287afd6d32eca046894161da6"},{url:"assets/js/page-知名库标记.9315a57c.js",revision:"979c86f06d0f49a71794b47bfc7f0a68"},{url:"assets/js/page-隐私政策.0f25ac41.js",revision:"ec42d4fa921e9603b81f534ec709f421"},{url:"assets/js/vendors~layout-Blog~layout-Layout.d5ee5273.js",revision:"d5a979969b3aa3bf860d25e285e12f54"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.ab5aef55.js",revision:"5e1a681e5aeea5dbb5416232840ebfab"},{url:"assets/js/vendors~layout-Layout.49a176e4.js",revision:"1d3101a3546f3587035aa43aa1464802"},{url:"assets/js/vendors~photo-swipe.d9950ca2.js",revision:"b859b2bf16082314af112266ec544b18"},{url:"404.html",revision:"411489d179a895061b63ae0036a56fed"},{url:"article/index.html",revision:"1aa22993e44cbc72e5a41aa9031c1bce"},{url:"category/index.html",revision:"05f0091f0d392ba7126f1db08b2bb869"},{url:"changelog/index.html",revision:"116487d0a3d7d0aef7bd5dbf08b3fe45"},{url:"download/index.html",revision:"a4c084a569dd63945f3e647b3c8e8162"},{url:"encrypt/index.html",revision:"b09fb78e51f521283bdb2b485c3c9cf8"},{url:"guide/index.html",revision:"6f20ee437e2077aa9c3af1626c6287a8"},{url:"guide/Library-Reference-Statistics/index.html",revision:"bf3f26891aa7aa2823b8740727ee9554"},{url:"guide/Marked-Popular-Library/index.html",revision:"396f7399e5a3753de560c2e6e08b5d47"},{url:"guide/Mind-Mapping/index.html",revision:"2a6ff56dd7627292ec22815f8e6b2649"},{url:"guide/Package-Features-Analysis/index.html",revision:"715c146584003a5800307a6d89b373f6"},{url:"guide/PRIVACY/index.html",revision:"2951bc2d617160d59839ca9008c7c992"},{url:"guide/Snapshot-Usage/index.html",revision:"c8b15f153947755d7ebc879dab7d8c98"},{url:"guide/TERMS/index.html",revision:"22bfa530c66d93273d3d478163bdd63f"},{url:"guide/What-is-Native-Library-Architecture/index.html",revision:"c97c2c3d8757a19afe1f770e2fc7861d"},{url:"guide/What-is-Registered-Component/index.html",revision:"8a309c0c0b83a8b8904a2a6834e55f0d"},{url:"index.html",revision:"157e4d3d5b322e4262dbb2df32b952e6"},{url:"slide/index.html",revision:"b441e1a81bd0db1d62013e5889fc065d"},{url:"star/index.html",revision:"ef9a7ae1e4497b68422bfb04ca9882e5"},{url:"tag/index.html",revision:"fdcff0e1cb75cef3253269dfaaf29e8b"},{url:"timeline/index.html",revision:"7178f900fd0a1048d6e2ba75f577acec"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
