export const validateNoteTitle = (title) => {
  if (title.trim().length < 1) {
    return "Untitled Note";
  }

  return title.trim();
};
