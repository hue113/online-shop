// const multer = require('multer');
// const sharp = require('sharp');
const jwt_decode = require("jwt-decode");
const User = require("../models/UserModel");
// const AppError = require("../utils/appError");

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getUsers = async (req, res, next) => {
  const data = await User.find();

  res.status(200).json({
    status: "success",
    results: data.length,
    data: data,
  });
};

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.checkEmail = async (req, res, next) => {
  const checkEmailExisted = await User.find({ email: req.params.email });
  // console.log(req.params.email);

  res.status(200).json({
    status: "success",
    data: checkEmailExisted.length,
  });
};

exports.getUser = async (req, res, next) => {
  let user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({
      status: "success",
      message: "No document found with that ID",
    });
  }

  res.status(200).json({
    status: "success",
    data: user,
  });
};

exports.updateMe = async (req, res, next) => {
  // console.log("update me");
  // console.log('updateMe', req.file);
  const token = req.headers.authorization.split("Bearer ")[1];
  const decoded = await jwt_decode(token);
  let user = await User.findById(decoded.id);
  console.log(user.changedPasswordAfter(decoded.iat));
  if (user.changedPasswordAfter(decoded.iat)) {
    return next();
  }

  console.log("updateMe", req.body);
  const id = res.locals.user._id;

  // 1) Create error if user POSTs password data (this route is not for update password, security issues)
  if (req.body.password || req.body.passwordConfirm) {
    res.status(400).json({
      status: "error",
      message:
        "This route is not for password updates. Please use /updateMyPassword.",
    });
  }

  // 2) Filtered out unwanted fields names that are not allowed to be updated
  const filteredBody = filterObj(req.body, "name", "email", "address");
  if (req.file) filteredBody.photo = req.file.filename;

  // 3) Update user document
  const updatedUser = await User.findByIdAndUpdate(id, filteredBody, {
    new: true, // so that it returns the new object
    runValidators: true, // bz we want mongoose valid the document
  });

  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser,
    },
  });
};
