import React from "react";

class AboutItem extends React.Component {
  render() {
    return (
      <li>
        <a className="link-secondary" href="#">
          {this.props.name}
        </a>
      </li>
    );
  }
}
export default AboutItem;
