import { defineConfig4CustomTheme } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
import themeConfig from './config/themeConfig'
import plugins from './config/plugins'
import header from './config/head'

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: 'vdoing', // 使用npm包主题
  // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题

  locales: {
    '/': {
      lang: 'zh-CN',
      title: "上校的玩具间",
      description: '坐而言不如起而行。js,java,vue,Spring,html5,Node,git,github,CodeQL等技术文章。',
    }
  },
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  themeConfig,

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  header,

  plugins,

  markdown: {
    lineNumbers: true
  }
})
