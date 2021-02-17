import React from "react";

class BillingAddCountry extends React.Component {
  render() {
    return (
      <div className="col-md-5">
        <label for="country" className="form-label">
          Country
        </label>
        <select className="form-select" id="country" required="">
          <option value="">Choose...</option>
          <option>United States</option>
        </select>
        <div className="invalid-feedback">Please select a valid country.</div>
      </div>
    );
  }
}

export default BillingAddCountry;
