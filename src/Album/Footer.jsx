import React from "react";
import FooterCopyright from "./FooterCopyright";

class Footer extends React.Component {
  render() {
    return (
      <footer className="text-muted py-5">
        <div className="container">
          <p className="float-end mb-1">
            <a href="#">Back to top</a>
          </p>
          <FooterCopyright />
        </div>
      </footer>
    );
  }
}
export default Footer;
