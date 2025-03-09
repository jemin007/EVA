import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20 pl-64">
      <div className="max-w-6xl mx-auto p-8">
        {/* Back to Home Button */}
        <button
          onClick={() => navigate('/')} // Replace '/' with your home route
          className="flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </button>

        {/* Terms of Service Content */}
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
            Terms of Service
          </h1>

          {/* Sections */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
              <p className="text-gray-600">
                Welcome to Tarsi AI Solutions. These Terms of Service (“Terms”) govern your use of our website and services. By using our services, you accept these Terms in full.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Services Provided</h2>
              <p className="text-gray-600">
                Tarsi AI Solutions offers services such as AI Agent Development, Consulting, and Customer Relationship Integrations. These services are governed by the terms outlined herein.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Changes to Terms</h2>
              <p className="text-gray-600">
                We may update these Terms at any time and will post the updated version on our site. By continuing to use our services after these changes, you agree to the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Account Registration and Use</h2>
              <p className="text-gray-600">
                You must register an account to use certain features of our service. You agree to provide truthful and complete information and to keep this information up to date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Privacy Policy</h2>
              <p className="text-gray-600">
                Our Privacy Policy outlines how we manage your personal data and is incorporated into these Terms by reference.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. User Conduct</h2>
              <p className="text-gray-600">
                You are required to use our services lawfully and refrain from any illegal or unauthorized activities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Intellectual Property</h2>
              <p className="text-gray-600">
                All intellectual property rights related to the service and its content belong solely to Tarsi AI Solutions or its licensors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Third-Party Services</h2>
              <p className="text-gray-600">
                Our service may include links to third-party websites or services. Tarsi AI Solutions is not responsible for any third-party content or practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Termination</h2>
              <p className="text-gray-600">
                We may terminate or suspend your access to our services without notice if you violate these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Governing Law</h2>
              <p className="text-gray-600">
                These Terms are governed by and construed in accordance with the laws of Canada, without regard to its conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Changes to Service</h2>
              <p className="text-gray-600">
                We may change or discontinue any aspect of our services at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Disclaimer and Limitation of Liability</h2>
              <p className="text-gray-600">
                Our services are provided “as is” without any warranties. Tarsi AI Solutions is not liable for any damages that arise from your use or inability to use our services.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;