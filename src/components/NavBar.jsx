import { useState } from "react";
import "../styles/NavBar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <span className="logo-placeholder">Logo</span>
      </div>

      <div className={`navbar__center ${menuOpen ? "open" : ""}`}>
        <a href="#">Inicio</a>
        <a href="#">Biografía</a>
        <a href="#">Proyectos</a>
        <a href="#">Eventos</a>
        <a href="#">Prensa</a>
      </div>

      <div className="navbar__right">
        <button className="navbar__cta">Contratar Artista</button>
        <button className="navbar__toggle" onClick={toggleMenu}>
          &#9776;
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
