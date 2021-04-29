const express = require("express");
const orderController = require("../controllers/orderController");
const authController = require("../controllers/authController");

const orderRouter = express.Router({ mergeParams: true });

orderRouter.use(authController.checkLoggedIn);

// orderRouter.get(
//   "/checkout-session/:tourId",
//   orderController.getCheckoutSession
// );

// orderRouter.use(authController.restrictTo("admin", "lead-guide"));

orderRouter
  .route("/")
  .get(orderController.getOrders)
  .post(orderController.createOrder);

orderRouter.route("/:id").get(orderController.getOrder);
//   .patch(orderController.updateOrder)
//   .delete(orderController.deleteOrder);

module.exports = orderRouter;
