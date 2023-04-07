import { Stripe, loadStripe } from "@stripe/stripe-js";

const stripeKey = process.env.REACT_APP_STRIPE_KEY;
if (!stripeKey) {
    console.error("Environment must define REACT_APP_STRIPE_KEY.");
}

const stripePromise: Promise<Stripe | null> = stripeKey ? loadStripe(stripeKey) : Promise.resolve(null);

export default stripePromise;
