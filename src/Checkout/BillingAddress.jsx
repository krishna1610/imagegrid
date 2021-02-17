import React from "react";
import BillingAddForms from "./BillingAddForms";
import BillingAddInformation from "./BillingAddInfomation";
import BillingAddPaymentInfo from "./BillingAddPaymentInfo";
import BillingAddPayments from "./BillingAddPayments";

class BillingAddress extends React.Component {
  render() {
    return (
      <>
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation" novalidate="">
          <BillingAddInformation />
          <hr className="my-4"></hr>
          <BillingAddForms content="Shipping address is the same as my billing address" />
          <BillingAddForms content="Save this information for next time" />
          <hr className="my-4"></hr>
          <h4 className="mb-3">Payment</h4>
          <BillingAddPayments />
          <BillingAddPaymentInfo />
          <hr className="my-4"></hr>
          <button className="w-100 btn btn-primary btn-lg" type="submit">
            Continue to checkout
          </button>
        </form>
      </>
    );
  }
}
export default BillingAddress;
