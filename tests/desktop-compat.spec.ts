import { test, expect } from '@playwright/test';
import routes from '../src/data/routes.json';

test('desktop pages fit laptop, desktop and large screens', async ({ page }) => {
  test.setTimeout(120000);
  for (const [width,height] of [[1280,720],[1440,900],[1920,1080]]) {
    await page.setViewportSize({width,height});
    for (const route of routes) {
      await page.goto(route.route);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), route.route + ' at ' + width).toBe(true);
      if (route.route === '/' || route.route === '/en/') {
        expect(await page.locator('.hero').evaluate(e => e.getBoundingClientRect().height), route.route).toBeLessThanOrEqual(height);
      }
    }
  }
});

test('tall sidebars remain reachable and offscreen strips stop animating', async ({ page }) => {
  await page.setViewportSize({width:1280,height:720});
  await page.goto('/en/services/channel/');
  const aside = page.locator('.aside');
  await aside.evaluate(e => { e.style.minHeight = '900px'; });
  await expect(aside).toHaveAttribute('data-too-tall');
  await expect(aside).toHaveCSS('position','static');
  await aside.evaluate(e => { e.style.minHeight = ''; });
  await expect(aside).not.toHaveAttribute('data-too-tall');
  await page.goto('/');
  await page.locator('footer').scrollIntoViewIfNeeded();
  await expect(page.locator('.strip__track')).toHaveCSS('animation-play-state','paused');
  await page.locator('.strip').scrollIntoViewIfNeeded();
  await expect(page.locator('.strip__track')).toHaveCSS('animation-play-state','running');
});
