import { chromium } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

const base = process.env.PERF_BASE_URL || 'http://127.0.0.1:3100';
const output = process.argv[2] || 'test-results/loading-measurement.json';
const edge = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const browser = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_EXECUTABLE_PATH || (fs.existsSync(edge) ? edge : undefined) });
const results = [];
try {
  for (const profile of [
    { route: '/', width: 390, height: 844, dpr: 2 },
    { route: '/en/about/', width: 390, height: 844, dpr: 2 },
    { route: '/', width: 1440, height: 900, dpr: 1 },
  ]) {
    const context = await browser.newContext({ viewport: { width: profile.width, height: profile.height }, deviceScaleFactor: profile.dpr });
    const page = await context.newPage();
    const session = await context.newCDPSession(page);
    await session.send('Network.enable');
    await session.send('Network.setCacheDisabled', { cacheDisabled: true });
    await session.send('Network.emulateNetworkConditions', { offline: false, latency: 120, downloadThroughput: 200000, uploadThroughput: 100000, connectionType: 'cellular4g' });
    await session.send('Emulation.setCPUThrottlingRate', { rate: 4 });
    const resources = new Map();
    session.on('Network.responseReceived', ({ requestId, type, response }) => resources.set(requestId, { url: response.url, type, bytes: 0, status: response.status }));
    session.on('Network.loadingFinished', ({ requestId, encodedDataLength }) => { if (resources.has(requestId)) resources.get(requestId).bytes = encodedDataLength; });
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'connection', { configurable: true, value: { saveData: false, effectiveType: '4g' } });
      window.__loadingMetrics = { lcp: 0, shifts: [], tasks: [] };
      for (const type of ['largest-contentful-paint', 'layout-shift', 'longtask']) {
        new PerformanceObserver(list => list.getEntries().forEach(entry => {
          if (type === 'largest-contentful-paint') window.__loadingMetrics.lcp = entry.startTime;
          else if (type === 'layout-shift' && !entry.hadRecentInput) window.__loadingMetrics.shifts.push({ time: entry.startTime, value: entry.value });
          else if (type === 'longtask') window.__loadingMetrics.tasks.push(entry.duration);
        })).observe({ type, buffered: true });
      }
    });
    await page.goto(base + profile.route, { waitUntil: 'load', timeout: 60000 });
    await page.waitForTimeout(3000);
    const metrics = await page.evaluate(() => {
      const { lcp, shifts, tasks } = window.__loadingMetrics;
      let cls = 0, score = 0, start = 0, last = -Infinity;
      for (const shift of shifts) {
        if (shift.time - last > 1000 || shift.time - start > 5000) { score = 0; start = shift.time; }
        score += shift.value; cls = Math.max(cls, score); last = shift.time;
      }
      return {
        lcp: Math.round(lcp), cls, fcp: Math.round(performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0),
        longTaskBlockingTime: Math.round(tasks.reduce((total, time) => total + Math.max(0, time - 50), 0)),
        images: Array.from(document.images).filter(image => image.currentSrc).map(image => ({ url: image.currentSrc, rendered: Math.round(image.getBoundingClientRect().width), natural: image.naturalWidth })),
      };
    });
    const requests = [...resources.values()];
    const result = { ...profile, ...metrics, bytes: requests.reduce((sum, resource) => sum + resource.bytes, 0), requests: requests.length, resources: requests.sort((a, b) => b.bytes - a.bytes) };
    results.push(result);
    console.log(JSON.stringify({ route: profile.route, width: profile.width, lcp: result.lcp, fcp: result.fcp, cls: result.cls, bytes: result.bytes, requests: result.requests, largest: result.resources.slice(0, 6) }));
    await context.close();
  }
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, JSON.stringify({ base, conditions: 'Cold browser cache; 120ms latency, 1.6Mbps download, 4x CPU slowdown; load plus 3 seconds; bytes count completed responses only, not in-flight video transfers; local server image cache may be warm. Lab snapshot, not field Web Vitals or Lighthouse.', results }, null, 2));
} finally { await browser.close(); }
