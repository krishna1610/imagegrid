import React from "react";
import BillingAddName from "./BillingAddName";

class BillingAddNames extends React.Component {
  render() {
    return (
      <>
        <BillingAddName
          labelname="First name"
          feedback="Valid first name is required."
        />
        <BillingAddName
          labelname="Last name"
          feedback="Valid last name is required."
        />
      </>
    );
  }
}

export default BillingAddNames;
