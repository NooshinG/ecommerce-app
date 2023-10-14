import Banner from "@/components/banner/Banner";
import Categories from "@/components/categories/Categories";
import NewArrivals from "@/components/newArrivals/NewArrivals";
import Handpick from "@/components/handpick/Handpick";
import Brands from "@/components/brands/Brands";
import Specials from "@/components/specials/Specials";
import Trends from "@/components/trends/Trends";

import { getProducts } from "@/lib/getProducts";
import { getCategories } from "@/lib/getCategories";

export default async function Home() {
  const categories = await getCategories();
  const products = await getProducts();

  return (
    <>
      <Banner categories={categories} />
      <Categories categories={categories} />
      <NewArrivals products={products}/>
      <Handpick />
      <Brands />
      <Specials />
      <Trends />
    </>
  );
}
