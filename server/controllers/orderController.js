// const Stripe = require("stripe");
const jwt_decode = require("jwt-decode");
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
  // 1) check token validation
  const token = req.headers.authorization.split("Bearer ")[1];
  const decoded = await jwt_decode(token);
  let user = await User.findById(decoded.id);
  if (user.changedPasswordAfter(decoded.iat)) {
    return;
  }

  //2. Get orders
  if (req.params.userId) {
    const id = req.params.userId;
    const data = await Order.find({ user: id });

    // const formattedUserOrders = data.map(async (order) => {
    //   // let formattedOrder = order;
    //   let itemArr = [];

    //   await order.items.map(async (item) => {
    //     let fullProduct = await Product.findById(item.product); // ok
    //     const formattedItem = {
    //       _id: item._id,
    //       product: fullProduct,
    //       color: item.color,
    //       size: item.size,
    //       quantity: item.quantity,
    //     };
    //     // console.log(formattedItem);
    //     // await itemArr.push(formattedItem);
    //     // console.log(itemArr);
    //     return itemArr.push(formattedItem);
    //   });
    //   console.log(itemArr);
    //   const formattedOrder = {
    //     createdAt: order.createdAt,
    //     paid: order.paid,
    //     _id: order._id,
    //     items: itemArr,
    //     user: order.user,
    //     total: order.total,
    //     __v: order.__v,
    //   };
    //   // console.log(formattedOrder);
    //   return formattedOrder;
    // });

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
