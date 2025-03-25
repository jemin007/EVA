import React, { useState, useEffect, useRef } from "react";
import { Send, Download, Sparkles, Bot, User, FileSpreadsheet, Brain, BookOpen } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

interface Message {
  sender: string;
  text: string;
}

const ChatRoom: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
  const storedUserId = localStorage.getItem("user");

  if (!storedUserId) {
    const newUserId = uuidv4();
    localStorage.setItem("user_id", newUserId);  // ✅ Store only the UUID
    setUserId(newUserId);
  } else {
    try {
      const parsedUserId = JSON.parse(storedUserId);
      setUserId(parsedUserId.userId || storedUserId);  // ✅ Handle both cases
    } catch (error) {
      setUserId(storedUserId);  // ✅ Already a valid string
    }
  }
}, [])

  // Scroll to the bottom of the chat when messages change
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Send a message to the backend
  const sendMessage = async (messageText: string) => {
    if (!messageText.trim()) return;

    // Add the user's message to the chat history
    const userMessage: Message = { sender: "user", text: messageText };
    setMessages((prev) => [...prev, userMessage]);

    setIsLoading(true);

    try {
      console.log("Sending request to backend...");
      const response = await fetch("http://localhost:8000/chat/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json", // Some APIs require this
        },
        body: JSON.stringify({ question: messageText, user_id: userId }),
      });

      console.log("Received response from backend:", response);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response data:", data);

      // Add the bot's response to the chat history
      const botMessage: Message = { sender: "bot", text: data.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      // If there's an error, show an error message from the bot
      const errorMessage: Message = { sender: "bot", text: "Error: Unable to get a response." };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(message);
    setMessage("");
  };

  // Feature buttons
  const features = [
    {
      title: "Create an Assignment",
      description: "Generate custom assignments with AI assistance",
      icon: FileSpreadsheet,
      gradient: "from-blue-600 to-cyan-500",
      onClick: () => sendMessage("Create assignment"),
    },
    {
      title: "Generate a Quiz",
      description: "Create engaging quizzes in seconds",
      icon: Brain,
      gradient: "from-purple-600 to-pink-500",
      onClick: () => sendMessage("Generate quiz"),
    },
    {
      title: "Create Course Outline",
      description: "Design comprehensive course structures",
      icon: BookOpen,
      gradient: "from-green-500 to-teal-500",
      onClick: () => sendMessage("Create course outline"),
    },
  ];

  return (
    <div className="min-h-screen pt-20 pl-64 bg-gradient-to-r from-indigo-100 to-blue-50">
      <div className="max-w-6xl mx-auto p-8">
        {/* Feature Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={feature.onClick}
              className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform hover:scale-105"
            >
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient} rounded-t-2xl`}
              ></div>
              <feature.icon
                className={`h-16 w-16 mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent transition-all duration-500 group-hover:scale-110`}
              />
              <div className="flex justify-center items-center mt-4 mb-6">
                {feature.icon === FileSpreadsheet && (
                  <FileSpreadsheet className="h-12 w-12 text-blue-600" />
                )}
                {feature.icon === Brain && (
                  <Brain className="h-12 w-12 text-purple-600" />
                )}
                {feature.icon === BookOpen && (
                  <BookOpen className="h-12 w-12 text-green-600" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
              <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 group-hover:h-full transition-all duration-300 rounded-2xl -z-10"></div>
            </button>
          ))}
        </div>

        {/* Chat Messages */}
        <div className="pb-48">
          <div className="space-y-6">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} items-end space-x-2`}
              >
                {msg.sender === "bot" && (
                  <div className="flex-shrink-0 mb-1">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center shadow-md">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                  </div>
                )}
                <div
                  className={`relative max-w-xl ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl"
                      : "bg-white border border-gray-200 text-gray-800 rounded-tr-2xl rounded-tl-none rounded-br-2xl rounded-bl-2xl"
                  } px-5 py-4 shadow-md`}
                >
                  {msg.sender === "bot" && (
                    <div className="absolute -left-2 bottom-0 w-4 h-4 bg-white border-l border-b border-gray-200 transform rotate-45"></div>
                  )}
                  {msg.sender === "user" && (
                    <div className="absolute -right-2 bottom-0 w-4 h-4 bg-indigo-600 transform rotate-45"></div>
                  )}
                  <div>
                    <p className={`text-sm font-medium mb-1 ${msg.sender === "user" ? "text-blue-100" : "text-indigo-600"}`}>
                      {msg.sender === "user" ? "You" : "EVA"}
                    </p>
                    <p className={`${msg.sender === "user" ? "" : "text-gray-700"}`}>{msg.text}</p>
                  </div>
                </div>
                {msg.sender === "user" && (
                  <div className="flex-shrink-0 mb-1">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center shadow-md">
                      <User className="w-6 h-6 text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start items-end space-x-2">
                <div className="flex-shrink-0 mb-1">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center shadow-md animate-pulse">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none px-6 py-4 shadow-md">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Chat Input */}
      <div className="fixed bottom-0 left-64 right-0 p-6 bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-lg">
        <form onSubmit={handleSubmit} className="flex items-center space-x-3 max-w-5xl mx-auto">
          <div className="relative flex-1">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask EVA anything about education..."
              className="w-full p-4 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
            <Sparkles className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex items-center space-x-3">
            <button
              type="submit"
              className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Send className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="p-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              <Download className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;