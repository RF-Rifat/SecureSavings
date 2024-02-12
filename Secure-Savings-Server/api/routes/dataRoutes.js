const express = require("express");
const router = express.Router();
const Data = require("../models/data");
const User = require("../models/User");
const Blog = require("../models/blog");
const Comment = require("../models/comment");
const Loan = require("../models/loan");

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

// router.post("/user", async (req, res) => {
//   console.log(req.body);
//   try {
//     const { name, email, password, imageSrc, balance, status, address } =
//       req.body;
//     const newUser = new User({
//       name,
//       email,
//       password,
//       imageSrc,
//       balance,
//       status,
//       address,
//     });
//     await newUser.save();
//     res.status(201).json({ message: "User created successfully" });
//   } catch (error) {
//     console.error("Error creating user:", error.message);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });
// router.get("/user", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     console.error("Error fetching users:", error.message);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

router.get("/:type", async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);
    const type = req.params.type.toLowerCase().trim();

    let result;
    switch (type) {
      case "user":
        result = await User.find()
          .skip(page * size)
          .limit(size);
        break;
      case "message":
        result = await Message.find()
          .sort({ _id: -1 })
          .skip(page * size)
          .limit(size);
        break;
      case "blog":
        result = await Blog.find()
          .sort({ _id: -1 })
          .skip(page * size)
          .limit(size);
        break;
      case "comment":
        result = await Comment.find()
          .sort({ _id: -1 })
          .skip(page * size)
          .limit(size);
        break;
      case "loan":
        result = await Loan.find()
          .sort({ _id: -1 })
          .skip(page * size)
          .limit(size);
        break;
      default:
        result = [];
    }

    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.post("/:type", async (req, res) => {
  try {
    const type = req.params.type.toLowerCase().trim();
    const data = req.body;
    console.log(data);
    let result;
    switch (type) {
      case "user":
        result = await User.create(data);
        break;
      case "message":
        result = await Message.create(data);
        break;
      case "blog":
        result = await Blog.create(data);
        break;
      case "comment":
        result = await Comment.create(data);
        break;
      case "loan":
        result = await Loan.create(data);
        break;
      default:
        result = null;
    }

    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
