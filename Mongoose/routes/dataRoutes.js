const express = require("express");
const router = express.Router();
const Data = require("../models/data");
const User = require("../models/userSchema");

router.post("/", async (req, res) => {
  try {
    const newData = req.body;
    const result = await Data.create(newData);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error creating data:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/user", async (req, res) => {
  console.log(req.body);
  try {
    const { username, email, password } = req.body;
    const newUser = new User({
      username,
      email,
      password,
    });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});
router.get("/user", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
