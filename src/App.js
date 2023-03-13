import styles from "./App.module.scss"
import { Hero } from "./components/Hero";
import { NavBar } from "./components//NavBar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Footer/>
    </>
  );
}

export default App;
