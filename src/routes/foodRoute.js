const express = require("express");
const { getFood } = require("../controllers/foodController");

const foodRoute = express.Router();

foodRoute.get("/getFood", getFood);

module.exports = foodRoute;
