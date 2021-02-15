import React from "react";
import IntroActions from "./IntroActions";
import IntroMessage from "./IntroMessage";
import IntroTitle from "./IntroTitle";

class Intro extends React.Component {
  render() {
    return (
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <IntroTitle />
            <IntroMessage />
            <IntroActions />
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;
