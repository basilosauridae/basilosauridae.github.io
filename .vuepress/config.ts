import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  title: '影大宝',
  description: 'Just playing around',
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    author: '影大宝',
    docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco-next',
    docsBranch: 'main',
    docsDir: 'example',
    lastUpdatedText: '',
    // series 为原 sidebar
    series: {
      '/docs/theme/': [
        {
          text: 'CSS样式',
          children: ['reset', 'shadow','whirligig']
        },
      ],
      '/docs/guide/': [
        {
          text:'影大宝日志',
          children:['introduce','mycat','standard']
        }
      ],
      '/docs/vue/':[
        {
          text:'关于vue',
          children:['theCore','vue3']
        }
      ]
    },
    navbar:
    [
      { text: 'Home', link: '/'},
      { text: 'Docs',
      children: [
        { text: '影大宝日志', link: '/docs/guide/introduce' },
        { text: 'vue', link: '/docs/vue/theCore' },
        { text: 'css', link: '/docs/theme/reset' }
      ]
      },
      { text: 'Tags', link: '/tags/vue/1' },
      {
        text: 'Contact Me',
        children: [
          { text: '语雀', link: 'https://www.yuque.com/lumang-40tj6' },
          { text: 'github', link: 'https://github.com/Basilosauridae' },
          { text:'wordpress',link:'https://www.cozo.com/' }
        ]
      }
    ],
    // valineConfig 配置与 1.x 一致
    valineConfig: {
      appId: 'xxx',
      appKey: 'xxx',
      placeholder: '填写邮箱可以收到回复提醒哦！',
      verify: true, // 验证码服务
      // notify: true,
      recordIP: true,
      // hideComments: true // 隐藏评论
    }
  }),
  // debug: true,
})
