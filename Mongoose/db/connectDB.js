const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  console.log("connection to database...");
  await mongoose.connect(
    `mongodb+srv://secure-savings:${process.env.DB_PASS}@cluster0.tryvron.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

  console.log("successfully connected to database!");
};

module.exports = connectDB;
