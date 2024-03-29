import classes from "./Handpick.module.scss";

const Handpick = (props) => {
  const collections = [
    { id: 1, image: "/pink-bag-small.jpg", title: "Handbags" },
    { id: 2, image: "/pink-bag-small.jpg", title: "Handbags" },
    { id: 3, image: "/pink-bag-small.jpg", title: "Handbags" },
    { id: 4, image: "/pink-bag-small.jpg", title: "Handbags" },
  ].map((item) => (
    <div className={classes["handpick__item"]} key={item.id}>
      <img className={classes["handpick__image"]} src={item.image} />
      <p className={`${classes["fs-category"]} ${classes["handpick__title"]}`}>
        {item.title}
      </p>
    </div>
  ));

  return (
    <div className={classes["handpick"]}>
      <h2
        className={`${classes["fs-section-title"]} ${classes["fw-600"]} ${classes["text-bright-400"]}`}
      >
        Handpicked Collections
      </h2>
      <div className={classes["handpick__container"]}>{collections}</div>
    </div>
  );
};

export default Handpick;
