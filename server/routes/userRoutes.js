const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/signup", authController.signup);
userRouter.post("/login", authController.login);
userRouter.get("/logout", authController.logout);
userRouter.get("/checkemail/:email", userController.checkEmail);
userRouter.get("/jwt", authController.isLoggedIn);

// Middleware run in sequence --> put authController.protect here
// will require authentication for all middleware below
userRouter.use(authController.isLoggedIn); // Protect all routes after this middleware
userRouter.get("/me", userController.getMe, userController.getUser);

userRouter.get("/", userController.getUsers);

module.exports = userRouter;
