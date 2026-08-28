import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/HSLogo.png";

import {
  Menu,
  X,
  Search,
  User,
  ShoppingBag,
  ChevronDown,
  Plus,
  Minus,
} from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* =====================================
     DESKTOP DROPDOWNS
  ====================================== */

  const [desktopInstrumentsOpen, setDesktopInstrumentsOpen] =
    useState(false);

  const [desktopBowsOpen, setDesktopBowsOpen] =
    useState(false);

  const [desktopCasesOpen, setDesktopCasesOpen] =
    useState(false);

  const [desktopStringsOpen, setDesktopStringsOpen] =
    useState(false);

  const [desktopAccessoriesOpen, setDesktopAccessoriesOpen] =
    useState(false);

  const [desktopServicesOpen, setDesktopServicesOpen] =
    useState(false);

  const closeDesktopDropdowns = () => {
    setDesktopInstrumentsOpen(false);
    setDesktopBowsOpen(false);
    setDesktopCasesOpen(false);
    setDesktopStringsOpen(false);
    setDesktopAccessoriesOpen(false);
    setDesktopServicesOpen(false);
  };

  /* =====================================
     MOBILE DROPDOWNS
  ====================================== */

  const [mobileInstrumentsOpen, setMobileInstrumentsOpen] =
    useState(false);

  const [mobileBowsOpen, setMobileBowsOpen] =
    useState(false);

  const [mobileCasesOpen, setMobileCasesOpen] =
    useState(false);

  const [mobileStringsOpen, setMobileStringsOpen] =
    useState(false);

  const [mobileAccessoriesOpen, setMobileAccessoriesOpen] =
    useState(false);

  const [mobileServicesOpen, setMobileServicesOpen] =
    useState(false);

  const [
    mobileInstrumentCategoryOpen,
    setMobileInstrumentCategoryOpen,
  ] = useState(null);

  const [mobileBowCategoryOpen, setMobileBowCategoryOpen] =
    useState(null);

  const [mobileCaseCategoryOpen, setMobileCaseCategoryOpen] =
    useState(null);

  const [mobileStringCategoryOpen, setMobileStringCategoryOpen] =
    useState(null);

  const [
    mobileAccessoryCategoryOpen,
    setMobileAccessoryCategoryOpen,
  ] = useState(null);

  const [
    mobileServiceCategoryOpen,
    setMobileServiceCategoryOpen,
  ] = useState(null);

  const toggleInstrumentCategory = (category) => {
    setMobileInstrumentCategoryOpen(
      mobileInstrumentCategoryOpen === category
        ? null
        : category
    );
  };

  const toggleBowCategory = (category) => {
    setMobileBowCategoryOpen(
      mobileBowCategoryOpen === category
        ? null
        : category
    );
  };

  const toggleCaseCategory = (category) => {
    setMobileCaseCategoryOpen(
      mobileCaseCategoryOpen === category
        ? null
        : category
    );
  };

  const toggleStringCategory = (category) => {
    setMobileStringCategoryOpen(
      mobileStringCategoryOpen === category
        ? null
        : category
    );
  };

  const toggleAccessoryCategory = (category) => {
    setMobileAccessoryCategoryOpen(
      mobileAccessoryCategoryOpen === category
        ? null
        : category
    );
  };

  const toggleServiceCategory = (category) => {
    setMobileServiceCategoryOpen(
      mobileServiceCategoryOpen === category
        ? null
        : category
    );
  };

  const closeAllMenus = () => {
    closeDesktopDropdowns();

    setMenuOpen(false);

    setMobileInstrumentsOpen(false);
    setMobileBowsOpen(false);
    setMobileCasesOpen(false);
    setMobileStringsOpen(false);
    setMobileAccessoriesOpen(false);
    setMobileServicesOpen(false);

    setMobileInstrumentCategoryOpen(null);
    setMobileBowCategoryOpen(null);
    setMobileCaseCategoryOpen(null);
    setMobileStringCategoryOpen(null);
    setMobileAccessoryCategoryOpen(null);
    setMobileServiceCategoryOpen(null);
  };

  return (
    <header
      className="navbar"
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") {
          closeAllMenus();
        }
      }}
    >
      <div className="nav-top">

        {/* =====================================
            MOBILE MENU BUTTON
        ====================================== */}

        <div className="mobile-left">
          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? (
              <X size={27} />
            ) : (
              <Menu size={27} />
            )}
          </button>
        </div>

        {/* =====================================
            LOGO
        ====================================== */}

<div
  className="nav-logo-wrapper"
  onMouseEnter={closeDesktopDropdowns}
>
  <Link
    to="/"
    aria-label="Harmonic Strings Home"
    onClick={closeAllMenus}
  >
    <img
      className="nav-logo"
      src={logo}
      alt="Harmonic Strings"
    />
  </Link>
