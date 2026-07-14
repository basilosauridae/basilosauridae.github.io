import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  title: "Yingineer",
  description: "Just playing around",
  bundler: viteBundler(),
  theme: recoTheme({
    logo: "/favicon.ico",
    author: "Ying",
    authorAvatar: "/avatar.png",
    primaryColor: 'mediumpurple',
    colorMode: 'dark',
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
      { text: "Links", link: "/friendship-link" },
    ],
    friendshipLinks: [
      {
        title: "阮一峰的网络日志",
        logo: "https://www.ruanyifeng.com/blog/images/person2.jpg",
        link: "https://www.ruanyifeng.com/blog/"
      },
      {
        title:"7gugu's Blog",
        logo:"https://7gugu.com/wp-content/uploads/2018/01/favicon.png",
        link:"https://7gugu.com/"
      },
      {
        title:"❖星港◎Star☆",
        logo:"https://bu.dusays.com/2025/04/11/67f92f6fcfb26.webp",
        link:"https://blog.starsharbor.com/"
      },
      {
        title:"Hsu Yeung 的博客",
        logo:"https://www.hsuyeung.com/img/avatar.jpg",
        link:"https://www.hsuyeung.com/"
      },
      {
        title:"清羽飞扬",
        logo:"https://blog.liushen.fun/info/avatar.ico",
        link:"https://blog.liushen.fun/"
      },
      {
        title:"Arthals' ink",
        logo:"https://cdn.arthals.ink/Arthals.png",
        link:"https://arthals.ink/"
      },
      {
        title:"微霞",
        logo:"https://cdn.yuuu.org/img/avatar.webp",
        link:"https://yuuu.org/"
      },
      {
        title:"Xuan's blog",
        link:"https://blog.ybyq.wang/",
        logo:"https://blog.ybyq.wang/usr/themes/handsome/assets/img/avatar.png"
      },
      {
        title:"Mofei",
        link:"https://www.mofei.life",
        logo:"https://www.mofei.life/img/mofei-logo_500_500.png"
      },
      {
        title:"小不的窝",
        link:"https://blog.donotknow.top/",
        logo:"https://s2.loli.net/2025/01/26/Q6WYTHDfPR2bCyg.jpg",
      },
      {
        title: "THW's Blog",
        link: "https://blog.tianhw.top",
        logo: "https://image.tianhw.top/avatar.webp"
      }
    ],
    // commentConfig: {
    //   type: "valine",
    //   options: {
    //     appId: "Q6hMeY2PSaM9FMkXetzoJoU5-gzGzoHsz",
    //     appKey: "iLQlev5jo2Cm5pLcI0z3qhtr",
    //     placeholder: "填写邮箱可以收到回复提醒哦！",
    //     verify: true, // 验证码服务
    //     // notify: true, //
    //     recordIP: true,
    //     // hideComments: true
    //   },
    // },
  }),
});
