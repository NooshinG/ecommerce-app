"use client";
// import Link from "next/link";
import classes from "./banner.module.scss";
import Slider from "../ui/Slider";
import useWindowWidth from "@/hooks/useWindowWidth";
import Button from "../ui/Button";

const Banner = () => {
  const { isSmall } = useWindowWidth();

  const slides = [
    {
      id: 1,
      url: "/girl.png",
      title: "Happy Socks",
      desc: "Happy socks don't stink. BFF for your feet :)",
    },
    {
      id: 2,
      url: "/socks.png",
      title: "Happy Socks",
      desc: "Happy socks don't stink. BFF for your feet :)",
    },
    {
      id: 3,
      url: "/socks.png",
      title: "Happy Socks",
      desc: "Happy socks don't stink. BFF for your feet :)",
    },
  ];

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
        {!isSmall && (
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

  return <Slider perPage={2} banners={slidesMap} />;
};

export default Banner;
