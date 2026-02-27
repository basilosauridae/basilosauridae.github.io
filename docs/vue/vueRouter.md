---
title: VueRouter & SSR
date: 2024/03/01
tags:
  - vue
categories:
  - 前端开发
---

## 一、Vue Router基础

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

- router:路由实例对象，包括了许多用于导航控制和路由操作的API，如push、replace、go、forward
- route:当前路由对象，获取当前组件的路由信息，如当前路径、查询参数、路径参数等信息。

### query和params的区别

- query => question，中文查询的意思，会以`?xx=...`显示在地址栏,params更安全；
- 刷新传值参数query存在，params丢失。

### 动态路由参数和监测

1. 动态字段以`:`表示。当一个路由被匹配时，它的params值将在每个组件中以 this.$route.params的形式暴露
```js
const User = { template: '<div>User</div>' }
//这些都会传递给createRouter
const routes = [
  { path:'/user/:id',component:User }
]
// /user/1和/user/2都会映射到同一个路由
```

2. 监测：如上例子，/user/1和/user/2都会映射到同一个路由，相同组件实例将被重复使用，比起销毁再创建更高效；
但这意味着组件的生命周期钩子函数不会被调用。

3. 监测变化方式：watch或beforeRouteUpdate
```js
//watch方式
const User = {
  template:'...',
  created(){
    this.$watch(
      () => this.$route.params,
      (toParams,preParams) => {...}
  )}
}
//导航守卫方式
const User2 = {
  template:'...',
  async beforeRouteUpdate(to, from) {
    // 对路由变化做出响应...
    this.userData = await fetchUser(to.params.id)
  },
}
```

### 路由的匹配语法

