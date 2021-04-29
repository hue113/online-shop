const path = require("path");
const express = require("express");
const enforce = require("express-sslify");
const morgan = require("morgan");
// const compression = require('compression');
var cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cors = require("cors");

const productRouter = require("./routes/productRoutes");
const shopRouter = require("./routes/shopRoutes");
const userRouter = require("./routes/userRoutes");
const orderRouter = require("./routes/orderRoutes");

const app = express();
const origin = [
  `http://shine-shop-demo.netlify.app`,
  `https://shine-shop-demo.netlify.app`,
  `http://shine-shop-demo.herokuapp.com`,
  `https://shine-shop-demo.herokuapp.com`,
  `http://192.168.2.61:5000`,
  `http://192.168.2.61:3000`,
];
// app.use(cors());
// app.options("*", cors());
app.use(
  cors({
    origin: origin,
    credentials: "true",
    exposedHeaders: ["set-cookie"],
  })
);

app.use((req, res, next) => {
  const allowedOrigins = origin;
  const origin1 = req.headers.origin;
  if (allowedOrigins.includes(origin1)) {
    res.setHeader("Access-Control-Allow-Origin", origin1);
  }
  //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", true);
  return next();
});
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", origin);
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );

//   next();
// });

// Parse Cookie header
app.use(cookieParser());
// Data sanitization against NoSQL query injection (clean characters: $, .)
app.use(mongoSanitize());
// Data sanitization against XSS (prevent js code inside html)
app.use(xss());

if (process.env.NODE_ENV === "production") {
  app.use(enforce.HTTPS({ trustProtoHeader: true })); // PWA HTTPS
  app.use(express.static("client/build"));

  app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Development logging
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use("/api/v1/products", productRouter);
app.use("/api/v1/shops", shopRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/orders", orderRouter);

module.exports = app;
