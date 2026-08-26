import {
  Link,
  useParams,
} from "react-router-dom";

import {
  ArrowLeft,
} from "lucide-react";

import AccessoryShowcase from "../components/AccessoryShowcase";

import {
  accessories,
  violinAccessories,
  violaAccessories,
  celloAccessories,
  otherAccessories,
  studyMaterials,
} from "../data/accessories";


function AccessoriesDetailPage() {
  const { slug } =
    useParams();


  const accessory =
    accessories.find(
      (item) =>
        item.slug === slug
    );


  /* =====================================
     PRODUCT NOT FOUND
  ====================================== */

  if (!accessory) {
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
              fontSize:
                "clamp(48px, 7vw, 90px)",
              fontWeight: "400",
            }}
          >
            Accessory Not Found
          </h1>


          <Link
            to="/accessories"
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

            Return to Accessories
          </Link>

        </div>
      </main>
    );
  }


  /* =====================================
     COLLECTION SECTION
  ====================================== */

  const getCollectionHash = () => {
    if (
      violinAccessories.some(
        (item) =>
          item.slug === accessory.slug
      )
    ) {
      return "violin-accessories";
    }


    if (
      violaAccessories.some(
        (item) =>
          item.slug === accessory.slug
      )
    ) {
      return "viola-accessories";
    }


    if (
      celloAccessories.some(
        (item) =>
          item.slug === accessory.slug
      )
    ) {
      return "cello-accessories";
    }


    if (
      otherAccessories.some(
        (item) =>
          item.slug === accessory.slug
      )
    ) {
      return "other-accessories";
    }


    if (
      studyMaterials.some(
        (item) =>
          item.slug === accessory.slug
      )
    ) {
      return "study-materials";
    }


    return "";
  };


  /* =====================================
     COLLECTION LABEL
  ====================================== */

  const getCategoryLabel = () => {
    if (
      violinAccessories.some(
        (item) =>
          item.slug === accessory.slug
      )
    ) {
      return "Violin Accessories";
    }


    if (
      violaAccessories.some(
        (item) =>
          item.slug === accessory.slug
      )
    ) {
      return "Viola Accessories";
    }


    if (
      celloAccessories.some(
        (item) =>
          item.slug === accessory.slug
      )
    ) {
      return "Cello Accessories";
    }


    if (
      otherAccessories.some(
        (item) =>
          item.slug === accessory.slug
      )
    ) {
      return "Other Accessories";
    }


    if (
      studyMaterials.some(
        (item) =>
          item.slug === accessory.slug
      )
    ) {
      return "Study Materials";
    }


    return "Accessories";
  };


  /* =====================================
     RETURN
  ====================================== */

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
          BACK TO ACCESSORY COLLECTION
      ====================================== */}

      <div
        style={{
          width: "min(100%, 1500px)",
          margin: "0 auto 28px",
        }}
      >
        <Link
          to={
            getCollectionHash()
              ? `/accessories#${getCollectionHash()}`
              : "/accessories"
          }
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "9px",
            color:
              "rgba(20, 20, 20, 0.58)",
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
          ACCESSORY SHOWCASE
      ====================================== */}

      <AccessoryShowcase
        accessory={accessory}
      />

    </main>
  );
}


export default AccessoriesDetailPage;