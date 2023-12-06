import { supabase } from "@/lib/initSupabase";
import Image from "next/image";
import classes from "./style.module.scss";

export const revalidate = 60;

const Product = async ({ params }) => {
  const { data: product } = await supabase
    .from("product")
    .select("*,category(name)")
    .eq("id", params.id);
  console.log(product);

  return (
    <div className={`${classes["padding-inline-default"]}`}>
      <div className={classes["image-container"]}>
        <Image
          src={product[0].image}
          layout="fill"
          objectFit="cover"
          className={classes["image"]}
        />
      </div>
      <div className={classes.flex}>
        <p>{product[0].category.name}</p>
        <p>{product[0].title}</p>
        <p>{"$" + product[0].price}</p>
      </div>
      <div>
        <h2>Product Description</h2>
        <p className={classes.desc}>{product[0].description}</p>
      </div>
      <div>
        <button className={classes.button}>Add to Bag</button>
      </div>
    </div>
  );
};

export default Product;
