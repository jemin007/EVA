import React, { useState } from "react";
import { Send, Download, Sparkles } from "lucide-react";

interface Message {
  sender: string;
  text: string;
}

const ChatInput: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const user_id = "user123"; // Replace with actual user ID

  const sendMessage = async (message: string) => {
    if (!message.trim()) return;

    // Add user's message to the chat history
    const userMessage: Message = { sender: "user", text: message };
    setMessages((prev) => [...prev, userMessage]);

    setIsLoading(true);

    try {
      // Send the user's message to the server
      const response = await fetch("http://localhost:8000/chat/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: message, user_id: user_id }),
      });

      const data = await response.json();

      // Add the bot's response to the chat history after the request completes
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(message); // Send the message when the user submits the form
    setMessage(""); // Clear the input field after sending
  };

  return (
    <div className="fixed bottom-0 left-64 right-0 p-6 bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-lg">
      <form onSubmit={handleSubmit} className="flex items-center space-x-3 max-w-5xl mx-auto">
        {/* Chat History */}

        <div className="relative flex-1">
          <div className="mt-6 max-w-5xl mx-auto">
        <div className="space-y-3">
          {messages.map((msg, index) => (
            <div key={index} className={`p-4 ${msg.sender === "user" ? "bg-gray-100" : "bg-blue-100"} rounded-lg`}>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
      </div>

      {isLoading && (
        <div className="text-center text-gray-500">
          <p>Bot is typing...</p>
        </div>
      )}
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your query here..."
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

          <button
            type="button"
            className="px-6 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 font-medium"
          >
            New Chat
          </button>
        </div>
      </form>


    </div>
  );
};

export default ChatInput;
