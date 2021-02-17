import React from "react";
import Footer from "./Footer";
import Main from "./Main";

class App extends React.Component {
  render() {
    return (
      <div className="bg-light">
        <div className="container">
          <Main />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
