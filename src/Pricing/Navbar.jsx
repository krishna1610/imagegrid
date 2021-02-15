import React from "react";
import NavbarTags from "./NavbarTags";

class Navbar extends React.Component {
  render() {
    return (
      <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm">
        <p className="h5 my-0 me-md-auto fw-normal">Company name</p>
        <nav className="my-2 my-md-0 me-md-3">
          <NavbarTags name="Features" />
          <NavbarTags name="Enterprice" />
          <NavbarTags name="Support" />
          <NavbarTags name="Pricing" />
        </nav>
        <a className="btn btn-outline-primary" href="#">
          Sign up
        </a>
      </header>
    );
  }
}

export default Navbar;
