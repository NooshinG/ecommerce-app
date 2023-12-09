"use client";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/app/redux/cartSlice";
import classes from "./AddToCart.module.scss";

const AddToCart = (props) => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log(items);

  return (
    <button
      type="button"
      className={classes.button}
      onClick={() =>
        dispatch(
          addToCart({ name: props.Title, qty: 1, unitPrice: props.Price })
        )
      }
    >
      Add to Bag
    </button>
  );
};

export default AddToCart;
