---
title: 详解vue组件三大核心概念
date: 2022/06/07
tags:
  - vue
categories:
  - Vue
---

## 前言

本文主要介绍属性、事件和插槽这三个 vue 基础概念、使用方法及其容易被忽略的一些重要细节。如果你阅读别人写的组件，可以从这三个部分展开，它们可以帮助你快速了解一个组件的所有功能。

## 属性

### 1.自定义属性 props

prop 定义了这个组件有哪些可配置的属性，组件的核心功能也都是它来确定的。写通用组件时，props 最好用对象的写法，这样可以针对每个属性设置类型、默认值或自定义校验属性的值，这点在组件开发中很重要，然而很多人却忽视，直接使用 props 的数组用法，这样的组件往往是不严谨的。
:::: code-group
::: code-group-item 父组件

```html
<props
  name="属性"
  :type="type"
  :is-visible="false"
  :on-change="handlePropChange"
  :list="[22,33,44]"
  title="属性Demo"
  class="test1"
  :class="['test2']"
  :style="{ marginTop: '20px' }"
  style="margin-top: 10px"
>
</props>
```

:::
::: code-group-item 子组件

```js
props: {
  name: string;
  type: {
    validator: (value) => {
      //从父级传入的 type，它的值必须是指定的 'success', 'warning', 'danger'中的一个，如果传入这三个以外的值，都会抛出一条警告
      return ['success', 'warning', 'danger'].includes(value);
    };
  },
  onchange:{
    type:function,
    default:()=>{}
  },
  isVisible:{
    type:Boolean,
    default:false
  },
  list:{
    type:Array,
    default:()=>[]//对象或数组默认值必须从一个工厂函数获取
  }
}
```

:::
::::
从上面的例中，可以得出 props 可以显示定义一个或一个以上的数据，对于接收的数据，可以是各种数据类型，同样也可以传递一个函数。

### 2.inheritAttrs

这是 2.4.0 新增的一个 API，默认情况下父作用域的不被认作 props 的特性绑定将会“回退”且作为普通的 HTML 特性应用在子组件的根元素上。可通过设置 inheritAttrs 为 false，这些默认行为将会被去掉。注意：这个选项不影响 class 和 style 绑定。
上个例中，title 属性没有在子组件中 props 中声明，就会默认挂在子组件的根元素上，如下图所示：

### 3.data 与 props 区别

1. 相同点：两者选项里都可以存放各种类型的数据，当行为操作改变时，所有行为操作所用到和模板所渲染的数据同时都会发生同步变化。

2. 不同点：
   data 被称之为动态数据，在各自实例中，在任何情况下，我们都可以随意改变它的数据类型和数据结构，不会被任何环境所影响。
   props 被称之为静态数据，在各自实例中，一旦在初始化被定义好类型时，基于 Vue 是单向数据流，在数据传递时始终不能改变它的数据类型，而且不允许在子组件中直接操作 传递过来的 props 数据，而是需要通过别的手段，改变传递源中的数据。

### 4.单向数据流

这个概念出现在组件通信。props 的数据都是通过父组件或者更高层级的组件数据或者字面量的方式进行传递的，不允许直接操作改变各自实例中的 props 数据，而是需要通过别的手段，改变传递源中的数据。那如果有时候我们想修改传递过来的 prop,有哪些办法呢?

1. 方法 1 过渡到 data 选项中

   ```js
   //在子组件的 data 中拷贝一份 prop，data 是可以修改的
   export default {
     props: { type: String },
     data() {
       return {
         currentType: this.type,
       };
     },
   };
   ```

   在 data 选项里通过 currentType 接收 props 中 type 数据，相当于对 currentType= type 进行一个赋值操作，不仅拿到了 currentType 的数据，而且也可以改变 currentType 数据。

2. 方法 2：利用计算属性

```js
export default {
  props: {
    type: String,
  },

  computed: {
    normalizedType: function () {
      return;

      this.type.toUpperCase();
    },
  },
};
```

以上两种方法虽可以在子组件间接修改 props 的值，但如果子组件想修改数据并且同步更新到父组件，却无济于事。在一些情况下，我们可能会需要对一个 prop 进行『双向绑定』，此时就推荐以下这两种方法：

3. 方法 3：使用.sync

:::: code-group
::: code-group-item 父组件

```vue
<template>
  <div class="hello">
    <div>
      <p>父组件msg：{{msg}}</p>
      <p>父组件数组：{{arr}}</p>
    </div>
    <button@click="show = true">打开model框</button><br/>
    <demo:show.sync="show":msg.sync="msg":arr="arr"></demo>
  </div>
</template>
<script>
  export default{
    name:'Hello',
    components:{Demo},
    data(){
      return{
        show:false,
        msg:"模拟model框",
        arr:[1,2,3]
      }
    }
  }
</script>
```

