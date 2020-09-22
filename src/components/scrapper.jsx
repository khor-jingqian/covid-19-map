const puppeteer = require("puppeteer");

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el1] = await page.$x(
    "/html/body/div[3]/div[2]/div/div/div/div[2]/div/table/tbody/tr[1]/td[3]/p"
  );
  const txt = await el1.getProperty("textContent");
  const rawText = await txt.jsonValue();

  console.log(rawText);

  browser.close();
}
export default scrapeProduct;
