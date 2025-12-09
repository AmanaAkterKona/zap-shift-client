import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();

  console.log("Session ID from URL:", sessionId);

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log("Updated:", res.data);
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId

          })
        });
    }
  }, [sessionId, axiosSecure]);

  return (
    <div>
      <h2 className="text-4xl">Payment successful</h2>
      <p>your TransactionId: {paymentInfo.transactionId }</p>
      <p>your Parcel Tracking id : {paymentInfo. trackingId}</p>
      <p>Your payment session ID: {sessionId}</p>
    </div>
  );
};

export default PaymentSuccess;
