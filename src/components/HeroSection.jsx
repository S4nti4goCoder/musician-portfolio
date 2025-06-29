import React from "react";
import "../styles/HeroSection.css";
import heroImage from "../assets/hero.jpg";
import AudioPlayer from "./AudioPlayer";
import {
  FaInstagram,
  FaYoutube,
  FaSpotify,
  FaFacebookF
} from "react-icons/fa";

function HeroSection() {
  return (
    <section className="hero" id="inicio" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero__overlay" />
      
      <div className="hero__container">
        {/* Lado izquierdo - Textos */}
        <div className="hero__left">
          <div className="hero__title-section">
            <h1 className="hero__name">
              <span className="hero__highlighted">Frank</span> García
            </h1>
          </div>
          
          <div className="hero__info-section">
            <p className="hero__intro">
              Trompetista y percusionista que transforma emociones en sonido.
            </p>
            <p className="hero__subtext">
              Con una técnica impecable y un alma expresiva, su música fusiona
              tradición latina con una visión contemporánea.
            </p>
            <p className="hero__quote">
              Una energía vibrante. Un ritmo que habla. Un artista que se siente.
            </p>
          </div>

          <div className="hero__socials">
            <div className="tooltip-container">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <span className="tooltip-text">Instagram</span>
            </div>
            <div className="tooltip-container">
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <FaYoutube />
              </a>
              <span className="tooltip-text">YouTube</span>
            </div>
            <div className="tooltip-container">
              <a href="https://spotify.com" target="_blank" rel="noreferrer">
                <FaSpotify />
              </a>
              <span className="tooltip-text">Spotify</span>
            </div>
            <div className="tooltip-container">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <span className="tooltip-text">Facebook</span>
            </div>
          </div>
        </div>

        {/* Lado derecho - Reproductor */}
        <div className="hero__right">
          <AudioPlayer />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;