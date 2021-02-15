import React from "react";
import ImageBoxBodyActions from "./ImageBoxBodyActions";
import ImageBoxBodyMessage from "./ImageBoxBodyMessage";

class ImageBoxBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <ImageBoxBodyMessage />
        <div className="d-flex justify-content-between align-items-center">
          <ImageBoxBodyActions />
          <small className="text-muted">9 mins</small>
        </div>
      </div>
    );
  }
}

export default ImageBoxBody;
