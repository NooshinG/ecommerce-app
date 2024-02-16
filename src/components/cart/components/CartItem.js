import { useDispatch } from "react-redux";
import { remove, addToCart } from "@/app/redux/cartSlice";
import classes from "./CartItem.module.scss";
import DropdownNumber from "@/components/ui/DropdownNumber";

const CartItem = ({ Item, Qty }) => {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(remove({ id: Item.id }));
  };

  const updateQuantityHandler = (value) => {
    dispatch(addToCart({ id: Item.id, qty: value }));
  };

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
      <div className={`${classes.qty} ${classes["qty-area"]}`}>
        <span>{Qty}</span>
        <div className={classes["quantity-selection"]}>
          <DropdownNumber
            defaultValue={Qty}
            maxValue={Item.qty}
            parentAction={updateQuantityHandler}
            key={Item.id}
          />
        </div>
      </div>
      <p className={`${classes.price} ${classes["price-area"]}`}>
        ${Item.price}
      </p>
      <p className={`${classes.subtotal} ${classes["subtotal-area"]}`}>
        ${(Item.price * Qty).toFixed(2)}
      </p>
      <div className={`${classes["btn__container"]} ${classes["btn-area"]}`}>
        <div className={classes["h-seperator"]}></div>
        <button type="button" className={classes.btn}>
          Move To Wishlist
        </button>
        <div className={classes["v-seperator"]}></div>
        <button
          type="button"
          className={classes.btn}
          onClick={removeItemHandler}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
