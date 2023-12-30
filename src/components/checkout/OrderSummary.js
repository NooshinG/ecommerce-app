"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/initSupabase";
import classes from "./OrderSummary.module.scss";

const OrderSummary = ({ cart }) => {
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
  }, [JSON.stringify(itemsId), JSON.stringify(data)]);

  let Items = data.map((item) => {
    const cartItem = cart.items.filter((el) => el["id"] == item.id)[0];

    if (cartItem) {
      if (Object.hasOwn(cartItem, "qty")) {
        return (
          <div key={item.id} className={classes["item__container"]}>
            <div
              className={`${classes["img__container"]} ${classes["img-area"]}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className={classes.img}
              ></img>
            </div>
            <h2 className={`${classes.ctg} ${classes["ctg-area"]}`}>
              {item.category.name}
            </h2>
            <p className={`${classes["item__info"]} ${classes["title-area"]}`}>
              {item.title}
            </p>
            <p className={`${classes["item__info"]} ${classes["qty-area"]}`}>
              Qty-{cartItem.qty}
            </p>
          </div>
        );
      }
    }
  });

  return (
    <div className={classes["summary__container"]}>
      <div className={classes.section}>
        <h2 className={classes["section__title"]}>Order Summary</h2>
        <div className={classes.summary}>{Items}</div>
      </div>

      <div className={classes.section}>
        <h2 className={classes["section__title"]}>Order Details</h2>
        <div className={classes["details__container"]}>
          <div className={classes["detail__info"]}>
            <span className={classes["regular__title"]}>Sub Total</span>
            <span>${cart.totalAmount}</span>
          </div>
          <div className={classes["detail__info"]}>
            <span className={classes["regular__title"]}>Discount</span>
            <span>${cart.discount}</span>
          </div>
          <div className={classes["detail__info"]}>
            <span className={classes["regular__title"]}>Delivery Fee</span>
            <span>-$0.00</span>
          </div>
          <div className={classes["detail__info"]}>
            <span>Grand Total</span>
            <span>${cart.totalAmount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;