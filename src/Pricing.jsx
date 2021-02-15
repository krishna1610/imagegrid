import "./App.css";
import AppHeader from "./Pricing/AppHeader";
import Footer from "./Pricing/Footer";
import Main from "./Pricing/Main";

/* name, price, noOfUsers, storage, support, buttonName, buttonStyle*/
function Pricing() {
  return (
    <div>
      <AppHeader />
      <Main />
      <Footer />
    </div>
  );
}

export default Pricing;
