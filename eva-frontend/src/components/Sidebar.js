import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Sidebar.module.css";

const Sidebar = ({ onNewChat, user_id, onLoadSession }) => {
  const [chatSessions, setChatSessions] = useState([]);

  // Fetch chat sessions when the component mounts or when user_id changes
  useEffect(() => {
    const fetchChatSessions = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/chat_sessions/${user_id}`);
        setChatSessions(response.data.sessions);
      } catch (error) {
        console.error("Error fetching chat sessions:", error);
      }
    };

    fetchChatSessions();
  }, [user_id]);

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <h2>EVA</h2>
        <p>Hi, I'm Educational Virtual Assistant (EVA).</p>
      </div>
      <nav className={styles.sidebarNav}>
        {/* New Chat Button */}
        <button onClick={onNewChat} className={styles.navButton}>
          New Chat
        </button>

        {/* List of Chat Sessions */}
        <div className={styles.chatSessions}>
          {chatSessions.map((session) => (
            <button
              key={session.id}
              className={styles.sessionButton}
              onClick={() => onLoadSession(session.id)} // Load the selected session
            >
              {session.title}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;