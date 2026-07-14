export type Testimonial = {
  id: number;
  name: string;
  location: string;
  rating: number;
  en: string;
  am: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sara Tesfaye",
    location: "Addis Ababa",
    rating: 5,
    en: "An unforgettable stay. The rooms were immaculate and the staff treated us like royalty. Truly a five-star experience in Dessie.",
    am: "የማይረሳ ቆይታ ነበር። ክፍሎቹ በጣም ንጹህ ነበሩ፣ ሰራተኞቹም እንደ ንጉስ አስተናገዱን። በደሴ እውነተኛ ባለ አምስት ኮከብ ተሞክሮ።",
  },
  {
    id: 2,
    name: "James Miller",
    location: "London, UK",
    rating: 5,
    en: "Elegant, comfortable and exceptional service. The dining was world-class and the attention to detail was remarkable.",
    am: "የተዋበ፣ ምቹ እና ልዩ አገልግሎት። ምግቡ ዓለም አቀፍ ደረጃ ያለው ሲሆን ለዝርዝር ጉዳዮች የተሰጠው ትኩረት አስደናቂ ነበር።",
  },
  {
    id: 3,
    name: "Hanna Girma",
    location: "Bahir Dar",
    rating: 5,
    en: "From check-in to check-out everything was perfect. The Presidential Suite exceeded all our expectations.",
    am: "ከመግቢያ እስከ መውጫ ሁሉም ነገር ፍጹም ነበር። የፕሬዚዳንታዊ ስዊቱ ከጠበቅነው በላይ ነበር።",
  },
  {
    id: 4,
    name: "Michael Okonkwo",
    location: "Nairobi, Kenya",
    rating: 5,
    en: "The perfect blend of luxury and warm Ethiopian hospitality. I will definitely be returning on my next visit.",
    am: "የቅንጦት እና የሞቀ የኢትዮጵያ እንግዳ ተቀባይነት ፍጹም ጥምረት። በሚቀጥለው ጉዞዬ በእርግጠኝነት እመለሳለሁ።",
  },
];
