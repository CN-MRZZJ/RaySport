import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '锐赛体育智慧平台',
  description: '锐赛体育智慧平台 RaySport — 专业体育赛事智慧管理解决方案',
  head: [
    ['link', { rel: 'icon', href: '/logos/raysport-icon.svg' }]
  ],
  themeConfig: {
    logo: '/logos/raysport-icon.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '录入端 Patroit', link: '/patroit' },
      { text: '后端 Verlion', link: '/verlion' },
      { text: '管理端 Dervany', link: '/dervany' },
    ],
    sidebar: {
      '/patroit': [
        {
          text: '录入端 Patroit',
          items: [
            { text: '概述', link: '/patroit' },
          ]
        }
      ],
      '/verlion': [
        {
          text: '后端 Verlion',
          items: [
            { text: '概述', link: '/verlion' },
          ]
        }
      ],
      '/dervany': [
        {
          text: '管理端 Dervany',
          items: [
            { text: '概述', link: '/dervany' },
          ]
        }
      ]
    },
    footer: {
      message: '锐赛体育智慧平台',
      copyright: `Copyright © ${new Date().getFullYear()} RaySport`
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ]
  }
})
