import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import { cellos } from "../data/cellos";


function CelloPage() {
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


  const beginnerInstruments =
    cellos.filter(
      (instrument) =>
        instrument.level === "Beginner"
    );


  const intermediateInstruments =
    cellos.filter(
      (instrument) =>
        instrument.level === "Intermediate"
    );


  const advancedInstruments =
    cellos.filter(
      (instrument) =>
        instrument.level === "Advanced"
    );


  const fineAntiqueInstruments =
    cellos.filter(
      (instrument) =>
        instrument.level === "Fine & Antique"
    );


  const renderInstrumentCard = (
    instrument
  ) => (
    <ProductCard
      key={instrument.id}
      image={instrument.image}
      name={instrument.name}
      level={instrument.level}
      price={instrument.price}
      regularPrice={instrument.regularPrice}
      salePrice={instrument.salePrice}
      savings={instrument.savings}
      description={
        instrument.shortDescription ||
        instrument.description
      }
      href={`/cellos/${instrument.slug}`}
      viewLabel="View Instrument"
      productType="Cello"
      stage={instrument.stage}
    />
  );


  return (
    <main className="collection-page">


      {/* =====================================
          CELLO HERO
      ====================================== */}

      <section
        className="collection-page-hero"
        style={{
          background: "#080706",
        }}
      >


        {/* =====================================
            DARK TEXT GRADIENT
        ====================================== */}

        <div
          aria-hidden="true"
          style={{
            position: "absolute",

            inset: 0,

            zIndex: 0,

            background:
              `linear-gradient(
                90deg,
                rgba(5, 5, 5, 0.94) 0%,
                rgba(5, 5, 5, 0.88) 17%,
                rgba(5, 5, 5, 0.72) 34%,
                rgba(5, 5, 5, 0.42) 52%,
                rgba(5, 5, 5, 0.16) 72%,
                rgba(5, 5, 5, 0.12) 100%
              )`,

            pointerEvents:
              "none",
          }}
        />


        {/* =====================================
            EXISTING HERO TEXT
        ====================================== */}

        <div
          className="collection-page-hero-inner"
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >

          <p className="collection-page-eyebrow">
            HARMONIC STRINGS
          </p>


          <h1>
            Cellos
          </h1>


          <p className="collection-page-intro">
            Explore cellos selected for developing musicians,
            advancing players, professionals, and collectors.
          </p>

        </div>

      </section>


      {/* =====================================
          CATEGORY NAVIGATION
      ====================================== */}

      <nav
        className="collection-category-nav"
        aria-label="Cello categories"
      >

        <div className="collection-category-nav-inner">

          <a href="#beginner">
            <span>01</span>
            Beginner
          </a>


          <a href="#intermediate">
            <span>02</span>
            Intermediate
          </a>


          <a href="#advanced">
            <span>03</span>
            Advanced
          </a>


          <a href="#fine-antique">
            <span>04</span>
            Fine &amp; Antique
          </a>

        </div>

      </nav>


      {/* =====================================
          BEGINNER CELLOS
      ====================================== */}

      <section
        id="beginner"
        className="collection-category-section"
      >

        <div className="collection-section-heading">

          <div>

            <p className="collection-section-number">
              01
            </p>


            <p className="collection-section-eyebrow">
              START YOUR JOURNEY
            </p>

          </div>


          <div className="collection-section-title-group">

            <h2>
              Beginner
              <span> Cellos</span>
            </h2>


            <p>
              Dependable instruments selected to give new
              musicians a strong beginning with proper setup,
              comfortable playability, and a rewarding sound.
            </p>

          </div>

        </div>


        <div className="collection-product-grid">

          {beginnerInstruments.map(
            renderInstrumentCard
          )}

        </div>

      </section>


      {/* =====================================
          INTERMEDIATE CELLOS
      ====================================== */}

      <section
        id="intermediate"
        className="collection-category-section"
      >

        <div className="collection-section-heading">

          <div>

            <p className="collection-section-number">
              02
            </p>


            <p className="collection-section-eyebrow">
              DEVELOP YOUR SOUND
            </p>

          </div>


          <div className="collection-section-title-group">

            <h2>
              Intermediate
              <span> Cellos</span>
            </h2>


            <p>
              Instruments for advancing musicians ready for
              greater tonal depth, responsiveness, projection,
              and musical expression.
            </p>

          </div>

        </div>


        <div className="collection-product-grid">

          {intermediateInstruments.map(
            renderInstrumentCard
          )}

        </div>

      </section>


      {/* =====================================
          ADVANCED CELLOS
      ====================================== */}

      <section
        id="advanced"
        className="collection-category-section"
      >

        <div className="collection-section-heading">

          <div>

            <p className="collection-section-number">
              03
            </p>


            <p className="collection-section-eyebrow">
              ELEVATE YOUR PERFORMANCE
            </p>

          </div>


          <div className="collection-section-title-group">

            <h2>
              Advanced
              <span> Cellos</span>
            </h2>


            <p>
              Refined instruments chosen for experienced
              musicians seeking greater complexity, dynamic
              range, projection, and control.
            </p>

          </div>

        </div>


        <div className="collection-product-grid">

          {advancedInstruments.map(
            renderInstrumentCard
          )}

        </div>

      </section>


      {/* =====================================
          FINE & ANTIQUE CELLOS
      ====================================== */}

      <section
        id="fine-antique"
        className="collection-category-section collection-fine-section"
      >

        <div className="collection-section-heading">

          <div>

            <p className="collection-section-number">
              04
            </p>


            <p className="collection-section-eyebrow">
              EXCEPTIONAL INSTRUMENTS
            </p>

          </div>


          <div className="collection-section-title-group">

            <h2>
              Fine &amp; Antique
              <span> Cellos</span>
            </h2>


            <p>
              Distinctive instruments selected for their
              craftsmanship, character, history, and exceptional
              musical potential.
            </p>

          </div>

        </div>


        <div className="collection-product-grid">

          {fineAntiqueInstruments.map(
            renderInstrumentCard
          )}

        </div>

      </section>

    </main>
  );
}


export default CelloPage;