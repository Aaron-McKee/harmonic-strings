import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import { bows } from "../data/bows";


function BowPage() {
  const location = useLocation();


  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      return;
    }


    const sectionId =
      location.hash.substring(1);


    const scrollToSection = () => {
      const section =
        document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };


    const frame =
      requestAnimationFrame(() => {
        requestAnimationFrame(
          scrollToSection
        );
      });


    return () =>
      cancelAnimationFrame(frame);
  }, [
    location.pathname,
    location.hash,
  ]);


  /* =====================================
     VIOLIN BOWS
  ====================================== */

  const woodViolinBows =
    bows.filter(
      (bow) =>
        bow.instrument === "Violin" &&
        bow.material === "Wood"
    );


  const carbonViolinBows =
    bows.filter(
      (bow) =>
        bow.instrument === "Violin" &&
        bow.material === "Carbon Fiber"
    );


  /* =====================================
     VIOLA BOWS
  ====================================== */

  const woodViolaBows =
    bows.filter(
      (bow) =>
        bow.instrument === "Viola" &&
        bow.material === "Wood"
    );


  const carbonViolaBows =
    bows.filter(
      (bow) =>
        bow.instrument === "Viola" &&
        bow.material === "Carbon Fiber"
    );


  /* =====================================
     CELLO BOWS
  ====================================== */

  const woodCelloBows =
    bows.filter(
      (bow) =>
        bow.instrument === "Cello" &&
        bow.material === "Wood"
    );


  const carbonCelloBows =
    bows.filter(
      (bow) =>
        bow.instrument === "Cello" &&
        bow.material === "Carbon Fiber"
    );


  /* =====================================
     PRODUCT CARD
  ====================================== */

  const renderBowCard = (
    bow
  ) => (
    <ProductCard
      key={bow.id}
      image={bow.image}
      name={bow.name}
      level={bow.level}
      price={bow.price}
      regularPrice={bow.regularPrice}
      salePrice={bow.salePrice}
      savings={bow.savings}
      description={
        bow.shortDescription ||
        bow.description
      }
      href={`/bows/${bow.slug}`}
      viewLabel="View Bow"
      productType="Bow"
      stage={bow.stage}
    />
  );


  return (
    <main className="collection-page">


      {/* =====================================
          BOW PAGE HERO
      ====================================== */}

      <section className="collection-page-hero">

        <div className="collection-page-hero-inner">

          <p className="collection-page-eyebrow">
            HARMONIC STRINGS
          </p>


          <h1>
            Bows
          </h1>


          <p className="collection-page-intro">
            Explore violin, viola, and cello bows selected
            for balance, responsiveness, control, and musical
            expression.
          </p>

        </div>

      </section>


      {/* =====================================
          CATEGORY NAVIGATION
      ====================================== */}

      <nav
        className="collection-category-nav"
        aria-label="Bow categories"
      >

        <div
          className="collection-category-nav-inner"
          style={{
            gridTemplateColumns:
              "repeat(6, minmax(155px, 1fr))",
            overflowX: "auto",
          }}
        >

          <a href="#wood-violin">
            <span>01</span>
            Wood Violin
          </a>


          <a href="#carbon-violin">
            <span>02</span>
            Carbon Violin
          </a>


          <a href="#wood-viola">
            <span>03</span>
            Wood Viola
          </a>


          <a href="#carbon-viola">
            <span>04</span>
            Carbon Viola
          </a>


          <a href="#wood-cello">
            <span>05</span>
            Wood Cello
          </a>


          <a href="#carbon-cello">
            <span>06</span>
            Carbon Cello
          </a>

        </div>

      </nav>


      {/* =====================================
          WOOD VIOLIN BOWS
      ====================================== */}

      <section
        id="wood-violin"
        className="collection-category-section"
      >

        <div className="collection-section-heading">

          <div>

            <p className="collection-section-number">
              01
            </p>


            <p className="collection-section-eyebrow">
              TRADITIONAL CRAFTSMANSHIP
            </p>

          </div>


          <div className="collection-section-title-group">

            <h2>
              Wood
              <span> Violin Bows</span>
            </h2>


            <p>
              Traditional violin bows selected for balance,
              flexibility, articulation, and a natural connection
              between player and instrument.
            </p>

          </div>

        </div>


        <div className="collection-product-grid">
          {woodViolinBows.map(
            renderBowCard
          )}
        </div>

      </section>


      {/* =====================================
          CARBON FIBER VIOLIN BOWS
      ====================================== */}

      <section
        id="carbon-violin"
        className="collection-category-section"
      >

        <div className="collection-section-heading">

          <div>

            <p className="collection-section-number">
              02
            </p>


            <p className="collection-section-eyebrow">
              MODERN PERFORMANCE
            </p>

          </div>


          <div className="collection-section-title-group">

            <h2>
              Carbon Fiber
              <span> Violin Bows</span>
            </h2>


            <p>
              Responsive and durable violin bows offering
              consistency, stability, and dependable performance
              for rehearsals, lessons, and the stage.
            </p>

          </div>

        </div>


        <div className="collection-product-grid">
          {carbonViolinBows.map(
            renderBowCard
          )}
        </div>

      </section>


      {/* =====================================
          WOOD VIOLA BOWS
      ====================================== */}

      <section
        id="wood-viola"
        className="collection-category-section"
      >

        <div className="collection-section-heading">

          <div>

            <p className="collection-section-number">
              03
            </p>


            <p className="collection-section-eyebrow">
              DEPTH &amp; CONTROL
            </p>

          </div>


          <div className="collection-section-title-group">

            <h2>
              Wood
              <span> Viola Bows</span>
            </h2>


            <p>
              Wood viola bows chosen for comfortable balance,
              controlled response, tonal warmth, and the strength
              needed to draw a full viola sound.
            </p>

          </div>

        </div>


        <div className="collection-product-grid">
          {woodViolaBows.map(
            renderBowCard
          )}
        </div>

      </section>


      {/* =====================================
          CARBON FIBER VIOLA BOWS
      ====================================== */}

      <section
        id="carbon-viola"
        className="collection-category-section"
      >

        <div className="collection-section-heading">

          <div>

            <p className="collection-section-number">
              04
            </p>


            <p className="collection-section-eyebrow">
              STABILITY &amp; RESPONSE
            </p>

          </div>


          <div className="collection-section-title-group">

            <h2>
              Carbon Fiber
              <span> Viola Bows</span>
            </h2>


            <p>
              Modern viola bows designed for reliable handling,
              consistent response, durability, and confident
              performance.
            </p>

          </div>

        </div>


        <div className="collection-product-grid">
          {carbonViolaBows.map(
            renderBowCard
          )}
        </div>

      </section>


      {/* =====================================
          WOOD CELLO BOWS
      ====================================== */}

      <section
        id="wood-cello"
        className="collection-category-section"
      >

        <div className="collection-section-heading">

          <div>

            <p className="collection-section-number">
              05
            </p>


            <p className="collection-section-eyebrow">
              POWER &amp; NUANCE
            </p>

          </div>


          <div className="collection-section-title-group">

            <h2>
              Wood
              <span> Cello Bows</span>
            </h2>


            <p>
              Traditional cello bows selected for strength,
              balance, articulation, and the ability to produce
              both power and nuance across the instrument.
            </p>

          </div>

        </div>


        <div className="collection-product-grid">
          {woodCelloBows.map(
            renderBowCard
          )}
        </div>

      </section>


      {/* =====================================
          CARBON FIBER CELLO BOWS
      ====================================== */}

      <section
        id="carbon-cello"
        className="collection-category-section collection-fine-section"
      >

        <div className="collection-section-heading">

          <div>

            <p className="collection-section-number">
              06
            </p>


            <p className="collection-section-eyebrow">
              MODERN RELIABILITY
            </p>

          </div>


          <div className="collection-section-title-group">

            <h2>
              Carbon Fiber
              <span> Cello Bows</span>
            </h2>


            <p>
              Durable, consistent cello bows offering dependable
              response, stability, and confident control for
              demanding daily use.
            </p>

          </div>

        </div>


        <div className="collection-product-grid">
          {carbonCelloBows.map(
            renderBowCard
          )}
        </div>

      </section>

    </main>
  );
}


export default BowPage;