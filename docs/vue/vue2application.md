---
title: 关于Vue2应用层的N个问题
date: 2023/12/07
tags:
  - vue
categories:
  - 前端开发
---

## 1、Vue2中给对象添加新属性时，界面不刷新怎么办？

eg:一个obj,如果直接obj.newAbr,console.log数据更新页面不更新

### 原理

Vue2通过`Object.defineProperty`实现数据响应式,通过set和get函数触发数据的响应式。若直接通过obj.newAbr是无法触发的，Vue不允许在已经创建的实例动态添加新的响应式。

Vue3 是通过proxy实现数据响应式，直接动态添加新属性可实现数据响应式更新。

```js
const obj = {}
Object.defineProperty(obj,'abr',{
  get(){ return val }
  set(newVal){
    if(newVal!==val){
      val = newVal
    }
  }
})
```
### 解决方案

1. this.$set(data,'key',value)，对象添加少量属性；$set不能为已存在的key添加监测对象,可以先删除要更改的属性再赋值
   ```js
   delete record[type] // 解决$set失效且不能用$forceUpdate的方法，缺点可能导致输入框不能连续输入值
   this.$set(record,type,e)
   ```
2. $forceupdate,仅仅影响实例本身和插入插槽内容的子组件，不是所有子组件；强制刷新，可能导致页面滚动条上移等情况
3. arr = arr.filter(i=>i)
4. Object.assign({},obj,{newAttr:1,newAttr2:2,...}),给对象添加大量新属性
5. $nextTick

## 2、Vue中组件通信方式

### 背景

Vue中每个.vue都是单独的组件，组件有独立作用域，数据无法共享；通信就是让组件中间通讯，构成有机的完整系统。我通过组件间的关系给通信方式进行分类。

### 方式

1. 父子关系
   
   `props/$emit`
   :::: code-group
   ::: code-group-item 子组件

   ```js
    props:{
      obj:{
        type:Object,
        default:()=>{},
        require:true
      }
    }

    //$emit触发自定义事件
    this.$emit('add',1)
   ```
   :::
   ::: code-group-item 父组件,绑定监听器获取到子组件的数据
   ```vue
    <Children obj="{}" @add="AddNumber($event)"/>
   ```
   :::
   ::::

   `ref`
   ```vue
   <!-- 父组件 -->
   <Children ref="foo"/>
   
   this.$refs.foo//获取子组件实例，拿到对应数据
   ```
2. 兄弟关系
   
   `eventBus`

   又称时间总线，作为所有组件共享的事件中心，发送和接受事件皆可。


   缺点：单页面应用的vue,某个页面刷新后与之相关的eventbus会移除；业务复杂时会多次触发eventbus的监听，vue页面销毁时，同时移除eventbus事件的监听；两个页面定义了同一个事件名，没有用$off销毁，会同时触发。

   ```js
   <!-- 1.初始化，两种方式 -->
   import Vue from 'vue'
   export defalut new Vue()//通过js文件方式引入

   vue.prototype.$bus = new Vue();//main.js中将$bus挂载到vue实例上

   <!-- 2.发送事件，在组件中引入总线文件 ，使用 EventBus.$emit(‘事件名称’，数据)进行发送数据 -->
   import EventBus from '../assets/EventBus'
   export default {
    methods:{
     sendMessageToB(){
      EventBus.$emit("sendMessage" , "这是从A组件中传递到兄弟组件的内容")
     }
    }
   }

   <!-- 3.接受事件，在组件中引入总线文件 ，使用 EventBus.$on(‘emit事件名’，callback(payload1...))进行接受事件；
   在一个组件中某事件如果只监听一次的话，可以使用 EventBus.$once('事件名称',callBack(payload1...)); -->
   import EventBus from '../assets/EventBus'
   export default {
    name: "ComponentB.vue",
    data(){
     return{
      message:""
     }
    },
    mounted(){
     let _this = this;
     EventBus.$on("sendMessage" , (msg) => {
        _this.message = msg
     })
    },
   }

   <!-- 4.移除事件 -->
   import EventBus from '../assets/EventBus'
   EventBus.$off('sendMessage', {}) // 移除指定事件
   EventBus.$off('sendMessage') // 移除应用内所有对此事件的监听
   EventBus.$off() // 移除应用内所有事件的监听

   <!-- 5.全局使用，先在main.js中注册 -->
   this.$bus.$on("sendMessage" , (msg) => {
       _this.message = msg
   })
   this.$bus.$emit("sendMessage" , "这是从D组件中传递到兄弟组件的内容")
   ```

   `$parent`
  ```js
  this.$parent.$on('add',this.add)//一个兄弟组件
  this.$parent.$emit('add')//另一个兄弟组件
  ```
