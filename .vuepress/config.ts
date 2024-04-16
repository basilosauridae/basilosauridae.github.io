import { defineUserConfig } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'
import { plugins } from './config/index'

export default defineUserConfig({
  title: "Ying's Blog🥴",
  description: 'Just playing around',
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    colorMode: 'light', // dark, light
    logo: '/logo.png',
    author: '影大宝🧐',
    docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco-next',
    docsBranch: 'main',
    docsDir: 'example',
    autoSetSeries: true,
    lastUpdatedText: '',
    series: {
      '/docs/theme/': [
        {
          text: 'CSS',
          children: ['magic','colorful','reset', 'shadow','whirligig']
        },
      ],
      '/docs/guide/': [
        {
          text:'Memories',
          children:['introduce','mycat','standard','books','noun','thingy']
        }
      ],
      '/docs/vue/':[
        {
          text:'Vue',
          children:['vue2application','vue2principle','advancedUsage','Vue3new','vueState','vueRouter']
        }
      ]
    },
    navbar:
    [
      {
        text: '友情链接💌🐾',
        children: [
          { text:'阮一峰的网络日志',link:'https://www.ruanyifeng.com/blog/' },
          { text:"7gugu's Blog",link:'https://7gugu.com/' },
          { text:"❖星港◎Star☆",link:'https://blog.starsharbor.com/' },
          { text:"booop的小站",link:'https://booop.net/' },
          { text:"HsuYeung的博客",link:'https://www.hsuyeung.com/' }
        ]
      },
      { text: 'Tags', link: '/tags/vue/1' },
      {
        text: 'Contact Me',
        children: [
          { text:'语雀',link:'https://www.yuque.com/lumang-40tj6' },
          { text:'知乎',link:'https://www.zhihu.com/people/ying-zi-74-41' },
          { text:'github',link:'https://github.com/Basilosauridae' },
          { text:'邮箱lumang7520@126.com',link:'https://mail.126.com/' }
        ]
      },
      { text: 'Home', link: '/'}
    ],
    plugins:plugins
  }),
})
