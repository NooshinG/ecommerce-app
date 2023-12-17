"use client";

import { useSelector } from "react-redux";
import classes from "./Cart.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/initSupabase";

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
        .select("*")
        .in("id", itemsId);

      return data;
    }

    (async () => {
      response = await getItems();
      setData(response);
    })();

  }, []);

  let val = data.map(item=><p>{item.title}</p>)

  return <div>{val}</div>;
};

export default Cart;
