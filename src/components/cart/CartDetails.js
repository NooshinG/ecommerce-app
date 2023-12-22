import classes from "./CartDetails.module.scss";

const CartDetails = ({ totalPrice, discount }) => {
  return (
    <div
      className={`${classes["details__container"]} ${classes["padding-inline-default"]}`}
    >
      <h2>Order Details</h2>
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
  );
};

export default CartDetails;
