import React, { useState } from "react";
import AdminChatList from "./AdminChatList";
import AdminChatBox from "./AdminChatBox";
import 'bootstrap/dist/css/bootstrap.min.css';
import './chat.css';

export default function App() {
  const [selectedConversation, setSelectedConversation] = useState(null);

  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <AdminChatList onSelectConversation={setSelectedConversation} />
      <AdminChatBox conversation={selectedConversation} />
    </div>
  );
}
