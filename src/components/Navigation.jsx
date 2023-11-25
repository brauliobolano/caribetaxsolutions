import { IoLanguageSharp } from "react-icons/io5";
import logo from "../logo.png";
export default function Navigation() {
  return (
    <header className="header-nav container">
      <div className="logo">
      <img
        src={logo}
        alt="Caribe Tax Solutions logo"
        style={{ width: '100px', height: '100px' }}
      />
      <p className="logo-text">Caribe Tax Solutions</p>

      </div>

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <IoLanguageSharp />
            <a className="main-nav-link" href="#section-how">
              Idioma
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#section-how">
              Pasos
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#section-services">
              Servicios
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#section-features">
              Características
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#section-cta">
              Contactar
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
