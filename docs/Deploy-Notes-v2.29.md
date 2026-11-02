# HGS 官网上线版 v2.29 · 部署说明 / Deploy Notes

- 正式网址 Live site：https://happyglobalinc.com
- 基于线上 v2.28，只做无障碍技术修复，详见《v2.29 更新清单》。This release is based on live v2.28 and contains accessibility fixes only; see the v2.29 Update List.
- **这一版替代 v2.28。** This release replaces v2.28.

## 两种更新方式（选一种）· Two ways to update (pick one)

1. **整包替换 Full replacement**：把 `site_happyglobalinc.com` 文件夹里的内容原样上传到网站根目录（含 `assets/`、`robots.txt`、`sitemap.xml`）。v2.28 之后你们自己加的改动（如果有）请保留或重新加上。
2. **按清单手动改 Manual changes**：按《v2.29 更新清单》改三处，清单里有完整代码。两个新的字幕文件在 `site_happyglobalinc.com/assets/video/` 里：`why-dallas.en.vtt`、`why-dallas.zh.vtt`。

## 和之前一样的设置（不用动）· Unchanged settings

- `robots.txt` 是 Allow，指向 `sitemap.xml`；没有 noindex。
- 联系方式只有 service@happyglobalinc.com，没有在线表单，没有统计代码，不设 Cookie。
- **请不要安装无障碍插件（accessibility overlay widget）。** Please do not install accessibility overlay widgets.

## 更新后请做 · After updating

- 按清单最后的"自查"核一遍；`.vtt` 文件能直接打开、字幕能显示。
- 在 Google Search Console 提交一次 `https://happyglobalinc.com/sitemap.xml`（lastmod 已改为 2026-10-30）。
- 做完告诉丽艳，我们会再用无障碍检测工具扫一遍线上页面。
