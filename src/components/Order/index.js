// "use client";

import CustomLink from "../ui/CustomLink";
import AddressDetails from "./components/AddressDetails";
import OrderDetails from "./components/OrderDetails";
import PaymentDetails from "./components/PaymentDetails";
import Product from "./components/Product";
import classes from "./index.module.scss";

const Order = ({ order }) => {
  let orderItems = [];

  if (order.orderdetails.length > 0) {
    orderItems = order.orderdetails.map((item) => (
      <Product Item={item} key={item.id} />
    ));
  }

  return (
    <>
      <div className={classes["order__details"]}>
        <div className={classes["custom-link__container"]}>
          <CustomLink title={"Items Ordered"} url={"/profile/orders"} />
        </div>
        <div className={classes["order__description"]}>
          <p className={classes["order__number"]}>
            Order #${order.ordernumber}
          </p>
          <p>
            <span className={classes["order__status"]}>Completed</span>
            <span className={classes["order__placed"]}>Placed on</span>
            <br />
            <span className={classes["order__date"]}>{order.orderdate}</span>
          </p>
        </div>
        <div className={classes["products__container"]}>
          <div className={classes["products__header"]}>
            <span>Product Name</span>
            <span>Price</span>
            <span>Qty</span>
            <span>subtotal</span>
          </div>
          {orderItems}
        </div>
        <div>
          <div className={classes["information__header"]}>
            <h2>Order Information</h2>
          </div>
          <div className={classes["information__content"]}>
            <OrderDetails details={{ totalprice: order.totalprice }} />
            <AddressDetails Address={order.address} />
            <PaymentDetails />
          </div>
        </div>
        <div className={classes["action-btn__container"]}>
          <button type="button" className={classes["button"]}>
            Reorder
          </button>
          <button
            type="button"
            className={`${classes["rate-btn"]} ${classes["button-reverse"]}`}
          >
            Add Rating
          </button>
        </div>
      </div>
    </>
  );
};

export default Order;
