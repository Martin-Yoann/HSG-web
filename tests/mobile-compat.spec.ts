import { test, expect } from '@playwright/test';
import routes from '../src/data/routes.json';

test('all bilingual pages fit narrow phones and tablets', async ({ page }) => {
  test.setTimeout(180000);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const width of [320, 375, 390, 430, 560, 600, 768, 900, 1024, 1180]) {
    await page.setViewportSize({ width, height: 844 });
    for (const route of routes) {
      await page.goto(route.route);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), route.route + ' at ' + width).toBe(true);
      const overflow = await page.locator('header > .wrap').evaluate(header => {
        return [...header.children].some(child => {
          const element = child as HTMLElement;
          if (!element.getClientRects().length) return false;
          const box = element.getBoundingClientRect();
          return box.left < -1 || box.right > innerWidth + 1;
        });
      });
      expect(overflow, `Header controls fit: ${route.route} at ${width}`).toBe(false);
    }
  }
});

test('menu resets between desktop and mobile and closes outside the header', async ({ page }) => {
  for (const prefix of ['', '/en']) {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(prefix + '/');
    const button = page.locator('.menu-btn');
    await button.click();
    await expect(button).toHaveAttribute('aria-expanded', 'true');
    await page.setViewportSize({ width: 1440, height: 900 });
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    await page.setViewportSize({ width: 390, height: 844 });
    await expect(page.locator('#main-navigation')).toBeHidden();
    await button.click();
    await page.mouse.click(20, 750);
    await expect(button).toHaveAttribute('aria-expanded', 'false');
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
  }
});
