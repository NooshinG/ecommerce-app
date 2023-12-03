import { supabase } from "@/lib/initSupabase";

import Banner from "@/components/banner/Banner";
import Categories from "@/components/categories/Categories";
import NewArrivals from "@/components/newArrivals/NewArrivals";
import Handpick from "@/components/handpick/Handpick";
import Brands from "@/components/brands/Brands";
import Specials from "@/components/specials/Specials";
import Trends from "@/components/trends/Trends";


export default async function Home() {
  const {data : categories} = await supabase.from("category").select("*");

  return (
    <>
      <Banner categories={categories} />
      <Categories categories={categories} />
      {/* <NewArrivals products={products}/> */}
      {/* <Handpick />
      <Brands />
      <Specials />
      <Trends /> */}
    </>
  );
}
