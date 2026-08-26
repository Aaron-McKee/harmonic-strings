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


function AccessoryShowcase({ accessory }) {
  const product = accessory || {
    name: "Harmonic Strings Accessory",

    brand: null,
    maker: null,
    model: null,

    category: "Accessory",
    instrument: null,
    level: null,

    image: null,
    secondaryImage: null,
    detailImage: null,

    price: null,
    regularPrice: null,
    salePrice: null,
    savings: null,

    description:
      "A carefully selected accessory chosen to support musicians in practice, lessons, rehearsals, and performance.",

    compatibility: null,
    idealFor: null,
    performanceNotes: null,

    specifications: [],

    condition: null,
    conditionNotes: null,

    inStock: null,
  };


  /* =====================================
     IMAGE VIEWS
  ====================================== */

  const imageViews = [
    {
      key: "primary",
      label: "Product",
      image: product.image,
    },
    {
      key: "secondary",
      label: "Alternate",
      image: product.secondaryImage,
    },
    {
      key: "detail",
      label: "Detail",
      image: product.detailImage,
    },
  ].filter(
    (view) => Boolean(view.image)
  );


  const hasImages =
    imageViews.length > 0;


  /* =====================================
     STATE
  ====================================== */

  const [activeView, setActiveView] =
    useState(
      imageViews[0]?.key ||
      "primary"
    );


  const [activeTab, setActiveTab] =
    useState("details");


  const [detailOpen, setDetailOpen] =
    useState(false);


  /* =====================================
     ACTIVE IMAGE
  ====================================== */

  const activeImageView =
    imageViews.find(
      (view) =>
        view.key === activeView
    ) ||
    imageViews[0] ||
    null;


  const activeImage =
    activeImageView?.image ||
    null;


  const activeViewLabel =
    activeImageView?.label ||
    "Product";


  /* =====================================
     KEEP IMAGE VIEW VALID
  ====================================== */

  useEffect(() => {
    if (!imageViews.length) {
      return;
    }


    const activeViewExists =
      imageViews.some(
        (view) =>
          view.key === activeView
      );


    if (!activeViewExists) {
      setActiveView(
        imageViews[0].key
      );
    }
  }, [
    activeView,
    product.image,
    product.secondaryImage,
    product.detailImage,
  ]);


  /* =====================================
     FULLSCREEN VIEWER
  ====================================== */

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


  /* =====================================
     DETAIL ROW
  ====================================== */

  const DetailRow = ({
    label,
    value,
    tonal = false,
  }) => {
    if (
      value === null ||
      value === undefined ||
      value === ""
    ) {
      return null;
    }


    const displayValue =
      Array.isArray(value)
        ? value.join(" · ")
        : value;


    if (!displayValue) {
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
          {displayValue}
        </strong>
      </div>
    );
  };


  /* =====================================
     DISPLAY VALUES
  ====================================== */

  const brand =
    product.brand ||
    product.maker ||
    null;


  const categoryLabel =
    product.category ||
    "Accessory";


  const inquirySubject =
    encodeURIComponent(
      `${product.name || "Accessory"} Inquiry`
    );


  /* =====================================
     FLEXIBLE SPECIFICATIONS
  ====================================== */

  const specificationRows =
    Array.isArray(
      product.specifications
    )
      ? product.specifications.filter(
          (specification) =>
            specification &&
            specification.label &&
            specification.value !== null &&
            specification.value !== undefined &&
            specification.value !== ""
        )
      : [];


  /* =====================================
     CONTENT FLAGS
  ====================================== */

  const hasOverview =
    Boolean(
      product.model ||
      product.instrument ||
      product.level ||
      product.compatibility ||
      product.idealFor
    );


  const hasSpecifications =
    Boolean(
      specificationRows.length ||
      product.condition ||
      product.conditionNotes
    );


  return (
    <>

      {/* =====================================
          IMAGE + DETAILS SPOTLIGHT
      ====================================== */}

      <article className="hs-detail-spotlight">


        {/* =====================================
            LEFT — ACCESSORY IMAGE
        ====================================== */}

        <section className="hs-detail-visual">

          <div className="hs-detail-stage">

            {hasImages &&
            activeImage ? (
              <img
                src={activeImage}
                alt={`${product.name} ${activeViewLabel} view`}
                className="hs-detail-image"
              />
            ) : (
              <div
                className="hs-detail-image-placeholder"
                role="status"
                aria-label={`${product.name} photography coming soon`}
              >
                <span className="hs-detail-image-placeholder-eyebrow">
                  Harmonic Strings
                </span>


                <strong className="hs-detail-image-placeholder-title">
                  Photography Coming Soon
                </strong>


                <p className="hs-detail-image-placeholder-copy">
                  Images of this accessory will be added shortly.
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
                aria-label={`View ${product.name} in fullscreen detail`}
              >
                <Maximize2 size={16} />

                View Detail
              </button>


              {imageViews.length > 1 && (
                <div
                  className="hs-detail-views"
                  aria-label="Accessory image views"
                >

                  {imageViews.map(
                    (view) => (
                      <button
                        key={view.key}
                        type="button"
                        className={
                          activeView ===
                          view.key
                            ? "active"
                            : ""
                        }
                        onClick={() =>
                          setActiveView(
                            view.key
                          )
                        }
                      >
                        {view.label}
                      </button>
                    )
                  )}

                </div>
              )}

            </>
          )}

        </section>


        {/* =====================================
            RIGHT — DETAILS / SPECIFICATIONS
        ====================================== */}

        <section className="hs-detail-content">

          <div>

            <div className="hs-detail-topline">

              <p className="hs-detail-category">
                {categoryLabel}
              </p>


              <p className="hs-detail-stock">
                {product.inStock === true
                  ? "In Stock"
                  : product.inStock === false
                    ? "Unavailable"
                    : "Contact for Availability"}
              </p>

            </div>


            <div className="hs-detail-identity">

              {brand && (
                <p className="hs-detail-maker">
                  {brand}
                </p>
              )}


              <h1 className="hs-detail-title">
                {product.name}
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


          {/* =====================================
              TABS
          ====================================== */}

          <div
            className="hs-detail-tabs"
            role="tablist"
            aria-label="Accessory information"
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


          {/* =====================================
              TAB CONTENT
          ====================================== */}

          <div className="hs-detail-tab-content">


            {/* =====================================
                DETAILS
            ====================================== */}

            {activeTab === "details" && (
              <div>

                {product.description && (
                  <p className="hs-detail-description">
                    {product.description}
                  </p>
                )}


                {hasOverview && (
                  <>

                    <p className="hs-detail-subheading">
                      Accessory Overview
                    </p>


                    <div className="hs-detail-ledger">

                      <DetailRow
                        label="Model"
                        value={
                          product.model
                        }
                      />


                      <DetailRow
                        label="Instrument"
                        value={
                          product.instrument
                        }
                      />


                      <DetailRow
                        label="Player Level"
                        value={
                          product.level
                        }
                      />


                      <DetailRow
                        label="Compatibility"
                        value={
                          product.compatibility
                        }
                      />


                      <DetailRow
                        label="Ideal For"
                        value={
                          product.idealFor
                        }
                      />

                    </div>

                  </>
                )}


                {product.performanceNotes && (
                  <>

                    <p className="hs-detail-subheading">
                      Use &amp; Performance
                    </p>


                    <p className="hs-detail-description">
                      {product.performanceNotes}
                    </p>

                  </>
                )}

              </div>
            )}


            {/* =====================================
                SPECIFICATIONS
            ====================================== */}

            {activeTab ===
              "specifications" && (
              <div className="hs-detail-ledger">

                {hasSpecifications ? (
                  <>

                    {specificationRows.map(
                      (
                        specification,
                        index
                      ) => (
                        <DetailRow
                          key={`${specification.label}-${index}`}
                          label={
                            specification.label
                          }
                          value={
                            specification.value
                          }
                        />
                      )
                    )}


                    <DetailRow
                      label="Condition"
                      value={
                        product.condition
                      }
                    />


                    <DetailRow
                      label="Condition Notes"
                      value={
                        product.conditionNotes
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
          ACCESSORY SERVICE
      ====================================== */}

      <section className="hs-detail-service">

        <div className="hs-detail-service-heading">

          <p className="hs-detail-service-eyebrow">
            Interested in this accessory?
          </p>


          <h2 className="hs-detail-service-title">
            Make sure it&apos;s right for you.
          </h2>

        </div>


        <p className="hs-detail-service-copy">
          Call or email Harmonic Strings to confirm availability,
          ask product questions, or get help choosing an accessory
          that works with your instrument and playing needs.
        </p>


        <div className="hs-detail-service-options">

          <div className="hs-detail-service-option">

            <span>
              Product Questions
            </span>


            <strong>
              Speak directly with Harmonic Strings
            </strong>


            <p>
              Ask about availability, product details,
              features, or anything else you would like
              to know before purchasing.
            </p>

          </div>


          <div className="hs-detail-service-option">

            <span>
              Compatibility Help
            </span>


            <strong>
              Find the right accessory for your instrument
            </strong>


            <p>
              Contact us if you are unsure about sizing,
              compatibility, or which option best fits
              your playing needs.
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
            href={`mailto:lisa@harmonicstrings.net?subject=${inquirySubject}`}
            className="hs-detail-service-secondary"
          >
            Ask About This Accessory
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
          FULLSCREEN VIEWER
      ====================================== */}

      {detailOpen &&
        hasImages &&
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
              {categoryLabel}
            </p>


            <h2>
              {product.name}
            </h2>

          </div>


          <div className="product-detail-viewer-stage">

            <img
              src={activeImage}
              alt={`${product.name} ${activeViewLabel} fullscreen view`}
              className="product-detail-viewer-image"
            />

          </div>


          {imageViews.length > 1 && (
            <div className="product-detail-viewer-controls">

              {imageViews.map(
                (view) => (
                  <button
                    key={view.key}
                    type="button"
                    className={
                      activeView ===
                      view.key
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      setActiveView(
                        view.key
                      )
                    }
                  >
                    {view.label}
                  </button>
                )
              )}

            </div>
          )}


          <p className="product-detail-viewer-note">
            High-resolution accessory detail view
          </p>

        </div>
      )}

    </>
  );
}


export default AccessoryShowcase;