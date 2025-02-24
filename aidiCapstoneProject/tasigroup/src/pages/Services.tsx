import React from 'react';
import { Lightbulb, BookOpen, Users, PenTool, Brain, Rocket } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: 'Smart Assignment Creation',
      description: 'Generate customized assignments with AI assistance tailored to your curriculum.',
      gradient: 'from-blue-600 to-cyan-500'
    },
    {
      icon: BookOpen,
      title: 'Course Planning',
      description: 'Design comprehensive course outlines and lesson plans effortlessly.',
      gradient: 'from-purple-600 to-pink-500'
    },
    {
      icon: Users,
      title: 'Student Progress Tracking',
      description: 'Monitor and analyze student performance with detailed insights.',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: PenTool,
      title: 'Quiz Generation',
      description: 'Create engaging quizzes and assessments in seconds.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent suggestions for improving educational content.',
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      icon: Rocket,
      title: 'Performance Analytics',
      description: 'Track and optimize your teaching effectiveness with detailed metrics.',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pl-64">
      <div className="max-w-6xl mx-auto p-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how EVA can transform your teaching experience with our comprehensive suite of AI-powered tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} rounded-t-2xl`}></div>
              <service.icon className={`h-12 w-12 mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`} />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 group-hover:h-full transition-all duration-300 rounded-2xl -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;