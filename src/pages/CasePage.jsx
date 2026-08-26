import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import { cases } from "../data/cases";


function SoldOutNotice({ instrument }) {
  return (
    <div
      style={{
        position: "relative",

        width: "min(100%, 1500px)",

        minHeight: "250px",

        margin: "0 auto",

        padding: "clamp(42px, 5vw, 72px)",

        display: "flex",
        alignItems: "center",

        overflow: "hidden",

        background:
          "radial-gradient(circle at 88% 18%, rgba(141, 29, 29, 0.18), transparent 28%), linear-gradient(135deg, #151515 0%, #080808 100%)",

        border:
          "1px solid rgba(255, 255, 255, 0.07)",

        boxShadow:
          "0 28px 70px rgba(0, 0, 0, 0.12)",
      }}
    >

      {/* =====================================
          DECORATIVE RING
      ====================================== */}

      <div
        aria-hidden="true"
        style={{
          position: "absolute",

          width: "390px",
          height: "390px",

          right: "-130px",
          top: "-145px",

          border:
            "1px solid rgba(255, 255, 255, 0.055)",

          borderRadius: "50%",

          pointerEvents: "none",
        }}
      />


      {/* =====================================
          AVAILABILITY CONTENT
      ====================================== */}

      <div
        style={{
          position: "relative",

          zIndex: 2,

          maxWidth: "820px",
        }}
      >
        <p
          style={{
            margin: "0 0 16px",

            color:
              "rgba(190, 65, 65, 0.92)",

            fontSize: "10px",
            fontWeight: "800",

            letterSpacing: "2.6px",

            textTransform: "uppercase",
          }}
        >
          CURRENT AVAILABILITY
        </p>


        <h3
          style={{
            margin: 0,

            color: "#ffffff",

            fontFamily:
              'Georgia, "Times New Roman", serif',

            fontSize:
              "clamp(38px, 4vw, 62px)",

            fontWeight: "400",

            lineHeight: "1",

            letterSpacing: "-1.7px",
          }}
        >
          Temporarily Sold Out
        </h3>


        <div
          style={{
            width: "52px",
            height: "2px",

            margin: "20px 0",

            background:
              "linear-gradient(90deg, #761616, #aa2b2b)",
          }}
        />


        <p
          style={{
            maxWidth: "720px",

            margin: 0,

            color:
              "rgba(255, 255, 255, 0.62)",

            fontFamily:
              'Georgia, "Times New Roman", serif',

            fontSize:
              "clamp(16px, 1.4vw, 19px)",

            fontStyle: "italic",

            lineHeight: "1.7",
          }}
        >
          Multi-Instrument {instrument} Cases are currently
          unavailable. New inventory is expected soon. Please
          check back for upcoming arrivals.
        </p>
      </div>

    </div>
  );
}


