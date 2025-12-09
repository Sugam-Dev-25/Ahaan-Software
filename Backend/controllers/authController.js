const User = require("../models/User");
const bcrypt = require("bcrypt");
const MAX_AGE_MS = 3 * 24 * 60 * 60 * 1000;

// REGISTER
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, designation } = req.body;
    const profilePicture = req.file ? req.file.filename : null; // multer sets file

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "User already exists" });

    const user = await User.create({
      name,
      email,
      password,
      designation,
      profilePicture,
    });

    const token = user.generateJWT();

    res.cookie("authToken", token, {
      httpOnly: true,
      maxAge: MAX_AGE_MS,
      sameSite: "None",
      secure: true,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        designation: user.designation,
        profilePicture: profilePicture ? `/uploads/${profilePicture}` : null,
      },
    });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// LOGIN
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = user.generateJWT();
    res.cookie("authToken", token, {
      httpOnly: true,
      maxAge: MAX_AGE_MS,
      sameSite: "None",
      secure: true,
    });

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        designation: user.designation,
        profilePicture: user.profilePicture
          ? `/uploads/${user.profilePicture}`
          : null,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// PROFILE
exports.getProfile = async (req, res) => {
  res.json({
    message: "User profile fetched",
    user: req.user,
  });
};

// LOGOUT
exports.logoutUser = (req, res) => {
  res.clearCookie("authToken", {
    httpOnly: true,
    sameSite: "None",
    secure: true,
  });

  res.status(200).json({ message: "Logged out successfully" });
};
