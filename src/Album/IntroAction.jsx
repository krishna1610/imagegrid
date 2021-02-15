import React from "react";

class IntroAction extends React.Component {
  render() {
    return (
      <a href="#" className={`btn ${this.props.color} mx-2`}>
        {this.props.name}
      </a>
    );
  }
}

export default IntroAction;
