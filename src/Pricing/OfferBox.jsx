import React from "react";
import OffereBoxBody from "./OfferBoxBody";
import OffereBoxHeader from "./OfferBoxHeader";

class OffereBox extends React.Component {
  render() {
    return (
      <div className="col">
        <div className="card mb-4 shadow-sm">
          <OffereBoxHeader name={this.props.items.name} />
          <OffereBoxBody items={this.props.items} />
        </div>
      </div>
    );
  }
}

export default OffereBox;
