import OrderSummary from "./OrderSummary";
import classes from "./FullCheckout.module.scss";
import Address from "../address";
import Payment from "../payment";
import SubmitOrder from "./components/SubmitOrder";

// import OrderConfirmed from "./components/OrderConfirmed";

const FullCheckout = (props) => {
  

  const checkoutContent = (
    <div
      className={`${classes["checkout__container"]} ${classes["padding-inline-default"]}`}
    >
      <h1 className={`${classes["title-area"]} ${classes["checkout__title"]}`}>
        Checkout
      </h1>
      <Address />
      <OrderSummary cart={props.cart} />
      <Payment />
      <SubmitOrder confirmOrder={props.setIsOrderSubmited} />
    </div>
  );

  return checkoutContent
};

export default FullCheckout;
