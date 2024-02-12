const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: String,
  password: Number,
  email: String,
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
