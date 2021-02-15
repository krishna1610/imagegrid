import React from "react";
import OffereBox from "./OfferBox";

class OfferesGrid extends React.Component {
  render() {
    return (
      <div className="grid">
        <div className="offergrid row row-cols-1 row-cols-md-3 mb-3 text-center">
          <OffereBox
            name="Free"
            price="0"
            noOfUsers="10"
            storage="2"
            support="Email"
            buttonName="Sign up for free"
            buttonStyle="btn-outline-primary"
          />
          <OffereBox
            name="Pro"
            price="15"
            noOfUsers="20"
            storage="10"
            support="Priority email"
            buttonName="Get started"
            buttonStyle="btn-primary"
          />
          <OffereBox
            name="Enterprise"
            price="29"
            noOfUsers="30"
            storage="15"
            support="Phone and email"
            buttonName="Contact us"
            buttonStyle="btn-primary"
          />
        </div>
      </div>
    );
  }
}

export default OfferesGrid;
