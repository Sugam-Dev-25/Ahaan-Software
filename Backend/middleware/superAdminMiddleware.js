exports.superAdminOnly = (req, res, next) => {
  if (req.user.role !== "super_admin") {
    return res.status(403).json({
      message: "Super Admin access only"
    });
  }
  next();
};
