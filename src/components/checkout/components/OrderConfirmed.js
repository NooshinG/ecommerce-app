import Link from "next/link";
import classes from "./OrderConfirmed.module.scss";

const OrderConfirmed = (props) => {
  return (
    <div
      className={`${classes["flex--column"]} ${classes["order__container"]}`}
    >
      <div className={classes["img__container"]}>
        <svg>
          <use href="/icons.svg#svg-Cheerio" />
        </svg>
      </div>
      <div
        className={`${classes["flex--column"]} ${classes["description__container"]}`}
      >
        <h2 className={classes.title}>Cheerio!!</h2>
        <p className={classes.description}>
          The order has been placed. Thanks for shopping with us. You’ll soon
          recieve the tracking details
        </p>
      </div>
      <div
        className={`${classes["flex--column"]} ${classes["link__container"]}`}
      >
        <Link href={"/"} className={classes['link--revrse']}>View Order</Link>
        <Link href={"/"} className={classes.link}>Continue Shopping</Link>
      </div>
    </div>
  );
};

export default OrderConfirmed;
