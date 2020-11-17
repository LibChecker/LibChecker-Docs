(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{527:function(v,a,t){"use strict";t.r(a);var _=t(3),r=Object(_.a)({},(function(){var v=this,a=v.$createElement,t=v._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"什么是原生库架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是原生库架构"}},[v._v("#")]),v._v(" 什么是原生库架构？")]),v._v(" "),t("p",[v._v("大家常说的 32 位  / 64 位 App 到底是什么意思？首先我们先了解几个概念：")]),v._v(" "),t("h2",{attrs:{id:"android-中-abi-的概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#android-中-abi-的概念"}},[v._v("#")]),v._v(" Android 中 ABI 的概念")]),v._v(" "),t("p",[v._v("ABI，即 "),t("strong",[v._v("Application Binary Interface(应用程序二进制接口)")]),v._v("，其定义了一套规则，允许编译好的二进制目标代码能在所有兼容该 ABI 的操作系统中无需改动就能运行。")]),v._v(" "),t("p",[v._v("不同的 Android 设备使用不同的 CPU，而不同的 CPU 支持不同的指令集。CPU 与指令集的每种组合都有专属的应用二进制接口 (ABI)，因此需要提供对应的二进制接口交互规则(即对应的 ABI 文件)才能进行交互。部分 CPU 能够支持多种交互规则，但这是在牺牲性能的前提下所做的兼容。")]),v._v(" "),t("p",[v._v("主流的ABI架构：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("armeabi-v7a:")]),v._v(" 第 7 代及以上的 ARM 处理器。2011 年以后生产的大部分 Android 设备都使用此架构")]),v._v(" "),t("li",[t("strong",[v._v("arm64-v8a:")]),v._v(" 第 8 代、64 位 ARM 处理器，近些年生产的 Android 设备通常是此架构")]),v._v(" "),t("li",[t("strong",[v._v("armeabi:")]),v._v(" 第 5 代、第 6 代的 ARM 处理器，早期的手机一般是此架构")]),v._v(" "),t("li",[t("strong",[v._v("x86:")]),v._v(" 平板、模拟器一般是此架构")]),v._v(" "),t("li",[t("strong",[v._v("x86_64:")]),v._v(" 64 位的平板或模拟器使用此架构")])]),v._v(" "),t("h2",{attrs:{id:"abi-和-cpu-的关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#abi-和-cpu-的关系"}},[v._v("#")]),v._v(" ABI 和 CPU 的关系")]),v._v(" "),t("p",[v._v("当一个 App 被安装在设备上时，只有该设备支持的 CPU 架构对应的 .so 文件会被拷贝到设备中。如果支持多个 ABI 架构，会按照优先级进行拷贝。")]),v._v(" "),t("p",[v._v("CPU 与 ABI 的对照关系如下：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("CPU")]),v._v(" "),t("th",[v._v("ABI")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("ARMv5")]),v._v(" "),t("td",[v._v("armeabi")])]),v._v(" "),t("tr",[t("td",[v._v("ARMv7")]),v._v(" "),t("td",[v._v("armeabi, armeabi-v7a")])]),v._v(" "),t("tr",[t("td",[v._v("ARMv8")]),v._v(" "),t("td",[v._v("armeabi, armeabi-v7a, arm64-v8a")])]),v._v(" "),t("tr",[t("td",[v._v("MIPS")]),v._v(" "),t("td",[v._v("mips")])]),v._v(" "),t("tr",[t("td",[v._v("MIPS64")]),v._v(" "),t("td",[v._v("mips, mips64")])]),v._v(" "),t("tr",[t("td",[v._v("x86")]),v._v(" "),t("td",[v._v("x86, armeabi, armeabi-v7a")])]),v._v(" "),t("tr",[t("td",[v._v("x86_64")]),v._v(" "),t("td",[v._v("armeabi, x86, x86_64,")])])])]),v._v(" "),t("p",[v._v("可以看出 CPU 大都是向前兼容的，但是选择 ABI 时会按照优先级。例如 ARMv8 型的 CPU，优先选择 arm64-v8a 目录下的 .so 文件。如果存在，就不会再安装其他支持的 ABI 架构的 .so 文件；如果没有 arm64-v8a 目录，才会选择 armeabi-v7a 目录下的 .so 文件，最后才会选择 armeabi 目录下的 .so 文件。")]),v._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),t("p",[v._v("ARMv8 设备虽然能够运行 armeabi 或 armeabi-v7a 下的 so 库，但可能会造成性能损失。即我们经常说的 “64 位手机运行 32 位应用”。")])]),v._v(" "),t("h2",{attrs:{id:"为什么存在-无原生库-这一状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么存在-无原生库-这一状态"}},[v._v("#")]),v._v(" 为什么存在“无原生库”这一状态？")]),v._v(" "),t("p",[v._v("首先需要明确一点，我们查看一款 App 是 32 位或 64 位，实际上关心的是它引入的 so 库是 32 位还是 64 位。使用以 Java 编程语言或 Kotlin 编写的代码（包括任何库或 SDK），它们运行在 Java 虚拟机（JVM）之上，无需考虑架构因素。而编写原生代码（C/C++）则需要根据不同的架构编译成相应的 so 文件。因此，如果一款 App 没有引入 so 库（即没有使用原生代码编写应用），则讨论它是 32 位还是 64 位是无意义的。")]),v._v(" "),t("h2",{attrs:{id:"为什么国内厂商对于升级-64-位不够积极"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么国内厂商对于升级-64-位不够积极"}},[v._v("#")]),v._v(" 为什么国内厂商对于升级 64 位不够积极？")]),v._v(" "),t("p",[v._v("我认为有以下几点原因：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("升级 64 位对性能提升不大：")]),v._v(" 许多 App 使用原生代码只是进行了比较简单的操作，例如反破解逻辑、简单的数学运算等")]),v._v(" "),t("li",[t("strong",[v._v("64 位 so 文件较大：")]),v._v(" 通常 64 位的 so 文件会比 32 位的大一些，而且目前只有 Google Play 支持 aab 格式的安装包分发（即 Split APKs），而在全球的软件市场中，App 的体积都是与下载量呈负相关的")]),v._v(" "),t("li",[t("strong",[v._v("上游 SDK 未提供 64 位版本：")]),v._v(" 由于 APK 中每种架构都必须提供全部的 so 库，因此 App 中只要有一个 SDK 没有提供 64 位版本，则其他 so 都无法替换为 64 位版本")])])])}),[],!1,null,null,null);a.default=r.exports}}]);