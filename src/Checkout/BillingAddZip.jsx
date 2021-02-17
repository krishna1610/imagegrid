import React from "react";

class BillingAddZip extends React.Component {
  render() {
    return (
      <div className="col-md-3">
        <label for="zip" className="form-label">
          Zip
        </label>
        <input
          type="text"
          className="form-control"
          id="zip"
          placeholder=""
          required=""
        ></input>
        <div className="invalid-feedback">Zip code required.</div>
      </div>
    );
  }
}

export default BillingAddZip;
