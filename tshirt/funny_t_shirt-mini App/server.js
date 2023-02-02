//1. list t-shirts - json, unique product
//2. diff between get & post, admin: form to add t-Shirt

const express = require("express");
const app = express();
const path = require("path");
const trendingTShirts = require("./product-list");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const productRouter = require("./routes/product-routes");
const adminRoute = require("./routes/product-routes");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/product", productRouter);
app.use("/admin/new",adminRoute);
app.set("view engine", "ejs");

app.listen(8888, () => console.log("Express Server started at 8888 "));


