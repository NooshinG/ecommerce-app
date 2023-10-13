"use client";
// import Link from "next/link";
import classes from "./banner.module.scss";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import useWindowWidth from "@/hooks/useWindowWidth";
import Button from "../ui/Button";
import { MEDIUM_SCREEN_SIZE } from "../../constants/global";

const Banner = ({ categories }) => {
  const { windowSize } = useWindowWidth();

  const slides = categories.map((item) => ({
    id: item.id,
    url: item.image,
    title: item.name,
    desc: item.description,
  }));

  const slidesMap = slides.map((item) => (
    <div className={classes["banner__container"]} id={item.id}>
      <img src={item.url} />
      <div className={classes["banner__text"]}>
        <h2
          className={`${classes["fs-primary-banner-title"]} ${classes["fw-800"]}`}
        >
          {item.title}
        </h2>
        <p
          className={`${classes["fs-primary-banner-desc"]} ${classes["fw-500"]}`}
        >
          {item.desc}
        </p>
        {windowSize >= MEDIUM_SCREEN_SIZE && (
          <Button>
            <svg>
              <use href="/icons.svg#arrow" />
            </svg>
            See more
          </Button>
        )}
      </div>
    </div>
  ));

  return (
    <div className={classes["padding-inline-default"]}>
      <Slide indicators={true} arrows={false}>
        {slidesMap}
      </Slide>
    </div>
  );
};

export default Banner;
