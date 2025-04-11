import { FC } from "react";
import Card from "@/components/card";
import styles from "./cards.module.css";

interface CardData {
  id: number;
  image: string;
  alt: string;
  text: string;
  category: string;
  date: string;
}
const cardData: CardData[] = [
  {
    id: 1,
    image: "/images/kind-god.jpg",
    alt: "خدای مهربون",
    text: "خدای مهربونم، از ته دلم شکر که کنارم هستی و همیشه هوامو داری. ❤️",
    category: "خانواده",
    date: "۱۴۰۲/۱۲/۱۵",
  },
  {
    id: 2,
    image: "/images/wife.jpg",
    alt: "همسر مهربون",
    text: "شکر برای وجود همسر مهربون و باعشق و پرمحبتی که همیشه پشتمه و با لبخندش خستگی رو از تنم می‌بره.",
    category: "عشق",
    date: "۱۴۰۲/۱۲/۱۴",
  },
  {
    id: 3,
    image: "/images/best-people.jpg",
    alt: "دوستان خوب",
    text: "شکر برای آدم‌های خوبی که توی مسیر زندگیم قرار دادی، همونا که با انرژی مثبت‌شون حالمو خوب می‌کنن.",
    category: "دوستان",
    date: "۱۴۰۲/۱۲/۱۳",
  },
  {
    id: 4,
    image: "/images/motorcycle.jpg",
    alt: "موتور دوست‌داشتنی",
    text: "شکر برای موتور دوست‌داشتنیم که همیشه رفیق جاده‌ها بوده و کلی خاطره باهاش دارم.",
    category: "سرگرمی",
    date: "۱۴۰۲/۱۲/۱۲",
  },
  {
    id: 5,
    image: "/images/wifes-family.jpg",
    alt: "خانواده همسر",
    text: "شکر برای خانواده‌ی خوب همسرم که مثل بچه‌ی خودشون باهام رفتار می‌کنن و عشق واقعی رو ازشون یاد گرفتم.",
    category: "خانواده",
    date: "۱۴۰۲/۱۲/۱۱",
  },
  {
    id: 6,
    image: "/images/work-improvement.jpg",
    alt: "رشد شغلی",
    text: "شکر به خاطر شغل خوبی که دارم و هر روز چیزای جدید یاد می‌گیرم و حس رشد و پیشرفت رو تجربه می‌کنم.",
    category: "کار",
    date: "۱۴۰۲/۱۲/۱۰",
  },
  {
    id: 7,
    image: "/images/blessing.jpg",
    alt: "نعمت‌ها",
    text: "ممنونم برای نعمت‌هایی که بهم دادی و منو قابل دونستی که ازشون بهره ببرم و ازت می‌خوام کمکم کنی که همیشه قدردانشون باشم.",
    category: "نعمت‌ها",
    date: "۱۴۰۲/۱۲/۱۱",
  },
  {
    id: 8,
    image: "/images/god-love.jpg",
    alt: "محافظت",
    text: "خدایا شکرت برای چیزایی که به صلاحم نبوده و ندادی، چون می‌دونم عاشقمی و همیشه بهترینا رو برام در نظر می‌گیری.",
    category: "محافظت",
    date: "۱۴۰۲/۱۲/۱۰",
  },
  {
    id: 9,
    image: "/images/my-family.jpg",
    alt: "پدر و مادر",
    text: "شکر برای پدر و مادر و خواهر و مادربزرگ و دایی عزیزم که همیشه کنارم بودن و حمایتم کردن.",
    category: "خانواده",
    date: "۱۴۰۲/۱۲/۱۱",
  },
  {
    id: 10,
    image: "/images/warm-and-secure-home.jpg",
    alt: "خانه گرم",
    text: "شکر به خاطر خونه‌ی گرم و امنی که دارم و توش عشق رو با همسرم تقسیم می‌کنم.",
    category: "خانه",
    date: "۱۴۰۲/۱۲/۱۰",
  },
  {
    id: 11,
    image: "/images/mental-and-physical-health.png",
    alt: "سلامتی",
    text: "شکر برای سلامتی جسمی، روحی و فکری که هر روز دارم.",
    category: "سلامتی",
    date: "۱۴۰۲/۱۲/۱۰",
  },
  {
    id: 12,
    image: "/images/leo-and-lena.jpg",
    alt: "خرگوش‌های ناز",
    text: "شکر برای خرگوش‌های نازنینم که با بازیگوشی‌هاشون لبخند رو به لبم میارن.",
    category: "حیوانات خانگی",
    date: "۱۴۰۲/۱۲/۱۰",
  },
  {
    id: 13,
    image: "/images/my-teammates.jpg",
    alt: "هم‌تیمی‌ها",
    text: "شکر برای هم‌تیمی‌های فوق‌العاده‌ای که کنارشون کار کردن یه لذت محضه.",
    category: "دوستان",
    date: "۱۴۰۲/۱۲/۱۰",
  },
  {
    id: 15,
    image: "/images/my-children.jpg",
    alt: "فرزندان",
    text: "شکر برای فرزندهای صالح و مهربونی که قراره دنیامو قشنگ‌تر کنن.",
    category: "خانواده",
    date: "۱۴۰۲/۱۲/۱۰",
  },
  {
    id: 16,
    image: "/images/kind-father.jpg",
    alt: "پدر مهربون",
    text: "شکر برای اینکه یه پدر مهربون و دلسوز براشونم.",
    category: "خانواده",
    date: "۱۴۰۲/۱۲/۱۰",
  },
  {
    id: 17,
    image: "/images/netherlands-immigration.jpg",
    alt: "مهاجرت یه هلند",
    text: "شکر برای مهاجرتی که قراره به بهترین شکل انجام بشه و زندگی آروم و پر از رفاه رو توی هلند کنار همسرم بسازم.",
    category: "مهاجرت",
    date: "۱۴۰۲/۱۲/۱۲",
  },
  {
    id: 18,
    image: "/images/target-company.jpeg",
    alt: "شرکت",
    text: "شکر برای شرکتی که قراره توش کار کنم و بهترین امکانات و فرصت‌ها رو برام فراهم می‌کنه.",
    category: "شرکت",
    date: "۱۴۰۲/۱۲/۱۱",
  },
  {
    id: 19,
    image: "/images/anger-control.jpg",
    alt: "مدیتیشن",
    text: "شکر برای قدرت کنترل خشم، سخاوت و بخشندگی که توی وجودم گذاشتی.",
    category: "مدیتیشن",
    date: "۱۴۰۲/۱۲/۱۱",
  },
  {
    id: 20,
    image: "/images/helping-others.jpg",
    alt: "کمک به دیگران",
    text: "شکر برای اینکه هر روز به بنده‌هات کمک می‌کنم و حس مفید بودن رو با تمام وجودم تجربه می‌کنم.",
    category: "خدمت",
    date: "۱۴۰۲/۱۲/۱۰",
  },
  {
    id: 21,
    image: "/images/immigration-path.jpg",
    alt: "مسیر مهاجرت",
    text: "شکر برای فرآیند مهاجرتم که قراره بی‌نظیر و بدون دردسر پیش بره و مناسب‌ترین شرکت هلند نصیبم بشه.",
    category: "مهاجرت",
    date: "۱۴۰۲/۱۲/۹",
  },
  {
    id: 22,
    image: "/images/protector-god.jpg",
    alt: "حفاظت",
    text: "شکر برای حفظ من و همسرم از هر خطری، چون تو همیشه مراقبمونی.",
    category: "حفاظت",
    date: "۱۴۰۲/۱۲/۸",
  },
  {
    id: 23,
    image: "/images/learning-dutch.jpg",
    alt: "یادگیری زبان",
    text: "شکر برای یادگیری زبان هلندی  که کمکم می‌کنه راحت‌تر مهاجرت کنم و تجربه‌های تازه داشته باشم.",
    category: "یادگیری",
    date: "۱۴۰۲/۱۲/۷",
  },
  {
    id: 24,
    image: "/images/knowledge-sharing.jpg",
    alt: "انتشار دانش",
    text: "شکر برای محتوایی که می‌نویسم و دل آدم‌هارو گرم می‌کنه.",
    category: "دانش",
    date: "۱۴۰۲/۱۲/۶",
  },
  {
    id: 25,
    image: "/images/military-service.jpg",
    alt: "خدمت سربازی",
    text: "شکر برای اینکه خدمت سربازیم به بهترین و راحت‌ترین شکل ممکن به پایان رسید.",
    category: "دانش",
    date: "۱۴۰۴/۰۱/۲۳",
  },
  {
    id: 26,
    image: "/images/ready-for-blessing.jpg",
    alt: "آمادگی دریافت نعمات",
    text: "خدایا شکرت، شکرت، شکرت♥️ ایمان دارم که تو همیشه بهترین‌هارو برام می‌خوای و من آماده دریافت تمام نعمت‌های تو هستم.",
    category: "ایمان",
    date: "۱۴۰۲/۱۲/۵",
  },
];

const Cards: FC = () => {
  return (
    <section id="cards-section" className={styles.section}>
      <div className={styles.cards}>
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className={styles.cardWrapper}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <Card
              image={card.image}
              alt={card.alt}
              text={card.text}
              category={card.category}
              date={card.date}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
