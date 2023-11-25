import logo from "../logo.png";
import USflag from "../assets/USflag.png";
import SPflag from "../assets/SPflag.png";
import React, {useState} from "react";




export default function Navigation() {
  const [openLanguageMenu, setOpenLanguageMenu] = useState(false); 
  const [language, setLanguage] = useState("en");
  const currentFlag = language === "en" ? USflag : SPflag;

  return (
    <header className="header-nav container">
      <div className="logo">
        <img className="logo-img" src={logo} alt="Caribe Tax Solutions logo" />
        <p className="logo-text">Caribe Tax Solutions</p>
      </div>

      <nav className="main-nav">
        <ul className="main-nav-list">
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
          <li className="dropdown-language-button">
            <a className="main-nav-link nav-swipe-link" href="#section-language"
              onClick={(e) => {
                e.preventDefault();
                setOpenLanguageMenu(!openLanguageMenu);
              }}
            >
              
              <img className="main-nav-link-flag" src={currentFlag} alt="Language" />
            </a>
            
          </li>
        </ul>
      </nav>

      {openLanguageMenu && (
        <div  className="dropdown-language">
            <ul style={{ listStyleType: "none"}}>
            <li>
              <a
                href="#"
                onClick={() => {
                  setLanguage("en");
                  setOpenLanguageMenu(!openLanguageMenu);
                }}
              >
                <img className="main-nav-link-flag" src={USflag} alt="US Flag" />
              </a> English
            </li>
            <li>
              <a href="#" onClick={() => {setLanguage("es");setOpenLanguageMenu(!openLanguageMenu);}}>
                <img className="main-nav-link-flag" src={SPflag} alt="SP Flag" />
              </a> Español
            </li>
          </ul>
        </div>
              )}

    </header>
  );
}