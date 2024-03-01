import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PayBillData from "./PayBillData";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const BillPayment = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <PayBillData></PayBillData>
      </Elements>
    </div>
  );
};

export default BillPayment;