function CasePage() {
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

  }, [location.pathname, location.hash]);


  /* =====================================
     VIOLIN CASES
  ====================================== */

  const violinOblongCases =
    cases.filter(
      (item) =>
        item.instrument === "Violin" &&
        item.caseType === "Oblong"
    );


  const violinShapedCases =
    cases.filter(
      (item) =>
        item.instrument === "Violin" &&
        item.caseType === "Shaped"
    );


  /* =====================================
     VIOLA CASES
  ====================================== */

  const violaOblongCases =
    cases.filter(
      (item) =>
        item.instrument === "Viola" &&
        item.caseType === "Oblong"
    );


  const violaShapedCases =
    cases.filter(
      (item) =>
        item.instrument === "Viola" &&
        item.caseType === "Shaped"
    );


  /* =====================================
     CELLO CASES
  ====================================== */

  const celloHardCases =
    cases.filter(
      (item) =>
        item.instrument === "Cello" &&
        item.caseType === "Hard"
    );


  const celloSoftCases =
    cases.filter(
      (item) =>
        item.instrument === "Cello" &&
        item.caseType === "Soft / Gig Bag"
    );


  /* =====================================
     PRODUCT CARD
  ====================================== */

  const renderCaseCard = (item) => (
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
      href={`/cases/${item.slug}`}
      viewLabel="View Case"
      productType="Case"
    />
  );


  return (
    <main className="collection-page">

      {/* =====================================
          CASE PAGE HERO
      ====================================== */}

      <section className="collection-page-hero">

        <div className="collection-page-hero-inner">

          <p className="collection-page-eyebrow">
            HARMONIC STRINGS
          </p>


          <h1>
            Cases
          </h1>


          <p className="collection-page-intro">
            Protect your instrument with violin,
            viola, and cello cases selected for
            dependable protection, thoughtful
            design, and everyday practicality.
          </p>

        </div>

      </section>


      {/* =====================================
          CATEGORY NAVIGATION
      ====================================== */}

      <nav
        className="collection-category-nav"
        aria-label="Case categories"
      >

        <div
          className="collection-category-nav-inner"
          style={{
            gridTemplateColumns:
              "repeat(8, minmax(165px, 1fr))",

            overflowX: "auto",
          }}
        >

          <a href="#violin-oblong">
            <span>01</span>
            Violin Oblong
          </a>


          <a href="#violin-shaped">
            <span>02</span>
            Violin Shaped
          </a>


          <a href="#violin-multi">
            <span>03</span>
            Violin Multi
          </a>


          <a href="#viola-oblong">
            <span>04</span>
            Viola Oblong
          </a>


          <a href="#viola-shaped">
            <span>05</span>
            Viola Shaped
          </a>


          <a href="#viola-multi">
            <span>06</span>
            Viola Multi
          </a>


          <a href="#cello-hard">
            <span>07</span>
            Cello Hard
          </a>


          <a href="#cello-soft">
            <span>08</span>
            Cello Soft
          </a>

        </div>

      </nav>


      {/* =====================================
          VIOLIN OBLONG CASES
      ====================================== */}

      <section
        id="violin-oblong"
        className="collection-category-section"
      >

        <div className="collection-section-heading">

          <div>

            <p className="collection-section-number">
              01
            </p>


            <p className="collection-section-eyebrow">
              CLASSIC PROTECTION
            </p>

          </div>


          <div className="collection-section-title-group">

            <h2>
              Oblong
              <span> Violin Cases</span>
            </h2>


            <p>
              Full-featured violin cases offering
              generous storage, dependable protection,
              and the classic oblong format preferred
              by many musicians.
            </p>

          </div>

        </div>


        <div className="collection-product-grid">
          {violinOblongCases.map(
            renderCaseCard
          )}
        </div>

      </section>


      {/* =====================================
          VIOLIN SHAPED CASES
      ====================================== */}

      <section
        id="violin-shaped"
        className="collection-category-section"
      >

        <div className="collection-section-heading">

          <div>

            <p className="collection-section-number">
              02
            </p>


            <p className="collection-section-eyebrow">
              REFINED &amp; COMPACT
            </p>

          </div>


          <div className="collection-section-title-group">

            <h2>
              Shaped
              <span> Violin Cases</span>
            </h2>


            <p>
              Streamlined violin cases designed for
              musicians who want secure protection in
              a lighter, more compact profile.
            </p>

          </div>

        </div>


        <div className="collection-product-grid">
          {violinShapedCases.map(
            renderCaseCard
          )}
        </div>

      </section>


      {/* =====================================
          VIOLIN MULTI-INSTRUMENT CASES
      ====================================== */}

      <section
        id="violin-multi"
        className="collection-category-section"
      >

        <div className="collection-section-heading">

          <div>

            <p className="collection-section-number">
              03
            </p>


            <p className="collection-section-eyebrow">
              MORE THAN ONE
            </p>

          </div>


          <div className="collection-section-title-group">

            <h2>
              Multi-Instrument
              <span> Violin Cases</span>
            </h2>


            <p>
              Purpose-built cases for musicians who
              need to transport more than one instrument
              securely and efficiently.
            </p>

          </div>

        </div>


        {/* =====================================
            SOLD OUT NOTICE
        ====================================== */}

        <SoldOutNotice instrument="Violin" />

      </section>


      {/* =====================================
          VIOLA OBLONG CASES
      ====================================== */}

      <section
        id="viola-oblong"
        className="collection-category-section"
      >

        <div className="collection-section-heading">

          <div>

            <p className="collection-section-number">
              04
            </p>


            <p className="collection-section-eyebrow">
              CLASSIC PROTECTION
            </p>

          </div>


          <div className="collection-section-title-group">

            <h2>
              Oblong
              <span> Viola Cases</span>
            </h2>


            <p>
              Spacious viola cases selected for
              reliable protection, accessory storage,
              comfortable transport, and everyday
              professional use.
            </p>

          </div>

        </div>


        <div className="collection-product-grid">
          {violaOblongCases.map(
            renderCaseCard
          )}
        </div>

      </section>


      {/* =====================================
          VIOLA SHAPED CASES
      ====================================== */}

      <section
        id="viola-shaped"
        className="collection-category-section"
      >

        <div className="collection-section-heading">

          <div>

            <p className="collection-section-number">
              05
            </p>


            <p className="collection-section-eyebrow">
              LIGHTER TRAVEL
            </p>

          </div>


          <div className="collection-section-title-group">

            <h2>
              Shaped
              <span> Viola Cases</span>
            </h2>


            <p>
              Compact viola cases balancing secure
              protection with a streamlined shape for
              easier everyday transportation.
            </p>

          </div>

        </div>


        <div className="collection-product-grid">
          {violaShapedCases.map(
            renderCaseCard
          )}
        </div>

      </section>


      {/* =====================================
          VIOLA MULTI-INSTRUMENT CASES
      ====================================== */}

      <section
        id="viola-multi"
        className="collection-category-section"
      >

        <div className="collection-section-heading">

          <div>

            <p className="collection-section-number">
              06
            </p>


            <p className="collection-section-eyebrow">
              VERSATILE STORAGE
            </p>

          </div>


          <div className="collection-section-title-group">

            <h2>
              Multi-Instrument
              <span> Viola Cases</span>
            </h2>


            <p>
              Versatile solutions for safely carrying
              multiple instruments while keeping
              essential accessories organized and
              protected.
            </p>

          </div>

        </div>


        {/* =====================================
            SOLD OUT NOTICE
        ====================================== */}

        <SoldOutNotice instrument="Viola" />

      </section>


      {/* =====================================
          CELLO HARD CASES
      ====================================== */}

      <section
        id="cello-hard"
        className="collection-category-section"
      >

        <div className="collection-section-heading">

          <div>

            <p className="collection-section-number">
              07
            </p>


            <p className="collection-section-eyebrow">
              SERIOUS PROTECTION
            </p>

          </div>


          <div className="collection-section-title-group">

            <h2>
              Hard
              <span> Cello Cases</span>
            </h2>


            <p>
              Protective cello cases engineered to
              safeguard your instrument during
              rehearsals, performances, lessons,
              storage, and travel.
            </p>

          </div>

        </div>


        <div className="collection-product-grid">
          {celloHardCases.map(
            renderCaseCard
          )}
        </div>

      </section>


      {/* =====================================
          CELLO SOFT CASES & GIG BAGS
      ====================================== */}

      <section
        id="cello-soft"
        className="collection-category-section"
      >

        <div className="collection-section-heading">

          <div>

            <p className="collection-section-number">
              08
            </p>


            <p className="collection-section-eyebrow">
              LIGHTWEIGHT TRANSPORT
            </p>

          </div>


          <div className="collection-section-title-group">

            <h2>
              Soft Cases
              <span> &amp; Gig Bags</span>
            </h2>


            <p>
              Lightweight cello protection designed
              for convenient local transport,
              rehearsals, lessons, and everyday
              handling.
            </p>

          </div>

        </div>


        <div className="collection-product-grid">
          {celloSoftCases.map(
            renderCaseCard
          )}
        </div>

      </section>

    </main>
  );
}


export default CasePage;
