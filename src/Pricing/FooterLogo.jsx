import React from "react";

class FooterLogo extends React.Component {
  render() {
    return (
      <>
        <img
          class="mb-2"
          src="/docs/5.0/assets/brand/bootstrap-logo.svg"
          alt=""
          width="24"
          height="19"
        ></img>
        <small class="d-block mb-3 text-muted">© 2017–2021</small>
      </>
    );
  }
}
export default FooterLogo;
