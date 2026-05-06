// Render /print under @media print, save PDF + per-slide PNGs for visual audit.
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const outDir = process.argv[2] || 'C:/tmp/slides-print';
  const pdfPath = process.argv[3] || 'C:/Users/egour/nbu/audit-deck.pdf';
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-gpu'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });

  await page.goto('http://localhost:8080/print', { waitUntil: 'networkidle0', timeout: 60000 });
  await page.emulateMediaType('print');
  // Settle fonts/images
  await new Promise(r => setTimeout(r, 4000));

  // PDF (single document, multi-page)
  await page.pdf({
    path: pdfPath,
    width: '1920px',
    height: '1080px',
    printBackground: true,
    preferCSSPageSize: true,
  });
  console.log('wrote PDF', pdfPath);

  // PNGs under print emulation
  const slides = await page.$$('.print-slide');
  console.log('found', slides.length, 'slides');
  for (let i = 0; i < slides.length; i++) {
    const el = slides[i];
    await el.scrollIntoView();
    await new Promise(r => setTimeout(r, 200));
    const file = path.join(outDir, `slide-${String(i + 1).padStart(2, '0')}.png`);
    await el.screenshot({ path: file, type: 'png' });
    console.log('captured', file);
  }
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
