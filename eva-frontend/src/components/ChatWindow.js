import React from "react";
import styles from "./ChatWindow.module.css";

const ChatWindow = React.forwardRef(({ messages }, ref) => (
  <div ref={ref} className={styles.chatWindow}>
    {messages.map((msg, index) => (
      <div
        key={index}
        className={`${styles.message} ${
          msg.sender === "user" ? styles.userMessage : styles.botMessage
        }`}
      >
        {msg.text}
      </div>
    ))}
  </div>
));

export default ChatWindow;