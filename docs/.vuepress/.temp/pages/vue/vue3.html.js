export const data = JSON.parse("{\"key\":\"v-6abdbdea\",\"path\":\"/vue/vue3.html\",\"title\":\"关于vue3.0\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"关于vue3.0\",\"tags\":[\"vue\"],\"categories\":[\"Vue\"]},\"excerpt\":\"\",\"headers\":[],\"git\":{\"createdTime\":1662310707000,\"updatedTime\":1662310707000,\"contributors\":[{\"name\":\"huying\",\"email\":\"2369700690@qq.com\",\"commits\":1}]},\"filePathRelative\":\"vue/vue3.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
