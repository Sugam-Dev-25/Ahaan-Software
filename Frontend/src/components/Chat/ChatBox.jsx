import { useState } from "react";
import { registerChatUser, getMessages, saveMessage } from "../../Api/api";
import "./chat.css";

export default function ChatBox() {
  const [step, setStep] = useState("register"); // register → chat
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [conversationId, setConversationId] = useState(null);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // ===============================
  // REGISTER USER
  // ===============================
  const handleRegister = async () => {
    if (!name || !email) return alert("Enter your name & email");

    try {
      const res = await registerChatUser({ name, email });

      setConversationId(res.data.conversation._id);
      setStep("chat");

      loadMessages(res.data.conversation._id);
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  };

  // ===============================
  // LOAD MESSAGES
  // ===============================
  const loadMessages = async (id) => {
    try {
      const res = await getMessages(id);
      setMessages(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // ===============================
  // SEND MESSAGE
  // ===============================
  const handleSend = async () => {
    if (!message.trim()) return;

    try {
      await saveMessage({
        conversationId,
        sender: "user",
        message,
      });

      setMessages((prev) => [...prev, { sender: "user", message }]);
      setMessage("");
    } catch (err) {
      console.error(err);
      alert("Message not sent!");
    }
  };

  return (
    <div className="chatbox-container">

      {/* Register Form */}
      {step === "register" && (
        <div className="register-form">
          <h3>Start Chat</h3>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button onClick={handleRegister}>Start Chat</button>
        </div>
      )}

      {/* Chat Window */}
      {step === "chat" && (
        <>
          <div className="chatbox-header">Support Chat</div>

          <div className="chatbox-messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`message-item ${
                  msg.sender === "user" ? "user" : "admin"
                }`}
              >
                <div className="message-text">{msg.message}</div>
              </div>
            ))}
          </div>

          <div className="chatbox-input">
            <input
              type="text"
              placeholder="Write message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button onClick={handleSend}>Send</button>
          </div>
        </>
      )}
    </div>
  );
}
