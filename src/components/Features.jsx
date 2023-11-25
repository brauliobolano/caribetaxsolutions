import {
  FaStoreAlt,
  FaLanguage,
  FaPiggyBank,
  FaFingerprint,
} from "react-icons/fa";

export default function Features() {
  return (
    <section className="section-features" id="section-features">
      <div className="features-box container">
        <div className="feature">
          <FaStoreAlt className="feature-icon" />
          <p className="feature-title">Pequeño negocio</p>
          <p className="feature-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim,
            commodi.
          </p>
        </div>
        <div className="feature">
          <FaLanguage className="feature-icon" />
          <p className="feature-title">Servicio en Español</p>
          <p className="feature-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim,
            commodi.
          </p>
        </div>
        <div className="feature">
          <FaPiggyBank className="feature-icon" />
          <p className="feature-title">El mejor precio</p>
          <p className="feature-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim,
            commodi.
          </p>
        </div>
        <div className="feature">
          <FaFingerprint className="feature-icon" />
          <p className="feature-title">Trato personalizado</p>
          <p className="feature-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim,
            commodi.
          </p>
        </div>
      </div>
    </section>
  );
}
