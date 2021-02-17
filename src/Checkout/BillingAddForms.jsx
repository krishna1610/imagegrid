import React from "react";

class BillingAddForms extends React.Component {
  render() {
    return (
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="same-address"
        ></input>
        <label className="form-check-label" for="same-address">
          {this.props.content}
        </label>
      </div>
    );
  }
}

export default BillingAddForms;
