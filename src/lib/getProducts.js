import { supabase } from "./initSupabase";

async function getProducts() {
  const { data } = await supabase.from("product").select(`*,
  category (
    name
  )`);

  return data;
}

async function getProductsOfCategory(categoryId) {
  let { data, error } = await supabase
    .from("product")
    .select("*")
    .eq("id_category", categoryId);

  return { data, error };
}

export { getProducts, getProductsOfCategory };
