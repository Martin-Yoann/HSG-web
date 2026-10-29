# HGS 官网 v2.28 更新清单（给 IT）

2026 年 10 月 29 日｜丽艳｜基于线上版 v2.27｜同时附上线包 `HGS官网_上线版_v2.28_20261029_给IT.zip`

**一句话**：这次只改三处文字和链接，图片、视频、CSS、JS、网址都不变。可以整包替换，也可以按下面的清单手动改；改完用最后的"自查"核一遍。以后你们更方便用哪一种，请告诉我。

## 改动一览

| # | 改什么 | 原文 | 新文 | 影响的页面 |
|---|---|---|---|---|
| 1 | 招聘板块英文名 | 短名 Recruiting & Search；全称 Recruiting & Executive Search | 短名、全称都改为 **Recruiting & Headhunting** | 英文 14 页 |
| 2 | 财税板块英文名 | 短名 Tax & Structure；全称 Tax & Listing-Structure Planning | 短名 **Finance & Structure**；全称 **Finance & Listing-Structure Planning** | 英文 14 页 |
| 3 | 产品与分销站域名 | happyglobals.com（文字和链接 https://happyglobals.com） | **happyglobalus.com**（链接 https://happyglobalus.com） | 中英 28 页 |

中文的板块名不变（招聘与猎头、财税与架构／财税与上市架构规划）。服务页网址不变（`/en/services/recruiting/`、`/en/services/finance-compliance/`）。正文里的描述性文字不改。

## 1. 招聘板块英文名 → Recruiting & Headhunting

**短名**（Recruiting & Search → Recruiting & Headhunting），共 35 处，在英文 14 页：

- 顶部"Services"下拉菜单里招聘那一项的粗体名称：英文 14 页，每页 1 处；
- 页脚"Services"栏：英文 14 页，每页 1 处；
- 服务页顶部的板块切换页签：英文 6 个服务页，每页 1 处；
- 招聘页大标题上方的小字："Services · Recruiting & Search" → "Services · Recruiting & Headhunting"（1 处）。

**全称**（Recruiting & Executive Search → Recruiting & Headhunting），共 8 处，在 3 页：

- 英文首页"六大服务"卡片标题（`/en/`，1 处）；
- 英文服务总览卡片标题（`/en/services/`，1 处）；
- 招聘服务页 `/en/services/recruiting/`：
  - `<title>` 和 `og:title`："Recruiting & Headhunting · Happy Global Service"；
  - 大标题 H1；
  - 3 张图片的 alt 文字（eco-hrs.jpg、hero-lobby.jpg、base-mascot.jpg）；
  - 结构化数据（JSON-LD）里的 `"name"`。

**不改**：菜单名下面那行小字说明（"Executive search, professional recruiting and talent advisory"）、各页 meta 描述、常见问题和正文里的 "recruiting and executive search"。

## 2. 财税板块英文名 → Finance & Structure / Finance & Listing-Structure Planning

**短名**（Tax & Structure → Finance & Structure），共 35 处，位置同第 1 项：下拉菜单、页脚、服务页页签，以及财税页大标题上方的小字 "Services · Tax & Structure" → "Services · Finance & Structure"。

**全称**（Tax & Listing-Structure Planning → Finance & Listing-Structure Planning），共 8 处，在 3 页：

- 英文首页"六大服务"卡片标题（1 处）；
- 英文服务总览卡片标题（1 处）；
- 财税服务页 `/en/services/finance-compliance/`：
  - `<title>` 和 `og:title`："Finance & Listing-Structure Planning · Happy Global Service"；
  - 大标题 H1；
  - 3 张图片的 alt 文字（stock-fin-advisors.jpg、stock-fin-taxform.jpg、stock-fin-review.jpg）；
  - 结构化数据（JSON-LD）里的 `"name"`。

**不改**：菜单名下面那行小字说明、meta 描述和正文里的 "tax and listing-structure planning"。

