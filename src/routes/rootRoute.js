const express = require("express");
const userRoute = require("./userRoute");
const foodRoute = require("./foodRoute");
const resRoute = require("./resRoute");
const ordersRoute = require("./ordersRoute");
const rootRoute = express.Router();

rootRoute.use("/user", userRoute);
rootRoute.use("/food", foodRoute);
rootRoute.use("/res", resRoute);
rootRoute.use("/order", ordersRoute);

module.exports = rootRoute;
