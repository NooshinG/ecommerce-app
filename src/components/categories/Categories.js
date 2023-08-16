import classes from "./Categories.module.scss";

const Categories = () => {
  const ctgList = [
    { Title: "SkinCare", Image: "/skincare.svg" },
    { Title: "SkinCare", Image: "/skincare.svg" },
    { Title: "SkinCare", Image: "/skincare.svg" },
    { Title: "SkinCare", Image: "/skincare.svg" },
    { Title: "SkinCare", Image: "/skincare.svg" },
    { Title: "SkinCare", Image: "/skincare.svg" },
    { Title: "SkinCare", Image: "/skincare.svg" },
    { Title: "SkinCare", Image: "/skincare.svg" },
    { Title: "SkinCare", Image: "/skincare.svg" },
    { Title: "SkinCare", Image: "/skincare.svg" },
    { Title: "SkinCare", Image: "/skincare.svg" },
    { Title: "SkinCare", Image: "/skincare.svg" },
    { Title: "SkinCare", Image: "/skincare.svg" },
  ].map((item) => (
    <div className={classes.category}>
      <img src={item.Image} />
      <h3 className={classes["text__link"]}>{item.Title}</h3>
    </div>
  ));

  return (
    <div className={` ${classes["top-ctg"]}`}>
      <h2 className={classes["text__title--regular"]}>Top Categories</h2>
      <div className={classes["top-ctg__container"]}>{ctgList}</div>
    </div>
  );
};

export default Categories;
