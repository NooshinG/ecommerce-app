"use client";

import { useSelector } from "react-redux";
import EmptyCart from "../cart/EmptyCart";
import FullCheckout from "./FullCheckout";
import { useState } from "react";
import OrderConfirmed from "./components/OrderConfirmed";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const [isOrderSubmited, setIsOrderSubmited] = useState(false);

  if (isOrderSubmited) {
    return <OrderConfirmed confirmOrder={setIsOrderSubmited} />;
  }

  if (cart.totalQuantity == 0) {
    return <EmptyCart />;
  }

  return <FullCheckout cart={cart} setIsOrderSubmited={setIsOrderSubmited}/>;
};

export default Checkout;
