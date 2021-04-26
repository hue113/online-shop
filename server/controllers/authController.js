// const crypto = require('crypto');
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");

const AppError = require("../utils/appError");
const User = require("../models/UserModel");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = async (user, statusCode, req, res) => {
  // console.log("createSendToken", user._id);
  const token = await signToken(user._id);
  res.cookie("jwt", token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true, // this is for heroku set up
    secure: req.secure || req.headers["x-forwarded-proto"] === "https",
    // sameSite: "none",
    // secure: true,
  });
  // console.log("token in create", token);

  // Remove password from output (body)
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    user,
  });
};

exports.signup = async (req, res, next) => {
  // console.log(req.body);
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  createSendToken(newUser, 201, req, res);
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Check if email and password exist
  if (!email || !password) {
    // return next(new AppError("Please provide email and password!", 400));
    res.status(400).json({
      status: "error",
      message: "Please provide email and password!",
    });
    return;
  }
  // 2) Check if user exists && password is correct
  const user = await User.findOne({ email }).select("+password");

  // check password by bcrypt.compare pass1234 === $2a$12$FqaTuRnuoO6yPow8QxUbluTis6
  if (!user || !(await user.correctPassword(password, user.password))) {
    // return next(new AppError("Incorrect email or password", 401));
    res.status(401).json({
      status: "error",
      message: "Incorrect email or password",
    });
    return;
  }

  // 3) If everything ok, send token to client
  createSendToken(user, 200, req, res);
};

exports.logout = (req, res) => {
  // console.log("logout");
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    // expires: new Date(),
    httpOnly: true,
  });
  res.status(200).json({ status: "success" });
};

exports.getMe = async (req, res, next) => {
  if (req.headers.authorization == undefined) {
    return res.status(400).json({
      status: "error",
      message: "You're not logged in!",
    });
    // return;
  } else if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer") &&
    req.headers.authorization.includes(undefined) == false
  ) {
    try {
      const token = req.headers.authorization.split("Bearer ")[1];
      // const token = req.params.token;
      // console.log("token", token);
      // 1) verify token
      const decoded = await jwt_decode(token);
      // console.log(decoded);

      // 2) Check if user still exists
      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        // return next();
        res.status(400).json({
          status: "error",
          message: "The user belonging to this token does no longer exist.",
        });
        return;
      }

      // 3) Check if user changed password after the token was issued
      if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next();
        // res.status(400).json({
        //   status: "error",
        //   message: "User recently changed password! Please log in again.",
        // });
      }

      // THERE IS A LOGGED IN USER
      res.locals.user = currentUser;
      // console.log(currentUser);
      res.status(200).json({
        status: "success",
        message: "user found",
        data: {
          user: currentUser,
        },
      });
      return;
    } catch (err) {
      // return next();
      res.status(400).json({
        status: "error",
        message: "invalid token",
      });
    }
  } else {
    res.status(400).json({
      status: "error",
      message: "You are not logged in! Please log in to get access!",
    });
  }
  // next(); // need to return next() above because next() should be only called once
};

exports.checkLoggedIn = async (req, res, next) => {
  if (req.headers.authorization == undefined) {
    res.status(400).json({
      status: "error",
      message: "You're not logged in!",
    });
  } else if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer") &&
    req.headers.authorization.includes(undefined) == false
  ) {
    try {
      const token = req.headers.authorization.split("Bearer ")[1];
      // 1) verify token
      const decoded = await jwt_decode(token);

      // 2) Check if user still exists
      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        res.status(400).json({
          status: "error",
          message: "The user belonging to this token does no longer exist.",
        });
      }

      // 3) Check if user changed password after the token was issued
      if (currentUser.changedPasswordAfter(decoded.iat)) {
        res.status(400).json({
          status: "error",
          message: "User recently changed password! Please log in again.",
        });
        // next();
      }

      // THERE IS A LOGGED IN USER
      res.locals.user = currentUser;
      // console.log(currentUser);
      // res.status(200).json({
      //   status: "success",
      //   message: "user found",
      //   data: {
      //     user: currentUser,
      //   },
      // });
      return next();
    } catch (err) {
      res.status(400).json({
        status: "error",
        message: "invalid token",
      });
    }
  } else {
    res.status(400).json({
      status: "error",
      message: "You are not logged in! Please log in to get access!",
    });
  }
  // next(); // need to return next() above because next() should be only called once
};

exports.updatePassword = async (req, res, next) => {
  // 1) check token validation
  const token = req.headers.authorization.split("Bearer ")[1];
  const decoded = await jwt_decode(token);
  let user = await User.findById(decoded.id);
  console.log(user.changedPasswordAfter(decoded.iat));
  if (user.changedPasswordAfter(decoded.iat)) {
    return next();
  }

  // 2) Get user from collection
  const id = res.locals.user._id;
  user = await User.findById(id).select("+password");

  // 3) Check if POSTed current password is correct
  const checkPassword = await user.correctPassword(
    req.body.passwordCurrent,
    user.password
  );
  // 3a. If not correct
  if (!checkPassword) {
    res.status(401).json({
      status: "error",
      message: "Your current password is wrong!",
    });
  } else if (req.body.password !== req.body.passwordConfirm) {
    res.status(401).json({
      status: "error",
      message: "Passwords are not the same!",
    });
  }
  // 3b. If correct
  else if (checkPassword) {
    user.password = req.body.password;
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    await user.save();

    try {
      // createSendToken(user, 200, req, res);
      const token = await signToken(user._id);
      console.log(token);
      res.cookie("jwt", token, {
        expires: new Date(
          Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true, // this is for heroku set up
        secure: req.secure || req.headers["x-forwarded-proto"] === "https",
      });
      user.password = undefined;
      console.log(user);
      res.status(200).json({
        status: "success",
        token,
        user,
      });
    } catch (e) {
      console.log("enter 6");
      res.status(401).json({
        status: "error",
        message: "Error happened",
      });
    }
  }

  return next();
};
