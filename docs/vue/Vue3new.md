---
title: Vue3的新特性
date: 2024/02/26
tags:
  - vue
categories:
  - Vue
---

## 一、Composition API <xicons icon="Star" />

> 需通读整个[Vue3官方文档](https://cn.vuejs.org/guide/introduction.html)

Vue3（Composition API） + TS 的写法，能保证我们的代码以更倾向于`函数式编程`。

### test

- ref和reactive的使用时机
  - ref接受一个内部值，针对返回一个响应式、可更改的ref对象
  - reactive 返回一个对象的响应式代理，针对深层次遍历的
  - 也可以通过 toRefs 将 reactive 转换成 ref 单个节点的响应式变化


## 二、生命周期

- Vue3中的`renderTracked`在VDom（初次渲染/更新）渲染时调用,作为性能追踪去使用。
- `setup`，在 beforeCreate 和 created 前，因此一般在组合式 api 中使用它做一些前置处理。

![](https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/pieces/Snipaste_2024-02-29_18-05-41.jpg)

```js
//以下的type是告诉我们响应式的操作类型式get还是set
renderTracked({key,target,type}){
  //key是data中的值名称，target是值，type为get,data中有几个变量初始就触发几次
}

renderTriggered({key,target,type}){
  //key是data中的值名称，target是值，type为set
}
```

## 三、异步组件

### 什么是异步组件

- 异步组件用的就是 es6 中提供的 import 方式

:::: code-group
::: code-group-item 异步组件注入方式一

```js
//Async父组件，AsyncComp子组件，两组均写在main.js中
import { crateApp } from 'vue'
import Async from '...'
import AsyncComp from '...'

const async = crateApp(Async)
async.mount('#async')
async.component('async-comp',AsyncComp)

//此时进行构建，打包目录只生成了一个js文件
```

:::
::: code-group-item 异步组件注入方式二（常用）

```js
//Async父组件，AsyncComp子组件，两组均写在main.js中
import { crateApp，defineAsyncComponent } from 'vue'
import Async from '...'
// import AsyncComp from '...'(无需引入)
const async = crateApp(Async)

const AsyncComp = defineAsyncComponent(() => import('...'))
async.component('async-comp',AsyncComp)
async.mount('#async')

//此时进行构建，打包目录生成了两个js文件，其实就是将异步AsyncComp组件单独拧出来，即动态引入，不混在一个文件中了
```

:::
::::

- Vue中的异步组件和React中的lazy import(动态加载)效果大同小异

```js
const myComponent = React.lazy(() => import('...'))
funtion MyComponent(){
  return(
    <div>
      <Suspense fallback={<loading />}>
        <Component />
      </Suspense>
    </div>
)}
```

## 四、自定义指令

## 五、Teleport

- 类似于React中的 `createPortal`,简称'传送门'。将子节点渲染到父节点以外的DOM的方式。

## 六、自定义hooks

### 价值（为什么要用）

- 自定义hooks是函数式编程的体现，将具有一定业务功能的代码封装起来实现复用。
- 通过自定义hooks,可以将组件的状态与UI实现分离，虽然这个api和mixin很像，但设计思想先进太多

### 重要 <xicons icon="Star" />

[vue-hook-plus](https://github.com/InhiblabCore/vue-hooks-plus)

### 示例

