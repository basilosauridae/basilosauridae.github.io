export const themeData = JSON.parse("{\"style\":\"@vuepress-reco/style-default\",\"series\":{\"/blogs/exagearInitContainer\":[{\"text\":\"主篇\",\"link\":\"./\",\"children\":[]},{\"text\":\"旧方法\",\"link\":\"detailed\",\"children\":[]}]},\"subSidebar\":\"auto\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\",\"icon\":\"reco-home\"},{\"text\":\"应用\",\"link\":\"/\",\"children\":[{\"text\":\"批量生成b站合集的分p封面图\",\"link\":\"/blogs/app/batchCover\"}]}],\"componentsDir\":\"./docs/.vuepress/components\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