3. 祖先与后代关系
   `$attr/$listeners`和`provide/inject`

4. 复杂关系
   `VUEX`和`三种本地储存localStorage\sessionStorage\cookies`

## 3、自定义指令和应用场景

### 简述

`Custom directive`是Vue中扩展语法的机制，可以在DOM中添加自定义行为，在元素插入、更新和移除时进行相应操作。

### 应用场景

1. 操作DOM，对元素的样式、属性、事件绑定都可通过对应的钩子函数进行更改。如用户自定义头像 图片地址无效时，替换成系统默认头像;
   <img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/pieces/directive_func.jpg" />

2. 表单验证，输入自定义指令监听输入框值的变化，并根据自定义的验证规则校验;
3. 权限控制，根据用户权限显隐元素：
   ```js
   import Vue from 'vue'
   import store from '../store'//权限储存在仓库中

   //监测是否有权限
   export const buttonPermissions = Vue.directive('btn-key',{
    /**
     * inserted:被绑定元素插入父节点时调用
     * el：指令用来绑定的元素，直接操作DOM
     * binding.value: 指令的绑定值
    */
    inserted(el,binding){
      let buttonKey = binding.value
      //代表某个元素通过需要权限验证
      if(buttonKey){
        let key = checkKey(buttonKey)
        if(!key){
          //没有权限
          el.remove()//删除按钮
        }
      }else{
        throw new Error('缺少唯一指令')
      }
    }
   })
   // 检测传入的元素key是否可以显示
   function checkKey(key) {
      // 获取权限数组
      let permissionData = store.getters.btnPermission ? store.getters.btnPermission : [] ;
      //如果传入的元素key不在权限数组里，则不可显示
      let index = permissionData.findIndex(item => item.code === key)
      if(index > -1) {
        return true;
      }else{
        return false;
      }
    }
    ```
  4. 第三方库集成，创建一个自定义指令，初始化和配置第三方库并调用；
  5. 动画过渡和自定义效果，在自定义指令中监听过渡钩子函数，操作元素的样式或类名实现过渡效果。

## 4.$route和$router的区别

```js
this.$route.query,this.$router.meta //$route 是Vue当前路由信息的对象，如查询参数、路径等信息

this.$router.push(...) // VueRouter的实例对象，用于控制导航和路由操作，指定跳转

```
## 5.Vue中的修饰符和应用场景

### 简述

计算机程序中，修饰符是限制类型的一种符号，Vue中的修饰符大多用于处理DOM的细节。

### 应用场景

1. 表单修饰符：如input标签中 v-model后有
     - trim：过滤用户输入的空格
     - lazy：input光标离开后才触发
     - number：限制输入的类型为数字

2. 事件修饰符：如@click.stop
    - stop 阻止冒泡 相当于e.stopPropagation
    - prevent 组织事件默认行为 相当于event.preventDefault
    - self 当前元素自身触发的函数
    - once 只触发一次
    - capture 事件触发从元素顶部往下触发
    - passive 针对移动端 使用onscroll性能变差的问题，`<div v-on:scroll.passive="onScroll">...</div>`,滚动事件的默认行为会立即触发，不会等待onScroll完成
    - native 让组件变成html内置标签监听根元素的原生事件，因为v-on只会监听自定义事件

3. 按键修饰符、鼠标修饰符(不常用)
    - 如keyCode,监听特定键盘按下
