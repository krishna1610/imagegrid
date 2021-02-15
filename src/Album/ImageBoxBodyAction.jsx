import React from "react";

class ImageBoxBodyAction extends React.Component {
  render() {
    return (
      <button type="button" className="btn btn-sm btn-outline-secondary">
        {this.props.name}
      </button>
    );
  }
}

export default ImageBoxBodyAction;
