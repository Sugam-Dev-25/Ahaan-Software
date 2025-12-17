const User = require("../models/User");

// 🔹 Pending / Approved / Rejected users
exports.getUsersByStatus = async (req, res) => {
  const { status } = req.query;

  const users = await User.find({
    role: "admin",
    status
  }).select("-password");

  res.json(users);
};

// 🔹 Update status (approve / reject / pending)
exports.updateUserStatus = async (req, res) => {
  const { status } = req.body;

  if (!["approved", "rejected", "pending"].includes(status)) {
    return res.status(400).json({ message: "Invalid status" });
  }

  await User.findByIdAndUpdate(req.params.id, { status });

  res.json({ message: `User marked as ${status}` });
};
