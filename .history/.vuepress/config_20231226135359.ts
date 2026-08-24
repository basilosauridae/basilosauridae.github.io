import { defineUserConfig } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'
import { plugins } from './config/index'

export default defineUserConfig({
  title: '影大宝',
  description: 'Just playing around',
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: './public/logo.png',
    author: '影大宝',
    docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco-next',
    docsBranch: 'main',
    docsDir: 'example',
    lastUpdatedText: '',
    // series 为原 sidebar
    series: {
      '/docs/theme/': [
        {
          text: 'CSS',
          children: ['reset', 'shadow','whirligig']
        },
      ],
      '/docs/guide/': [
        {
          text:'Memories',
          children:['introduce','mycat','standard']
        }
      ],
      '/docs/vue/':[
        {
          text:'Vue',
          children:['vue2application','vue2principle','vue3']
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
        { text: 'Css', link: '/docs/theme/reset' }
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
    plugins:plugins
  }),
  // debug: true,
})
