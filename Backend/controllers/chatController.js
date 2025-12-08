const ChatUser = require("../models/ChatUser");
const Conversation = require("../models/Conversation");
const Message = require("../models/Message");

// ===============================
// Register User OR Get Existing
// ===============================
exports.registerUser = async (req, res) => {
  const { name, email } = req.body;

  let user = await ChatUser.findOne({ email });

  // If user not exist → create new user
  if (!user) {
    user = await ChatUser.create({ name, email });
  }

  // Check conversation exists or not
  let conversation = await Conversation.findOne({ userId: user._id });

  // If no conversation → create one
  if (!conversation) {
    conversation = await Conversation.create({ userId: user._id });
  }

  res.json({ user, conversation });
};

// ===============================
// Get Messages of a conversation
// ===============================
exports.getMessages = async (req, res) => {
  const { conversationId } = req.params;

  const msgs = await Message.find({ conversationId }).sort({ createdAt: 1 });

  res.json(msgs);
};

// ===============================
// Save new message
// ===============================
exports.saveMessage = async (req, res) => {
  const { conversationId, sender, message } = req.body;

  const msg = await Message.create({ conversationId, sender, message });

  // lastMessage auto-update
  await Conversation.findByIdAndUpdate(conversationId, {
    lastMessage: message
    // updatedAt will auto update because timestamps = true
  });

  res.status(201).json(msg);
};

// ===============================
// Admin - Get all Conversations
// ===============================
exports.getAllConversations = async (req, res) => {
  const convos = await Conversation.find()
    .populate("userId")
    .sort({ updatedAt: -1 });  // Now works properly

  res.json(convos);
};
