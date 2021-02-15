import React from "react";
import ImageBox from "./ImageBox";

class ImageList extends React.Component {
  render() {
    return (
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => {
              return <ImageBox key={index} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ImageList;
