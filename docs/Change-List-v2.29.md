# HGS 官网 v2.29 更新清单 · v2.29 Update List

2026-10-30｜Happy Global Inc.｜基于线上 v2.28｜Based on live v2.28

这一版只做无障碍（accessibility）方面的技术修复，文字内容、图片、视频都不变。
This release contains accessibility fixes only. Text content, images and videos are unchanged.

## 一共三处改动 · Three changes

### 1. "隐私政策"链接加下划线 · Underline the privacy link

- 位置 Where：首页和联系页底部联系区里的"隐私政策 / Privacy Policy"链接（中英 4 页）。
- 原因 Why：链接只靠颜色区分（WCAG 1.4.1）。
- 改法 How：CSS 增加 / add
```css
.contact__privacy a{text-decoration:underline;text-underline-offset:2px}
```

### 2. Why Dallas 视频加字幕 · Captions for the Why Dallas video

- 位置 Where：首页"看看我们"和关于页的 Why Dallas 视频（中英 4 页）。
- 原因 Why：视频里有同事讲话，需要字幕（WCAG 1.2.2）。
- 新文件 New files：`assets/video/why-dallas.en.vtt`（英文字幕 / English captions）、`assets/video/why-dallas.zh.vtt`（中文字幕 / Chinese subtitles）。
- 改法 How：在这个 `<video>` 里、`<source>` 后面加两行 `<track>`。中文页默认显示中文，英文页默认显示英文。
```html
<!-- 英文页 English pages -->
<track kind="captions" src="/assets/video/why-dallas.en.vtt" srclang="en" label="English" default>
<track kind="subtitles" src="/assets/video/why-dallas.zh.vtt" srclang="zh" label="中文">
<!-- 中文页 Chinese pages：default 放在中文那一行 -->
<track kind="captions" src="/assets/video/why-dallas.en.vtt" srclang="en" label="English">
<track kind="subtitles" src="/assets/video/why-dallas.zh.vtt" srclang="zh" label="中文" default>
```
- 注意 Note：`.vtt` 要以 `text/vtt` 提供，和页面同域名。上线后直接打开 https://happyglobalinc.com/assets/video/why-dallas.en.vtt 应该能看到文字。

### 3. 首屏"暂停动画"按钮 · "Pause motion" button on the home hero

- 位置 Where：首页首屏左下角（中英 2 页）。
- 原因 Why：首屏背景视频、照片带会自动循环播放，要给访客一个暂停的办法（WCAG 2.2.2）。
- HTML：放在首屏 `<section class="hero">` 里、滚动提示 `.hero__scroll` 前面。中文页文字是"暂停动画 / 播放动画"。
```html
<button class="motion-toggle" type="button" aria-pressed="false" data-pause="Pause motion" data-play="Play motion"><span class="motion-toggle__icon" aria-hidden="true"></span><span class="motion-toggle__txt">Pause motion</span></button>
```
- CSS：加在 site.css 末尾 / append to site.css
```css
/* v2.29 无障碍：链接下划线、暂停动画按钮 */
.contact__privacy a{text-decoration:underline;text-underline-offset:2px}
.strip:focus-within .strip__track{animation-play-state:paused}
.motion-toggle{position:absolute;left:24px;bottom:24px;z-index:3;display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border:1px solid rgba(255,255,255,.7);border-radius:999px;background:rgba(1,29,100,.72);color:#fff;font-family:inherit;font-weight:600;font-size:13px;line-height:1;cursor:pointer}
.motion-toggle:hover{background:rgba(1,29,100,.9)}
.motion-toggle__icon{position:relative;width:10px;height:12px;flex:none}
.motion-toggle__icon::before,.motion-toggle__icon::after{content:"";position:absolute;top:0;width:3px;height:12px;background:#fff;border-radius:1px}
.motion-toggle__icon::before{left:1px}.motion-toggle__icon::after{right:1px}
.motion-toggle[aria-pressed="true"] .motion-toggle__icon::before{left:1px;width:0;height:0;background:none;border-style:solid;border-width:6px 0 6px 10px;border-color:transparent transparent transparent #fff;border-radius:0}
.motion-toggle[aria-pressed="true"] .motion-toggle__icon::after{display:none}
.motion-paused .strip__track{animation-play-state:paused}
.motion-paused .hero__scroll span{animation:none}
@media (prefers-reduced-motion:reduce){.motion-toggle{display:none}}
```
- JS：加在 site.js 的"首屏视频"那段后面；并在原有两处自动续播的地方加上"用户已暂停就不续播"的判断 / Add after the hero-video block; the two existing auto-resume calls (IntersectionObserver and visibilitychange) now skip when `motion-paused` is set.
```js
// ---------- v2.29 暂停动画（WCAG 2.2.2）：首屏视频、照片带、滚动提示 ----------
  var mt = document.querySelector('.motion-toggle');
  if (mt) {
    mt.addEventListener('click', function () {
      var paused = document.documentElement.classList.toggle('motion-paused');
      mt.setAttribute('aria-pressed', paused ? 'true' : 'false');
      var t = mt.querySelector('.motion-toggle__txt');
      if (t) t.textContent = paused ? mt.getAttribute('data-play') : mt.getAttribute('data-pause');
      if (video) {
        if (paused) video.pause();
        else if (video.src) { var pp = video.play(); if (pp && pp.catch) pp.catch(function () {}); }
      }
    });
  }

  
```

## 其他 · Other

- 28 个页面都要更新：页面引用的 CSS、JS 版本号变了。All 28 pages changed because the CSS/JS version string changed.
- `sitemap.xml` 的 lastmod 改为 2026-10-30。
- 图片、视频文件不变。Images and video files are unchanged.
- 整包替换的话，用同时附上的 `site_happyglobalinc.com` 文件夹。For a full replacement, use the attached `site_happyglobalinc.com` folder.

## 自查 · Self-check after update

1. 首页、联系页的"隐私政策 / Privacy Policy"链接有下划线。
2. 首页播放 Why Dallas 视频，播放器的字幕菜单里能选 English / 中文，字幕跟着说话出现。
3. 首页左下角点"暂停动画 / Pause motion"：背景视频和下方照片带停住，按钮变成"播放动画 / Play motion"；再点一次恢复。
4. 打开 https://happyglobalinc.com/assets/video/why-dallas.en.vtt 能看到字幕文字。
5. 改完告诉丽艳，我们会用无障碍检测工具再扫一遍线上。
