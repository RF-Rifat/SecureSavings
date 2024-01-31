const mongoose = require("mongoose");
const { Schema } = mongoose;

// create schema object for users
const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 6,
  },
  role: String,
  image: String,
  skills: String,
});

// create model
const User = mongoose.model("User", userSchema);
module.exports = User;
