import Head from "next/head";
import styles from "./page.module.css";
import Card from "@/components/card";
import Hero from "@/components/hero";

interface CardData {
  id: number;
  image: string;
  alt: string;
  text: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    image: "/images/health.avif",
    alt: "سلامتی",
    text: "خدایا، برای سلامتی و تندرستی‌ام شکرگزارم.",
  },
  {
    id: 2,
    image: "/images/teamwork.jpg",
    alt: "تیم کاری",
    text: "خدایا، برای داشتن یک تیم کاری فوق‌العاده شکرگزارم.",
  },
  {
    id: 3,
    image: "/images/family.jpg",
    alt: "خانواده",
    text: "خدایا، برای خانواده مهربانم شکرگزارم.",
  },
  {
    id: 4,
    image: "/images/travel.jpg",
    alt: "سفر",
    text: "خدایا، برای فرصت‌های سفر شکرگزارم.",
  },
  {
    id: 5,
    image: "/images/success.jpg",
    alt: "موفقیت",
    text: "خدایا، برای موفقیت‌هایم شکرگزارم.",
  },
  {
    id: 6,
    image: "/images/nature.webp",
    alt: "طبیعت",
    text: "خدایا، برای زیبایی‌های طبیعت شکرگزارم.",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>کارت‌های شکرگزاری</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="یک مجموعه کارت شکرگزاری زیبا" />
        {/* Importing a Persian-friendly Google Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Vazir&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.pageContainer}>
        <Hero />
        <div className={styles.cardContainer}>
          {cardData.map((card) => (
            <Card
              key={card.id}
              image={card.image}
              alt={card.alt}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </>
  );
}
