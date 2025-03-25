
import React from 'react';
import { MessageSquare, FileText, BookOpen, Brain, Sparkles, Shield } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'AI Chat Assistant',
      description: 'Ask any educational question and get instant, accurate responses from our advanced AI assistant.',
      color: 'text-blue-500',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: FileText,
      title: 'Lesson Planning',
      description: 'Generate comprehensive lesson plans in seconds, tailored to your curriculum and teaching style.',
      color: 'text-purple-500',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: BookOpen,
      title: 'Study Materials',
      description: 'Create quizzes, worksheets, and study guides customized for your students\' needs.',
      color: 'text-green-500',
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: Brain,
      title: 'Smart Suggestions',
      description: 'Receive intelligent recommendations for activities and resources based on your teaching patterns.',
      color: 'text-orange-500',
      gradient: 'from-orange-500 to-orange-600',
    },
    {
      icon: Sparkles,
      title: 'Time-Saving Magic',
      description: 'Automate repetitive tasks and focus more on what matters—connecting with your students.',
      color: 'text-pink-500',
      gradient: 'from-pink-500 to-pink-600',
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'All your data is encrypted and protected. EVA is designed with privacy and security as top priorities.',
      color: 'text-indigo-500',
      gradient: 'from-indigo-500 to-indigo-600',
    },
  ];
  
  return (
    <section id="services" className="section bg-gray-50 dark:bg-slate-900/50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Modern Educators
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            EVA offers a suite of AI-powered tools designed specifically for teachers and educational professionals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-lg mb-5 flex items-center justify-center bg-gradient-to-br ${feature.gradient} text-white`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
