const express = require("express");
const puppeteer = require("puppeteer");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  await page.waitFor("tr");

  const tableContent = await page.evaluate(() => {
    const nl = document
      .getElementsByClassName("table")[0]
      .getElementsByTagName("tbody")[0]
      .getElementsByTagName("tr");

    const a = [];
    Array.from(nl).forEach((el) => a.push(el.innerText));
    return a;
  });
  await browser.close();
  return tableContent;
}

app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // disabled for security on local
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/test", async (req, res) => {
  const r = await scrapeProduct(
    "https://www.gov.sg/article/covid-19-public-places-visited-by-cases-in-the-community-during-infectious-period"
  );
  res.send(r);
});

app.post("/test", async (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
