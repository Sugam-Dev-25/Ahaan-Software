import { useState } from "react";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import "./chat.css";
import ChatBox from "./ChatBox";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="chat-bubble" onClick={() => setOpen(!open)}>
        <BsFillChatLeftTextFill size={28} />
      </div>

      {open && <ChatBox />}
    </>
  );
}
