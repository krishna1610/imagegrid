import React from "react";

class YourCartItemList extends React.Component {
  render() {
    return (
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">{this.props.headername}</h6>
          <small className="text-muted">{this.props.description}</small>
        </div>
        <span className="text-muted">{this.props.price}</span>
      </li>
    );
  }
}

export default YourCartItemList;
