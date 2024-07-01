const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../model/User");
const { body, validationResult } = require("express-validator");
const router = express.router();
const jwt=require('jsonwebtoken');
const JWT_SECRET="hithisis$sarbeswar";
router.post(
  "/createuser",
  [
    body("name", "Enter the the name").isLength({ min: 3 }),
    body("email", "Enter the email").isEmail(),
    body("password", "password must be atlest 8 character").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success = true;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let user = User.findOne({ email: req.body.email });
      if (user) {
        success = false;
        return res
          .status(500)
          .json({ error: "sorry a user with this email already exits" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // Create a new user
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      // res.json(user)
      res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
