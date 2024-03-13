---
title: 开发文档中的英文
date: 2023/10/05
tags:
  - 日常
categories:
  - 总结
---

### SFC

single file component,Vue中的单文件组件，使用`.vue`为扩展名，使用类似HTML语法的自定义文件格式，用于定义 Vue 组件。一个 Vue 单文件组件在语法上是兼容 HTML 的。

:::info 
源码中，Vue2中开发借助webpack构建，通过sfc编写组件；这个目录下的代码逻辑会把.vue文件内容解析成js对象；

Vue3中将使用[Vapor Mode蒸汽模式](https://zhuanlan.zhihu.com/p/658849288)，针对编译过程中做出一些优化。
:::

### EOL

End of Life，项目终止。eg：The latest major version is v15, supporting Node.js 14 and up (as Node.js v12 is EOL).

### LIFO

last in first out，后进先出，数据结构栈中的元素排序方式，可以`想象成一桶可比克薯片，最后放进去包装的都是最先被拿起来吃了`,即新元素都在栈顶，旧元素都在栈底，所有的操作都在栈顶进行。

### stack | heap

- stack 尤指工厂的大烟囱，计算机储存**栈**，竖（和站立-栈同音）着置放的高保真音响等。js中所有函数方法中的变量都储存在- stack中，随着执行方法的结束销毁，存储速度快，缺点大小和生存周期确定缺乏灵活
- heap （凌乱的）一**堆**。是动态分配的内存，储存的是对象，往往不会随着方法执行结束而销毁，可能被另一个引用类型的变量反复使用。

以上也是js中基本变量和复杂变量的区别，即储存地点的不同。