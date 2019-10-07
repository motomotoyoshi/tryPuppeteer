const puppeteer = require('puppeteer');
const iPhone = puppeteer.devices['iPhone 6'];

puppeteer.launch({args: ['--lang=ja']}).then(async browser => {
    const page = await browser.newPage();
    await page.emulate(iPhone);
    await page.goto('https://www.google.com');
    await page.screenshot({ path: 'googleByIphone.png' });

    await browser.close();
});