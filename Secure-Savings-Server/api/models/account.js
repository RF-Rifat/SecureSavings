const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  user_id: { type: String, required: true },
  username: { type: String, required: true },
  full_name: { type: String, required: true },
  address: { type: String, required: true },
  phone_number: { type: String, required: true },
  accounts: [
    {
      account_id: { type: String, required: true },
      account_type: { type: String, required: true },
      balance: { type: Number, required: true },
    },
  ],
  userEmail: {
    type: mongoose.Schema.Types.String,
    ref: "User",
    required: true,
  },
});

const Account = mongoose.model("Account", userSchema);

module.exports = Account;
