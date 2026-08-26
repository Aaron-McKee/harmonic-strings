import {
  useEffect,
  useState,
} from "react";

import {
  Maximize2,
  X,
} from "lucide-react";

import "../styles/product-detail.css";


function BowShowcase({ bow }) {
  const product = bow || {
    name: "Bow",
    maker: "Harmonic Strings",
    model: "Bow",
    category: "Bow Collection",

    instrument: "Violin",
    material: null,

    image: null,
    fullImage: null,
    frogTipImage: null,

    regularPrice: null,
    salePrice: null,
    price: null,
    savings: null,

    description:
      "A carefully selected bow chosen for balance, response, control, and musical expression.",

    features: [],

    stick: null,
    frog: null,
    mounting: null,
    thumbGrip: null,
    inlays: null,
    tip: null,
    hair: null,
    weight: null,
    length: null,
    handlingCharacter: null,
    setup: null,

    inStock: null,
  };


  const [activeView, setActiveView] =
    useState("full");

  const [activeTab, setActiveTab] =
    useState("details");

  const [detailOpen, setDetailOpen] =
    useState(false);


  const fullImage =
    product.fullImage ||
    product.image ||
    product.frogTipImage ||
    null;

  const frogTipImage =
    product.frogTipImage ||
    product.fullImage ||
    product.image ||
    null;

  const activeImage =
    activeView === "frogTip"
      ? frogTipImage
      : fullImage;

  const activeViewLabel =
    activeView === "frogTip"
      ? "Frog & Tip"
      : "Full Bow";


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


  const measurement =
    [
      product.weight,
      product.length,
    ]
      .filter(Boolean)
      .join(" · ");

  const measurementLabel =
    product.weight && product.length
      ? "Weight & Length"
      : product.weight
        ? "Weight"
        : "Length";


  const collectionLabel =
    product.category ||
    [
      product.material,
      product.instrument,
      "Bow",
    ]
      .filter(Boolean)
      .join(" ");


  return (
    <>
      <article className="hs-detail-spotlight">

        <section className="hs-detail-visual">

          <div className="hs-detail-stage">

            {activeImage && (
              <img
                src={activeImage}
                alt={`${product.name} ${activeViewLabel} view`}
                className="hs-detail-image"
              />
            )}

          </div>


          <button
            type="button"
            className="hs-detail-expand"
            onClick={() =>
              setDetailOpen(true)
            }
            aria-label={`View ${product.name} in fullscreen detail`}
          >
            <Maximize2 size={16} />

            View Detail
          </button>


          <div
            className="hs-detail-views"
            aria-label="Bow image views"
          >

            <button
              type="button"
              className={
                activeView === "full"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveView("full")
              }
            >
              Full Bow
            </button>


            <button
              type="button"
              className={
                activeView === "frogTip"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveView("frogTip")
              }
            >
              Frog &amp; Tip
            </button>

          </div>

        </section>


        <section className="hs-detail-content">

          <div>

            <div className="hs-detail-topline">

              <p className="hs-detail-category">
                {collectionLabel}
              </p>


              {typeof product.inStock === "boolean" && (
                <p className="hs-detail-stock">
                  {product.inStock
                    ? "In Stock"
                    : "Currently Unavailable"}
                </p>
              )}

            </div>


            <div className="hs-detail-identity">

              <p className="hs-detail-maker">
                {product.maker}
              </p>


              <h1 className="hs-detail-title">
                {product.model}

                <em>
                  {" "}
                  {product.instrument
                    ? `${product.instrument} Bow`
                    : "Bow"}
                </em>
              </h1>

            </div>


            <div className="hs-detail-price">

              {product.regularPrice && (
                <div className="hs-detail-price-block">

                  <p className="hs-detail-price-label">
                    Regular Price
                  </p>

                  <del className="hs-detail-price-regular">
                    {product.regularPrice}
                  </del>

                </div>
              )}


              <div className="hs-detail-price-block">

                <p className="hs-detail-price-label">
                  Harmonic Strings Price
                </p>

                <strong className="hs-detail-price-sale">
                  {product.salePrice ||
                    product.price ||
                    "Contact"}
                </strong>

              </div>


              {product.savings && (
                <span className="hs-detail-price-saving">
                  {product.savings}
                </span>
              )}

            </div>

          </div>


          <div
            className="hs-detail-tabs"
            role="tablist"
            aria-label="Bow information"
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
                activeTab ===
                "specifications"
              }
              className={
                activeTab ===
                "specifications"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab(
                  "specifications"
                )
              }
            >
              Specifications
            </button>

          </div>


          <div className="hs-detail-tab-content">

            {activeTab === "details" && (
              <div>

                <p className="hs-detail-description">
                  {product.description}
                </p>


                {product.features?.length > 0 && (
                  <>
                    <p className="hs-detail-subheading">
                      Features
                    </p>

                    <ol className="hs-detail-feature-list">
                      {product.features.map(
                        (feature, index) => (
                          <li
                            className="hs-detail-feature"
                            key={`${feature}-${index}`}
                          >
                            <span className="hs-detail-feature-number">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="hs-detail-feature-text">
                              {feature}
                            </span>
                          </li>
                        )
                      )}
                    </ol>
                  </>
                )}


                <p className="hs-detail-subheading">
                  Bow Overview
                </p>


                <div className="hs-detail-ledger">

                  <DetailRow
                    label="Instrument"
                    value={
                      product.instrument
                    }
                  />

                  <DetailRow
                    label="Material"
                    value={
                      product.material
                    }
                  />

                  <DetailRow
                    label="Setup"
                    value={
                      product.setup
                    }
                  />

                  <DetailRow
                    label="Handling Character"
                    value={
                      product.handlingCharacter
                    }
                    tonal
                  />

                </div>

              </div>
            )}


            {activeTab ===
              "specifications" && (
              <div className="hs-detail-ledger">

                <DetailRow
                  label="Instrument"
                  value={
                    product.instrument
                  }
                />

                <DetailRow
                  label="Material"
                  value={
                    product.material
                  }
                />

                <DetailRow
                  label="Stick"
                  value={
                    product.stick
                  }
                />

                <DetailRow
                  label="Frog"
                  value={
                    product.frog
                  }
                />

                <DetailRow
                  label="Mounting"
                  value={
                    product.mounting
                  }
                />

                <DetailRow
                  label="Thumb Grip"
                  value={
                    product.thumbGrip
                  }
                />

                <DetailRow
                  label="Inlays"
                  value={
                    product.inlays
                  }
                />

                <DetailRow
                  label="Tip"
                  value={
                    product.tip
                  }
                />

                <DetailRow
                  label="Hair"
                  value={
                    product.hair
                  }
                />

                <DetailRow
                  label={measurementLabel}
                  value={
                    measurement || null
                  }
                />

                <DetailRow
                  label="Handling Character"
                  value={
                    product.handlingCharacter
                  }
                  tonal
                />

                <DetailRow
                  label="Setup"
                  value={
                    product.setup
                  }
                />

              </div>
            )}

          </div>

        </section>

      </article>


      <section className="hs-detail-service">

        <div className="hs-detail-service-heading">

          <p className="hs-detail-service-eyebrow">
            Interested in this bow?
          </p>


          <h2 className="hs-detail-service-title">
            Experience it with your instrument.
          </h2>

        </div>


        <p className="hs-detail-service-copy">
          Harmonic Strings currently handles bow
          purchases personally. Call us to confirm
          availability, ask questions, arrange your
          purchase, or inquire about trying the bow
          with your instrument.
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
              We’ll answer your questions, confirm
              availability, and help you with the
              next steps.
            </p>

          </div>


          <div className="hs-detail-service-option">

            <span>
              Bow Trial
            </span>

            <strong>
              Experience the bow with your instrument
            </strong>

            <p>
              Ask about arranging an opportunity to
              experience the bow before making your
              final decision.
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
            href="mailto:lisa@harmonicstrings.net?subject=Bow%20Trial%20Inquiry"
            className="hs-detail-service-secondary"
          >
            Ask About a Bow Trial
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


      {detailOpen && (
        <div
          className="product-detail-viewer"
          role="dialog"
          aria-modal="true"
          aria-label={`${product.name} fullscreen detail view`}
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
              {collectionLabel}
            </p>

            <h2>
              {product.name}
            </h2>

          </div>


          <div className="product-detail-viewer-stage">

            {activeImage && (
              <img
                src={activeImage}
                alt={`${product.name} ${activeViewLabel} fullscreen view`}
                className="product-detail-viewer-image"
              />
            )}

          </div>


          <div className="product-detail-viewer-controls">

            <button
              type="button"
              className={
                activeView === "full"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveView("full")
              }
            >
              Full Bow
            </button>


            <button
              type="button"
              className={
                activeView === "frogTip"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveView("frogTip")
              }
            >
              Frog &amp; Tip
            </button>

          </div>


          <p className="product-detail-viewer-note">
            High-resolution bow detail view
          </p>

        </div>
      )}

    </>
  );
}


export default BowShowcase;
