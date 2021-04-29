const express = require("express");
const productController = require("../controllers/productController");

const productRouter = express.Router({ mergeParams: true });

productRouter
  .route("/")
  .get(productController.getProducts)
  .post(productController.createProduct);

productRouter
  .route("/:id")
  .get(productController.getProduct)
  .patch(productController.updateProduct);

productRouter.route("/url/:name").get(productController.getProductByUrl);

module.exports = productRouter;