- 此针对动态路由。为什么path中的路径和url重合后可以匹配到对应页面？路由排序的匹配规则是基于score值来判断当前path为哪个route的（[源码](https://github.com/vuejs/router/blob/main/packages/router/src/matcher/pathParserRanker.ts#L100)），或通过[测试](https://paths.esm.dev/)

- 使用的正则 `([^/]+) (至少有一个字符不是斜杠 / )`;

- sensitive: true（没用过 可以注意下）

比较复杂，需补充。

### 嵌套路由

```js
//User组件内有<router-view></router-view>标签时，想让组件渲染到此，需：
const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      {
        // 当 /user/:id/profile 匹配成功
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: 'profile', //子路由的路径不能以`/`开头，否则Vue会认为是根路径，不会和父路径关联匹配。📌
        component: UserProfile,
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 将被渲染到 User 的 <router-view> 内部
        path: 'posts',
        component: UserPosts,
      },
      { path: '', name: 'user', component: UserHome }//嵌套的命名路由，注意只有子路由有名称。📌
    ],
  }
]
```

### 编程式导航

路由的跳转有两种方式，一种是`<router-link to="..."/>`，还有一种就是编程式导航：`push和replace`。

原理：`router.push`会向history栈添加一个新的记录，当用户点击浏览器的回退按钮会回到之前的url；
`<router-link to="..."/>`内部也是调用了这个方法。

```js
import { useRouter } from 'vue-router'
const router = useRouter()
router.push() //当调用此方法时，会向history中添加一条记录
router.replace() //当调用此方法时，会向history中替换一条记录

router.push({ path: '/home', replace: true })
// 相当于
router.replace({ path: '/home' })

//一些参数配置的补充：
const username = 'eduardo'
router.push(`/user/${username}`) // -> /user/eduardo
router.push({ path: `/user/${username}` }) // -> /user/eduardo
router.push({ name: 'user', params: { username } }) // -> /user/eduardo
router.push({ path: '/user', params: { username } }) // -> /user ❌parmas不能和path一起使用
```

### 命名路由

```js
<router-link :to="{ name: 'user', params: { username: 'erina' }}">
  链接到一个命名路由，可向router-link的to传递一个对象
</router-link>

const router = {
  routes:[{
    path:'/good/:id',
    name:'goodsDetatils',
    component:XXX
  }]
}
```

### 重定向和别名

- 重定向可以是根路径、对象和函数，会改变路径
```js
const router = {
  routes:[{
    path:'/good/:id',
    name:'goodsDetatils',
    component:XXX,
    // redirect:'/',
    // redirect:{name:'xxx'},
    redirect:(to) => {
      return{ name:'xxx' }
    }
  }]
}
```
- 别名就是起了一个小名，不会改变路径
```js
const router = {
  routes:[{
    path:'/good/:id',
    name:'goodsDetatils',
    component:XXX,
    alias:'/goodsDetails/:id'//当前XXX组件有两个可以匹配的路径path和alias
  }]
}
```
### 命名视图
```html
<!--当同时存在多个router-view时，需使用name和components告诉vue到底渲染在哪里-->
<div>
  <router-view name="menu"></router-view>
  <router-view></router-view>
</div>
```
```js
const router = {
  routes:[{
    path:'/good/:id',
    name:'goodsDetatils',
    components:{
      menu:Menu,
      default:goodsDetatils
  }}]
}
```
### 不同的路由模式

- Hash模式

地址栏中`#`后的内容后端不会解析。对SEO有利，可使用html5模式。
```js
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [],
})
```

- html5模式
当使用history模式时，url中没有#；但可能出现：由于vue是一个单页面的客户端应用，
若没有适当的服务器配置，会出现404错误。
```js
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [],
})
```

## 二、Vue Router 进阶

### 导航守卫

执行过程：
1. 导航被触发
2. 在失活的组件中调用`beforeRouteLeave`守卫
3. 调用全局的`beforeEach`守卫
4. 在重用的组件里调用 `beforeRouteUpdate` 守卫(2.2+)。
5. 在路由配置里调用 `beforeEnter`
6. 解析异步路由组件。
7. 在被激活的组件里调用 `beforRouterEnter`
8. 调用全局的 `beforeResolve` 守卫(2.5+)。
9. 导航被确认。
10. 调用全局的 `aferEach` 钩子。
11. 触发 DOM 更新。
12. 调用 `beforeRouteEnter` 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。

### 全局前置守卫
```js
const router = createRouter({ ... })
router.beforeEach((to, from, next) => {
  // to要去的路由，from当前路由对象，next是否继续
  return false // 返回 false 以取消导航
})
```

### 全局解析守卫 

`router.beforeResolve`和`router.beforeEach`相同处：参数一致，每次导航时都会触发；<br>
不同的是执行时间：解析守卫刚好会在导航被确认之前、所有组件内守卫和异步路由组件被解析之后调用。
```js
router.beforeResolve(async to => {
  if (to.meta.requiresCamera) {
    try {
      await askForCameraPermission()
    } catch (error) {
      if (error instanceof NotAllowedError) {
        // ... 处理错误，然后取消导航
        return false
      } else {
        // 意料之外的错误，取消导航并把错误传给全局处理器
        throw error
}}}})
```

### 全局后置钩子

和守卫钩子不同之处：没有next参数。
```js
router.afterEach((to, from) => {
  sendToAnalytics(to.fullPath)
})
```

### 路由独享守卫

beforeEnter只在进入路有时被触发，不会在parmas、query、hash改变时触发。可直接在路由配置上定义：
```js
const routes = [
  {
    path: '/users/:id',
    component: UserDetails,
    beforeEnter: (to, from) => {
      // reject the navigation
      return false
    },
  }
]
```

### 组件内守卫

- beforeRouteEnter
- beforeRouteUpdate
- beforeRouteLeave
```js
const UserDetails = {
  template: `...`,
  beforeRouteEnter(to, from) {
    // 在渲染该组件的对应路由被验证前调用
    // 不能获取组件实例 `this` ！
    // 因为当守卫执行时，组件实例还没被创建！
  },
  beforeRouteUpdate(to, from) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
    // 由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from) {
    // 在导航离开渲染该组件的对应路由时调用
    // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`
  }
}
```
### 数据获取

重点是路由获取的时机。一是导航完成后获取，二导航完成前获取。
```js
//完成后获取：
created() {
  // watch 路由的参数，以便再次获取数据
  this.$watch(
    () => this.$route.params,
    () => {
      this.fetchData()
    },
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    { immediate: true }
  )
},
//完成前获取：
beforeRouteEnter(to, from, next) {
  getPost(to.params.id, (err, post) => {
    next(vm => vm.setData(err, post))
  })
},
```
### 路由懒加载

打包构建时，js包会变得很大，影响页面加载。若能把不同路由对应的组件分割成不同的代码块，当路由访问时才加载对应组件，会更高效。

Vue Router支持开箱即用的[动态导入](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Dynamic_Imports)，意味着可以用动态代替静态：

```js
// 将import UserDetails from './views/UserDetails.vue'
// 替换成
const UserDetails = () => import('./views/UserDetails.vue')

const router = createRouter({
  routes: [{ path: '/users/:id', component: UserDetails }],
})
```

### 导航故障

- 问题：使用`router-link`时，Vue Router 会自动调用 `router.push`触发导航。可能会出现仍然停留在当前页面的故障：
  1. 用户已经位于他们正在尝试导航的页面；
  2. 一个导航守卫通过调用`renturn false`中断了此次导航；
  3. 当前的导航守卫还没有完成，一个新的导航守卫出现；
  4. 被重定向了；
  5. 一个导航守卫抛出了`Error`

- 检测导航故障
1. 📌使用await router.push，返回的Promise解析值是Navigation Failure。若返回false或undefined,可以区分导航时候离开了当前位置：
```js
const navigationResult = await router.push('/my-profile')

if (navigationResult) {
  // 导航被阻止
} else {
  // 导航成功 (包括重新导航的情况)
  this.isMenuOpen = false
}
```
2. Navigation Failure带有一些额外的属性Error实例，这些属性为我们提供了足够的信息，让我们知道哪些导航被阻止了以及为什么被阻止了。要检查导航结果的性质，请使用 isNavigationFailure 📌函数：
```js
import { NavigationFailureType, isNavigationFailure } from 'vue-router'

