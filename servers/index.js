const connect = require("./config/db.conn");
connect();
const route = require("./contacts");
const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());

app.use(route);
app.listen(3000, () => {
  console.log("Server connected!!!");
});
