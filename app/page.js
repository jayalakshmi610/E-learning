import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar/page";
import Body from "./components/Body/page";
import Body2 from "./components/Body2/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Navbar />
        <Body />
        <Body2 />
      </div>
    </main>
  );
}
