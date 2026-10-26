import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import { parseDocument } from 'htmlparser2';
import routes from '../src/data/routes.json';

function originalText(file: string) {
  const doc = parseDocument(fs.readFileSync(`legacy/${file}`, 'utf8'));
  const texts: string[] = [];
  function walk(node: any, insideMain = false) {
    const inside = insideMain || node.name === 'main';
    if (inside && node.type === 'text' && node.data.trim()) texts.push(node.data.replace(/\s+/g, ' ').trim());
    for (const child of node.children || []) walk(child, inside);
  }
  walk(doc);
  return texts;
}

test('all 28 routes preserve v2.27 content, metadata and language', async ({ page }) => {
  const failures: string[] = [];
  page.on('pageerror', error => failures.push(error.message));
  page.on('response', response => { if (response.status() >= 400) failures.push(`${response.status()} ${response.url()}`); });
  for (const route of routes) {
    const response = await page.goto(route.route);
    expect(response?.status(), route.route).toBe(200);
    await expect(page.locator('html')).toHaveAttribute('lang', route.locale === 'en' ? 'en' : 'zh-CN');
    await expect(page).toHaveTitle(route.title);
    await expect(page.locator('main')).toHaveCount(1);
    await expect(page.locator('header.topbar')).toHaveCount(1);
    await expect(page.locator('footer.footer')).toHaveCount(1);
    const actual = await page.locator('main').evaluate(main => {
      const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT);
      const texts: string[] = [];
      let node;
      while ((node = walker.nextNode())) {
        const value = node.textContent?.replace(/\s+/g, ' ').trim();
        if (value && !node.parentElement?.closest('.contact-form')) texts.push(value);
      }
      return texts;
    });
    expect(actual, route.route).toEqual(originalText(route.source));
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://happyglobalinc.com${route.route}`);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `Horizontal overflow: ${route.route}`).toBe(true);
  }
  expect(failures).toEqual([]);
});

test('old index.html routes redirect permanently to the matching page', async ({ request }) => {
  for (const route of routes) {
    const old = route.route + 'index.html';
    const response = await request.get(old, { maxRedirects: 0 });
    expect(response.status(), old).toBe(308);
    expect(new URL(response.headers().location, 'http://127.0.0.1:3100').pathname, old).toBe(route.route);
  }
});

test('client navigation resets interactions and language switch preserves the page', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  // A marker proves that same-language links use client navigation.
  await page.evaluate(() => { (window as any).__navigationMarker = true; });
  await page.locator('header nav').getByRole('link', { name: '关于我们', exact: true }).click();
  await expect(page).toHaveURL(/\/about\/$/);
  expect(await page.evaluate(() => (window as any).__navigationMarker)).toBe(true);
  await expect(page.locator('header nav').getByRole('link', { name: '关于我们', exact: true })).toHaveAttribute('aria-current', 'page');
  await page.locator('.langswitch').getByRole('link', { name: 'English' }).click();
  await expect(page).toHaveURL(/\/en\/about\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  expect(await page.evaluate(() => (window as any).__navigationMarker)).toBe(true);
  await page.locator('.langswitch').getByRole('link', { name: '中文' }).click();
  await expect(page).toHaveURL(/\/about\/$/);
  await page.locator('header').getByRole('link', { name: '联系我们', exact: true }).click();
  await expect(page).toHaveURL(/\/contact\/$/);
  await expect(page.locator('main a[href="mailto:service@happyglobalinc.com"]').first()).toBeVisible();
  await expect(page.locator('main form')).toHaveCount(1);
  await page.goBack();
  await expect(page).toHaveURL(/\/about\/$/);
  expect(errors).toEqual([]);
});

test('mobile layout, menu, escape and navigation work', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const route of ['/', '/services/channel/', '/contact/', '/en/', '/en/services/channel/', '/en/contact/']) {
    await page.goto(route);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), route).toBe(true);
  }
  await page.goto('/');
  const menu = page.locator('.menu-btn');
  await menu.click();
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await menu.click();
  await page.locator('header nav').getByRole('link', { name: '关于我们', exact: true }).click();
  await expect(page).toHaveURL(/\/about\/$/);
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
});

test('reduced motion keeps content visible without loading hero video', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.locator('h1.rv')).toHaveClass(/done/);
  await expect(page.locator('.hero__video')).not.toHaveAttribute('src');
});

test('capture desktop and mobile home previews', async ({ page }, testInfo) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/');
  await expect(page.locator('h1.rv')).toHaveClass(/done/);
  await page.screenshot({ path: testInfo.outputPath('home-desktop.png') });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: testInfo.outputPath('home-mobile.png') });
});
