const express = require("express");
const {
  getRestaurant,
  getLikeRestaurant,
  likeRes,
  getRate,
  rateRes,
} = require("../controllers/resController");

const resRoute = express.Router();

resRoute.get("/getRestaurant", getRestaurant);

resRoute.get("/getLikeRestaurant", getLikeRestaurant);
resRoute.post("/likeRes", likeRes);
resRoute.get("/getRate", getRate);
resRoute.put("/rateRes", rateRes);
module.exports = resRoute;
