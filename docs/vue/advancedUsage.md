---
title: Vue2的高级用法
date: 2024/01/06
tags:
  - vue
categories:
  - 前端开发
---

## 一、mixin复用

>mixin代表了一种思考问题的方法———穿越，mixin实现复用的同时带来了很多问题：命名污染、依赖不透明，Vue3用Composition API替代了

### mixin是什么

一种比较灵活的方式来分发vue组件可复用的功能，目的是公共逻辑和配置提取

### 用法
:::: code-group
 ::: code-group-item 单个组件引入
 ```js
  //创建mixin.js暴露对象
  export default{
    data(){
      return{
        msg:'mixins'
      }
    },
    created(){
      console.log('mixins created')
    },
    methods:{
      hello(){
        console.log( 'hello mixins' );
      }
    }
  }
  //单独vue组件中引入
  import {mixin1,mixin2} from '../common/mixins'
  ...
  mixins:[mixin1,mixin2], 
 ```
 :::
 ::: code-group-item 全局引入
 ```js
 //main.js中全局注册
 Vue.mixin({
  created:function () {
    //  console.log('mixin global');//全局混入，每个组件都会打印
  }
}) 
```
:::
::::

### 合并

- 生命周期 合并为数组
- 数据对象内容 覆盖方式
- methods冲突 当前组件为准

### 优势

- 提高代码复用性
- 无需传递状态
  
### 缺点

- 不能按需引入
- 溯源困难

### tips
  
- vue2中对象混入，vue3中setup API混入
- 一个组件改动了mixin的数据，另一个组件引用了mixin的组件不受影响
- 若简单组件状态 props
- 跨组件 provide/inject
- 处理更复杂组件之间的共享 vuex pini（对比会写一份笔记记录 占坑）

## 二.Vue.js动画特效 & 常见组件库介绍

### Js动画实现思路

