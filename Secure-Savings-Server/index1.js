const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

// middlewares
app.use(cors());
app.use(express.json());
// app.use(cookieParser());

const port = process.env.PORT || 5001;

// connect mongodb configuration using mongoose
mongoose
  .connect(
    `mongodb+srv://secure-savings:${process.env.DB_PASS}@cluster0.tryvron.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(console.log("Mongooses Connected Successfully"))
  .catch((error) => console.log("Error connecting to MongoDB", error));

app.get("/", (req, res) => {
  res.send("Server Running...");
});

app.listen(port, () => {
  console.log("Server Running on port", port);
});
