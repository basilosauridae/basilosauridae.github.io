export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"modules\":[\"Banner\",\"Blog\",\"MdContent\",\"Footer\"],\"banner\":{\"heroText\":\"博客\",\"tagline\":\"靡不有初 鲜克有终\",\"bgImage\":\"/banner.jpg\",\"bgImageStyle\":{\"height\":\"60vh\"}},\"blog\":{\"socialLinks\":[{\"icon\":\"BrandGithub\",\"link\":\"https://github.com/\"}]},\"footer\":{\"startYear\":2022}},\"excerpt\":\"\",\"headers\":[],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"index.md\"}")

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
