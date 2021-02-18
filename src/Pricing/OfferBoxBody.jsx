import React from "react";

class OffereBoxBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          ${this.props.items.price} <small className="text-muted">/ mo</small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>{this.props.items.noOfUsers} users included</li>
          <li>{this.props.items.storage} GB of storage</li>
          <li>{this.props.items.support} support</li>
          <li>Help center access</li>
        </ul>
        <button
          type="button"
          className={`w-100 btn btn-lg ${this.props.items.buttonStyle}`}
        >
          {this.props.items.buttonName}
        </button>
      </div>
    );
  }
}

export default OffereBoxBody;
