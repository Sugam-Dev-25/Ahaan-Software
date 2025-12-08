const express = require("express");
const { 
  registerUser,
  getMessages,
  saveMessage,
  getAllConversations
} = require("../controllers/chatController");

const router = express.Router();

router.post("/register", registerUser);
router.get("/messages/:conversationId", getMessages);
router.post("/messages", saveMessage);
router.get("/conversations", getAllConversations); // admin

module.exports = router;
