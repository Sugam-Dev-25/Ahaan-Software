const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "ChatUser" },
    lastMessage: { type: String, default: "" }
  },
  { timestamps: true } // IMPORTANT
);

module.exports = mongoose.model("Conversation", conversationSchema);

