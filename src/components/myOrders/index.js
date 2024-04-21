"use client";

import { useEffect, useState } from "react";
import Order from "./components/Order";
import classes from "./components/Order.module.scss";
import CustomLink from "../ui/CustomLink";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch(`/api/getOrders?user=guest`);
        const data = await res.json();
        setOrders(data);
      } catch (error) {
        // console.log(error);
        throw new Error(error?.message);
      }
    };

    fetchOrders();
  }, []);

  let content =
    orders.length > 0 ? orders.map((order) => <Order order={order} />) : <></>;
    
  return (
    <div className={classes['order-list']}>
      <div className={classes['custom-link__container']}>
        <CustomLink title={'My Orders'} url={'/profile'}/>
      </div>
      <div className={classes["order-header"]}>
        <span>Order ID</span>
        <span>Date</span>
        <span>Price</span>
        <span>Status</span>
      </div>
      {content}
    </div>
  );
};

export default MyOrders;
