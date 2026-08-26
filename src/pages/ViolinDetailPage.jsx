import {
  Link,
  useParams,
} from "react-router-dom";

import {
  ArrowLeft,
} from "lucide-react";

import ViolinShowcase from "../components/ViolinShowcase";
import { violins } from "../data/violins";

function ViolinDetailPage() {
  const { slug } =
    useParams();

  const violin =
    violins.find(
      (item) =>
        item.slug === slug
    );

  if (!violin) {
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
            Instrument Not Found
          </h1>

          <Link
            to="/violins"
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
            Return to Violins
          </Link>
        </div>
      </main>
    );
  }

  const getCollectionHash = () => {
    switch (violin.level) {
      case "Beginner":
        return "beginner";

      case "Intermediate":
        return "intermediate";

      case "Advanced":
        return "advanced";

      case "Fine & Antique":
        return "fine-antique";

      default:
        return "";
    }
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
      <div
        style={{
          width: "min(100%, 1500px)",
          margin: "0 auto 28px",
        }}
      >
        <Link
          to={`/violins#${getCollectionHash()}`}
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

          Back to {violin.level} Violins
        </Link>
      </div>

      <ViolinShowcase
        violin={violin}
      />

    </main>
  );
}

export default ViolinDetailPage;
