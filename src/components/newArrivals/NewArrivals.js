import Link from "next/link";
import Card from "../ui/card";

import classes from "./NewArrivals.module.scss";

const NewArrivals = () => {
  const arrivals = [
    {
      image: "/pink-bag-small.jpg",
      title: "Grande",
      color: "Blossom Pouch",
      price: "$39.49",
    },
    {
      image: "/pink-bag-small.jpg",
      title: "Grande",
      color: "Blossom Pouch",
      price: "$39.49",
    },
    {
      image: "/pink-bag-small.jpg",
      title: "Grande",
      color: "Blossom Pouch",
      price: "$39.49",
    },
    {
      image: "/pink-bag-small.jpg",
      title: "Grande",
      color: "Blossom Pouch",
      price: "$39.49",
    },
    {
        image: "/pink-bag-small.jpg",
        title: "Grande",
        color: "Blossom Pouch",
        price: "$39.49",
      },
      {
        image: "/pink-bag-small.jpg",
        title: "Grande",
        color: "Blossom Pouch",
        price: "$39.49",
      },
  ].map((item) => (
    <div className={classes['arrivals__item']}>
      <Card>
        <img src={item.image} />
      </Card>
      <h3 className={classes["text__label--small"]}>{item.title}</h3>
      <h4 className={classes["text__label--medium"]}>{item.color}</h4>
      <h3 className={classes["text__title--regular"]}>{item.price}</h3>
    </div>
  ));

  return (
    <div className={`${classes["arrivals"]} `}>
      <div className={classes["arrivals__header"]}>
        <h2 className={classes["text__title--regular"]}>New Arrivals</h2>
        <Link href="/" className={classes["text__title--medium"]}>
          View all {">"}
        </Link>
      </div>
      <div className={classes["arrivals__list"]}>{arrivals}</div>
    </div>
  );
};

export default NewArrivals;
