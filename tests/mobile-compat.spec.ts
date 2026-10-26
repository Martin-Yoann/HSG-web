import { test, expect } from '@playwright/test';
import routes from '../src/data/routes.json';

test('all bilingual pages fit narrow phones and tablets', async ({ page }) => {
  test.setTimeout(90000);
  for (const width of [320, 390, 768]) {
    await page.setViewportSize({ width, height: 844 });
    for (const route of routes) {
      await page.goto(route.route);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), route.route + ' at ' + width).toBe(true);
    }
  }
});

test('landscape menu scrolls to contact and mobile controls remain touch sized', async ({ page }) => {
  for (const prefix of ['', '/en']) {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto(prefix + '/');
    for (const control of await page.locator('.menu-btn,.langswitch a').all()) {
      const box = await control.boundingBox();
      expect(box!.height).toBeGreaterThanOrEqual(44);
      expect(box!.width).toBeGreaterThanOrEqual(44);
    }
    await page.setViewportSize({ width: 667, height: 320 });
    await page.locator('.menu-btn').click();
    const nav = page.locator('#main-navigation');
    expect(await nav.evaluate(e => e.getBoundingClientRect().bottom <= innerHeight)).toBe(true);
    await nav.locator('.nav__cta').click();
    await expect(page).toHaveURL(new RegExp(prefix + '/contact/$'));
    await expect(page.locator('.menu-btn')).toHaveAttribute('aria-expanded', 'false');
    expect(await page.locator('input[name=email]').evaluate(e => parseFloat(getComputedStyle(e).fontSize))).toBeGreaterThanOrEqual(16);
  }
});
