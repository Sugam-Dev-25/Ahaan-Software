exports.superAdminOnly = (req, res, next) => {
  // 🔥 CEO OR MANAGER both allowed
  if (
    req.user.role !== "super_admin" ||
    !["ceo", "manager"].includes(req.user.designation)
  ) {
    return res.status(403).json({
      message: "Super Admin access only"
    });
  }

  next();
};
