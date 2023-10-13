"use client";

import Link from "next/link";

import { SMALL_SCREEN_SIZE, MEDIUM_SCREEN_SIZE } from "../../constants/global";
import { Slide } from "react-slideshow-image";
import useWindowWidth from "@/hooks/useWindowWidth";

import classes from "./NewArrivals.module.scss";

const NewArrivals = ({ products }) => {
  const { windowSize } = useWindowWidth();

  console.log(products)

  const arrivals = products
    .slice(0, 10)
    .map((item) => ({
      image: item.image,
      title: item.title,
      category: item.category,
      price: `$${item.price}`,
    }))
    .map((item) => (
      <div className={classes["arrivals__container"]}>
        <img className={classes["arrivals__image"]} src={item.image} />
        <h3
          className={`${classes["fs-brand"]} ${classes["fw-600"]} ${classes["text-emphasis-700"]}`}
        >
          {`${item.title.substring(0, 25)} ${
            item.title.substring(0, 25).length <= item.title.length ? "..." : ""
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
    ));

  return (
    <div
      className={`${classes["arrivals"]} ${classes["padding-inline-default"]}`}
    >
      <div className={classes["arrivals__header"]}>
        <h2
          className={`${classes["fs-section-title"]} ${classes["fw-600"]} ${classes["text-emphasis-700"]}`}
        >
          New Arrivals
        </h2>
        <Link
          href="/"
          className={`${classes["fs-section-title"]} ${classes["fw-600"]} `}
        >
          View all {">"}
        </Link>
      </div>
      <Slide
        slidesToScroll={windowSize < SMALL_SCREEN_SIZE ? 2 : 3}
        slidesToShow={
          windowSize < SMALL_SCREEN_SIZE
            ? 2
            : windowSize < MEDIUM_SCREEN_SIZE
            ? 3
            : 4
        }
        arrows={false}
        autoplay={false}
        indicators={true}
      >
        {arrivals}
      </Slide>
    </div>
  );
};

export default NewArrivals;
