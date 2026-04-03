import { useEffect, useState } from "react";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const defaultValues = { name: "", imageUrl: "", weather: "" };

const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  const { values, errors, isValid, handleChange, resetForm, validate } =
    useFormWithValidation(defaultValues);
  const [isSubmitAttempted, setIsSubmitAttempted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      resetForm();
      setIsSubmitAttempted(false);
    }
  }, [isOpen, resetForm]);

  useEffect(() => {
    if (isSubmitAttempted) {
      validate();
    }
  }, [isSubmitAttempted, validate]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsSubmitAttempted(true);
    const currentErrors = validate();
    if (Object.values(currentErrors).some((msg) => msg)) return;
    onAddItem(values);
    resetForm();
    setIsSubmitAttempted(false);
  };

  return (
    <ModalWithForm
      title="New garment"
      name="add-garment"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText="Add garment"
      isDisabled={!isValid}
    >
      <label htmlFor="name" className="modal__label modal__label-name">
        Name{" "}
        <input
          className={`modal__input modal__input_type_name${isSubmitAttempted && errors.name ? " modal__input--error" : ""}`}
          id="name"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
        <span
          className={`modal__error${isSubmitAttempted && errors.name ? " modal__error--visible" : ""}`}
        >
          {isSubmitAttempted && errors.name}
        </span>
      </label>
      <label htmlFor="imageUrl" className="modal__label modal__label-img">
        Image{" "}
        <input
          className={`modal__input modal__input_type_url${isSubmitAttempted && errors.imageUrl ? " modal__input--error" : ""}`}
          id="imageUrl"
          name="imageUrl"
          placeholder="Image URL"
          value={values.imageUrl}
          onChange={handleChange}
        />
        <span
          className={`modal__error${isSubmitAttempted && errors.imageUrl ? " modal__error--visible" : ""}`}
        >
          {isSubmitAttempted && errors.imageUrl}
        </span>
      </label>
      <fieldset className="modal__radio-btns">
        <legend className="modal__legend">Select the weather type:</legend>
        {["hot", "warm", "cold"].map((type) => (
          <label
            key={type}
            htmlFor={type}
            className="modal__label modal__label_type_radio"
          >
            <input
              className={`modal__radio-input${isSubmitAttempted && errors.weather ? " modal__radio-input--error" : ""}`}
              id={type}
              name="weather"
              type="radio"
              value={type}
              checked={values.weather === type}
              onChange={handleChange}
            />{" "}
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </label>
        ))}
        <span
          className={`modal__error${isSubmitAttempted && errors.weather ? " modal__error--visible" : ""}`}
        >
          {isSubmitAttempted && errors.weather}
        </span>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
