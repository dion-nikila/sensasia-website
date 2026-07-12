import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaDirections, FaGlassCheers, FaMusic, FaUtensils } from "react-icons/fa";
import PageHero from "./PageHero";
import ResponsiveImage from "./ResponsiveImage";
import { SITE } from "./data";

export default function About() {
  return <main>
    <PageHero eyebrow="Restaurant · pub · Ragama" title="A Ragama favourite since 2012." copy="Warm tables, a full bar and enough energy to turn dinner into a night out." image="/images/about1.jpg" alt="Guests dining together at Sensasia Restaurant and Bar" />
    <section className="story section container"><div><p className="eyebrow">The Sensasia story</p><h2>Built for more than one kind of night.</h2></div><div><p className="lead-copy">Sensasia brings Asian-fusion food, cocktails and live entertainment together on Peralanda Road.</p><p>It can be a relaxed family dinner, a table with friends, a birthday gathering, a round during the match or a late evening with karaoke and live music. That mix is the point: come as you are and let the night find its pace.</p></div></section>
    <section className="philosophy container"><article><FaUtensils/><span>01</span><h3>Food with character</h3><p>Asian-fusion and Sri Lankan favourites, seafood and generous plates for sharing.</p></article><article><FaGlassCheers/><span>02</span><h3>A proper bar</h3><p>Cocktails, spirits, beer, wine and choices for every table and occasion.</p></article><article><FaMusic/><span>03</span><h3>Stay for the atmosphere</h3><p>Big-screen entertainment, weekly karaoke, bands and live music in Ragama.</p></article></section>
    <section className="about-gallery section container">{["about2","about3","about4","about5","about6"].map((name,i)=><ResponsiveImage key={name} src={`/images/${name}.jpg`} alt={["Warm interior details at Sensasia","Sensasia dining room ready for guests","Sensasia restaurant evening atmosphere","Sensasia bar and entertainment space","Sensasia restaurant interior in Ragama"][i]} className={`about-photo about-photo-${i+1}`} imageClassName="card-image" sizes="(max-width:760px) 100vw, 50vw"/>)}</section>
    <section className="about-night section container"><div><p className="eyebrow">Dinner becomes a night out</p><h2>Start where you like.</h2></div><div className="night-options"><span><b>For dinner</b>Settle in with family, a date or the whole group.</span><span><b>For drinks</b>Meet at the bar and stay for another round.</span><span><b>For the show</b>Catch the match, karaoke or weekly live music.</span><span><b>For a celebration</b>Call ahead and talk to the team about your table.</span></div></section>
    <section className="cta-band"><div className="container"><div><p className="eyebrow light">Make a night of it</p><h2>See you on Peralanda Road.</h2></div><div className="button-row"><Link className="button button-cream" to="/menu">View the menu <FaArrowRight/></Link><a className="button button-outline" href={SITE.map} target="_blank" rel="noreferrer">Get directions <FaDirections/></a></div></div></section>
  </main>;
}
