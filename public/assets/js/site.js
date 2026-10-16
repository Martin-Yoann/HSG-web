/* Happy Global Service · site.js
   页眉随滚动变色、首屏视频、滚动渐显、手机菜单、表单提示。无第三方依赖，国内可直接访问。 */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- 页眉：首屏上透明，滚过首屏或没有首屏的页面上为白底 ----------
  var bar = document.querySelector('[data-topbar]');
  var heroEl = document.querySelector('.hero, .page-hero');
  if (bar) {
    if (!heroEl) {
      bar.classList.add('is-solid');
      document.body.classList.add('no-hero');
    } else {
      var solidAt = 48;
      var ticking = false;
      function updateBar() {
        ticking = false;
        bar.classList.toggle('is-solid', (window.scrollY || window.pageYOffset) > solidAt);
      }
      window.addEventListener('scroll', function () {
        if (!ticking) { ticking = true; window.requestAnimationFrame(updateBar); }
      }, { passive: true });
      updateBar();
    }
  }

  // ---------- 手机菜单 ----------
  var btn = document.querySelector('.menu-btn');
  if (bar && btn) {
    btn.addEventListener('click', function () {
      var open = bar.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // ---------- 首屏视频：桌面且非省流量时才加载，离开视口即暂停 ----------
  var video = document.querySelector('.hero__video');
  if (video) {
    var conn = navigator.connection || {};
    var okToLoad = !reduce && window.innerWidth >= 760 && !conn.saveData;
    if (okToLoad && video.getAttribute('data-src')) {
      video.src = video.getAttribute('data-src');
      video.preload = 'auto';
      var markReady = function () { video.classList.add('is-ready'); };
      video.addEventListener('playing', markReady, { once: true });
      var p = video.play();
      if (p && p.catch) p.catch(function () { /* 自动播放被拦截时保留海报图 */ });
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (es) {
          es.forEach(function (e) {
            if (e.isIntersecting) { var pp = video.play(); if (pp && pp.catch) pp.catch(function () {}); }
            else video.pause();
          });
        }, { threshold: 0.05 }).observe(video);
      }
      document.addEventListener('visibilitychange', function () {
        if (document.hidden) video.pause(); else { var pv = video.play(); if (pv && pv.catch) pv.catch(function () {}); }
      });
    }
  }

  // ---------- 滚动渐显 ----------
  var rvs = document.querySelectorAll('.rv');
  if (rvs.length) {
    var finish = function (e) { e.target.classList.add('done'); };
    if (reduce || !('IntersectionObserver' in window)) {
      rvs.forEach(function (el) { el.classList.add('in', 'done'); });
    } else {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            e.target.addEventListener('animationend', finish, { once: true });
            io.unobserve(e.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      rvs.forEach(function (el) { io.observe(el); });
    }
  }

  // ---------- 表单：接收地址随域名配置；未配置前给出提示，不丢用户输入 ----------
  var form = document.querySelector('form[data-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      if (!form.getAttribute('action') || form.getAttribute('action') === '#') {
        e.preventDefault();
        var msg = form.querySelector('.form__msg');
        if (msg) msg.textContent = form.getAttribute('data-pending') || '';
      }
    });
  }
})();
