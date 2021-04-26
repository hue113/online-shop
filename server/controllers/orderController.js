// const Stripe = require("stripe");
const Product = require("../models/ProductModel");
const User = require("../models/UserModel");
const Order = require("../models/OrderModel");

exports.createOrder = async (req, res, next) => {
  const data = await Order.create(req.body);

  res.status(200).json({
    status: "success",
    data: data,
  });
};

exports.getOrder = async (req, res, next) => {
  const id = req.params.id;
  const data = await Order.findById(id);

  res.status(200).json({
    status: "success",
    data: data,
  });
};

exports.getOrders = async (req, res, next) => {
  // console.log(req.params.userId);
  if (req.params.userId) {
    const id = req.params.userId;
    const data = await Order.find({ user: id });

    res.status(200).json({
      status: "success",
      result: data.length,
      data: data,
    });
  } else {
    const data = await Order.find();

    res.status(200).json({
      status: "success",
      result: data.length,
      data: data,
    });
  }
};

// exports.updateOrder = async (req, res, next) => {
//   const data = await Order.findByIdAndUpdate(req.params.id, req.body);

//   res.status(200).json({
//     status: "success",
//     data: data,
//   });
// };
