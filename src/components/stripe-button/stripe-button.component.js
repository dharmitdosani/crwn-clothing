import React from "react";
import StripeCheckout from "react-stripe-checkout";

// import "./stripe-button.styles.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JexOOSHmKadRbbb1PqNkzZKOFLb9pA84f3fOHlMF8avvGKYvQ1gzy5yz40buLTI9C6FE67KuUw1AUN683abqBZl00MQJab6oY";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
