import React from "react";

class FooterCopyright extends React.Component {
  render() {
    return (
      <>
        <p className="mb-1">
          Album example is © Bootstrap, but please download and customize it for
          yourself!
        </p>
        <p className="mb-0">
          New to Bootstrap? <a href="/">Visit the homepage</a> or read our{" "}
          <a href="/docs/5.0/getting-started/introduction/">
            getting started guide
          </a>
          .
        </p>
      </>
    );
  }
}
export default FooterCopyright;
