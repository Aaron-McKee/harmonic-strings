import {
  useEffect,
  useState,
} from "react";

import {
  Maximize2,
  X,
} from "lucide-react";

import "../styles/product-detail.css";
import "../styles/product-detail-viewer.css";


function InstrumentShowcase({ product }) {
  const instrument = product || {
    name: "Harmonic Strings Instrument",
    maker: "Harmonic Strings",
    model: "Instrument",
    level: null,
    instrument: "Instrument",

    size: null,
    availableSizes: [],

    image: null,
    frontImage: null,
    backImage: null,
    combinedImage: null,

    detailImage: null,
    detailViewLabel: null,

    price: null,
    regularPrice: null,
    salePrice: null,
    savings: null,

    description:
      "A carefully selected instrument prepared for performance, playability, and musical development.",

    toneAndPlayability: null,

    top: null,
    backAndSides: null,
    finish: null,
    fittings: null,
    strings: null,

    construction: null,
    handwork: null,
    idealFor: null,
    setup: null,

    tonalCharacter: null,

    year: null,
    inspiration: null,
    condition: null,
    conditionNotes: null,

    inStock: null,
  };


  const [activeView, setActiveView] =
    useState("front");

  const [activeTab, setActiveTab] =
    useState("details");

  const [detailOpen, setDetailOpen] =
    useState(false);


  const frontImage =
    instrument.frontImage ||
    instrument.image ||
    instrument.combinedImage ||
    instrument.detailImage ||
    null;


  const backImage =
    instrument.backImage ||
    instrument.frontImage ||
    instrument.image ||
    instrument.combinedImage ||
    instrument.detailImage ||
    null;


  /*
    The third image normally uses combinedImage.

    A product can instead provide:
      detailImage
      detailViewLabel

    Example:
      detailImage: a31ScrollImage
      detailViewLabel: "Scroll"
  */

  const thirdImage =
    instrument.detailImage ||
    instrument.combinedImage ||
    instrument.image ||
    instrument.frontImage ||
    instrument.backImage ||
    null;


  const thirdViewLabel =
    instrument.detailViewLabel ||
    "Both";


  const hasImages = Boolean(
    instrument.image ||
    instrument.frontImage ||
    instrument.backImage ||
    instrument.combinedImage ||
    instrument.detailImage
  );


  const activeImage =
    activeView === "back"
      ? backImage
      : activeView === "both"
        ? thirdImage
        : frontImage;


  const activeViewLabel =
    activeView === "both"
      ? thirdViewLabel
      : activeView === "back"
        ? "Back"
        : "Front";


  const sizes =
    instrument.availableSizes?.length
      ? instrument.availableSizes.join(" · ")
      : instrument.size || null;


  const toneCopy =
    instrument.toneAndPlayability ||
    instrument.tonalCharacter ||
    null;


  const trialSubject =
    encodeURIComponent(
      `In-Home ${instrument.instrument || "Instrument"} Trial Inquiry`
    );


  useEffect(() => {
    if (!detailOpen) {
      return;
    }


    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setDetailOpen(false);
      }
    };


    const previousOverflow =
      document.body.style.overflow;


    document.body.style.overflow =
      "hidden";


    document.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () => {
      document.body.style.overflow =
        previousOverflow;


      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [detailOpen]);


  const DetailRow = ({
    label,
    value,
    tonal = false,
  }) => {
    if (!value) {
      return null;
    }


    return (
      <div
        className={`hs-detail-ledger-row${
          tonal ? " tonal" : ""
        }`}
      >

        <span>
          {label}
        </span>


        <strong>
          {value}
        </strong>

      </div>
    );
  };


  const hasOverview =
    Boolean(
      instrument.instrument ||
      sizes ||
      instrument.level ||
      instrument.idealFor
    );


  const hasCraftsmanship =
    Boolean(
      instrument.construction ||
      instrument.handwork
    );


  const hasSpecifications =
    Boolean(
      instrument.top ||
      instrument.backAndSides ||
      instrument.finish ||
      instrument.fittings ||
      instrument.strings ||
      instrument.setup ||
      instrument.year ||
      instrument.inspiration ||
      instrument.condition ||
      instrument.conditionNotes
    );


  return (
    <>

      <article className="hs-detail-spotlight">


        {/* =====================================
            PRODUCT IMAGES
        ====================================== */}

        <section className="hs-detail-visual">

          <div className="hs-detail-stage">

            {hasImages && activeImage ? (
              <img
                src={activeImage}
                alt={`${instrument.name} ${activeViewLabel} view`}
                className="hs-detail-image"
              />
            ) : (
              <div
                className="hs-detail-image-placeholder"
                role="status"
                aria-label={`${instrument.name} photography coming soon`}
              >

                <span className="hs-detail-image-placeholder-eyebrow">
                  Harmonic Strings
                </span>


                <strong className="hs-detail-image-placeholder-title">
                  Photography Coming Soon
                </strong>


                <p className="hs-detail-image-placeholder-copy">
                  Images of this instrument will be added shortly.
                </p>

              </div>
            )}

          </div>


          {hasImages &&
          activeImage && (
            <>

              <button
                type="button"
                className="hs-detail-expand"
                onClick={() =>
                  setDetailOpen(true)
                }
                aria-label={`View ${instrument.name} in fullscreen detail`}
              >

                <Maximize2 size={16} />

                View Detail

              </button>


              <div
                className="hs-detail-views"
                aria-label="Instrument image views"
              >

                <button
                  type="button"
                  className={
                    activeView === "front"
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveView("front")
                  }
                >
                  Front
                </button>


                <button
                  type="button"
                  className={
                    activeView === "back"
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveView("back")
                  }
                >
                  Back
                </button>


                <button
                  type="button"
                  className={
                    activeView === "both"
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveView("both")
                  }
                >
                  {thirdViewLabel}
                </button>

              </div>

            </>
          )}

        </section>


        {/* =====================================
            PRODUCT INFORMATION
        ====================================== */}

        <section className="hs-detail-content">

          <div>

            <div className="hs-detail-topline">

              <p className="hs-detail-category">
                {instrument.level
                  ? `${instrument.level} Collection`
                  : "Harmonic Strings"}
              </p>


              <p className="hs-detail-stock">
                {instrument.inStock === true
                  ? "In Stock"
                  : instrument.inStock === false
                    ? "Unavailable"
                    : "Contact for Availability"}
              </p>

            </div>


            <div className="hs-detail-identity">

              <p className="hs-detail-maker">
                {instrument.maker}
              </p>


              <h1 className="hs-detail-title">
                {instrument.name}
              </h1>

            </div>


            {/* =====================================
                PRICING
            ====================================== */}

            <div className="hs-detail-price">

              {instrument.regularPrice && (
                <div className="hs-detail-price-block">

                  <p className="hs-detail-price-label">
                    Regular Price
                  </p>


                  <del className="hs-detail-price-regular">
                    {instrument.regularPrice}
                  </del>

                </div>
              )}


              <div className="hs-detail-price-block">

                <p className="hs-detail-price-label">
                  Harmonic Strings Price
                </p>


                <strong className="hs-detail-price-sale">
                  {instrument.salePrice ||
                    instrument.price ||
                    "Contact"}
                </strong>

              </div>


              {instrument.savings && (
                <span className="hs-detail-price-saving">
                  {instrument.savings}
                </span>
              )}

            </div>

          </div>


          {/* =====================================
              TABS
          ====================================== */}

          <div
            className="hs-detail-tabs"
            role="tablist"
            aria-label="Instrument information"
          >

            <button
              type="button"
              role="tab"
              aria-selected={
                activeTab === "details"
              }
              className={
                activeTab === "details"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("details")
              }
            >
              Details
            </button>


            <button
              type="button"
              role="tab"
              aria-selected={
                activeTab === "specifications"
              }
              className={
                activeTab === "specifications"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("specifications")
              }
            >
              Specifications
            </button>

          </div>


          {/* =====================================
              TAB CONTENT
          ====================================== */}

          <div className="hs-detail-tab-content">


            {/* =====================================
                DETAILS
            ====================================== */}

            {activeTab === "details" && (
              <div>

                {instrument.description && (
                  <p className="hs-detail-description">
                    {instrument.description}
                  </p>
                )}


                {hasOverview && (
                  <>

                    <p className="hs-detail-subheading">
                      Instrument Overview
                    </p>


                    <div className="hs-detail-ledger">

                      <DetailRow
                        label="Instrument"
                        value={
                          instrument.instrument
                        }
                      />


                      <DetailRow
                        label="Available Size"
                        value={sizes}
                      />


                      <DetailRow
                        label="Player Level"
                        value={
                          instrument.level
                        }
                      />


                      <DetailRow
                        label="Ideal For"
                        value={
                          instrument.idealFor
                        }
                      />

                    </div>

                  </>
                )}


                {hasCraftsmanship && (
                  <>

                    <p className="hs-detail-subheading">
                      Craftsmanship
                    </p>


                    <div className="hs-detail-ledger">

                      <DetailRow
                        label="Construction"
                        value={
                          instrument.construction
                        }
                      />


                      <DetailRow
                        label="Handwork"
                        value={
                          instrument.handwork
                        }
                      />

                    </div>

                  </>
                )}


                {toneCopy && (
                  <>

                    <p className="hs-detail-subheading">
                      Tone &amp; Playability
                    </p>


                    <p className="hs-detail-description">
                      {toneCopy}
                    </p>

                  </>
                )}

              </div>
            )}


            {/* =====================================
                SPECIFICATIONS
            ====================================== */}

            {activeTab === "specifications" && (
              <div className="hs-detail-ledger">

                {hasSpecifications ? (
                  <>

                    <DetailRow
                      label="Top"
                      value={
                        instrument.top
                      }
                    />


                    <DetailRow
                      label="Back & Sides"
                      value={
                        instrument.backAndSides
                      }
                    />


                    <DetailRow
                      label="Finish"
                      value={
                        instrument.finish
                      }
                    />


                    <DetailRow
                      label="Fittings"
                      value={
                        instrument.fittings
                      }
                    />


                    <DetailRow
                      label="Strings"
                      value={
                        instrument.strings
                      }
                    />


                    <DetailRow
                      label="Setup"
                      value={
                        instrument.setup
                      }
                    />


                    <DetailRow
                      label="Year"
                      value={
                        instrument.year
                      }
                    />


                    <DetailRow
                      label="Model Inspiration"
                      value={
                        instrument.inspiration
                      }
                    />


                    <DetailRow
                      label="Condition"
                      value={
                        instrument.condition
                      }
                    />


                    <DetailRow
                      label="Condition Notes"
                      value={
                        instrument.conditionNotes
                      }
                    />

                  </>
                ) : (
                  <p className="hs-detail-description">
                    Additional specifications will be added as they become available.
                  </p>
                )}

              </div>
            )}

          </div>

        </section>

      </article>


      {/* =====================================
          PERSONAL SERVICE
      ====================================== */}

      <section className="hs-detail-service">

        <div className="hs-detail-service-heading">

          <p className="hs-detail-service-eyebrow">
            Interested in this instrument?
          </p>


          <h2 className="hs-detail-service-title">
            Experience it before you decide.
          </h2>

        </div>


        <p className="hs-detail-service-copy">
          Harmonic Strings currently handles instrument purchases
          personally. Call us to confirm availability, ask questions,
          arrange your purchase, or inquire about an in-home trial.
        </p>


        <div className="hs-detail-service-options">

          <div className="hs-detail-service-option">

            <span>
              Call to Order
            </span>


            <strong>
              Speak directly with Harmonic Strings
            </strong>


            <p>
              We’ll answer your questions, confirm the instrument
              is available, and help you with the next steps.
            </p>

          </div>


          <div className="hs-detail-service-option">

            <span>
              In-Home Trial
            </span>


            <strong>
              Experience the{" "}
              {instrument.instrument?.toLowerCase() ||
                "instrument"}{" "}
              where you play
            </strong>


            <p>
              Ask about arranging an in-home trial before making
              your final decision.
            </p>

          </div>

        </div>


        <div className="hs-detail-service-actions">

          <a
            href="tel:+12564378447"
            className="hs-detail-service-primary"
          >
            Call 256.437.8447
          </a>


          <a
            href={`mailto:lisa@harmonicstrings.net?subject=${trialSubject}`}
            className="hs-detail-service-secondary"
          >
            Ask About an In-Home Trial
          </a>

        </div>


        <div className="hs-detail-service-contact">

          <span>
            Huntsville, Alabama
          </span>


          <span aria-hidden="true">
            ·
          </span>


          <a href="mailto:lisa@harmonicstrings.net">
            lisa@harmonicstrings.net
          </a>

        </div>

      </section>


      {/* =====================================
          FULLSCREEN IMAGE VIEWER
      ====================================== */}

      {detailOpen &&
      hasImages &&
      activeImage && (
        <div
          className="product-detail-viewer"
          role="dialog"
          aria-modal="true"
          aria-label={`${instrument.name} fullscreen detail view`}
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              setDetailOpen(false);
            }
          }}
        >

          <button
            type="button"
            className="product-detail-viewer-close"
            onClick={() =>
              setDetailOpen(false)
            }
            aria-label="Close detail view"
          >

            <X
              size={24}
              strokeWidth={1.5}
            />


            <span>
              Close
            </span>

          </button>


          <div className="product-detail-viewer-heading">

            <p>
              {instrument.level
                ? `${instrument.level} Collection`
                : "Harmonic Strings"}
            </p>


            <h2>
              {instrument.name}
            </h2>

          </div>


          <div className="product-detail-viewer-stage">

            <img
              src={activeImage}
              alt={`${instrument.name} ${activeViewLabel} fullscreen view`}
              className="product-detail-viewer-image"
            />

          </div>


          <div className="product-detail-viewer-controls">

            <button
              type="button"
              className={
                activeView === "front"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveView("front")
              }
            >
              Front
            </button>


            <button
              type="button"
              className={
                activeView === "back"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveView("back")
              }
            >
              Back
            </button>


            <button
              type="button"
              className={
                activeView === "both"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveView("both")
              }
            >
              {thirdViewLabel}
            </button>

          </div>


          <p className="product-detail-viewer-note">
            High-resolution instrument view
          </p>

        </div>
      )}

    </>
  );
}


export default InstrumentShowcase;