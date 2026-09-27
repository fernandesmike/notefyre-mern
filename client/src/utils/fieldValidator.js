export const validateForm = (fieldValue) => {
  const fieldErrors = {};

  if (fieldValue.trim().length < 1) {
    fieldErrors.require = "This field is required";
  }

  return fieldErrors;
};

export const validateNoteTitle = (fieldValue) => {
  const titleError = {};
  const d = new Date();

  if (fieldValue.trim().length < 1) {
    titleError.placeholder = `[Draft] ${d.toLocaleString()}`;
  }

  return titleError;
};

export const validateNoteContents = (fieldValue) => {
  const errors = {};

  return errors;
};
