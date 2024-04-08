import classes from "./Details.module.scss";

const OrderDetails = ({ details }) => {
  return (
    <div className={`${classes['order-details']} ${classes["details__container"]}`}>
      <div className={classes["seprator"]}></div>
      <h3 className={classes["details__header"]}>Order Details</h3>
      <div className={classes["frame"]}>
        <span
          className={`${classes["details__content"]} ${classes["details__content--ordinary"]}`}
        >
          Sub Total
        </span>
        <span className={classes["details__content"]}>
          ${details.totalprice}
        </span>
      </div>
      <div className={classes["frame"]}>
        <span
          className={`${classes["details__content"]} ${classes["details__content--ordinary"]}`}
        >
          Discount
        </span>
        <span className={classes["details__content"]}>-$0.00</span>
      </div>
      <div className={classes["frame"]}>
        <span
          className={`${classes["details__content"]} ${classes["details__content--ordinary"]}`}
        >
          Delivery Fee
        </span>
        <span className={classes["details__content"]}>-$0.00</span>
      </div>
      <div className={classes["frame"]}>
        <span className={classes["details__content--grand"]}>Grand Total</span>
        <span className={classes["details__content--grand"]}>
          ${details.totalprice}
        </span>
      </div>
    </div>
  );
};

export default OrderDetails;
