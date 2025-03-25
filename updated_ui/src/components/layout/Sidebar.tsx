
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  ChevronRight,
  Share2,
  Info,
  Crown,
  MessageSquare,
  FileText,
  BookOpen,
  Brain,
  Menu,
  X
} from 'lucide-react';
import Logo from '../ui/Logo';
import UserProfileDropdown from './UserProfileDropdown';

interface SidebarProps {
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: (value: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  isMobileSidebarOpen, 
  setIsMobileSidebarOpen 
}) => {
  const location = useLocation();
  const [isToolsOpen, setIsToolsOpen] = useState(true);
  
  const sidebarLinks = [
    {
      title: 'EVA Tools',
      icon: Brain,
      isDropdown: true,
      isOpen: isToolsOpen,
      toggle: () => setIsToolsOpen(!isToolsOpen),
      subItems: [
        { name: 'AI Chat Assistant', icon: MessageSquare, path: '/dashboard' },
        { name: 'Lesson Planner', icon: FileText, path: '/dashboard/lesson-planner' },
        { name: 'Study Materials', icon: BookOpen, path: '/dashboard/study-materials' },
      ],
    },
    {
      title: 'Share EVA',
      icon: Share2,
      path: '/dashboard/share',
      isDropdown: false,
    },
    {
      title: 'EVA Intro',
      icon: Info,
      path: '/dashboard/intro',
      isDropdown: false,
    },
    {
      title: 'Upgrade',
      icon: Crown,
      path: '/dashboard/upgrade',
      isDropdown: false,
      highlight: true,
    },
  ];
  
  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false);
  };
  
  const isLinkActive = (path: string) => {
    if (path === '/dashboard' && location.pathname === '/dashboard') {
      return true;
    }
    if (path !== '/dashboard' && location.pathname.startsWith(path)) {
      return true;
    }
    return false;
  };
  
  return (
    <>
      {/* Mobile Overlay */}
      {isMobileSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={closeMobileSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-gray-200 shadow-sm transition-transform duration-300 ease-in-out
          dark:bg-slate-900 dark:border-slate-800
          ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-slate-800">
            <Logo />
            <div className="flex items-center">
              <UserProfileDropdown />
              <button
                className="md:hidden ml-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                onClick={closeMobileSidebar}
              >
                <X size={20} />
              </button>
            </div>
          </div>
          
          {/* Sidebar Content */}
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="px-3 space-y-1">
              {sidebarLinks.map((item) => (
                <div key={item.title}>
                  {item.isDropdown ? (
                    <div className="space-y-1">
                      <button
                        onClick={item.toggle}
                        className={`
                          w-full flex items-center px-3 py-2 text-sm font-medium rounded-md group transition-colors
                          ${item.isOpen ? 'bg-gray-100 text-eva-blue dark:bg-slate-800' : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-slate-800'}
                        `}
                      >
                        <item.icon size={18} className="mr-3 flex-shrink-0" />
                        <span className="flex-1 text-left">{item.title}</span>
                        {item.isOpen ? (
                          <ChevronDown size={16} />
                        ) : (
                          <ChevronRight size={16} />
                        )}
                      </button>
                      
                      {item.isOpen && (
                        <div className="ml-8 space-y-1">
                          {item.subItems?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className={`
                                group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors
                                ${isLinkActive(subItem.path) 
                                  ? 'bg-blue-50 text-eva-blue dark:bg-slate-800/80 dark:text-eva-blue-light' 
                                  : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-slate-800/60'
                                }
                              `}
                              onClick={closeMobileSidebar}
                            >
                              <subItem.icon size={16} className="mr-3 flex-shrink-0" />
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path || '#'}
                      className={`
                        group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors
                        ${item.highlight 
                          ? 'bg-gradient-to-r from-eva-purple to-eva-blue text-white hover:from-eva-purple/90 hover:to-eva-blue/90'
                          : isLinkActive(item.path || '') 
                            ? 'bg-blue-50 text-eva-blue dark:bg-slate-800 dark:text-eva-blue-light' 
                            : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-slate-800'
                        }
                      `}
                      onClick={closeMobileSidebar}
                    >
                      <item.icon size={18} className="mr-3 flex-shrink-0" />
                      <span>{item.title}</span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
          
          {/* Sidebar Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-slate-800">
            <div className="bg-blue-50 dark:bg-slate-800 rounded-lg p-3">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                You are using EVA Free Plan
              </p>
              <Link
                to="/dashboard/upgrade"
                className="mt-2 block text-center py-1.5 px-3 text-xs font-medium text-white rounded-md bg-eva-blue hover:bg-eva-blue/90 transition-colors"
                onClick={closeMobileSidebar}
              >
                Upgrade Now
              </Link>
            </div>
          </div>
        </div>
      </aside>
      
      {/* Mobile Sidebar Toggle */}
      <button
        className="md:hidden fixed bottom-4 right-4 z-30 bg-eva-blue text-white p-3 rounded-full shadow-lg"
        onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        aria-label="Toggle sidebar"
      >
        <Menu size={20} />
      </button>
    </>
  );
};

export default Sidebar;
