import React from "react";
import ImageBoxBody from "./ImageBoxBody";
import ImageBoxHeader from "./ImageBoxHeader";

class ImageBox extends React.Component {
  render() {
    return (
      <div className="col">
        <div className="card shadow-sm">
          <ImageBoxHeader />
          <ImageBoxBody />
        </div>
      </div>
    );
  }
}

export default ImageBox;
