const express = require("express");
const app = express();
const trendingTShirts = require("../product-list");

const adminRoute = express.Router();

adminRoute.get("/admin/new", (req, resp) => {
    resp.sendFile(__dirname + "/public/new-product.html");
  });
  
  adminRoute.post("/admin/addProduct", (req, resp) => {
    //collect all info, prepare tshirt, tShirt update list
    const body = req.body;
    const tShirt = {
      id: trendingTShirts.length + 1,
      color: body.color,
      size: body.size,
      quote: body.quote,
      price: body.price,
    };
    trendingTShirts.push(tShirt);
    resp.send("Added tShirt with Quote: " + tShirt.quote);
  });
  
module.exports = adminRoute;