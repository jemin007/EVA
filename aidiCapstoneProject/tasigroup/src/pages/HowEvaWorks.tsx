import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HowEvaWorks: React.FC = () => {
  const navigate = useNavigate();

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
            How EVA Works
          </h1>

          {/* YouTube Video Embed */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/9syntOCtVcE?si=zvGaZeKMVADciw6R" // Replace with your YouTube video link
              title="How EVA Works"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Description */}
          <div className="mt-8 space-y-4">
            <p className="text-gray-600">
              EVA is designed to simplify your workflow with AI-powered tools. Watch the video above to learn how EVA can help you create assignments, quizzes, and more with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowEvaWorks;