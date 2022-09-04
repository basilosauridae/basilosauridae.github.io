import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-ed8c81f4","/guide/introduce.html",{"title":"我的前端之路"},["/guide/introduce","/guide/introduce.md"]],
  ["v-470ada5b","/guide/mycat.html",{"title":"花花是一只猫"},["/guide/mycat","/guide/mycat.md"]],
  ["v-565176d0","/guide/standard.html",{"title":"日志书写规范"},["/guide/standard","/guide/standard.md"]],
  ["v-ef95dc2e","/theme/reset.html",{"title":"reset"},["/theme/reset","/theme/reset.md"]],
  ["v-e74db2cc","/theme/shadow.html",{"title":"常见阴影"},["/theme/shadow","/theme/shadow.md"]],
  ["v-b03da52c","/theme/whirligig.html",{"title":"旋转木马"},["/theme/whirligig","/theme/whirligig.md"]],
  ["v-e04f83ea","/vue/theCore.html",{"title":"详解vue组件三大核心概念"},["/vue/theCore","/vue/theCore.md"]],
  ["v-6abdbdea","/vue/vue3.html",{"title":"关于vue3.0"},["/vue/vue3","/vue/vue3.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
