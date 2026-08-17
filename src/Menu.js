import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCocktail, FaFilePdf, FaPhoneAlt, FaUtensils } from "react-icons/fa";
import PageHero from "./PageHero";
import ResponsiveImage from "./ResponsiveImage";
import { MENU_HIGHLIGHTS, SITE } from "./data";

const menuCards = [
  { title: "Food menu", eyebrow: "From the kitchen", copy: "Asian-fusion dishes, comfort food, seafood and sharing plates from the Sensasia kitchen.", image: "/images/food4.jpg", href: SITE.foodMenu, Icon: FaUtensils },
  { title: "Drinks menu", eyebrow: "From the bar", copy: "Cocktails, non-alcoholic refreshers, bottles and other drinks listed by the bar.", image: "/images/bar-special.jpg", href: SITE.drinksMenu, Icon: FaCocktail },
];

const cocktailHighlights = [
  { name: "Long Island Iced Tea", ingredients: "Tequila, vodka, gin, rum, triple sec, cola, sugar and lime." },
  { name: "Frozen Margarita", ingredients: "Tequila, triple sec and limeade." },
  { name: "Margarita Blue", ingredients: "Tequila, triple sec, limeade and blue curaçao." },
  { name: "Mojito Cocktail", ingredients: "Rum, fresh lime, soda, sugar and mint." },
  { name: "Bullfrog", ingredients: "Tequila, vodka, gin, rum, triple sec, blue curaçao, sugar and lime." },
];

const refresherHighlights = [
  "Lime juice with mint",
  "Frozen lime juice with mint",
  "Mango juice",
  "Fresh orange juice",
  "Virgin mojito",
  "Black mojito",
];

export default function Menu() {
  return <main>
    <PageHero eyebrow="The Sensasia menus" title="Food first. Drinks next. The night follows." copy="Browse confirmed house favourites below, then open the complete food or drinks menu as a PDF." image="/images/food3.jpg" />
    <section className="menu-intro section container"><div><p className="eyebrow">Choose your menu</p><h2>Kitchen or bar?</h2></div><p>Both complete menus are available as PDF documents. They open in a new tab so you can return to the site easily.</p></section>
    <section className="menu-card-grid container">{menuCards.map(({ title, eyebrow, copy, image, href, Icon },i)=><article className="menu-card" key={title}><ResponsiveImage src={image} alt={`${title} preview at Sensasia`} className="menu-card-media" imageClassName="card-image" sizes="(max-width:760px) 100vw, 50vw"/><div className="card-shade"/><span className="menu-number">0{i+1}</span><div className="menu-card-copy"><p className="eyebrow light"><Icon/> {eyebrow}</p><h2>{title}</h2><p>{copy}</p><a className="button button-cream" href={href} target="_blank" rel="noreferrer"><FaFilePdf/> View full {title} PDF <span className="sr-only">(PDF, opens in a new tab)</span></a></div></article>)}</section>
    <section className="highlights section container"><div><p className="eyebrow">Confirmed menu highlights</p><h2>On the menu.</h2><p>A quick look at names already featured across Sensasia’s existing menus and website. Prices and the complete selection are available in the PDFs.</p></div><ol>{MENU_HIGHLIGHTS.map((item,i)=><li key={item}><span>0{i+1}</span>{item}</li>)}</ol></section>
    <section className="menu-drinks section container" aria-labelledby="drinks-highlights-title">
      <div className="menu-drinks-head">
        <p className="eyebrow light"><FaCocktail /> From the drinks menu</p>
        <h2 id="drinks-highlights-title">Cocktails, in plain sight.</h2>
        <p>These names and ingredient lists are transcribed from Sensasia’s current drinks menu. Check the PDF for the complete selection and current prices.</p>
      </div>
      <div className="menu-drinks-grid">
        {cocktailHighlights.map(({ name, ingredients }) => (
          <article className="menu-drink" key={name}>
            <h3>{name}</h3>
            <p>{ingredients}</p>
          </article>
        ))}
        <div className="menu-refreshers">
          <h3>Non-alcoholic refreshers</h3>
          <p>The drinks menu also lists these alcohol-free choices.</p>
          <ul>{refresherHighlights.map((item) => <li key={item}>{item}</li>)}</ul>
          <a className="text-link" href={SITE.drinksMenu} target="_blank" rel="noreferrer">Open the full drinks menu <FaArrowRight /><span className="sr-only">(PDF, opens in a new tab)</span></a>
        </div>
      </div>
    </section>
    <section className="menu-feature section container"><ResponsiveImage src="/images/spotlight.jpg" alt="Creamy Prawn dish at Sensasia" className="full-media" imageClassName="card-image" sizes="(max-width:760px) 100vw, 55vw"/><div><p className="eyebrow">From the kitchen</p><h2>Creamy Prawn.</h2><p>Creamy Prawn is one of the dishes featured on Sensasia’s website. Pair it with other plates for the table and a drink from the bar.</p><a className="text-link" href={SITE.foodMenu} target="_blank" rel="noreferrer">Open the food menu <FaArrowRight/></a></div></section>
    <section className="cta-band"><div className="container"><div><p className="eyebrow light">Ready for the table?</p><h2>Eat here or order home.</h2></div><div className="button-row"><a className="button button-cream" href={`tel:${SITE.phoneTel}`}><FaPhoneAlt/> Call to reserve</a><a className="button button-outline" href={SITE.uberEats} target="_blank" rel="noreferrer">Order on Uber Eats <FaArrowRight/></a><Link className="text-link light" to="/contact">Plan your visit</Link></div></div></section>
  </main>;
}
