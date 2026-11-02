import { test, expect } from '@playwright/test';
import routes from '../src/data/routes.json';

function rgb(value: string) { return value.match(/[\d.]+/g)!.map(Number); }
function luminance(color: number[]) {
  return color.slice(0, 3).map(value => {
    value /= 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  }).reduce((total, value, index) => total + value * [0.2126, 0.7152, 0.0722][index], 0);
}
function ratio(a: number[], b: number[]) {
  const [dark, light] = [luminance(a), luminance(b)].sort((x, y) => x - y);
  return (light + 0.05) / (dark + 0.05);
}
function overWhite(color: number[]) {
  return color.slice(0, 3).map(value => value * (color[3] ?? 1) + 255 * (1 - (color[3] ?? 1)));
}

test('ambient text surfaces retain contrast even over a white image frame', async ({ page }) => {
  await page.goto('/en/');
  for (const [surface, text] of [['.stat', '.stat__label'], ['.proof li', '.proof li']]) {
    const background = rgb(await page.locator(surface).first().evaluate(e => getComputedStyle(e).backgroundColor));
    const foreground = rgb(await page.locator(text).first().evaluate(e => getComputedStyle(e).color));
    expect(ratio(foreground, overWhite(background)), surface).toBeGreaterThanOrEqual(4.5);
  }
  const headerBackground = overWhite(rgb(await page.locator('header').evaluate(e => getComputedStyle(e).backgroundColor)));
  for (const link of await page.locator('header nav > a').all()) {
    expect(ratio(rgb(await link.evaluate(e => getComputedStyle(e).color)), headerBackground)).toBeGreaterThanOrEqual(4.5);
  }
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/en/services/recruiting/');
    const overlay = await page.locator('.page-hero').evaluate(e => getComputedStyle(e, '::after').backgroundImage);
    const stops = [...overlay.matchAll(/rgba\([^)]+\)/g)].map(match => rgb(match[0]));
    expect(stops.length).toBeGreaterThan(0);
    const foreground = rgb(await page.locator('.page-hero p').evaluate(e => getComputedStyle(e).color));
    for (const stop of stops) expect(ratio(foreground, overWhite(stop))).toBeGreaterThanOrEqual(4.5);
  }
});

test('all pages reflow at equivalent 200 percent desktop zoom viewports', async ({ browser }) => {
  test.setTimeout(180000);
  // A 1440x900 desktop at 200% has a 720x450 CSS layout viewport.
  // DPR 2 alone is not zoom; the halved layout viewport drives the reflow.
  const context = await browser.newContext({ deviceScaleFactor: 2, reducedMotion: 'reduce' });
  const page = await context.newPage();
  try {
    for (const width of [640, 720, 960]) {
      await page.setViewportSize({ width, height: 450 });
      for (const route of routes) {
        await page.goto(route.route);
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${route.route} at ${width}`).toBe(true);
        const hero = page.locator('.page-hero');
        if (await hero.count()) {
          expect(await hero.evaluate(e => [...e.querySelectorAll('.wrap > *')].every(child => {
            const box = child.getBoundingClientRect();
            return box.bottom <= e.getBoundingClientRect().bottom + 1;
          })), route.route + ' hero copy').toBe(true);
        }
        await page.locator('.menu-btn').click();
        const nav = page.locator('#main-navigation');
        await expect(nav).toBeVisible();
        expect(await nav.evaluate(e => e.getBoundingClientRect().bottom <= innerHeight + 1)).toBe(true);
        await page.keyboard.press('Escape');
      }
    }
  } finally { await context.close(); }
});

test('both Dallas tracks cover the same 51 ordered cues and activate at seek positions', async ({ page }) => {
  await page.goto('/about/');
  const result = await page.locator('video').filter({ has: page.locator('source[src$="why-dallas.mp4"]') }).evaluate(async (video: HTMLVideoElement) => {
    video.preload = 'auto';
    video.load();
    await new Promise<void>((resolve, reject) => {
      video.addEventListener('loadedmetadata', () => resolve(), { once: true });
      video.addEventListener('error', () => reject(new Error('Video metadata failed')), { once: true });
    });
    for (const track of Array.from(video.textTracks)) track.mode = 'hidden';
    await Promise.all(Array.from(video.querySelectorAll('track')).map(track => track.readyState === 2 ? Promise.resolve() : new Promise<void>((resolve, reject) => {
      track.addEventListener('load', () => resolve(), { once: true });
      track.addEventListener('error', () => reject(new Error('Caption load failed')), { once: true });
    })));
    const tracks = Array.from(video.textTracks).map(track => ({ language: track.language, cues: Array.from(track.cues ?? []).map(cue => ({ start: cue.startTime, end: cue.endTime, text: (cue as VTTCue).text })) }));
    const samples = [];
    for (const index of [0, 12, 25, 38, 50]) {
      const cue = tracks[0].cues[index];
      video.currentTime = (cue.start + cue.end) / 2;
      await new Promise<void>(resolve => video.addEventListener('seeked', () => resolve(), { once: true }));
      samples.push(Array.from(video.textTracks).every((track, i) => (track.activeCues?.[0] as VTTCue)?.text === tracks[i].cues[index].text));
    }
    return { duration: video.duration, tracks, samples };
  });
  expect(result.tracks.map(track => track.language)).toEqual(['en', 'zh']);
  for (const track of result.tracks) {
    expect(track.cues).toHaveLength(51);
    track.cues.forEach((cue, index) => {
      expect(cue.start).toBeGreaterThanOrEqual(index ? track.cues[index - 1].end : 0);
      expect(cue.end).toBeGreaterThan(cue.start);
      expect(cue.end).toBeLessThanOrEqual(result.duration);
      expect(cue.text.trim()).not.toBe('');
    });
  }
  expect(result.tracks[0].cues.map(({ start, end }) => [start, end])).toEqual(result.tracks[1].cues.map(({ start, end }) => [start, end]));
  expect(result.samples).toEqual([true, true, true, true, true]);
});
