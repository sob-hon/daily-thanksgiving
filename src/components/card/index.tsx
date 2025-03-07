import { FC } from "react";
import styles from "./card.module.css";
import Image from "next/image";

interface CardProps {
  image: string;
  alt: string;
  text: string;
}

const Card: FC<CardProps> = ({ image, alt, text }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={alt}
          layout="responsive"
          width={300}
          height={300}
          objectFit="cover"
          priority
        />
      </div>
      <div className={styles.cardContent}>
        <p className={styles.gradientText}>{text}</p>
      </div>
    </div>
  );
};

export default Card;
