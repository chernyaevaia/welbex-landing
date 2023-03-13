import styles from "./App.module.scss";
import { Hero } from "./components/Hero";
import { NavBar } from "./components//NavBar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div className={styles.purplelight}></div>
      <div className={styles.purpleball}></div>
      <div className={styles.redball}></div>
      <div className={styles.redball2}></div>
      <NavBar />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
