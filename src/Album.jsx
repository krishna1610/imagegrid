import "./App.css";
import Intro from "./Album/Intro";
import ImageList from "./Album/ImageList";
import Footer from "./Album/Footer";
import AppHeader from "./Album/AppHeader";

function Album() {
  return (
    <div>
      <AppHeader />
      <main>
        <Intro />
        <ImageList />
      </main>
      <Footer />
    </div>
  );
}

export default Album;
