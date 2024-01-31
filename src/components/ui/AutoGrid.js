import classes from "./AutoGrid.module.scss";

const AutoGrid = ({ children }) => {
  return <div className={`${classes["grid-auto"]}`}>{children}</div>;
};

export default AutoGrid;