- [Gsap](https://www.gsap.com/)
- animate css
- 切换 class 预先定义好的动画相关类名实现动画
- js 操作 style transition

### Vue中的动画

vue3 中，过渡的时候切换class类名，通过监听 `transitionstart`、`transitionend`实现

:::: code-group
 ::: code-group-item 底层原理
 ```vue
  <template>
    <div id="demo"></div>
  </template>
  <script>
    export default{
      mounted(){
        // js原生实现，vue中transition组件类似也是这样的原理
        const demoDom = document.querySelector('#demo')
        demoDom.addEventListener('transitionstart',()=>{
          console.log( 'start' );
        })
        demoDom.addEventListener('transitionend',()=>{
          console.log( 'end' );
          demoDom.parentElement.removeChild(demoDom)
        })
      },
    }
  </script>
  <style scoped>
    #demo{
      width: 100px;
      height: 100px;
      background: rebeccapurple;
      transition: all 1s ease;
    }
    #demo:hover{
      transform: translateY(100px);
    }
  </style>
 ```
 :::
 ::: code-group-item vue中单个使用
  ```vue
  <template>
    <button @click="isShow = !isShow">点击切换动画</button>
    <transition name="fade">
      <p v-if="isShow">切换当前内容</p>
    </transition>
  </template>
  <script>
    export default{
      data(){
        return{ isShow:false }
      }
    }
  </script>
  <style scoped>
    .fade-enter-active,
    .fade-leave-active{
      transition: opacity 1s;;
    }
    .fade-enter,
    .fade-leave-to{
      opacity: 0;
    }
  </style>
 ```
 :::
 ::: code-group-item vue中多个使用
  ```vue
  <template>
    <transition-group name="fade">
      <div v-for="(i,idx) in items" :key="idx">{{ i }}</div>
    </transition-group>
    <button @click="add">add</button>
    <button @click="remove">remove</button>
  </template>
  <script>
    export default{
      data(){
        return{ items:[1,2,3,4,5,6,7,8] }
      },
      methods:{
        randomIndex(){
          return Math.floor(Math.random()*this.items.length)
        },
        add(){
          this.items.splice(this.randomIndex(),0,++this.items.length)
        },
        remove(){
          this.items.splice(this.randomIndex(),1)
        }
      }
    }
  </script>
  <style scoped>
    .fade-enter-active,
    .fade-leave-active{
      transition: opacity 1s;;
    }
    .fade-enter,
    .fade-leave-to{
      opacity: 0;
    }
  </style>
 ```
 :::
::::

### Vue源码位置

[源码实现](https://github.com/vuejs/vue/blob/main/src/platforms/web/runtime/components/transition-group.ts)：重点看updated函数，对生成之前的preChildren通过传入的name，追加class类名，进行动画操作和事件监听。

```js
updated() {
  const children: Array<VNodeWithData> = this.prevChildren
  const moveClass: string = this.moveClass || (this.name || 'v') + '-move'
  if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
    return
  }

  // we divide the work into three loops to avoid mixing DOM reads and writes
  // in each iteration - which helps prevent layout thrashing.
  children.forEach(callPendingCbs)
  children.forEach(recordPosition)
  children.forEach(applyTranslation)

  // force reflow to put everything in position
  // assign to this to avoid being removed in tree-shaking
  // $flow-disable-line
  this._reflow = document.body.offsetHeight

  children.forEach((c: VNode) => {
    if (c.data!.moved) {
      const el: any = c.elm
      const s: any = el.style
      addTransitionClass(el, moveClass)
      s.transform = s.WebkitTransform = s.transitionDuration = ''
      el.addEventListener(
        transitionEndEvent,
        (el._moveCb = function cb(e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb)
            el._moveCb = null
            removeTransitionClass(el, moveClass)
          }
        })
      )
    }
  })
}
```
也可以对打包之后的文件(node_modules/vue/dist)进行debug调试：
![](https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/pieces/Snipaste_2024-02-11_14-46-40.jpg)

## 三.插槽

### 目的

外部组件自定义内部组件的内容，实现内容分发

- 占位（子组件），分发内容（父组件）
- 默认插槽、具名插槽（name控制）、作用域插槽关注一下区别

### 插槽本质 <xicons icon="Star" />

重点方法：
- $slots & $scopedSlots
- renderSlot
- processSlot、processSlotContent
- generate

函数生成对应虚拟节点。[源码实现](https://github.com/vuejs/vue/blob/main/src/core/instance/render-helpers/render-slot.ts)：重点看`renderSlot`函数

```js
//插槽的渲染过程
export function renderSlot(
  name: string,
  fallbackRender: ((() => Array<VNode>) | Array<VNode>) | null,
  props: Record<string, any> | null,
  bindObject: object | null
): Array<VNode> | null {
  const scopedSlotFn = this.$scopedSlots[name]
  let nodes
  if (scopedSlotFn) {
    // scoped slot
    props = props || {}
    if (bindObject) {
      if (__DEV__ && !isObject(bindObject)) {
        warn('slot v-bind without argument expects an Object', this)
      }
      props = extend(extend({}, bindObject), props)
    }
    nodes =
      scopedSlotFn(props) ||
      (isFunction(fallbackRender) ? fallbackRender() : fallbackRender)
  } else {
    nodes =
      this.$slots[name] ||
      (isFunction(fallbackRender) ? fallbackRender() : fallbackRender)
  }

  const target = props && props.slot
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}
```

## 四.插件

- 插件是在不侵入源码的情况下，对源码进行扩展。
- 插件可以是对象（对象需要install函数），也可以是函数（形态需同install保持一致）
- webpack、tappable、vue、vue-router、pinia都是插件提供的内容
- 核心内容、插件基座、插件注册、插件卸载、插件生命周期

### 如何定义插件

在Vue中的插件，都是基于Vue实例,调用Vue的能力，对Vue生态去拓展功能。

```js
const MyPlugin = {
  install(Vue, options) {
    // 1. 添加全局方法或 property
    Vue.myGlobalMethod = function () {
      // 逻辑...
    }
  
    // 2. 添加全局资源
    Vue.directive('my-directive', {
      bind (el, binding, vnode, oldVnode) {
        // 逻辑...
      }
      ...
    })
  
    // 3. 注入组件选项
    Vue.mixin({
      created: function () {
        // 逻辑...
      }
      ...
    })
  
    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
      // 逻辑...
    }
  }
};
```

### 使用插件
```js
Vue.use(MyPlugin);
{{ $myMethod }}
```

### 插件机制化原理 <xicons icon="Star" />
```js 
//Vue.use 原理
export function initUse (Vue: GlobalAPI) {
  Vue.use = function (plugin: Function | Object) {
    // 获取已经安装的插件
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    // 看看插件是否已经安装，如果安装了直接返回
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // toArray(arguments, 1)实现的功能就是，获取Vue.use(plugin,xx,xx)中的其他参数。
    // 比如 Vue.use(plugin,{size:'mini', theme:'black'})，就会回去到plugin意外的参数
    const args = toArray(arguments, 1)
    // 在参数中第一位插入Vue，从而保证第一个参数是Vue实例
    args.unshift(this)
    // 插件要么是一个函数，要么是一个对象(对象包含install方法)
    if (typeof plugin.install === 'function') {
      // 调用插件的install方法，并传入Vue实例
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args)
    }
    // 在已经安装的插件数组中，放进去
    installedPlugins.push(plugin)
    return this
  }
}
```

### 插件的具体实践

eg:Vue-Router

```js
import View from './components/view'
import Link from './components/link'

export let _Vue

export function install (Vue) {
  if (install.installed && _Vue === Vue) return
  install.installed = true

  _Vue = Vue

  const isDef = v => v !== undefined

  const registerInstance = (vm, callVal) => {
    let i = vm.$options._parentVnode
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal)
    }
  }

  Vue.mixin({
    beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this
        this._router = this.$options.router
        this._router.init(this)
        Vue.util.defineReactive(this, '_route', this._router.history.current)
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
      }
      registerInstance(this, this)
    },
    destroyed () {
      registerInstance(this)
    }
  })

  Object.defineProperty(Vue.prototype, '$router', {
    get () { return this._routerRoot._router }
  })

  Object.defineProperty(Vue.prototype, '$route', {
    get () { return this._routerRoot._route }
  })

  Vue.component('RouterView', View)
  Vue.component('RouterLink', Link)

  const strats = Vue.config.optionMergeStrategies
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created
}
```

## 五.过滤器

## 六.单元素/组件动画

## 七.列表动画、状态动画、动画库