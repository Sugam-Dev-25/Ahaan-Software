const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  conversationId: { type: mongoose.Schema.Types.ObjectId, ref: "Conversation" },
  sender: { type: String, enum: ["user", "admin"], required: true },
  message: { type: String, required: true },
  time: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Message", messageSchema);
