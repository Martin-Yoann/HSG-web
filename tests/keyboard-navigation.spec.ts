import { test, expect } from '@playwright/test';

for (const prefix of ['', '/en']) {
  test(`skip link and service disclosure support keyboard navigation ${prefix || 'zh'}`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(prefix + '/');
    await page.keyboard.press('Tab');
    const skip = page.locator('.skip-link');
    await expect(skip).toBeFocused();
    await expect(skip).toBeInViewport();
    await page.keyboard.press('Enter');
    await expect(page.locator('main')).toBeFocused();
    const toggle = page.locator('.services-toggle');
    const links = page.locator('#services-navigation a');
    await toggle.focus();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await page.keyboard.press('Space');
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    for (const link of await links.all()) {
      await page.keyboard.press('Tab');
      await expect(link).toBeFocused();
      await expect(link).toBeVisible();
    }
    await page.keyboard.press('Tab');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await toggle.focus();
    await page.keyboard.press('Enter');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Escape');
    await expect(toggle).toBeFocused();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(page.locator('#services-navigation')).toHaveAttribute('inert', '');
    await page.keyboard.press('Tab');
    await expect(page.locator('header nav > a').nth(1)).toBeFocused();
    // Hover remains available, and clicking a service follows a real route.
    await page.locator('.has-menu > a').hover();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await links.first().click();
    await expect(page).toHaveURL(new RegExp(prefix + '/services/channel/$'));
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });
}

test('header fits at desktop breakpoint and skip link works after mobile navigation', async ({ page }) => {
  for (const width of [1181, 1280, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/en/');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    const controls = await page.locator('header > .wrap > *').all();
    for (const control of controls) {
      if (!(await control.isVisible())) continue;
      const box = (await control.boundingBox())!;
      expect(box.x).toBeGreaterThanOrEqual(0);
      expect(box.x + box.width).toBeLessThanOrEqual(width);
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.locator('.menu-btn').focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('header nav > a').first()).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(page.locator('.menu-btn')).toBeFocused();
  await page.keyboard.press('Enter');
  await page.locator('header nav').getByRole('link', { name: '关于我们', exact: true }).click();
  await page.locator('.skip-link').focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
  await expect(page.locator('.services-toggle')).toBeHidden();
});
