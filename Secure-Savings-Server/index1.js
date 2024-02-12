// Import necessary modules
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

// Middlewares
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
    `mongodb+srv://secure-savings:${process.env.DB_PASS}@cluster0.tryvron.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((error) => console.log("Error connecting to MongoDB", error));

// Define route handler for POST request
app.post("/api/type", async (req, res) => {
  try {
    // Access request body
    const requestData = req.body;
    console.log(requestData);
    res
      .status(201)
      .json({ message: "Data created successfully", data: requestData });
  } catch (error) {
    // Handle errors
    console.error("Error creating data:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});
app.get("/api/type", async (req, res) => {
  console.log(req);
  console.log(res);
});

// Define a route to handle other requests
app.get("/", (req, res) => {
  res.send(`Server Running...`);
});

// Start the server
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log("Server Running on port", port);
});
