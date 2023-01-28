const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("db_node27", "root", "1234", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});
// try {
//   sequelize.authenticate();
//   console.log("Authenticated");
// } catch {
//   console.log("Failed to authenticate");
// }
module.exports = sequelize;
