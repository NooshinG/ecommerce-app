import Card from "../ui/card";
import classes from "./Handpicked.module.scss";

const Handpicked = (props) => {
  const collections = [
    {
      image: "/pink-bag-small.jpg",
      title: "Handbags",
    },
    {
      image: "/pink-bag-small.jpg",
      title: "Handbags",
    },
    {
      image: "/pink-bag-small.jpg",
      title: "Handbags",
    },
    {
      image: "/pink-bag-small.jpg",
      title: "Handbags",
    },
  ].map((item) => (
    <div className={classes["handpick__item"]}>
      <Card>
        <img src={item.image} />
      </Card>
      <p
        className={`${classes["text__title--medium"]} ${classes["handpick__title"]}`}
      >
        {item.title}
      </p>
    </div>
  ));

  return (
    <div
      className={`${classes["handpick"]} ${classes["m--top"]}`}
    >
      <h2 className={classes['text__title--regular']}>Handpicked Collections</h2>
      <div className={classes["handpick__items-container"]}>{collections}</div>
    </div>
  );
};

export default Handpicked;
