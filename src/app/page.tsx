import Cards from "@/components/cards";
import Hero from "@/components/hero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Hero />
      <Cards />
    </div>
  );
}
