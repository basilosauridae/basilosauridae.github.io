/// <reference types="vite/client" />
import { defineClientConfig } from '@vuepress/client'
import type { Component } from 'vue'

// 自动注册 components 目录下所有组件(含子目录)
// 文件名即组件名:flowerCat.vue -> <flower-cat />
// 新增组件只需放入目录,无需修改本文件
const modules = import.meta.glob('./components/**/*.vue', { eager: true })

export default defineClientConfig({
  enhance({ app }) {
    for (const filePath in modules) {
      const name = filePath
        .split('/')
        .pop()!
        .replace(/\.\w+$/, '')               // 去掉 .vue 后缀
        .replace(/([a-z])([A-Z])/g, '$1-$2') // 驼峰转连字符
        .toLowerCase()
      const component = (modules[filePath] as { default: Component }).default
      app.component(name, component)
    }
  },
})
