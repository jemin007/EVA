
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Sidebar from '../components/layout/Sidebar';
import { useToast } from '@/hooks/use-toast';

const UpgradePlan: React.FC = () => {
  const { toast } = useToast();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = React.useState(false);

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
      buttonText: 'Current Plan',
      isPopular: false,
      isCurrent: true,
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
      isCurrent: false,
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
      isCurrent: false,
    },
  ];

  const handleUpgrade = (planName: string) => {
    if (planName === 'Free') {
      toast({
        title: "Current Plan",
        description: "You are already on the Free plan.",
      });
      return;
    }
    
    // Here we would handle the actual upgrade process
    // For now, we'll just show a toast notification
    toast({
      title: `Upgrade to ${planName}`,
      description: `You selected the ${planName} plan. Payment processing would happen here.`,
    });
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-slate-900">
      <Sidebar 
        isMobileSidebarOpen={isMobileSidebarOpen} 
        setIsMobileSidebarOpen={setIsMobileSidebarOpen} 
      />
      
      <div className="flex-1 md:ml-64 overflow-y-auto">
        <main className="p-4 md:p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Upgrade Your Plan</h1>
            </div>
            
            <div className="mb-8 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                You are currently on the <span className="font-semibold">Free Plan</span>. Upgrade to unlock more features and enhance your teaching experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border ${
                    plan.isPopular 
                      ? 'border-eva-blue shadow-md dark:border-eva-blue-light' 
                      : 'border-gray-200 dark:border-slate-700'
                  } ${
                    plan.isCurrent
                      ? 'border-green-500 dark:border-green-400'
                      : ''
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute transform translate-y-0 bg-eva-blue text-white text-xs font-semibold py-1 px-4 rounded-full -mt-10 mx-auto left-0 right-0 w-max">
                      Most Popular
                    </div>
                  )}
                  
                  {plan.isCurrent && (
                    <div className="absolute transform translate-y-0 bg-green-500 text-white text-xs font-semibold py-1 px-4 rounded-full -mt-10 mx-auto left-0 right-0 w-max">
                      Current Plan
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
                  
                  <button
                    onClick={() => handleUpgrade(plan.name)}
                    className={`w-full text-center py-3 px-4 rounded-lg font-medium transition-colors ${
                      plan.isCurrent
                        ? 'bg-green-500 text-white hover:bg-green-600'
                        : plan.isPopular
                          ? 'bg-eva-blue text-white hover:bg-eva-blue/90'
                          : 'bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 dark:bg-slate-800 dark:border-slate-700 dark:text-gray-200 dark:hover:bg-slate-700'
                    }`}
                    disabled={plan.isCurrent}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center text-gray-600 dark:text-gray-300 text-sm">
              <p>Have questions about our plans? <Link to="/dashboard/contact" className="text-eva-blue hover:underline">Contact our support team</Link></p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UpgradePlan;
