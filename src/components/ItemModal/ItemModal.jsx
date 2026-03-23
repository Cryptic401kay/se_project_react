import "./ItemModal.css";
import closeIcon from "../../assets/X-icon-grey.svg";

function ItemModal({ onClose, card, isOpen }) {
  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__content_type_img" onClick={handleContentClick}>
        <button className="modal_close" type="button" onClick={onClose}>
          <img className="modal_close-img" src={closeIcon} alt="close icon" />
        </button>
        <img src={card.link} alt={card.name} className="modal__img" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
