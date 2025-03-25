
import React from 'react';
import { MessageSquare, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

// Sample data for recent chats
// In a real application, this would come from your backend
const recentChatsData = [
  {
    id: '1',
    title: 'Lesson Plan: World History',
    preview: 'Created a comprehensive lesson plan for World War II...',
    date: '2 hours ago',
  },
  {
    id: '2',
    title: 'Science Quiz Generator',
    preview: 'Generated 15 multiple choice questions on the solar system...',
    date: '1 day ago',
  },
  {
    id: '3',
    title: 'Math Worksheet Help',
    preview: 'Assistance with creating algebra worksheets for 9th grade...',
    date: 'Yesterday',
  },
  {
    id: '4',
    title: 'Student Engagement Ideas',
    preview: 'Discussed interactive classroom activities for remote learning...',
    date: '3 days ago',
  },
];

const RecentChats: React.FC = () => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium flex items-center">
          <MessageSquare className="w-5 h-5 mr-2 text-eva-blue" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[400px] px-6">
          <div className="space-y-4">
            {recentChatsData.map((chat) => (
              <div
                key={chat.id}
                className="flex flex-col space-y-2 pb-4 border-b border-gray-100 dark:border-gray-800 last:border-0 last:pb-0"
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-sm text-gray-900 dark:text-gray-100">
                    {chat.title}
                  </h3>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <Calendar className="w-3 h-3 mr-1" />
                    {chat.date}
                  </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {chat.preview}
                </p>
                <div className="pt-1">
                  <button className="text-xs text-eva-blue hover:text-eva-blue-light transition-colors">
                    Continue conversation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default RecentChats;
