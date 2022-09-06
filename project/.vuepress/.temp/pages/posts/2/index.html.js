export const data = JSON.parse("{\"key\":\"v-03d52ff2\",\"path\":\"/posts/2/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"layout\":\"Post\"},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":null}")

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
