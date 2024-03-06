---
title: Vue状态管理
date: 2024/02/28
tags:
  - vue
categories:
  - Vue
---

## 一、前端状态管理出现的意义及解决的现实问题

### 前端状态管理解决的问题：
- 方便组件通信（组件层层嵌套，单靠props等通信方式传递非常麻烦）
- 全局状态管理（比如登录情况下用户信息需全局获取）
- 状态持久化（页面刷新不持久）

### 为什么需要状态管理

提到概念`单向数据流`

## 二、Vuex及pinia对比和使用

### Vuex

集中式存储管理应用所有组件的状态。Vuex核心包括：state、getters、mutations、actions、mudules

:::: code-group
::: code-group-item vuex在vue3中的使用

```js
import { createStore } from 'vuex'
export const store = ({
  state(){
    return{ count:0 }
  },
  mutations:{
    increment(state){
      state.count++
    }
  },
  actions:{
    incrementActions(context){
      context.commit('increment')
    }
  }
})
//main.js:
import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
const app = createApp(App).mount('#app')
app.use(store)

//组件中使用：
store.commit('increment')//调用mutations
store.dispatch('incrementActions')//调用actions
```
:::
::: code-group-item state

```vue
<template>
  <div>
    🧡{{$store.state.count}}
    💛{{countAlias}}
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default{
    computed:mapState({
      count:state => state.count,//🧡
      count:'countAlias',//💛重新命名
      count(state){
        return state.count + 1//💚需要使用依赖仓库值计算
      }
    })
    //另一种写法,mapState完成了仓库与本地组件数据的映射：
    computed:{ ...mapState['xxx']}
  }
</script>
```
:::
::: code-group-item getters

```js
//可以将getters理解为全局的computed. store中定义：
{
  state:{users:{
    {id:1,name:'jery',gender:'male'},
    {id:2,name:'mary',gender:'female'},
  }},
  getters:{
    maleLength(state){
      return state.users.filter(i => i.gender === 'male').length
    }
  }
}
//使用getters:
{{$store.getters.maleLength}}//方法一

{{maleLength}}
computed:{...mapGetters(['maleLength'])}//方法二

{{newMaleLength}}
computed:{...mapGetters({'maleLength':'newMaleLength'})}//重新命名
```
:::

::: code-group-item mutations
```js
//mutations是vuex中的操作唯一能改变state状态的函数
//且必须是同步函数(vue为了更方便的去跟踪数据状态的变化)
this.$store.state.count++ //error
this.$store.commit('xxx') //right

//使用,如何传参
mutations:{
  increment(state,payload){
    state.count += paload.newValue
  }
}
this.$store.commit('xxx',{ newValue1,newValue2,... })

//mapMutations用在methods中 
methods:{...mapMutations['increment']}
```
:::

::: code-group-item actions
```js
//actions主要用来做异步操作，mutations是同步
mutations:{ increment(state){...} }
actions:{
  incrementAction(context){
    setTimeout(() => {
      context.commit('increment')
    },1000)
  }
}
//模板中使用actions:
this.$store.dispatch('incrementAction')//方法一

methods:{ ...mapActions['incrementAction'] }//方法二
methods:{ ...mapActions({'incrementAction':'newName'}) }//重新命名
```
:::

::: code-group-item modules
```js
//定义：
{
  modules:{
    users：{ state:{...},mutations:{...} },
    foods: { state:{...},mutations:{...} },
  }
}
//访问：工作中不建议使用，定义太复杂；这里涉及到命名空间的概念
this.$store.state.user
```
:::
::::

### Pinia

1. state、getters、actions
2. pinia 没有命名空间
3. pinia 是平面的数据结构，可以任意交叉组合

#### pinia的使用

- 安装
```bash 
yarn add pinia --save
```

- 使用(main.js)
```js
import { createPinia } from 'pinia'
app.use(createPinia())
```

- 定义状态库(store.js)
:::: code-group
::: code-group-item 定义方式一（选项式）

```js
import { defineStore } from 'pinia'
//定义名字最好用use开头，因为返回值是一个hooks
//defineStore的第一个参数是id名称，必须确保这是全局唯一的，原理部分会说明为什么
export const useOptionsStore = defineStore('optionStore',{
  state:() => {
    return{ count:0 }
  },
  getters:{
    getCount:(state) => {
      return state.count
    }
  },
  actions:{
    setCount:(newCount) => {
      state.count = newCount
    }
  }
})
```

:::
::: code-group-item 定义方式二（组合式）

```js
import { defineStore } from 'pinia'
import { useRef } from 'vue' 

export const useSetupStore = defineStore('setupStore',() => {//与选项式不同，第二个参数是函数
  const countRef = useRef(0)
  //useRef,vue3中自定义解析和引用组件的API，允许在组件内使用ref引用组件实例，无需通过setup手动创建
  
  const getCount = computed(() => {
      return countRef
  })
  const setCount = (newCount) => {
    countRef.value = newCount
  }
  return { countRef,getCount,setCount }
})
```

:::
::::


## 三、Vuex实现原理和初始化过程

## 四、VueClI使用和原理剖析

## 五、VueCLI插件和Preset

## 六、VueCLI配置实战

