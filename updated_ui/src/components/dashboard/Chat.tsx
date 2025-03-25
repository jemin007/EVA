
import React, { useState } from 'react';
import { 
  Send, 
  Download, 
  PlusCircle, 
  ThumbsUp, 
  ThumbsDown, 
  Sparkles 
} from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const Chat: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm EVA, your personal AI educational assistant. How can I help you today?",
      sender: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleSendMessage = () => {
    if (!inputValue.trim() || isProcessing) return;
    
    // Create and add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsProcessing(true);
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: generateDemoResponse(inputValue),
        sender: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
      setIsProcessing(false);
    }, 1500);
  };
  
  const generateDemoResponse = (query: string): string => {
    // Simple demo responses based on keywords
    if (query.toLowerCase().includes('lesson plan')) {
      return `Here's a sample lesson plan structure:\n\n**Topic:** [Subject]\n\n**Duration:** 45 minutes\n\n**Objectives:**\n- Students will be able to...\n- Students will understand...\n\n**Materials:**\n- Textbooks\n- Worksheets\n- Visual aids\n\n**Introduction (5 mins):**\nEngage students with a quick activity related to the topic.\n\n**Main Content (30 mins):**\n1. Present key concepts\n2. Guided practice\n3. Independent activity\n\n**Closure (10 mins):**\nReview key points and address questions.\n\n**Assessment:**\nFormative assessment through observation and questioning.`;
    } else if (query.toLowerCase().includes('quiz') || query.toLowerCase().includes('test')) {
      return `I can help you create quizzes and tests. Would you like me to generate:\n\n1. Multiple choice questions\n2. Short answer questions\n3. True/False questions\n4. Essay prompts\n\nLet me know the subject, grade level, and specific topics you'd like to cover.`;
    } else {
      return `Thanks for your question! In a fully functional version, I would provide a helpful response about "${query}". As this is a demo, I'm showing you what EVA's capabilities would look like. In the complete version, I can help with lesson planning, creating educational materials, answering subject matter questions, and much more.`;
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const startNewChat = () => {
    setMessages([
      {
        id: '1',
        content: "Hello! I'm EVA, your personal AI educational assistant. How can I help you today?",
        sender: 'assistant',
        timestamp: new Date(),
      },
    ]);
  };
  
  return (
    <div className="h-full flex flex-col bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200 dark:border-slate-800">
      {/* Chat Header */}
      <div className="px-6 py-4 border-b border-gray-200 dark:border-slate-800 flex justify-between items-center">
        <div className="flex items-center">
          <Sparkles className="text-eva-blue mr-2" size={20} />
          <h2 className="font-semibold">AI Assistant</h2>
        </div>
        <button 
          onClick={startNewChat}
          className="text-sm flex items-center text-gray-600 hover:text-eva-blue dark:text-gray-300"
        >
          <PlusCircle size={16} className="mr-1" />
          New Chat
        </button>
      </div>
      
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.sender === 'user'
                  ? 'bg-eva-blue text-white'
                  : 'bg-gray-100 dark:bg-slate-800'
              }`}
            >
              <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: message.content.replace(/\n/g, '<br/>') }} />
              
              {message.sender === 'assistant' && (
                <div className="mt-2 pt-2 border-t border-gray-200 dark:border-slate-700 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <button className="text-gray-500 hover:text-eva-blue dark:text-gray-400 dark:hover:text-eva-blue-light">
                      <ThumbsUp size={14} />
                    </button>
                    <button className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400">
                      <ThumbsDown size={14} />
                    </button>
                  </div>
                  <button className="text-gray-500 hover:text-eva-blue dark:text-gray-400 dark:hover:text-eva-blue-light">
                    <Download size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
        
        {isProcessing && (
          <div className="flex justify-start">
            <div className="bg-gray-100 dark:bg-slate-800 rounded-2xl px-5 py-3">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-eva-blue animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-eva-blue animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 rounded-full bg-eva-blue animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Chat Input */}
      <div className="p-4 border-t border-gray-200 dark:border-slate-800">
        <div className="relative rounded-lg border border-gray-300 dark:border-slate-700 focus-within:border-eva-blue dark:focus-within:border-eva-blue-light transition-colors">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask EVA anything..."
            className="w-full p-3 pr-12 bg-transparent outline-none resize-none max-h-32 text-gray-800 dark:text-gray-200"
            rows={1}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isProcessing}
            className={`absolute right-2 bottom-2 p-2 rounded-full ${
              !inputValue.trim() || isProcessing
                ? 'text-gray-400 dark:text-gray-600'
                : 'text-eva-blue hover:bg-blue-50 dark:hover:bg-slate-800'
            }`}
          >
            <Send size={20} />
          </button>
        </div>
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">
          EVA is an AI assistant and may produce inaccurate information.
        </p>
      </div>
    </div>
  );
};

export default Chat;
