const Error = ({ errorMessage }) => {
  return (
    <div>
      <p>There was an error uploading your note!</p>
      <p>Message: {errorMessage}</p>
    </div>
  );
};

export default Error;
