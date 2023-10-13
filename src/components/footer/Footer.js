"use client";

import classes from "./Footer.module.scss";

const Footer = ({ categories }) => {
  
  const categoriesList = categories.map((item) => (
    <li key={Math.random()}>{item.name}</li>
  ));

  const policy = [
    "Return",
    "Terms of use",
    "Sitemap",
    "Security",
    "Privacy",
    "EPR Compliance",
  ].map((item) => <li>{item}</li>);

  const aboutUs = ["Contact Us", "About Us", "Careers", "Press"].map((item) => (
    <li>{item}</li>
  ));

  return (
    <div className={classes["footer__container"]}>
      <div className={classes["footer__more-info"]}>
        <h2>More about CORA'L</h2>
        <svg>
          <use href="/icons.svg#chevron-up" />
        </svg>
      </div>
      <div className={`${classes["footer__links"]} ${classes["flex"]}`}>
        <div className={classes["flex__links"]}>
          <h2>Shop by Category</h2>
          <ul className={classes["flex__links"]} role="list">
            {categoriesList}
          </ul>
        </div>
        <div className={classes["flex__links"]}>
          <h2>Policy</h2>
          <ul className={classes["flex__site-info"]} role="list">
            {policy}
          </ul>
        </div>
        <div className={classes["flex__links"]}>
          <h2>About</h2>
          <ul className={classes["flex__site-info"]} role="list">
            {aboutUs}
          </ul>
        </div>
      </div>
      <div className={classes["socials__container"]}>
        <div className={classes["social-icon"]}>
          <svg>
            <use href="/icons.svg#socials" />
          </svg>
        </div>
        <div className={classes["location"]}>
          <svg>
            <use href="/icons.svg#location" />
          </svg>
          <span>United states</span>
        </div>
        <div>
          <p>© 2021 | Cora Leviene All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
