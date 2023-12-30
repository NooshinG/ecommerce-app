"use client";

import { useSelector } from "react-redux";
import EmptyCart from "../cart/EmptyCart";
import FullCheckout from "./FullCheckout";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);

  if (cart.totalQuantity == 0) {
    return <EmptyCart />;
  }

  return <FullCheckout cart={cart} />;
};

export default Checkout;
