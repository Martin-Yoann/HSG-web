import { test, expect } from '@playwright/test';

test('language switches keep the document, header and pill while updating SSR-compatible language', async ({ page, request }) => {
  const documents: string[] = [];
  const errors: string[] = [];
  page.on('request', request => { if (request.isNavigationRequest() && request.frame() === page.mainFrame()) documents.push(request.url()); });
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  await page.goto('/about/?source=language-test');
  await page.evaluate(() => {
    (window as any).__documentMarker = true;
    (window as any).__originalHeader = document.querySelector('header');
    (window as any).__originalPill = document.querySelector('.langswitch__pill');
  });
  await page.locator('.langswitch').getByRole('link', { name: 'English' }).click();
  await expect(page).toHaveURL(/\/en\/about\/\?source=language-test$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  expect(await page.evaluate(() => (window as any).__documentMarker)).toBe(true);
  expect(await page.evaluate(() => (window as any).__originalHeader === document.querySelector('header'))).toBe(true);
  expect(await page.evaluate(() => (window as any).__originalPill === document.querySelector('.langswitch__pill'))).toBe(true);
  await expect(page.locator('main')).toHaveAttribute('data-navigation', 'language');
  expect(await page.locator('.page-hero h1').evaluate(element => element.getAnimations().length)).toBe(0);
  await page.locator('.langswitch').getByRole('link', { name: '中文' }).click();
  await expect(page).toHaveURL(/\/about\/\?source=language-test$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'zh-CN');
  expect(documents).toHaveLength(1);
  expect(errors).toEqual([]);
  for (const [url, language] of [['/about/', 'zh-CN'], ['/en/about/', 'en']]) {
    const response = await request.get(url);
    expect(response.status()).toBe(200);
    expect(await response.text()).toContain(`<html lang="${language}">`);
  }
});

test('switching back and forth preserves scroll and browser history', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/services/channel/');
  await page.evaluate(() => window.scrollTo(0, 260));
  await page.locator('.langswitch').getByRole('link', { name: 'English' }).click();
  await expect(page).toHaveURL(/\/en\/services\/channel\/$/);
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(260);
  await page.goBack();
  await expect(page).toHaveURL(/\/services\/channel\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'zh-CN');
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(260);
  await page.goForward();
  await expect(page).toHaveURL(/\/en\/services\/channel\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
});

test('selection pill slides, supports keyboard and respects reduced motion', async ({ page }) => {
  await page.goto('/');
  const pill = page.locator('.langswitch__pill');
  const before = await pill.boundingBox();
  await page.locator('.langswitch').getByRole('link', { name: 'English' }).focus();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/\/en\/$/);
  await expect.poll(async () => (await pill.boundingBox())!.x).toBeGreaterThan(before!.x + before!.width - 1);
  expect(await pill.evaluate(element => parseFloat(getComputedStyle(element).transitionDuration))).toBeGreaterThan(0);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.locator('.langswitch').getByRole('link', { name: '中文' }).click();
  await expect(page).toHaveURL(/127\.0\.0\.1:3100\/$/);
  expect(await pill.evaluate(element => getComputedStyle(element).transitionDuration)).toBe('0s');
  expect(await pill.evaluate(element => getComputedStyle(element, '::before').animationName)).toBe('none');
});

test('switch position stays fixed on desktop and phone, with no page entrance replay', async ({ page }) => {
  for (const width of [1440, 1280, 1024, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/services/channel/');
    const control = page.locator('.langswitch');
    const before = await control.boundingBox();
    await control.getByRole('link', { name: 'English' }).click();
    await expect(page).toHaveURL(/\/en\/services\/channel\/$/);
    await expect(control).toHaveAttribute('aria-busy', 'false');
    const after = await control.boundingBox();
    expect(after!.x, `${width}px: switch x`).toBeCloseTo(before!.x, 0);
    expect(after!.width, `${width}px: switch width`).toBe(before!.width);
    expect(await page.locator('.page-hero img').evaluate(element => element.getAnimations().length)).toBe(0);
    expect(await page.locator('.page-hero h1').evaluate(element => element.getAnimations().length)).toBe(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `${width}px: no overflow`).toBe(true);
  }
});
