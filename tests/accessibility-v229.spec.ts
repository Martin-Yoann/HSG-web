import { test, expect } from '@playwright/test';

test('privacy links are underlined and Dallas captions use the page language', async ({ page, request }) => {
  for (const locale of ['zh', 'en']) {
    const prefix = locale === 'en' ? '/en' : '';
    for (const path of ['/', '/contact/']) {
      await page.goto(`${prefix}${path}`);
      await expect(page.locator('.contact__privacy a')).toHaveCSS('text-decoration-line', 'underline');
    }
    for (const path of ['/', '/about/']) {
      await page.goto(`${prefix}${path}`);
      const video = page.locator('video').filter({ has: page.locator('source[src$="why-dallas.mp4"]') });
      await expect(video.locator('track')).toHaveCount(2);
      await expect(video.locator('track[default]')).toHaveAttribute('srclang', locale);
      // Loading the text track proves the browser can parse the supplied WebVTT.
      await video.evaluate((element: HTMLVideoElement) => {
        for (const track of Array.from(element.textTracks)) track.mode = 'showing';
      });
      await expect.poll(() => video.evaluate((element: HTMLVideoElement) =>
        Array.from(element.textTracks).every(track => (track.cues?.length ?? 0) > 0),
      )).toBe(true);
    }
    const response = await request.get(`/assets/video/why-dallas.${locale}.vtt`);
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('text/vtt');
    expect(await response.text()).toMatch(/^WEBVTT/);
  }
});

test('pause motion stops ambient animation and cannot be undone by automatic playback', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'connection', { configurable: true, value: { saveData: false, effectiveType: '4g' } });
  });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  const button = page.locator('.motion-toggle');
  const video = page.locator('.hero__video');
  await expect(video).toHaveAttribute('src', '/assets/video/hero-loop.mp4');
  await button.focus();
  await page.keyboard.press('Enter');
  await expect(button).toHaveAttribute('aria-pressed', 'true');
  await expect(button).toHaveText('播放动画');
  await expect.poll(() => video.evaluate((element: HTMLVideoElement) => element.paused)).toBe(true);
  for (const selector of ['.strip__track', '.hero__poster', '.hero__scroll span']) {
    await expect(page.locator(selector).first()).toHaveCSS('animation-play-state', 'paused');
  }
  await page.locator('.strip').scrollIntoViewIfNeeded();
  await page.evaluate(() => {
    window.scrollTo(0, 0);
    document.dispatchEvent(new Event('visibilitychange'));
  });
  await expect(button).toBeInViewport();
  await page.waitForTimeout(400);
  expect(await video.evaluate((element: HTMLVideoElement) => element.paused)).toBe(true);
  await page.locator('.langswitch').getByRole('link', { name: 'English' }).click();
  await expect(page).toHaveURL(/\/en\/$/);
  await expect(button).toHaveText('Play motion');
  await expect(button).toHaveAttribute('aria-pressed', 'true');
  await button.click();
  await expect(button).toHaveText('Pause motion');
  await expect(button).toHaveAttribute('aria-pressed', 'false');
  await expect.poll(() => video.evaluate((element: HTMLVideoElement) => !element.paused)).toBe(true);
});

test('mobile motion control is reachable and reduced motion hides it', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 640 });
  await page.goto('/');
  const button = page.locator('.motion-toggle');
  await expect(button).toBeVisible();
  expect((await button.boundingBox())!.height).toBeGreaterThanOrEqual(44);
  await button.click();
  await expect(button).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('.hero__video')).not.toHaveAttribute('src');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(button).toBeHidden();
});
