import { test, expect } from '@playwright/test';

for (const prefix of ['', '/en']) {
  test(`contact is an independent page ${prefix || 'zh'}`, async ({ page }) => {
    await page.goto(`${prefix}/`);
    await expect(page.locator('main form')).toHaveCount(0);
    await page.locator('header > .wrap > a.btn').click();
    await expect(page).toHaveURL(new RegExp(`${prefix}/contact/$`));
    await expect(page.locator('main h1')).toBeVisible();
    await expect(page.locator('header > .wrap > a.btn')).toHaveAttribute('aria-current', 'page');
    await expect(page.locator('main a[href="mailto:service@happyglobalinc.com"]').first()).toHaveAttribute('href', 'mailto:service@happyglobalinc.com');
    await expect(page.locator('main form')).toHaveCount(0);
    await expect(page.locator('main a[href$="/privacy/"]')).toBeVisible();
    await page.reload();
    await expect(page.locator('main h1')).toBeVisible();
    await page.locator('.langswitch a').filter({ hasText: prefix ? '中文' : 'English' }).click();
    await expect(page).toHaveURL(new RegExp(`${prefix ? '' : '/en'}/contact/$`));
    for (const width of [375, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    }
  });
}
