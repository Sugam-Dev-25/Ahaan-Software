import React, { useEffect, useState } from "react";
import { getAllConversations } from "../Api/api";
import "./chat.css";

export default function AdminChatList({ onSelectConversation }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    loadConversation();
  }, []);

  const loadConversation = async () => {
    try {
      const res = await getAllConversations();
      setList(res.data);
    } catch (error) {
      console.error("Error loading conversations:", error);
    }
  };

  const getInitial = (name) => name?.charAt(0).toUpperCase();

  return (
    <div className="chat-list">
      <div className="chat-list-title">Chat</div>

      {list.map((item, index) => (
        <div
          key={item._id}
          className="chat-item"
          onClick={() => onSelectConversation(item)}
        >
          <div
            className="chat-avatar"
            style={{
              background: ["#FFADAD","#FFD6A5","#FDFFB6","#CAFFBF","#9BF6FF","#A0C4FF","#BDB2FF","#FFC6FF"][index % 8],
            }}
          >
            {getInitial(item.userId?.name)}
          </div>

          <div>
            <strong>{item.userId?.name}</strong>
            <p className="mb-0 text-muted" style={{ maxWidth: "200px", fontSize: "14px" }}>
              {item.lastMessage || "No messages yet"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