## 3. 产品与分销站：happyglobals.com → happyglobalus.com

链接从 `https://happyglobals.com` 改为 `https://happyglobalus.com`，显示的文字同步改。共 68 处，在中英 28 页：

- **页脚"Happy Global 体系／Our Network"栏**：中英 28 页，每页 1 个链接（链接地址和文字各 1 处）；
- **体系页**（`/ecosystem/`、`/en/ecosystem/`）：
  - 第三张卡片的名称、链接和图片 alt 文字；
  - 页面的 meta description 和 og:description（中文："……以及产品与分销站 happyglobalus.com。"；英文："……and to happyglobalus.com, our product and distribution site."）；
- **使用条款**（`/terms/`、`/en/terms/`）：
  - 第 12.2 条："happyglobalus.com 由 Happy Global Inc. 运营，适用该网站的条款。"／"happyglobalus.com is operated by Happy Global Inc. and governed by the terms posted on that site."；
  - 页首"最后更新"改为 **2026 年 10 月 29 日**／**October 29, 2026**。隐私政策的日期不变（10 月 26 日）。

体系页卡片的说明文字不变："产品与分销站。自有品牌在美国的线上与线下渠道。"／"Product and distribution site — our own brands' online and retail channels in the U.S."

## 4. sitemap.xml

28 个网址的 `lastmod` 都改为 `2026-10-29`（每页页脚都有改动）。

## 自查（改完后在线上全站搜索）

| 搜索 | 应为 |
|---|---|
| happyglobals.com | 0 处 |
| Recruiting & Search、Recruiting & Executive Search | 0 处 |
| Tax & Structure、Tax & Listing-Structure Planning | 0 处 |
| happyglobalus.com | 68 处，28 页 |
| Recruiting & Headhunting | 43 处，英文 14 页 |
| Finance & Structure | 35 处，英文 14 页 |
| Finance & Listing-Structure Planning | 8 处，英文 3 页 |

（次数按网页源代码里的写法计，"&" 在源代码里是 `&amp;`；JSON-LD 里写成 `\u0026`，那 1 处不在统计内。）

更新后请在 Google Search Console 重新提交 `https://happyglobalinc.com/sitemap.xml`，做完告诉丽艳，我们这边会再核一遍线上页面。

---

# HGS Website v2.28 Change List (for IT)

October 29, 2026 | Liyan | Based on the live v2.27 | Package attached: `HGS官网_上线版_v2.28_20261029_给IT.zip`

**In short:** only three text and link changes this time. Images, videos, CSS, JS and URLs are unchanged. You can replace the whole package, or apply the list below by hand; then use the self-check at the end. Please let me know which way is easier for you in future.

## Overview

