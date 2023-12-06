import Image from "next/image";
import Link from "next/link";
import classes from "./Product.module.scss";

const Product = ({ item }) => {
  return (
    <Link href={`/product/${item.id}`}>
      <div className={classes["product__container"]}>
        {/* <img className={classes["product__image"]} src={item.image} /> */}
        <Image
          src={item.image}
          alt={item.title}
          layout="fill"
          objectFit="cover"
          className={classes["product__image"]}
        />
        <h3
          className={`${classes["fs-brand"]} ${classes["fw-600"]} ${classes["text-emphasis-700"]}`}
        >
          {`${item.title.substring(0, 25)} ${
            item.title.substring(0, 15).trim().length < item.title.length
              ? "..."
              : ""
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
          {item.price + "$"}
        </h3>
      </div>
    </Link>
  );
};

export default Product;
