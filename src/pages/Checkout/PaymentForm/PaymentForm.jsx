import { useState } from "react";

import { useSelector } from "react-redux";
import { selectCartTotal } from "../../../features/cart";
import { selectUserData } from "../../../features/user";

import * as S from "./PaymentForm.styles";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { ButtonType } from "../../../components/Button";

const PaymentForm = () => {
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const cartTotal = useSelector(selectCartTotal);
    const userData = useSelector(selectUserData);

    const stripe = useStripe();
    const elements = useElements();

    const handlePayment = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        try {
            setIsProcessingPayment(true);

            const response = await fetch(
                "/.netlify/functions/create-payment-intent",
                {
                    method: "POST",
                    headers: {
                        'Content-Type': "application/json",
                    },
                    body: JSON.stringify({ amount: cartTotal * 100 }),
                }).then(_ => _.json());
    
            const { paymentIntent: { client_secret } } = response;
            const paymentResult = await stripe.confirmCardPayment(
                client_secret,
                {
                    payment_method: {
                        card: elements.getElement(CardElement),
                        billing_details: {
                            name: userData ? userData.displayName : "Guest",
                        },
                    },
                }
            );
    
            if (paymentResult.error) alert(paymentResult.error);
            else if (paymentResult.paymentIntent.status === "succeeded") alert("Successful payment!");
        } finally {
            setIsProcessingPayment(false);
        }
    };

    return (
        <S.PaymentForm>
            <S.FormContainer onSubmit={handlePayment}>
                <h2>Credit Card Payment</h2>
                <CardElement />
                <S.PaymentButton buttonType={ButtonType.Inverted} isLoading={isProcessingPayment}>Pay Now</S.PaymentButton>
            </S.FormContainer>
        </S.PaymentForm>
    )
};

export default PaymentForm;
