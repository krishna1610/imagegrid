import React from "react";
import YourCartHeader from "./YourCartHeader";
import YourCartList from "./YourCartList";

class YourCart extends React.Component {
  render() {
    return (
      <>
        <YourCartHeader />
        <YourCartList />
      </>
    );
  }
}

export default YourCart;
