const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-gpu'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://localhost:8080/print', { waitUntil: 'networkidle0', timeout: 60000 });
  await new Promise(r => setTimeout(r, 3000));
  const data = await page.evaluate(() => {
    const slides = Array.from(document.querySelectorAll('.print-slide'));
    return slides.map((s, i) => {
      const rect = s.getBoundingClientRect();
      const inner = s.firstElementChild ? s.firstElementChild.getBoundingClientRect() : null;
      const footer = s.querySelector('.absolute.bottom-0');
      const footerText = footer ? footer.innerText : null;
      const pill = s.querySelector('.uppercase');
      return {
        i: i + 1,
        w: Math.round(rect.width), h: Math.round(rect.height),
        innerW: inner ? Math.round(inner.width) : null,
        innerH: inner ? Math.round(inner.height) : null,
        footer: footerText,
      };
    });
  });
  console.log(JSON.stringify(data, null, 2));
  await browser.close();
})();
