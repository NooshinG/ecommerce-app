"use client";

import MyOrders from "@/components/myOrders";
import { useSearchParams } from "next/navigation";
const Page = () => {
  const activeOption = useSearchParams().get("section");

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
    <>
      {/* <div>
        <h2>
          {navigationOptions.filter(
            (option) => option.replaceAll(" ", "") == activeOption
          )}
        </h2>
      </div>
      {activeOption == navigationOptions[2].replaceAll(" ", "") && <MyOrders />} */}
    </>
  );
};

export default Page;
