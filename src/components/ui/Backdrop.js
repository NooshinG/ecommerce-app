import classes from "./Backdrop.module.scss";

const Backdrop = (props) => {
  return <div className={classes.backdrop}>{props.children}</div>;
};

export default Backdrop;
