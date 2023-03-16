const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// Adding new user to database
router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    res.send("Error " + error);
  }
});

// validating an user

router.get("/validate", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.role;

  console.log(email);
  try {
    const user = await User.findOne({
      email: email,
      password: password,
      role: role,
    });

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).json({ message: "USER NOT FOUND" });
    }
  } catch (error) {
    res.send("ERROR: " + error);
  }
});

module.exports = router;
