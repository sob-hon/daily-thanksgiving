import { FC } from "react";
import styles from "./card.module.css";

interface CardProps {
  image: string;
  alt: string;
  text: string;
  category: string;
  date: string;
}

const Card: FC<CardProps> = ({ image, alt, text, category, date }) => {
  return (
    <div className={styles.card}>
      <div>
        <div className={styles.cardHeader}>
          <span className={styles.category}>{category}</span>
          <svg
            className={styles.icon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
        <div className={styles.imageContainer}>
          <img src={image} alt={alt} className={styles.image} />
        </div>
        <p className={styles.text}>{text}</p>
      </div>
      <p className={styles.date}>{date}</p>
    </div>
  );
};

export default Card;
