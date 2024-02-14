const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  accounts: [
    {
      account_id: { type: String, required: true },
      account_type: { type: String, required: true },
      balance: { type: Number, required: true },
    },
  ],
});

const Account = mongoose.model("Account", userSchema);

module.exports = Account;
