import React from "react";
import BillingAddPayment from "./BillingAddPayment";

class BillingAddPayments extends React.Component {
  render() {
    return (
      <div className="my-3">
        <BillingAddPayment name="Credit card" />
        <BillingAddPayment name="Debit card" />
        <BillingAddPayment name="PayPal" />
      </div>
    );
  }
}

export default BillingAddPayments;
