import React from "react";

class OffereBoxHeader extends React.Component {
  render() {
    return (
      <div className="card-header">
        <h4 className="my-0 fw-normal">{this.props.name}</h4>
      </div>
    );
  }
}

export default OffereBoxHeader;
