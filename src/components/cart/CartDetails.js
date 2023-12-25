import classes from "./CartDetails.module.scss";

const CartDetails = ({ totalPrice, discount ,className }) => {
  return (
    <div
      className={`${classes["details__container"]} ${classes["padding-inline-default"]} ${className}`}
    >
      <h2 className={classes["title"]}>Order Details</h2>
      <div className={classes["flex-column"]}>
        <div>
          <span>Sub Total</span>
          <span>${totalPrice}</span>
        </div>
        <div>
          <span>Discount</span>
          <span>${discount}</span>
        </div>
        <div>
          <span>Delivery Fee</span>
          <span>-$0.00</span>
        </div>
        <div>
          <span>Grand Total</span>
          <span>${totalPrice}</span>
        </div>
      </div>
      <div className={classes["order__container"]}>
        <p>
          <span>Total Bag Amount</span>
          <br />
          <span>{totalPrice}</span>
        </p>
        <button type="button" className={classes["order-btn"]}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CartDetails;
