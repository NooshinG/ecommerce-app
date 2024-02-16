"use client";

import classes from "./SubmitOrder.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { clearCart } from "@/app/redux/cartSlice";

const SubmitOrder = (props) => {
  const address = useSelector((state) => state.address);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const placeOrderHandler = async (
    username,
    address,
    items,
    totalPrice,
    totalQuantity
  ) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/submitOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          address,
          items,
          totalPrice,
          totalQuantity,
        }),
      });

      // if (error !== null) {
      //   throw new Error(
      //     "Something went wrong! Please try later or call administrator."
      //   );
      // }

      if (res.ok) {
        dispatch(clearCart());
        props.confirmOrder(true);
      }
    } catch (error) {
      console.log(error.message);
    }

    setIsLoading(false);
  };

  return (
    <button
      type="button"
      className={`${classes["checkout__pay"]} ${classes["pay-area"]}`}
      disabled={!address.deliverAddress || isLoading}
      onClick={placeOrderHandler.bind(
        null,
        "guest",
        JSON.stringify(
          address.addressList.find((el) => el.id === address.deliverAddress)
        ),
        JSON.stringify(cart.items),
        cart.totalAmount,
        cart.totalQuantity
      )}
    >
      {isLoading ? "Loading..." : "Pay Now"}
    </button>
  );
};

export default SubmitOrder;
