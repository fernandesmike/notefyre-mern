export const ValidateForm = (fieldValue) => {
  const fieldErrors = {};

  if (fieldValue.trim().length < 1) {
    console.log(fieldValue.length);
    fieldErrors.require = "This field is required";
    console.log(fieldErrors);
  }

  return fieldErrors;
};
