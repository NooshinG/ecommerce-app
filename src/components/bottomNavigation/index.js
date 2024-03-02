import Link from "next/link";

import classes from "./index.module.scss";

const BottomNavigation = () => {
  return (
    <div className={classes["navigation_container"]}>
      <Link href="/" className={classes["bottomnav-tab"]}>
        <svg>
          <use href="/icons.svg#home" />
        </svg>
        {/* <span>Home</span> */}
      </Link>
      <Link href="/" className={classes["bottomnav-tab"]}>
        <svg>
          <use href="/icons.svg#categories" />
        </svg>
      </Link>
      <Link href="/profile" className={classes["bottomnav-tab"]}>
        <svg>
          <use href="/icons.svg#profile" />
        </svg>
      </Link>
      <Link href="/cart" className={classes["bottomnav-tab"]}>
        <svg>
          <use href="/icons.svg#bag" />
        </svg>
      </Link>
    </div>
  );
};

export default BottomNavigation;
