import React from "react";

class BillingAddUser extends React.Component {
  render() {
    return (
      <div className="col-12">
        <label for="username" className="form-label">
          Username
        </label>
        <div className="input-group has-validation">
          <span className="input-group-text">@</span>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Username"
            required=""
          ></input>
          <div className="invalid-feedback">Your username is required.</div>
        </div>
      </div>
    );
  }
}

export default BillingAddUser;
