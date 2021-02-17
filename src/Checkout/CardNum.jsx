import React from "react";

class CardNum extends React.Component {
  render() {
    return (
      <div className="col-md-3">
        <label for="cc-expiration" className="form-label">
          {this.props.labelname}
        </label>
        <input
          type="text"
          className="form-control"
          id="cc-expiration"
          placeholder=""
          required=""
        ></input>
        <div className="invalid-feedback">{this.props.requiredField}</div>
      </div>
    );
  }
}

export default CardNum;
