import React from "react";

class ResourcesItem extends React.Component {
  render() {
    return (
      <li>
        <a class="link-secondary" href="#">
          {this.props.name}
        </a>
      </li>
    );
  }
}
export default ResourcesItem;
