import { supabase } from "./initSupabase";

// export const revalidate = 10

async function getProducts() {
  const { data } = await supabase.from("product").select(`*,
  category (
    name
  )`);

  return data;
}

async function getProductById(id) {
  let { data, error } = await supabase
    .from("product")
    .select("*,category(name)")
    .eq("id", id);

  return { data, error };
}

async function getProductsOByCategory(categoryId) {
  let { data, error } = await supabase
    .from("product")
    .select("*,category(name)")
    .eq("id_category", categoryId);

  return { data, error };
}

export { getProducts, getProductsOByCategory, getProductById };
