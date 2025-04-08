import {CheckCircle} from "lucide-react";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";


const PaymentSuccess = () => {
    const navigate = useNavigate();


 // In your payment success page/component
useEffect(() => {
  const verifyPayment = async () => {
    const sessionId = new URLSearchParams(window.location.search).get('session_id');
    if (!sessionId) return;

    try {
      // 1. Verify payment with backend
      await fetch(`/verify-payment?session_id=${sessionId}`);

      // 2. Clear cached data
      localStorage.removeItem('token');
      localStorage.removeItem('userPlan');

      // 3. Hard refresh to reset all states
      window.location.href = '/chat'; // Or your chat route
    } catch (error) {
      console.error("Payment verification failed:", error);
    }
  };
  verifyPayment();
}, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
        <p className="text-gray-600 mb-6">You now have full access to all features.</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg"
        >
          Return to App
        </button>
      </div>
    </div>
  );
};
export default PaymentSuccess;
