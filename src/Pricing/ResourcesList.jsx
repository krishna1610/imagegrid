import React from "react";
import ResourcesItem from "./ResourcesItem";

class Footer extends React.Component {
  render() {
    return (
      <ul class="list-unstyled text-small">
        <ResourcesItem name="Resource" />
        <ResourcesItem name="Resource name" />
        <ResourcesItem name="Another resource" />
        <ResourcesItem name="Final resource" />
      </ul>
    );
  }
}
export default Footer;
