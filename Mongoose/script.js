// index.js

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection using Mongoose
mongoose
  .connect(
    `mongodb+srv://secure-savings:${process.env.DB_PASS}@cluster0.tryvron.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((error) => console.log("Error connecting to MongoDB", error));

// Import routes
const dataRoutes = require("./routes/dataRoutes");

// Use routes
app.use("/api/data", dataRoutes);

const port = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send(`Server Running on port ${port}`);
});

app.listen(port, () => {
  console.log("Server Running on port", port);
});
