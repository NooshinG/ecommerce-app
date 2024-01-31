import classes from "../index.module.scss";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className={classes["empty-container"]}>
      <img
        src="/svg/empty-bag.svg"
        alt="empty-bag"
        className={classes["empty-bag"]}
      ></img>
      <h2 className={classes["empty-title"]}>Uh oh ....!</h2>
      <p className={classes["empty-message"]}>
        You haven't added any any items. Start shopping to make your bag bloom
      </p>
      <Link href="/" className={classes["shop-link"]}>
        Continue Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;
