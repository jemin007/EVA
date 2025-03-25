
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Brain, CheckCircle } from 'lucide-react';

const Index: React.FC = () => {
  const navigate = useNavigate();
  
  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Basic AI assistance for educators',
      features: [
        'AI Chat Assistant (Limited)',
        'Basic Lesson Planning',
        'Up to 20 AI responses per day',
        'Standard response time',
      ],
      buttonText: 'Get Started',
      isPopular: false,
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: 'per month',
      description: 'Advanced tools for dedicated teachers',
      features: [
        'Unlimited AI Chat',
        'Advanced Lesson Planning',
        'Quiz & Study Material Generation',
        'Priority response time',
        'Save & Export Options',
      ],
      buttonText: 'Upgrade to Pro',
      isPopular: true,
    },
    {
      name: 'School',
      price: '$49.99',
      period: 'per month',
      description: 'Complete solution for schools',
      features: [
        'Everything in Pro',
        'Up to 10 teacher accounts',
        'Admin dashboard',
        'Custom integration options',
        'Dedicated support',
        'Usage analytics',
      ],
      buttonText: 'Contact Sales',
      isPopular: false,
    },
  ];
  
  const handleUpgradeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/login');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <Features />
        
        {/* Testimonials Section */}
        <section className="section">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Loved by Educators
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                See what teachers and educational professionals are saying about EVA.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <div key={index} className="card flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-slate-700 mr-4"></div>
                    <div>
                      <h4 className="font-semibold">Teacher Name</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">5th Grade, Elementary</p>
                    </div>
                  </div>
                  <p className="flex-1 text-gray-600 dark:text-gray-300 mb-4">
                    "EVA has completely transformed how I prepare for my classes. What used to take hours now takes minutes, giving me more time to focus on my students."
                  </p>
                  <div className="flex items-center text-eva-purple">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-lg">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section id="pricing" className="section bg-gray-50 dark:bg-slate-900/50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Choose the plan that fits your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`card relative ${
                    plan.isPopular 
                      ? 'border-eva-blue shadow-lg dark:border-eva-blue-light' 
                      : ''
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-eva-blue text-white text-xs font-semibold py-1 px-4 rounded-full">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-gray-500 dark:text-gray-400 ml-1">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle size={18} className="text-eva-blue shrink-0 mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {index === 0 ? (
                    <Link
                      to="/signup"
                      className={`block text-center py-3 px-4 rounded-lg font-medium transition-colors ${
                        plan.isPopular
                          ? 'bg-eva-blue text-white hover:bg-eva-blue/90'
                          : 'bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 dark:bg-slate-800 dark:border-slate-700 dark:text-gray-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {plan.buttonText}
                    </Link>
                  ) : (
                    <button
                      onClick={handleUpgradeClick}
                      className={`w-full text-center py-3 px-4 rounded-lg font-medium transition-colors ${
                        plan.isPopular
                          ? 'bg-eva-blue text-white hover:bg-eva-blue/90'
                          : 'bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 dark:bg-slate-800 dark:border-slate-700 dark:text-gray-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {plan.buttonText}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-eva-blue to-eva-purple rounded-2xl p-8 text-center text-white shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Teaching?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of educators who are saving time and enhancing their teaching experience with EVA.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/signup" className="bg-white text-eva-blue py-3 px-8 rounded-full font-medium hover:bg-opacity-90 transition-colors shadow-md">
                  Get Started Free
                </Link>
                <button 
                  onClick={handleUpgradeClick}
                  className="text-white py-3 px-8 rounded-full font-medium border border-white/30 hover:bg-white/10 transition-colors"
                >
                  Try Demo
                  <ArrowRight size={18} className="ml-2 inline" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Brain className="text-eva-blue mr-2" />
                <span className="font-bold text-xl">EVA</span>
                <span className="text-gradient font-light ml-1">AI</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Your personal AI educational assistant that helps teachers enhance their teaching experience.
              </p>
            </div>
            
            {['Product', 'Company', 'Resources'].map((category) => (
              <div key={category}>
                <h4 className="font-semibold mb-4">{category}</h4>
                <ul className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-600 hover:text-eva-blue dark:text-gray-300 dark:hover:text-eva-blue-light">
                        {category} Link {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-12 pt-6 border-t border-gray-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} EVA AI. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-eva-blue dark:text-gray-400 dark:hover:text-eva-blue-light">Terms</a>
              <a href="#" className="text-gray-500 hover:text-eva-blue dark:text-gray-400 dark:hover:text-eva-blue-light">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-eva-blue dark:text-gray-400 dark:hover:text-eva-blue-light">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
