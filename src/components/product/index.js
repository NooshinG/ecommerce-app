import Image from "next/image";
import Link from "next/link";
import classes from "./index.module.scss";

const Product = ({ item }) => {
  // console.log(item);
  return (
    <Link href={`/product/${item.id}`}>
      <div className={classes["product__container"]}>
        
        <Image
          src={item.image}
          alt={item.title}
          layout="fill"
          objectFit="cover"
          className={classes["product__image"]}
        />
        <h3 className={`${classes["product__brand"]}`}>
          {`${item.title.substring(0, 25)} ${
            item.title.substring(0, 15).trim().length < item.title.length
              ? "..."
              : ""
          }`}
        </h3>
        <h4 className={`${classes["product__category"]} `}>{item.category.name}</h4>
        <h3 className={`${classes["product__price"]}`}>{item.price + "$"}</h3>
      </div>
    </Link>
  );
};

export default Product;
