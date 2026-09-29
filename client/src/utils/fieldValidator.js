export const validateNoteTitle = (fieldValue) => {
  const titleError = {};
  const d = new Date();

  if (fieldValue.trim().length < 1) {
    titleError.message = "Empty title, saved as draft!";
    titleError.placeholder = `[Draft] ${d.toLocaleString()}`;
  }

  return titleError;
};

export const validateNoteContents = (fieldValue) => {
  const errors = {};

  return errors;
};
