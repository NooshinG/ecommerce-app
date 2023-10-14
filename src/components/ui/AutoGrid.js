import classes from "./AutoGrid.module.scss";

const AutoGrid = ({ children }) => {
  return (
    <div
      className={`${classes["grid-auto"]} ${classes["padding-inline-default"]}`}
    >
      {children}
    </div>
  );
};

export default AutoGrid;
