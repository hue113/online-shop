// const multer = require('multer');
// const sharp = require('sharp');
const User = require("../models/userModel");
// const AppError = require("../utils/appError");

// const filterObj = (obj, ...allowedFields) => {
//   const newObj = {};
//   Object.keys(obj).forEach((el) => {
//     if (allowedFields.includes(el)) newObj[el] = obj[el];
//   });
//   return newObj;
// };

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
  console.log(req.params.email);

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
