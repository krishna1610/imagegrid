import React from "react";
import BillingAddAddress from "./BillingAddAddress";
import BillingAddAddress2 from "./BillingAddAddress2";
import BillingAddCountry from "./BillingAddCountry";
import BillingAddEmail from "./BillingAddEmail";
import BillingAddNames from "./BillingAddNames";
import BillingAddState from "./BillingAddState";
import BillingAddUser from "./BillingAddUser";
import BillingAddZip from "./BillingAddZip";

class BillingAddInformation extends React.Component {
  render() {
    return (
      <div className="row g-3">
        <BillingAddNames />
        <BillingAddUser />
        <BillingAddEmail />
        <BillingAddAddress />
        <BillingAddAddress2 />
        <BillingAddCountry />
        <BillingAddState />
        <BillingAddZip />
      </div>
    );
  }
}

export default BillingAddInformation;
