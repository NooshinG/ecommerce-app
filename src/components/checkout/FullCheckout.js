import OrderSummary from "./OrderSummary";
import classes from './FullCheckout.module.scss'

const FullCheckout = (props) => {
  return (
    <div className={classes['padding-inline-default']}>
      <h1 className={classes['checkout__title']}>Checkout</h1>
      <OrderSummary cart = {props.cart} />
    </div>
  );
};

export default FullCheckout;
