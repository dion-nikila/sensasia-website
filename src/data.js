import { FaGuitar, FaMicrophoneAlt, FaMusic } from "react-icons/fa";

export const SITE = {
  name: "Sensasia Restaurant & Bar",
  shortName: "Sensasia",
  siteUrl: "https://www.sensasia.lk",
  phoneDisplay: "011 295 7700",
  phoneTel: "0112957700",
  phoneSchema: "+94112957700",
  address: "96/A/03, Peralanda Road, Ragama 11010, Sri Lanka",
  street: "96/A/03, Peralanda Road",
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
  map: "https://www.google.com/maps/search/?api=1&query=Sensasia%20Restaurant%2C%2096%2FA%2F03%20Peralanda%20Road%2C%20Ragama%2011010%2C%20Sri%20Lanka",
  mapEmbed: "https://maps.google.com/maps?q=Sensasia%20Restaurant,%2096%2FA%2F03%20Peralanda%20Road,%20Ragama%2011010,%20Sri%20Lanka&hl=en&z=15&output=embed",
};

export const NAVIGATION = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "About", to: "/about" },
  { label: "Visit", to: "/contact" },
];

export const DISCOVERY_LINKS = [
  {
    number: "01",
    label: "EAT",
    title: "Family dining",
    to: "/family-dining",
    copy: "Plan an Asian-fusion meal with family on Peralanda Road.",
  },
  {
    number: "02",
    label: "DRINK",
    title: "Food & drinks menu",
    to: "/menu",
    copy: "Browse confirmed food, cocktail and refresher highlights.",
  },
  {
    number: "03",
    label: "STAY",
    title: "Live music",
    to: "/live-music",
    copy: "See the regular karaoke, live-band and live-music schedule.",
  },
  {
    number: "04",
    label: "WATCH",
    title: "Sports screenings",
    to: "/sports-screenings",
    copy: "Learn about selected big-screen sports and how to confirm a match.",
  },
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
  "Margarita Blue",
];
