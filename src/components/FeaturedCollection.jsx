import { Link } from "react-router-dom";

import violinImage from "../assets/K515_Violin_Front_Back.png";

import stefanPetrovViolaImage from "../assets/Stefan_Petrov_SPA_Viola_Front_Back.png";

import dampitImage from "../assets/Dampit_Violin_Humidifier.png";
import musicStandImage from "../assets/Manhasset_5001_Music_Stand.png";
import evahPirazziImage from "../assets/Pirastro_Evah_Pirazzi_Violin_String_Set.png";
import kunShoulderRestImage from "../assets/Kun_Collapsible_Violin_Shoulder_Rest.png";
import evahPirazziRosinImage from "../assets/Pirastro_Evah_Pirazzi_Gold_Rosin.png";
import bamViolinCaseImage from "../assets/Bam_Hightech_Contoured_2002XL_Violin_Case_Open_Closed.png";
import cp5CelloImage from "../assets/Nicholas_Parola_CP5_Cello_Front_Back.png";
import arcosBrazilBowImage from "../assets/Arcos_Brazil_Violin_Bow_Silver_Full.png";


const featuredProducts = [
  {
    name: "Johannes Köhr K515 Violin",
    category: "Instruments",
    image: violinImage,
    sale: true,
    savings: "Save 19%",
    regularPrice: "$825.00",
    salePrice: "$675.00",
    href: "/violins/k515",
    cta: "View Instrument",
    stage: "instrument",
  },


  /* =====================================================
     FEATURED VIOLA
  ====================================================== */

  {
    name: "Stefan Petrov SPA Viola",
    category: "Instruments",
    image: stefanPetrovViolaImage,
    price: "$4,100",
    href: "/violas/stefan-petrov-spa-viola",
    cta: "View Instrument",
    stage: "instrument",
  },


  {
    name: "Nicolas Parola CP5 Cello",
    category: "Instruments",
    image: cp5CelloImage,
    price: "$3,350",
    href: "/cellos/nicolas-parola-cp5-cello",
    cta: "View Instrument",
    stage: "instrument",
  },


  {
    name: "Pirastro Evah Pirazzi Violin String Set",
    category: "Strings",
    image: evahPirazziImage,
    price: "$110.77",
    stage: "instrument",
  },


  {
    name: "Arcos Brazil Silver Violin Bow",
    category: "Bows",
    image: arcosBrazilBowImage,
    price: "$1,250",
    href: "/bows/arcos-brazil-silver-violin-bow",
    cta: "View Bow",
    stage: "instrument",
  },


  {
    name: "Pirastro Evah Pirazzi Gold Rosin",
    category: "Accessories",
    image: evahPirazziRosinImage,
    price: "$29.17",
    stage: "instrument",
  },


  {
    name: "Dampit Humidifier for String Instruments",
    category: "Care",
    image: dampitImage,
    price: "$16.99",
    stage: "instrument",
  },


  {
    name: "Manhasset 5001 Orchestral Music Stand",
    category: "Accessories",
    image: musicStandImage,
    price: "$97.50",
    stage: "light",
  },


  {
    name: "Orchestra Stand Light",
    category: "Accessories",
    stage: "dark",
  },


  {
    name: "Kun Collapsible Violin Shoulder Rest",
    category: "Accessories",
    image: kunShoulderRestImage,
    price: "$28.75",
    stage: "light",
  },


  {
    name: "Bam Hightech Contoured 2002XL Violin Case",
    category: "Cases",
    image: bamViolinCaseImage,
    sale: true,
    savings: "Save 8%",
    regularPrice: "$978.00",
    salePrice: "$899.00",
    href: "/cases/bam-hightech-contoured-2002xl-violin-case",
    cta: "View Case",
    stage: "dark",
  },


  {
    name: "Microfiber Cloth",
    category: "Care",
    stage: "warm",
  },
];


function ProductAction({ product }) {
  const label =
    product.cta ||
    "Explore";


  if (product.href) {
    return (
      <Link
        to={product.href}
        className="featured-card-link"
      >
        {label}

        <span aria-hidden="true">
          →
        </span>
      </Link>
    );
  }


  return (
    <a
      href="#featured"
      className="featured-card-link"
    >
      {label}

      <span aria-hidden="true">
        →
      </span>
    </a>
  );
}


function FeaturedCollection() {
  return (
    <section
      id="featured"
      className="featured-section"
    >

      <div className="featured-container">

        <div className="featured-showroom">


          <div
            className="featured-showroom-ceiling"
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
            <span />
          </div>


          <div className="featured-heading">

            <p className="featured-eyebrow">
              CURATED FOR MUSICIANS
            </p>


            <h2>
              Featured Collection
            </h2>


            <p className="featured-subtitle">
              Instruments and essentials selected for exceptional
              sound, performance, and care.
            </p>

          </div>


          <div className="featured-grid">

            {featuredProducts.map(
              (product) => (
                <article
                  className={`featured-card featured-card--${product.stage}`}
                  key={product.name}
                >

                  <div className="featured-card-image">

                    {product.sale && (
                      <span className="featured-sale-pill">
                        {product.savings}
                      </span>
                    )}


                    <div
                      className="featured-image-glow"
                      aria-hidden="true"
                    />


                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="featured-product-image"
                      />
                    ) : (
                      <div
                        className="featured-image-placeholder"
                        aria-label={`${product.name} image placeholder`}
                      >

                        <span>
                          Harmonic Strings
                        </span>


                        <i aria-hidden="true" />


                        <small>
                          {product.category}
                        </small>

                      </div>
                    )}

                  </div>


                  <div className="featured-card-content">

                    <p className="featured-card-category">
                      {product.category}
                    </p>


                    <h3>
                      {product.name}
                    </h3>


                    {product.sale && (
                      <div className="featured-price-block featured-price-block--sale">

                        <div className="featured-price-detail">

                          <span>
                            Regular Price
                          </span>


                          <del>
                            {product.regularPrice}
                          </del>

                        </div>


                        <div className="featured-price-detail featured-price-detail--sale">

                          <span>
                            Harmonic Strings Price
                          </span>


                          <strong>
                            {product.salePrice}
                          </strong>

                        </div>

                      </div>
                    )}


                    {!product.sale &&
                      product.price && (
                        <div className="featured-price-block">

                          <div className="featured-price-detail featured-price-detail--standard">

                            <span>
                              Harmonic Strings Price
                            </span>


                            <strong>
                              {product.price}
                            </strong>

                          </div>

                        </div>
                      )}


                    <ProductAction
                      product={product}
                    />

                  </div>

                </article>
              )
            )}


            <article className="featured-outfit-card">

              <div className="featured-outfit-image">
                <span>
                  Master Violin Outfit Image
                </span>
              </div>


              <div className="featured-outfit-content">

                <p className="featured-card-category">
                  COMPLETE OUTFIT
                </p>


                <h3>
                  Master Violin Outfit
                </h3>


                <p>
                  A complete violin package featuring a violin,
                  case, bow, and shoulder rest.
                </p>


                <a href="#featured">
                  Explore the Outfit

                  <span aria-hidden="true">
                    {" "}
                    →
                  </span>
                </a>

              </div>

            </article>

          </div>

        </div>

      </div>

    </section>
  );
}


export default FeaturedCollection;