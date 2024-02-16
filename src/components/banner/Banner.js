"use client";

import Link from "next/link";
import Image from "next/image";
import classes from "./banner.module.scss";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import useWindowWidth from "@/hooks/useWindowWidth";
import { MEDIUM_SCREEN_SIZE } from "../../constants/global";

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
      <div className={classes["banner__container"]} id={item.id} key={item.id}>
        <Image src={item.url} alt={item.title} fill={true} />

        <div className={classes["banner__text"]}>
          <h2 className={`${classes["banner__title"]}`}>{item.title}</h2>
          <p className={`${classes["banner__description"]} `}>
            {`${item.desc.substring(0, 83)} ${
              item.desc.substring(0, 15).trim().length < item.desc.length
                ? "..."
                : ""
            }`}
          </p>
          {windowSize >= MEDIUM_SCREEN_SIZE && (
            <Link href={`/category/${item.id}`} className={classes["button"]}>
              <svg>
                <use href="/icons.svg#arrow" />
              </svg>
              See more
            </Link>
          )}
        </div>
      </div>
    );
  });

  return (
    <div className={classes["section"]}>
      <Slide indicators={true} arrows={false}>
        {slidesMap}
      </Slide>
    </div>
  );
};

export default Banner;
