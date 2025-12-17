const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");

// JWT TOKEN GENERATOR (UNCHANGED)
User.prototype.generateJWT = function () {
  return jwt.sign(
    {
      id: this._id,
      designation: this.designation,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

// =======================
// REGISTER (UNCHANGED)
// =======================
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, designation } = req.body;

    // ⭐ Cloudinary → file.path gives full image URL
    const profilePicture = req.file ? req.file.path : null;

    const exists = await User.findOne({ email });
    if (exists)
      return res.status(400).json({ message: "User already exists" });

    const user = await User.create({
      name,
      email,
      password,
      designation,
      profilePicture,
      // status will be "pending" by default
    });

    const token = user.generateJWT();

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        designation: user.designation,
        profilePicture,
        status: user.status,
      },
    });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// =======================
// LOGIN (UPDATED)
// =======================
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    // 🔒 STATUS CHECK (VERY IMPORTANT)
    if (user.status === "pending") {
      return res.status(403).json({
        message: "Account pending Super Admin approval",
      });
    }

    if (user.status === "rejected") {
      return res.status(403).json({
        message: "Your request was rejected by Super Admin",
      });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = user.generateJWT();

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        designation: user.designation,
        profilePicture: user.profilePicture,
        status: user.status,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// =======================
// PROFILE (UNCHANGED)
// =======================
exports.getProfile = async (req, res) => {
  res.json({
    message: "User profile fetched",
    user: req.user,
  });
};

// =======================
// LOGOUT (UNCHANGED)
// =======================
exports.logoutUser = (req, res) => {
  res.status(200).json({ message: "Logged out successfully" });
};
