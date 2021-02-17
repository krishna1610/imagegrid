import React from "react";
import CardName from "./CardName";
import CardNum from "./CardNum";

class BillingAddPaymentInfo extends React.Component {
  render() {
    return (
      <div className="row gy-3">
        <CardName
          labelname="Name on card"
          required="Full name as displayed on card"
          name="Name on card is required"
        />
        <CardName
          labelname="Credit card number"
          required=""
          name="Credit card number is required"
        />
        <CardNum
          labelname="Expiration"
          requiredField="Expiration date required"
        />
        <CardNum labelname="CVV" requiredField="Security code required" />
      </div>
    );
  }
}

export default BillingAddPaymentInfo;
