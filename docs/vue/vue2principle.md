---
title: 关于Vue2原理层的N个问题
date: 2023/12/08
tags:
  - vue
categories:
  - Vue
---

## 1、Vue中key的原理

当Vue更新渲染**真实DOM**时，它使用key属性来 _比较新旧节点_，尽可能复用已存在的真实DOM,以提高性能。

当Vue进行**虚拟DOM**的diff算法时，使用key _匹配新旧节点_,确定节点的更新移动和删除，避免不必要的DOM操作。

`key`的特殊属性主要用于Vue的**虚拟DOM算法**，在新旧nodes对比辨识 VNodes.若不适用key,Vue会尝试就地修改复用相同类型元素的算法。而使用key时，会基于key的变化重新排列元素顺序，并移除key不存在的元素。

有相同父元素的子元素必须有独特的key,重复的key会造成渲染错误，如v-for。

## 2.Vue中的diff算法

### 是什么

一种通过同层树节点进行比较的高效算法。有两个特点：
1. 只会在同层比较，不会跨层
2. diff比较过程中，从两边向中间比较

diff算法在很多场景下都有应用，Vue中，用于虚拟DOM渲染成真实DOM的新旧`VNode`（virtual Node 虚拟节点）比较

### 比较方式

[diff算法动画演示](https://wanglin2.github.io/VNode_visualization_demo/)

### 原理分析

>几个关键函数：patch，isSameVnode，patchVode，updateChildren

1. 当数据发生改变时，订阅者 watcher 会调用 patch函数 给真实DOM打补丁，更新视图
   
   源码路径`src/core/vdom/patch.js`：
   ::: details
   ```js
   function patch(oldVnode, vnode, hydrating, removeOnly){
    //1.没有新节点，直接执行destroy钩子函数
    if(isUndef(vnode)){
      if(isDel(oldVnode)) invokeDestroyHook(oldVnode)
      return
    }
    let isInitialPatch = false
    const insertedVnodeQueue = []
   }

   if(isUndef(oldVnode)){
    //2.没有旧节点，直接用新节点生成dom元素
    isInitialPatch = true
    createElm(vnode, insertedVnodeQueue) 
   }else{
    const isRealElement = isDef(oldVnode.nodeType)
    if(!isRealElement&&sameVnode(oldVnode, vnode)){
      //3.判断旧节点和新节点相同，一致执行patchVnode
      patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly)
    }else{
      // 4.新旧节点不同，直接销毁及旧节点，根据新节点生成dom元素
      if(isRealElement){
        if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
          oldVnode.removeAttribute(SSR_ATTR)
          hydrating = true
        }
        if (isTrue(hydrating)) {
          if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
            invokeInsertHook(vnode, insertedVnodeQueue, true)
            return oldVnode
          }
        }
        oldVnode = emptyNodeAt(oldVnode)
      }
      return vnode.elm
    }
   }
   ```
   :::

   >patch函数前两个参数位为oldVnode 和 Vnode ，分别代表新的节点和之前的旧节点，主要做了4个判断：

   1. 没有新节点，直接触发旧节点的destory钩子
   2. 没有旧节点，说明是页面刚开始初始化的时候，此时，根本不需要比较了，直接全是新建，所以只调用 createElm
   3. 旧节点和新节点自身一样，通过 sameVnode 判断节点是否一样，一样时，直接调用 patchVnode 去处理这两个节点
   4. 旧节点和新节点自身不一样，当两个节点不一样的时候，直接创建新节点，删除旧节点

2. 通过`isSameVnode`进行新旧节点判断，相同则调用`patchVnode`方法
    ::: details
    ```js
     function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
       // 如果新旧节点一致，什么都不做
       if (oldVnode === vnode) {
         return
       }

       // 让vnode.el引用到现在的真实dom，当el修改时，vnode.el会同步变化
       const elm = vnode.elm = oldVnode.elm

       // 异步占位符
       if (isTrue(oldVnode.isAsyncPlaceholder)) {
         if (isDef(vnode.asyncFactory.resolved)) {
           hydrate(oldVnode.elm, vnode, insertedVnodeQueue)
         } else {
           vnode.isAsyncPlaceholder = true
         }
         return
       }
       // 如果新旧都是静态节点，并且具有相同的key
       // 当vnode是克隆节点或是v-once指令控制的节点时，只需要把oldVnode.elm和oldVnode.child都复制到vnode上
       // 也不用再有其他操作
       if (isTrue(vnode.isStatic) &&
         isTrue(oldVnode.isStatic) &&
         vnode.key === oldVnode.key &&
         (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
       ) {
         vnode.componentInstance = oldVnode.componentInstance
         return
       }

       let i
       const data = vnode.data
       if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
         i(oldVnode, vnode)
       }

       const oldCh = oldVnode.children
       const ch = vnode.children
       if (isDef(data) && isPatchable(vnode)) {
         for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode)
         if (isDef(i = data.hook) && isDef(i = i.update)) i(oldVnode, vnode)
       }
       // 如果vnode不是文本节点或者注释节点
       if (isUndef(vnode.text)) {
         // 并且都有子节点
         if (isDef(oldCh) && isDef(ch)) {
           // 并且子节点不完全一致，则调用updateChildren
           if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly)

           // 如果只有新的vnode有子节点
         } else if (isDef(ch)) {
           if (isDef(oldVnode.text)) nodeOps.setTextContent(elm, '')
           // elm已经引用了老的dom节点，在老的dom节点上添加子节点
           addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)

           // 如果新vnode没有子节点，而vnode有子节点，直接删除老的oldCh
         } else if (isDef(oldCh)) {
           removeVnodes(elm, oldCh, 0, oldCh.length - 1)

           // 如果老节点是文本节点
         } else if (isDef(oldVnode.text)) {
           nodeOps.setTextContent(elm, '')
         }

         // 如果新vnode和老vnode是文本节点或注释节点
         // 但是vnode.text != oldVnode.text时，只需要更新vnode.elm的文本内容就可以
       } else if (oldVnode.text !== vnode.text) {
         nodeOps.setTextContent(elm, vnode.text)
       }
       if (isDef(data)) {
         if (isDef(i = data.hook) && isDef(i = i.postpatch)) i(oldVnode, vnode)
       }
     }
     ```
     :::
    >patchVnode主要做了5个判断：
      1. 找到对应的真实dom，称为el
      2. 如果都有都有文本节点且不相等，将el文本节点设置为Vnode的文本节点
      3. 如果oldVnode有子节点而VNode没有，则删除el子节点
      4. 如果oldVnode没有子节点而VNode有，则将VNode的子节点真实化后添加到el
      5. 如果两者都有子节点，则执行updateChildren函数比较子节点

3. updateChildren方法
   :::details
   ```js
   function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    let oldStartIdx = 0 // 旧头索引
    let newStartIdx = 0 // 新头索引
    let oldEndIdx = oldCh.length - 1 // 旧尾索引
    let newEndIdx = newCh.length - 1 // 新尾索引
    let oldStartVnode = oldCh[0] // oldVnode的第一个child
    let oldEndVnode = oldCh[oldEndIdx] // oldVnode的最后一个child
    let newStartVnode = newCh[0] // newVnode的第一个child
    let newEndVnode = newCh[newEndIdx] // newVnode的最后一个child
    let oldKeyToIdx, idxInOld, vnodeToMove, refElm

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    const canMove = !removeOnly

    // 如果oldStartVnode和oldEndVnode重合，并且新的也都重合了，证明diff完了，循环结束
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      // 如果oldVnode的第一个child不存在
      if (isUndef(oldStartVnode)) {
        // oldStart索引右移
        oldStartVnode = oldCh[++oldStartIdx] // Vnode has been moved left

      // 如果oldVnode的最后一个child不存在
      } else if (isUndef(oldEndVnode)) {
        // oldEnd索引左移
        oldEndVnode = oldCh[--oldEndIdx]

      // oldStartVnode和newStartVnode是同一个节点
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        // patch oldStartVnode和newStartVnode， 索引左移，继续循环
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue)
        oldStartVnode = oldCh[++oldStartIdx]
        newStartVnode = newCh[++newStartIdx]

      // oldEndVnode和newEndVnode是同一个节点
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        // patch oldEndVnode和newEndVnode，索引右移，继续循环
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue)
        oldEndVnode = oldCh[--oldEndIdx]
        newEndVnode = newCh[--newEndIdx]

      // oldStartVnode和newEndVnode是同一个节点
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        // patch oldStartVnode和newEndVnode
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue)
        // 如果removeOnly是false，则将oldStartVnode.eml移动到oldEndVnode.elm之后
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm))
        // oldStart索引右移，newEnd索引左移
        oldStartVnode = oldCh[++oldStartIdx]
        newEndVnode = newCh[--newEndIdx]

      // 如果oldEndVnode和newStartVnode是同一个节点
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        // patch oldEndVnode和newStartVnode
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue)
        // 如果removeOnly是false，则将oldEndVnode.elm移动到oldStartVnode.elm之前
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
        // oldEnd索引左移，newStart索引右移
        oldEndVnode = oldCh[--oldEndIdx]
        newStartVnode = newCh[++newStartIdx]

      // 如果都不匹配
      } else {
        if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)

        // 尝试在oldChildren中寻找和newStartVnode的具有相同的key的Vnode
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)

        // 如果未找到，说明newStartVnode是一个新的节点
        if (isUndef(idxInOld)) { // New element
          // 创建一个新Vnode
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm)

        // 如果找到了和newStartVnodej具有相同的key的Vnode，叫vnodeToMove
        } else {
          vnodeToMove = oldCh[idxInOld]
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !vnodeToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            )
          }

          // 比较两个具有相同的key的新节点是否是同一个节点
          //不设key，newCh和oldCh只会进行头尾两端的相互比较，设key后，除了头尾两端的比较外，还会从用key生成的对象oldKeyToIdx中查找匹配的节点，所以为节点设置key可以更高效的利用dom。
          if (sameVnode(vnodeToMove, newStartVnode)) {
            // patch vnodeToMove和newStartVnode
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue)
            // 清除
            oldCh[idxInOld] = undefined
            // 如果removeOnly是false，则将找到的和newStartVnodej具有相同的key的Vnode，叫vnodeToMove.elm
            // 移动到oldStartVnode.elm之前
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm)

          // 如果key相同，但是节点不相同，则创建一个新的节点
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm)
          }
        }
        // 右移
        newStartVnode = newCh[++newStartIdx]
      }
    }
   ```
   :::
   >updateChildren主要做了2个操作：  
   1. 设置新旧VNode的头尾指针
   2. 新旧头尾指针比较，循环向中间靠拢，根据情况调用patchVnode进行patch重复流程，调用createElem创建一个新节点，从哈希表寻找 key 一致的VNode节点分情况操作
   

## 3.Vue模板如何编译

> new Vue({render:h=>h(App)}),调用render传入 .vue文件会得到对应的虚拟DOM.探讨如何把.vue文件转化为浏览器可识别的代码过程。

render函数的两种方式：
- 经过模板编译生成render函数
- 组件中自定义了render函数，会自动跳过模板编译的过程

### 模板编译的过程

`<template></template>`是模板，不是真实的HTML，浏览器无法识别。将模板生成原生HTML的流程：
1. 提取出原生的HTML和非原生的HTML，如绑定的属性、事件、指令等
2. 经过一些处理生成render函数
3. render函数将模板内容生成对应的vnode
4. 经过patch过程（Diff）得到要渲染到视图的vnode
5. 根据vnode创建真实的DOM节点，原生HTML插入到视图中，完成渲染

以上1-3是Vue模板编译的过程。

### 模板编译的源码

#### 入口函数 baseCompile
`src/complier/index.js - 11行`
```js
export const createCompiler = createCompilerCreator(function baseCompile (
  template: string, // 就是要转换的模板字符串
  options: CompilerOptions //就是转换时需要的参数
): CompiledResult {
  // 1. 进行模板解析，并将结果保存为 AST（抽象语法树）
  const ast = parse(template.trim(), options)
  
  // 没有禁用静态优化的话
  if (options.optimize !== false) {
    // 2. 就遍历 AST，并找出静态节点并标记
    optimize(ast, options)
  }
  // 3. 根据 AST 生成渲染函数
  const code = generate(ast, options)
  return {
    ast,
    render: code.render, // 返回渲染函数 render
    staticRenderFns: code.staticRenderFns
  }
})
```
#### baseCompile中的parse函数
`src/complier/parser/index.js - 79行`
```js
export function parse (
  template: string, // 要转换的模板字符串
  options: CompilerOptions // 转换时需要的参数
): ASTElement | void {
  parseHTML(template, {
    warn,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    outputSourceRange: options.outputSourceRange,
    // 解析到开始标签时调用，如 <div>
    start (tag, attrs, unary, start, end) {
        // unary 是否是自闭合标签，如 <img />
        ...
    },
    // 解析到结束标签时调用，如 </div>
    end (tag, start, end) {
        ...
    },
    // 解析到文本时调用
    chars (text: string, start: number, end: number) {
      // 这里会判断判断很多东西，来看它是不是带变量的动态文本
      // 然后创建动态文本或静态文本对应的 AST 节点
      ...
    },
    // 解析到注释时调用
    comment (text: string, start, end) {
      // 注释是这么找的
      const comment = /^<!\--/
      if (comment.test(html)) {
      // 如果是注释，就继续找 '-->'
      const commentEnd = html.indexOf('-->')
      ...
    }
  })
  // 返回的这个就是 AST
  return root
}
```
#### baseCompile中的optimize函数
`src/complier/optimizer.js - 21行`
```js
export function optimize (root: ?ASTElement, options: CompilerOptions) {
  if (!root) return
  isStaticKey = genStaticKeysCached(options.staticKeys || '')
  isPlatformReservedTag = options.isReservedTag || no
  // 标记静态节点
  markStatic(root)
  // 标记静态根节点
  markStaticRoots(root, false)
}
```
此函数在AST中找出静态节点和静态根节点并添加标记，为后面的patch过程中就会跳过静态节点的对比，直接克隆一份去过，优化patch的性能。

#### baseCompile中的generate函数
`src/complier/codegen/index.js - 43行`
```js
export function generate (
  ast: ASTElement | void,
  options: CompilerOptions
): CodegenResult {
  const state = new CodegenState(options)
  // 就是先判断 AST 是不是为空，不为空就根据 AST 创建 vnode，否则就创建一个空div的 vnode
  const code = ast ? (ast.tag === 'script' ? 'null' : genElement(ast, state)) : '_c("div")'
  
  return {
    render: `with(this){return ${code}}`,
    staticRenderFns: state.staticRenderFns
  }
}
```
### 自定义的render

:::: code-group
::: code-group-item 写法一
```vue
<template>
  <h1>我是宝贝</h1>
</template>
<script>
  export default {}
</script>
```
:::

::: code-group-item 写法二
```vue
<script>
  export default {
    render(h){
      return h('h1',{},'我是宝贝')
    }
  }
</script>
```
:::

::: code-group-item 写法三
```js
export default {
  render(h){
    return h('h1',{},'我是宝贝')
  }
}
```
:::
::::

以上三种写法渲染出的效果相同，自己写的优先级低于render函数渲染的，自己写的模板不需要再去解析，性能上会有提升。但有些场景需要更灵活的写法：

:::: code-group
::: code-group-item 有很多if判断
```vue
<template>
   <h1 v-if="level === 1">
   <a href="xxx">
     <slot></slot>
   </a>
   </h1>
   <h2 v-else-if="level === 2">
   <a href="xxx">
     <slot></slot>
   </a>
   </h2>
   <h3 v-else-if="level === 3">
   <a href="xxx">
     <slot></slot>
   </a>
   </h3>
</template>
<script>
  export default {
    props:['level']
  }
</script>
```
:::
::: code-group-item render简化写法
```vue
<script>
  export default {
    props:['level'],
    render(h){
      return h('h' + this.level, this.$slots.default())
    }
  }
</script>
```
:::
::::

## 4.为什么Vue中的CSS-scoped不会造成污染

