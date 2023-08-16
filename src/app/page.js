

import Banner from "@/components/banner/Banner";
import Brands from "@/components/brands/Brands";
import Categories from "@/components/categories/Categories";
import Handpicked from "@/components/handpicked/Handpicked";
import NewArrivals from "@/components/newArrivals/NewArrivals";
import Specials from "@/components/specials/Specials";
import Trends from "@/components/trends/Trends";
import WebApp from "@/components/webApp/WebApp";
// import styles from "../styles/page.module.scss";

export default function Home() {
  
  return (
    <>
      <Banner />
      <Categories />
      <NewArrivals />
      <Handpicked />
      <Brands />
      <WebApp />
      <Specials />
      <Trends />
      {/* <div
        style={{ height: 50 + "px", background: "red", marginTop: 1 + "rem" }}
      ></div> */}
    </>
  );
}
