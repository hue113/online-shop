const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [
    {
      product: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        required: [true, "Order must have at least one item!"],
      },
      size: String,
      color: String,
      quantity: String,
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Order must belong to a User!"],
  },
  total: {
    type: Number,
    require: [true, "Order must have a total."],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  paid: {
    type: Boolean,
    default: true,
  },
});

orderSchema.pre(/^find/, function (next) {
  this.populate("User").populate({
    path: "Products",
    select: "name",
  });
  next();
});

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;
