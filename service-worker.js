if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-3592f1eb"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.b9278feb.css",revision:"7ec7dc41d0768730ebd9308fb96652f1"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/23.d75a134b.js",revision:"1822cade89389fb46a428ee194c7a7dd"},{url:"assets/js/24.3d292adc.js",revision:"de2813fb38907dfa5a3dd195e27e84ba"},{url:"assets/js/25.9ead9752.js",revision:"5c15e50a48704b11b69d05569edead6e"},{url:"assets/js/26.73414ca3.js",revision:"fa492b31d06d926e4bcf672c1e1545cd"},{url:"assets/js/27.958a76e0.js",revision:"52613d71c1d84f25eb34a8293b09bc0e"},{url:"assets/js/app.8262c2df.js",revision:"b0940acdf5455f924dfeeb918ce235bd"},{url:"assets/js/layout-Blog.32ab360a.js",revision:"598848c5a88a34c0f73c7bb8447e841a"},{url:"assets/js/layout-Layout.5a3fe295.js",revision:"01c3b892571acffb337207dcdcb99a21"},{url:"assets/js/layout-NotFound.6043b9da.js",revision:"b02dcd60a21250603d1e2a5891621a31"},{url:"assets/js/layout-Slide.2487ceb1.js",revision:"5274d8d645aed8468336d043bb9fd0ad"},{url:"assets/js/page-Download.808b68a3.js",revision:"121e15087a5a74fcdf0c20fc3ce4b30f"},{url:"assets/js/page-Home.785420fd.js",revision:"9a1bca76bbc14510fe922e008785bfdf"},{url:"assets/js/page-什么是原生库架构？.5edcac86.js",revision:"bff99211f18898047739bd2b0083208e"},{url:"assets/js/page-什么是注册组件？.189caa47.js",revision:"b4bf3e563d790ab6d301945f869378c0"},{url:"assets/js/page-包特性分析.22348026.js",revision:"92a84fa59c576125224ecc221c94d27d"},{url:"assets/js/page-库引用统计.8c281c91.js",revision:"8b8e430a0971340dd24aa13cb429b170"},{url:"assets/js/page-快照.87369da7.js",revision:"5c7abb82bd940c01698baeef50cf984a"},{url:"assets/js/page-思维导图.cfcc4a03.js",revision:"31055452768fed9525dd64bbb934c190"},{url:"assets/js/page-更新日志.7875b60c.js",revision:"fc6f3ba5a7142a91475f67a561d113a2"},{url:"assets/js/page-概要.91a87c22.js",revision:"7209b2d7d53641d575ce8817cab7c79c"},{url:"assets/js/page-知名库标记.8ced74ea.js",revision:"e4f60968625c9f94b8aaddaf87c01119"},{url:"assets/js/vendors~flowchart.d10f4b1c.js",revision:"231d4b854c011626f103cdd8360533b9"},{url:"assets/js/vendors~layout-Blog~layout-Layout.ca85d849.js",revision:"09bff6cfee5d28c03a08737b31c9960f"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.d6eb5f68.js",revision:"f7306729f42af3a759ec301b4c69f683"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.ee15bb3f.js",revision:"bec4201d547657741b139733471ed310"},{url:"assets/js/vendors~photo-swipe.fcbe2da8.js",revision:"b858c77ff9598787e85afcd280a9591b"},{url:"assets/js/vendors~reveal.4da316c2.js",revision:"2c8cdf4c1160314e2a2e866e99d8a544"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"d08a1db61b113cc287a086b44a342234"},{url:"article/index.html",revision:"cc6e5ea86b42ccf2b97cc7660687a5b5"},{url:"category/index.html",revision:"d53e937a063eb59c858c1bf0038f7964"},{url:"changelog/index.html",revision:"ba15b522082530235ff51d821f8bee4c"},{url:"download/index.html",revision:"2200ca8293d4e09b878a06a67ca07808"},{url:"encrypt/index.html",revision:"9385bd4a6a08ae2c6da9d8bd8fe8e60b"},{url:"guide/index.html",revision:"04f66ca375b8a828ed020b65148b54ed"},{url:"guide/Library-Reference-Statistics/index.html",revision:"7daa9710bdeaefc1f2324c98c6131f09"},{url:"guide/Marked-Popular-Library/index.html",revision:"0328765c86437b7ba8164c15288a3dbd"},{url:"guide/Mind-Mapping/index.html",revision:"b20806a557605f871c4c6ec815a6a8b4"},{url:"guide/Package-Features-Analysis/index.html",revision:"dd64250d2ee82b1a4c47ecd91c4cb40e"},{url:"guide/Snapshot-Usage/index.html",revision:"171a0ee1c915cb51d58a61a45bf0edf2"},{url:"guide/What-is-Native-Library-Architecture/index.html",revision:"776ae827e61d2e1bb34a0d99ead6658e"},{url:"guide/What-is-Registered-Component/index.html",revision:"0a0cf52f93efec97e7e7e643b0cc74bf"},{url:"index.html",revision:"130f76a1cb1ec47c701425e50deb6f8f"},{url:"slide/index.html",revision:"5761d84c747d708ea6c331fc13dd0e86"},{url:"star/index.html",revision:"fbc61dee40638251e3dd9021278ce994"},{url:"tag/index.html",revision:"a29dd297a20b2d9a42a402ff3e1ed80e"},{url:"timeline/index.html",revision:"6ef8938a5a9dd0a1d48415f1bdb54bfa"}],{}),e.cleanupOutdatedCaches()}));
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