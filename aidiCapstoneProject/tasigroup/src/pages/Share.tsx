import React from 'react';
import { Share2, Twitter, Facebook, Linkedin, Mail, Link as LinkIcon } from 'lucide-react';

const Share = () => {
  const shareOptions = [
    {
      icon: Twitter,
      title: 'Twitter',
      description: 'Share EVA with your professional network',
      gradient: 'from-blue-400 to-blue-600',
      onClick: () => console.log('Share on Twitter')
    },
    {
      icon: Facebook,
      title: 'Facebook',
      description: 'Share with fellow educators',
      gradient: 'from-blue-600 to-blue-800',
      onClick: () => console.log('Share on Facebook')
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'Connect with education professionals',
      gradient: 'from-blue-700 to-blue-900',
      onClick: () => console.log('Share on LinkedIn')
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Invite colleagues via email',
      gradient: 'from-purple-600 to-pink-500',
      onClick: () => console.log('Share via Email')
    },
    {
      icon: LinkIcon,
      title: 'Copy Link',
      description: 'Get a shareable link to EVA',
      gradient: 'from-green-500 to-teal-500',
      onClick: () => console.log('Copy Link')
    }
  ];

  return (
    <div className="min-h-screen pt-20 pl-64">
      <div className="max-w-6xl mx-auto p-8">
        <div className="text-center mb-16">
          <Share2 className="h-16 w-16 mx-auto text-blue-600 mb-4" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Share EVA
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help fellow educators discover the power of AI-assisted teaching.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shareOptions.map((option, index) => (
            <button
              key={index}
              onClick={option.onClick}
              className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${option.gradient} rounded-t-2xl`}></div>
              <option.icon className={`h-12 w-12 mb-4 bg-gradient-to-r ${option.gradient} bg-clip-text text-transparent`} />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{option.title}</h3>
              <p className="text-gray-600">{option.description}</p>
              <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 group-hover:h-full transition-all duration-300 rounded-2xl -z-10"></div>
            </button>
          ))}
        </div>

        <div className="mt-16 bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Referral Program</h2>
          <p className="text-gray-600 mb-6">
            Invite other educators to join EVA and earn rewards! Share your unique referral link below.
          </p>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value="https://eva.edu/refer/YOUR_ID"
              readOnly
              className="flex-1 p-3 border border-gray-200 rounded-xl bg-gray-50"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              Copy Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;