4. sync修饰符:父子组件中，子组件props的双向绑定
   ```vue
    <!-- 父组件 -->
    <Compt :message.sync="bar"/>
    <!-- 子组件 -->
    this.$emit('update:message',value)
   ```

## 6.单页应用如何提高加载速度

### 1.Vue中提供了代码分割和懒加载的方式

- Vue提供了两种**代码分割**的方式：动态导入（Dynamic Import）或第三方库（Vue推荐使用`@babel/plugin-syntax-dynamic-import`插件支持动态导入）；

- Vue中的**按需加载**可以使用webpack和ESmodule实现，如：
```js
// 在vue-router懒加载
const router = new Router({
  routes:[
    {
      path:'...',
      component:()=>import('./...')
    }
  ]
})

// 在webpack懒加载,创建一个User组件，并定义为异步组件，webpack将打包名为user.chunk.js的单独文件
const User = () => import(/*webpackChunkName:"user"*/'./...')
```
[相关文章](https://www.php.cn/faq/566608.html)

### 2.Vue内置缓存机制和浏览器缓存的应用

- Vue提供了**内置的缓存机制**，`keep-alive`组件包裹需要缓存的组件，name属性标记，在需要缓存的组件中使用activated和deactived钩子函数在组件激活和失活时进行操作。

- 除了内置，使用**浏览器缓存**来提高页面加载速度和性能。浏览器可以将静态文件（js\image\css等）缓存到本地，减少服务器的负载：
  - 服务端设置缓存策略，如缓存时间和类型
  - 前端代码中设置请求头，包括Cache-control、Expires

[相关文章](https://www.itguest.com/post/gafcc2b7.html)

### 3.预加载关键资源

- 是**关键资源**才会预加载，Vue脚手架中默认开启了preload和prefetch,有些项目过大时会变成首屏加载过重的元凶,解决方法：
```js
// vue.config.js的配置
chainWebpack: config => {
  // 移除 preload(预载) 插件
  config.plugins.delete('preload')
  // 移除 prefetch(预取) 插件
  config.plugins.delete('prefetch')
}
```
- 在首次渲染之前，提前预加载关键资源，如首页所需要的图片、css\js文件等，保证关键内容的呈现：
  [vue图片预加载](https://blog.csdn.net/weixin_35749786/article/details/129058790?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-1-129058790-blog-129066529.235%5Ev39%5Epc_relevant_anti_t3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-1-129058790-blog-129066529.235%5Ev39%5Epc_relevant_anti_t3&utm_relevant_index=2)

### 4.启用Gzip压缩

使用服务器端的Gzip压缩算法对文件进行压缩，减少传输时间和带宽消耗。

[相关文章](https://blog.csdn.net/mingtian18/article/details/128243593)

### 5.使用CDN

使用内容式分发网络即全局式负载均衡技术[百度百科](https://baike.baidu.com/item/CDN%E6%8A%80%E6%9C%AF/2277971?fr=ge_ala)，提高文件下载速度和质量。

### 6.优化API请求

减少API调用的数量，使用缓存和延迟加载等优化API请求的效率。

[相关文章](https://www.51cto.com/article/765922.html)

### 7.使用服务器渲染（SSR）

使用SSR生成HTML,减少客户端渲染使用的时间和资源；但同时可能会增加服务器的负担和开发的复杂度。

[相关文章](https://baijiahao.baidu.com/s?id=1774760404055703066&wfr=spider&for=pc)

## 7.Vue中的v-for和v-if为什么不能同时用在一个元素上

### 原理

- `v-if`基于条件true或false触发渲染；`v-for`基于数组渲染列表，需设置独一无二的key值，便于`diff`算法的优化。

- 两者都是Vue模板系统指令中的指令，`Vue`进行模板编译时，会将指令系统编译成可执行的`render函数`

- 两者在不同Vue版本中优先级不同：
  - Vue2 中，v-for优先级更高
  - Vue3 中，v-if优先级更高，做了v-if的提升优化，去除无意义的计算，但同时会带来无法取到v-for当中无法遍历item的问题

- 两者用在同一个元素上，每次渲染都会先循环再判断条件，造成性能浪费

### 解决方案

- 外层嵌套template（页面不生成dom节点），先判断，再循环
  ```html
  <template v-if="isShow">
    <p v-for="item in items">
  </template>
  ```
- 若条件出现在循环内部，通过计算属性提前过滤不需要显示的项
  ```js
  computed: {
    items: function() {
      return this.list.filter(function (item) {
        return item.isShow
      })
    }
  }
  ```

  ## 8.Vue项目如何部署

  前后端分离开发模式下，均独立部署，前端只需将最后构建包上传到目标服务器的指定静态目录下即可。

  - linux命令，scp 上传 user为主机登录用户，host为主机外网ip, xx为web容器静态资源路径
  ```bash
  scp dist.zip user@host:/xx/xx/xx
  ```

  - 让项目跑起来，以`nginx`为例
  ```js
  server {
    listen  80;
    server_name  www.xxx.com;

    location / {
      index  /data/dist/index.html;
    }
  }
  ```

  - 配置完重启`nginx`
  ```bash
  // 检查配置是否正确
  nginx -t 

  // 平滑重启
  nginx -s reload
  ```
  - 上面只是提到最简单也是最直接的一种布署方式。**自动化，镜像，容器，流水线布署**，本质也是将这套逻辑抽象，隔离，用程序来代替重复性的劳动，本质一致。

  ## 9.部署完成后刷新404，为什么hash模式不会出现

  ### 原理

  - `404`表示链接指向的资源不存在
  - Vue是`SPA`（单页面应用，一种网络应用程序，所有用户交互通过动态重写页面，最中产物只有index.html一个文件）。部署时nginx配置：在地址栏输入server_name,会打开dist下的文件，最后路由跳转到对应location:
  ```bash
  server {
  listen  80;
    server_name  www.xxx.com;

    location / {
      index  /data/dist/index.html;
    }
  }
  ```

  `history模式`下,当找不到对应路径文件时，会显示404错误

  - `hash模式`下，路由路径中有 **#**，如 website.com/#/login, hash 的值为 #/login。hash值虽在url中，但不包括在http请求中；所有和服务端的指定路径无关。

  ### 解决方案

  - 产生问题的本质是通过js的执行切换路由，当进入子路由刷新页面，没找到对应路径文件报错404
  - 只需将所有内容都重定向到index.html，把路由交给前端处理。对nginx配置文件`.conf`,添加`try_files $uri $uri/ /index.html;`
  ```bash
  server {
    listen  80;
    server_name  www.xxx.com;

    location / {
      index  /data/dist/index.html;
      try_files $uri $uri/ /index.html;
    }
  }
  ```
  - 更新重启 `nginx -s reload`
  - 这样服务器就不会返回404,需要在前端配置404页面用于提示用户
    ```js
    const router = new VueRouter({
      mode: 'history',
      routes: [
        { path: '*', component: NotFoundComponent }
      ]
    })
    ```
## 10.浏览器刷新后，Vuex中的数据消失？

### 原理

Vuex中store的数据保存在运行内存中，页面刷新时，重新加载Vue实例，store中的数据会被重新复制初始化。

### 解决方案

1. 本地储存结合，应用token持久化
   ```js
   created() {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
   },
   ```
2. vuex-along的使用
   在`store/index.js`配置：
   ```js
   import VueXAlong from 'vuex-along' //导入插件
   export default new Vuex.Store({
    //modules: {
        //controler  //模块化vuex
    //},
    plugins: [VueXAlong({
        name: 'store',     //存放在localStroage或者sessionStroage 中的名字
        local: false,      //是否存放在local中  false 不存放 如果存放按照下面session的配置
        session: { list: [], isFilter: true } //如果值不为false 那么可以传递对象 其中 当isFilter设置为true时， list 数组中的值就会被过滤调,这些值不会存放在seesion或者local中
    })]
   });
   ```


