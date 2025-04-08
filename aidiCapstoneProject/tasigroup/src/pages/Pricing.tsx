import React, { useState } from 'react';
import { ArrowLeft, Loader2, Check, Zap, Gem } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51RAFGMLGXU8BfuvFXJdIukCT8fhxklk5oVhLunC2EuRCDu69lRUvFXVpwvURpIFBODEyB7XaEwWXz5uJDg37AUME00VC4I8jWS');

const Pricing: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleUpgrade = async () => {
  setIsLoading(true);
  try {
    const response = await fetch('http://localhost:8080/create-checkout-session/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})  // Empty body since we're using auth token
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Payment failed');
    }

    const { url } = await response.json();
    window.location.href = url;
  } catch (error) {
    console.error('Checkout error:', error);
    setError(error.message);
  } finally {
    setIsLoading(false);
  }
};

  const features = [
    "Unlimited AI interactions",
    "Priority support",
    "Advanced features",
    "Cancel anytime"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </button>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get full access to all EVA features with our flexible pricing
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg max-w-2xl mx-auto mb-8">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-all hover:shadow-md">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Free</h2>
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-2">$0<span className="text-lg text-gray-500">/month</span></p>
              <p className="text-gray-600 mb-6">Start with our basic features</p>
              <button
                onClick={() => navigate('/')}
                className="w-full px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Continue with Free
              </button>
            </div>
            <div className="border-t border-gray-200 px-8 py-6 bg-gray-50">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">WHAT'S INCLUDED</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>2 complete AI interactions</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Basic features</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="relative bg-white border-2 border-purple-200 rounded-2xl shadow-sm overflow-hidden transition-all hover:shadow-lg">
            <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
              Popular
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-2 rounded-full mr-3">
                  <Gem className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Pro</h2>
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-2">$15<span className="text-lg text-gray-500">/month</span></p>
              <p className="text-gray-600 mb-6">Unlock all premium features</p>
              <button
                onClick={handleUpgrade}
                disabled={isLoading}
                className={`w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-md transition-all ${
                  isLoading ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin mx-auto" />
                ) : (
                  'Upgrade to Pro'
                )}
              </button>
            </div>
            <div className="border-t border-gray-200 px-8 py-6 bg-gray-50">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">PREMIUM FEATURES</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Need help choosing? <button className="text-purple-600 hover:underline">Contact our team</button></p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;