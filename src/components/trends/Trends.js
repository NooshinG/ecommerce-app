"use client";

import Link from "next/link";

// import useDeviceDetect from "@/hooks/useDeviceDetect";
import Card from "../ui/card";
import classes from "./Trends.module.scss";
import useWindowWidth from "@/hooks/useWindowWidth";

const Trends = () => {
  // const { isMobile } = useDeviceDetect();
  const { isSmall } = useWindowWidth();

  const trendItem = {
    url: "/socks.png",
    title: "Spring Summer Collection",
    desc: "UP TO 20% OFF",
  };

  return (
    isSmall && (
      <div className={classes["trends__container"]}>
        <h2 className={classes["text__title--regular"]}>Trending Deals</h2>
        <Link href="/">
          <Card className={classes["banner--wide"]}>
            <img src={trendItem.url} alt={trendItem.title} />
            <div className={classes["banner__text-container"]}>
              <h2 className={classes["text__display--small"]}>
                {trendItem.title}
              </h2>
              <p className={classes["text__label--medium"]}>{trendItem.desc}</p>
            </div>
          </Card>
        </Link>
      </div>
    )
  );
};

export default Trends;
