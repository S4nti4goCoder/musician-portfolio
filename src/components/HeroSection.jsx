import React from "react";
import "../styles/HeroSection.css";
import heroImage from "../assets/hero.jpg";
import AudioPlayer from "./AudioPlayer";

function HeroSection() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero__overlay" />
      <div className="hero__content">
        <div className="hero__text">
          <h1>Frank García</h1>
          <p>
            Frank García es un artista que transforma vivencias en canciones con alma.
            Sus raíces latinas, su pasión por lo humano y una sensibilidad honesta
            lo convierten en una voz única de la música contemporánea.
          </p>
        </div>

        <div className="hero__player">
          <AudioPlayer />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
