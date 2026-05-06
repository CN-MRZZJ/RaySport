import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
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
      { text: '宣传手册', link: '/brochure' },
    ],
    sidebar: {
      '/patroit': [
        {
          text: '录入端 Patroit',
          items: [
            { text: '概述', link: '/patroit#概述' },
            { text: '技术构成', link: '/patroit#技术构成' },
            { text: '成绩录入', link: '/patroit#成绩录入' },
            { text: 'URL 参数化启动', link: '/patroit#url-参数化启动' },
            { text: '环境配置', link: '/patroit#环境配置' },
            { text: '使用流程', link: '/patroit#典型使用流程' },
          ]
        }
      ],
      '/verlion': [
        {
          text: '后端 Verlion',
          items: [
            { text: '概述', link: '/verlion#概述' },
            { text: '技术构成', link: '/verlion#技术构成' },
            { text: '赛事项目管理', link: '/verlion#赛事项目管理' },
            { text: '运动员管理', link: '/verlion#运动员管理' },
            { text: '成绩录入与多轮次', link: '/verlion#成绩录入与多轮次支持' },
            { text: '积分与排名', link: '/verlion#积分与排名计算' },
            { text: '公示与导出', link: '/verlion#公示与导出' },
            { text: '数据安全', link: '/verlion#数据安全' },
            { text: 'API 响应规范', link: '/verlion#api-响应规范' },
          ]
        }
      ],
      '/dervany': [
        {
          text: '管理端 Dervany',
          items: [
            { text: '概述', link: '/dervany#概述' },
            { text: '技术构成', link: '/dervany#技术构成' },
            { text: '功能模块总览', link: '/dervany#功能模块总览' },
            { text: '概览仪表盘', link: '/dervany#概览仪表盘' },
            { text: '赛务模块', link: '/dervany#赛务模块' },
            { text: '数据导入导出', link: '/dervany#数据导入-导出' },
            { text: '基础数据管理', link: '/dervany#基础数据管理' },
            { text: '规则配置', link: '/dervany#规则配置' },
            { text: '部署方式', link: '/dervany#部署方式' },
          ]
        }
      ],
      '/brochure': [
        {
          text: '宣传手册',
          items: [
            { text: '平台概览', link: '/brochure#平台概览' },
            { text: 'Patroit · 录入端', link: '/brochure#一-patroit-录入端' },
            { text: 'Verlion · 后端', link: '/brochure#二-verlion-后端' },
            { text: 'Dervany · 管理端', link: '/brochure#三-dervany-管理端' },
            { text: '三端协同', link: '/brochure#三端协同示意' },
            { text: '特色亮点', link: '/brochure#特色亮点' },
            { text: '技术能力一览', link: '/brochure#技术能力一览' },
            { text: '仓库地址', link: '/brochure#仓库地址' },
          ]
        }
      ]
    },
    footer: {
      message: '锐赛体育智慧平台',
      copyright: `Copyright © ${new Date().getFullYear()} RaySport`
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/CN-MRZZJ' }
    ]
  }
}),
{
  mermaid: {
    theme: 'default'
  },
  mermaidInstanceOptions: {
    dark: { theme: 'dark' }
  }
}
)
