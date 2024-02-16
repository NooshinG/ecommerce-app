import classes from "./Specials.module.scss";

const Specials = () => {
  const specialItems = [
    {
      id: 1,
      Image: "/makeup.jpg",
      Type: "wide",
      Desc: "LIFESTYLE",
      Title: "Makeup Accessories from Top Brands",
    },
    {
      id: 2,
      Image: "/makeup.jpg",
      Type: "medium",
      Desc: "LIFESTYLE",
      Title: "Makeup Accessories from Top Brands",
    },
    {
      id: 3,
      Image: "/makeup.jpg",
      Type: "medium",
      Desc: "LIFESTYLE",
      Title: "Makeup Accessories from Top Brands",
    },
  ].map((item) => (
    <div className={classes["specials__banner"]} data-type={item.Type} key={item.id}>
      <img className={classes["specials__image"]} src={item.Image} />
      <div className={classes["specials__info"]}>
        <h3
          className={`${classes["fs-secondary-banner-small-title"]} ${classes["fw-400"]}`}
        >
          {item.Desc}
        </h3>
        <h2
          className={`${
            item.Type === "medium"
              ? classes["fs-secondary-banner-semi-bold-title"]
              : classes["fs-secondary-banner-bold-title"]
          } ${classes["fw-800"]}`}
        >
          {item.Title}
        </h2>
        <div className={classes["arrow"]}>
          <svg>
            <use href="/icons.svg#arrow" />
          </svg>
        </div>
      </div>
    </div>
  ));

  return (
    <div
      className={`${classes["specials"]} ${classes["padding-inline-default"]}`}
    >
      <h2
        className={`${classes["fs-section-title"]} ${classes["fw-600"]} ${classes["text-emphasis-700"]}`}
      >
        Makeup & Skincare
      </h2>
      <div className={classes["specials__container"]}>{specialItems}</div>
    </div>
  );
};

export default Specials;
