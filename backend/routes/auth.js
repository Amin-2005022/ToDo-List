const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

// SIGN UP
router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashpassword = bcrypt.hashSync(password); // Hash the password
    const user = new User({ email, username, password: hashpassword });
    await user.save().then(() => 
      res.status(200).json({user})
    );
  } catch (error) {
    res.status(200).json({ message: "User Already Exists" });
  }
});

module.exports = router;
