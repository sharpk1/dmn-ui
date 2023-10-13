import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";
import { PaymentRequest } from "@stripe/stripe-js";

const ApplePay = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentRequest, setPaymentRequest] = useState<PaymentRequest | null>(
    null
  );

  useEffect(() => {
    if (!stripe || !elements) {
      return;
    }
    const pr = stripe?.paymentRequest({
      currency: "usd",
      country: "US",
      requestPayerEmail: true,
      requestPayerName: true,
      total: {
        label: "Demo payment",
        amount: 1999,
      },
    });
    pr.canMakePayment().then((result) => {
      if (result) {
        setPaymentRequest(pr);
      }
    });

    pr.on("paymentmethod", async (e) => {});
  }, [stripe, elements]);
  return (
    <>
      <div>Hello</div>
      {paymentRequest && (
        <PaymentRequestButtonElement options={{ paymentRequest }} />
      )}
    </>
  );
};

export default ApplePay;