// 试图离开未保存的编辑文本界面
const failure = await router.push('/articles/2')

if (isNavigationFailure(failure, NavigationFailureType.aborted)) {
  // 给用户显示一个小通知
  showToast('You have unsaved changes, discard and leave anyway?')
}
```
有三种不同类型：
- aborted：在导航守卫中返回 false 中断了本次导航。
- cancelled： 在当前导航还没有完成之前又有了一个新的导航。比如，在等待导航守卫的过程中又调用了 router.push。
- duplicated：导航被阻止，因为我们已经在目标位置了。

## 三、手写 Vue Router

```js
//myVueRouter.js（v3版本）
let Vue = null;
class HistoryRoute {
    constructor() {
        this.current = null;
    }
}
class VueRouter {
    constructor(options) {
      this.mode = options.mode || 'hash';
      this.routes = options.routes || []; //你传递的这个路由是一个数组表
      this.routesMap = this.createMap(this.routes);//存取路由和组件的映射关系
      this.history = new HistoryRoute();
      this.init();
    }
    init() {
      if (this.mode === 'hash') {
        // 先判断用户打开时有没有hash值，没有的话跳转到#/
        location.hash ? '' : (location.hash = '/');
        window.addEventListener('load', () => {
          this.history.current = location.hash.slice(1);
        });
        window.addEventListener('hashchange', () => { //v4中源码已经不使用hashchange，都是popstate
          this.history.current = location.hash.slice(1);
        });
      } else {
        location.pathname ? '' : (location.pathname = '/');
        window.addEventListener('load', () => {
          this.history.current = location.pathname;
        });
        window.addEventListener('popstate', () => {
          this.history.current = location.pathname;
        });
      }
    }
    createMap(routes) {
      return routes.reduce((pre, current) => {
        pre[current.path] = current.component;
        return pre;
      }, {});
    }
}
VueRouter.install = function (v) { //install作为一个插件和app.use产生关联
  Vue = v;
  Vue.mixin({
    beforeCreate() { //初始化
      if (this.$options && this.$options.router) {
        // 如果是根组件
        this._root = this; //把当前实例挂载到_root上
        this._router = this.$options.router;
        Vue.util.defineReactive(this, 'xxx', this._router.history);//将history变成了一个响应式
      } else {
        //如果是子组件
        this._root = this.$parent && this.$parent._root;
      }
      Object.defineProperty(this, '$router', {
        get() {
          return this._root._router;
        },
      });
      Object.defineProperty(this, '$route', {
        get() {
          return this._root._router.history.current;
        },
      });
    },
  });
  Vue.component('router-link', {
    props: {
      to: String,
    },
    render(h) {
      let mode = this._self._root._router.mode; //获取路由模式
      let to = mode === 'hash' ? '#' + this.to : this.to;
      return h('a', { attrs: { href: to } }, this.$slots.default);
    },
  });
  Vue.component('router-view', {
    render(h) {
      let current = this._self._root._router.history.current;
      let routeMap = this._self._root._router.routesMap;
      return h(routeMap[current]);
    },
  });
};

export default VueRouter;
```

## 四、SSR

客户端渲染、服务端渲染、同构（Isomorphic，一个逻辑执行两次，服务端和客户端）

### Vue SSR

- 核心使用`creatSSRApp`和`express`实现
```js
import { createSSRApp } from 'vue';

export function createApp() {
  return createSSRApp({
    data: () => ({ count: 1 }),
    template: `<div @click="count++">{{ count }}</div>`,
  });
}
```
```js
import express from 'express';
import { renderToString } from 'vue/server-renderer';
import { createApp } from './app.js';

const server = express();

server.get('/', (req, res) => {
  const app = createApp();

  renderToString(app).then(html => {
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vue SSR Example</title>
        <script type="importmap">
          {
            "imports": {
              "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
            }
          }
        </script>
        <script type="module" src="/client.js"></script>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
    `);
  });
});

server.use(express.static('.'));

server.listen(3000, () => {
  console.log('ready');
});
```
- 常见方案

[Nuxt](https://nuxt.com/)(生产环境), 一个构建于 Vue 生态系统之上的全栈框架，它为编写 Vue SSR 应用提供了丝滑的开发体验。更棒的是，你还可以把它当作一个静态站点生成器来用;

[Quasar](https://quasar.dev/),一个基于 Vue 的完整解决方案，它可以让你用同一套代码库构建不同目标的应用，如 SPA、SSR、PWA、移动端应用、桌面端应用以及浏览器插件。除此之外，它还提供了一整套 Material Design 风格的组件库;

[Vite](https://cn.vitejs.dev/guide/ssr),Vite提供了内置的Vue服务端渲染方案，但设计上片底层；

[Vite SSR](https://vite-plugin-ssr.com/),不偏底层，直接使用的社区插件。