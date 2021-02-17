import React from "react";
import FooterLogo from "./FooterLogo";
import Features from "./Features";
import Reasource from "./Reasource";
import About from "./About";

class Footer extends React.Component {
  render() {
    return (
      <footer className="pt-4 my-md-5 pt-md-5 border-top footer">
        <div className="row">
          <div className="col-12 col-md">
            <FooterLogo />
          </div>
          <Features />
          <Reasource />
          <About />
        </div>
      </footer>
    );
  }
}
export default Footer;
