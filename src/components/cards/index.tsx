import Card from "@/components/card";
import styles from "./cards.module.css";

interface CardData {
  id: number;
  image: string;
  alt: string;
  text: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    image: "/images/kind-god.jpg",
    alt: "خدای مهربون",
    text: "خدای مهربونم، از ته دلم شکر که کنارم هستی و همیشه هوامو داری. ❤️",
  },
  {
    id: 2,
    image: "/images/wife.jpg",
    alt: "همسر مهربون",
    text: "شکر برای وجود همسر مهربون و باعشق و پرمحبتی که همیشه پشتمه و با لبخندش خستگی رو از تنم می‌بره.",
  },
  {
    id: 3,
    image: "/images/best-people.jpg",
    alt: "دوستان خوب",
    text: "شکر برای آدم‌های خوبی که توی مسیر زندگیم قرار دادی، همونا که با انرژی مثبت‌شون حالمو خوب می‌کنن.",
  },
  {
    id: 4,
    image: "/images/motorcycle.jpg",
    alt: "موتور دوست‌داشتنی",
    text: "شکر برای موتور دوست‌داشتنیم که همیشه رفیق جاده‌ها بوده و کلی خاطره باهاش دارم.",
  },
  {
    id: 5,
    image: "/images/wifes-family.jpg",
    alt: "خانواده همسر",
    text: "شکر برای خانواده‌ی خوب همسرم که مثل بچه‌ی خودشون باهام رفتار می‌کنن و عشق واقعی رو ازشون یاد گرفتم.",
  },
  {
    id: 6,
    image: "/images/work-improvement.jpg",
    alt: "رشد شغلی",
    text: "شکر به خاطر شغل خوبی که دارم و هر روز چیزای جدید یاد می‌گیرم و حس رشد و پیشرفت رو تجربه می‌کنم.",
  },
  {
    id: 7,
    image: "/images/blessing.jpg",
    alt: "نعمت‌ها",
    text: "ممنونم برای نعمت‌هایی که بهم دادی و منو قابل دونستی که ازشون بهره ببرم و ازت می‌خوام کمکم کنی که همیشه قدردانشون باشم.",
  },
  {
    id: 8,
    image: "/images/god-love.jpg",
    alt: "محافظت",
    text: "خدایا شکرت برای چیزایی که به صلاحم نبوده و ندادی، چون می‌دونم عاشقمی و همیشه بهترینا رو برام در نظر می‌گیری.",
  },
  {
    id: 9,
    image: "/images/my-family.jpg",
    alt: "پدر و مادر",
    text: "شکر برای پدر و مادر و خواهر و مادربزرگ و دایی عزیزم که همیشه کنارم بودن و حمایتم کردن.",
  },
  {
    id: 10,
    image: "/images/warm-and-secure-home.jpg",
    alt: "خانه گرم",
    text: "شکر به خاطر خونه‌ی گرم و امنی که دارم و توش عشق رو با همسرم تقسیم می‌کنم.",
  },
  {
    id: 11,
    image: "/images/mental-and-physical-health.png",
    alt: "سلامتی",
    text: "شکر برای سلامتی جسمی، روحی و فکری که هر روز دارم.",
  },
  {
    id: 12,
    image: "/images/leo-and-lena.jpg",
    alt: "خرگوش‌های ناز",
    text: "شکر برای خرگوش‌های نازنینم که با بازیگوشی‌هاشون لبخند رو به لبم میارن.",
  },
  {
    id: 13,
    image: "/images/my-teammates.jpg",
    alt: "هم‌تیمی‌ها",
    text: "شکر برای هم‌تیمی‌های فوق‌العاده‌ای که کنارشون کار کردن یه لذت محضه.",
  },
  {
    id: 15,
    image: "/images/my-children.jpg",
    alt: "فرزندان",
    text: "شکر برای فرزندهای صالح و مهربونی که قراره دنیامو قشنگ‌تر کنن.",
  },
  {
    id: 16,
    image: "/images/kind-father.jpg",
    alt: "پدر مهربون",
    text: "شکر برای اینکه یه پدر مهربون و دلسوز براشونم.",
  },
  {
    id: 17,
    image: "/images/netherlands-immigration.jpg",
    alt: "مهاجرت یه هلند",
    text: "شکر برای مهاجرتی که قراره به بهترین شکل انجام بشه و زندگی آروم و پر از رفاه رو توی هلند کنار همسرم بسازم.",
  },
  {
    id: 18,
    image: "/images/target-company.jpeg",
    alt: "شرکت",
    text: "شکر برای شرکتی که قراره توش کار کنم و بهترین امکانات و فرصت‌ها رو برام فراهم می‌کنه.",
  },
  {
    id: 19,
    image: "/images/anger-control.jpg",
    alt: "مدیتیشن",
    text: "شکر برای قدرت کنترل خشم، سخاوت و بخشندگی که توی وجودم گذاشتی.",
  },
  {
    id: 20,
    image: "/images/helping-others.jpg",
    alt: "کمک به دیگران",
    text: "شکر برای اینکه هر روز به بنده‌هات کمک می‌کنم و حس مفید بودن رو با تمام وجودم تجربه می‌کنم.",
  },
  {
    id: 21,
    image: "/images/immigration-path.jpg",
    alt: "مسیر مهاجرت",
    text: "شکر برای فرآیند مهاجرتم که قراره بی‌نظیر و بدون دردسر پیش بره و مناسب‌ترین شرکت هلند نصیبم بشه.",
  },
  {
    id: 22,
    image: "/images/protector-god.jpg",
    alt: "حفاظت",
    text: "شکر برای حفظ من و همسرم از هر خطری، چون تو همیشه مراقبمونی.",
  },
  {
    id: 23,
    image: "/images/learning-dutch.jpg",
    alt: "یادگیری زبان",
    text: "شکر برای یادگیری زبان هلندی  که کمکم می‌کنه راحت‌تر مهاجرت کنم و تجربه‌های تازه داشته باشم.",
  },
  {
    id: 24,
    image: "/images/knowledge-sharing.jpg",
    alt: "انتشار دانش",
    text: "شکر برای محتوایی که می‌نویسم و دل آدم‌هارو گرم می‌کنه.",
  },
  {
    id: 25,
    image: "/images/ready-for-blessing.jpg",
    alt: "آمادگی دریافت نعمات",
    text: "خدایا شکرت، شکرت، شکرت♥️ ایمان دارم که تو همیشه بهترین‌هارو برام می‌خوای و من آماده دریافت تمام نعمت‌های تو هستم.",
  },
];

const Cards = () => {
  return (
    <div className={styles.cards} id="cards-section">
      {cardData.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          alt={card.alt}
          text={card.text}
        />
      ))}
    </div>
  );
};

export default Cards;
