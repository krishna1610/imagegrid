import React from "react";
import AboutList from "./AboutList";

class About extends React.Component {
  render() {
    return (
      <div className="col-6 col-md">
        <h5>About</h5>
        <AboutList />
      </div>
    );
  }
}
export default About;
