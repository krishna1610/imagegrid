import React from "react";

class BillingAddAddress extends React.Component {
  render() {
    return (
      <div className="col-12">
        <label for="address" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="address"
          placeholder="1234 Main St"
          required=""
        ></input>
        <div className="invalid-feedback">
          Please enter your shipping address.
        </div>
      </div>
    );
  }
}

export default BillingAddAddress;
