import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();

  // Fetch parcel data
  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  // Payment Handler
  const handlePayment = async () => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };

    // Create checkout session
    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
     console.log(res.data.url);
    // Redirect to Stripe checkout
    window.location.href = res.data.url;
    // window.location.replace(res.data.url);
  };

  if (isLoading) {
    return (
      <div>
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold">
        Pay ${parcel.cost} for: {parcel.parcelName}
      </h2>

      <button onClick={handlePayment} className="btn btn-primary mt-4 text-black">
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
