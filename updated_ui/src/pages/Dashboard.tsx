
import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Chat from '../components/dashboard/Chat';
import RecentChats from '../components/dashboard/RecentChats';

const Dashboard: React.FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-slate-900">
      <Sidebar 
        isMobileSidebarOpen={isMobileSidebarOpen} 
        setIsMobileSidebarOpen={setIsMobileSidebarOpen} 
      />
      
      <div className="flex-1 md:ml-64">
        <main className="flex flex-col h-full p-4 md:p-6 overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-4 h-full">
            <div className="flex-1 min-w-0">
              <Chat />
            </div>
            <div className="w-full lg:w-80">
              <RecentChats />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
