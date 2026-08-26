function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-eyebrow">
            Fine String Instruments
          </p>

          <h1 className="hero-brand-title">
            Harmonic <span>Strings</span>
          </h1>

          <p className="hero-description">
            Fine String Instruments and accessories chosen by
            musicians who expect more from every note.
          </p>

          <div className="hero-actions">
            <a
              href="#featured"
              className="hero-primary-button"
            >
              Find Your Signature Sound
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;