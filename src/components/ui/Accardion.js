import { useState } from "react";
import classes from "./Accardion.module.scss";

const Accardion = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <button
        className={classes.btn}
        type="button"
        onClick={() => {
          setShowDetails((prev) => !prev);
        }}
      >
        <span>{props.title}</span>
        <svg className={`${showDetails ? classes["rotate"] : ""}`}>
          <use href="/icons.svg#chevron-bottom" />
        </svg>
      </button>
      {showDetails && props.children}
    </div>
  );
};

export default Accardion;
