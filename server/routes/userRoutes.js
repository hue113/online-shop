const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const orderRouter = require("./orderRoutes");

const userRouter = express.Router();

userRouter.use("/:userId/orders", orderRouter);

userRouter.post("/signup", authController.signup);
userRouter.post("/login", authController.login);
userRouter.get("/logout", authController.logout);
userRouter.get("/checkemail/:email", userController.checkEmail);

userRouter.use(authController.checkLoggedIn); // check logged in for following routes
userRouter.get("/me", authController.getMe);
userRouter.patch("/updateMe", userController.updateMe);
userRouter.patch("/updatePassword", authController.updatePassword);

userRouter.get("/", userController.getUsers);

module.exports = userRouter;
