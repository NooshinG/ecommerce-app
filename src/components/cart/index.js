"use client";

import { useSelector } from "react-redux";
import EmptyCart from "./components/EmptyCart";
import FullCart from "./components/FullCart";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  if (cart.totalQuantity == 0) {
    return <EmptyCart />;
  }

  return <FullCart cart={cart} />;
};

export default Cart;
