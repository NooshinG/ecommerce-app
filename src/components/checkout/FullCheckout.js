import OrderSummary from "./OrderSummary";
import classes from './FullCheckout.module.scss'
import AddressForm from "../address/AddressForm";

const FullCheckout = (props) => {
  return (
    <div className={classes['padding-inline-default']}>
      <h1 className={classes['checkout__title']}>Checkout</h1>
      <OrderSummary cart = {props.cart} />
      <AddressForm />
    </div>
  );
};

export default FullCheckout;
