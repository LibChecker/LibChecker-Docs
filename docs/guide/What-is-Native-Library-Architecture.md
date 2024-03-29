# 什么是原生库架构？

大家常说的 32 位  / 64 位 App 到底是什么意思？首先我们先了解几个概念：

## Android 中 ABI 的概念

ABI，即 **Application Binary Interface(应用程序二进制接口)**，其定义了一套规则，允许编译好的二进制目标代码能在所有兼容该 ABI 的操作系统中无需改动就能运行。

不同的 Android 设备使用不同的 CPU，而不同的 CPU 支持不同的指令集。CPU 与指令集的每种组合都有专属的应用二进制接口 (ABI)，因此需要提供对应的二进制接口交互规则(即对应的 ABI 文件)才能进行交互。部分 CPU 能够支持多种交互规则，但这是在牺牲性能的前提下所做的兼容。

主流的ABI架构：

- **armeabi-v7a:** 第 7 代及以上的 ARM 处理器。2011 年以后生产的大部分 Android 设备都使用此架构
- **arm64-v8a:** 第 8 代、64 位 ARM 处理器，近些年生产的 Android 设备通常是此架构
- **armeabi:** 第 5 代、第 6 代的 ARM 处理器，早期的手机一般是此架构
- **x86:** 平板、模拟器一般是此架构
- **x86_64:** 64 位的平板或模拟器使用此架构

## ABI 和 CPU 的关系

当一个 App 被安装在设备上时，只有该设备支持的 CPU 架构对应的 .so 文件会被拷贝到设备中。如果支持多个 ABI 架构，会按照优先级进行拷贝。

CPU 与 ABI 的对照关系如下：

| CPU    | ABI                             |
| ------ | ------------------------------- |
| ARMv5  | armeabi                         |
| ARMv7  | armeabi, armeabi-v7a            |
| ARMv8  | armeabi, armeabi-v7a, arm64-v8a |
| ARMv9  | arm64-v8a, arm64-v9a            |
| MIPS   | mips                            |
| MIPS64 | mips, mips64                    |
| x86    | x86                             |
| x86_64 | x86, x86_64,                    |

可以看出 CPU 大都是向前兼容的，但是选择 ABI 时会按照优先级。例如 ARMv8 型的 CPU，优先选择 arm64-v8a 目录下的 .so 文件。如果存在，就不会再安装其他支持的 ABI 架构的 .so 文件；如果没有 arm64-v8a 目录，才会选择 armeabi-v7a 目录下的 .so 文件，最后才会选择 armeabi 目录下的 .so 文件。

::: warning 注意
 ARMv8 设备虽然能够运行 armeabi 或 armeabi-v7a 下的 so 库，但可能会造成性能损失。即我们经常说的 “64 位手机运行 32 位应用”。
:::

## 为什么存在“无原生库”这一状态？

首先需要明确一点，我们查看一款 App 是 32 位或 64 位，实际上关心的是它引入的 so 库是 32 位还是 64 位。使用以 Java 编程语言或 Kotlin 编写的代码（包括任何库或 SDK），它们运行在安卓运行时（ART）之上，无需考虑架构因素。而编写原生代码（C/C++）则需要根据不同的架构编译成相应的 so 文件。因此，如果一款 App 没有引入 so 库（即没有使用原生代码编写应用），则讨论它是 32 位还是 64 位是无意义的。

## 为什么国内厂商对于升级 64 位不够积极？

我认为有以下几点原因：
-
- **64 位 so 文件较大：** 通常 64 位的 so 文件会比 32 位的大一些，而且目前只有 Google Play 和 AppGallery Connect 支持 aab 格式的安装包分发（即 App Bundles），而在全球的软件市场中，App 的体积都是与下载量呈负相关的
- **上游 SDK 未提供 64 位版本：** 由于 APK 中每种架构都必须提供全部的 so 库，因此 App 中只要有一个 SDK 没有提供 64 位版本，则其他 so 都无法替换为 64 位版本
