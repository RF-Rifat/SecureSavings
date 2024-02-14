const mongoose = require("mongoose");
const { Schema } = mongoose;

// const accountSchema = new mongoose.Schema({
//   account_id: { type: String, required: true },
//   account_type: { type: String, enum: ["checking", "savings"], required: true },
//   balance: { type: Number, required: true },
// });

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    imageSrc: {
      type: String,
    },
    address: {
      type: String,
    },
    status: {
      type: Boolean,
      default: true,
    },
    position: {
      type: String,
      default: "Member",
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
