"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import classes from "./index.module.scss";

const UserProfileSideNavigation = () => {
  const activeOption = useSearchParams();

  const navigationOptions = [
    "Personal Information",
    "Refer and Earn",
    "My Orders",
    "My Wishlist",
    "My Reviews",
    "My Address Book",
    "My Saved Cards",
  ];

  return (
    <div className={classes["side-navigation__container"]}>
      {navigationOptions.map((option) => {
        let sectionName = option.replaceAll(" ", "");

        return (
          <Link
            // href={"/profile#" + sectionId}
            href={{
              pathname: "/profile",
              query: { section: sectionName },
            }}
            key={option}
            className={`${classes["option"]} ${
              activeOption.get("section") == sectionName
                ? classes["option--active"]
                : ""
            }`}
            replace
          >
            {option}
          </Link>
        );
      })}
    </div>
  );
};

export default UserProfileSideNavigation;
