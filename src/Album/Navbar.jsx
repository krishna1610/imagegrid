import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a href="#" className="navbar-brand d-flex align-items-center">
            <i className="bi bi-camera"></i>
            <strong className="px-1">Album</strong>
          </a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;
