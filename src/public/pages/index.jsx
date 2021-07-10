import styles from "../styles/Home.module.css";
import { LocalHead } from "../../components/layout/LocalHead";
import { Footer } from "../../components/layout/Footer";

const Home = () => {
  return (
    <div>
      <LocalHead />
      <main className={styles.main}>Link App 2.1</main>
      <Footer />
    </div>
  );
};
