---
title: 开发文档中的英文
date: 2023/10/05
tags:
  - 日常
categories:
  - 总结
---
### XSS & CSRF

- XSS(Cross-site Scripting)跨站脚本，CSRF(Cross-site request Forgery)跨站请求伪造；
- XSS利用的是用户对指定网站的信任，CSRF利用的是网站对用户浏览器的信任；
- `Http only属性`是为了防止 XSS 攻击，禁止他人取到你的cookie。经常有不法分子通过 XSS 取到本地cookie，用别人的用户信息做一些违法操作；
- `cookie的 Samesite 属性`为了防止CSRF，如你登录了一个银行网站A，同时登录了钓鱼网站B，B向A调了存钱接口，自动把同域名的 cookie 带过去。如果你不设置`cookie的 Samesite 属性`，就会自动带着你的 cookie 去调取存钱接口，造成很大的安全问题。所以谷歌 85 之后，它会强制默认 Samesite 的严格属性，禁止cookie被第三方调用；

:::info 衍生问题：说一说cookie、session、localStorage的区别

- cookie 一般存放用户属性，存在服务端的 Redis 里，通过响应头写到前端；前端也可以操作 cookie，但会出现很多问题。如产生 **XSS 攻击**，因为前端无法设置 HTTP only 属性；
- session 一般存放在当前页面的，换个窗口就没了，一些临时数据或者用户会话相关的信息，保障用户隐私；
- localStorage 本地，一般 4M 左右。

除此之外，还有 webSQL、indexed DB，大概200 - 400M。

:::
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

### TCP/IP

Transmission Control Protocol/Internet Protocol，传输控制协议/网际协议，指能够在多个不同网络间实现信息传输的协议簇。TCP/IP 不仅指 TCP 和 IP 两个协议，而是指一个由 FTP(文件传输协议)、SMTP（电子邮件传输协议）、TCP、**👻UDP（用户数据报协议）**、IP 等构成的协议簇。TCP 和 IP 比较有代表性简称 [TCP/IP](https://baike.baidu.com/item/TCP/IP%E5%8D%8F%E8%AE%AE/212915)。

>IP是非常底层的协议，只负责把数据包传送到对方电脑，但是对方电脑并不知道把数据包交给哪个程序，是交给浏览器还是交给王者荣耀？因此，需要基于IP之上开发能和应用打交道的协议，最常见的是“用户数据包协议（User Datagram Protocol）”，简称**👻UDP**。

:::info
在衡量Web页面性能的时候有一个重要的指标叫“FP（First Paint）,网络加载速度是影响首屏加载的原因之一。

优化Web页面的加载速度，需要对网络协议有充分的了解。而不管是使用HTTP，还是使用WebSocket，它们都是基于TCP/IP的，如果对这些原理有足够了解，也就清楚如何去优化Web性能，或者能更轻松地定位Web问题了。

- IP负责把数据包送达目的主机。
- UDP负责把数据包送达具体应用。
- 而TCP保证了数据完整地传输，它的连接可分为三个阶段：建立连接、传输数据和断开连接。
其实了解TCP协议，是为了全方位了解HTTP，包括其实际功能和局限性，之后才会更加深刻地理解为什么要推出HTTP/2，以及为什么要推出QUIC协议，也就是未来的HTTP/3。这是一个由浅入深、循序渐进的过程，我希望你能稳扎稳打，学好这每一步、每一个协议，后面“水到自然渠成”

— 摘自文章：[《TCP协议：如何保证页面文件能被完整送达浏览器》](https://blog.poetries.top/browser-working-principle/guide/part1/lesson02.html#%E4%B8%80%E4%B8%AA%E6%95%B0%E6%8D%AE%E5%8C%85%E7%9A%84-%E6%97%85%E7%A8%8B)
:::