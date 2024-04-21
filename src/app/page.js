import Banner from "@/components/banner/Banner";
import { getCategories } from "@/lib/getCategories";
// import { useEffect, useState } from "react";
// import Categories from "@/components/categories/Categories";
// import NewArrivals from "@/components/newArrivals/NewArrivals";
// import Handpick from "@/components/handpick/Handpick";
// import Brands from "@/components/brands/Brands";
// import Specials from "@/components/specials/Specials";
// import Trends from "@/components/trends/Trends";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { data: categories, error } = await getCategories();

  if (error) {
    throw new Error(error?.message);
  }

  // throw new Error('test for error message')

  return (
    <>
      <Banner categories={categories} />
      {/* <Categories categories={categories} /> */}
      {/* <NewArrivals products={products}/> */}
      {/* <Handpick />
      <Brands />
      <Specials />
      <Trends /> */}
    </>
  );
}
