import React from "react";
import FeaturesItem from "./FeaturesItem";

class FeaturesList extends React.Component {
  render() {
    return (
      <ul class="list-unstyled text-small">
        <FeaturesItem name="Cool Stuff" />
        <FeaturesItem name="Random feature" />
        <FeaturesItem name="Team feature" />
        <FeaturesItem name="Stuff for developers" />
        <FeaturesItem name="Another one" />
        <FeaturesItem name="Last time" />
      </ul>
    );
  }
}
export default FeaturesList;
