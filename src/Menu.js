import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCocktail, FaFilePdf, FaPhoneAlt, FaUtensils } from "react-icons/fa";
import PageHero from "./PageHero";
import ResponsiveImage from "./ResponsiveImage";
import { MENU_HIGHLIGHTS, SITE } from "./data";

const menuCards = [
  { title: "Food menu", eyebrow: "From the kitchen", copy: "Asian-fusion signatures, comfort dishes, seafood, sharing plates and Sensasia favourites.", image: "/images/food4.jpg", href: SITE.foodMenu, Icon: FaUtensils },
  { title: "Drinks menu", eyebrow: "From the bar", copy: "Signature cocktails, bar favourites, mocktails, bottles and drinks for every kind of night.", image: "/images/bar-special.jpg", href: SITE.drinksMenu, Icon: FaCocktail },
];

export default function Menu() {
  return <main>
    <PageHero eyebrow="The Sensasia menus" title="Food first. Drinks next. The night follows." copy="Browse confirmed house favourites below, then open the complete food or drinks menu as a PDF." image="/images/food3.jpg" />
    <section className="menu-intro section container"><div><p className="eyebrow">Choose your menu</p><h2>Kitchen or bar?</h2></div><p>Both complete menus remain available as accessible PDF links. They open in a new tab so you can return to the site easily.</p></section>
    <section className="menu-card-grid container">{menuCards.map(({ title, eyebrow, copy, image, href, Icon },i)=><article className="menu-card" key={title}><ResponsiveImage src={image} alt={`${title} preview at Sensasia`} className="menu-card-media" imageClassName="card-image" sizes="(max-width:760px) 100vw, 50vw"/><div className="card-shade"/><span className="menu-number">0{i+1}</span><div className="menu-card-copy"><p className="eyebrow light"><Icon/> {eyebrow}</p><h2>{title}</h2><p>{copy}</p><a className="button button-cream" href={href} target="_blank" rel="noreferrer"><FaFilePdf/> View full {title} PDF <span className="sr-only">(PDF, opens in a new tab)</span></a></div></article>)}</section>
    <section className="highlights section container"><div><p className="eyebrow">Confirmed menu highlights</p><h2>Popular at Sensasia.</h2><p>A quick taste of names already featured across Sensasia’s existing menus and website. Prices and the complete selection are available in the PDFs.</p></div><ol>{MENU_HIGHLIGHTS.map((item,i)=><li key={item}><span>0{i+1}</span>{item}</li>)}</ol></section>
    <section className="menu-feature section container"><ResponsiveImage src="/images/spotlight.jpg" alt="Creamy Prawn house special at Sensasia" className="full-media" imageClassName="card-image" sizes="(max-width:760px) 100vw, 55vw"/><div><p className="eyebrow">House favourite</p><h2>Creamy Prawn.</h2><p>A theatrical Sensasia signature, finished tableside. Pair it with plates for the table and something cold from the bar.</p><a className="text-link" href={SITE.foodMenu} target="_blank" rel="noreferrer">Open the food menu <FaArrowRight/></a></div></section>
    <section className="cta-band"><div className="container"><div><p className="eyebrow light">Ready for the table?</p><h2>Eat here or order home.</h2></div><div className="button-row"><a className="button button-cream" href={`tel:${SITE.phoneTel}`}><FaPhoneAlt/> Call to reserve</a><a className="button button-outline" href={SITE.uberEats} target="_blank" rel="noreferrer">Order on Uber Eats <FaArrowRight/></a><Link className="text-link light" to="/contact">Plan your visit</Link></div></div></section>
  </main>;
}
