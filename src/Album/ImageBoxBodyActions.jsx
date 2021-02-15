import React from "react";
import ImageBoxBodyAction from "./ImageBoxBodyAction";

class ImageBoxBodyActions extends React.Component {
  render() {
    return (
      <div className="btn-group">
        <ImageBoxBodyAction name="View" />
        <ImageBoxBodyAction name="Edit" />
      </div>
    );
  }
}

export default ImageBoxBodyActions;
