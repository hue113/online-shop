const mongoose = require("mongoose");
const slugify = require("slugify");

const shopSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A shop category must have a name"],
    unique: true,
    trim: true,
    maxlength: [
      20,
      "A shop category name must have less or equal then 40 characters",
    ],
    minlength: [
      0,
      "A shop category name must have more or equal then 0 characters",
    ],
  },
  slug: String,
  link: {
    type: String,
    unique: true,
    required: [true, "A shop category must have a link"],
  },
  startPrice: Number,
  image: String,
});

shopSchema.pre("save", function (next) {
  // console.log(this);
  this.slug = slugify(this.title, { lower: true });
  next();
});

const Shop = mongoose.model("shops", shopSchema); // name of model, schema

module.exports = Shop;
