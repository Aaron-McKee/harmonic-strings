import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Link } from "react-router-dom";

import logo from "../assets/HSLogo.png";

function Footer() {
  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <footer className="site-footer">

      {/* =====================================
          NEWSLETTER
      ====================================== */}

      <div className="footer-newsletter">
        <div className="footer-newsletter-inner">

          <div className="footer-newsletter-copy">
            <p className="footer-eyebrow">
              STAY CONNECTED
            </p>

            <h2>Don&apos;t miss out!</h2>

            <p>
              Be the first to know about product updates,
              promotions, recommendations, and more.
            </p>
          </div>

          <form
            className="footer-newsletter-form"
            onSubmit={handleNewsletterSubmit}
          >
            <label
              htmlFor="footer-email"
              className="footer-email-label"
            >
              Your email address
            </label>

            <div className="footer-email-field">
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email address"
                autoComplete="email"
                required
              />

              <button
                type="submit"
                aria-label="Subscribe to Harmonic Strings emails"
              >
                <span>Subscribe</span>

                <ArrowRight size={18} />
              </button>
            </div>

            <p className="footer-newsletter-note">
              Join the Harmonic Strings mailing list.
              Unsubscribe anytime.
            </p>
          </form>

        </div>
      </div>


      {/* =====================================
          MAIN FOOTER
      ====================================== */}

      <div className="footer-main">
        <div className="footer-main-inner">

          {/* =====================================
              BRAND + CONTACT
          ====================================== */}

          <div className="footer-brand-column">

            <Link
              to="/"
              className="footer-logo-link"
              aria-label="Harmonic Strings Home"
            >
              <img
                src={logo}
                alt="Harmonic Strings"
                className="footer-logo"
              />
            </Link>

            <p className="footer-brand-slogan">
              Gateway to Better Sound
            </p>

            <p className="footer-brand-history">
              Supporting The North Alabama Area Since 2002
            </p>

            <div className="footer-contact">

              <a
                href="tel:+10000000000"
                className="footer-contact-item"
              >
                <Phone size={18} />

                <span>
                  Your Phone Number
                </span>
              </a>

              <a
                href="mailto:you@example.com"
                className="footer-contact-item"
              >
                <Mail size={18} />

                <span>
                  Your Email Address
                </span>
              </a>

              <div className="footer-contact-item">
                <MapPin size={18} />

                <span>
                  Your Street Address
                  <br />
                  North Alabama
                </span>
              </div>

            </div>
          </div>


          {/* =====================================
              SHOP
          ====================================== */}

          <div className="footer-column">
            <h3>Shop</h3>

            <nav aria-label="Footer shop navigation">

              <Link to="/violins">
                Violins
              </Link>

              <Link to="/violas">
                Violas
              </Link>

              <Link to="/cellos">
                Cellos
              </Link>

              <Link to="/bows">
                Bows
              </Link>

              <Link to="/cases">
                Cases
              </Link>

              <a href="#">
                Strings
              </a>

              <a href="#">
                Accessories
              </a>

              <a href="#">
                Gift Cards
              </a>

            </nav>
          </div>


          {/* =====================================
              SERVICES
          ====================================== */}

          <div className="footer-column">
            <h3>Services</h3>

            <nav aria-label="Footer services navigation">

              <a href="#">
                Services &amp; Repairs
              </a>

              <a href="#">
                In-Home Trials
              </a>

              <a href="#">
                Trade-In Program
              </a>

              <a href="#">
                String Instrument Rentals
              </a>

              <a href="#">
                Care &amp; Maintenance
              </a>

              <a href="#">
                Beginner Tutorials
              </a>

              <a href="#">
                Videos
              </a>

            </nav>
          </div>


          {/* =====================================
              CUSTOMER CARE
          ====================================== */}

          <div className="footer-column">
            <h3>Customer Care</h3>

            <nav aria-label="Footer customer care navigation">

              <a href="#">
                Contact Us
              </a>

              <a href="#">
                My Account
              </a>

              <a href="#">
                Shipping &amp; Returns
              </a>

              <a href="#">
                Product Warranties
              </a>

              <a href="#">
                Privacy Policy
              </a>

              <a href="#">
                Terms of Service
              </a>

            </nav>
          </div>


          {/* =====================================
              ABOUT
          ====================================== */}

          <div className="footer-column">
            <h3>Harmonic Strings</h3>

            <nav aria-label="Footer company navigation">

              <a href="#">
                About Us
              </a>

              <a href="#">
                Featured Collection
              </a>

              <a href="#">
                Fine &amp; Antique Instruments
              </a>

              <a href="#">
                Master Violin Outfit
              </a>

              <a href="#">
                Contact Us
              </a>

            </nav>
          </div>

        </div>
      </div>


      {/* =====================================
          BOTTOM BAR
      ====================================== */}

      <div className="footer-bottom">
        <div className="footer-bottom-inner">

          <p>
            © {new Date().getFullYear()} Harmonic Strings.
            All rights reserved.
          </p>

          <div className="footer-bottom-links">

            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms of Service
            </a>

            <a href="#">
              Shipping &amp; Returns
            </a>

          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;