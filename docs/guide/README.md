# 概要

## LibChecker 是什么？

LibChecker 最初是我设计给自己用来查看手机里的应用是否使用了 64 位架构的 App。是的，它功能非常简陋。后来，为了学习大厂优秀软件在开发中使用了哪些技术栈，我引入了 **知名库标记** 功能。将我所知晓的、网上有所记载的知名 SDK 组件标识出来，并且做了 **库引用统计**，方便查看。再后来，我发现一款成熟的、用户基数较大的 App，它的主界面和逻辑是不会发生太大变化的。这就产生了我们经常会看到的景象：一款 App 每次更新都像是刷版本号，主体并无任何变化的感知。但其实它的底层可能有翻天覆地的变化。介于此，我借鉴了 [VCS](https://en.wikipedia.org/wiki/Version_control) 的思想，设计并开发出了 **快照** 功能。从始至终，我都是把 Libchecker 当作一款开发者工具来设计的，因此它对于普通用户来说门槛较高，甚至也许不能带给用户什么价值。但是随着越来越多的开发者和极客用户的使用和反馈建议，LibChecker 也在不断地完善自身……

[![Build status](https://build.appcenter.ms/v0.1/apps/48323741-74c1-4890-a4e8-e0fac9c8dc62/branches/master/badge)](https://appcenter.ms)

## LibChecker 能做什么？

LibChecker 有着一些基础功能：

- 查看 App 使用的原生库架构（无原生库 / 32 位 / 64 位）
- 查看 App 的注册组件（服务 / 活动 / 广播接收器 / 内容提供器）
- 饼状图统计原生库架构分布



LibChecker 还有着一些特色功能：

- 知名库标记，基于在线的规则仓库，实时更新
- 库引用统计，统计手机里使用最多的 SDK
- 包特性分析，查看 App 是否是 [Split APKs](https://developer.android.com/studio/build/configure-apk-splits)、是否使用了 [Kotlin](https://en.wikipedia.org/wiki/Kotlin_(programming_language)) 来编写
- 快照，将当前所有应用的主要信息保存，与未来的某一时刻进行对比

## 基础知识

[什么是原生库架构？](/guide/What-is-Native-Library-Architecture.md)

[什么是注册组件？](/guide/What-is-Registered-Component.md)

## 使用方法

[知名库标记](/guide/Marked-Popular-Library.md)

[库引用统计](/guide/Library-Reference-Statistics.md)

[包特性分析](/guide/Package-Features-Analysis.md)

[快照](/guide/Snapshot-Usage.md)

## 相关信息

**规则仓库：** [LibChecker-Rules](https://github.com/zhaobozhen/LibChecker-Rules)

**联系我：** [absinthe@absinthe.life](mailto:absinthe@absinthe.life)

## LibChecker 将要做什么

- 多快照副本
- 自定义规则仓库
- 快照保存应用权限信息等更多的信息
- ...