import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("batchCover-example", defineAsyncComponent(() => import("D:/workSpace/Basilosauridae.github.io/docs/.vuepress/components/batchCover/example.vue"))),
      app.component("batchCover-main", defineAsyncComponent(() => import("D:/workSpace/Basilosauridae.github.io/docs/.vuepress/components/batchCover/main.vue")))
  },
}
