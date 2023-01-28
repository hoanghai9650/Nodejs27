const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const model = initModel(sequelize);

const getFood = async (req, res) => {
  let data = await model.food.findAll({
    include: ["type"],
  });
  res.status(200).send(data);
};

module.exports = {
  getFood,
};