:::
::: code-group-item 子组件

```vue
<template>
  <div v-if="show" class="border">
    <div>子组件msg:{{ msg }}</div>
    <div>子组件数据:{{ arr }}</div>
    <button @click="closeModel">关闭model框</button>
    <button @click="$emit('update:msg', '淦')">改变文字</button>
    <button @click="arr.push('前端')">改变数组</button>
  </div>
</template>
<script>
export default {
  props: {
    msg: { type: String },
    show: { type: Boolean },
    arr: { type: Array },
  },
  methods: {
    closeModel() {
      this.$emit('update:show', false);
    },
  },
};
</script>
```

:::
::::
父组件向子组件 props 里传递了 msg 和 show 两个值，都用了.sync 修饰符，进行双向绑定。
不过.sync 虽好，但也有限制，比如：
1）不能和表达式一起使用`如 v-bind:title.sync="doc.title + '!'"是无效的`；<br>
2）不能用在字面量对象上`如 v-bind.sync="{ title: doc.title }"是无法正常工作的`。

4. 方法 4：
   将父组件中的数据包装成对象传递给子组件
   这是因为在 JavaScript 中对象和数组是通过引用传入的，所以对于一个数组或对象类型的 prop 来说，在子组件中改变这个对象或数组本身将会影响到父组件的状态。比如上例中在子组件中修改父组件传递过来的数组 arr,从而改变父组件的状态。

### 5.向子组件中传递数据时加和不加 v-bind？

那如果想通过字面量进行数据传递时，如果想传递非 String 类型，必须 props 名前要加上 v-bind，内部通过实例寻找，如果实例方没有此属性和方法，则默认为对应的数据类型。

```bash
:msg = '11111' //Number
:msg = 'true' //Bootlean
:msg ='()=>{console.log(1)}'//Function
:msg = '{a:1}' //Object
```

## 事件

### 1.事件驱动与数据驱动

用原生 JavaScript 事件驱动通常是这样的流程：

1. 先通过特定的选择器查找到需要操作的节点 -> 给节点添加相应的事件监听
2. 然后用户执行某事件（点击，输入，后退等等） -> 调用 JavaScript 来修改节点

这种模式对业务来说是没有什么问题，但是从开发成本和效率来说会比较不理想，特别是在业务系统越来越庞大的时候。另一方面，找节点和修改节点这件事，效率本身就很低，因此出现了数据驱动模式。

Vue 的一个核心思想是数据驱动。所谓数据驱动，是指视图是由数据驱动生成的，我们对视图的修改，不会直接操作 DOM，而是通过修改数据,其流程如下：

用户执行某个操作 -> 反馈到 VM 处理（可以导致 Model 变动） -> VM 层改变，通过绑定关系直接更新页面对应位置的数据

可以简单地理解：数据驱动不是操作节点的，而是通过虚拟的抽象数据层来直接更新页面。主要就是因为这一点，数据驱动框架才得以有较快的运行速度（因为不需要去折腾节点），并且可以应用到大型项目。

### 2.修饰符事件

Vue 事件分为普通事件和修饰符事件，这里我们主要介绍修饰符事件。

1. 表单修饰符：trim、lazy、number
2. 事件修饰符：

```html
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 给此按钮绑定一个原生的 click 事件 -->
<button @click.native="toDo">按钮</button>
```

## 插槽

### 1.作用域插槽

:::: code-group
::: code-group-item 父组件

```vue
<template>
  <div class="toList">
    <input v-model="info" type="text" />
    <button @click="addItem">添加</button>
    <ul>
      <TodoItem v-for="(item, index) in listData" :key="index">
        <template v-slot:item="itemProps"
          >// 其中itemProps的值就是子组件传递过来的对象
          <span
            :style="{
              fontSize: '20px',
              color: itemProps.checked ? 'yellow' : 'blue',
            }"
          >
            {{ item }}
          </span>
        </template>
      </TodoItem>
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem';
export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      info: '',
      listData: [],
    };
  },
  methods: {
    addItem() {
      this.listData.push(this.info);
      this.info = '';
    },
  },
};
</script>
```

:::

::: code-group-item 子组件

```vue
<template>
  <div>
    <li class="item">
      <input v-model="checked" type="checkbox" />
      <slot name="item" :checked="checked"></slot> //将checked的值传递给父组件
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
};
</script>
```

:::
::::
