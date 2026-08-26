import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ProductCard from "../components/ProductCard";

import {
  violinAccessories,
  violaAccessories,
  celloAccessories,
  otherAccessories,
  studyMaterials,
} from "../data/accessories";


function EmptyAccessoryCategory({ text }) {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "210px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "42px",
        border: "1px solid rgba(25, 25, 25, 0.09)",
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(247,245,242,0.96))",
        boxShadow: "0 20px 55px rgba(0, 0, 0, 0.055)",
      }}
    >
      <p
        style={{
          maxWidth: "700px",
          margin: 0,
          color: "rgba(24, 24, 24, 0.58)",
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: "clamp(17px, 1.4vw, 20px)",
          fontStyle: "italic",
          lineHeight: "1.7",
          textAlign: "center",
        }}
      >
        {text}
      </p>
    </div>
  );
}


function AccessoriesPage() {
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

    const sectionId = location.hash.substring(1);

    const scrollToSection = () => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(scrollToSection);
    });

    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);


  const renderAccessoryCard = (item) => (
    <ProductCard
      key={item.id}
      image={item.image}
      name={item.name}
      level={item.category}
      price={item.price}
      regularPrice={item.regularPrice}
      salePrice={item.salePrice}
      savings={item.savings}
      description={item.description}
      href={`/accessories/${item.slug}`}
      viewLabel="View Accessory"
      productType="Accessory"
      stage={item.stage}
    />
  );


  return (
    <main className="collection-page">

      {/* =====================================
          ACCESSORIES PAGE HERO
      ====================================== */}

      <section className="collection-page-hero">
        <div className="collection-page-hero-inner">

          <p className="collection-page-eyebrow">
            HARMONIC STRINGS
          </p>

          <h1>
            Accessories
          </h1>

          <p className="collection-page-intro">
            Essential accessories, care products, music stands,
            and study materials selected to support musicians in
            practice, lessons, rehearsals, and performance.
          </p>

        </div>
      </section>


      {/* =====================================
          CATEGORY NAVIGATION
      ====================================== */}

      <nav
        className="collection-category-nav"
        aria-label="Accessory categories"
      >
        <div
          className="collection-category-nav-inner"
          style={{
            gridTemplateColumns:
              "repeat(5, minmax(175px, 1fr))",
            overflowX: "auto",
          }}
        >

          <a href="#violin-accessories">
            <span>01</span>
            Violin
          </a>

          <a href="#viola-accessories">
            <span>02</span>
            Viola
          </a>

          <a href="#cello-accessories">
            <span>03</span>
            Cello
          </a>

          <a href="#other-accessories">
            <span>04</span>
            Other Accessories
          </a>

          <a href="#study-materials">
            <span>05</span>
            Study Materials
          </a>

        </div>
      </nav>


      {/* =====================================
          VIOLIN ACCESSORIES
      ====================================== */}

      <section
        id="violin-accessories"
        className="collection-category-section"
      >
        <div className="collection-section-heading">

          <div>
            <p className="collection-section-number">
              01
            </p>

            <p className="collection-section-eyebrow">
              COMFORT &amp; PERFORMANCE
            </p>
          </div>

          <div className="collection-section-title-group">

            <h2>
              Violin
              <span> Accessories</span>
            </h2>

            <p>
              Rosin, shoulder rests, mutes, chinrests, and other
              practical essentials selected to support comfortable
              playing and dependable performance.
            </p>

          </div>

        </div>


        <div className="collection-product-grid">
          {violinAccessories.map(renderAccessoryCard)}
        </div>

      </section>


      {/* =====================================
          VIOLA ACCESSORIES
      ====================================== */}

      <section
        id="viola-accessories"
        className="collection-category-section"
      >
        <div className="collection-section-heading">

          <div>
            <p className="collection-section-number">
              02
            </p>

            <p className="collection-section-eyebrow">
              SUPPORT YOUR PLAYING
            </p>
          </div>

          <div className="collection-section-title-group">

            <h2>
              Viola
              <span> Accessories</span>
            </h2>

            <p>
              Viola accessories focused on comfort, control,
              instrument care, and reliable everyday use for
              students, teachers, and advancing musicians.
            </p>

          </div>

        </div>


        {violaAccessories.length > 0 ? (
          <div className="collection-product-grid">
            {violaAccessories.map(renderAccessoryCard)}
          </div>
        ) : (
          <EmptyAccessoryCategory
            text="Viola accessory selections will be displayed here as products are added to the online collection."
          />
        )}

      </section>


      {/* =====================================
          CELLO ACCESSORIES
      ====================================== */}

      <section
        id="cello-accessories"
        className="collection-category-section"
      >
        <div className="collection-section-heading">

          <div>
            <p className="collection-section-number">
              03
            </p>

            <p className="collection-section-eyebrow">
              STABILITY &amp; CONTROL
            </p>
          </div>

          <div className="collection-section-title-group">

            <h2>
              Cello
              <span> Accessories</span>
            </h2>

            <p>
              Rosin, endpin accessories, mutes, wolf eliminators,
              and practical equipment chosen to support secure,
              responsive cello playing.
            </p>

          </div>

        </div>


        {celloAccessories.length > 0 ? (
          <div className="collection-product-grid">
            {celloAccessories.map(renderAccessoryCard)}
          </div>
        ) : (
          <EmptyAccessoryCategory
            text="Cello accessory selections will be displayed here as products are added to the online collection."
          />
        )}

      </section>


      {/* =====================================
          OTHER ACCESSORIES
      ====================================== */}

      <section
        id="other-accessories"
        className="collection-category-section"
      >
        <div className="collection-section-heading">

          <div>
            <p className="collection-section-number">
              04
            </p>

            <p className="collection-section-eyebrow">
              PRACTICE &amp; REHEARSAL
            </p>
          </div>

          <div className="collection-section-title-group">

            <h2>
              Other
              <span> Accessories</span>
            </h2>

            <p>
              Music stands, stand accessories, orchestra stand
              lights, and instrument-care essentials for lessons,
              home practice, rehearsals, and performance spaces.
            </p>

          </div>

        </div>


        <div className="collection-product-grid">
          {otherAccessories.map(renderAccessoryCard)}
        </div>

      </section>


      {/* =====================================
          STUDY MATERIALS
      ====================================== */}

      <section
        id="study-materials"
        className="collection-category-section"
      >
        <div className="collection-section-heading">

          <div>
            <p className="collection-section-number">
              05
            </p>

            <p className="collection-section-eyebrow">
              PRACTICE WITH PURPOSE
            </p>
          </div>

          <div className="collection-section-title-group">

            <h2>
              Study
              <span> Materials</span>
            </h2>

            <p>
              Method books, etudes, technique studies, and
              teaching resources for violin, viola, and cello,
              including the kinds of materials used for focused
              practice and progressive musical development.
            </p>

          </div>

        </div>


        {studyMaterials.length > 0 ? (
          <div className="collection-product-grid">
            {studyMaterials.map(renderAccessoryCard)}
          </div>
        ) : (
          <EmptyAccessoryCategory
            text="Study books, etudes, technique materials, and teacher resources will be displayed here as titles are added to the online collection."
          />
        )}

      </section>

    </main>
  );
}

export default AccessoriesPage;