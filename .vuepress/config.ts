import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'

export default defineUserConfig({
  title: "Yingineer",
  description: "Just playing around",
  bundler: viteBundler(),
  plugins: [
    sitemapPlugin({
      hostname: 'https://basilosauridae.github.io'
    })
  ],
  theme: recoTheme({
    logo: "/favicon.ico",
    author: "Ying",
    authorAvatar: "/avatar.png",
    primaryColor: 'mediumpurple',
    colorMode: 'light',//dark、light、auto
    docsRepo: "https://github.com/basilosauridae",
    docsBranch: "main",
    docsDir: '/blogs',
    series: {
      "/docs/vue/": [
        {
          text: "vue2",
          children: ["advanced", "vue2-qa"],
        },
        {
          text: "vue3",
          children: ["router", "vue3-features"],
        },
      ],
      "/docs/css3/": [
        {
          text: "fabrique",
          children: ["whirligig","magic","shadow","reset","games"],
        }
      ]
    },
    navbar: [
      { text: "Home", link: "/" },
      {
        text: "Docs",
        children: [
          { text: "vue", link: "/docs/vue/advanced" },
          { text: "visual", link: "/docs/css3/whirligig.md" },
        ],
      },
      { text: "Timeline", link: "/timeline" },
      { text: "Links", link: "/blogs/life/links" },
    ],
    commentConfig: {
      type: "giscus",
        options: {
          repo: "basilosauridae/basilosauridae.github.io",
          repoId: "R_kgDOH77OxA",
          category: "Announcements",
          categoryId: "DIC_kwDOH77OxM4DEFdf",
          mapping: "pathname",
          loading: "lazy",   // 滚动到评论区才加载
          theme: "light_tritanopia"
      },
    },
  }),
});
