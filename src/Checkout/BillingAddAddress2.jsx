import React from "react";

class BillingAddAddress2 extends React.Component {
  render() {
    return (
      <div className="col-12">
        <label for="address2" className="form-label">
          Address 2 <span className="text-muted">(Optional)</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="address2"
          placeholder="Apartment or suite"
        ></input>
      </div>
    );
  }
}

export default BillingAddAddress2;
