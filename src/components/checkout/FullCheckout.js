import OrderSummary from "./OrderSummary";
import classes from "./FullCheckout.module.scss";
import Address from "../address";

const FullCheckout = (props) => {
  return (
    <div
      className={`${classes["checkout__container"]} ${classes["padding-inline-default"]}`}
    >
      <h1 className={`${classes["title-area"]} ${classes["checkout__title"]}`}>
        Checkout
      </h1>
      <Address />
      <OrderSummary cart={props.cart} />
    </div>
  );
};

export default FullCheckout;
