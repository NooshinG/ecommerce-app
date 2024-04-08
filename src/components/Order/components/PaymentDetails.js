import classes from "./Details.module.scss";

const PaymentDetails = () => {
  return (
    <div
      className={`${classes["Payment-details"]} ${classes["details__container"]}`}
    >
      <div className={classes["seprator"]}></div>
      <h3 className={classes["details__header"]}>Payment Details</h3>
      <span className={classes["details__content--grand"]}>
        Cash on Delivery
      </span>
    </div>
  );
};

export default PaymentDetails;
