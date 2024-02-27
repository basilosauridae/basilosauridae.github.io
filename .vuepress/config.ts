import { defineUserConfig } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'
import { plugins } from './config/index'

export default defineUserConfig({
  title: '影大宝',
  description: 'Just playing around',
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    colorMode: 'light', // dark, light
    logo: '/logo.png',
    author: '影大宝',
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
          children:['introduce','mycat','standard','interview']
        }
      ],
      '/docs/vue/':[
        {
          text:'Vue',
          children:['vue2application','vue2principle','theCore','advancedUsage']
        }
      ]
    },
    navbar:
    [
      { text: 'Home', link: '/'},
      { text: 'Docs',
      children: [
        { text: 'Memories', link: '/docs/guide/introduce' },
        { text: 'Vue', link: '/docs/vue/vue2application' },
        { text: 'JS', link: '/tags/JS/1' },
        { text: 'Css', link: '/docs/theme/magic' },
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
      }
    ],
    plugins:plugins
  }),
})
