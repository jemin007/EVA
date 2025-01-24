import React, { useState, useRef } from "react";
import axios from "axios";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";
import Sidebar from "./components/Sidebar";
import styles from "./App.module.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatWindowRef = useRef(null);
  const user_id = "user123"; // Replace with the actual user ID

  const sendMessage = async (message) => {
    if (!message.trim()) return;

    const userMessage = { sender: "user", text: message };
    setMessages((prev) => [...prev, userMessage]);

    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/chat/", {
        question: message,
        user_id: user_id,
      });
      const botMessage = { sender: "bot", text: response.data.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage = { sender: "bot", text: "Error: Unable to get a response." };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }

    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  };

  const startNewChat = async () => {
    try {
      // Call the backend to start a new chat session
      await axios.post("http://localhost:8000/new_chat/", {
        user_id: user_id,
      });

      // Clear the chat window
      setMessages([]);
    } catch (error) {
      console.error("Error starting new chat:", error);
    }
  };

  const loadChatSession = async (sessionId) => {
    try {
      const response = await axios.get(`http://localhost:8000/chat_session/${sessionId}`);
      const session = response.data.session;
      setMessages(session.messages); // Update the chat window with the loaded session
    } catch (error) {
      console.error("Error loading chat session:", error);
    }
  };

  return (
    <div className={styles.app}>
      <Sidebar
        onNewChat={startNewChat}
        user_id={user_id}
        onLoadSession={loadChatSession}
      />
      <div className={styles.main}>
        <ChatWindow messages={messages} ref={chatWindowRef} isLoading={isLoading} />
        <ChatInput sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default App;