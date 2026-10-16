import { test, expect } from '@playwright/test';

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
  expect(requests.some(url => url.includes('community-donation-car'))).toBe(false);
  const distant = page.locator('img[src*="community-donation-car"]');
  await expect(distant).toHaveAttribute('loading', 'lazy');
  await distant.scrollIntoViewIfNeeded();
  await expect.poll(() => distant.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
  expect(requests.some(url => url.includes('community-donation-car'))).toBe(true);
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
