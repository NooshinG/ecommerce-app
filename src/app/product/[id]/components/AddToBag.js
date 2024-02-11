"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import InputNumber from "@/components/ui/InputNumber";
import AddToCart from "@/components/addToCart/AddToCart";
import classes from "../style.module.scss";

const AddToBag = ({ id, qty, price }) => {
  const [quantity, setQuantity] = useState(1);
  //   const [disableAddToCart, setDisableAddToCart] = useState(false);
  const cartRdx = useSelector((state) => state.cart);

  let cartItemQty = cartRdx.items.find((item) => item.id == id).qty;
  //   if (cartItemQty + quantity > qty) {
  //     setDisableAddToCart(true);
  //   }

  return (
    <>
      <div>
        <div className={classes["qty__container"]}>
          <span>Quantity : </span>
          <InputNumber
            maxValue={qty}
            parentAction={(val) => setQuantity(val)}
          />
        </div>
        {cartItemQty + quantity > qty && (
          <p className={classes["error-massege"]}>
            The number you have chosen is more than the stock
          </p>
        )}
      </div>
      <AddToCart
        ProductId={id}
        Price={price}
        Qty={quantity}
        IsDisable={cartItemQty + quantity > qty}
      />
    </>
  );
};

export default AddToBag;
