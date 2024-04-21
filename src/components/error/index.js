import classes from "./index.module.scss";

const ErrorComponent = ({ handleError, errorMessage }) => {
  return (
    <div className={classes["error__container"]}>
      <h2 className={classes["title"]}>Something went wrong!</h2>
      <p className={classes["message"]}>{errorMessage}</p>
      <button
        className={classes["button"]}
        onClick={
          // Attempt to recover by trying to re-render the segment
          handleError
        }
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorComponent;
