import "./ModalWithForm.css";
import closeIcon from "../../assets/X-icon-grey.svg";

function ModalWithForm({
  children,
  buttonText,
  title,
  onClose,
  isOpen,
  name,
  onSubmit,
}) {
  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__content" onClick={handleContentClick}>
        <h2 className="modal__title">{title}</h2>
        <button className="modal__close" type="button" onClick={onClose}>
          <img src={closeIcon} alt="Close" />
        </button>
        <form className="modal__form" name={name} onSubmit={onSubmit}>
          {children}
          <button className="modal__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
