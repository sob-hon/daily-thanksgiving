import styles from "./hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heroTitle}>صبح و شب با شکرگزاری</h1>
      <p className={styles.heroSubtitle}>
        هر روز به زیبایی‌های زندگی نگاه کن و شکرگزار باشید.
      </p>
    </section>
  );
};

export default Hero;
