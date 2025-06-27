import { useState } from "react";
import "../styles/NavBar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <span className="logo-placeholder">Logo</span>
      </div>

      <div className={`navbar__center ${menuOpen ? "open" : ""}`}>
        <a href="#" onClick={handleLinkClick}>
          Inicio
        </a>
        <a href="#" onClick={handleLinkClick}>
          Biografía
        </a>
        <a href="#" onClick={handleLinkClick}>
          Proyectos
        </a>
        <a href="#" onClick={handleLinkClick}>
          Eventos
        </a>
        <a href="#" onClick={handleLinkClick}>
          Prensa
        </a>
      </div>

      <div className="navbar__right">
        <button className="navbar__cta">Contratar Artista</button>
        <button className="navbar__toggle" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
