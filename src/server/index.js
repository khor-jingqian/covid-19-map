const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // disabled for security on local
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/test", async (req, res) => {
  res.send("Hello World!");
});

app.post("/test", async (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
