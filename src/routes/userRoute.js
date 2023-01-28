const express = require("express");
const {
  getUser,
  createUser,
  getUserId,
  updateUser,
} = require("../controllers/userControllers");
const userRoute = express.Router();

userRoute.get("/getUser", getUser);
userRoute.get("/getUserId/:id", getUserId);

userRoute.post("/createUser", createUser);

userRoute.put("/updateUser/:id", updateUser);
module.exports = userRoute;
