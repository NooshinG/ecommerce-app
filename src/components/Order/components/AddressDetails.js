import classes from "./Details.module.scss";

const AddressDetails = ({ Address }) => {
  return (
    <div className={`${classes['Address-details']} ${classes["details__container"]}`}>
      <div className={classes["seprator"]}></div>
      <h3 className={classes["details__header"]}>Address Details</h3>
      <span className={classes["details__content--grand"]}>
        {Address.fullName}
      </span>
      <span
        className={`${classes["details__content"]} ${classes["details__content--ordinary"]}`}
      >
        {Address.street}
      </span>
      <span
        className={`${classes["details__content"]} ${classes["details__content--ordinary"]}`}
      >
        {Address.city}, {Address.state}
      </span>
      <span
        className={`${classes["details__content"]} ${classes["details__content--ordinary"]}`}
      >
        {Address.pin}
      </span>
    </div>
  );
};

export default AddressDetails;
