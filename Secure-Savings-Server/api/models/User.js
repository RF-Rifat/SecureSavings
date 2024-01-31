const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
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
  balance: {
    type: Number,
    default: 0,
  },
  status: {
    type: Boolean,
    default: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);
