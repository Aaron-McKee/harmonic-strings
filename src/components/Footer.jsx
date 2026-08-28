import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

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


            <h2>
              Don&apos;t miss out!
            </h2>


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

                <span>
                  Subscribe
                </span>


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
                href="tel:+12564378447"
                className="footer-contact-item"
              >

                <Phone size={18} />


                <span>
                  256.437.8447
                </span>

              </a>


              <a
                href="mailto:lisa@harmonicstrings.net"
                className="footer-contact-item"
              >

                <Mail size={18} />


                <span>
                  lisa@harmonicstrings.net
                </span>

              </a>


              <div className="footer-contact-item">

                <MapPin size={18} />


                <span>
                  Huntsville, Alabama
                </span>

              </div>


              <div className="footer-contact-item">

                <Clock3 size={18} />


                <span>
                  Monday - Friday
                  <br />
                  10:00am - 6:00pm
                  <br />
                  Saturday &amp; Sunday Closed
                </span>

              </div>

            </div>

          </div>


          {/* =====================================
              HARMONIC STRINGS
          ====================================== */}

          <div className="footer-column">

            <h3>
              Harmonic Strings
            </h3>


            <nav aria-label="Footer company navigation">

              <Link to="/about">
                About Us
              </Link>


              <Link to="/contact">
                Contact Us
              </Link>

            </nav>

          </div>


          {/* =====================================
              SERVICES
          ====================================== */}

          <div className="footer-column">

            <h3>
              Services
            </h3>


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
                Instrument Rentals
              </a>


              <a href="#">
                Care &amp; Maintenance
              </a>


              <a href="#">
                Tutorials &amp; Videos
              </a>

            </nav>

          </div>


          {/* =====================================
              CUSTOMER CARE
          ====================================== */}

          <div className="footer-column">

            <h3>
              Customer Care
            </h3>


            <nav aria-label="Footer customer care navigation">

              <a href="#">
                My Account
              </a>


              <a href="#">
                Shipping &amp; Returns
              </a>


              <a href="#">
                Product Warranties
              </a>


              <Link to="/privacy-policy">
                Privacy Policy
              </Link>


              <a href="#">
                Terms of Service
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

            <Link to="/privacy-policy">
              Privacy Policy
            </Link>


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