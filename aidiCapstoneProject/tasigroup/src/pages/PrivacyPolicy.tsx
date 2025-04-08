import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation

const PrivacyPolicy = () => {
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

        {/* Privacy Policy Content */}
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
            Privacy Policy
          </h1>

          {/* Sections */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
              <p className="text-gray-600">
                Welcome to Tarsi AI Solutions. Protecting your privacy is critically important to us. This privacy policy outlines how we manage your personal information in accordance with Canadian privacy laws when you interact with our website and informs you about your privacy rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Important Information and Who We Are</h2>
              <p className="text-gray-600">
                Tarsi AI Solutions adheres to Canadian data protection laws. We are the data controller and are responsible for managing your personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. The Data We Collect About You</h2>
              <p className="text-gray-600">
                We may collect various types of personal data which include, but are not limited to, Identity Data, Contact Data, Financial Data, Transaction Data, and Technical Data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. How Is Your Personal Data Collected?</h2>
              <p className="text-gray-600">
                We collect data through direct interactions with our website and services, and through automated technologies that track your interactions with our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. How We Use Your Personal Data</h2>
              <p className="text-gray-600">
                In compliance with Canadian data protection laws, we process your personal data only for lawful reasons. These may include executing contracts, pursuing legitimate interests, or adhering to legal requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Data Security</h2>
              <p className="text-gray-600">
                In line with Canadian regulations, we have implemented robust security measures to safeguard your data from unauthorized access, changes, or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Data Retention</h2>
              <p className="text-gray-600">
                We retain personal data for the duration necessary to fulfill the purposes outlined in this policy, according to Canadian legal standards and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Your Legal Rights</h2>
              <p className="text-gray-600">
                Under Canadian law, you have specific rights in relation to your personal data, including the right to access, correct, or request the deletion of your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. International Transfers</h2>
              <p className="text-gray-600">
                We ensure compliance with Canadian regulations on the international transfer of personal data, guaranteeing that your data is secured in accordance with Canadian law during cross-border transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Third-Party Links</h2>
              <p className="text-gray-600">
                Our website may include links to external sites not operated by us. We do not control and are not responsible for the content or privacy practices of any third-party sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Contact Details</h2>
              <p className="text-gray-600">
                For any inquiries about this privacy policy or our privacy practices, please contact us via:
                <br />
                Email: <a href="mailto:info@tarsigroup.com" className="text-blue-600 hover:underline">info@tarsigroup.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Changes to the Privacy Policy</h2>
              <p className="text-gray-600">
                We reserve the right to modify this policy at any time. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;