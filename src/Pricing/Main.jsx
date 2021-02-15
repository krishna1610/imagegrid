import React from "react";
import Intro from "./Intro";
import OfferesGrid from "./OfferesGrid";

class Main extends React.Component {
  render() {
    return (
      <main className="container">
        <Intro />
        <OfferesGrid />
      </main>
    );
  }
}

export default Main;
