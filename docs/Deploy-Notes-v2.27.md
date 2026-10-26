# HGS 官网上线版 v2.27 · 部署说明

- 正式网址：https://happyglobalinc.com
- 上线：中国时间 2026 年 10 月 26 日
- 隐私政策、使用条款的"最后更新"日期是 2026 年 10 月 26 日
- **这一版替代 v2.26、v2.24 和 v2.21**：之前给过的上线包都请不要再用

## 这是什么

纯静态网站，共 28 页（中文 14 页、英文 14 页），不需要数据库，也不需要后端程序。把整个文件夹的内容原样上传到网站根目录即可，包括 `assets/`（含 3 条视频）、`robots.txt` 和 `sitemap.xml`。

## 和测试版的区别

- 允许搜索引擎收录：`robots.txt` 是 Allow，并指向 `sitemap.xml`。没有 noindex 的 `_headers` 文件。
- 网址不带 `index.html`，例如 `/about/`、`/en/privacy/`。服务器需要把目录请求指向该目录下的 `index.html`；Netlify、Cloudflare Pages、Nginx 默认都是这样。
- 每页都写了 canonical 和中英 hreflang，全部指向 https://happyglobalinc.com；分享预览图（og:image）用完整网址。

## 请 IT 确认和完成

1. **www 跳转**：`www.happyglobalinc.com` 请 301 跳转到 `https://happyglobalinc.com`，并开启 HTTPS。
2. **原网站内容**：happyglobalinc.com 上原有的商城页面，由 IT 克隆到 happyglobalus.com。请在切换域名前完成克隆，并核对商城的隐私政策等页面在新域名上能正常打开。
3. **联系方式**：网站上没有在线表单，也没有微信二维码，只放了 service@happyglobalinc.com。
4. **统计和 Cookie**：网站没有接任何统计代码，也不设 Cookie。如果以后要加，请先告诉丽艳，隐私政策要跟着改。
5. **搜索引擎**：上线后请在 Google Search Console 和 Bing Webmaster Tools 验证 happyglobalinc.com（用 DNS TXT 记录验证，不用改网站代码），并提交 `https://happyglobalinc.com/sitemap.xml`。Bing 可以直接从 Google Search Console 导入。

## 上线后自查

- 首页、六个服务页、关于、联系、隐私政策、使用条款，中英文各打开一遍。
- 首屏视频、开放平台大会视频、Why Dallas 视频都能播放。
- 访问 `https://happyglobalinc.com/sitemap.xml` 和 `/robots.txt` 能正常打开。
- 一两周后在 Google Search Console 看收录了多少页（共 28 页）。

---

# HGS Website Launch Build v2.27 · Deploy Notes

- Production URL: https://happyglobalinc.com
- Launch: October 26, 2026 (China time)
- The "Last updated" date in the Privacy Policy and Terms of Use is October 26, 2026.
- **This build replaces v2.26, v2.24 and v2.21.** Please do not use any package sent earlier.

## What this is

A static site with 28 pages (14 Chinese, 14 English). There is no database and no server-side code. Upload the whole folder as-is to the web root, including `assets/` (with 3 videos), `robots.txt` and `sitemap.xml`.

## How it differs from the test build

- Search indexing is allowed. `robots.txt` is set to Allow and points to `sitemap.xml`. There is no noindex `_headers` file.
- Clean URLs without `index.html`, for example `/about/` and `/en/privacy/`. The server must serve the `index.html` inside each directory. Netlify, Cloudflare Pages and Nginx do this by default.
- Every page has a canonical URL and zh/en hreflang tags, all pointing to https://happyglobalinc.com. The link-preview image (og:image) uses a full URL.

## Please confirm and complete

1. **www redirect:** set up a 301 redirect from `www.happyglobalinc.com` to `https://happyglobalinc.com`, with HTTPS enabled.
2. **Existing content:** the store pages currently on happyglobalinc.com are to be cloned to happyglobalus.com by IT. Please finish the clone before switching the domain, and check that the store's pages, including its privacy policy, load on the new domain.
3. **Contact:** the site has no online form and no WeChat QR code. The only contact is service@happyglobalinc.com.
4. **Analytics and cookies:** the site loads no analytics and sets no cookies. If any are added later, tell Liyan first, because the Privacy Policy has to be updated.
5. **Search engines:** after launch, verify happyglobalinc.com in Google Search Console and Bing Webmaster Tools (a DNS TXT record is enough; no change to the site code), and submit `https://happyglobalinc.com/sitemap.xml`. Bing can import the site from Google Search Console.

## After launch, check

- Open the home page, the six service pages, About, Contact, Privacy Policy and Terms of Use, in both Chinese and English.
- Confirm all three videos play: the home-page hero video, the Open Platform Conference video and the Why Dallas video.
- Confirm that `https://happyglobalinc.com/sitemap.xml` and `/robots.txt` load.
- After one to two weeks, check in Google Search Console how many of the 28 pages are indexed.
