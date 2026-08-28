import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import "../styles/contact-page.css";


function ContactPage() {
  return (
    <main className="contact-page">


      {/* =====================================
          HERO
      ====================================== */}

      <section className="contact-hero">

        <div className="contact-shell">

          <div className="contact-hero-grid">


            {/* =====================================
                HERO COPY
            ====================================== */}

            <div className="contact-hero-copy">

              <p className="contact-eyebrow">
                Contact Harmonic Strings
              </p>


              <h1>
                Let&apos;s talk about
                <span>
                  better sound.
                </span>
              </h1>


              <p className="contact-hero-intro">
                Have a question about an instrument, bow,
                accessory, service, or product availability?
                Contact Harmonic Strings directly. We&apos;re
                happy to help you find the right next step.
              </p>

            </div>


            {/* =====================================
                DIRECT CONTACT
            ====================================== */}

            <div className="contact-primary-panel">

              <p className="contact-panel-eyebrow">
                Get In Touch
              </p>


              <h2>
                Speak directly with Harmonic Strings.
              </h2>


              <div className="contact-primary-actions">

                <a
                  href="tel:+12564378447"
                  className="contact-primary-action"
                >

                  <div className="contact-action-icon">

                    <Phone
                      size={21}
                      strokeWidth={1.6}
                    />

                  </div>


                  <div className="contact-action-copy">

                    <span>
                      Telephone
                    </span>

                    <strong>
                      256.437.8447
                    </strong>

                  </div>


                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.6}
                  />

                </a>


                <a
                  href="mailto:lisa@harmonicstrings.net?subject=Harmonic%20Strings%20Website%20Inquiry"
                  className="contact-primary-action"
                >

                  <div className="contact-action-icon">

                    <Mail
                      size={21}
                      strokeWidth={1.6}
                    />

                  </div>


                  <div className="contact-action-copy">

                    <span>
                      Email
                    </span>

                    <strong>
                      lisa@harmonicstrings.net
                    </strong>

                  </div>


                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.6}
                  />

                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          LOCATION + BUSINESS HOURS
      ====================================== */}

      <section className="contact-information-section">

        <div className="contact-shell">

          <div className="contact-information-grid">


            {/* =====================================
                LOCATION
            ====================================== */}

            <article className="contact-info-card contact-location-card">

              <div className="contact-info-heading-row">

                <div className="contact-info-icon">

                  <MapPin
                    size={24}
                    strokeWidth={1.5}
                  />

                </div>


                <p className="contact-card-label">
                  Location
                </p>

              </div>


              <h2>
                Huntsville,
                <span>
                  Alabama
                </span>
              </h2>


              <p className="contact-location-intro">
                Harmonic Strings proudly serves musicians
                throughout North Alabama and beyond.
              </p>

            </article>


            {/* =====================================
                BUSINESS HOURS
            ====================================== */}

            <article className="contact-info-card contact-hours-card">

              <div className="contact-info-heading-row">

                <div className="contact-info-icon">

                  <Clock3
                    size={24}
                    strokeWidth={1.5}
                  />

                </div>


                <p className="contact-card-label">
                  Business Hours
                </p>

              </div>


              <h2>
                When to
                <span>
                  reach us.
                </span>
              </h2>


              <div className="contact-hours-list">

                <div className="contact-hours-row contact-hours-row--primary">

                  <div>

                    <span>
                      Monday - Friday
                    </span>


                    <small>
                      Regular business hours
                    </small>

                  </div>


                  <strong>
                    10:00am - 6:00pm
                  </strong>

                </div>


                <div className="contact-hours-row">

                  <div>

                    <span>
                      Saturday
                    </span>

                  </div>


                  <strong>
                    Closed
                  </strong>

                </div>


                <div className="contact-hours-row">

                  <div>

                    <span>
                      Sunday
                    </span>

                  </div>


                  <strong>
                    Closed
                  </strong>

                </div>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================
          APPOINTMENTS
      ====================================== */}

      <section className="contact-appointments-section">

        <div className="contact-shell">

          <div className="contact-appointments-panel">


            <div className="contact-appointments-icon">

              <CalendarDays
                size={28}
                strokeWidth={1.5}
              />

            </div>


            <div className="contact-appointments-copy">

              <p className="contact-eyebrow">
                Appointments
              </p>


              <h2>
                Plan a time to visit
                <span>
                  Harmonic Strings.
                </span>
              </h2>


              <p>
                Appointments are welcome for instrument and
                bow trials, product consultations, and
                service-related questions. Scheduling a time
                in advance allows us to give you focused,
                personal attention and have the appropriate
                instruments, bows, or materials ready for
                your visit.
              </p>

            </div>


            <div className="contact-appointments-actions">

              <a
                href="tel:+12564378447"
                className="contact-appointment-button contact-appointment-button--primary"
              >
                Book by Phone

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                />
              </a>


              <a
                href="mailto:lisa@harmonicstrings.net?subject=Harmonic%20Strings%20Appointment%20Request"
                className="contact-appointment-button"
              >
                Request by Email

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                />
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          CONTACT STATEMENT
      ====================================== */}

      <section className="contact-statement-section">

        <div className="contact-shell">

          <div className="contact-statement">

            <p className="contact-eyebrow">
              Harmonic Strings
            </p>


            <h2>
              Finding the right instrument starts with personal service built around you.
            </h2>


            <p>
              Whether you are looking for your first
              instrument, considering an upgrade, comparing
              bows, exploring accessories, or asking about
              one of our services, we welcome the opportunity
              to speak with you directly.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}


export default ContactPage;