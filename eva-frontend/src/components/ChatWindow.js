import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./ChatWindow.module.css";

const ChatWindow = React.forwardRef(({ messages, isLoading }, ref) => (
  <div ref={ref} className={styles.chatWindow}>
    {messages.map((msg, index) => (
      <div
        key={index}
        className={`${styles.message} ${
          msg.sender === "user" ? styles.userMessage : styles.botMessage
        }`}
      >
        {msg.sender === "bot" ? (
          <ReactMarkdown>{msg.text}</ReactMarkdown>
        ) : (
          msg.text
        )}
      </div>
    ))}
    {isLoading && (
      <div className={styles.message}>
        <div className={styles.loadingSpinner}></div>
      </div>
    )}
  </div>
));

export default ChatWindow;