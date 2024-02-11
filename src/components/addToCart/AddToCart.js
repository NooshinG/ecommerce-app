"use client";

import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/cartSlice";
import classes from "./AddToCart.module.scss";

const AddToCart = ({ ProductId, Price, Qty = 1, IsDisable = false }) => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className={classes.button}
      onClick={() =>
        dispatch(addToCart({ id: ProductId, qty: Qty, unitPrice: Price }))
      }
      disabled={IsDisable}
    >
      Add to Bag
    </button>
  );
};

export default AddToCart;
