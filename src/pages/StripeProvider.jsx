import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51PRLy9DJ99odiZ4UcThplsw3CPjJJBCrhFJ7ljirbtLHgtioOiC4ZassQeBFbdaY53jyJO8FR5pbrkKVHXKAf9XH00js18SLjg"
);

const StripeProvider = ({ children }) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeProvider;
