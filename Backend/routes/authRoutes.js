const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getProfile, logoutUser } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware'); // multer middleware

// Register with profile picture upload
router.post('/register', upload.single('profilePicture'), registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getProfile);
router.post('/logout', logoutUser);

module.exports = router;
