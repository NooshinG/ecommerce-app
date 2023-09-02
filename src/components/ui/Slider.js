"use client";
import Link from "next/link";
import classes from "./Slider.module.scss";

const Slider = ({ banners, perPage }) => {
  if (!perPage) {
    perPage = 1;
  }

  const bannerChunks = [];
  for (let i = 0; i < banners.length; i += perPage) {
    bannerChunks.push(banners.slice(i, i + perPage));
  }

  const bannerContainers = bannerChunks.map((item) => {
    const bannerContainerStyle = {
      gridAutoColumns: `${100 / item.length}%`,
    };
    return (
      <div
        id={Math.random()}
        className={classes["slide__tracks"]}
        style={bannerContainerStyle}
      >
        {item}
      </div>
    );
  });

  const dots = [];
  bannerContainers.forEach((element) => {
    dots.push(
      <Link className={classes["dots"]} href={`#${element.props.id}`} />
    );
  });

  return (
    <div
      className={`${classes["slider__container"]} ${classes["padding-inline-default"]}`}
    >
      <div className={classes["flow"]}>{bannerContainers}</div>
      <div className={classes["dots__container"]}>{dots}</div>
    </div>
  );
};

export default Slider;
