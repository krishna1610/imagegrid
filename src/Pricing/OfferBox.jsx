import React from "react";
import OffereBoxBody from "./OfferBoxBody";
import OffereBoxHeader from "./OfferBoxHeader";

class OffereBox extends React.Component {
  render() {
    return (
      <div className="col">
        <div className="card mb-4 shadow-sm">
          <OffereBoxHeader name={this.props.name} />
          <OffereBoxBody
            price={this.props.price}
            noOfUsers={this.props.noOfUsers}
            storage={this.props.storage}
            support={this.props.support}
            buttonName={this.props.buttonName}
            buttonStyle={this.props.buttonStyle}
          />
        </div>
      </div>
    );
  }
}

export default OffereBox;
