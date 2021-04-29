const Shop = require("../models/ShopModel");

exports.getShops = async (req, res, next) => {
  const data = await Shop.find();

  res.status(200).json({
    status: "success",
    results: data.length,
    data: data,
  });
};

exports.getShop = async (req, res, next) => {
  const id = req.params.id;
  const data = await Shop.findById(id);
  // const data = await Shop.find({ _id: id });

  res.status(200).json({
    status: "success",
    results: data.length,
    data: data,
  });
};

exports.createShop = async (req, res, next) => {
  const data = await Shop.create(req.body);

  res.status(200).json({
    status: "success",
    data: data,
  });
};
