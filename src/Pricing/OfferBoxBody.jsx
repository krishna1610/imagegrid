import React from "react";

class OffereBoxBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          ${this.props.price} <small className="text-muted">/ mo</small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>{this.props.noOfUsers} users included</li>
          <li>{this.props.storage} GB of storage</li>
          <li>{this.props.support} support</li>
          <li>Help center access</li>
        </ul>
        <button
          type="button"
          className={`w-100 btn btn-lg ${this.props.buttonStyle}`}
        >
          {this.props.buttonName}
        </button>
      </div>
    );
  }
}

export default OffereBoxBody;
