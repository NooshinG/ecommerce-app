import classes from "./LoadingSpinner.module.scss";

const LoadingSpinner = () => {
  return (
    <div className={classes.container}>
      <span className={classes.spinner}></span>
    </div>
  );
};

export default LoadingSpinner;
