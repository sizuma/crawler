const puppeteer = require('puppeteer');
const {
    sleep,
} = require('./util');

module.exports = async (url, func) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.addScriptTag({ url: 'https://code.jquery.com/jquery-3.2.1.min.js' });
    await sleep(500);
    const result = await page.evaluate(func);
    await page.close();
    await browser.close();
    return result;
};
