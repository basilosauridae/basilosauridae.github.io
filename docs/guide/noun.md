---
title: 开发文档中的英文
date: 2023/10/05
tags:
  - 日常
categories:
  - 总结
---

### polyfill

polyfill(polyfiller)，指的是一个代码块。这个代码块向开发者提供了一种技术， 这种技术可以让浏览器提供原生支持，抹平不同浏览器对API兼容性的差异。

"Polyfilla（美国的一种抹墙粉）是一种糨糊(原文为paste)，可以被抹到墙上来覆盖墙上的裂缝和窟窿。polyfill一词就像是把糨糊抹到浏览器的窟窿里一样，polyfill给我一种可视化修复浏览器的感觉，我非常喜欢。一旦墙变平整了，便可以随心所欲地喷漆或者绘画。正如浏览器的bug都修复了，可以随心所欲地编写代码一样。"——《介绍HTML5》

"A shim that mimics a future API providing fallback functionality to older browsers.
模拟未来api的垫片,为旧版本的浏览器提供了应变计划." ——[Paul](https://www.paulirish.com/)

### SOP

standard operating procedure，标准作业程序，将某一件事的标准操作步骤和要求以统一的格式描述出来，用于指导和规范日常的工作。SOP 就是对某一程序的关键控制点进行细化和量化。

- [本博客相关链接](/blogs/category1/2024/0417.html)：前端工程化 = 前端 + 软件工程（打包构建），将工程方法论（SOP）应用到前端开发整个流程。

### WeakMap

弱引用map,一般在存储对象作为key时使用，与垃圾回收和新能处理关联大。Vue3中源码：`const targetMap = new WeakMap<any, KeyToDepMap>() `

- 问题：weakMap什么时候被清除

### antlr

关于编译器的规范化和统一口径：[antlr](https://www.antlr.org/),计算机领域中编译前沿工具，不属于前端范畴， 可以查到AST树的遍历方式。

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
