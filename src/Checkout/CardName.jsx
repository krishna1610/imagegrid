import React from "react";

class CardName extends React.Component {
  render() {
    return (
      <div className="col-md-6">
        <label for="cc-name" className="form-label">
          {this.props.labelname}
        </label>
        <input
          type="text"
          className="form-control"
          id="cc-name"
          placeholder=""
          required=""
        ></input>
        <small className="text-muted">{this.props.required}</small>
        <div className="invalid-feedback">{this.props.name}</div>
      </div>
    );
  }
}

export default CardName;
