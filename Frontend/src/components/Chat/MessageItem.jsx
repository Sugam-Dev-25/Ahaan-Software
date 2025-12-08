import "./chat.css";

export default function MessageItem({ msg }) {
  return (
    <div className={`message-item ${msg.sender === "user" ? "user" : "admin"}`}>
      <div className="message-text">{msg.message}</div>
    </div>
  );
}
