import Link from "next/link";

import Card from "../ui/card";
import classes from "./banner.module.scss";

const Banner = () => {
  const bannerItem = {
    url: "/socks.png",
    title: "Happy Socks",
    desc: "Happy socks don't stink. BFF for your feet :)",
  };

  return (
    <div className={classes["p--inline"]}>
      <Link href="/">
        <Card className={classes["banner--wide"]}>
          <img src={bannerItem.url} alt={bannerItem.title} />
          <Card className={classes["banner__text-container"]}>
            <h2 className={classes["text__display--small"]}>
              {bannerItem.title}
            </h2>
            <p className={classes["text__label--medium"]}>{bannerItem.desc}</p>
          </Card>
        </Card>
      </Link>
    </div>
  );
};

export default Banner;
