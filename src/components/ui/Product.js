import  classes  from "./Product.module.scss";

const Product = ({ item }) => {
  return (
    <div className={classes["product__container"]}>
      <img className={classes["product__image"]} src={item.image} />
      <h3
        className={`${classes["fs-brand"]} ${classes["fw-600"]} ${classes["text-emphasis-700"]}`}
      >
        {`${item.title.substring(0, 25)} ${
          item.title.substring(0, 15).length <= item.title.length ? "..." : ""
        }`}
      </h3>
      <h4
        className={`${classes["fs-product-name"]} ${classes["fw-500"]} ${classes["text-emphasis-400"]}`}
      >
        {item.category}
      </h4>
      <h3
        className={`${classes["fs-price"]} ${classes["fw-600"]} ${classes["text-emphasis-700"]}`}
      >
        {item.price}
      </h3>
    </div>
  );
};

export default Product;
