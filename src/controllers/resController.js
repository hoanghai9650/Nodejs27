const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const model = initModel(sequelize);

const getRestaurant = async (req, res) => {
  let data = await model.restaurant.findAll();
  res.status(200).send(data);
};

const getLikeRestaurant = async (req, res) => {
  let data = await model.like_res.findAll({
    include: ["re", "user"],
  });
  res.status(200).send(data);
};

const likeRes = async (req, res) => {
  try {
    const { userId, resId } = req.body;
    let dataLike = await model.like_res.findOne({
      where: {
        res_id: resId,
        user_id: userId,
      },
    });

    let dataUser = await model.user.findOne({
      where: {
        user_id: userId,
      },
    });
    let dataRes = await model.restaurant.findOne({
      where: {
        res_id: resId,
      },
    });

    if (dataUser && dataRes) {
      if (dataLike) {
        await model.like_res.destroy({
          where: {
            res_id: resId,
            user_id: userId,
          },
        });
        res.status(200).send("Unliked");
      } else {
        let models = {
          res_id: resId,
          user_id: userId,
        };

        await model.like_res.create(models);

        res.status(200).send("Liked");
      }
    } else {
      res.status(400).send("Sai dữ liệu");
    }
  } catch {
    res.status(500).send("Có lỗi");
  }
};

const getRate = async (req, res) => {
  let data = await model.rate_res.findAll({
    include: ["re", "user"],
  });
  res.status(200).send(data);
};

const rateRes = async (req, res) => {
  try {
    let { userId, resId, amount } = req.body;

    let dataRate = await model.rate_res.findOne({
      where: {
        res_id: resId,
        user_id: userId,
      },
    });

    if (dataRate) {
      await model.rate_res.update(
        { amount },
        {
          where: {
            res_id: resId,
            user_id: userId,
          },
        }
      );

      res.status(200).send("Đã đánh giá");
    } else {
      await model.rate_res.create({
        user_id: userId,
        res_id: resId,
        amount: amount,
      });

      res.status(200).send("Đã đánh giá");
    }
  } catch (err) {
    res.status(500).send("có lỗi");
  }
};

module.exports = {
  getRestaurant,
  getLikeRestaurant,
  likeRes,
  getRate,
  rateRes,
};
