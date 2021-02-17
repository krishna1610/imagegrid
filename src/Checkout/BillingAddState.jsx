import React from "react";

class BillingAddState extends React.Component {
  render() {
    return (
      <div className="col-md-4">
        <label for="state" className="form-label">
          State
        </label>
        <select className="form-select" id="state" required="">
          <option value="">Choose...</option>
          <option>California</option>
        </select>
        <div className="invalid-feedback">Please provide a valid state.</div>
      </div>
    );
  }
}

export default BillingAddState;
