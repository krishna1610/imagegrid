import React from "react";

class BillingAddPayment extends React.Component {
  render() {
    return (
      <div className="form-check">
        <input
          id="credit"
          name="paymentMethod"
          type="radio"
          className="form-check-input"
          checked=""
          required=""
        ></input>
        <label className="form-check-label" for="credit">
          {this.props.name}
        </label>
      </div>
    );
  }
}

export default BillingAddPayment;
