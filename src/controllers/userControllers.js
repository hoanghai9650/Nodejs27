const User = require("../models/user");
const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const model = initModel(sequelize);

const getUser = async (req, res) => {
  let data = await model.user.findAll();

  res.status(200).send(data);
};

const getUserId = async (req, res) => {
  try {
    const { id } = req.params;
    let data = await model.user.findOne({
      where: {
        user_id: id,
      },
    });
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(400).send("user không tồn tại!");
    }
  } catch (err) {
    res.status(500).send("lỗi back end");
  }
};

const createUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    let models = {
      full_name: fullName,
      email: email,
      password: password,
    };
    let data = await model.user.create(models);

    if (data) {
      res.status(200).send("Tạo thành công");
    }
  } catch (err) {
    res.status(500).send("Lỗi");
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    let data = await model.user.findOne({
      where: {
        user_id: id,
      },
    });
    if (data) {
      const { fullName, email, password } = req.body;
      let models = {
        full_name: fullName,
        email: email,
        password: password,
      };
      await model.user.update(models, { where: { user_id: id } });
      res.status(200).send("cập nhật thành công!");
    } else {
      res.status(400).send("user không tồn tại!");
    }
  } catch (err) {
    res.status(500).send("lỗi back end");
  }
};

module.exports = {
  getUser,
  createUser,
  getUserId,
  updateUser,
};
