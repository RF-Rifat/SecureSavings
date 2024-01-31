const express = require("express");
const router = express.Router();

// get all user data from database
router.get("/", async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
