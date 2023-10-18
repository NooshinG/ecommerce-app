"use client";

import useWindowWidth from "@/hooks/useWindowWidth";
import classes from "./header.module.scss";
import Link from "next/link";
import { MEDIUM_SCREEN_SIZE } from "../../constants/global";

const Header = ({ categories }) => {
  const { windowSize } = useWindowWidth();

  const categoriesList = categories.map((item) => (
    <li key={item.id} className={classes["fs-400"]}>
      <Link href={`/category/${item.id}`}>{item.name}</Link>
    </li>
  ));

  const navCategory = (
    <ul role="list" className={classes["flex__left-items"]}>
      {categoriesList}
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
      {windowSize < MEDIUM_SCREEN_SIZE ? smallScreenHeader : wideScreenHeader}
    </div>
  );
};

export default Header;
