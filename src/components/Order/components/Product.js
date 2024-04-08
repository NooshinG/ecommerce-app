import Image from "next/image";
import classes from "./Product.module.scss";

const Product = ({ Item }) => {
  return (
    <div className={classes["product__container"]}>
      <div className={classes["product__image"]}>
        <Image src={Item.image} alt={Item.title} fill={true} />
      </div>
      <div className={classes["product__info"]}>
        <span className={classes["product__title"]}>{Item.title}</span>
        <br />
        <span className={classes["product__category"]}>{Item.name}</span>
      </div>
      <span className={classes["product__price"]}>{Item.unitprice}</span>
      <span className={classes["product__qty"]}>
        <span>Qty-</span>
        {Item.orderqty}
      </span>
      <span className={classes["product__sub-total"]}>
        {(Item.unitprice * Item.orderqty).toFixed(2)}
      </span>
      <button
        type="button"
        className={`${classes["button-reverse"]} ${classes["product__btn"]}`}
      >
        Add to bag
      </button>
    </div>
  );
};

export default Product;
