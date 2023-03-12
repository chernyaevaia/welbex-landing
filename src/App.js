import "./App.css";
import { SpecialOffers } from "./components//SpecialOffers";
import { Hero } from "./components/Hero";
import { NavBar } from "./components//NavBar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <SpecialOffers />
      <Footer/>
    </>
  );
}

export default App;
