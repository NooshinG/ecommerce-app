"use client";

import classes from "../index.module.scss";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import CartDetails from "./CartDetails";

const FullCart = ({ cart }) => {
  const itemsId = [];
  const [data, setData] = useState([]);

  cart.items.forEach((element) => {
    itemsId.push(element.id);
  });
  
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          `/api/getItems?itemsId=${JSON.stringify(itemsId).replace("[", "").replace("]", "")}`
        );
        const itemsData = await response.json();
        setData(itemsData);
      } catch (error) {
        // console.error("Error fetching items: ", error);
        throw new Error(error?.message);
      }
    };

    fetchItems();
  }, []);

  let Items = data.map((item) => {
    const cartItem = cart.items.filter((el) => el["id"] == item.id)[0];

    if (cartItem) {
      if (Object.hasOwn(cartItem, "qty")) {
        return <CartItem Item={item} Qty={cartItem.qty} key={item.id} />;
      }
    }
  });

  return (
    <div className={classes["cart__container"]}>
      <h2 className={classes["cart__title"]}>My Cart</h2>
      <div
        className={`${classes["items-area"]} ${classes["items__container"]}`}
      >
        <div className={classes["table__header"]}>
          <span>Product Name</span>
          <span>Price</span>
          <span>Qty</span>
          <span>subtotal</span>
        </div>
        {Items}
      </div>
      <CartDetails
        className="detail-area"
        totalPrice={cart.totalAmount}
        discount={cart.discount}
      />
    </div>
  );
};

export default FullCart;
