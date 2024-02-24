const mongoose = require("mongoose");
const { Schema } = mongoose;

const transactionSchema = new Schema({
  cardNum: {
    type: Number,
    require: true,
  },
  amount: {
    type: Number,
    require: true,
  },
  transactionId: {
    type: String,
    require: true,
  },
});
const Transactions = mongoose.model("Transactions", transactionSchema);

module.exports = Transactions;
