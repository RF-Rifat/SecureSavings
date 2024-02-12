const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = require("./db/connectDB.js");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const dataRoutes = require("./routes/dataRoutes");

// Use routes
app.use("/api", dataRoutes);

const port = process.env.PORT || 5001;

const server = async () => {
  await connectDB();

  app.get("/", (req, res) => {
    res.send(`Server Running on port ${port}`);
  });

  app.listen(port, () => {
    console.log("Server Running on port", port);
  });
};

server();
