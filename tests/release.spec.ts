import { test, expect } from '@playwright/test';
import routes from '../src/data/routes.json';

test('release indexing and historical commerce redirects are correct', async ({ request }) => {
  const robots = await request.get('/robots.txt');
  expect(await robots.text()).toContain('Allow: /');
  expect(await robots.text()).toContain('https://happyglobalinc.com/sitemap.xml');
  const sitemap = await request.get('/sitemap.xml');
  const xml = await sitemap.text();
  expect(xml.match(/<loc>/g)).toHaveLength(28);
  for (const route of routes) expect(xml).toContain(`<loc>https://happyglobalinc.com${route.route}</loc>`);
  const contact = await request.get('/contact/', { maxRedirects: 0 });
  expect(contact.status()).toBe(200);
  for (const path of ['/pages/contact/', '/pages/contact-1/']) {
    const oldContact = await request.get(path + '?source=bookmark', { maxRedirects: 0 });
    expect(oldContact.status()).toBe(307);
    expect(oldContact.headers().location).toBe('/contact/?source=bookmark');
  }
  const old = await request.get('/products/example/?source=old', { maxRedirects: 0 });
  expect(old.status()).toBe(308);
  expect(old.headers().location).toContain('https://www.happyglobalus.com/products/example');
  expect(old.headers().location).toContain('source=old');
});

test('privacy and terms support phone layouts, language switching and footer links', async ({ page }) => {
  for (const route of ['/privacy/', '/terms/', '/en/privacy/', '/en/terms/']) {
    await page.setViewportSize({ width: 320, height: 844 });
    await page.goto(route);
    await expect(page.locator('main h1')).toBeVisible();
    await expect(page.locator('link[hreflang="x-default"]')).toHaveAttribute('href', `https://happyglobalinc.com${route.replace(/^\/en/, '')}`);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await expect(page.locator('footer a[href$="/privacy/"]')).toHaveCount(1);
    await expect(page.locator('footer a[href$="/terms/"]')).toHaveCount(1);
    await page.locator('.langswitch').getByRole('link', { name: route.startsWith('/en') ? '中文' : 'English' }).click();
    await expect(page).toHaveURL(new RegExp((route.startsWith('/en') ? route.slice(3) : '/en' + route) + '$'));
  }
});

test('both supplied content videos decode and play without placeholders', async ({ page }) => {
  test.setTimeout(60_000);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await expect(page.locator('.video-placeholder')).toHaveCount(0);
  const videos = page.locator('video[controls]');
  await expect(videos).toHaveCount(2);
  for (const video of await videos.all()) {
    await expect(video).toHaveAttribute('preload', 'none');
    await video.scrollIntoViewIfNeeded();
    await video.evaluate(async (element: HTMLVideoElement) => {
      element.muted = true;
      await element.play();
    });
    await expect.poll(() => video.evaluate((element: HTMLVideoElement) => element.currentTime)).toBeGreaterThan(0);
    expect(await video.evaluate((element: HTMLVideoElement) => element.videoWidth)).toBeGreaterThan(0);
    await video.evaluate((element: HTMLVideoElement) => element.pause());
  }
});
