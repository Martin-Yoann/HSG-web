# HGS 官网上线版 v2.28 · 部署说明

- 正式网址：https://happyglobalinc.com
- 这是上线后的更新：在线上版 v2.27 的基础上改了三处，详见同时附上的《v2.28 更新清单》。
- 使用条款的"最后更新"改为 2026 年 10 月 29 日；隐私政策仍是 2026 年 10 月 26 日。
- **这一版替代 v2.27**：以后请以 v2.28 为准。

## 这是什么

纯静态网站，共 28 页（中文 14 页、英文 14 页），不需要数据库，也不需要后端程序。图片、视频、CSS、JS 和 v2.27 完全一样，变的只有页面里的文字、链接和 `sitemap.xml`。

## 两种更新方式（选一种即可）

1. **整包替换**：把整个文件夹的内容原样上传到网站根目录，包括 `assets/`（含 3 条视频）、`robots.txt` 和 `sitemap.xml`。网站上 v2.27 之后你们自己加的改动（如果有）请保留或重新加上。
2. **按清单手动改**：如果你们是在自己的工程里维护网站，按《v2.28 更新清单》逐项改即可，清单写了每处改动出现在哪些页面、原文和新文。改完可以用清单最后的"自查"核一遍。

以后改官网，你们更方便用哪一种，请告诉丽艳，下次就按那种给。

## 和之前一样的设置（不用动）

- `robots.txt` 是 Allow，指向 `sitemap.xml`；没有 noindex。
- 网址不带 `index.html`；每页有 canonical 和中英 hreflang，指向 https://happyglobalinc.com。
- 联系方式只有 service@happyglobalinc.com，没有在线表单，也没有微信二维码。
- 没有统计代码，不设 Cookie。

## 更新后请做

- 在 Google Search Console 提交一次 `https://happyglobalinc.com/sitemap.xml`（`lastmod` 已改为 2026-10-29），可选：对 `/en/services/recruiting/`、`/en/services/finance-compliance/` 用"网址检查"请求编入索引。
- 做完告诉丽艳，我们这边会再核一遍线上页面。

---

# HGS Website Launch Build v2.28 · Deploy Notes

- Production URL: https://happyglobalinc.com
- This is a post-launch update to the live v2.27, with three changes. See the attached "v2.28 Change List".
- The "Last updated" date of the Terms of Use is now October 29, 2026. The Privacy Policy stays at October 26, 2026.
- **This build replaces v2.27.** Please use v2.28 from now on.

## What this is

A static site with 28 pages (14 Chinese, 14 English). No database and no server-side code. Images, videos, CSS and JS are identical to v2.27. Only page text, links and `sitemap.xml` have changed.

## Two ways to update (either is fine)

1. **Replace the whole package:** upload the whole folder as-is to the web root, including `assets/` (with 3 videos), `robots.txt` and `sitemap.xml`. If you made your own changes on the site after v2.27, please keep or re-apply them.
2. **Edit by hand from the list:** if you maintain the site in your own project, apply the changes in the "v2.28 Change List". It shows, for each change, the pages it appears on, the old text and the new text. Use the self-check at the end of the list when you are done.

Please tell Liyan which way is easier for you, so future updates come in that form.

## Unchanged settings (no action needed)

- `robots.txt` is Allow and points to `sitemap.xml`; no noindex.
- Clean URLs without `index.html`; every page has a canonical URL and zh/en hreflang tags pointing to https://happyglobalinc.com.
- The only contact is service@happyglobalinc.com. No online form and no WeChat QR code.
- No analytics and no cookies.

## After updating

- Resubmit `https://happyglobalinc.com/sitemap.xml` in Google Search Console (`lastmod` is now 2026-10-29). Optional: use URL Inspection to request indexing for `/en/services/recruiting/` and `/en/services/finance-compliance/`.
- Let Liyan know when it is done; we will then check the live pages.
