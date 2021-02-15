import React from "react";
import IntroAction from "./IntroAction";

class IntroActions extends React.Component {
  render() {
    return (
      <p>
        <IntroAction name="Main call to action" color="btn-primary" />
        <IntroAction name="Secondary action" color="btn-secondary" />
      </p>
    );
  }
}

export default IntroActions;
