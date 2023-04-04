import { loadStripe } from "@stripe/stripe-js";

export default loadStripe(process.env.REACT_APP_STRIPE_KEY);
