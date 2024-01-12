import OrderSummary from "./OrderSummary";
import classes from "./FullCheckout.module.scss";
import Address from "../address";
import Payment from "../payment";

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
      <Payment />
    </div>
  );
};

export default FullCheckout;
