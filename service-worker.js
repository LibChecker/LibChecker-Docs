if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-3774b91f"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.d3ec25cf.css",revision:"79514d7877650c98c09e34cb8252b423"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/23.b9ee39e3.js",revision:"bfdcf38bc6edcb2a04160febd7bc255a"},{url:"assets/js/24.fd139585.js",revision:"116f8ec95569f9b9e3e7d6271e3236bd"},{url:"assets/js/25.c780b946.js",revision:"6f0b598cb18e5e1bd29e7468ac9a33f9"},{url:"assets/js/26.5a88a677.js",revision:"caa0fd9bc5daf80b2261fac919a544a6"},{url:"assets/js/27.40281fc7.js",revision:"31c02c8abcee3f46af6989b08730cd7d"},{url:"assets/js/app.33fa0b43.js",revision:"10ac2fed2d92055e5587397456c21f65"},{url:"assets/js/layout-Blog.1f457c10.js",revision:"50db96efd1686be0896e98f6c18efd39"},{url:"assets/js/layout-Layout.e0b35aed.js",revision:"be952458b6c01d58a97e80c9512f4f16"},{url:"assets/js/layout-NotFound.79ac0444.js",revision:"52bb46eaf4266b09bc7f89fcf9a15965"},{url:"assets/js/layout-Slide.476a7c80.js",revision:"a19bbc6ad0894f6a1f52722e13910a1d"},{url:"assets/js/page-Download.9fa913f0.js",revision:"743f8db8a0eace63b0d380df1d45085b"},{url:"assets/js/page-Home.fb62636d.js",revision:"fbc39df15bd509849eb35e2652db8a56"},{url:"assets/js/page-什么是原生库架构？.5402d252.js",revision:"f5eba3a924f0796ad71facef2f66f28e"},{url:"assets/js/page-什么是注册组件？.bb990644.js",revision:"97ae91fc1dd6aac57537cca0444ede7b"},{url:"assets/js/page-包特性分析.7ed9c541.js",revision:"05e1c7adb41075088b0f02cb277b8c7d"},{url:"assets/js/page-库引用统计.f634bf53.js",revision:"c5037409459ce0cc87bf893e21986595"},{url:"assets/js/page-快照.7e80c67c.js",revision:"942f579b26b71f3e4421a7405d0b49ec"},{url:"assets/js/page-思维导图.ede93602.js",revision:"343e8963019609fa4fd0239ab5f2fdd7"},{url:"assets/js/page-更新日志.af829073.js",revision:"66f141666d9b2412f52980d8c702fa42"},{url:"assets/js/page-概要.a1383e68.js",revision:"2a65649abd3ed0fdacbb0287d22bd25f"},{url:"assets/js/page-知名库标记.3bb02749.js",revision:"4617239955f462391b7feee3d747ad31"},{url:"assets/js/vendors~flowchart.c7b2db6c.js",revision:"b348b307cfaf43d9e895ca3cac6c6e02"},{url:"assets/js/vendors~layout-Blog~layout-Layout.a398adec.js",revision:"c6413e36b57a7ca75ee1c13844b94d16"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.378f43a0.js",revision:"00d10f536acab77cb9fb8c853624590d"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.26c42d77.js",revision:"1e1c96f0970271a63006910c00ab692a"},{url:"assets/js/vendors~photo-swipe.3f3eec5a.js",revision:"11e6c85592f59e1f6c6b3726e69730a1"},{url:"assets/js/vendors~reveal.390cfcd4.js",revision:"34e4d2e81b6adc5a07a7eec5915e61c4"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"05a36ae583cd6847a4e7b1fd2880c8e0"},{url:"article/index.html",revision:"b05decbd4097354911a3a98a2b07b7f9"},{url:"category/index.html",revision:"563ca19f1c1c46accbd8bce84d55afa2"},{url:"changelog/index.html",revision:"b828be39267c2eaa5943c6eb0617e544"},{url:"download/index.html",revision:"e9d9512035360338e7e615213e1a8b49"},{url:"encrypt/index.html",revision:"b9a0a782e9540db3fdd8ee26a4a80290"},{url:"guide/index.html",revision:"f8a775738ae6716efa52330436b6241d"},{url:"guide/Library-Reference-Statistics/index.html",revision:"2079372ed0a4407e2985c126daf7cbc5"},{url:"guide/Marked-Popular-Library/index.html",revision:"8d2aa3912a700b2c34aa48d547edbe8b"},{url:"guide/Mind-Mapping/index.html",revision:"d89d14f5ea64f2b00f06ebecc3ffafda"},{url:"guide/Package-Features-Analysis/index.html",revision:"e865c5e796de63a00094478ebb8b4112"},{url:"guide/Snapshot-Usage/index.html",revision:"a378bd27480bd13b90f8f0900a74b3d0"},{url:"guide/What-is-Native-Library-Architecture/index.html",revision:"d8bcc2f62d2e36a21b1b52afd5c31e5c"},{url:"guide/What-is-Registered-Component/index.html",revision:"c82ae78bd17d9b69833b060ffd66f2b4"},{url:"index.html",revision:"fcefa6aef82cd987f631402210c70e59"},{url:"slide/index.html",revision:"d85d41e12279b270eb468cbdf057996e"},{url:"tag/index.html",revision:"46e58997ab45b7fae242e647f631a25e"},{url:"timeline/index.html",revision:"86532014229913e9ef78aef9ea612c47"}],{}),e.cleanupOutdatedCaches()}));
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
