import * as path from 'node:path';
import { defineConfig } from '@rspress/core';
import { Temporal } from '@js-temporal/polyfill'
import { pluginImageCompress } from '@rsbuild/plugin-image-compress'
// import readingTime from 'rspress-plugin-reading-time'

// 使用 Temporal API 获取日期
const date = Temporal.PlainDate.from(Temporal.Now.plainDateISO().toString())
const fullYear = date.year

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Rspress-Jingju-Site',
  description: 'Rspack-based Site for Jingju',
  globalStyles: path.join(__dirname, 'styles/index.css'),
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  plugins: [
    // (readingTime as any)({
    //   defaultLocale: 'zh-CN',
    // }),
    pluginImageCompress([
      { use: 'jpeg', test: /\.(jpg|jpeg|jpe)$/ },
      'pngLossless',
      'ico'
    ])
  ],
  route: {
    cleanUrls: true,
  },
  themeConfig: {
    enableAppearanceAnimation: true, // 在浅色和深色主题之间切换时有动画效果
    enableContentAnimation: true, // 启用页面过渡动画
    enableScrollToTop: true, // 启用文档上的滚动到顶部按钮
    footer: {
      message: `© ${fullYear} Yancy Qi. All Rights Reserved. 采用 GNU AFFERO GENERAL PUBLIC LICENSE Version 3 & Attribution-NonCommercial 4.0 International(CC BY-NC 4.0) 协议 进行许可`,
    },
    outlineTitle: '目录',
    prevPageText: '上一页',
    nextPageText: '下一页',
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/YancyQi2002',
      },
    ],
  },
});
