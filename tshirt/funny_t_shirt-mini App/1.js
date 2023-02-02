//1. basic server
//2. req, resp, routes, status-codes, content-type: html, json
//3. nodemon

const express = require("express");
const app = express();

app.listen(8888, () => console.log("Express Server started at 8888 "));

app.get("/", (req, resp) => {
  resp.status(200);
  resp.send("Welcome to funnyTshirts.com");
});


app.get("/trending", (req, resp) => {
  const tempTShirt =  "id:1";
  resp.status(200);
  resp.send(tempTShirt);
});
