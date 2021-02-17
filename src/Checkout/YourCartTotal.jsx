import React from "react";

class YourCartTotal extends React.Component {
  render() {
    return (
      <li className="list-group-item d-flex justify-content-between">
        <span>Total (USD)</span>
        <strong>$20</strong>
      </li>
    );
  }
}

export default YourCartTotal;
