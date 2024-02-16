import Link from "next/link";
import classes from "./Brands.module.scss";

const Brands = () => {
  const brands = [
    { Image: "zara", id: 1 },
    { Image: "zara", id: 2 },
    { Image: "zara", id: 3 },
    { Image: "zara", id: 4 },
    { Image: "zara", id: 5 },
    { Image: "zara", id: 6 },
  ].map((item) => (
    <div className={classes["brands__image"]} key={item.id}>
      <svg>
        <use href={`/icons.svg#${item.Image}`} />
      </svg>
    </div>
  ));

  return (
    <div
      className={` ${classes["brands"]} ${classes["padding-inline-default"]}`}
    >
      <div className={classes["brands__header"]}>
        <h2
          className={`${classes["fs-section-title"]} ${classes["fw-600"]} ${classes["text-emphasis-700"]}`}
        >
          Shop by Brands
        </h2>
        <Link
          href="/"
          className={`${classes["fs-section-title"]} ${classes["fw-600"]} `}
        >
          View all {">"}
        </Link>
      </div>
      <div className={classes["brands__container"]}>{brands}</div>
    </div>
  );
};

export default Brands;
