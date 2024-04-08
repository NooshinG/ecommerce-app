"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./index.module.scss";

const UserProfileSideNavigation = () => {
  const pathname = usePathname();

  const navigationOptions = [
    { title: "Personal Information", path: "" },
    { title: "Refer and Earn", path: "" },
    { title: "My Orders", path: "orders" },
    { title: "My Wishlist", path: "" },
    { title: "My Reviews", path: "" },
    { title: "My Address Book", path: "" },
    { title: "My Saved Cards", path: "" },
  ];

  return (
    <div className={classes["side-navigation__container"]}>
      {navigationOptions.map((option, index) => {
        return (
          <Link
            href={{
              pathname: "/profile/" + option.path,
            }}
            key={index}
            className={`${classes["option"]}
               ${
                 "/profile/" + option.path == pathname
                   ? classes["option--active"]
                   : ""
               }`}
            replace
          >
            {option.title}
          </Link>
        );
      })}
    </div>
  );
};

export default UserProfileSideNavigation;
