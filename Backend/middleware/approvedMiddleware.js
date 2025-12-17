exports.approvedOnly = (req, res, next) => {
  if (req.user.status !== "approved") {
    return res.status(403).json({
      message: "Approval required"
    });
  }
  next();
};
