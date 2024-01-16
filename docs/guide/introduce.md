---
title: 我的前端之路
date: 2024/01/09
---

## 关于我

1. 理论性格是具有开拓与创索精神的 [INTJ](https://www.16personalities.com/ch/intj-%E4%BA%BA%E6%A0%BC)，最大的优势就是永远保持好奇，自我探索力 MAX；
2. 大学时期做过美工兼职，熟练使用 Adobe 家族桶,愿望是成为 UI/UX;
3. 毕业后觉得把自己写的代码变成可以看得见的视觉冲击会更酷，毅然选择前端开发;
4. 有`电商`、`AIoT`、`离散制造行业`前端开发经验，主要技术栈`Vue`，目前正在学习`React`;
5. 未来希望自己保持初心，璀璨美丽，所向无敌！🎉🎊✨

>以下为部分项目展示

## 2022 ~ 2023 小箱单智造·Min Work

<img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/006.png"/>

### 项目业务背景

小箱单是针对中小制造业,以`管控仓库物流`、`车间管理透明化`、`规范业务流程`为目标，打造以现场驱动、聚焦场内物流的全链路执行系统。

<img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/003.jpg"/>

包括两端控制，管理人员通过web端管理`人、物、箱、路线`，通过权限控制，定制作业路线，展示可视化报表；操作人员通过`小程序/PDA`实现`物料装箱/搬运/报工等`。

<img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/009.jpg"/>

### 技术栈选型

web端使用Vue + antDV,小程序使用uni-app + vant 页面搭建，最终打包成Android 和 微信小程序。

### 难点和亮点

1. 产品用户年纪大部分是四五十岁的人群，手机自带的数字输入键盘太小，自定义封装了计算器键盘全局使用，并针对需求切换是否为小数点键盘，且需要考虑到有的表单是否携带默认值和自定义校验；
2. 针对箱子上的二维码，在管理端使用qrcode生态库配置对应的信息二维码展示字段，使用html2canvas实现预览功能；调取打印机打印二维码；小程序基于原生camera封装了扫码组件，可以扫取web端生成的二维码，自动填入箱单信息，存入扫描记录；
   
<img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/008.jpg"/>

3. web端自定义配置页面的拖拽点击自定义选项，渲染表单，web端页面成功了；项目后期要求把配置好的页面推送到小程序页面去，后面也有自己试过用bpmn-js-properties-Panel生态库渲染一个表单，导出xml给后端，但没有找到xml转化成微信小程序原生模板的方法，还没实现就over了。

<img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/012.png"/>

### 业务效果

业务经历一年，参与了从零到一构建开发部署的过程，虽然最后项目组被砍，但认识了一群好伙伴，一起开发提测，有刚参与时的忐忑雄心，结束时的失落突然，好像一场梦。

但也算在工业智造领域中贡献出一份小小的尝试和力量吧，愿离散制造业不再离散。

<img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/memories/001.jpg"/>

## 2021 ~ 2022

### vue3.0+TypeScript+Vite 边缘计算盒(AIoT)

<img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/001.png"/>

尤大大在 vue3.0 beta 直播中推荐了 vite 工具，强调是针对 vue 单页面组件的无打包开发服务器，快速冷启动服务器、即时热模块更换（HMR）
、真正的按需编译。很新颖，我决定用它来搭建一个 vue3 项目。

1. 使用 vite 搭建项目；`npm init vite-app`<br>
2. 安装 typescript、vue-router@next、axios、eslint-plugin-vue、sass 等相关插件；<br>
3. 详情可参考本博客文章——《记录 vite+ts 快速搭建 vue3 项目》

并封装了部分公共组件
<img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/002.png"/>

### vue2.0+elementUI+webpack 刷脸测温签到大屏

<img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/014.png"/>

本项目是针对疫情期间，刷脸识别访客体温是否异常展示的数据大屏需求。

与公司项目组的算法工程师、后端开发工程师联合开发，我觉得比较有意思的地方是接口联调，加入了算法接口；另外大屏的数据展示也需要前端开发对浏览器性能的优化+可视化图形转化能力。

对于前端工程师来说，数据可视化也是非常重要的能力。推荐《The Grammar of Graphics》，⼀套⽤来描述所有统计图形深层特性的语法规则，该语法回答了『什么是统 计图形』这⼀问题，以⾃底向上的⽅式组织最基本的元素形成更⾼级的元素。

### 安卓平板

<img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/016.png"/>

安卓平板是一个 app 项目，新奇的点在于我的工作都是 web 开发，app 对我来说是一个挑战。
此项目使用的更适用于 uni-app 的 HbuilderX，再使用 Android Studio 编辑打包 app 外壳，用数据线连接手机就可以安装 app 了。

### web 网站

<img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/015.png"/>

此项目是采用 wordpress 前后端一体的方法，当时有和产品讨论用 vuepress 技术，但由于面向海外市场，后期方便功能性维护，插件更丰富的 wordpress 更合适。
前端开发使用的是原生三剑客——html+css+javascript。

### cocoscreator2D+Typescript 小游戏

<img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/project/017.gif"/>

工作之外的小探索，自我学习做了一个网页小游戏，不过是 cocos creator 2D 版本的，因为种种原因 3D 一直没有捡起来。
对于前端来说，我觉得更多的是锻炼代码的逻辑能力和对文档的理解能力。很多都是方法论，把死板的方法放入生动的游戏动作中，挺重要；
详细开发流程可参考[我的 Github 仓库](https://github.com/basilosauridae/canvas-cocos)，持续更新中...

## 联系方式

- 邮箱：lumang7520@126.com
- [Github](https://github.com/Basilosauridae)
- [Steam](https://steamcommunity.com/profiles/76561199024540854/) (欢迎找我玩~)
- [掘金](https://juejin.cn/user/2489763823616141)