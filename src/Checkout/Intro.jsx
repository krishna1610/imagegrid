import React from "react";

class Intro extends React.Component {
  render() {
    return (
      <div className="py-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src="/docs/5.0/assets/brand/bootstrap-logo.svg"
          alt=""
          width="72"
          height="57"
        ></img>
        <h2>Checkout form</h2>
        <p className="lead">
          Below is an example form built entirely with Bootstrap’s form
          controls. Each required form group has a validation state that can be
          triggered by attempting to submit the form without completing it.
        </p>
      </div>
    );
  }
}

export default Intro;
