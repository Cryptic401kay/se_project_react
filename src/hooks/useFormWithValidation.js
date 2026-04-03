import { useState, useCallback } from "react";

function validateField(name, value) {
  switch (name) {
    case "name":
      if (!value) return "Name is required";
      return "";
    case "imageUrl":
      if (!value) return "Image URL is required";
      try {
        new URL(value);
      } catch {
        return "Image URL must be valid";
      }
      return "";
    case "weather":
      if (!value) return "Please select a weather type";
      return "";
    default:
      return "";
  }
}

export function useFormWithValidation(defaultValues = {}) {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validate = useCallback(
    (fieldValues = values) => {
      const newErrors = {};
      Object.keys(defaultValues).forEach((name) => {
        newErrors[name] = validateField(name, fieldValues[name]);
      });
      setErrors(newErrors);
      setIsValid(Object.values(newErrors).every((msg) => !msg));
      return newErrors;
    },
    [defaultValues, values],
  );

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues((prev) => {
      const updated = { ...prev, [name]: value };
      validate(updated);
      return updated;
    });
  };

  const resetForm = useCallback(
    (newValues = defaultValues, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [defaultValues],
  );

  return { values, errors, isValid, handleChange, resetForm, validate };
}
