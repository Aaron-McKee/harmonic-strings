import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  AudioLines,
  BadgeCheck,
  Music2,
  Quote,
  UserRound,
} from "lucide-react";

import mainPhoto from "../assets/AboutPageMainPhoto.png";
import secondPhoto from "../assets/AboutPageSecondPhoto.png";

import "../styles/about-page.css";


function AboutPage() {
  const sceneImageStyle = {
    "--about-scene-image": `url(${secondPhoto})`,
  };


  return (
    <main
      className="about-page"
      style={sceneImageStyle}
    >

      {/* =====================================
          HERO
      ====================================== */}

      <section className="about-hero">

        <div className="about-hero-inner">


          {/* =====================================
              HERO COPY
          ====================================== */}

          <div className="about-hero-copy">

            <p className="about-eyebrow">
              About Harmonic Strings
            </p>


            <h1 className="about-hero-title">

              <span className="about-hero-title-line about-hero-title-line--light">
                Helping musicians
              </span>

              <span className="about-hero-title-line about-hero-title-line--light">
                reach their full
              </span>

              <span className="about-hero-title-line about-hero-title-line--accent about-hero-title-line--final">
                musical potential
              </span>

            </h1>

          </div>


          {/* =====================================
              HERO PORTRAIT
          ====================================== */}

          <div className="about-hero-visual">

            <div
              className="about-hero-scene"
              aria-hidden="true"
            />


            <div
              className="about-hero-scene-overlay"
              aria-hidden="true"
            />


            <img
              src={mainPhoto}
              alt="Lisa Wiggins, Founder and CEO of Harmonic Strings"
              className="about-hero-image"
            />

          </div>

        </div>

      </section>


      {/* =====================================
          FEATURED QUOTE
      ====================================== */}

      <section className="about-quote-section">

        <div
          className="about-quote-photo about-quote-photo--left"
          aria-hidden="true"
        />


        <div
          className="about-quote-photo about-quote-photo--right"
          aria-hidden="true"
        />


        <div className="about-quote-shade" />


        <div className="about-quote-inner">

          <Quote
            className="about-quote-mark"
            size={66}
            strokeWidth={1.15}
            aria-hidden="true"
          />


          <blockquote>
            “My goal is to play and adjust every instrument
            in order to find its maximum potential. As a
            professional musician, I bring to this business
            a keen sense of what it takes to produce a
            beautiful sound. Having a good instrument and
            bow is the beginning of that journey.”
          </blockquote>


          <div className="about-quote-attribution">

            <span />


            <p>
              Lisa Wiggins
            </p>


            <span />

          </div>

        </div>

      </section>


      {/* =====================================
          WHY HARMONIC STRINGS
      ====================================== */}

      <section className="about-highlights-section">

        <div className="about-content-shell">

          <header className="about-highlights-header">

            <p className="about-section-label">
              Why Harmonic Strings
            </p>


            <p className="about-highlights-intro">
              String players are called to master two instruments —
              one in each hand. Harmonic Strings is dedicated to
              helping musicians of every level find the right
              instrument, bow, or combination of both to support
              confident playing, expressive freedom, and musical growth.
            </p>

          </header>


          <div className="about-highlights-grid">


            {/* =====================================
                PROFESSIONAL EXPERIENCE
            ====================================== */}

            <article className="about-highlight">

              <div className="about-highlight-icon">

                <Music2
                  size={25}
                  strokeWidth={1.35}
                />

              </div>


              <h3>
                Professional
                <br />
                Experience
              </h3>


              <p>
                Built on decades of professional
                performance and teaching experience, with a
                deep understanding of what produces a
                beautiful sound.
              </p>

            </article>


            {/* =====================================
                CURATED SELECTION
            ====================================== */}

            <article className="about-highlight">

              <div className="about-highlight-icon">

                <BadgeCheck
                  size={25}
                  strokeWidth={1.35}
                />

              </div>


              <h3>
                Curated
                <br />
                Selection
              </h3>


              <p>
                Harmonic Strings focuses on thoughtfully
                chosen instruments, bows, cases, and
                accessories for developing and advancing
                musicians.
              </p>

            </article>


            {/* =====================================
                SOUND & PLAYABILITY
            ====================================== */}

            <article className="about-highlight">

              <div className="about-highlight-icon">

                <AudioLines
                  size={25}
                  strokeWidth={1.35}
                />

              </div>


              <h3>
                Sound &amp;
                <br />
                Playability
              </h3>


              <p>
                The goal is not simply to offer products —
                it is to help players find equipment that
                responds well, projects clearly, and
                supports musical growth.
              </p>

            </article>


            {/* =====================================
                PERSONAL GUIDANCE
            ====================================== */}

            <article className="about-highlight">

              <div className="about-highlight-icon">

                <UserRound
                  size={25}
                  strokeWidth={1.35}
                />

              </div>


              <h3>
                Personal
                <br />
                Guidance
              </h3>


              <p>
                From first upgrades to more refined
                instruments, every step is guided by a
                practical understanding of player needs and
                tonal potential.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================
          FOUNDER
      ====================================== */}

      <section className="about-founder-section">

        <div className="about-content-shell">

          <div className="about-founder-card">


            {/* =====================================
                FOUNDER COPY
            ====================================== */}

            <div className="about-founder-copy">

              <h2>
                Lisa Wiggins
              </h2>


              <p className="about-founder-title">
                Founder and CEO of Harmonic Strings
              </p>


              <div className="about-founder-rule" />


              <p>
                Lisa Wiggins is a graduate of The New
                England Conservatory Of Music in violin
                performance. She has played professionally
                for over thirty years, living and working
                on three continents.
              </p>


              <p>
                Lisa now resides in North Alabama, plays in
                the Huntsville and Mobile Symphonies,
                teaches violin and is a member of The
                Blossomwood String Quartet.
              </p>


              <p>
                Lisa is a frequent guest musician for music
                clubs, churches, choirs and has performed
                with the Huntsville Ballet.
              </p>

            </div>


            {/* =====================================
                PERFORMANCE PHOTO
            ====================================== */}

            <div className="about-founder-visual">

              <div className="about-founder-image-stage">

                <img
                  src={secondPhoto}
                  alt="Lisa Wiggins performing violin"
                  className="about-founder-image"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          COLLECTION CTA
      ====================================== */}

      <section className="about-cta-section">

        <div className="about-content-shell">

          <div className="about-cta-card">

            <div className="about-cta-copy">

              <p className="about-section-label">
                Explore the Collection
              </p>


              <h2>
                Discover instruments and bows
                <br />
                selected to support better sound.
              </h2>


              <p>
                Explore the Harmonic Strings collection of
                violins, violas, cellos, bows, cases, and
                accessories — all presented with the same
                thoughtful, musician-centered approach.
              </p>

            </div>


            <div className="about-cta-actions">

              <Link
                to="/violins"
                className="about-cta-button about-cta-button--primary"
              >
                Explore Violins

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                />
              </Link>


              <Link
                to="/violas"
                className="about-cta-button"
              >
                Explore Violas

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                />
              </Link>


              <Link
                to="/cellos"
                className="about-cta-button"
              >
                Explore Cellos

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                />
              </Link>


              <Link
                to="/bows"
                className="about-cta-button"
              >
                Explore Bows

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}


export default AboutPage;