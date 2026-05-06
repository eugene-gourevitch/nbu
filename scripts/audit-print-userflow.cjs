// Simulates what a real site user does to "Save as PDF" from /print.
// Three runs: Letter (US default), A4 (EU default), 1920x1080 (proper).
// Each run also dumps per-slide PNGs.

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PRINT_PORT || '8080';
const URL = `http://localhost:${PORT}/print`;

async function runOnce({ label, pdfPath, pngDir, pdfOpts }) {
  fs.mkdirSync(pngDir, { recursive: true });
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-gpu'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });

  // Stop the auto-print trigger from interfering with programmatic capture.
  await page.evaluateOnNewDocument(() => {
    // No-op print so the auto-trigger inside Print.tsx does nothing.
    window.print = () => {};
  });

  await page.goto(URL, { waitUntil: 'networkidle0', timeout: 60000 });
  await page.emulateMediaType('print');
  // Extra time for fonts (Cormorant + Inter) and any layout settle.
  await new Promise((r) => setTimeout(r, 5000));

  await page.pdf({
    path: pdfPath,
    printBackground: true,
    preferCSSPageSize: false, // simulate user picking paper size in dialog
    ...pdfOpts,
  });
  console.log(`[${label}] wrote PDF ${pdfPath}`);

  // Per-slide PNGs (always at 1920x1080 element box).
  const slides = await page.$$('.print-slide');
  console.log(`[${label}] found ${slides.length} slides`);
  for (let i = 0; i < slides.length; i++) {
    const el = slides[i];
    await el.scrollIntoView();
    await new Promise((r) => setTimeout(r, 100));
    const file = path.join(pngDir, `slide-${String(i + 1).padStart(2, '0')}.png`);
    await el.screenshot({ path: file, type: 'png' });
  }
  console.log(`[${label}] captured ${slides.length} PNGs into ${pngDir}`);
  await browser.close();
}

(async () => {
  // Letter
  await runOnce({
    label: 'letter',
    pdfPath: 'C:/Users/egour/nbu/audit-pixel-userflow-letter.pdf',
    pngDir: 'C:/tmp/slides-userflow-letter',
    pdfOpts: { format: 'Letter' },
  });
  // A4
  await runOnce({
    label: 'a4',
    pdfPath: 'C:/Users/egour/nbu/audit-pixel-userflow-a4.pdf',
    pngDir: 'C:/tmp/slides-userflow-a4',
    pdfOpts: { format: 'A4' },
  });
  // Proper 1920x1080
  await runOnce({
    label: '1920',
    pdfPath: 'C:/Users/egour/nbu/audit-pixel-userflow-1920.pdf',
    pngDir: 'C:/tmp/slides-userflow-1920',
    pdfOpts: {
      width: '1920px',
      height: '1080px',
      preferCSSPageSize: true,
    },
  });
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
