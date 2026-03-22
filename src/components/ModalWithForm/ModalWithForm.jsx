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

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <div
      className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__content" onClick={handleContentClick}>
        <h2 className="modal__title">{title}</h2>
        <button className="modal_close" type="button" onClick={onClose}>
          <img src={closeIcon} alt="Close" />
        </button>
        <form className="modal__form" name={name} onSubmit={handleSubmit}>
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
