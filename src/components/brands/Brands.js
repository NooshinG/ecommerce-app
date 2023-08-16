import Link from "next/link";
import classes from "./Brands.module.scss";
import Card from "../ui/card";

const Brands = () => {
  const brands = [
    { image: "/zara.svg" },
    { image: "/zara.svg" },
    { image: "/zara.svg" },
    { image: "/zara.svg" },
    { image: "/zara.svg" },
    { image: "/zara.svg" },
  ].map((item) => (
    <Card>
      <img src={item.image} />
    </Card>
  ));

  return (
    <div className={classes["brands"]}>
      <div className={classes["brands__header"]}>
        <h2 className={classes["text__title--regular"]}>Shop by Brands</h2>
        <Link href="/" className={classes["text__title--medium"]}>
          View all {">"}
        </Link>
      </div>
      <div className={classes["brands__container"]}>{brands}</div>
    </div>
  );
};

export default Brands;
