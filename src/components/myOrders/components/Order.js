'use client';

import Link from "next/link";
import classes from "./Order.module.scss";

const Order = ({ order }) => {

  console.log(order)
  return (
    <div className={`${classes["order-card"]}`}>
      <div className={classes["order__container"]}>
        <span>#{order.orderNumber}</span>
        <span>{order.orderDate}</span>
        <span>${order.totalPrice}</span>
        <span className={classes.status}>Paid</span>
      </div>
      <Link href={`/profile/orders/${order.orderNumber}`}>
      <span className={classes.chevron}>
        <svg>
          <use href="/icons.svg#chevron-right" />
        </svg>
      </span>
      </Link>
    </div>
  );
};

export default Order;
