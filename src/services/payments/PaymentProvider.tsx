import { FC, PropsWithChildren } from "react";
import { Elements } from "@stripe/react-stripe-js";
import stripe from "../stripe";

const PaymentProvider: FC<PropsWithChildren> = ({ children }) => (
    <Elements stripe={stripe}>
        { children }
    </Elements>
);

export default PaymentProvider;
