"use client";

import Link from "next/link";
import classes from "./Trends.module.scss";
import useWindowWidth from "@/hooks/useWindowWidth";
import { Slide } from "react-slideshow-image";
import { MEDIUM_SCREEN_SIZE } from "../../constants/global";

const Trends = () => {
  const { windowSize } = useWindowWidth();

  const trendItems = [
    {
      id: 1,
      url: "/socks.png",
      title: "Spring Summer Collection",
      desc: "UP TO 20% OFF",
    },
    {
      id: 1,
      url: "/girl.png",
      title: "Spring Summer Collection",
      desc: "UP TO 20% OFF",
    },
  ].map((item) => (
    <Link href="/" key={item.id}>
      <div className={classes["trend__container"]}>
        <img src={item.url} alt={item.title} />
        <div className={classes["trend__info"]}>
          <h2
            className={`${classes["fs-secondary-banner-bold-title"]} ${classes["fw-800"]}`}
          >
            {item.title}
          </h2>
          <p className={`${classes["fs-400"]} ${classes["fw-500"]}`}>
            {item.desc}
          </p>
        </div>
      </div>
    </Link>
  ));

  return (
    windowSize < MEDIUM_SCREEN_SIZE && (
      <div
        className={` ${classes["trends"]} ${classes["padding-inline-default"]}`}
      >
        <h2
          className={`${classes["fs-section-title"]} ${classes["fw-600"]} ${classes["text-emphasis-700"]}`}
        >
          Trending Deals
        </h2>
        <Slide arrows={false} indicators={false}>
          {trendItems}
        </Slide>
      </div>
    )
  );
};

export default Trends;
