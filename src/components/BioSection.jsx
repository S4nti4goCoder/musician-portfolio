import React, { useState } from "react";
import "../styles/BioSection.css";
import heroImage from "../assets/bio.jpg";
import Modal from "./Modal";

const BioSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bio" id="biografia">
      <div className="bio__content">
        <h2 className="bio__title">Biografía</h2>
        <p className="bio__text">
          Artista con una trayectoria marcada por la autenticidad, pasión y
          conexión con el público.
        </p>
        <button className="bio__cta" onClick={() => setIsOpen(true)}>
          Leer Biografía Completa
        </button>
      </div>
      <div className="bio__image">
        <img src={heroImage} alt="Foto del artista" />
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 style={{ marginBottom: "1rem" }}>Biografía Completa</h2>
        <p>
          Desde sus inicios, este artista ha logrado conectar con el público a
          través de sus letras y su autenticidad. Combinando influencias del
          folk, rock y música latina, ha construido una identidad sonora propia.
          Ha participado en festivales internacionales, colaborado con múltiples
          músicos reconocidos y su obra ha sido elogiada por la crítica.
        </p>
        <p>
          Su mensaje artístico se centra en la introspección, la conexión humana
          y la evolución personal. Con cada proyecto, busca desafiar los límites
          y ofrecer una experiencia emocional profunda para su audiencia.
        </p>
      </Modal>
    </section>
  );
};

export default BioSection;
