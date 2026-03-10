---
title: 我的前端之路
date: 2024/01/09
categories:
  - 总结
---

## 关于我

<div class="bannertop">

👋 嗨，我是 Ying

一个拥有 INTJ 灵魂的探索者——永远好奇，永远在拆解世界的路上。

大学时期沉迷视觉表达，靠美工兼职摸熟了 Adobe 全家桶，那时便埋下了成为 UI/UX 的愿望。毕业后却意外发现：把自己写的代码变成看得见的视觉冲击，似乎更酷。于是，我转身投入前端开发的怀抱。

在过去的几年里，我穿梭于 电商、AIoT 和离散制造行业，用代码搭建界面，也用设计思维打磨体验。主力技术栈是 Vue，最近正在深入 React 的世界，同时也在系统学习 TypeScript，希望让代码更健壮、更优雅。

除了 Web 应用，我还是个不折不扣的 游戏爱好者——不仅爱玩，更爱琢磨如何创造。于是开始自学 Cocos Creator 和 Blender，试图在虚拟世界里实现一点小小的视觉冲击。如果你也对算法挑战、游戏开发感兴趣，欢迎来约我一起刷题、讨论，协作成长。

未来？希望自己保持初心，像代码一样逻辑清晰，像视觉一样璀璨美丽，最终——所向无敌！🎉🎊✨

📫·[Github](https://github.com/Basilosauridae)·[掘金](https://juejin.cn/user/2489763823616141)·[Steam](https://steamcommunity.com/profiles/76561199024540854/)·

⚡ 趣味彩蛋：待你发掘（TBD）

</div>

## 从0~1的实践:小箱单智造·Min Work

项目从 2022.10 开始，从**人员的招聘，业务技术调研，团队内部工程化落地，从零到一的技术搭建，后期用户体验的优化（性能优化），项目实地部署（稳定性治理）**。这也是我职业生涯中**第一次**深刻理解到，一个互联网产品的诞生与成长。

  <img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/memories/001.jpg"/><br> 
  <span style="font-size:12px">&nbsp; 没有到齐的吗喽合影&nbsp;</span>
  <img src="https://bbs.vsread.com/bbsuploadimg/2021-11-04/20211104060550_90788.gif" style="width:15%;display:inline-block;"/>

<img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/006.png"/><br>

### 项目业务背景

小箱单是针对中小制造业,以`管控仓库物流`、`车间管理透明化`、`规范业务流程`为目标，打造以现场驱动、聚焦场内物流的全链路执行系统。

<!-- <img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/003.jpg"/><br> -->

两端控制:管理人员通过web端管理`人、物、箱、路线`，通过权限控制，定制作业路线，展示可视化报表；操作人员通过`小程序/PDA`实现`物料装箱/搬运/报工`等功能。

<img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/009.jpg"/><br>

>Vue3 + Vue-Router + Pina + Vite + Vitest + AntDv / 微信原⽣⼩程序

### 难点和亮点

**【12个业务组件封装】**
 
- 自定义键盘组件：用户年龄定位四五十岁，手机默认的数字输入键盘太小，自定义封装了大号计算器键盘全局使用，并针对需求切换是否为小数点键盘，且需要考虑到有的表单是否携带默认值和自定义校验；
- 扫码组件：针对箱子上的二维码，在管理端使用qrcode生态库配置对应的信息二维码展示字段，使用html2canvas实现预览功能；调取打印机打印二维码；小程序基于原生camera封装了扫码组件，可以扫取web端生成的二维码，自动填入箱单信息，存入扫描记录；
- 还有各类表格组件、标签组件、底部状态栏等通用公共组件，提高了团队开发效率。

  <img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/008.jpg"/><br>

**【接近 lowCode 的实践】**

- web端自定义配置页面的拖拽点击自定义选项，渲染表单，并把配置好的页面展示在小程序页面中，是一次**接近 lowCode 实践**<span style="font-size:13px">（通过拖拽方式 渲染页面 组件库 如何存起来 如何渲染，针对这个我会总结一篇文章）。</span>

  <img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/012.png"/><br>

## 边缘计算盒(AIoT)

>vue3.0+TypeScript+Vite 

<img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/001.png"/><br>

尤大大在 vue3.0 beta 直播中推荐了 vite 工具，强调是针对 vue 单页面组件的无打包开发服务器，快速冷启动服务器、即时热模块更换（HMR）
、真正的按需编译。很新颖，我决定用它来搭建一个 vue3 项目。

- 使用 vite 搭建项目；`npm init vite-app`<br>
- 安装 typescript、vue-router@next、axios、sass 等相关插件；<br>
- eslint + stylelint + commitlint + husky **前端编码规范工程化**的实践；
- 并封装了通用组件：

  <img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/002.png"/><br>

## 当数据可视化遇上疫情：测温大屏的开发之旅

>Vue2 + Vuex + webpack + echarts + Cypress 

疫情期间，本测温大屏一体机集成刷脸识别与体温检测功能，实时展示访客体温是否异常，为防疫数据大屏提供可视化支持。

<img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/014.png"/><br>

与公司项目组的算法工程师、后端开发工程师联合开发，我觉得比较有意思的地方是接口联调，加入了算法接口；另外大屏的数据展示也需要前端开发对浏览器性能的优化+可视化图形转化能力。

对于前端工程师来说，数据可视化也是非常重要的能力。推荐[《The Grammar of Graphics》](https://www.jianshu.com/nb/40128468)，⼀套⽤来描述所有统计图形深层特性的语法规则，该语法回答了『什么是统 计图形』这⼀问题，以⾃底向上的⽅式组织最基本的元素形成更⾼级的元素。

## 跨端开发的安卓平板

<img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/016.png"/><br>

>uni-app + HbuilderX + Android Studio

作为一次跨端开发的尝试，我基于 uni-app 框架在 HBuilderX 中完成了安卓平板 App 的前端逻辑与界面开发，并借助 Android Studio 打包生成应用外壳，最终通过数据线连接设备完成安装调试。

此前我的工作主要围绕 Web 前端展开，App 开发对我而言是一次全新的挑战——从浏览器环境延伸到移动端，既要适配平板的交互与性能，又要理解原生打包的流程。这次实践让我更深入地体会到跨端框架的灵活性与局限性，也为后续探索移动端开发展开了更多可能。

## 国际网站开发

<img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/015.png"/><br>

此项目是采用 wordpress 前后端一体的方法，当时有和产品讨论用 vuepress 技术，但由于面向海外市场，后期方便功能性维护，插件更丰富的 wordpress 更合适，
前端开发使用的是原生三剑客——html+css+javascript。设计师是一个澳大利亚人，很有趣，感谢他会说中文。

## cocoscreator2D+Typescript 小游戏

<img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/017.gif"/><br>

工作之余，我依然热衷于“用代码造物”的探索。最近用 Cocos Creator 2D 独立完成了一款网页小游戏（3D 还在学习清单上排队，迟早会捡起来💪）。
在我看来，游戏开发是前端能力的自然延伸——同样是逻辑梳理与文档啃透，但多了一份“让静态方法变成动态体验”的魔法。将方法论注入生动的游戏动作，这个过程本身就充满挑战与成就感。

项目的完整开发流程已开源在 [GitHub](https://github.com/basilosauridae/canvas-cocos) 仓库，并会持续更新。欢迎来逛逛，一起交流前端与游戏交汇的乐趣～

## 联系方式

邮箱：lumang7520@126.com