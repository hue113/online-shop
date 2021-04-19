const path = require("path");
const express = require("express");
const enforce = require("express-sslify");
const morgan = require("morgan");
// const compression = require('compression');
const cors = require("cors");

const productRouter = require("./routes/productRoutes");
const shopRouter = require("./routes/shopRoutes");

const app = express();
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(enforce.HTTPS({ trustProtoHeader: true })); // PWA HTTPS
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/client/build", "index.html"));
  });
}

// Development logging
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use("/api/v1/products", productRouter);
app.use("/api/v1/shops", shopRouter);

module.exports = app;
