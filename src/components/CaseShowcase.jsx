import {
  useEffect,
  useState,
} from "react";

import {
  Backpack,
  Gauge,
  Layers3,
  LockKeyhole,
  Maximize2,
  Music2,
  PackageOpen,
  ShieldCheck,
  X,
} from "lucide-react";

import "../styles/product-detail.css";
import "../styles/case-showcase.css";


function CaseShowcase({ caseItem }) {
  const product = caseItem || {
    name: "Instrument Case",
    maker: "Harmonic Strings",
    model: "Instrument Case",
    category: "Cases",

    instrument: "Violin",
    caseType: "Oblong",

    image: null,
    openImage: null,
    closedImage: null,
    combinedImage: null,

    regularPrice: null,
    salePrice: null,
    price: null,
    savings: null,

    description: "",
    descriptionParagraphs: [],
    keyFeatures: [],

    size: null,
    availableSizes: [],

    construction: null,
    shell: null,
    exterior: null,
    interior: null,
    bowCapacity: null,
    extraFeatures: null,
    musicPocket: null,
    closure: null,
    carrying: null,
    color: null,
    weight: null,
    protection: null,

    inStock: true,
  };


  const [activeView, setActiveView] =
    useState("both");

  const [activeTab, setActiveTab] =
    useState("details");

  const [detailOpen, setDetailOpen] =
    useState(false);


  const exteriorImage =
    product.closedImage ||
    product.image ||
    product.combinedImage ||
    product.openImage ||
    null;


  const interiorImage =
    product.openImage ||
    product.image ||
    product.combinedImage ||
    product.closedImage ||
    null;


  const bothViewsImage =
    product.combinedImage ||
    product.image ||
    product.closedImage ||
    product.openImage ||
    null;


  const activeImage =
    activeView === "interior"
      ? interiorImage
      : activeView === "both"
        ? bothViewsImage
        : exteriorImage;


  const descriptions =
    product.descriptionParagraphs?.length
      ? product.descriptionParagraphs
      : product.description
        ? [product.description]
        : [];


  const sizes =
    product.availableSizes?.length
      ? product.availableSizes.join(" · ")
      : product.size || null;


  const featureIcons = {
    shield: ShieldCheck,
    interior: PackageOpen,
    storage: Layers3,
    music: Music2,
    humidity: Gauge,
    transport: Backpack,
    security: LockKeyhole,
  };


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


  const SpecRow = ({
    label,
    value,
  }) => {
    if (!value) {
      return null;
    }

    return (
      <div className="hs-detail-ledger-row">

        <span>
          {label}
        </span>

        <strong>
          {value}
        </strong>

      </div>
    );
  };


  return (
    <>
      <article className="hs-detail-spotlight">

        <section className="hs-detail-visual">

          <div className="hs-detail-stage">

            {activeImage && (
              <img
                src={activeImage}
                alt={`${product.name} ${activeView} view`}
                className="hs-detail-image"
              />
            )}

          </div>


          {activeImage && (
            <>
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
                aria-label="Case image views"
              >

                <button
                  type="button"
                  className={
                    activeView === "exterior"
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveView("exterior")
                  }
                >
                  Exterior
                </button>


                <button
                  type="button"
                  className={
                    activeView === "interior"
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveView("interior")
                  }
                >
                  Interior
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
                  Both Views
                </button>

              </div>
            </>
          )}

        </section>


        <section className="hs-detail-content">

          <div>

            <div className="hs-detail-topline">

              <p className="hs-detail-category">
                {product.category}
              </p>


              <p className="hs-detail-stock">
                {product.inStock === true
                  ? "In Stock"
                  : product.inStock === false
                    ? "Currently Unavailable"
                    : "Contact for Availability"}
              </p>

            </div>


            <div className="hs-detail-identity">

              <p className="hs-detail-maker">
                {product.maker}
              </p>


              <h1 className="hs-detail-title">
                {product.model}{" "}
                <em>
                  {product.instrument} Case
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
            aria-label="Case information"
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

                {descriptions.map(
                  (paragraph, index) => (
                    <p
                      key={index}
                      className="hs-detail-description"
                    >
                      {paragraph}
                    </p>
                  )
                )}


                {product.keyFeatures?.length >
                  0 && (
                  <section className="hs-case-features">

                    <p className="hs-case-features-eyebrow">
                      Key Features
                    </p>


                    <h2 className="hs-case-features-title">
                      Built around protection
                      and practicality.
                    </h2>


                    <div
                      className="hs-case-features-rule"
                      aria-hidden="true"
                    >
                      <span />
                    </div>


                    <div className="hs-case-feature-grid">

                      {product.keyFeatures.map(
                        (
                          feature,
                          index
                        ) => {
                          const Icon =
                            featureIcons[
                              feature.icon
                            ] ||
                            ShieldCheck;

                          return (
                            <article
                              className="hs-case-feature-card"
                              key={`${feature.title}-${index}`}
                            >

                              <div className="hs-case-feature-icon">

                                <Icon
                                  size={31}
                                  strokeWidth={1.35}
                                />

                              </div>


                              <h3>
                                {feature.title}
                              </h3>


                              <span
                                className="hs-case-feature-divider"
                                aria-hidden="true"
                              />


                              <p>
                                {feature.description}
                              </p>

                            </article>
                          );
                        }
                      )}

                    </div>

                  </section>
                )}

              </div>
            )}


            {activeTab ===
              "specifications" && (
              <div className="hs-detail-ledger">

                <SpecRow
                  label="Instrument"
                  value={
                    product.instrument
                  }
                />

                <SpecRow
                  label="Case Type"
                  value={
                    product.caseStyle ||
                    product.caseType
                  }
                />

                <SpecRow
                  label="Available Sizes"
                  value={sizes}
                />

                <SpecRow
                  label="Shell"
                  value={
                    product.shell ||
                    product.construction
                  }
                />

                <SpecRow
                  label="Exterior"
                  value={
                    product.exterior
                  }
                />

                <SpecRow
                  label="Interior"
                  value={
                    product.interior
                  }
                />

                <SpecRow
                  label="Bow Holders"
                  value={
                    product.bowCapacity
                  }
                />

                <SpecRow
                  label="Music Pocket"
                  value={
                    product.musicPocket
                  }
                />

                <SpecRow
                  label="Closure"
                  value={
                    product.closure
                  }
                />

                <SpecRow
                  label="Carrying"
                  value={
                    product.carrying
                  }
                />

                <SpecRow
                  label="Extra Features"
                  value={
                    product.extraFeatures
                  }
                />

                <SpecRow
                  label="Color"
                  value={
                    product.color
                  }
                />

                <SpecRow
                  label="Weight"
                  value={
                    product.weight
                  }
                />

                <SpecRow
                  label="Protection"
                  value={
                    product.protection
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
            Personal Service
          </p>


          <h2 className="hs-detail-service-title">
            Interested in this case?
          </h2>

        </div>


        <p className="hs-detail-service-copy">
          Contact Harmonic Strings to confirm
          availability, discuss sizing and fit,
          ask questions about protection and storage,
          or arrange your purchase personally.
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
              We’ll confirm availability and help
              make sure the case is appropriate for
              your instrument.
            </p>

          </div>


          <div className="hs-detail-service-option">

            <span>
              Case Questions
            </span>

            <strong>
              Make sure the fit is right
            </strong>

            <p>
              Ask about sizing, instrument fit,
              storage, protection, carrying options,
              or other case features.
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
            href={`mailto:lisa@harmonicstrings.net?subject=${encodeURIComponent(
              `${product.name} Inquiry`
            )}`}
            className="hs-detail-service-secondary"
          >
            Ask About This Case
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


      {detailOpen &&
      activeImage && (
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
              {product.category}
            </p>

            <h2>
              {product.name}
            </h2>

          </div>


          <div className="product-detail-viewer-stage">

            <img
              src={activeImage}
              alt={`${product.name} ${activeView} fullscreen view`}
              className="product-detail-viewer-image"
            />

          </div>


          <div className="product-detail-viewer-controls">

            <button
              type="button"
              className={
                activeView === "exterior"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveView("exterior")
              }
            >
              Exterior
            </button>


            <button
              type="button"
              className={
                activeView === "interior"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveView("interior")
              }
            >
              Interior
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
              Both Views
            </button>

          </div>


          <p className="product-detail-viewer-note">
            High-resolution case detail view
          </p>

        </div>
      )}

    </>
  );
}


export default CaseShowcase;