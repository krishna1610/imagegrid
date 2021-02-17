import React from "react";

class RedeemForm extends React.Component {
  render() {
    return (
      <form className="card p-2">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Promo code"
          ></input>
          <button type="submit" className="btn btn-secondary">
            Redeem
          </button>
        </div>
      </form>
    );
  }
}

export default RedeemForm;
