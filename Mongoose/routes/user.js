const express = require("express");
const router = express.Router();

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

module.exports = router;
