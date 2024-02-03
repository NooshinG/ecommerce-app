'use client'

import { useState } from "react";
import classes from "./InputNumber.module.scss";

const InputNumber = ({
  defaultValue = 1,
  maxValue = 20,
  parentAction = (val) => {},
}) => {
  const [value, setValue] = useState(defaultValue);

  const changeQtyHandler = (num) => {
    if (value + num > maxValue || value + num < 1) {
      return;
    }
    parentAction(value + num);
    setValue((prev) => prev + num);
  };

  return (
    <div className={classes["input__container"]}>
      <button
        type="button"
        onClick={changeQtyHandler.bind(null, -1)}
        className={classes.btn}
      >
        <svg>
          <use href="/icons.svg#small-minus" />
        </svg>
      </button>
      <input type="text" value={value} className={classes.input} readOnly />
      <button
        type="button"
        onClick={changeQtyHandler.bind(null, 1)}
        className={classes.btn}
      >
        <svg>
          <use href="/icons.svg#small-plus" />
        </svg>
      </button>
    </div>
  );
};

export default InputNumber;
