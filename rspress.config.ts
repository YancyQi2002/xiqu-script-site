import * as path from 'path'
import { defineConfig } from 'rspress/config'

import { Temporal } from '@js-temporal/polyfill'
import { pluginImageCompress } from '@rsbuild/plugin-image-compress'

// 使用 Temporal API 获取日期
const date = Temporal.PlainDate.from(Temporal.Now.plainDateISO().toString())
const fullYear = date.year

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Rspress-Jingju-Site',
  description: 'Rspack-based Site for Jingju',
  base: '/scriptsite/',
  builderPlugins: [
    pluginImageCompress([
      { use: 'jpeg', test: /\.(jpg|jpeg|jpe)$/ },
      'pngLossless',
      'ico'
    ])
  ],
  globalStyles: path.join(__dirname, 'styles/index.css'),
  icon: "/rspress-icon.png",
  logo: {
    light: "/rspress-light-logo.png",
    dark: "/rspress-dark-logo.png",
  },
  route: {
    cleanUrls: true,
  },
  themeConfig: {
    footer: {
      message: `© ${fullYear} Yancy Qi. All Rights Reserved. 采用 GNU AFFERO GENERAL PUBLIC LICENSE Version 3 & Attribution-NonCommercial 4.0 International(CC BY-NC 4.0) 协议 进行许可`,
    },
    outlineTitle: '目录',
    prevPageText: '上一页',
    nextPageText: '下一页',
    enableScrollToTop: true,
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/YancyQi2002' },
    ],
  },
})
