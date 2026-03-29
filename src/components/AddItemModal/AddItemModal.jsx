import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  const defaultValues = { name: "", imageUrl: "", weather: "" };

  const { values, handleChange } = useForm(defaultValues);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddItem(values, handleChange);
  };

  return (
    <ModalWithForm
      title="New garment"
      name="add-garment"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText="Add garment"
    >
      <label htmlFor="name" className="modal__label modal__label-name">
        Name{" "}
        <input
          type="text"
          name="name"
          required
          className="modal__input modal__input_type_name"
          id="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="imageURL" className="modal__label modal__label-img">
        Image{" "}
        <input
          type="url"
          name="imageUrl"
          required
          className="modal__input modal__input_type_url"
          id="imageURL"
          placeholder="Image URL"
          value={values.imageUrl}
          onChange={handleChange}
        />
      </label>
      <fieldset className="modal__radio-btns">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            id="hot"
            className="modal__radio-input"
            name="weather"
            value="hot"
            onChange={handleChange}
          />{" "}
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            id="warm"
            className="modal__radio-input"
            name="weather"
            value="warm"
            onChange={handleChange}
          />{" "}
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            id="cold"
            className="modal__radio-input"
            name="weather"
            value="cold"
            onChange={handleChange}
          />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
