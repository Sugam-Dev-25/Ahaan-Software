import React, { useEffect, useState, useRef } from "react";
import { getMessages, sendMessage } from "../Api/api";
import "./chat.css";

export default function AdminChatBox({ conversation }) {
  const [messages, setMessages] = useState([]);
  const [adminText, setAdminText] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (conversation?._id) loadMessages();
  }, [conversation]);

  const loadMessages = async () => {
    try {
      const res = await getMessages(conversation._id);
      setMessages(res.data);
      scrollToBottom();
    } catch (error) {
      console.error("Error loading messages:", error);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async () => {
    if (!adminText.trim()) return;

    await sendMessage({
      conversationId: conversation._id,
      sender: "admin",
      message: adminText,
    });

    setAdminText("");
    loadMessages();
  };

  if (!conversation)
    return (
      <div className="d-flex justify-content-center align-items-center flex-grow-1">
        Select a conversation
      </div>
    );

  return (
    <div className="chat-box">
      <div className="chat-header">
        <h5>{conversation.userId?.name}</h5>
        <a>{conversation.userId?.email}</a>
      </div>

      <div className="messages">
        {messages.map((msg) => (
          <div
            key={msg._id}
            className={`msg-row ${
              msg.sender === "admin" ? "msg-right" : "msg-left"
            }`}
          >
            <div
              className={`msg-bubble ${
                msg.sender === "admin" ? "msg-admin" : "msg-user"
              }`}
            >
              {msg.message}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>

      <div className="chat-input-area">
        <input
          type="text"
          className="form-control"
          value={adminText}
          onChange={(e) => setAdminText(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button className="btn btn-dark admin-chat-button" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}
