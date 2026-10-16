import { test, expect } from '@playwright/test';
import routes from '../src/data/routes.json';

const services = routes.filter(route => route.route.includes('/services/'));

test('service banners and text rows align at desktop, tablet and phone widths', async ({ page }) => {
  test.setTimeout(120_000);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  const measurements: Record<string, number> = {};
  for (const width of [1440, 1024, 768, 560, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    for (const locale of ['zh', 'en']) {
      const dimensions: { height: number; titleTop: number; descriptionTop: number }[] = [];
      for (const route of services.filter(route => route.locale === locale)) {
        await page.goto(route.route);
        const geometry = await page.locator('.service-hero').evaluate(hero => {
          const banner = hero.getBoundingClientRect();
          const title = hero.querySelector('h1')!.getBoundingClientRect();
          const description = hero.querySelector('p')!.getBoundingClientRect();
          return {
            height: banner.height,
            titleTop: title.top - banner.top,
            descriptionTop: description.top - banner.top,
            textFits: description.bottom <= banner.bottom - 24 && title.bottom <= description.top,
            noOverflow: document.documentElement.scrollWidth <= window.innerWidth,
          };
        });
        expect(geometry.textFits, `${width}px ${route.route}: complete text must fit`).toBe(true);
        expect(geometry.noOverflow, `${width}px ${route.route}: no horizontal overflow`).toBe(true);
        dimensions.push(geometry);
      }
      for (const dimension of ['height', 'titleTop', 'descriptionTop'] as const) {
        const values = dimensions.map(item => item[dimension]);
        expect(Math.max(...values) - Math.min(...values), `${width}px ${locale}: ${dimension}`).toBeLessThan(1);
      }
      measurements[`${width}px ${locale}`] = dimensions[0].height;
    }
  }
  console.log('Service banner heights:', measurements);
});

test('service tabs preserve scroll position on client navigation', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/services/channel/');
  await page.evaluate(() => window.scrollTo(0, 300));
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(300);
  await page.locator('.tabs').getByRole('link', { name: '内容与本地化营销', exact: true }).click();
  await expect(page).toHaveURL(/\/services\/content\/$/);
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(300);
});

test('hover and scroll reveals coexist, and reduced motion cancels movement', async ({ page }) => {
  await page.goto('/services/');
  const card = page.locator('.scard').first();
  await card.scrollIntoViewIfNeeded();
  await expect(card).toHaveClass(/done/);
  await page.mouse.move(0, 0);
  const resting = await card.boundingBox();
  await card.hover();
  await expect.poll(async () => (await card.boundingBox())!.y).toBeLessThan(resting!.y - 2);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect.poll(async () => (await card.boundingBox())!.y).toBeCloseTo(resting!.y, 0);
  await expect(page.locator('[data-reveal="pending"]')).toHaveCount(0);
  await page.goto('/services/finance-compliance/');
  expect(await page.locator('.page-hero h1').evaluate(element => element.getAnimations().length)).toBe(0);
});

test('capture service banner previews', async ({ page }, testInfo) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 900 });
    for (const locale of ['zh', 'en']) {
      await page.goto(`${locale === 'en' ? '/en' : ''}/services/finance-compliance/`);
      await page.screenshot({ path: testInfo.outputPath(`services-${locale}-${width}.png`) });
    }
  }
});
