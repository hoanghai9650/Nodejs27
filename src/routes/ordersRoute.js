const express = require("express");
const { orderAction, getOrder } = require("../controllers/ordersController");

const ordersRoute = express.Router();

ordersRoute.post("/orderAction", orderAction);
ordersRoute.get("/getOrder", getOrder);
module.exports = ordersRoute;
