(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{494:function(v,_,l){"use strict";l.r(_);var i=l(1),t=Object(i.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h1",{attrs:{id:"更新日志"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#更新日志"}},[v._v("#")]),v._v(" 更新日志")]),v._v(" "),l("p",[v._v("2.2.9")]),v._v(" "),l("ul",[l("li",[v._v("修复在不支持 Activity 嵌入的设备上启动崩溃的问题")]),v._v(" "),l("li",[v._v("适配 Android 13 特性")]),v._v(" "),l("li",[v._v("替换应用列表 Shortcut 为图表")]),v._v(" "),l("li",[v._v("在快照页面显示当前应用数量")])]),v._v(" "),l("p",[v._v("2.2.7")]),v._v(" "),l("ul",[l("li",[v._v("对于相关链接是 GitHub 仓库的规则库，现在可以显示仓库的最近更新时间（注意：GitHub API 有访问频率限制，一小时内不可超过 60 次）")]),v._v(" "),l("li",[v._v("在应用详情页显示组件的多进程信息，并可通过点击根据进程进行过滤")]),v._v(" "),l("li",[v._v("支持了在应用详情页中通过 质感文件（me.zhanghai.android.files）导航至应用源目录")]),v._v(" "),l("li",[v._v("在图表的 Target SDK 和 Min SDK 弹窗中显示 Android 的版本信息")]),v._v(" "),l("li",[v._v("由于 Gitee 锁定了镜像仓库，我们移除了云端规则的 Gitee 选项")]),v._v(" "),l("li",[v._v("规则库更新至版本 24")]),v._v(" "),l("li",[v._v("修复了一些问题")])]),v._v(" "),l("p",[v._v("2.2.6")]),v._v(" "),l("ul",[l("li",[v._v("修复一些问题")])]),v._v(" "),l("p",[v._v("2.2.5")]),v._v(" "),l("ul",[l("li",[v._v("使应用详情页和 APK 分析页的功能更加统一")]),v._v(" "),l("li",[v._v("现在支持检测是否使用了 Jetpack Compose")]),v._v(" "),l("li",[v._v("增加了一种检测 Kotlin 插件版本的方法")]),v._v(" "),l("li",[v._v("现在对于元数据，如果其值可能是一个 Android 资源 ID，它可以被转化为原始值")]),v._v(" "),l("li",[v._v("修复了被禁用的应用无法查看 Splits APK")]),v._v(" "),l("li",[v._v("优化了应用列表的刷新逻辑")]),v._v(" "),l("li",[v._v("更新了依赖")])]),v._v(" "),l("p",[v._v("2.2.4")]),v._v(" "),l("ul",[l("li",[v._v("在 Tiramisu 上支持了带主题的应用图标")]),v._v(" "),l("li",[v._v("启用了对话框样式的新增应用和已删除应用详情页面")]),v._v(" "),l("li",[v._v("在 Android 12 以上启用了对话框下层模糊效果")]),v._v(" "),l("li",[v._v("优化了图表的样式")]),v._v(" "),l("li",[v._v("在图表中增加了对 minSdkVersion 版本的统计")]),v._v(" "),l("li",[v._v("现在支持通过 URL Scheme 保存快照")]),v._v(" "),l("li",[v._v("现在支持按「包」和「共享的 UID」进行统计")]),v._v(" "),l("li",[v._v("更新了依赖")]),v._v(" "),l("li",[v._v("修复了一些错误")])]),v._v(" "),l("p",[v._v("2.2.3")]),v._v(" "),l("ul",[l("li",[v._v("现在在应用列表页面会标识出被禁用的应用")]),v._v(" "),l("li",[v._v("更新依赖")]),v._v(" "),l("li",[v._v("优化实现")])]),v._v(" "),l("p",[v._v("2.2.2")]),v._v(" "),l("ul",[l("li",[v._v("更新依赖")]),v._v(" "),l("li",[v._v("修复了一些问题")]),v._v(" "),l("li",[v._v("现在标记库以 SDK 的方式提供。这意味着您可以轻松地将 LibChecker 中的规则库集成至您的应用。（详情参见：https://github.com/zhaobozhen/LibChecker-Rules-Bundle）")])]),v._v(" "),l("p",[v._v("2.2.1")]),v._v(" "),l("ul",[l("li",[v._v("支持了在详情页长按应用图标将其复制到剪贴板")]),v._v(" "),l("li",[v._v("在 Android 12 以上的 Material 3 主题（Alpha）中启用动态颜色")]),v._v(" "),l("li",[v._v("支持在详情页中搜索过滤组件")]),v._v(" "),l("li",[v._v("更新俄语翻译")]),v._v(" "),l("li",[v._v("修复了一些问题")])]),v._v(" "),l("p",[v._v("2.2.0")]),v._v(" "),l("ul",[l("li",[v._v("快照支持了记录应用包的体积")]),v._v(" "),l("li",[v._v("现在如果应用包的体积发生变化则会触发快照对比")]),v._v(" "),l("li",[v._v("统计页面支持了权限和元数据，并且加快了进入二级页面的加载速度")]),v._v(" "),l("li",[v._v("现在快照的详情页面支持生成文字报告")]),v._v(" "),l("li",[v._v("在应用的详情页增加了关于 "),l("code",[v._v("android:extractNativeLibs")]),v._v(" 的提示项")]),v._v(" "),l("li",[v._v("修复了一些问题")])]),v._v(" "),l("p",[v._v("2.1.14")]),v._v(" "),l("ul",[l("li",[v._v("支持了 Android 12 SplashScreen API")]),v._v(" "),l("li",[v._v("缩短了初始化时间")]),v._v(" "),l("li",[v._v("调整了详情页布局")])]),v._v(" "),l("p",[v._v("2.1.13")]),v._v(" "),l("ul",[l("li",[v._v("支持了 Android 12L 的 Activity Embeding API")]),v._v(" "),l("li",[v._v("支持了通过分享的方式进行 apk 分析")]),v._v(" "),l("li",[v._v("修复了八哥")])]),v._v(" "),l("p",[v._v("2.1.12")]),v._v(" "),l("ul",[l("li",[v._v("升级规则库至版本 18")]),v._v(" "),l("li",[v._v("修复了一些问题")])]),v._v(" "),l("p",[v._v("2.1.11")]),v._v(" "),l("ul",[l("li",[v._v("现在快照可以记录元数据的变化了（在该版本前生成的快照不会记录元数据，因此对比会出现全部新增的问题）")]),v._v(" "),l("li",[v._v("优化性能和修复 bugs")])]),v._v(" "),l("p",[v._v("2.1.10")]),v._v(" "),l("ul",[l("li",[v._v("修复 ABI 检测方法")]),v._v(" "),l("li",[v._v("修复追踪的 app 不能在快照页面被移除")]),v._v(" "),l("li",[v._v("新增了一些库规则和图标")])]),v._v(" "),l("p",[v._v("2.1.9")]),v._v(" "),l("ul",[l("li",[v._v("修复 bugs")])]),v._v(" "),l("p",[v._v("2.1.8")]),v._v(" "),l("ul",[l("li",[v._v("在应用详情页可以查看应用的权限和元数据信息")]),v._v(" "),l("li",[v._v("修复 bugs")]),v._v(" "),l("li",[v._v("修改了检测 ABI 的方式，该版本会强制重载应用列表")])]),v._v(" "),l("p",[v._v("2.1.7")]),v._v(" "),l("ul",[l("li",[v._v("修复 bug")])]),v._v(" "),l("p",[v._v("2.1.6")]),v._v(" "),l("ul",[l("li",[v._v("一个版本的迭代固然重要，但也要考虑历史的进程。在修复旧霸鸽的同时，往往也会带入新的霸鸽（")])]),v._v(" "),l("p",[v._v("2.1.5")]),v._v(" "),l("ul",[l("li",[v._v("修复问题")])]),v._v(" "),l("p",[v._v("2.1.4")]),v._v(" "),l("ul",[l("li",[v._v("支持显示 Overlay 应用的 target package")])]),v._v(" "),l("p",[v._v("2.1.3")]),v._v(" "),l("ul",[l("li",[v._v("小小修补")])]),v._v(" "),l("p",[v._v("2.1.2")]),v._v(" "),l("ul",[l("li",[v._v("修复了一些问题")])]),v._v(" "),l("p",[v._v("2.1.1")]),v._v(" "),l("ul",[l("li",[v._v("修复了带有静态库的详情页错乱问题")]),v._v(" "),l("li",[v._v("修复了详情页导航栏问题")]),v._v(" "),l("li",[v._v("修复了一处内存泄漏")]),v._v(" "),l("li",[v._v("修复深色模式开关无效")])]),v._v(" "),l("p",[v._v("2.1.0")]),v._v(" "),l("ul",[l("li",[v._v("现在无原生库的标签展示 CPU 的 ABI")]),v._v(" "),l("li",[v._v("修复了 APK 分析有时看不到组件的问题")]),v._v(" "),l("li",[v._v("删除了快照 FAB，现在它在 Toolbar 的位置")]),v._v(" "),l("li",[v._v("图表页面移至二级页面")]),v._v(" "),l("li",[v._v("规则库现在使用 db 文件分发")]),v._v(" "),l("li",[v._v("详情页现在展示应用的 sharedUserId")]),v._v(" "),l("li",[v._v("详情页现在展示应用的全部 ABIs")]),v._v(" "),l("li",[v._v("时间节点选择和管理 Dialog 现在会展示每张快照中最新的 5 个应用")]),v._v(" "),l("li",[v._v("现在获取应用列表会尝试绕过一些 ROM 发明的限制读取应用列表权限")]),v._v(" "),l("li",[v._v("更换了新的 Kotlin logo")]),v._v(" "),l("li",[v._v("设置中可以切换深色模式")]),v._v(" "),l("li",[v._v("支持识别 hap 应用以及查看其 Abilities")])]),v._v(" "),l("p",[v._v("2.0.0")]),v._v(" "),l("ul",[l("li",[l("strong",[v._v("重要")]),v._v(" 现在只支持 Android 6.0 以上的设备")]),v._v(" "),l("li",[l("strong",[v._v("重要")]),v._v(" 由于支持了一些新的情况和调整了一些错误的方法，2.0 之前的快照内容都没有参考价值，建议更新后直接保存新的快照")]),v._v(" "),l("li",[v._v("现在支持从云端仓库更新标记库")]),v._v(" "),l("li",[v._v("现在启动一个前台服务来保存快照，保存快照时可以切换到后台了")]),v._v(" "),l("li",[v._v("【集成】对于四大组件，现在可以长按与“大圣净化”交互（需要大圣净化 v3.8.47 以上）")]),v._v(" "),l("li",[v._v("【集成】对于 Activity，现在可以长按与“Anywhere- 编辑器”交互（需要 Anywhere- 2.2.0 以上）")]),v._v(" "),l("li",[v._v("支持了 disabled 组件，请尽量避免依赖 2.0 之前的快照，因为之前并没有记录 disabled 组件")]),v._v(" "),l("li",[v._v("支持了 assets 中的原生库")]),v._v(" "),l("li",[v._v("支持了 MultiArch")]),v._v(" "),l("li",[v._v("图表支持了统计应用的 Target API 等级")]),v._v(" "),l("li",[v._v("支持了搜索字段高亮")]),v._v(" "),l("li",[v._v("修复了大量的错误和不合适的方法")])]),v._v(" "),l("p",[v._v("1.10.0")]),v._v(" "),l("ul",[l("li",[v._v("支持了 Dex 类检测（过滤了一些无意义的类）并加入了大量的 Dex 类标记库")]),v._v(" "),l("li",[v._v("详情页点击应用图标可以进一步操作")]),v._v(" "),l("li",[v._v("支持了 x86、x86_64 的架构检测")]),v._v(" "),l("li",[v._v("快照 - 仪表盘 增加了 追踪 功能，可以在每次开启快照时强制对比变更")]),v._v(" "),l("li",[v._v("优化和消灭臭虫")])]),v._v(" "),l("p",[v._v("1.9.0")]),v._v(" "),l("ul",[l("li",[v._v("现在快照页面顶端的仪表盘可以交互了，点击时间戳可以切换，点击仪表盘可以进入“相簿”进行更多的操作")]),v._v(" "),l("li",[v._v("支持保存多个快照")]),v._v(" "),l("li",[v._v("支持对比任意两张快照")]),v._v(" "),l("li",[v._v("支持备份和恢复快照")]),v._v(" "),l("li",[v._v("现在详情页会展示各个组件的数量")]),v._v(" "),l("li",[v._v("现在快照页面会展示各个组件的变更数量")]),v._v(" "),l("li",[v._v("一些优化")])]),v._v(" "),l("p",[v._v("1.8.0")]),v._v(" "),l("p",[v._v("愉快的周末")]),v._v(" "),l("ul",[l("li",[v._v("现在快照可以记录权限的变化了")]),v._v(" "),l("li",[v._v("增加了 重载应用列表 设置项")]),v._v(" "),l("li",[v._v("由于自动刷新列表机制常常不好好工作，我们开发了极为先进的 手动刷新 功能")])]),v._v(" "),l("p",[v._v("1.7.6")]),v._v(" "),l("ul",[l("li",[v._v("使用 Kotlin 1.4 编译")]),v._v(" "),l("li",[v._v("重写了获取应用列表的逻辑，现在更加的稳定了")]),v._v(" "),l("li",[v._v("优化了一些布局(横屏瀑布流、滑动隐藏底栏等)")])]),v._v(" "),l("p",[v._v("1.7.5")]),v._v(" "),l("ul",[l("li",[v._v("优化了每一处列表的布局渲染性能")]),v._v(" "),l("li",[v._v("修正了原生库架构的名称，现在使用标准名称")]),v._v(" "),l("li",[v._v("增加了一些标记库")])]),v._v(" "),l("p",[v._v("1.7.4")]),v._v(" "),l("ul",[l("li",[v._v("修复 应用列表查询不到冻结应用的问题")]),v._v(" "),l("li",[v._v("修复 快照详情页闪退问题")]),v._v(" "),l("li",[v._v("优化 内存泄漏问题")])]),v._v(" "),l("p",[v._v("1.7.3")]),v._v(" "),l("ul",[l("li",[v._v("现在快照详情页可以显示知名标记库")]),v._v(" "),l("li",[v._v("修复 库引用统计有时为空的问题")])]),v._v(" "),l("p",[v._v("1.7.2")]),v._v(" "),l("ul",[l("li",[v._v("优化了一些体验")])]),v._v(" "),l("p",[v._v("1.7.1")]),v._v(" "),l("ul",[l("li",[v._v("暂时删除加载进度条来修复闪退问题")])]),v._v(" "),l("p",[v._v("1.7.0\n** 如果闪退请先尝试清除数据 **")]),v._v(" "),l("ul",[l("li",[v._v("增加了 Shortcuts")]),v._v(" "),l("li",[v._v("详情页长按包名可快速复制")]),v._v(" "),l("li",[v._v("现在详情页可以响应 android.intent.action.SHOW_APP_DETAIL")]),v._v(" "),l("li",[v._v("增加了读取进度条")]),v._v(" "),l("li",[v._v("优化了一些实现")])]),v._v(" "),l("p",[v._v("1.6.1")]),v._v(" "),l("ul",[l("li",[v._v("修复 Android L 上的严重闪退问题")])]),v._v(" "),l("p",[v._v("1.6.0")]),v._v(" "),l("ul",[l("li",[v._v("优化了快照详情页的显示效果，现在可以分类折叠，亦增加了标识来区分变更")]),v._v(" "),l("li",[v._v("快照增加了 “移动” 变更类型")])]),v._v(" "),l("p",[v._v("1.5.7")]),v._v(" "),l("ul",[l("li",[v._v("修复了 Android 10 上频发的闪退问题")]),v._v(" "),l("li",[v._v("优化了一些交互")]),v._v(" "),l("li",[v._v("增加了几个标记库")])])])}),[],!1,null,null,null);_.default=t.exports}}]);