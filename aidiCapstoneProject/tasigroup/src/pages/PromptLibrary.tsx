import React from 'react';
import { ArrowLeft, BookOpen, FileText, ClipboardList, ListChecks } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PromptLibrary: React.FC = () => {
  const navigate = useNavigate();

  // Prompt categories with icons and examples
  const promptCategories = [
    {
      title: 'Assignment',
      icon: <BookOpen className="h-8 w-8 text-blue-500" />,
      examples: [
        'Create an assignment on the topic of photosynthesis.',
        'Generate a 500-word essay prompt about climate change.',
        'Design a group project for a history class.',
      ],
      gradient: 'from-blue-50 to-purple-50',
    },
    {
      title: 'Quiz',
      icon: <ClipboardList className="h-8 w-8 text-green-500" />,
      examples: [
        'Create a 10-question quiz on basic algebra.',
        'Generate a multiple-choice quiz on world capitals.',
        'Design a true/false quiz about the solar system.',
      ],
      gradient: 'from-green-50 to-teal-50',
    },
    {
      title: 'Outline',
      icon: <FileText className="h-8 w-8 text-purple-500" />,
      examples: [
        'Create an outline for a research paper on AI ethics.',
        'Generate a lesson plan outline for a biology class.',
        'Design a project outline for a software development course.',
      ],
      gradient: 'from-purple-50 to-pink-50',
    },
    {
      title: 'Rubric',
      icon: <ListChecks className="h-8 w-8 text-yellow-500" />,
      examples: [
        'Create a rubric for grading essays.',
        'Generate a rubric for assessing group presentations.',
        'Design a rubric for evaluating coding projects.',
      ],
      gradient: 'from-yellow-50 to-orange-50',
    },
  ];

  return (
    <div className="min-h-screen pt-20 pl-64">
      <div className="max-w-6xl mx-auto p-8">
        {/* Back to Home Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </button>

        {/* Page Content */}
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
            Prompt Library
          </h1>

          {/* Grid Layout for Prompt Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promptCategories.map((category, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${category.gradient} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Category Icon and Title */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
                </div>

                {/* Examples List */}
                <ol className="list-decimal list-inside space-y-2 text-gray-600 text-lg">
                  {category.examples.map((example, i) => (
                    <li key={i} className="hover:text-gray-800 transition-all duration-200">
                      {example}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptLibrary;