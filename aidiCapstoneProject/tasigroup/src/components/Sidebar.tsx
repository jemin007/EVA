import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HelpCircle,
  DollarSign,
  BookOpen,
  FileBarChart,
  MessageCircle,
  ChevronRight,
  Shield,
  FileText,
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const isAuthenticated = !!localStorage.getItem("token"); // Check for token instead of user_id

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-gray-900 to-gray-800 border-r border-gray-700 shadow-2xl backdrop-blur-lg p-6 rounded-r-xl transition-all duration-500">
      {/* Logo / Title */}
      <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center mb-8 tracking-widest">
        EVA Tools
      </h1>

      {/* Flex container to push content to the bottom */}
      <div className="flex flex-col justify-between h-[calc(100vh-8rem)]">
        {/* Top Section: Sidebar Items */}
        <div className="space-y-6">
          {/* How EVA Works */}
          <SidebarItem
            to="/how-eva-works"
            icon={<HelpCircle className="h-6 w-6 text-blue-400 group-hover:text-white transition-all" />}
            title="How EVA Works"
            color="from-blue-600 to-cyan-500"
            isActive={location.pathname === '/how-eva-works'}
          />

          {/* Pricing */}
          <SidebarItem
            to="/pricing"
            icon={<DollarSign className="h-6 w-6 text-green-400 group-hover:text-white transition-all" />}
            title="Pricing"
            color="from-green-600 to-teal-500"
            isActive={location.pathname === '/pricing'}
          />

          {/* Prompt Library */}
          <SidebarItem
            to="/prompt-library"
            icon={<BookOpen className="h-6 w-6 text-purple-400 group-hover:text-white transition-all" />}
            title="Prompt Library"
            color="from-purple-600 to-pink-500"
            isActive={location.pathname === '/prompt-library'}
          />

          {/* Report Card */}
          <SidebarItem
            to="/report-card"
            icon={<FileBarChart className="h-6 w-6 text-yellow-400 group-hover:text-white transition-all" />}
            title="Report Card"
            color="from-yellow-600 to-orange-500"
            isActive={location.pathname === '/report-card'}
          />

          {/* Chat Room (Visible only when authenticated) */}
          {isAuthenticated && (
            <SidebarItem
              to="/chat-room"
              icon={<MessageCircle className="h-6 w-6 text-blue-400 group-hover:text-white transition-all" />}
              title="Chat Room"
              color="from-blue-600 to-purple-600"
              isActive={location.pathname === '/chat-room'}
            />
          )}
        </div>

        {/* Bottom Section: Privacy Policy and Terms of Service Links */}
        <div className="space-y-4">
          <Link
            to="/privacy-policy"
            className={`flex items-center justify-between p-3 rounded-xl ${location.pathname === '/privacy-policy' ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white' : 'bg-gray-800/30 text-gray-300'} shadow-md hover:shadow-lg transition-all duration-300`}
          >
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5" />
              <span className="font-medium tracking-wide">Privacy Policy</span>
            </div>
            <ChevronRight className="h-5 w-5" />
          </Link>

          <Link
            to="/terms-of-service"
            className={`flex items-center justify-between p-3 rounded-xl ${location.pathname === '/terms-of-service' ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white' : 'bg-gray-800/30 text-gray-300'} shadow-md hover:shadow-lg transition-all duration-300`}
          >
            <div className="flex items-center space-x-3">
              <FileText className="h-5 w-5" />
              <span className="font-medium tracking-wide">Terms of Service</span>
            </div>
            <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

/* Sidebar Item Component */
const SidebarItem = ({ to, icon, title, color, isActive }) => {
  return (
    <Link
      to={to}
      className={`group flex items-center justify-between p-4 rounded-xl transition-all duration-300 
      ${isActive ? `bg-gradient-to-r ${color} text-white` : 'bg-gray-800/30 text-gray-300'} shadow-md hover:shadow-lg`}
    >
      <div className="flex items-center space-x-4">
        {icon}
        <span className="font-medium tracking-wide">{title}</span>
      </div>
      <ChevronRight className="h-5 w-5" />
    </Link>
  );
};

export default Sidebar;