// "use client";
// import { motion } from "framer-motion";
// import styles from "./hero.module.css";

// const Hero = () => {
//   const scrollToCards = () => {
//     const cardsSection = document.getElementById("cards-section");
//     if (cardsSection) {
//       cardsSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section className={styles.section}>
//       {/* Background overlay */}
//       <div className={styles.background}></div>

//       {/* Content container */}
//       <div className={styles.content}>
//         <motion.h1
//           className={styles.title}
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           هر روز سپاسگزار باش
//         </motion.h1>
//         <motion.p
//           className={styles.subtitle}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//         >
//           با قدردانی از کوچک‌ترین نعمت‌ها، هر روز را جشن بگیر
//         </motion.p>
//         <motion.button
//           className={styles.button}
//           whileHover={{ scale: 1.05 }}
//           onClick={scrollToCards}
//         >
//           امروز شروع کن
//         </motion.button>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import styles from "./hero.module.css";
// import { FC } from "react";

// const Hero: FC = () => {
//   return (
//     <section className={styles.hero}>
//       <h1 className={styles.heroTitle}>صبح و شب با شکرگزاری</h1>
//       <p className={styles.heroSubtitle}>
//         هر روز به زیبایی‌های زندگی نگاه کن و شکرگزار باشید.
//       </p>
//     </section>
//   );
// };

// export default Hero;
"use client";
import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./hero.module.css";

const Hero: FC = () => {
  const handleScrollDown = () => {
    const element = document.getElementById("cards-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* سمت راست: متن */}
        <div className={styles.textWrapper}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            هر روز یه دلیل برای شکرگزاری!🌞
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
           زندگی پر از لحظه‌های قشنگه، فقط کافیه ببینیشون! بیا با هم هر روز یه چیز کوچیکو پیدا کنیم که ارزش شکرگزاری داره.
          </motion.p>

          <motion.button
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={handleScrollDown}
          >
            امروز شکرگزاری کن
          </motion.button>
        </div>

        {/* سمت چپ: تصویر */}
        <div className={styles.manWrapper}>
          <div className={styles.circle}></div>
          <Image
            src="/images/grateful-man.png"
            alt="مردی در حال شکرگزاری"
            width={280}
            height={250}
            className={styles.manImage}
            priority
          />
        </div>
      </div>

      {/* آیکون اسکرول */}
      <motion.div
        className={styles.scrollIcon}
        onClick={handleScrollDown}
        whileHover={{ scale: 1.2 }}
      >
        &#8675; {/* پیکان رو به پایین */}
      </motion.div>
    </section>
  );
};

export default Hero;