| # | What | Old | New | Pages |
|---|---|---|---|---|
| 1 | Recruiting service line (English name) | Short: Recruiting & Search; full: Recruiting & Executive Search | Both short and full: **Recruiting & Headhunting** | 14 English pages |
| 2 | Finance service line (English name) | Short: Tax & Structure; full: Tax & Listing-Structure Planning | Short: **Finance & Structure**; full: **Finance & Listing-Structure Planning** | 14 English pages |
| 3 | Product and distribution site domain | happyglobals.com (text and link https://happyglobals.com) | **happyglobalus.com** (link https://happyglobalus.com) | All 28 pages (zh + en) |

Chinese service-line names do not change. Service page URLs do not change (`/en/services/recruiting/`, `/en/services/finance-compliance/`). Descriptive body text is not changed.

## 1. Recruiting → Recruiting & Headhunting

**Short name** (Recruiting & Search → Recruiting & Headhunting), 35 places on the 14 English pages:

- bold item name in the top "Services" dropdown menu: once on each of the 14 English pages;
- footer "Services" column: once on each of the 14 English pages;
- service-line tab bar at the top of service pages: once on each of the 6 English service pages;
- small label above the heading on the Recruiting page: "Services · Recruiting & Search" → "Services · Recruiting & Headhunting" (1 place).

**Full name** (Recruiting & Executive Search → Recruiting & Headhunting), 8 places on 3 pages:

- card title in the "six service lines" section of the English home page (`/en/`, 1 place);
- card title on the English Services overview (`/en/services/`, 1 place);
- Recruiting service page `/en/services/recruiting/`:
  - `<title>` and `og:title`: "Recruiting & Headhunting · Happy Global Service";
  - H1 heading;
  - alt text of 3 images (eco-hrs.jpg, hero-lobby.jpg, base-mascot.jpg);
  - `"name"` in the JSON-LD structured data.

**Not changed:** the small description line under the menu item ("Executive search, professional recruiting and talent advisory"), meta descriptions, and "recruiting and executive search" in the FAQ and body text.

## 2. Finance → Finance & Structure / Finance & Listing-Structure Planning

**Short name** (Tax & Structure → Finance & Structure), 35 places, same locations as item 1: dropdown menu, footer, service-page tabs, and the small label above the heading on the Finance page: "Services · Tax & Structure" → "Services · Finance & Structure".

**Full name** (Tax & Listing-Structure Planning → Finance & Listing-Structure Planning), 8 places on 3 pages:

- card title on the English home page (1 place);
- card title on the English Services overview (1 place);
- Finance service page `/en/services/finance-compliance/`:
  - `<title>` and `og:title`: "Finance & Listing-Structure Planning · Happy Global Service";
  - H1 heading;
  - alt text of 3 images (stock-fin-advisors.jpg, stock-fin-taxform.jpg, stock-fin-review.jpg);
  - `"name"` in the JSON-LD structured data.

**Not changed:** the small description line under the menu item, meta descriptions, and "tax and listing-structure planning" in body text.

## 3. Product and distribution site: happyglobals.com → happyglobalus.com

Change the link from `https://happyglobals.com` to `https://happyglobalus.com`, and the displayed text to match. 68 places across all 28 pages:

- **Footer "Happy Global 体系 / Our Network" column:** one link on each of the 28 pages (link address and link text);
- **Ecosystem page** (`/ecosystem/`, `/en/ecosystem/`):
  - name, link and image alt text of the third card;
  - meta description and og:description (Chinese: "……以及产品与分销站 happyglobalus.com。"; English: "...and to happyglobalus.com, our product and distribution site.");
- **Terms of Use** (`/terms/`, `/en/terms/`):
  - Section 12.2: "happyglobalus.com 由 Happy Global Inc. 运营，适用该网站的条款。" / "happyglobalus.com is operated by Happy Global Inc. and governed by the terms posted on that site.";
  - "Last updated" at the top: **2026 年 10 月 29 日** / **October 29, 2026**. The Privacy Policy date stays at October 26.

The card description on the Ecosystem page does not change: "产品与分销站。自有品牌在美国的线上与线下渠道。" / "Product and distribution site — our own brands' online and retail channels in the U.S."

## 4. sitemap.xml

`lastmod` for all 28 URLs is now `2026-10-29` (every page's footer changed).

## Self-check (search the live site after updating)

| Search for | Expected |
|---|---|
| happyglobals.com | 0 |
| Recruiting & Search, Recruiting & Executive Search | 0 |
| Tax & Structure, Tax & Listing-Structure Planning | 0 |
| happyglobalus.com | 68, on 28 pages |
| Recruiting & Headhunting | 43, on 14 English pages |
| Finance & Structure | 35, on 14 English pages |
| Finance & Listing-Structure Planning | 8, on 3 English pages |

(Counts are for the page source, where "&" is written as `&amp;`. In JSON-LD it is written as `\u0026`, so that occurrence is not counted.)

After updating, please resubmit `https://happyglobalinc.com/sitemap.xml` in Google Search Console and let Liyan know; we will then check the live pages.
