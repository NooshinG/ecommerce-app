import classes from "./CartItem.module.scss";

const CartItem = ({ Item, Qty }) => {
  return (
    <div className={`${classes.grid} ${classes["item__container"]}`}>
      <div className={`${classes["img-area"]} ${classes["img__container"]}`}>
        <img src={Item.image} alt={Item.title} className={classes.img} />
      </div>
      <h2 className={`${classes.ctg} ${classes["ctg-area"]}`}>
        {Item.category.name}
      </h2>
      <p className={`${classes.title} ${classes["title-area"]}`}>
        {Item.title}
      </p>
      <p className={`${classes.qty} ${classes["qty-area"]}`}>
        Qty: <span>{Qty}</span>
      </p>
      <p className={`${classes.price} ${classes["price-area"]}`}>
        ${Item.price * Qty}
      </p>
      <div className={`${classes['btn__container']} ${classes["btn-area"]}`}>
        <div className={classes['h-seperator']}></div>
        <button className={classes.btn}>Move To Wishlist</button>
        <div className={classes['v-seperator']}></div>
        <button className={classes.btn}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
