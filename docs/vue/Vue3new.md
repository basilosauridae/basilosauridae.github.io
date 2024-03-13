---
title: Vue3的新特性
date: 2024/02/26
tags:
  - vue
categories:
  - 前端开发
---

## 一、Composition API <xicons icon="Star" />

> 需通读整个[Vue3官方文档](https://cn.vuejs.org/guide/introduction.html)

Vue3（Composition API） + TS 的写法，能保证我们的代码以更倾向于`函数式编程`。

### 选项式和组合式API

- Vue2的基本语法很规整，多人协作或业务繁杂会导致写法臃肿，这是`选项式API`的弊端

:::: code-group
::: code-group-item Vue2的声明式API

```vue
<script>
export default {
  // data() 返回的属性将会成为响应式的状态
  // 并且暴露在 `this` 上
  data() {
    return {
      count: 0
    }
  },

  // methods 是一些用来更改状态与触发更新的函数
  // 它们可以在模板中作为事件处理器绑定
  methods: {
    increment() {
      this.count++
    }
  },

  // 生命周期钩子会在组件生命周期的各个不同阶段被调用
  // 例如这个函数就会在组件挂载完成后被调用
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```
:::
::: code-group-item Vue3的组合式API

```ts
export default {
  // `setup` 是一个专门用于组合式 API 的特殊钩子函数
  setup() {
    const state = reactive({ count: 0 })
    // 暴露 state 到模板
    return { state }
  }
}
```
:::
::::

- 通过以上，Vue3组合式API和选项是最重要的区别是：
  - <u>组合形式的写法，必须要在 script 中指定 `setup`</u>
  - Vue3 中可以写 Vue2 的语法，指定 setup 是为了告诉 Vue <u>编译转换</u>时用什么方法


### 常用的Composition API

- setup

:::: code-group
::: code-group-item setup原写法

```js
export default {
  // `setup` 是一个专门用于组合式 API 的特殊钩子函数
  setup() {
    const state = reactive({ count: 0 })

    // 暴露 state 到模板
    return { state }
  }
}
```
:::
::: code-group-item setup语法糖

```ts
<script setup>
  const state = reactive({ count: 0 })
</script>
```
:::

::: code-group-item setup的参数

```ts
//setup接受两个参数，props和context,context中包含属性、插槽、触发事件等内容
//可以通过 expose 方法，将内部方法暴露到模板引用上供父组件使用
import { h, ref } from 'vue'

export default {
  setup(props,{ expose }){
    const count = ref(0)
    const increment = () => ++count.value

    // 透传 Attributes（非响应式的对象，等价于 $attrs）
    console.log(context.attrs)

    // 插槽（非响应式的对象，等价于 $slots）
    console.log(context.slots)

    // 触发事件（函数，等价于 $emit）
    console.log(context.emit)

    // 暴露公共属性（函数）
    console.log(context.expose)

    expose({ increment })

    return() => h('div',count.value)
  }
}
```
:::
::::

- ref

ref 有两个概念需要区分，一个是ref响应式方法，一个是模板引用;

```html
<script setup>
import { ref, onMounted } from 'vue'

// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const input = ref(null)

onMounted(() => {
  input.value.focus()
})
</script>

<template>
  <input ref="input" />
</template>

//如上，ref函数用于定义一个响应式对象，这个对象用于储存 input ref 应用，即为dom对象
```
`ref函数`和`reactive`有紧密联系，[源码](https://github.com/vuejs/core/blob/507f3e7a16c98398a661c150ce89d36b1441f6cc/packages/reactivity/src/ref.ts#L157)

- reactive

  `ref和reactive的使用时机`:
  1. ref接受一个内部值，针对返回一个响应式、可更改的ref对象
  2. reactive 返回一个对象的响应式代理，针对深层次遍历的
  3. 也可以通过 toRefs 将 reactive 转换成 ref 单个节点的响应式变化:
  
  ![](https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/pieces/Snipaste_2024-03-1.jpg%20.png)

- computed

以下是两种用法

:::: code-group
::: code-group-item 用法一

```ts
cont count = ref(0)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value)//2

plusOne.value++ //error
```

:::
::: code-group-item 用法二：通过get、set指定的方式

```ts
const count = ref(1)
const plusOne = computed({
  get:() => count.value + 1,
  set:(val) => {
    count.value = val - 1
  }
})
plusOne.value = 1
console.log(count.value) //0
```

:::
::::

- watchEffect、watchPostEffect、watchSyncEffect

> 英语中 posteffect有后期效应的意思，sync是同步的意思

后两者是watchEffect的语法糖，将第二个参数的flush,指定为对应值。分别为 `flush?'pre'|'post'|'sync' //默认为pre`

:::: code-group
::: code-group-item 简单使用

```ts
cont count = ref(0)
watchEffect(() => console.log(count.value)) //0

count.value++ //1
```

:::
::: code-group-item 具有清除和停止侦听的功能

```ts
const stop = watchEffect(async(onCleanup) => {
  const { response,cancel } = doAsyncWork(id.value)
  onCleanup(cancel)
  data.value = await response
})

stop()//需要停止即调用
```
:::
::::

- watch

```ts
//侦听一个getter函数：
const state = reactive({count:0})
watch({
  () => state.count,
  (count,preCount) => {...}
})

//侦听一个ref
const count = ref(0)
watch(count,(count,preCount) => {...})

//当侦听多个来源时，回调函数接受两个数组，分别对应来源数组中的新旧值
watch([fooRef,barRef],([foo,bar],[preFoo,preBar]) => {...})

//当使用getter函数作为源时，回调只在此函数的返回值变化时才触发
//深层次监听，使用{deep:true}进入深层级模式
//深层次模式时，回调函数由于深层及的变化而被触发，新旧值是同一个对象
const state2 = reactive({count:0})
watch({
  () => state2,
  (newValue,oldValue) => {...//newValue===oldValue},
  {deep:true}
})

//当直接侦听一个响应式对象时，侦听器会自动启用深层模式
const state3 = reactive({count:0})
watch(state3,()=>{//深层级变更状态所触发的回调})
```


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

关注 指令的钩子函数、此函数中的参数、指令的逻辑处理 问题。

需补充

## 五、Teleport

### 是什么

类似于React中的 `createPortal`,简称'传送门'。将子节点渲染到父节点以外的DOM的方式。

### 示例

弹出层、popover、tooltip等

### 原理

[源码](https://github.com/vuejs/core/blob/507f3e7a16c98398a661c150ce89d36b1441f6cc/packages/runtime-core/src/components/Teleport.ts#L65)

需补充

## 六、自定义hooks

### 价值（为什么要用）

- 自定义hooks是函数式编程的体现，将具有一定业务功能的代码封装起来实现复用。
- 通过自定义hooks,可以将组件的状态与UI实现分离，虽然这个api和mixin很像，但设计思想先进太多

### 重要 <xicons icon="Star" />

[vue-hook-plus](https://github.com/InhiblabCore/vue-hooks-plus)

### 示例

（这里有点不太懂 需补充）