import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ReportCard: React.FC = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>('');

  const handleRating = (value: number) => {
    setRating(value);
  };

  const handleSubmit = () => {
    alert(`Thank you for your feedback! Rating: ${rating}, Feedback: ${feedback}`);
    setRating(0);
    setFeedback('');
  };

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
            Report Card
          </h1>

          {/* Rating Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              How happy are you with EVA?
            </h2>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRating(star)}
                  className={`text-3xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-500 transition-all duration-300`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* Feedback Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Feedback</h2>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Share your thoughts about EVA..."
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;