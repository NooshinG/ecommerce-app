"use client";

import Link from "next/link";
import Product from "../product";

import { SMALL_SCREEN_SIZE, MEDIUM_SCREEN_SIZE } from "../../constants/global";
import { Slide } from "react-slideshow-image";
import useWindowWidth from "@/hooks/useWindowWidth";

import classes from "./NewArrivals.module.scss";

const NewArrivals = ({ products }) => {
  const { windowSize } = useWindowWidth();

  let slidesToShow = windowSize < SMALL_SCREEN_SIZE
  ? 2
  : windowSize < MEDIUM_SCREEN_SIZE
  ? 3
  : 4

  const arrivals = products
    .slice(0, 10)
    .map((item) => ({
      image: item.image,
      title: item.title,
      category: item.category.name,
      price: `$${item.price}`,
    }))
    .map((item) => <Product item={item} slidesToShow={slidesToShow} key={item.id}/>);

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
          slidesToShow
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
