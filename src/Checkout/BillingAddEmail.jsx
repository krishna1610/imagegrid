import React from "react";

class BillingAddEmail extends React.Component {
  render() {
    return (
      <div className="col-12">
        <label for="email" className="form-label">
          Email <span className="text-muted">(Optional)</span>
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="you@example.com"
        ></input>
        <div className="invalid-feedback">
          Please enter a valid email address for shipping updates.
        </div>
      </div>
    );
  }
}

export default BillingAddEmail;
