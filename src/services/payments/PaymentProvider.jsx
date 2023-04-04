import { Elements } from "@stripe/react-stripe-js";
import stripe from "../stripe";

const PaymentProvider = ({ children }) => (
    <Elements stripe={stripe}>
        { children }
    </Elements>
);

export default PaymentProvider;
