import React from "react";
import "../styles/HeroSection.css";
import heroImage from "../assets/hero.jpg"; // imagen de fondo

function HeroSection() {
  return (
    <section
      className="hero-bg"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-bg__overlay">
        <div className="hero-bg__content">
          <h1 className="hero-bg__title">BIO</h1>
          <p className="hero-bg__description">
            Estilo profundo, letras honestas y una conexión única con el público
            definen a este artista contemporáneo. Una mezcla de raíces latinas
            con influencias modernas que conmueven y despiertan.
          </p>
          <button className="hero-bg__cta">Ver Biografía</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