</div>

        {/* =====================================
            DESKTOP NAVIGATION
        ====================================== */}

        <nav className="nav-links">

          {/* =====================================
              INSTRUMENTS
          ====================================== */}

          <div className="nav-dropdown">
            <button
              className="nav-dropdown-trigger"
              onMouseEnter={() => {
                closeDesktopDropdowns();
                setDesktopInstrumentsOpen(true);
              }}
              onClick={() => {
                const next = !desktopInstrumentsOpen;

                closeDesktopDropdowns();

                setDesktopInstrumentsOpen(next);
              }}
              aria-expanded={desktopInstrumentsOpen}
            >
              Instruments

              <ChevronDown
                size={16}
                style={{
                  transform: desktopInstrumentsOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              />
            </button>

            <div
              className={`instruments-dropdown ${
                desktopInstrumentsOpen
                  ? "desktop-open"
                  : ""
              }`}
              onMouseEnter={() =>
                setDesktopInstrumentsOpen(true)
              }
              onMouseLeave={() =>
                setDesktopInstrumentsOpen(false)
              }
            >
              <div className="instrument-column">
                <h3>Violins</h3>

                <Link
                  to="/violins#beginner"
                  onClick={closeAllMenus}
                >
                  Beginner Violins
                </Link>

                <Link
                  to="/violins#intermediate"
                  onClick={closeAllMenus}
                >
                  Intermediate Violins
                </Link>

                <Link
                  to="/violins#advanced"
                  onClick={closeAllMenus}
                >
                  Advanced Violins
                </Link>

                <Link
                  to="/violins#fine-antique"
                  onClick={closeAllMenus}
                >
                  Fine &amp; Antique Violins
                </Link>

                <Link
                  to="/violins"
                  className="view-all-link"
                  onClick={closeAllMenus}
                >
                  All Violins
                </Link>
              </div>

              <div className="instrument-column">
                <h3>Violas</h3>

                <Link
                  to="/violas#beginner"
                  onClick={closeAllMenus}
                >
                  Beginner Violas
                </Link>

                <Link
                  to="/violas#intermediate"
                  onClick={closeAllMenus}
                >
                  Intermediate Violas
                </Link>

                <Link
                  to="/violas#advanced"
                  onClick={closeAllMenus}
                >
                  Advanced Violas
                </Link>

                <Link
                  to="/violas#fine-antique"
                  onClick={closeAllMenus}
                >
                  Fine &amp; Antique Violas
                </Link>

                <Link
                  to="/violas"
                  className="view-all-link"
                  onClick={closeAllMenus}
                >
                  All Violas
                </Link>
              </div>

              <div className="instrument-column">
                <h3>Cellos</h3>

                <Link
                  to="/cellos#beginner"
                  onClick={closeAllMenus}
                >
                  Beginner Cellos
                </Link>

                <Link
                  to="/cellos#intermediate"
                  onClick={closeAllMenus}
                >
                  Intermediate Cellos
                </Link>

                <Link
                  to="/cellos#advanced"
                  onClick={closeAllMenus}
                >
                  Advanced Cellos
                </Link>

                <Link
                  to="/cellos#fine-antique"
                  onClick={closeAllMenus}
                >
                  Fine &amp; Antique Cellos
                </Link>

                <Link
                  to="/cellos"
                  className="view-all-link"
                  onClick={closeAllMenus}
                >
                  All Cellos
                </Link>
              </div>
            </div>
          </div>

          {/* =====================================
              BOWS
          ====================================== */}

          <div className="nav-dropdown">
            <button
              className="nav-dropdown-trigger"
              onMouseEnter={() => {
                closeDesktopDropdowns();
                setDesktopBowsOpen(true);
              }}
              onClick={() => {
                const next = !desktopBowsOpen;

                closeDesktopDropdowns();

                setDesktopBowsOpen(next);
              }}
              aria-expanded={desktopBowsOpen}
            >
              Bows

              <ChevronDown
                size={16}
                style={{
                  transform: desktopBowsOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              />
            </button>

            <div
              className={`instruments-dropdown ${
                desktopBowsOpen
                  ? "desktop-open"
                  : ""
              }`}
              onMouseEnter={() =>
                setDesktopBowsOpen(true)
              }
              onMouseLeave={() =>
                setDesktopBowsOpen(false)
              }
            >
              <div className="instrument-column">
                <h3>Violin Bows</h3>

                <Link
                  to="/bows#wood-violin"
                  onClick={closeAllMenus}
                >
                  Wood Violin Bows
                </Link>

                <Link
                  to="/bows#carbon-violin"
                  onClick={closeAllMenus}
                >
                  Carbon Fiber Violin Bows
                </Link>

                <Link
                  to="/bows#wood-violin"
                  className="view-all-link"
                  onClick={closeAllMenus}
                >
                  All Violin Bows
                </Link>
              </div>

              <div className="instrument-column">
                <h3>Viola Bows</h3>

                <Link
                  to="/bows#wood-viola"
                  onClick={closeAllMenus}
                >
                  Wood Viola Bows
                </Link>

                <Link
                  to="/bows#carbon-viola"
                  onClick={closeAllMenus}
                >
                  Carbon Fiber Viola Bows
                </Link>

                <Link
                  to="/bows#wood-viola"
                  className="view-all-link"
                  onClick={closeAllMenus}
                >
                  All Viola Bows
                </Link>
              </div>

              <div className="instrument-column">
                <h3>Cello Bows</h3>

                <Link
                  to="/bows#wood-cello"
                  onClick={closeAllMenus}
                >
                  Wood Cello Bows
                </Link>

                <Link
                  to="/bows#carbon-cello"
                  onClick={closeAllMenus}
                >
                  Carbon Fiber Cello Bows
                </Link>

                <Link
                  to="/bows#wood-cello"
                  className="view-all-link"
                  onClick={closeAllMenus}
                >
                  All Cello Bows
                </Link>
              </div>
            </div>
          </div>

          {/* =====================================
              CASES
          ====================================== */}

          <div className="nav-dropdown">
            <button
              className="nav-dropdown-trigger"
              onMouseEnter={() => {
                closeDesktopDropdowns();
                setDesktopCasesOpen(true);
              }}
              onClick={() => {
                const next = !desktopCasesOpen;

                closeDesktopDropdowns();

                setDesktopCasesOpen(next);
              }}
              aria-expanded={desktopCasesOpen}
            >
              Cases

              <ChevronDown
                size={16}
                style={{
                  transform: desktopCasesOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              />
            </button>

            <div
              className={`instruments-dropdown ${
                desktopCasesOpen
                  ? "desktop-open"
                  : ""
              }`}
              onMouseEnter={() =>
                setDesktopCasesOpen(true)
              }
              onMouseLeave={() =>
                setDesktopCasesOpen(false)
              }
            >
              <div className="instrument-column">
                <h3>Violin Cases</h3>

                <Link
                  to="/cases#violin-oblong"
                  onClick={closeAllMenus}
                >
                  Oblong Cases
                </Link>

                <Link
                  to="/cases#violin-shaped"
                  onClick={closeAllMenus}
                >
                  Shaped Cases
                </Link>

                <Link
                  to="/cases#violin-multi"
                  onClick={closeAllMenus}
                >
                  Multi-Instrument Cases
                </Link>

                <Link
                  to="/cases#violin-oblong"
                  className="view-all-link"
                  onClick={closeAllMenus}
                >
                  All Violin Cases
                </Link>
              </div>

              <div className="instrument-column">
                <h3>Viola Cases</h3>

                <Link
                  to="/cases#viola-oblong"
                  onClick={closeAllMenus}
                >
                  Oblong Cases
                </Link>

                <Link
                  to="/cases#viola-shaped"
                  onClick={closeAllMenus}
                >
                  Shaped Cases
                </Link>

                <Link
                  to="/cases#viola-multi"
                  onClick={closeAllMenus}
                >
                  Multi-Instrument Cases
                </Link>

                <Link
                  to="/cases#viola-oblong"
                  className="view-all-link"
                  onClick={closeAllMenus}
                >
                  All Viola Cases
                </Link>
              </div>

              <div className="instrument-column">
                <h3>Cello Cases</h3>

                <Link
                  to="/cases#cello-hard"
                  onClick={closeAllMenus}
                >
                  Hard Cases
                </Link>

                <Link
                  to="/cases#cello-soft"
                  onClick={closeAllMenus}
                >
                  Soft Cases &amp; Gig Bags
                </Link>

                <Link
                  to="/cases#cello-hard"
                  className="view-all-link"
                  onClick={closeAllMenus}
                >
                  All Cello Cases
                </Link>
              </div>
            </div>
          </div>

          {/* =====================================
              STRINGS
          ====================================== */}

          <div className="nav-dropdown">
            <button
              className="nav-dropdown-trigger"
              onMouseEnter={() => {
                closeDesktopDropdowns();
                setDesktopStringsOpen(true);
              }}
              onClick={() => {
                const next = !desktopStringsOpen;

                closeDesktopDropdowns();

                setDesktopStringsOpen(next);
              }}
              aria-expanded={desktopStringsOpen}
            >
              Strings

              <ChevronDown
                size={16}
                style={{
                  transform: desktopStringsOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              />
            </button>

            <div
              className={`instruments-dropdown strings-dropdown ${
                desktopStringsOpen
                  ? "desktop-open"
                  : ""
              }`}
              onMouseEnter={() =>
                setDesktopStringsOpen(true)
              }
              onMouseLeave={() =>
                setDesktopStringsOpen(false)
              }
            >
              <div className="instrument-column">
                <h3>Violin Strings</h3>

                <a href="#">String Sets</a>
                <a href="#">E Strings</a>
                <a href="#">A Strings</a>
                <a href="#">D Strings</a>
                <a href="#">G Strings</a>

                <a
                  href="#"
                  className="view-all-link"
                >
                  All Violin Strings
                </a>
              </div>

              <div className="instrument-column">
                <h3>Viola Strings</h3>

                <a href="#">String Sets</a>
                <a href="#">A Strings</a>
                <a href="#">D Strings</a>
                <a href="#">G Strings</a>
                <a href="#">C Strings</a>

                <a
                  href="#"
                  className="view-all-link"
                >
                  All Viola Strings
                </a>
              </div>

              <div className="instrument-column">
                <h3>Cello Strings</h3>

                <a href="#">String Sets</a>
                <a href="#">A Strings</a>
                <a href="#">D Strings</a>
                <a href="#">G Strings</a>
                <a href="#">C Strings</a>

                <a
                  href="#"
                  className="view-all-link"
                >
                  All Cello Strings
                </a>
              </div>

              <div className="instrument-column">
                <h3>Double Bass Strings</h3>

                <a href="#">String Sets</a>
                <a href="#">G Strings</a>
                <a href="#">D Strings</a>
                <a href="#">A Strings</a>
                <a href="#">E Strings</a>

                <a
                  href="#"
                  className="view-all-link"
                >
                  All Bass Strings
                </a>
              </div>
            </div>
          </div>

          {/* =====================================
              ACCESSORIES
          ====================================== */}

          <div className="nav-dropdown">
            <button
              className="nav-dropdown-trigger"
              onMouseEnter={() => {
                closeDesktopDropdowns();
                setDesktopAccessoriesOpen(true);
              }}
              onClick={() => {
                const next = !desktopAccessoriesOpen;

                closeDesktopDropdowns();

                setDesktopAccessoriesOpen(next);
              }}
              aria-expanded={desktopAccessoriesOpen}
            >
              Accessories

              <ChevronDown
                size={16}
                style={{
                  transform: desktopAccessoriesOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              />
            </button>

            <div
              className={`instruments-dropdown accessories-dropdown ${
                desktopAccessoriesOpen
                  ? "desktop-open"
                  : ""
              }`}
              onMouseEnter={() =>
                setDesktopAccessoriesOpen(true)
              }
              onMouseLeave={() =>
                setDesktopAccessoriesOpen(false)
              }
            >
              <div className="instrument-column">
                <h3>Violin Accessories</h3>

                <Link
                  to="/accessories#violin-accessories"
                  onClick={closeAllMenus}
                >
                  Rosin
                </Link>
                <Link
                  to="/accessories#violin-accessories"
                  onClick={closeAllMenus}
                >
                  Shoulder Rests
                </Link>
                <Link
                  to="/accessories#violin-accessories"
                  onClick={closeAllMenus}
                >
                  Mutes
                </Link>
                <Link
                  to="/accessories#violin-accessories"
                  onClick={closeAllMenus}
                >
                  Chinrests
                </Link>
              </div>

              <div className="instrument-column">
                <h3>Viola Accessories</h3>

                <Link
                  to="/accessories#viola-accessories"
                  onClick={closeAllMenus}
                >
                  Rosin
                </Link>
                <Link
                  to="/accessories#viola-accessories"
                  onClick={closeAllMenus}
                >
                  Shoulder Rests
                </Link>
                <Link
                  to="/accessories#viola-accessories"
                  onClick={closeAllMenus}
                >
                  Mutes
                </Link>
                <Link
                  to="/accessories#viola-accessories"
                  onClick={closeAllMenus}
                >
                  Chinrests
                </Link>
              </div>

              <div className="instrument-column">
                <h3>Cello Accessories</h3>

                <Link
                  to="/accessories#cello-accessories"
                  onClick={closeAllMenus}
                >
                  Rosin
                </Link>
                <Link
                  to="/accessories#cello-accessories"
                  onClick={closeAllMenus}
                >
                  Endpin Stops &amp; Tips
                </Link>
                <Link
                  to="/accessories#cello-accessories"
                  onClick={closeAllMenus}
                >
                  Mutes
                </Link>
                <Link
                  to="/accessories#cello-accessories"
                  onClick={closeAllMenus}
                >
                  Wolf Eliminators
                </Link>
              </div>

              <div className="instrument-column">
                <h3>Other Accessories</h3>

                <Link
                  to="/accessories#other-accessories"
                  onClick={closeAllMenus}
                >
                  Music Stands
                </Link>
                <Link
                  to="/accessories#other-accessories"
                  onClick={closeAllMenus}
                >
                  Music Stand Accessories
                </Link>
                <Link
                  to="/accessories#other-accessories"
                  onClick={closeAllMenus}
                >
                  Orchestra Stand Light
                </Link>
              </div>

              <div className="instrument-column">
                <h3>Study Materials</h3>

                <Link
                  to="/accessories#study-materials"
                  onClick={closeAllMenus}
                >
                  Violin Study Books
                </Link>
                <Link
                  to="/accessories#study-materials"
                  onClick={closeAllMenus}
                >
                  Viola Study Books
                </Link>
                <Link
                  to="/accessories#study-materials"
                  onClick={closeAllMenus}
                >
                  Cello Study Books
                </Link>
                <Link
                  to="/accessories#study-materials"
                  onClick={closeAllMenus}
                >
                  Etudes &amp; Technique
                </Link>
                <Link
                  to="/accessories#study-materials"
                  onClick={closeAllMenus}
                >
                  Teacher Resources
                </Link>

                <Link
                  to="/accessories#study-materials"
                  className="view-all-link"
                  onClick={closeAllMenus}
                >
                  All Study Materials
                </Link>
              </div>
            </div>
          </div>

          {/* =====================================
              SERVICES & VIDEOS
          ====================================== */}

          <div className="nav-dropdown">
            <button
              className="nav-dropdown-trigger"
              onMouseEnter={() => {
                closeDesktopDropdowns();
                setDesktopServicesOpen(true);
              }}
              onClick={() => {
                const next = !desktopServicesOpen;

                closeDesktopDropdowns();

                setDesktopServicesOpen(next);
              }}
              aria-expanded={desktopServicesOpen}
            >
              Services &amp; Videos

              <ChevronDown
                size={16}
                style={{
                  transform: desktopServicesOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              />
            </button>

            <div
              className={`instruments-dropdown ${
                desktopServicesOpen
                  ? "desktop-open"
                  : ""
              }`}
              onMouseEnter={() =>
                setDesktopServicesOpen(true)
              }
              onMouseLeave={() =>
                setDesktopServicesOpen(false)
              }
            >
              {/* SERVICES */}

              <div className="instrument-column">
                <h3>Services</h3>

                <a href="#">In-Home Trials</a>
                <a href="#">Trade-in Program</a>
                <a href="#">Instrument Rentals</a>
                <a href="#">Workshop Services</a>
              </div>

              {/* LEARN */}

              <div className="instrument-column">
                <h3>Learn</h3>

                <a href="#">Beginner Tutorials</a>
                <a href="#">Care &amp; Maintenance</a>
                <a href="#">Videos</a>
              </div>

              {/* ABOUT */}

              <div className="instrument-column">
                <h3>About</h3>

                <Link
                  to="/about"
                  onClick={closeAllMenus}
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>

        </nav>

        {/* =====================================
            DESKTOP SEARCH
        ====================================== */}

        <div
          className="desktop-search"
          onMouseEnter={closeDesktopDropdowns}
        >
          <input
            type="text"
            placeholder="Search"
          />

          <Search size={22} />
        </div>

        {/* =====================================
            ACCOUNT + CART
        ====================================== */}

        <div
          className="nav-actions"
          onMouseEnter={closeDesktopDropdowns}
        >
          <button
            className="nav-icon-button"
            aria-label="Account"
          >
            <User size={25} />
          </button>

          <button
            className="nav-icon-button cart-button"
            aria-label="Shopping cart"
          >
            <ShoppingBag size={25} />

            <span className="cart-count">
              0
            </span>
          </button>
        </div>
      </div>

      {/* =====================================
          TABLET / MOBILE SEARCH
      ====================================== */}

      <div className="responsive-search">
        <input
          type="text"
          placeholder="Search"
        />

        <Search size={24} />
      </div>

      {/* =====================================
          MOBILE MENU
      ====================================== */}

      <div
        className={`mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >

        {/* =====================================
            MOBILE INSTRUMENTS
        ====================================== */}

        <button
          className="mobile-instruments-trigger"
          onClick={() =>
            setMobileInstrumentsOpen(
              !mobileInstrumentsOpen
            )
          }
        >
          <span>Instruments</span>

          {mobileInstrumentsOpen ? (
            <Minus size={20} />
          ) : (
            <Plus size={20} />
          )}
        </button>

        {mobileInstrumentsOpen && (
          <div className="mobile-instruments-menu">

            <div className="mobile-category">
              <button
                className="mobile-category-trigger"
                onClick={() =>
                  toggleInstrumentCategory("violins")
                }
              >
                <span>Violins</span>

                {mobileInstrumentCategoryOpen === "violins" ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {mobileInstrumentCategoryOpen === "violins" && (
                <div className="mobile-category-links">
                  <Link
                    to="/violins#beginner"
                    onClick={closeAllMenus}
                  >
                    Beginner Violins
                  </Link>

                  <Link
                    to="/violins#intermediate"
                    onClick={closeAllMenus}
                  >
                    Intermediate Violins
                  </Link>

                  <Link
                    to="/violins#advanced"
                    onClick={closeAllMenus}
                  >
                    Advanced Violins
                  </Link>

                  <Link
                    to="/violins#fine-antique"
                    onClick={closeAllMenus}
                  >
                    Fine &amp; Antique Violins
                  </Link>

                  <Link
                    to="/violins"
                    className="mobile-view-all"
                    onClick={closeAllMenus}
                  >
                    All Violins
                  </Link>
                </div>
              )}
            </div>

            <div className="mobile-category">
              <button
                className="mobile-category-trigger"
                onClick={() =>
                  toggleInstrumentCategory("violas")
                }
              >
                <span>Violas</span>

                {mobileInstrumentCategoryOpen === "violas" ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {mobileInstrumentCategoryOpen === "violas" && (
                <div className="mobile-category-links">
                  <Link
                    to="/violas#beginner"
                    onClick={closeAllMenus}
                  >
                    Beginner Violas
                  </Link>

                  <Link
                    to="/violas#intermediate"
                    onClick={closeAllMenus}
                  >
                    Intermediate Violas
                  </Link>

                  <Link
                    to="/violas#advanced"
                    onClick={closeAllMenus}
                  >
                    Advanced Violas
                  </Link>

                  <Link
                    to="/violas#fine-antique"
                    onClick={closeAllMenus}
                  >
                    Fine &amp; Antique Violas
                  </Link>

                  <Link
                    to="/violas"
                    className="mobile-view-all"
                    onClick={closeAllMenus}
                  >
                    All Violas
                  </Link>
                </div>
              )}
            </div>

            <div className="mobile-category">
              <button
                className="mobile-category-trigger"
                onClick={() =>
                  toggleInstrumentCategory("cellos")
                }
              >
                <span>Cellos</span>

                {mobileInstrumentCategoryOpen === "cellos" ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {mobileInstrumentCategoryOpen === "cellos" && (
                <div className="mobile-category-links">
                  <Link
                    to="/cellos#beginner"
                    onClick={closeAllMenus}
                  >
                    Beginner Cellos
                  </Link>

                  <Link
                    to="/cellos#intermediate"
                    onClick={closeAllMenus}
                  >
                    Intermediate Cellos
                  </Link>

                  <Link
                    to="/cellos#advanced"
                    onClick={closeAllMenus}
                  >
                    Advanced Cellos
                  </Link>

                  <Link
                    to="/cellos#fine-antique"
                    onClick={closeAllMenus}
                  >
                    Fine &amp; Antique Cellos
                  </Link>

                  <Link
                    to="/cellos"
                    className="mobile-view-all"
                    onClick={closeAllMenus}
                  >
                    All Cellos
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        {/* =====================================
            MOBILE BOWS
        ====================================== */}

        <button
          className="mobile-instruments-trigger"
          onClick={() =>
            setMobileBowsOpen(
              !mobileBowsOpen
            )
          }
        >
          <span>Bows</span>

          {mobileBowsOpen ? (
            <Minus size={20} />
          ) : (
            <Plus size={20} />
          )}
        </button>

        {mobileBowsOpen && (
          <div className="mobile-instruments-menu">

            <div className="mobile-category">
              <button
                className="mobile-category-trigger"
                onClick={() =>
                  toggleBowCategory("violin-bows")
                }
              >
                <span>Violin Bows</span>

                {mobileBowCategoryOpen === "violin-bows" ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {mobileBowCategoryOpen === "violin-bows" && (
                <div className="mobile-category-links">
                  <Link
                    to="/bows#wood-violin"
                    onClick={closeAllMenus}
                  >
                    Wood Violin Bows
                  </Link>

                  <Link
                    to="/bows#carbon-violin"
                    onClick={closeAllMenus}
                  >
                    Carbon Fiber Violin Bows
                  </Link>

                  <Link
                    to="/bows#wood-violin"
                    className="mobile-view-all"
                    onClick={closeAllMenus}
                  >
                    All Violin Bows
                  </Link>
                </div>
              )}
            </div>

            <div className="mobile-category">
              <button
                className="mobile-category-trigger"
                onClick={() =>
                  toggleBowCategory("viola-bows")
                }
              >
                <span>Viola Bows</span>

                {mobileBowCategoryOpen === "viola-bows" ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {mobileBowCategoryOpen === "viola-bows" && (
                <div className="mobile-category-links">
                  <Link
                    to="/bows#wood-viola"
                    onClick={closeAllMenus}
                  >
                    Wood Viola Bows
                  </Link>

                  <Link
                    to="/bows#carbon-viola"
                    onClick={closeAllMenus}
                  >
                    Carbon Fiber Viola Bows
                  </Link>

                  <Link
                    to="/bows#wood-viola"
                    className="mobile-view-all"
                    onClick={closeAllMenus}
                  >
                    All Viola Bows
                  </Link>
                </div>
              )}
            </div>

            <div className="mobile-category">
              <button
                className="mobile-category-trigger"
                onClick={() =>
                  toggleBowCategory("cello-bows")
                }
              >
                <span>Cello Bows</span>

                {mobileBowCategoryOpen === "cello-bows" ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {mobileBowCategoryOpen === "cello-bows" && (
                <div className="mobile-category-links">
                  <Link
                    to="/bows#wood-cello"
                    onClick={closeAllMenus}
                  >
                    Wood Cello Bows
                  </Link>

                  <Link
                    to="/bows#carbon-cello"
                    onClick={closeAllMenus}
                  >
                    Carbon Fiber Cello Bows
                  </Link>

                  <Link
                    to="/bows#wood-cello"
                    className="mobile-view-all"
                    onClick={closeAllMenus}
                  >
                    All Cello Bows
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        {/* =====================================
            MOBILE CASES
        ====================================== */}

        <button
          className="mobile-instruments-trigger"
          onClick={() =>
            setMobileCasesOpen(
              !mobileCasesOpen
            )
          }
        >
          <span>Cases</span>

          {mobileCasesOpen ? (
            <Minus size={20} />
          ) : (
            <Plus size={20} />
          )}
        </button>

        {mobileCasesOpen && (
          <div className="mobile-instruments-menu">

            <div className="mobile-category">
              <button
                className="mobile-category-trigger"
                onClick={() =>
                  toggleCaseCategory("violin-cases")
                }
              >
                <span>Violin Cases</span>

                {mobileCaseCategoryOpen === "violin-cases" ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {mobileCaseCategoryOpen === "violin-cases" && (
                <div className="mobile-category-links">
                  <Link
                    to="/cases#violin-oblong"
                    onClick={closeAllMenus}
                  >
                    Oblong Cases
                  </Link>

                  <Link
                    to="/cases#violin-shaped"
                    onClick={closeAllMenus}
                  >
                    Shaped Cases
                  </Link>

                  <Link
                    to="/cases#violin-multi"
                    onClick={closeAllMenus}
                  >
                    Multi-Instrument Cases
                  </Link>

                  <Link
                    to="/cases#violin-oblong"
                    className="mobile-view-all"
                    onClick={closeAllMenus}
                  >
                    All Violin Cases
                  </Link>
                </div>
              )}
            </div>

            <div className="mobile-category">
              <button
                className="mobile-category-trigger"
                onClick={() =>
                  toggleCaseCategory("viola-cases")
                }
              >
                <span>Viola Cases</span>

                {mobileCaseCategoryOpen === "viola-cases" ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {mobileCaseCategoryOpen === "viola-cases" && (
                <div className="mobile-category-links">
                  <Link
                    to="/cases#viola-oblong"
                    onClick={closeAllMenus}
                  >
                    Oblong Cases
                  </Link>

                  <Link
                    to="/cases#viola-shaped"
                    onClick={closeAllMenus}
                  >
                    Shaped Cases
                  </Link>

                  <Link
                    to="/cases#viola-multi"
                    onClick={closeAllMenus}
                  >
                    Multi-Instrument Cases
                  </Link>

                  <Link
                    to="/cases#viola-oblong"
                    className="mobile-view-all"
                    onClick={closeAllMenus}
                  >
                    All Viola Cases
                  </Link>
                </div>
              )}
            </div>

            <div className="mobile-category">
              <button
                className="mobile-category-trigger"
                onClick={() =>
                  toggleCaseCategory("cello-cases")
                }
              >
                <span>Cello Cases</span>

                {mobileCaseCategoryOpen === "cello-cases" ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {mobileCaseCategoryOpen === "cello-cases" && (
                <div className="mobile-category-links">
                  <Link
                    to="/cases#cello-hard"
                    onClick={closeAllMenus}
                  >
                    Hard Cases
                  </Link>

                  <Link
                    to="/cases#cello-soft"
                    onClick={closeAllMenus}
                  >
                    Soft Cases &amp; Gig Bags
                  </Link>

                  <Link
                    to="/cases#cello-hard"
                    className="mobile-view-all"
                    onClick={closeAllMenus}
                  >
                    All Cello Cases
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        {/* =====================================
            MOBILE STRINGS
        ====================================== */}

        <button
          className="mobile-instruments-trigger"
          onClick={() =>
            setMobileStringsOpen(
              !mobileStringsOpen
            )
          }
        >
          <span>Strings</span>

          {mobileStringsOpen ? (
            <Minus size={20} />
          ) : (
            <Plus size={20} />
          )}
        </button>

        {mobileStringsOpen && (
          <div className="mobile-instruments-menu">

            <div className="mobile-category">
              <button
                className="mobile-category-trigger"
                onClick={() =>
                  toggleStringCategory("violin-strings")
                }
              >
                <span>Violin Strings</span>

                {mobileStringCategoryOpen === "violin-strings" ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {mobileStringCategoryOpen === "violin-strings" && (
                <div className="mobile-category-links">
                  <a href="#">String Sets</a>
                  <a href="#">E Strings</a>
                  <a href="#">A Strings</a>
                  <a href="#">D Strings</a>
                  <a href="#">G Strings</a>

                  <a
                    href="#"
                    className="mobile-view-all"
                  >
                    All Violin Strings
                  </a>
                </div>
              )}
            </div>

            <div className="mobile-category">
              <button
                className="mobile-category-trigger"
                onClick={() =>
                  toggleStringCategory("viola-strings")
                }
              >
                <span>Viola Strings</span>

                {mobileStringCategoryOpen === "viola-strings" ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {mobileStringCategoryOpen === "viola-strings" && (
                <div className="mobile-category-links">
                  <a href="#">String Sets</a>
                  <a href="#">A Strings</a>
                  <a href="#">D Strings</a>
                  <a href="#">G Strings</a>
                  <a href="#">C Strings</a>

                  <a
                    href="#"
                    className="mobile-view-all"
                  >
                    All Viola Strings
                  </a>
                </div>
              )}
            </div>

            <div className="mobile-category">
              <button
                className="mobile-category-trigger"
                onClick={() =>
                  toggleStringCategory("cello-strings")
                }
              >
                <span>Cello Strings</span>

                {mobileStringCategoryOpen === "cello-strings" ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {mobileStringCategoryOpen === "cello-strings" && (
                <div className="mobile-category-links">
                  <a href="#">String Sets</a>
                  <a href="#">A Strings</a>
                  <a href="#">D Strings</a>
                  <a href="#">G Strings</a>
                  <a href="#">C Strings</a>

                  <a
                    href="#"
                    className="mobile-view-all"
                  >
                    All Cello Strings
                  </a>
                </div>
              )}
            </div>

            <div className="mobile-category">
              <button
                className="mobile-category-trigger"
                onClick={() =>
                  toggleStringCategory("bass-strings")
                }
              >
                <span>Double Bass Strings</span>

                {mobileStringCategoryOpen === "bass-strings" ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {mobileStringCategoryOpen === "bass-strings" && (
                <div className="mobile-category-links">
                  <a href="#">String Sets</a>
                  <a href="#">G Strings</a>
                  <a href="#">D Strings</a>
                  <a href="#">A Strings</a>
                  <a href="#">E Strings</a>

                  <a
                    href="#"
                    className="mobile-view-all"
                  >
                    All Bass Strings
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

        {/* =====================================
            MOBILE ACCESSORIES
        ====================================== */}

        <button
          className="mobile-instruments-trigger"
          onClick={() =>
            setMobileAccessoriesOpen(
              !mobileAccessoriesOpen
            )
          }
        >
          <span>Accessories</span>

          {mobileAccessoriesOpen ? (
            <Minus size={20} />
          ) : (
            <Plus size={20} />
          )}
        </button>

        {mobileAccessoriesOpen && (
          <div className="mobile-instruments-menu">

            <div className="mobile-category">
              <button
                className="mobile-category-trigger"
                onClick={() =>
                  toggleAccessoryCategory(
                    "violin-accessories"
                  )
                }
              >
                <span>Violin Accessories</span>

                {mobileAccessoryCategoryOpen ===
                "violin-accessories" ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {mobileAccessoryCategoryOpen ===
                "violin-accessories" && (
                <div className="mobile-category-links">
                  <Link
                    to="/accessories#violin-accessories"
                    onClick={closeAllMenus}
                  >
                    Rosin
                  </Link>
                  <Link
                    to="/accessories#violin-accessories"
                    onClick={closeAllMenus}
                  >
                    Shoulder Rests
                  </Link>
                  <Link
                    to="/accessories#violin-accessories"
                    onClick={closeAllMenus}
                  >
                    Mutes
                  </Link>
                  <Link
                    to="/accessories#violin-accessories"
                    onClick={closeAllMenus}
                  >
                    Chinrests
                  </Link>
                  </div>
              )}
            </div>

            <div className="mobile-category">
              <button
                className="mobile-category-trigger"
                onClick={() =>
                  toggleAccessoryCategory(
                    "viola-accessories"
                  )
                }
              >
                <span>Viola Accessories</span>

                {mobileAccessoryCategoryOpen ===
                "viola-accessories" ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {mobileAccessoryCategoryOpen ===
                "viola-accessories" && (
                <div className="mobile-category-links">
                  <Link
                    to="/accessories#viola-accessories"
                    onClick={closeAllMenus}
                  >
                    Rosin
                  </Link>
                  <Link
                    to="/accessories#viola-accessories"
                    onClick={closeAllMenus}
                  >
                    Shoulder Rests
                  </Link>
                  <Link
                    to="/accessories#viola-accessories"
                    onClick={closeAllMenus}
                  >
                    Mutes
                  </Link>
                  <Link
                    to="/accessories#viola-accessories"
                    onClick={closeAllMenus}
                  >
                    Chinrests
                  </Link>
                  </div>
              )}
            </div>

            <div className="mobile-category">
              <button
                className="mobile-category-trigger"
                onClick={() =>
                  toggleAccessoryCategory(
                    "cello-accessories"
                  )
                }
              >
                <span>Cello Accessories</span>

                {mobileAccessoryCategoryOpen ===
                "cello-accessories" ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {mobileAccessoryCategoryOpen ===
                "cello-accessories" && (
                <div className="mobile-category-links">
                  <Link
                    to="/accessories#cello-accessories"
                    onClick={closeAllMenus}
                  >
                    Rosin
                  </Link>
                  <Link
                    to="/accessories#cello-accessories"
                    onClick={closeAllMenus}
                  >
                    Endpin Stops &amp; Tips
                  </Link>
                  <Link
                    to="/accessories#cello-accessories"
                    onClick={closeAllMenus}
                  >
                    Mutes
                  </Link>
                  <Link
                    to="/accessories#cello-accessories"
                    onClick={closeAllMenus}
                  >
                    Wolf Eliminators
                  </Link>
                  </div>
              )}
            </div>

            <div className="mobile-category">
              <button
                className="mobile-category-trigger"
                onClick={() =>
                  toggleAccessoryCategory(
                    "other-accessories"
                  )
                }
              >
                <span>Other Accessories</span>

                {mobileAccessoryCategoryOpen ===
                "other-accessories" ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {mobileAccessoryCategoryOpen ===
                "other-accessories" && (
                <div className="mobile-category-links">
                  <Link
                    to="/accessories#other-accessories"
                    onClick={closeAllMenus}
                  >
                    Music Stands
                  </Link>
                  <Link
                    to="/accessories#other-accessories"
                    onClick={closeAllMenus}
                  >
                    Music Stand Accessories
                  </Link>
                  <Link
                    to="/accessories#other-accessories"
                    onClick={closeAllMenus}
                  >
                    Orchestra Stand Light
                  </Link>
                      </div>
              )}
            </div>

            <div className="mobile-category">
              <button
                className="mobile-category-trigger"
                onClick={() =>
                  toggleAccessoryCategory(
                    "books-sheet-music"
                  )
                }
              >
                <span>Study Materials</span>

                {mobileAccessoryCategoryOpen ===
                "books-sheet-music" ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {mobileAccessoryCategoryOpen ===
                "books-sheet-music" && (
                <div className="mobile-category-links">
                  <Link
                    to="/accessories#study-materials"
                    onClick={closeAllMenus}
                  >
                    Violin Study Books
                  </Link>
                  <Link
                    to="/accessories#study-materials"
                    onClick={closeAllMenus}
                  >
                    Viola Study Books
                  </Link>
                  <Link
                    to="/accessories#study-materials"
                    onClick={closeAllMenus}
                  >
                    Cello Study Books
                  </Link>
                  <Link
                    to="/accessories#study-materials"
                    onClick={closeAllMenus}
                  >
                    Etudes &amp; Technique
                  </Link>
                  <Link
                    to="/accessories#study-materials"
                    onClick={closeAllMenus}
                  >
                    Teacher Resources
                  </Link>

                  <Link
                    to="/accessories#study-materials"
                    className="mobile-view-all"
                    onClick={closeAllMenus}
                  >
                    All Study Materials
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        {/* =====================================
            MOBILE SERVICES & VIDEOS
        ====================================== */}

        <button
          className="mobile-instruments-trigger"
          onClick={() =>
            setMobileServicesOpen(
              !mobileServicesOpen
            )
          }
        >
          <span>Services &amp; Videos</span>

          {mobileServicesOpen ? (
            <Minus size={20} />
          ) : (
            <Plus size={20} />
          )}
        </button>

        {mobileServicesOpen && (
          <div className="mobile-instruments-menu">

            {/* SERVICES */}

            <div className="mobile-category">
              <button
                className="mobile-category-trigger"
                onClick={() =>
                  toggleServiceCategory("services")
                }
              >
                <span>Services</span>

                {mobileServiceCategoryOpen === "services" ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {mobileServiceCategoryOpen === "services" && (
                <div className="mobile-category-links">
                  <a href="#">In-Home Trials</a>
                  <a href="#">Trade-in Program</a>
                  <a href="#">Instrument Rentals</a>
                  <a href="#">Workshop Services</a>
                </div>
              )}
            </div>

            {/* LEARN */}

            <div className="mobile-category">
              <button
                className="mobile-category-trigger"
                onClick={() =>
                  toggleServiceCategory("learn")
                }
              >
                <span>Learn</span>

                {mobileServiceCategoryOpen === "learn" ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {mobileServiceCategoryOpen === "learn" && (
                <div className="mobile-category-links">
                  <a href="#">Beginner Tutorials</a>
                  <a href="#">Care &amp; Maintenance</a>
                  <a href="#">Videos</a>
                </div>
              )}
            </div>

            {/* ABOUT */}

            <div className="mobile-category">
              <button
                className="mobile-category-trigger"
                onClick={() =>
                  toggleServiceCategory("about")
                }
              >
                <span>About</span>

                {mobileServiceCategoryOpen === "about" ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {mobileServiceCategoryOpen === "about" && (
                <div className="mobile-category-links">
                  <Link
                    to="/about"
                    onClick={closeAllMenus}
                  >
                    About Us
                  </Link>
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </header>
  );
}

export default Navbar;