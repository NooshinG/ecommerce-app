"use client";

// import { useSelector } from "react-redux";
import classes from "./Cart.module.scss";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/initSupabase";
import CartItem from "./CartItem";
import CartDetails from "./CartDetails";

const FullCart = ({cart}) => {
  // const cart = useSelector((state) => state.cart);
  const itemsId = [];
  const [data, setData] = useState([]);

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
  }, [JSON.stringify(itemsId),JSON.stringify(data)]);

  // console.log(cart.items);

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
      <div className={classes["padding-inline-default"]}>{Items}</div>
      <CartDetails totalPrice={cart.totalAmount} discount={cart.discount} />
    </div>
  );
};

export default FullCart;
