export default function Hero({ children }) {
  return (
    <div className="hero-img-box">
      {children}
      <section className="section-hero">
        <div className="hero-text-box text-center">
          <h1 className="heading-primary">
            Servicio de calidad a la altura que te mereces.
          </h1>
          <div className="hero-text-wrapper">
            <p className="hero-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          <a href="#" className="btn btn--primary">
            Contactar
          </a>
        </div>
      </section>
    </div>
  );
}
