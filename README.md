# Rspress-Jingju-Site 京剧剧本站点

> 基于 Rspress 构建的高性能京剧剧本静态网站

---

## 📝 项目简介

Rspress-Jingju-Site 是一个基于 [Rspress](https://rspress.dev/) 的静态网站，专注于京剧剧本的整理与展示。项目采用现代前端技术栈，支持 Markdown/MDX 内容编写，具备极致构建性能与高度可定制性。

---

## ✨ 主要特性

- 🚀 **极速构建**：基于 Rust 的 Rspack 提供极致开发与构建体验
- 🛠️ **打包**：使用 Tauri 2 一键打包为跨平台应用

---

## 📁 目录结构

```text
rspress-jingju-site/
├── docs/                     # 文档内容
├── src/
│   └── components/           # 组件目录
├── src-tauri/                # Tauri 配置
├── styles/                   # 样式目录
├── scripts/                  # 构建脚本
├── rspress.config.ts         # Rspress 配置
├── package.json              # 脚本与依赖
├── postcss.config.mjs        # PostCSS 配置
├── tsconfig.json             # TypeScript 配置
└── doc_build/                # 静态站点构建产物
```

---

## 🛠️ 技术栈

- **Rspress / Rspack**：新一代静态站点生成与构建工具
- **Tailwind CSS**：原子化 CSS 框架
- **@rsbuild/plugin-image-compress**：图片压缩
- **license-report**：依赖分析与展示
- **Tauri**：打包

---

## 🚀 快速开始

- Bun ≥ 1.3
- Rust ≥ 1.90

### 🚀 安装与启动

```bash
bun install
bun run dev
```

### 🧱 构建与预览（静态站点）

```bash
bun run build     # 生成 doc_build/
bun run preview   # 本地预览生产版本
```

---

## 📄 开源协议

- 本项目采用 **GNU AGPL v3** 与 **CC BY-NC 4.0** 协议。
