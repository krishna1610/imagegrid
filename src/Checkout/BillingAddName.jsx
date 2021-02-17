import React from "react";

class BillingAddName extends React.Component {
  render() {
    return (
      <div className="col-sm-6">
        <label for="firstName" className="form-label">
          {this.props.labelname}
        </label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          placeholder=""
          value=""
          required=""
        ></input>
        <div className="invalid-feedback">{this.props.feedback}</div>
      </div>
    );
  }
}

export default BillingAddName;
