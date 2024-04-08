"use client";

import UserProfileSideNavigation from "@/components/userProfileSideNavigation";
import { usePathname } from "next/navigation";
import useWindowWidth from "@/hooks/useWindowWidth";
import { MEDIUM_SCREEN_SIZE } from "@/constants/global";

import classes from "./layout.module.scss";

export default function ProfileLayout({ children }) {
  const pathName = usePathname();
  const { windowSize } = useWindowWidth();

  let content;
  if (windowSize <= MEDIUM_SCREEN_SIZE && pathName == "/profile") {
    content = (
      <section>
        <UserProfileSideNavigation />
      </section>
    );
  } else if (windowSize <= MEDIUM_SCREEN_SIZE) {
    content = <section>{children}</section>;
  } else {
    content = (
      <>
        <section>
          <UserProfileSideNavigation />
        </section>
        <section>{children}</section>
      </>
    );
  }

  return <div className={classes["layout"]}>{content}</div>;
}
