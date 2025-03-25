
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Sparkles, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="hero-section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full px-3 py-1 mb-6 shadow-sm border border-gray-100 dark:border-slate-700">
            <Sparkles size={16} className="text-eva-purple mr-2" />
            <span className="text-sm font-medium">Your Personal AI Educational Assistant</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            Transform Your Teaching With <span className="text-gradient">EVA</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            EVA is an AI-powered educational assistant designed to help teachers enhance their teaching experience and save time with AI-generated content.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Link to="/signup" className="btn-primary">
              Get Started Free
              <ArrowRight size={18} className="ml-2 inline" />
            </Link>
            <Link to="/dashboard" className="btn-secondary">
              Try Demo
            </Link>
          </div>
          
          <div className="mt-16 w-full max-w-4xl mx-auto bg-white/70 dark:bg-slate-800/50 backdrop-blur-lg border border-gray-100 dark:border-slate-700 rounded-2xl shadow-xl p-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-xl overflow-hidden aspect-video">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-slate-900">
                <div className="flex flex-col items-center">
                  <Brain size={48} className="text-eva-blue mb-4 animate-float" />
                  <div className="w-64 h-4 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 blue-gradient animate-pulse rounded-full" />
                  </div>
                  <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Loading demo preview...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
