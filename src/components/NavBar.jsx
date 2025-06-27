import { useState } from "react";
import "../styles/NavBar.css";

const Navbar = ({ onOpenModal }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar__left">
        <span className="logo-placeholder">Logo</span>
      </div>

      {/* Enlaces centrales */}
      <div className={`navbar__center ${menuOpen ? "open" : ""}`}>
        <a href="#inicio" onClick={handleLinkClick}>
          Inicio
        </a>
        <a href="#biografia" onClick={handleLinkClick}>
          Biografía
        </a>
        <a href="#musica" onClick={handleLinkClick}>
          Música
        </a>
        <a href="#eventos" onClick={handleLinkClick}>
          Eventos
        </a>
        <a href="#contacto" onClick={handleLinkClick}>
          Contacto
        </a>
      </div>

      {/* Botones de acción */}
      <div className="navbar__right">
        {/* Botón solo visible en desktop */}
        <button
          className="navbar__cta navbar__cta--desktop"
          onClick={onOpenModal}
        >
          Contratar
        </button>

        {/* Botón solo visible en mobile */}
        <button
          className="navbar__cta navbar__cta--mobile"
          onClick={onOpenModal}
        >
          Contratar
        </button>

        {/* Menú hamburguesa */}
        <button className="navbar__toggle" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
