import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import CaseShowcase from "../components/CaseShowcase";
import { cases } from "../data/cases";


function CaseDetailPage() {
  const { slug } = useParams();

  const caseItem = cases.find(
    (item) => item.slug === slug
  );


  /* =====================================
     PRODUCT NOT FOUND
  ====================================== */

  if (!caseItem) {
    return (
      <main
        style={{
          minHeight: "100vh",
          padding: "220px 7vw 120px",
          background: "#f3f0ea",
          color: "#171717",
        }}
      >
        <div
          style={{
            width: "min(100%, 1500px)",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              margin: "0 0 16px",
              color: "#8d1d1d",
              fontSize: "11px",
              fontWeight: "800",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Harmonic Strings
          </p>


          <h1
            style={{
              margin: "0 0 24px",
              fontFamily:
                'Georgia, "Times New Roman", serif',
              fontSize: "clamp(48px, 7vw, 90px)",
              fontWeight: "400",
            }}
          >
            Case Not Found
          </h1>


          <Link
            to="/cases"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "9px",
              color: "#171717",
              textDecoration: "none",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            <ArrowLeft size={17} />

            Return to Cases
          </Link>
        </div>
      </main>
    );
  }


  /* =====================================
     RETURN CATEGORY
  ====================================== */

  const getCollectionHash = () => {
    if (
      caseItem.instrument === "Violin" &&
      caseItem.caseType === "Oblong"
    ) {
      return "violin-oblong";
    }

    if (
      caseItem.instrument === "Violin" &&
      caseItem.caseType === "Shaped"
    ) {
      return "violin-shaped";
    }

    if (
      caseItem.instrument === "Violin" &&
      caseItem.caseType === "Multi-Instrument"
    ) {
      return "violin-multi";
    }

    if (
      caseItem.instrument === "Viola" &&
      caseItem.caseType === "Oblong"
    ) {
      return "viola-oblong";
    }

    if (
      caseItem.instrument === "Viola" &&
      caseItem.caseType === "Shaped"
    ) {
      return "viola-shaped";
    }

    if (
      caseItem.instrument === "Viola" &&
      caseItem.caseType === "Multi-Instrument"
    ) {
      return "viola-multi";
    }

    if (
      caseItem.instrument === "Cello" &&
      caseItem.caseType === "Hard"
    ) {
      return "cello-hard";
    }

    if (
      caseItem.instrument === "Cello" &&
      caseItem.caseType === "Soft / Gig Bag"
    ) {
      return "cello-soft";
    }

    return "";
  };


  const getCategoryLabel = () => {
    if (
      caseItem.instrument === "Cello" &&
      caseItem.caseType === "Soft / Gig Bag"
    ) {
      return "Cello Soft Cases & Gig Bags";
    }

    if (
      caseItem.instrument &&
      caseItem.caseType
    ) {
      return `${caseItem.caseType} ${caseItem.instrument} Cases`;
    }

    return "Cases";
  };


  return (
    <main
      className="product-detail-page"
      style={{
        minHeight: "100vh",
        padding: "205px 7vw 120px",
        background:
          "linear-gradient(180deg, #ebe7df 0%, #f4f1eb 100%)",
      }}
    >

      {/* =====================================
          BACK TO CASE COLLECTION
      ====================================== */}

      <div
        style={{
          width: "min(100%, 1500px)",
          margin: "0 auto 28px",
        }}
      >
        <Link
          to={`/cases#${getCollectionHash()}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "9px",
            color: "rgba(20, 20, 20, 0.58)",
            textDecoration: "none",
            fontSize: "10px",
            fontWeight: "800",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
          }}
        >
          <ArrowLeft
            size={15}
            strokeWidth={1.8}
          />

          Back to {getCategoryLabel()}
        </Link>
      </div>


      {/* =====================================
          IMMERSIVE CASE SHOWCASE
      ====================================== */}

      <CaseShowcase caseItem={caseItem} />

    </main>
  );
}


export default CaseDetailPage;
