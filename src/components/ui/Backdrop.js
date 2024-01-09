import classes from "./Backdrop.module.scss";

const Backdrop = (props) => {
  return (
    <div
      className={classes.backdrop}
      onClick={(event) => {
        event.preventDefault();
        if (event.target == event.currentTarget) {
          props.closeModalHandler();
        }
      }}
    >
      {props.children}
    </div>
  );
};

export default Backdrop;
