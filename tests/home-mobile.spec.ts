import { test, expect } from '@playwright/test';

for (const prefix of ['', '/en']) {
  test(`mobile home disclosures, service carousel and navigation ${prefix || 'zh'}`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(prefix + '/');
    const points = page.locator('.audience-point');
    await expect(points).toHaveCount(3);
    await expect(points.locator('.disclosure-panel[data-open=false]')).toHaveCount(3);
    const point = points.first();
    await point.getByRole('button').click();
    await expect(point.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
    expect(await point.locator('.disclosure-panel').evaluate(e => e.getBoundingClientRect().height)).toBeGreaterThan(20);
    await point.getByRole('button').press('Enter');
    await expect(point.locator('.disclosure-panel')).toHaveAttribute('inert', '');
    await expect.poll(() => point.locator('.disclosure-panel').evaluate(e => e.getBoundingClientRect().height)).toBe(0);

    const carousel = page.locator('.service-carousel');
    const track = carousel.locator('.sgrid');
    const cards = track.locator('.scard');
    await expect(cards).toHaveCount(6);
    await carousel.scrollIntoViewIfNeeded();
    expect(await track.evaluate(e => e.scrollWidth > e.clientWidth)).toBe(true);
    const arrows = carousel.locator('.service-carousel__arrow');
    await expect(arrows.first()).toBeDisabled();
    await arrows.last().click();
    await expect.poll(() => track.evaluate(e => e.scrollLeft)).toBeGreaterThan(100);
    const dots = carousel.locator('.service-carousel__dots button');
    await expect(dots.nth(1)).toHaveAttribute('aria-current', 'true');
    await dots.last().click();
    await expect(arrows.last()).toBeDisabled();
    await expect.poll(() => cards.last().evaluate(e => {
      const parent = e.parentElement!.getBoundingClientRect();
      return e.getBoundingClientRect().right <= parent.right + 1;
    })).toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await cards.last().click();
    await expect(page).toHaveURL(new RegExp(`${prefix}/services/hr-ops/$`));

    await page.goto(prefix + '/');
    await page.setViewportSize({ width: 1440, height: 900 });
    await expect(page.locator('.audience-point button')).toHaveCount(0);
    await expect(page.locator('.audience-point .disclosure-panel[data-open=true]')).toHaveCount(3);
    await expect(page.locator('.service-carousel__controls')).toBeHidden();
    expect(await page.locator('.service-carousel .sgrid').evaluate(e => e.scrollWidth <= e.clientWidth)).toBe(true);
  });
}

test('footer panels animate both directions, support interruption and respect reduced motion', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/en/');
  const button = page.locator('footer .footer__toggle').first();
  const id = await button.getAttribute('aria-controls');
  const panel = page.locator(`[id="${id}"]`);
  await button.click();
  await expect(panel).toHaveAttribute('data-open', 'true');
  expect(await panel.evaluate(e => getComputedStyle(e).transitionDuration)).toContain('0.34s');
  await expect.poll(() => panel.evaluate(e => e.getAnimations().filter(a => a.playState === 'running').length)).toBe(0);
  expect(await panel.evaluate(e => e.getBoundingClientRect().height)).toBeGreaterThan(100);
  await button.click();
  await expect(panel).toHaveAttribute('inert', '');
  // Reverse a closing transition without stale timers leaving the panel hidden.
  await button.click();
  await expect(panel).toHaveAttribute('data-open', 'true');
  await expect.poll(() => panel.evaluate(e => e.getBoundingClientRect().height)).toBeGreaterThan(100);
  await button.click();
  await expect.poll(() => panel.evaluate(e => e.getBoundingClientRect().height)).toBe(0);
  await expect(panel).toBeHidden();

  await page.emulateMedia({ reducedMotion: 'reduce' });
  await button.click();
  await expect(panel).toBeVisible();
  expect(await panel.evaluate(e => e.getAnimations().length)).toBe(0);
  await page.setViewportSize({ width: 1440, height: 900 });
  await expect(page.locator('footer .disclosure-panel[data-open=true]')).toHaveCount(4);
});
