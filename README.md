# HSG-web · Happy Global Service 官网

当前内容版本：**v2.27 / 2026-10-26**。正式网址：**https://happyglobalinc.com**。

本项目将已确认的 v2.27 静态上线包接入 Next.js App Router、React 19 和 TypeScript，包含中文 14 页、英文 14 页，共 28 个业务页面，在构建时静态预渲染。

## 本版内容

- 同步最新版首页、六类服务、体系、关于、常见问题与联系页面的文字和图片。
- 增加中英文隐私政策及使用条款，最后更新日期为 2026 年 10 月 26 日。
- 联系方式统一为 `service@happyglobalinc.com`；无在线表单、微信二维码或邮件发送接口。
- 首页背景视频、Open Platform Conference 和 Why Dallas 三段视频均已提供。
- `robots.txt` 允许抓取；`sitemap.xml` 包含 28 个正式网址。canonical、hreflang、x-default 及分享地址指向正式主域。
- 保留无刷新语言切换、滑块动画、移动菜单、折叠页脚、服务页统一横幅及减少动态效果支持。

## 本地运行

需要 Node.js 20.9 或更高版本；当前 Vercel 项目使用 Node.js 24.x。

```sh
npm ci
npm run dev
```

中文入口为 `http://localhost:3000/`，英文为 `/en/`。Windows 开发脚本包含目录监听兼容处理。

| 命令 | 用途 |
| --- | --- |
| `npm run check` | 验证 28 个路由、语言对应及本地资源 |
| `npm run typecheck` | TypeScript 类型检查 |
| `npm run build` | 生产构建，生成 `.next/` |
| `npm start` | 启动生产版本 |
| `npm run test:e2e` | Playwright 浏览器回归，运行前先构建 |

测试在 Windows 优先使用系统 Edge；其他环境可用 `npx playwright install chromium` 安装浏览器，或通过 `PLAYWRIGHT_EXECUTABLE_PATH` 指定 Chromium 路径。

## 项目结构与内容维护

- `src/app/`：共享根布局及中英文路由。
- `src/content/zh/`、`src/content/en/`：页面正文和元数据。
- `src/components/`：导航、语言切换、折叠页脚、图片等公共组件。
- `src/data/routes.json`、`src/data/navigation.json`：路由清单及双语导航文字。
- `src/styles/site.css`：网站样式与响应式交互。
- `public/assets/`：图片与三个视频；`public/robots.txt`、`public/sitemap.xml` 为抓取入口。
- `legacy/v2.27/`：本版批准的 HTML 原稿，供逐页内容核对；`legacy/` 其他文件为初次迁移的历史备份。
- `scripts/import-v227.mjs`：从指定静态包导入页面及页脚；运行会覆盖正文，不用于日常增量编辑。
- `tests/`：内容、SEO、视频、加载策略、双语切换及布局回归。
- [原版部署说明](docs/Deploy-Notes-v2.27.md)：随本次源码提供的上线说明。

日常改文案直接编辑 `src/content/`。不要运行初次迁移脚本重新覆盖项目。旧 `index.html` 地址会永久跳转到对应目录地址。

## 加载策略

`SiteImage` 在服务端生成响应式 WebP 地址，首屏图片预加载，其余图片懒加载并保留尺寸占位。`IntentLink` 在悬停、聚焦或触摸时预取，对应语言页面在页面加载完成后的空闲时间预取；弱网及省流量模式跳过可选预取。

首页背景视频仅在合适的桌面网络条件下、页面及封面就绪后加载，离开视口或切到后台暂停；移动端保留封面。两段正文视频采用 `preload="none"`，由访客手动播放。字体使用系统字体。本站未加入统计脚本或业务 Cookie。

图片转换结果缓存至少 4 小时。替换图片建议使用新文件名，避免命中旧缓存。图片优化需要 Next.js 服务或 Vercel，不能将 `.next/` 当纯静态目录托管。

## Vercel 与正式域名

仓库：[Martin-Yoann/HSG-web](https://github.com/Martin-Yoann/HSG-web)，分支 `master`；Vercel 项目 `hsg-web`。框架选 Next.js，构建命令 `npm run build`，输出目录保留默认。

环境变量 `NEXT_PUBLIC_SITE_URL=https://happyglobalinc.com`。页面 canonical 等已按上线包写入正式地址；预览部署应保留托管平台提供的禁止索引响应头。`.env.example` 不含凭证，本站无需 SMTP 配置。

主域采用不带 www 的 `happyglobalinc.com`；www 在 Vercel 项目域名设置中永久跳转到主域。不要同时配置相反方向的跳转。

`/contact/` 和 `/en/contact/` 都展示新官网的邮件联系页；历史地址 `/pages/contact/`、`/pages/contact-1/` 也转到新官网 `/contact/`，优先于商城通配跳转。历史商城 `/pages/`、`/blogs/`、`/collections/`、`/products/`、`/policies/` 等地址继续按 `next.config.ts` 跳转到 `www.happyglobalus.com`，保留查询参数。商城数据及账户由原商城平台维护，本仓库不包含商城迁移。

## 上线核对

确认 28 个页面、三段视频、邮件链接、隐私及条款、robots 和 sitemap 可访问，且 www 跳转无循环。Search Console / Bing Webmaster 的域名验证及 sitemap 提交由站点管理员在对应账号中完成；代码发布不代表已完成搜索引擎提交。

## 版本管理

提交源码、锁文件、媒体及测试；`node_modules/`、`.next/`、`.vercel/`、测试产物和实际 `.env` 文件均忽略。从仓库获取项目后执行 `npm ci` 和 `npm run build` 重建，不上传本地构建目录。
