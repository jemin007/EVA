import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const UnauthenticatedChatRoom: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl text-center max-w-md w-full">
        {/* EVA Logo */}
        <div className="flex justify-center mb-6">
          <MessageCircle className="h-16 w-16 text-blue-600" />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Welcome to EVA Chat Room
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-8">
          Please log in or sign up to start chatting with EVA.
        </p>

        {/* Buttons */}
        <div className="flex flex-col space-y-4">
          <Link
            to="/login"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 text-center"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 text-center"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnauthenticatedChatRoom;