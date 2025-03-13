"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import styles from "./hero.module.css";

const Hero: FC = () => {
  const handleScrollDown = () => {
    const element = document.getElementById("cards-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { number: "1000+", label: "لحظات شکرگزاری" },
    { number: "365", label: "روز سپاسگزاری" },
    { number: "∞", label: "نعمت‌های بی‌پایان" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.textWrapper}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            هر روز با شکرگزاری، زندگی زیباتر می‌شود ✨
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            در این فضای آرامش‌بخش، هر روز یک دلیل جدید برای شکرگزاری پیدا کنید.
            با ثبت لحظات شکرگزاری، زندگی‌تان را سرشار از مثبت‌اندیشی و قدردانی
            کنید.
          </motion.p>

          <motion.div
            className={styles.statsContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={styles.statItem}
                whileHover={{ scale: 1.05 }}
              >
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            className={styles.ctaButton}
            onClick={handleScrollDown}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            شروع شکرگزاری
          </motion.button>
        </motion.div>

        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.decorativeCircle} />
          <div className={styles.trendyDesign}>
            <div className={styles.gradientCircle}></div>
            <div className={styles.gradientCircle}></div>
            <div className={styles.gradientCircle}></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        onClick={handleScrollDown}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <span className={styles.scrollText}>مشاهده موارد شکرگزاری</span>
        <div className={styles.scrollIcon} />
      </motion.div>
    </section>
  );
};

export default Hero;
