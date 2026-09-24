export const ValidateForm = (fieldValue) => {
  const fieldErrors = {};

  if (fieldValue.trim().length < 1) {
    fieldErrors.require = "This field is required";
  }

  return fieldErrors;
};

export const ValidateNoteTitle = (fieldValue) => {
  const titleError = {};
  const d = new Date();

  if (fieldValue.trim().length < 1) {
    titleError.placeholder = `Draft ${d.toUTCString()}`;
  }

  return titleError;
};
