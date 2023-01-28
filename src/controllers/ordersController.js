const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const model = initModel(sequelize);

const orderAction = async (req, res) => {
  try {
    const { foodId, userId, amount, code, subId } = req.body;
    let order = {
      food_id: foodId,
      user_id: userId,
      amount: amount,
      code,
      arr_sub_id: subId,
    };

    await model.orders.create(order);
    res.status(200).send("Ordered");
  } catch (err) {
    res.status(500).send("Có lỗi");
  }
};
const getOrder = async (req, res) => {
  let data = await model.orders.findAll();

  res.status(200).send(data);
};
module.exports = {
  orderAction,
  getOrder,
};
