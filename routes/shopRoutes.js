const express = require("express");
const shopController = require("../controllers/shopController");
const productRouter = require("./productRoutes");

const shopRouter = express.Router();

shopRouter.use("/:categoryId/products", productRouter);

shopRouter.route("/").get(shopController.getShops);
shopRouter.route("/").post(shopController.createShop);
shopRouter.route("/:id").get(shopController.getShop);

module.exports = shopRouter;
