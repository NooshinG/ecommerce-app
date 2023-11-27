"use client";

import Image from "next/image";
import classes from "./banner.module.scss";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import useWindowWidth from "@/hooks/useWindowWidth";
import { MEDIUM_SCREEN_SIZE } from "../../constants/global";
import Redirection from "../ui/Redirection";

const Banner = ({ categories }) => {
  const { windowSize } = useWindowWidth();

  const slides = categories.map((item) => ({
    id: item.id,
    url: item.image,
    title: item.name,
    desc: item.description,
  }));

  const slidesMap = slides.map((item) => {
    return (
      <div className={classes["banner__container"]} id={item.id}>
        {/* <img src={item.url} /> */}
        <Image src={item.url} alt={item.title} fill={true} />

        <div className={classes["banner__text"]}>
          <h2
            className={`${classes["fs-primary-banner-title"]} ${classes["fw-800"]}`}
          >
            {item.title}
          </h2>
          <p
            className={`${classes["fs-primary-banner-desc"]} ${classes["fw-500"]}`}
          >
            {`${item.desc.substring(0, 83)} ${
          item.desc.substring(0, 15).trim().length < item.desc.length ? "..." : ""
        }`}
            {/* {item.desc} */}
          </p>
          {windowSize >= MEDIUM_SCREEN_SIZE && (
            <Redirection path={`/category/${item.id}`}>
              <svg>
                <use href="/icons.svg#arrow" />
              </svg>
              See more
            </Redirection>
          )}
        </div>
      </div>
    );
  });

  return (
    <div className={classes["padding-inline-default"]}>
      <Slide indicators={true} arrows={false}>
        {slidesMap}
      </Slide>
    </div>
  );
};

export default Banner;
