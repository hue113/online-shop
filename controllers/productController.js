const Product = require("../models/ProductModel");
const Shop = require("../models/ShopModel");

exports.getProducts = async (req, res, next) => {
  if (req.params.categoryId) {
    switch (req.params.categoryId) {
      case "popular":
        const popularProducts = await Product.find()
          .sort({ saleCount: -1 })
          .limit(8);
        res.status(200).json({
          status: "success",
          results: popularProducts.length,
          data: popularProducts,
        });
        break;

      case "sale":
        const saleProducts = await Product.find({ discount: { $ne: 0 } });
        res.status(200).json({
          status: "success",
          results: saleProducts.length,
          data: saleProducts,
        });
        break;

      case "women":
      case "men":
      case "kids":
      case "accessories":
      case "new-arrivals":
        const category = await Shop.find({ slug: req.params.categoryId });
        const categoryProducts = await Product.find({
          category: category[0]._id,
        });

        res.status(200).json({
          status: "success",
          results: categoryProducts.length,
          data: categoryProducts,
        });
        break;

      default:
        const data = await Product.find({ category: req.params.categoryId });
        res.status(200).json({
          status: "success",
          results: data.length,
          data: data,
        });
    }
  } else {
    const data = await Product.find();
    res.status(200).json({
      status: "success",
      results: data.length,
      data: data,
    });
  }
};

exports.getProduct = async (req, res, next) => {
  // console.log(req.params.id);
  const data = await Product.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: data,
  });
};

exports.getProductByUrl = async (req, res, next) => {
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

// exports.getWomenProducts = async (req, res, next) => {
//   const data = await Product.find({ category: "607b4a406a8ae23bbfd5a9da" });
//   res.status(200).json({
//     status: "success",
//     results: data.length,
//     data: data,
//   });
// };

// exports.getMenProducts = async (req, res, next) => {
//   const data = await Product.find({ category: "607b4a8b6a8ae23bbfd5a9db" });
//   res.status(200).json({
//     status: "success",
//     results: data.length,
//     data: data,
//   });
// };

// exports.getKidsProducts = async (req, res, next) => {
//   const data = await Product.find({ category: "607b4a9c6a8ae23bbfd5a9dc" });
//   res.status(200).json({
//     status: "success",
//     results: data.length,
//     data: data,
//   });
// };

// exports.getAccessoriesProducts = async (req, res, next) => {
//   const data = await Product.find({ category: "607b4ab76a8ae23bbfd5a9dd" });
//   res.status(200).json({
//     status: "success",
//     results: data.length,
//     data: data,
//   });
// };

// exports.getNewArrivalsProducts = async (req, res, next) => {
//   const data = await Product.find({ category: "607b4d71a07c4d3cd29eec13" });
//   res.status(200).json({
//     status: "success",
//     results: data.length,
//     data: data,
//   });
// };

// exports.getSaleProducts = async (req, res, next) => {
//   const data = await Product.find({ discount: { $ne: 0 } });
//   res.status(200).json({
//     status: "success",
//     results: data.length,
//     data: data,
//   });
// };

// exports.get8PopularProducts = async (req, res, next) => {
//   const data = await Product.find().sort({ saleCount: -1 }).limit(8);

//   res.status(200).json({
//     status: "success",
//     results: data.length,
//     data: data,
//   });
// };

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
