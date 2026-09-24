export const ValidateForm = (fieldValue) => {
  const fieldErrors = {};

  if (fieldValue.trim().length < 1) {
    fieldErrors.require = "This field is required";
  }

  return fieldErrors;
};
