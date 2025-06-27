import "../styles/HireModal.css";

const HireModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="hire-modal__overlay">
      <div className="hire-modal__content">
        <button className="hire-modal__close" onClick={onClose}>
          ✖
        </button>
        <h2>Solicitud de Contratación</h2>
        <form className="hire-form">
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo electrónico" required />
          <input type="text" placeholder="Tipo de evento" />
          <textarea placeholder="Mensaje..." rows={4} required></textarea>
          <button type="submit">Enviar Solicitud</button>
        </form>
      </div>
    </div>
  );
};

export default HireModal;
