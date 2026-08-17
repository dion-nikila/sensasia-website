import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaFilePdf } from "react-icons/fa";
import ResponsiveImage from "../../ResponsiveImage";
import { SITE } from "../../data";

export default function CocktailFeature() {
  return (
    <section id="drinks" className="sx-cocktail-feature" aria-labelledby="cocktail-title">
      <ResponsiveImage
        src="/images/about5.jpg"
        alt="The stocked bar at Sensasia in Ragama"
        className="sx-cocktail-atmosphere"
        imageClassName="sx-cocktail-atmosphere-image"
        sizes="100vw"
        loading="lazy"
      />
      <div className="sx-cocktail-shade" aria-hidden="true" />
      <div className="sx-cocktail-ghost" aria-hidden="true">BLUE</div>

      <div className="sx-cocktail-layout">
        <div className="sx-cocktail-copy">
          <p className="sx-kicker">Drink · The Sensasia bar</p>
          <h2 id="cocktail-title">The blue<br />one.</h2>
          <p className="sx-cocktail-lead">Margarita Blue is a current Sensasia menu highlight, made with tequila, triple sec, limeade and blue curaçao.</p>
          <p>The beverage menu also lists familiar cocktails, spirits, beer, wine and alcohol-free refreshers. Check the current menu for availability and pricing.</p>
          <div className="sx-inline-actions">
            <Link to="/menu">Explore food &amp; drinks <FaArrowRight /></Link>
            <a href={SITE.drinksMenu} target="_blank" rel="noreferrer"><FaFilePdf /> Current beverage menu</a>
          </div>
        </div>

        <figure className="sx-cocktail-product">
          <ResponsiveImage
            src="/images/bar-special.jpg"
            alt="Margarita Blue from the Sensasia beverage menu"
            className="sx-cocktail-product-media"
            imageClassName="sx-cocktail-product-image"
            sizes="(max-width: 700px) 74vw, 42vw"
            loading="lazy"
          />
          <figcaption><span>Menu highlight</span><strong>Margarita Blue</strong></figcaption>
        </figure>
      </div>
    </section>
  );
}
