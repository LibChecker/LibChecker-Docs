if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const f=e=>a(e,c),b={module:{uri:c},exports:r,require:f};s[c]=Promise.all(i.map((e=>b[e]||f(e)))).then((e=>(d(...e),r)))}}define(["./workbox-2572b17b"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.95116180.css",revision:"67b777476273222a6cc8f249ef7cb6d2"},{url:"assets/img/danger-dark.86c63c40.svg",revision:"86c63c4006d5cd5f860cdef57310696a"},{url:"assets/img/danger.1c7d8a0f.svg",revision:"1c7d8a0f45b8bee5d5b92334a16e2711"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.a1decb69.svg",revision:"a1decb69db82fb8eebb48704dd74e649"},{url:"assets/img/info.6f2cfedb.svg",revision:"6f2cfedb8e6d19d1b24eb73943f7ff4e"},{url:"assets/img/note-dark.8668720f.svg",revision:"8668720f2e50ebd01173f11a89d9da6e"},{url:"assets/img/note.32319b2e.svg",revision:"32319b2e9c86860d8a4f1c8f660096cb"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.0d0028db.svg",revision:"0d0028db13caec45ac1527d8b673fae0"},{url:"assets/img/tip.a9004be5.svg",revision:"a9004be5a8a5a83cc9c77bba88c816ff"},{url:"assets/img/warning-dark.b995cb45.svg",revision:"b995cb45fa552ac10ad35fa7716af15b"},{url:"assets/img/warning.57a43d6d.svg",revision:"57a43d6dcdee07d8db78a5dd3d6137ba"},{url:"assets/js/23.a0cf99a1.js",revision:"7ac9c8f573c5f6ed8919e494e884ec48"},{url:"assets/js/24.a0607e4a.js",revision:"28ee52ec72678bda1829cd3b71342936"},{url:"assets/js/25.08b0429e.js",revision:"8de5ee1b2a8cf6a51cf96a030e7da693"},{url:"assets/js/app.83376cc7.js",revision:"85d70752cbc2faf110bb01835b92f615"},{url:"assets/js/layout-Blog.7ae7df2e.js",revision:"b4b8914fb9284527c1443efb46d39025"},{url:"assets/js/layout-Layout.1e0783c9.js",revision:"915779518cf3fffedaa37526105726ad"},{url:"assets/js/layout-NotFound.29448c1a.js",revision:"8e566c17cb439e66d1cd59c5116a9c8f"},{url:"assets/js/layout-Slide.0133ea2a.js",revision:"a4f504d35eb893a80067eb1c93e2d501"},{url:"assets/js/page-Download.17fb0ca4.js",revision:"4c76157c4bed2efa6eb51eda29c2e427"},{url:"assets/js/page-Home.b92e4bc1.js",revision:"4be24a65f107e8e6f6bee644cec88c6b"},{url:"assets/js/page-什么是原生库架构？.d583a1d4.js",revision:"7f24889158c09a83ebca7308cc807780"},{url:"assets/js/page-什么是注册组件？.4a784d2e.js",revision:"a5caea082c7e90b408d241ce1097b346"},{url:"assets/js/page-包特性分析.b673cf9f.js",revision:"b89bf648886c8397f6f61a4080ecea45"},{url:"assets/js/page-库引用统计.8adde94e.js",revision:"2b995d4a909be130244af6f254e47e61"},{url:"assets/js/page-快照.7ed43262.js",revision:"075182f31e23957c5eb7c40e3389d281"},{url:"assets/js/page-思维导图.e752e89c.js",revision:"2cb537127a3deace16b49628d7e1e2be"},{url:"assets/js/page-更新日志.8a8f7121.js",revision:"f91baf7fab077fd97da32f6898b38acd"},{url:"assets/js/page-服务协议.c823a7f7.js",revision:"47f230d533249d7fb2502d9a6af53f2e"},{url:"assets/js/page-概要.954b7934.js",revision:"5878e5f287afd6d32eca046894161da6"},{url:"assets/js/page-知名库标记.c6c5e432.js",revision:"979c86f06d0f49a71794b47bfc7f0a68"},{url:"assets/js/page-隐私政策.d6910ac9.js",revision:"ec42d4fa921e9603b81f534ec709f421"},{url:"assets/js/vendors~layout-Blog~layout-Layout.a0299c71.js",revision:"d5a979969b3aa3bf860d25e285e12f54"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.7bd1a963.js",revision:"5e1a681e5aeea5dbb5416232840ebfab"},{url:"assets/js/vendors~layout-Layout.39ba918c.js",revision:"1d3101a3546f3587035aa43aa1464802"},{url:"assets/js/vendors~photo-swipe.5d4128f0.js",revision:"b859b2bf16082314af112266ec544b18"},{url:"404.html",revision:"93ce3ce8eef08fcb33aa96acac7eeaf2"},{url:"article/index.html",revision:"b0c4362d5bfac3cc22adf8ee98245e56"},{url:"category/index.html",revision:"be1a9ce56a543fa6190cc51720f335a2"},{url:"changelog/index.html",revision:"46b8a5362a51fa4867695752cd62bfec"},{url:"download/index.html",revision:"741d48121aa16f63787f72fa500866ed"},{url:"encrypt/index.html",revision:"e70704ad26e1202ce17d2206fa9d0515"},{url:"guide/index.html",revision:"0b3c6cc094403b4f0aa6c18f77a77259"},{url:"guide/Library-Reference-Statistics/index.html",revision:"6c7b4fa42940da0f59a6874c7bb3bc75"},{url:"guide/Marked-Popular-Library/index.html",revision:"f07cac869ee626ca3c60c32c2519ed6f"},{url:"guide/Mind-Mapping/index.html",revision:"8849c9b6c77b41a841a4dbbc25f1fde6"},{url:"guide/Package-Features-Analysis/index.html",revision:"4e4a263320efb99472097c04ffb9d13f"},{url:"guide/PRIVACY/index.html",revision:"b4adcf48af7a493fce64ca96a3227e5f"},{url:"guide/Snapshot-Usage/index.html",revision:"a30f32323cd9d042b3db698a6a0244f4"},{url:"guide/TERMS/index.html",revision:"829cbfca73dfce36a330dfb5616bf7f8"},{url:"guide/What-is-Native-Library-Architecture/index.html",revision:"f4b1b934b41958b5fb16c740822336bf"},{url:"guide/What-is-Registered-Component/index.html",revision:"65fc69d0fa5dfb55853cc67ad4e09f2c"},{url:"index.html",revision:"32e921b0dd1b1ca539db2540903cafe6"},{url:"slide/index.html",revision:"d8030032487e4eb5a7976f29979b1f27"},{url:"star/index.html",revision:"26bcb626c4b4d250ce601e9ef8541902"},{url:"tag/index.html",revision:"662b0286edc2788798a749c0560494e0"},{url:"timeline/index.html",revision:"6c7268d210c5d8301ea0d5849881a5b4"}],{}),e.cleanupOutdatedCaches()}));
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
