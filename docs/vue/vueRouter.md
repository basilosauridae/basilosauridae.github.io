---
title: VueRouter & SSR
date: 2024/03/01
tags:
  - vue
categories:
  - Vue
---

## 一、Vue Router

:::info
VueRouter最新版本已发展到4.0; 开发中,Vue2 => VR3 , Vue3 => VR4 ;

4.0采用了函数式编程的写法，不再推荐属性定义的方式去访问路由(this.$router,this.$route)，<br/>
使用hooks(本质就是函数，useRouter(),useRoute())
:::

> 函数式编程传参更加灵活；但不像Vue2的this挂载访问那么方便，使用时必须import。（import虽然使用繁琐，但对于开发者来说，更能找出从何而来的逻辑。）

### 路由目的

将组件映射到路由上，让 Vue Router 知道在哪里（`router-view这个地方`）渲染它们。

```html
<script src="https://unpkg.com/vue@3"></script>
<script src="https://unpkg.com/vue-router@4"></script>

<div id="app">
  <h1>Hello App!</h1>
  <p>
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</div>

- router-link 类似 a 标签，这使得 Vue Router 可以在不重新加载页面的情况下更改 URL，处理 URL 的生成以及编码；
- router-view 将显示与 url 对应的组件；
```

### 定义和使用路由

:::: code-group
::: code-group-item Vue3中的 Vue Router4.0

```js
import { createApp } from 'vue'
import { createRouter,createWebHashHistory } from 'vue-router'//v4的返回值是函数创建的对象🤎
import Home from '...'

const app = createApp()
const router = createRouter({
  history:createWebHashHistory(),
  routes:[
    { path:'/',components:Home }
  ]
})
app.use(router) //router这个插件和app实例产生了关联
app.mount('#app')
```

:::
::: code-group-item Vue2中 Vue Router3.0

```js
import VueRouter from 'vue-router'//v3的返回值是类class🤎
const router = VueRouter({
  mode:'hash',
  routes:[
    { path:'/',components:Home }
  ]
})
```

:::
::::

### router和route的区别

- router:路由管理对象，跳转之类
- route:当前路由对象，获取当前组件的路由信息

### query和params的区别

- query => question，中文查询的意思，会以`?xx=...`显示在地址栏
- 一个是路由，一个是查询

### 动态路由参数和监测
（需补充）
- 使用 :id

- 监测：Vue中为了新能，切换页面并不会销毁，组件生命周期无法监测

- 监测变化方式：watch或beforeRouteUpdate

### 路由的匹配语法

- 此针对动态路由。为什么path中的路径和url重合后可以匹配到对应页面？

- 使用的正则 `([^/]+) (至少有一个字符不是斜杠 / )`

- sensitive: true（没用过 可以注意下）

比较复杂，需补充。

### 嵌套路由

子路由的路径不能以`/`开头，否则Vue会认为是根路径，不会和父路径关联匹配。

补充

### 编程式导航

路由的跳转有两种方式，一种是`<router-link to="..."/>`，还有一种就是编程式导航：`push和replace`。

原理：需补充

```js
import { useRouter } from 'vue-router'
const router = useRouter()
router.push() //当调用此方法时，会向history中添加一条记录
router.replace() //当调用此方法时，会向history中替换一条记录

//一些参数配置的补充：

```

## 二、SSR

