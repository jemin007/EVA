import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51RAFGMLGXU8BfuvFXJdIukCT8fhxklk5oVhLunC2EuRCDu69lRUvFXVpwvURpIFBODEyB7XaEwWXz5uJDg37AUME00VC4I8jWS');

const CheckoutPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default CheckoutPage;