const Product = require("../models/ProductModel");

exports.getProducts = async (req, res, next) => {
  const data = await Product.find();

  res.status(200).json({
    status: "success",
    results: data.length,
    data: data,
  });
};

exports.getWomenProducts = async (req, res, next) => {
  const data = await Product.find({ category: "607b4a406a8ae23bbfd5a9da" });
  res.status(200).json({
    status: "success",
    results: data.length,
    data: data,
  });
};

exports.getMenProducts = async (req, res, next) => {
  const data = await Product.find({ category: "607b4a8b6a8ae23bbfd5a9db" });
  res.status(200).json({
    status: "success",
    results: data.length,
    data: data,
  });
};

exports.getKidsProducts = async (req, res, next) => {
  const data = await Product.find({ category: "607b4a9c6a8ae23bbfd5a9dc" });
  res.status(200).json({
    status: "success",
    results: data.length,
    data: data,
  });
};

exports.getAccessoriesProducts = async (req, res, next) => {
  const data = await Product.find({ category: "607b4ab76a8ae23bbfd5a9dd" });
  res.status(200).json({
    status: "success",
    results: data.length,
    data: data,
  });
};

exports.getNewArrivalsProducts = async (req, res, next) => {
  const data = await Product.find({ category: "607b4d71a07c4d3cd29eec13" });
  res.status(200).json({
    status: "success",
    results: data.length,
    data: data,
  });
};

exports.getSaleProducts = async (req, res, next) => {
  const data = await Product.find({ discount: { $ne: 0 } });
  res.status(200).json({
    status: "success",
    results: data.length,
    data: data,
  });
};

exports.get8PopularProducts = async (req, res, next) => {
  const data = await Product.find().sort({ saleCount: -1 }).limit(8);

  res.status(200).json({
    status: "success",
    results: data.length,
    data: data,
  });
};

exports.getProduct = async (req, res, next) => {
  const searchTerms = req.params.name.replace(/-/g, " ").split(".");
  const data = await Product.aggregate([
    {
      $addFields: {
        name: { $toString: "$name" },
      },
    },
    {
      $match: {
        // name: { $regex: `${searchTerms[0]}`, $options: "i" },
        sku: { $regex: `${searchTerms[1]}`, $options: "s" },
      },
    },
  ]).exec();

  res.status(200).json({
    status: "success",
    data: data,
  });
};

exports.createProduct = async (req, res, next) => {
  const data = await Product.create(req.body);

  res.status(200).json({
    status: "success",
    data: data,
  });
};

exports.updateProduct = async (req, res, next) => {
  const data = await Product.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({
    status: "success",
    data: data,
  });
};
