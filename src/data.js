import { FaGuitar, FaMicrophoneAlt, FaMusic } from "react-icons/fa";

export const SITE = {
  name: "Sensasia Restaurant and Bar",
  shortName: "Sensasia",
  phoneDisplay: "0112 957 700",
  phoneTel: "0112957700",
  phoneSchema: "+94112957700",
  address: "Peralanda Road, Ragama 11010, Sri Lanka",
  street: "Peralanda Road",
  locality: "Ragama",
  region: "Western Province",
  postcode: "11010",
  hours: "10:00 AM – Midnight",
  since: "2012",
  foodMenu: "/FoodMenu.pdf",
  drinksMenu: "/DrinksMenu.pdf",
  uberEats: "https://www.ubereats.com/lk/store/sensasia-restaurant-ragama/xSqQwTKNRIS7aBF5YRel2g",
  facebook: "https://www.facebook.com/sens.asia",
  instagram: "https://www.instagram.com/sensasia.restaurant/?hl=en",
  map: "https://www.google.com/maps/search/?api=1&query=Sensasia%20Restaurant%2C%20Peralanda%20Road%2C%20Ragama%2C%20Sri%20Lanka",
  mapEmbed: "https://maps.google.com/maps?q=Sensasia%20Restaurant,%20Peralanda%20Road,%20Ragama,%20Sri%20Lanka&hl=en&z=15&output=embed",
};

export const NAVIGATION = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const EVENTS = [
  { day: "Wednesday", shortDay: "Wed", title: "Karaoke", time: "From 7:30 PM", Icon: FaMicrophoneAlt },
  { day: "Friday", shortDay: "Fri", title: "Live band", time: "From 7:30 PM", Icon: FaGuitar },
  { day: "Saturday", shortDay: "Sat", title: "Live music", time: "From 8:00 PM", Icon: FaMusic },
];

export const MENU_HIGHLIGHTS = [
  "Creamy Prawn",
  "Sensasia Special Rice",
  "Cheese Kottu",
  "Pepper Pork",
  "Signature Fried Handallo",
  "Blue Margarita",
];

export const SEO = {
  "/": {
    title: "Sensasia Ragama | Asian-Fusion Restaurant, Cocktail Bar & Live Entertainment",
    description: "Asian-fusion food, cocktails, big-screen entertainment, karaoke and live music on Peralanda Road, Ragama. View menus or call Sensasia to reserve.",
    image: "/images/hero-bg.jpg",
  },
  "/menu": {
    title: "Food & Drinks Menu | Sensasia Restaurant and Bar Ragama",
    description: "Browse Sensasia food and drinks highlights, then open the full PDF menus. Asian-fusion favourites, cocktails and a full bar in Ragama.",
    image: "/images/food4.jpg",
  },
  "/about": {
    title: "About Sensasia | Restaurant, Pub and Live Entertainment in Ragama",
    description: "Meet Sensasia, a Ragama neighbourhood restaurant, pub and entertainment venue serving Asian-fusion food and cocktails since 2012.",
    image: "/images/about1.jpg",
  },
  "/contact": {
    title: "Contact & Reservations | Sensasia Ragama",
    description: "Call Sensasia to reserve, get directions to Peralanda Road, order on Uber Eats, or plan dinner, drinks and live entertainment in Ragama.",
    image: "/images/about5.jpg",
  },
  "/404": {
    title: "Page Not Found | Sensasia Ragama",
    description: "The page could not be found. Return to Sensasia Restaurant and Bar in Ragama.",
    image: "/images/hero-bg.jpg",
  },
};
