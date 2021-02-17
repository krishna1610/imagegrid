import React from "react";
import YourCartPromo from "./YourCartPromo";
import YourCartItemList from "./YourCartItemList";
import YourCartTotal from "./YourCartTotal";

class YourCart extends React.Component {
  render() {
    return (
      <ul className="list-group mb-3">
        <YourCartItemList
          headername="Product name"
          description="Brief description"
          price="$12"
        />
        <YourCartItemList
          headername="Second product"
          description="Brief description"
          price="$8"
        />
        <YourCartItemList
          headername="Third item"
          description="Brief description"
          price="$5"
        />
        <YourCartPromo />
        <YourCartTotal />
      </ul>
    );
  }
}

export default YourCart;
