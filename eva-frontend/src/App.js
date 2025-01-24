import React, { useState, useRef } from "react";
import axios from "axios";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";
import styles from "./App.module.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState("user123"); // Replace with dynamic user ID logic
  const chatWindowRef = useRef(null);

  const sendMessage = async (message) => {
    if (!message.trim()) return;
  
    const userMessage = { sender: "user", text: message };
    setMessages((prev) => [...prev, userMessage]);
  
    setIsLoading(true); // Set loading to true
  
    try {
      const response = await axios.post("http://localhost:8000/chat/", {
        question: message,
        user_id: userId,
      });
      const botMessage = { sender: "bot", text: response.data.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage = { sender: "bot", text: "Error: Unable to get a response." };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false); // Set loading to false
    }
  
    // Scroll to the bottom of the chat window
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [isLoading, setIsLoading] = useState(false);

  const generateDocument = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/generate_document/",
        { user_id: userId },
        { responseType: "blob" }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "eva_response.docx");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error generating document:", error);
    }
  };

  const startNewChat = async () => {
    try {
      await axios.post("http://localhost:8000/new_chat/", { user_id: userId });
      setMessages([]);
    } catch (error) {
      console.error("Error starting new chat:", error);
    }
  };

  return (
    <div className={`${styles.app} ${isDarkMode ? styles.dark : styles.light}`}>
  <div className={styles.header}>
    <h1>Educational Virtual Assistant (EVA)</h1>
    <div>
      <button onClick={toggleTheme} className={styles.themeToggleButton}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <button onClick={startNewChat} className={styles.newChatButton}>
        New Chat
      </button>
    </div>
  </div>
  <ChatWindow messages={messages} ref={chatWindowRef} isLoading={isLoading} />
  <ChatInput sendMessage={sendMessage} />
  <button onClick={generateDocument} className={styles.generateDocumentButton}>
    Generate Document
  </button>
</div>
  );
}

export default App;