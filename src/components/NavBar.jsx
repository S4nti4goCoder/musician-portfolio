import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../styles/NavBar.css";

const Navbar = ({ onOpenModal }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  // Detectores de sección usando Intersection Observer
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.5 });
  const { ref: bioRef, inView: bioInView } = useInView({ threshold: 0.5 });

  // Actualizar sección activa basada en lo que está visible
  useEffect(() => {
    if (heroInView) {
      setActiveSection("inicio");
    } else if (bioInView) {
      setActiveSection("biografia");
    }
  }, [heroInView, bioInView]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      {/* Referencias invisibles para detectar secciones */}
      <div
        ref={heroRef}
        className="section-detector"
        data-section="inicio"
      ></div>
      <div
        ref={bioRef}
        className="section-detector"
        data-section="biografia"
      ></div>

      <nav className="navbar">
        {/* Logo */}
        <div className="navbar__left">
          <div className="logo-container">
            <span className="logo-name">Frank</span>
            <span className="logo-surname">García</span>
            <div className="logo-subtitle">Musician</div>
          </div>
        </div>

        {/* Enlaces centrales */}
        <div className={`navbar__center ${menuOpen ? "open" : ""}`}>
          <a
            href="#inicio"
            onClick={handleLinkClick}
            className={activeSection === "inicio" ? "active" : ""}
          >
            Inicio
          </a>
          <a
            href="#biografia"
            onClick={handleLinkClick}
            className={activeSection === "biografia" ? "active" : ""}
          >
            Biografía
          </a>
          <a
            href="#musica"
            onClick={handleLinkClick}
            className={activeSection === "musica" ? "active" : ""}
          >
            Música
          </a>
          <a
            href="#eventos"
            onClick={handleLinkClick}
            className={activeSection === "eventos" ? "active" : ""}
          >
            Eventos
          </a>
          <a
            href="#contacto"
            onClick={handleLinkClick}
            className={activeSection === "contacto" ? "active" : ""}
          >
            Contacto
          </a>
        </div>

        {/* Botones de acción */}
        <div className="navbar__right">
          <button
            className="navbar__cta navbar__cta--desktop"
            onClick={onOpenModal}
          >
            Contratar
          </button>

          <button
            className="navbar__cta navbar__cta--mobile"
            onClick={onOpenModal}
          >
            Contratar
          </button>

          <button className="navbar__toggle" onClick={toggleMenu}>
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
