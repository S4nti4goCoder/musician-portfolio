import React, { useState } from "react";
import "../styles/BioSection.css";
import heroImage from "../assets/bio.jpg";
import Modal from "./Modal";

const BioSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bio" id="biografia">
      <div className="container">
        <div className="bio__content">
          <h2 className="bio__title">Biografía</h2>
          <p className="bio__text">
            Trompetista y percusionista que fusiona técnica impecable y alma
            expresiva para transmitir emociones a través del sonido.
          </p>
          <button className="bio__cta" onClick={() => setIsOpen(true)}>
            Leer Biografía Completa
          </button>
        </div>
        <div className="bio__image">
          <img src={heroImage} alt="Foto del artista" />
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 style={{ marginBottom: "1rem" }}>Biografía Completa</h2>
        <p>
          Frank García es un músico colombiano con alma de percusión y aliento
          de metal. Su trayectoria combina técnica rigurosa y una sensibilidad
          artística única, forjada entre escenarios, estudios de grabación y
          raíces latinas profundas.
        </p>
        <p>
          Desde temprana edad, Frank mostró afinidad por los sonidos que hablan
          sin palabras. Formado en escuelas de música clásica y rodeado por
          influencias afrolatinas, su estilo fusiona la potencia de la trompeta
          con la energía rítmica de la percusión contemporánea.
        </p>
        <p>
          Ha participado en proyectos de jazz, fusión latina y música
          experimental, presentándose en festivales nacionales e internacionales.
          Su enfoque combina la improvisación con estructuras sólidas,
          transmitiendo emociones con cada nota.
        </p>
        <p>
          Actualmente, se dedica a crear composiciones que narran historias
          humanas a través del ritmo y el viento. Su propuesta artística es una
          invitación a sentir, más que a entender.
        </p>
      </Modal>
    </section>
  );
};

export default BioSection;
