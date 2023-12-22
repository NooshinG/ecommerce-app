"use client";

import { useSelector } from "react-redux";
import classes from "./Cart.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/initSupabase";
import CartItem from "./CartItem";


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const itemsId = [];
  const [data, setData] = useState([]);

  if (cart.totalQuantity == 0) {
    return (
      <div className={classes["empty-container"]}>
        <img
          src="/svg/empty-bag.svg"
          alt="empty-bag"
          className={classes["empty-bag"]}
        ></img>
        <h2 className={classes["empty-title"]}>Uh oh ....!</h2>
        <p className={classes["empty-message"]}>
          You haven't added any any items. Start shopping to make your bag bloom
        </p>
        <Link href="/" className={classes["shop-link"]}>
          Continue Shopping
        </Link>
      </div>
    );
  }

  cart.items.forEach((element) => {
    itemsId.push(element.id);
  });

  useEffect(() => {
    let response;

    async function getItems() {
      let { data } = await supabase
        .from("product")
        .select("*,category(name)")
        .in("id", itemsId);

      return data;
    }

    (async () => {
      response = await getItems();
      setData(response);
    })();
  }, []);


  let Items = data.map((item) => (
    <CartItem
      Item={item}
      Qty={cart.items.filter((el) => el["id"] == item.id)[0].qty}
    />
  ));

  return (
    <div className={classes['cart__container']}>
      <h2 className={classes['cart__title']}>My Cart</h2>
      <div className={classes['padding-inline-default']}>{Items}</div>
      
    </div>
  );
};

export default Cart;
