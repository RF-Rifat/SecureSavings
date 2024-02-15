const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema(
  {
    accountId: { type: String, required: true },
    accountType: { type: String, required: true, unique: true },
    balance: { type: Number, default: 500 },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "approved", "cancelled"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
