import React, { useEffect, useState } from "react";
import "./AhaanChat.css";
import botImg from "../../assets/AhaanAI.png";

const AhaanChat = () => {
  const fullText = "Hi! I’m Ahaan AI 👋 Need help exploring our services?";

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [hidePreview, setHidePreview] = useState(false);

  // ✅ LOOPING TYPING EFFECT
  useEffect(() => {
    let timeout;

    if (index < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 35);
    } else {
      timeout = setTimeout(() => {
        setDisplayText("");
        setIndex(0);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="ahaan-container">
      <div className="chat-wrapper">

  {/* CLOSE BUTTON */}
  {!hidePreview && (
    <button
      className="close-btn"
      onClick={() => setHidePreview(true)}
    >
      ×
    </button>
  )}

  {/* CHAT BUBBLE */}
  {!hidePreview && (
    <div className="chat-bubble">
      <p>{displayText}</p>
    </div>
  )}

  {/* BOT + BUTTON */}
  <div className="bot-group">

    {!hidePreview && (
      <img
        src={botImg}
        alt="Ahaan Bot"
        className="bot-img"
        onClick={() =>
          window.open(
            "https://chatgpt.com/g/g-698a6e0582548191a0c256858ffd92b9-ahaan-ai-your-web-app-advisor",
            "_blank"
          )
        }
      />
    )}

    <button
      className="chat-btn"
      onClick={() =>
        window.open(
          "https://chatgpt.com/g/g-698a6e0582548191a0c256858ffd92b9-ahaan-ai-your-web-app-advisor",
          "_blank"
        )
      }
    >
      Let’s Chat
    </button>
  </div>
</div>
    </div>
  );
};

export default AhaanChat;