const mongoose = require("mongoose");
const config = require("./db.config");

const conn = async () => {
  await mongoose.connect(
    config.uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
    () => console.log("connected to the database")
  );
};
module.exports = conn;
