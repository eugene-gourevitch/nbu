// Navigate the live deck, capture console output + page errors + screenshot.
const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const url = process.argv[2] || 'http://localhost:8081/';
  const out = process.argv[3] || 'C:/tmp/deck-debug.png';

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-gpu'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  const logs = [];
  page.on('console', m => logs.push(`[${m.type()}] ${m.text()}`));
  page.on('pageerror', e => logs.push(`[pageerror] ${e.message}\n${e.stack || ''}`));
  page.on('requestfailed', r => logs.push(`[reqfail] ${r.url()} ${r.failure()?.errorText}`));
  page.on('response', r => {
    if (r.status() >= 400) logs.push(`[http ${r.status()}] ${r.url()}`);
  });

  try {
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
  } catch (e) {
    logs.push(`[goto-error] ${e.message}`);
  }
  await new Promise(r => setTimeout(r, 2000));

  // Inspect what's actually in the DOM
  const dom = await page.evaluate(() => {
    const root = document.getElementById('root');
    return {
      title: document.title,
      rootHTML_len: root ? root.innerHTML.length : -1,
      rootHTML_head: root ? root.innerHTML.slice(0, 800) : null,
      hasPresentation: !!document.querySelector('.presentation-fullscreen, [class*="slide"]'),
      bodyClasses: document.body.className,
      visibleText: document.body.innerText.slice(0, 500),
    };
  });

  await page.screenshot({ path: out, fullPage: false, type: 'png' });
  console.log('LOGS:\n' + logs.join('\n'));
  console.log('\nDOM:\n' + JSON.stringify(dom, null, 2));
  console.log('\nScreenshot:', out);
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
