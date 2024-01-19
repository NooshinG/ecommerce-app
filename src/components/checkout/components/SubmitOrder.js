"use client";

import insertOrder from "@/lib/insertOrder";
import classes from "./SubmitOrder.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { clearCart } from "@/app/redux/cartSlice";

const SubmitOrder = (props) => {
  const address = useSelector((state) => state.address);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const placeOrderHandler = async (address, cartItems) => {
    setIsLoading(true);
    try {
      const response = await insertOrder("guest", address, cartItems);
      if (response.data) {
        dispatch(clearCart());
        props.confirmOrder(true);
      }
    } catch (error) {
      console.log(error);
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
        address.addressList.find((el) => el.id === address.deliverAddress),
        cart
      )}
    >
      {isLoading ? "Loading..." : "Pay Now"}
    </button>
  );
};

export default SubmitOrder;
