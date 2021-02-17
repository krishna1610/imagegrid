import React from "react";

class YourCartHeader extends React.Component {
  render() {
    return (
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
        <span className="badge bg-secondary rounded-pill">3</span>
      </h4>
    );
  }
}

export default YourCartHeader;
