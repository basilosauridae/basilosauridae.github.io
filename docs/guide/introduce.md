---
title: 我的前端之路
date: 2024/01/09
categories:
  - 总结
---

## 关于我

1. 理论性格是具有开拓与创索精神的 [INTJ](https://www.16personalities.com/ch/intj-%E4%BA%BA%E6%A0%BC)，最大的优势就是永远保持好奇，自我探索力 MAX；
2. 大学时期做过美工兼职，熟练使用 Adobe 家族桶,愿望是成为 UI/UX;
3. 毕业后觉得把自己写的代码变成可以看得见的视觉冲击会更酷，毅然选择前端开发;
4. 有`电商`、`AIoT`、`离散制造行业`前端开发经验，主要技术栈`Vue`，目前正在学习`React`;
5. 未来希望自己保持初心，璀璨美丽，所向无敌！🎉🎊✨

>以下为部分项目展示 

## 2022 ~ 2024 小箱单智造·Min Work

<img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/006.png"/><br>

### 项目业务背景

小箱单是针对中小制造业,以`管控仓库物流`、`车间管理透明化`、`规范业务流程`为目标，打造以现场驱动、聚焦场内物流的全链路执行系统。

<img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/003.jpg"/><br>

包括两端控制，管理人员通过web端管理`人、物、箱、路线`，通过权限控制，定制作业路线，展示可视化报表；操作人员通过`小程序/PDA`实现`物料装箱/搬运/报工等`。

<img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/009.jpg"/><br>

### 技术栈选型

Vue3 + Vue-Router + Pina + Vite + Vitest + AntDv / 微信原⽣⼩程序

### 难点和亮点

**【12个业务组件封装】**
 
- 自定义键盘组件：用户年龄定位四五十岁，手机默认的数字输入键盘太小，自定义封装了大号计算器键盘全局使用，并针对需求切换是否为小数点键盘，且需要考虑到有的表单是否携带默认值和自定义校验；
- 扫码组件：针对箱子上的二维码，在管理端使用qrcode生态库配置对应的信息二维码展示字段，使用html2canvas实现预览功能；调取打印机打印二维码；小程序基于原生camera封装了扫码组件，可以扫取web端生成的二维码，自动填入箱单信息，存入扫描记录；
- 还有各类表格组件、标签组件、底部状态栏等通用公共组件，提高了团队开发效率。

  <img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/008.jpg"/><br>

**【接近 lowCode 的实践】**

- web端自定义配置页面的拖拽点击自定义选项，渲染表单，并把配置好的页面展示在小程序页面中，是一次**接近 lowCode 实践**<span style="font-size:13px">（通过拖拽方式 渲染页面 组件库 如何存起来 如何渲染，针对这个我会总结一篇文章）。</span>

  <img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/012.png"/><br>

**【从0~1的实践】**

- 项目从 2022.10 开始，从**人员的招聘，业务技术调研，团队内部工程化落地，从零到一的技术搭建，后期用户体验的优化（性能优化），项目实地部署（稳定性治理）**。这也是我职业生涯中**第一次**深刻理解到，一个互联网产品的诞生与成长。

  <img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/memories/001.jpg"/><br> 
  <span style="font-size:12px">&nbsp; 没有到齐的吗喽合影&nbsp;</span>
  <img src="https://bbs.vsread.com/bbsuploadimg/2021-11-04/20211104060550_90788.gif" style="width:15%;display:inline-block;"/>

## 2021 ~ 2022

### vue3.0+TypeScript+Vite 边缘计算盒(AIoT)

<img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/001.png"/><br>

尤大大在 vue3.0 beta 直播中推荐了 vite 工具，强调是针对 vue 单页面组件的无打包开发服务器，快速冷启动服务器、即时热模块更换（HMR）
、真正的按需编译。很新颖，我决定用它来搭建一个 vue3 项目。

- 使用 vite 搭建项目；`npm init vite-app`<br>
- 安装 typescript、vue-router@next、axios、sass 等相关插件；<br>
- eslint + stylelint + commitlint + husky **前端编码规范工程化**的实践；
- 并封装了通用组件：

  <img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/002.png"/><br>

### Vue2 + Vuex + webpack + echarts + Cypress 测温大屏一体机

本项目是针对疫情期间，刷脸识别访客体温是否异常展示的数据大屏需求。

<img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/014.png"/><br>

- 与公司项目组的算法工程师、后端开发工程师联合开发，我觉得比较有意思的地方是接口联调，加入了算法接口；另外大屏的数据展示也需要前端开发对浏览器性能的优化+可视化图形转化能力。
- 对于前端工程师来说，数据可视化也是非常重要的能力。推荐[《The Grammar of Graphics》](https://www.jianshu.com/nb/40128468)，⼀套⽤来描述所有统计图形深层特性的语法规则，该语法回答了『什么是统 计图形』这⼀问题，以⾃底向上的⽅式组织最基本的元素形成更⾼级的元素。

### 跨端开发的【安卓平板】

<img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/016.png"/><br>

安卓平板是一个 app 项目，新奇的点在于我的工作都是 web 开发，app 对我来说是一个挑战。
此项目使用的更适用于 uni-app 的 HbuilderX，再使用 Android Studio 编辑打包 app 外壳，用数据线连接手机就可以安装 app 了。

### 国际网站开发

<img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/015.png"/><br>

此项目是采用 wordpress 前后端一体的方法，当时有和产品讨论用 vuepress 技术，但由于面向海外市场，后期方便功能性维护，插件更丰富的 wordpress 更合适，
前端开发使用的是原生三剑客——html+css+javascript。设计师是一个澳大利亚人，很有趣，感谢他会说中文。

### cocoscreator2D+Typescript 小游戏

<img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/017.gif"/><br>

工作之外的小探索，自我学习做了一个网页小游戏，不过是 cocos creator 2D 版本的，因为种种原因 3D 一直没有捡起来。
对于前端来说，我觉得更多的是锻炼代码的逻辑能力和对文档的理解能力。很多都是方法论，把死板的方法放入生动的游戏动作中，挺重要；
详细开发流程可参考[我的 Github 仓库](https://github.com/basilosauridae/canvas-cocos)，持续更新中...

## 联系方式

- 邮箱：lumang7520@126.com
- [Github](https://github.com/Basilosauridae)
- [掘金](https://juejin.cn/user/2489763823616141)
- [网易云](https://music.163.com/#/user/home?id=3961162557)
- [Steam](https://steamcommunity.com/profiles/76561199024540854/) (扩列游戏共享啦~)

![](https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/others/bjyx.gif)