import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";


function ProductCard({
  image,
  name,
  level,
  price,
  regularPrice,
  salePrice,
  savings,
  description,
  href = "#",

  /* =====================================
     GENERIC PRODUCT LABELS

     Instruments:
     viewLabel="View Instrument"
     productType="Violin" / "Viola" / "Cello"

     Cases:
     viewLabel="View Case"
     productType="Case"

     Bows:
     viewLabel="View Bow"
     productType="Bow"

     Accessories:
     viewLabel="View Accessory"
     productType="Accessory"
  ====================================== */

  viewLabel = "View Instrument",
  productType = "Violin",

  /* =====================================
     PRODUCT IMAGE STAGE

     default:
     Existing ProductCard appearance

     instrument:
     Rich dark luxury stage

     light:
     Luxury ivory / stone studio

     warm:
     Warm neutral studio

     dark:
     Luxury light stage for very dark
     products such as black / navy items
  ====================================== */

  stage = "default",
}) {
  const isSale =
    Boolean(regularPrice) &&
    Boolean(salePrice);


  return (
    <article
      className={`violin-product-card violin-product-card--${stage}`}
    >

      {/* =====================================
          PRODUCT IMAGE STAGE
      ====================================== */}

      <Link
        to={href}
        className={`violin-product-card-visual violin-product-card-visual--${stage}`}
        aria-label={`${viewLabel}: ${name}`}
      >

        <div
          className="violin-product-card-light"
          aria-hidden="true"
        />


        {/* =====================================
            SALE BADGE
        ====================================== */}

        {isSale && savings && (
          <span className="violin-product-card-sale">
            {savings}
          </span>
        )}


        {/* =====================================
            PRODUCT IMAGE
        ====================================== */}

        <div className="violin-product-card-image-stage">

          {image && (
            <img
              src={image}
              alt={name}
              className="violin-product-card-image"
              loading="lazy"
              decoding="async"
            />
          )}

        </div>


        {/* =====================================
            HOVER VIEW LABEL
        ====================================== */}

        <div className="violin-product-card-view">

          <span>
            {viewLabel}
          </span>

          <ArrowUpRight
            size={17}
            strokeWidth={1.7}
          />

        </div>

      </Link>


      {/* =====================================
          PRODUCT INFORMATION
      ====================================== */}

      <div className="violin-product-card-content">

        {/* =====================================
            COLLECTION / PRODUCT TYPE
        ====================================== */}

        <div className="violin-product-card-meta">

          <p className="violin-product-card-level">
            {level}
          </p>

          <span
            className="violin-product-card-meta-line"
            aria-hidden="true"
          />

          <p>
            {productType}
          </p>

        </div>


        {/* =====================================
            PRODUCT NAME
        ====================================== */}

        <h3>

          <Link to={href}>
            {name}
          </Link>

        </h3>


        {/* =====================================
            DESCRIPTION
        ====================================== */}

        {description && (
          <p className="violin-product-card-description">
            {description}
          </p>
        )}


        {/* =====================================
            PRICE
        ====================================== */}

        <div className="violin-product-card-price">

          {isSale ? (
            <>
              <del>
                {regularPrice}
              </del>

              <strong className="violin-product-card-sale-price">
                {salePrice}
              </strong>
            </>
          ) : (
            <strong className="violin-product-card-standard-price">
              {price}
            </strong>
          )}

        </div>


        {/* =====================================
            EXPLORE LINK
        ====================================== */}

        <Link
          to={href}
          className="violin-product-card-link"
        >

          Explore

          <ArrowUpRight
            size={15}
            strokeWidth={1.7}
          />

        </Link>

      </div>

    </article>
  );
}


export default ProductCard;