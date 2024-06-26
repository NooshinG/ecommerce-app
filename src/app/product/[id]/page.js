import { getProductById } from "@/lib/getProducts";
import Image from "next/image";
import classes from "./style.module.scss";
// import AddToCart from "@/components/addToCart/AddToCart";
// import InputNumber from "@/components/ui/InputNumber";
import AddToBag from "./components/AddToBag";

export const revalidate = 60;

const Page = async ({ params }) => {
  const { data: product ,error} = await getProductById(params.id);

  if (error) {
    throw new Error(error?.message);
  }

  if (!product) {
    product.push({
      id: 0,
      title: "",
      description: "",
      id_category: 0,
      image: "",
      create_date: "",
      price: 0,
      qty: 0,
      category: {
        name: "",
      },
    });
  }

  return (
    <div className={` ${classes.grid} `}>
      <div className={`${classes["image-container"]} ${classes["pic-area"]}`}>
        <Image
          src={product[0].image}
          layout="fill"
          objectFit="cover"
          className={classes["image"]}
          alt={product[0].title}
        />
      </div>
      <div className={`${classes.flex} ${classes["info-area"]}`}>
        <p className={classes.ctg}>{product[0].category.name}</p>
        <p className={classes["item-title"]}>{product[0].title}</p>
        <p className={classes.price}>{"$" + product[0].price}</p>
      </div>
      <div
        className={`${classes["btn-area"]} ${classes["add-to-bag__container"]}`}
      >
        <AddToBag
          id={product[0].id}
          qty={product[0].qty}
          price={product[0].price}
        />
      </div>
      <div className={`${classes.flex} ${classes["desc-area"]}`}>
        <div className={classes.separator}></div>
        <h2 className={classes["desc-title"]}>
          <span className={classes["title"]}>Product Description</span>
        </h2>
        <p className={classes.desc}>{product[0].description}</p>
      </div>
    </div>
  );
};

export default Page;
