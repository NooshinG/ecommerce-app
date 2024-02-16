"use client";

import useWindowWidth from "@/hooks/useWindowWidth";
import classes from "./Categories.module.scss";
import { Slide } from "react-slideshow-image";
import { SMALL_SCREEN_SIZE, MEDIUM_SCREEN_SIZE } from "../../constants/global";

const Categories = ({ categories }) => {
  const { windowSize } = useWindowWidth();

  const ctgList = categories.slice(0,4).map((item) => {
    const imgPath = `/icons.svg#skincare`;
    return (
      <div className={classes["category__container"]} key={item.id}>
        <div className={classes["category__img"]}>
          <svg>
            <use href={imgPath} />
          </svg>
        </div>
        <h3>{item.name}</h3>
      </div>
    );
  });

  return (
    windowSize < MEDIUM_SCREEN_SIZE && (
      <div
        className={` ${classes["categories"]} ${classes["pd-inline"]}`}
      >
        <h2
          className={`${classes["fs-section-title"]} ${classes["title"]}`}
        >
          Top Categories
        </h2>
        <Slide
          slidesToScroll={3}
          slidesToShow={windowSize < SMALL_SCREEN_SIZE ? 4 : 5}
          arrows={false}
          autoplay={false}
          indicators={true}
        >
          {ctgList}
        </Slide>
      </div>
    )
  );
};

export default Categories;
