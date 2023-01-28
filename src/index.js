const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.json());

const cors = require("cors");
const rootRoute = require("./routes/rootRoute");

app.use(cors());
app.listen(8080);

// const conn = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "1234",
//   port: 3306,
//   database: "db_node27",
// });

app.use("/api", rootRoute);

// app.get("/api/user/getUser", (req, res) => {
//   res.status(200).send("hello");
// });
// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

// app.get("/demo", (req, res) => {
//   let { id, name, age } = req.body;
//   res.status(200).send({ id, name, age });
// });

// app.get("/user", (req, res) => {
//   const sql = "SELECT * FROM users";
//   conn.query(sql, (err, result) => {
//     res.send(result);
//   });
// });
