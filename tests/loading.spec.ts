import { test, expect } from '@playwright/test';

test('offscreen video posters are deferred without downloading video files', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const requests: string[] = [];
  page.on('request', request => requests.push(decodeURIComponent(request.url())));
  await page.goto('/');
  await expect(page.locator('video[data-poster]').first()).not.toHaveAttribute('poster');
  expect(requests.some(url => url.includes('poster-opc-short'))).toBe(false);
  const video = page.locator('video[data-poster]').first();
  await video.scrollIntoViewIfNeeded();
  await expect(video).toHaveAttribute('poster', /\/_next\/image/);
  await expect.poll(() => requests.some(url => url.includes('poster-opc-short'))).toBe(true);
  expect(requests.some(url => url.includes('.mp4'))).toBe(false);
});

test('hero is responsive and preloaded; distant photos load on scroll', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const requests: string[] = [];
  page.on('request', request => requests.push(decodeURIComponent(request.url())));
  await page.goto('/about/');
  const hero = page.locator('.page-hero > img');
  await expect(hero).toHaveAttribute('fetchpriority', 'high');
  await expect(hero).toHaveAttribute('sizes', '100vw');
  await expect(page.locator('link[rel=preload][as=image]')).toHaveCount(1);
  await expect.poll(() => hero.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
  expect(await hero.evaluate((img: HTMLImageElement) => new URL(img.currentSrc).pathname)).toMatch(/^\/_next\/image\/?$/);
  expect(requests.some(url => url.includes('us-chamber-shay'))).toBe(false);
  const distant = page.locator('img[src*="us-chamber-shay"]');
  await expect(distant).toHaveAttribute('loading', 'lazy');
  await distant.scrollIntoViewIfNeeded();
  await expect.poll(() => distant.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
  expect(requests.some(url => url.includes('us-chamber-shay'))).toBe(true);
});

test('video posters use the displayed width and screen density without fetching the movie', async ({ browser }) => {
  for (const profile of [{ width: 390, height: 844, dpr: 2 }, { width: 1440, height: 900, dpr: 1 }]) {
    const context = await browser.newContext({ viewport: profile, deviceScaleFactor: profile.dpr, reducedMotion: 'reduce' });
    try {
      const page = await context.newPage();
      const movies: string[] = [];
      page.on('request', request => { if (request.url().includes('.mp4')) movies.push(request.url()); });
      await page.goto('/en/about/');
      const video = page.locator('video[data-poster]').first();
      await expect(video).not.toHaveAttribute('poster');
      await video.scrollIntoViewIfNeeded();
      await expect(video).toHaveAttribute('poster', /\/_next\/image/);
      const { selected, required, quality } = await video.evaluate((element: HTMLVideoElement) => {
        const url = new URL(element.poster);
        return { selected: Number(url.searchParams.get('w')), required: element.getBoundingClientRect().width * devicePixelRatio, quality: url.searchParams.get('q') };
      });
      expect(selected).toBeGreaterThanOrEqual(Math.min(required, 1920));
      expect(selected).toBeLessThan(required * 1.35);
      expect(quality).toBe('65');
      expect(movies).toEqual([]);
      if (profile.width === 390) {
        await page.setViewportSize({ width: 1440, height: 900 });
        await expect.poll(() => video.evaluate((element: HTMLVideoElement) => Number(new URL(element.poster).searchParams.get('w')))).toBeGreaterThan(selected);
      }
    } finally { await context.close(); }
  }
});

test('photo strip candidates match phone and tablet card sizes', async ({ browser }) => {
  for (const width of [390, 800]) {
    const context = await browser.newContext({ viewport: { width, height: 844 }, deviceScaleFactor: 2, reducedMotion: 'reduce' });
    try {
      const page = await context.newPage();
      await page.goto('/');
      const photo = page.locator('.strip__item img').first();
      await photo.scrollIntoViewIfNeeded();
      await expect.poll(() => photo.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true);
      const candidate = await photo.evaluate((image: HTMLImageElement) => {
        const url = new URL(image.currentSrc);
        return { width: url.searchParams.get('w'), quality: url.searchParams.get('q'), rendered: image.getBoundingClientRect().width };
      });
      expect(candidate).toEqual({ width: '520', quality: '60', rendered: 260 });
    } finally { await context.close(); }
  }
});

test('constrained networks skip speculative routes and video, while clicks still navigate', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'connection', { configurable: true, value: { saveData: true, effectiveType: '3g' } });
  });
  const requests: string[] = [];
  page.on('request', request => requests.push(request.url()));
  await page.goto('/');
  await page.waitForTimeout(2800);
  await expect(page.locator('.hero__video')).not.toHaveAttribute('src');
  expect(requests.filter(url => url.includes('_rsc=') || url.includes('.mp4'))).toEqual([]);
  await page.locator('.langswitch').getByRole('link', { name: 'English' }).click();
  await expect(page).toHaveURL(/\/en\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
});

test('desktop video waits for the poster; mobile never downloads video', async ({ page }) => {
  // This case covers a fast connection; the previous case covers constrained networks.
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'connection', { configurable: true, value: { saveData: false, effectiveType: '4g' } });
  });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  await expect(page.locator('.hero__video')).toHaveAttribute('src', '/assets/video/hero-loop.mp4');
  const timing = await page.evaluate(() => {
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    const video = resources.find(entry => entry.name.includes('hero-loop.mp4'));
    const poster = resources.find(entry => entry.name.includes('hero-hq-front'));
    return { video: video?.startTime, poster: poster?.responseEnd };
  });
  // Wait for the media resource timing to become available before comparing.
  await expect.poll(() => page.evaluate(() => performance.getEntriesByType('resource').some(entry => entry.name.includes('hero-loop.mp4')))).toBe(true);
  const videoStart = await page.evaluate(() => performance.getEntriesByType('resource').find(entry => entry.name.includes('hero-loop.mp4'))!.startTime);
  expect(videoStart).toBeGreaterThanOrEqual(timing.poster!);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload();
  await page.waitForTimeout(500);
  await expect(page.locator('.hero__video')).not.toHaveAttribute('src');
  expect(await page.evaluate(() => performance.getEntriesByType('resource').some(entry => entry.name.includes('.mp4')))).toBe(false);
});
