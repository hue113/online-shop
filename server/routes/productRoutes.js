const express = require("express");
const productController = require("../controllers/productController");

const productRouter = express.Router();

productRouter
  .route("/")
  .get(productController.getProducts)
  .post(productController.createProduct);
productRouter.route("/:id").patch(productController.updateProduct);

productRouter.route("/women").get(productController.getWomenProducts);
productRouter.route("/men").get(productController.getMenProducts);
productRouter.route("/kids").get(productController.getKidsProducts);
productRouter
  .route("/accessories")
  .get(productController.getAccessoriesProducts);
productRouter
  .route("/new-arrivals")
  .get(productController.getNewArrivalsProducts);
productRouter.route("/sale").get(productController.getSaleProducts);
productRouter.route("/8popular").get(productController.get8PopularProducts);
productRouter.route("/:name").get(productController.getProduct);

module.exports = productRouter;
