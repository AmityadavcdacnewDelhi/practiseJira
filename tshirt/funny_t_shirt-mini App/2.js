//1. serve static content using express
//2. include html, css: index, trending, contact-us

const express = require("express");
const app = express();
const path = require("path");
const trendingTShirts = require("./product-list");

app.use(express.static(path.join(__dirname, "public")));


app.listen(8888, () => console.log("Express Server started at 8888 "));

app.get("/product/trending", (req, resp) => {
  resp.status(200);
  resp.json(trendingTShirts);
});
