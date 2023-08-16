import Card from "../ui/card";
import classes from "./Specials.module.scss";

const Specials = () => {
  const cardTop = (
    <Card className={classes["specials__banner"]}>
      <img src="/makeup.jpg" />
      <div className={classes["specials__content"]}>
        <h3 className={classes["text__label--large"]}>LIFESTYLE</h3>
        <p className={classes["text__body--large"]}>
          Makeup Accessories from Top Brands
        </p>
        <div className={classes["arrow"]}>
          <svg
            width="24"
            height="27"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="icon/arrow">
              <path
                id="Vector 1"
                d="M5 13.95H19M19 13.95L14.5 9M19 13.95L14.5 18.9"
                stroke="#97451F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </div>
      </div>
    </Card>
  );

  const cardBottom = (
    <div className={classes["specials__banner--small"]}>
      {cardTop} {cardTop}
    </div>
  );

  return (
    <div className={classes["specials__container"]}>
      <h2 className={classes["text__title--regular"]}>Makeup & Skincare</h2>
      {cardTop}
      {cardBottom}
    </div>
  );
};

export default Specials;
