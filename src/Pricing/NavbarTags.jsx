import React from "react";

class NavbarTags extends React.Component {
  render() {
    return (
      <a className="p-2 text-dark" href="#">
        {this.props.name}
      </a>
    );
  }
}

export default NavbarTags;
