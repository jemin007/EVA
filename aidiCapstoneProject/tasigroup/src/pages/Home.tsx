// pages/Home.tsx
import React from "react";
import { GraduationCap, FileSpreadsheet, Brain, BookOpen } from "lucide-react";

const Home: React.FC = () => {
  const features = [
    {
      title: "Create an Assignment",
      description: "Generate custom assignments with AI assistance",
      icon: FileSpreadsheet,
      gradient: "from-blue-600 to-cyan-500",
      onClick: () => window.location.href = "/chat-room", // Redirect to chat room
    },
    {
      title: "Generate a Quiz",
      description: "Create engaging quizzes in seconds",
      icon: Brain,
      gradient: "from-purple-600 to-pink-500",
      onClick: () => window.location.href = "/chat-room",
    },
    {
      title: "Create Course Outline",
      description: "Design comprehensive course structures",
      icon: BookOpen,
      gradient: "from-green-500 to-teal-500",
      onClick: () => window.location.href = "/chat-room",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pl-64 bg-gradient-to-r from-indigo-100 to-blue-50">
      <div className="max-w-6xl mx-auto p-8">
        <div className="text-center mb-16">
          <div className="relative mx-auto mb-4" style={{ width: '450px', height: 'auto' }}>
            <GraduationCap className="h-16 w-16 absolute -top-8 left-1/2 transform -translate-x-1/2 text-blue-600 animate-pulse mb-3" />
            <img src="/logo.png" alt="Logo" className="mx-auto" />
          </div>
          <h2 className="text-2xl text-gray-700 mb-6">
            Your Personal AI Educational Assistant
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
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
      </div>
    </div>
  );
};

export default Home;