// Capture each slide as a 1920x1080 PNG for visual audit.
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const outDir = process.argv[2] || 'C:/tmp/slides';
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-gpu'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });

  await page.goto('http://localhost:8080/print', { waitUntil: 'networkidle0', timeout: 60000 });
  // Hide the print-hint sticky bar so it doesn't pollute screenshots.
  await page.addStyleTag({ content: '.print-hint{display:none !important} .print-view{padding:0 !important; background:#fff !important;}' });
  // Give fonts/images time
  await new Promise(r => setTimeout(r, 4000));

  const slides = await page.$$('.print-slide');
  console.log('found', slides.length, 'slides');
  for (let i = 0; i < slides.length; i++) {
    const el = slides[i];
    await el.scrollIntoView();
    await new Promise(r => setTimeout(r, 250));
    const file = path.join(outDir, `slide-${String(i + 1).padStart(2, '0')}.png`);
    await el.screenshot({ path: file, type: 'png' });
    console.log('captured', file);
  }
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
