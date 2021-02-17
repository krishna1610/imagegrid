import React from "react";
import BillingAddress from "./BillingAddress";
import Intro from "./Intro";
import RedeemForm from "./RedeemForm";
import YourCart from "./YourCart";

class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <Intro />
        <div className="row g-3">
          <div className="col-md-5 col-lg-4 order-md-last">
            <YourCart />
            <RedeemForm />
          </div>
          <div className="col-md-7 col-lg-8">
            <BillingAddress />
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
