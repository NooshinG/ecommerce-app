"use client";

import useWindowWidth from "@/hooks/useWindowWidth";
import classes from "./header.module.scss";
import Link from "next/link";

const Header = () => {
  const { isSmall } = useWindowWidth();

  const categories = [
    "Handbags",
    "Watches",
    "Skincare",
    "Jewellery",
    "Apparels",
  ].map((item) => (
    <li key={Math.random()} className={classes['fs-400']}>
      <Link href="/">{item}</Link>
    </li>
  ));

  const navCategory = (
    <ul role="list" className={classes["flex__left-items"]}>
      {categories}
    </ul>
  );

  const smallScreenHeader = (
    <>
      <div className={classes["flex__left-items"]}>
        <button>
          <svg>
            <use href="/icons.svg#menu" />
          </svg>
        </button>
        <h2 className={`${classes["fs-550"]} ${classes["fw-600"]}`}>Home</h2>
      </div>
      <div className={classes["flex__right-items"]}>
        <button>
          <svg>
            <use href="/icons.svg#add-to-homescreen" />
          </svg>
        </button>
        <button>
          <svg>
            <use href="/icons.svg#search" />
          </svg>
        </button>
        <button>
          <svg>
            <use href="/icons.svg#notification" />
          </svg>
        </button>
      </div>
    </>
  );

  const wideScreenHeader = (
    <>
      <div className={classes["flex__left-items"]}>
        <Link href="/">
          <svg className={classes["logo"]}>
            <use href="/icons.svg#logo" />
          </svg>
        </Link>
        {navCategory}
      </div>
      <div className={classes["flex__left-items"]}>
        <Link href="/">
          <svg>
            <use href="/icons.svg#search" />
          </svg>
        </Link>
        <Link href="/">
          <svg>
            <use href="/icons.svg#wishlist" />
          </svg>
        </Link>
        <Link href="/">
          <svg>
            <use href="/icons.svg#profile" />
          </svg>
        </Link>
        <Link href="/">
          <svg>
            <use href="/icons.svg#bag" />
          </svg>
        </Link>
      </div>
    </>
  );

  return (
    <div className={`${classes.header} ${classes.flex} `}>
      {isSmall ? smallScreenHeader : wideScreenHeader}
    </div>
  );
};

export default Header;
