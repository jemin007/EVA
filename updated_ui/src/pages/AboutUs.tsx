import React from 'react';
import Navbar from '../components/layout/Navbar';
import { Check } from 'lucide-react';

const AboutUs: React.FC = () => {
  const values = [
    {
      title: 'Education First',
      description: 'We believe in the power of education to transform lives.'
    },
    {
      title: 'Passionate About Teaching',
      description: 'Our team consists of educators who understand your needs.'
    },
    {
      title: 'Trusted Platform',
      description: 'Security and privacy are at the core of everything we do.'
    },
    {
      title: 'Innovative Solutions',
      description: 'Constantly evolving to provide cutting-edge educational tools.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About EVA</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Empowering educators with AI-driven tools to create exceptional learning experiences.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto mb-16">
              <div className="card p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  At EVA, we're dedicated to revolutionizing education through innovative AI technology. 
                  Our platform empowers educators to create engaging, personalized learning experiences 
                  while saving valuable time. We believe that by combining the expertise of teachers 
                  with the power of AI, we can enhance education for everyone.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="card p-6 flex items-start">
                  <div className="mr-4 mt-1 bg-eva-blue/10 p-2 rounded-full">
                    <Check className="text-eva-blue h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer from Index page could be added here, but keeping it simple for now */}
    </div>
  );
};

export default AboutUs;
