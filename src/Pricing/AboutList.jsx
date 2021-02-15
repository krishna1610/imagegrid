import React from "react";
import AboutItem from "./AboutItem";

class AboutList extends React.Component {
  render() {
    return (
      <ul class="list-unstyled text-small">
        <AboutItem name="Team" />
        <AboutItem name="Locations" />
        <AboutItem name="Privacy" />
        <AboutItem name="Terms" />
      </ul>
    );
  }
}
export default AboutList;
