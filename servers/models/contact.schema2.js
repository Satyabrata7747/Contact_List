const mongoose = require("mongoose");
const contact = mongoose.Schema({
  userid: {
    type: String,
  },
  Name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  Phn: {
    type: String,
    required: true,
  },
  contype: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("contactlist", contact);
