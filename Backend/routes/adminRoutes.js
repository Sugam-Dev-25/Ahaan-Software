const router = require("express").Router();
const { protect } = require("../middleware/authMiddleware");
const { superAdminOnly } = require("../middleware/superAdminMiddleware");
const {
  getUsersByStatus,
  updateUserStatus
} = require("../controllers/adminController");

// Tabs: pending | approved | rejected
router.get(
  "/users",
  protect,
  superAdminOnly,
  getUsersByStatus
);

// Approve / Reject / Pending
router.put(
  "/user-status/:id",
  protect,
  superAdminOnly,
  updateUserStatus
);

module.exports = router;
