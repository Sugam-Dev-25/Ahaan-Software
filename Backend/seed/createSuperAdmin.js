require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/User");

mongoose.connect(process.env.MONGO_URI);

(async () => {
  await User.create({
    name: "Vishal Jaiswal",
    email: "vishal77@gmail.com",
    password: "vishal@77",
    designation: "ceo",
    role: "super_admin",
    status: "approved",

    // ✅ ADD THIS
    profilePicture:
      "https://ahaanmedia.com/asc/teams/Vishal_J.png",
  });

  console.log("Super Admin created");
  process.exit();
})();
