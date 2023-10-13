import { supabase } from "./initSupabase";

async function getProducts() {
  const { data } = await supabase.from("product").select("*");

  return data;
}

export { getProducts };
