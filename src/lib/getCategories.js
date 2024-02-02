import { supabase } from "./initSupabase";

async function getCategories() {
  const { data, error } = await supabase.from("category").select("*");

  return {data,error};
}

export { getCategories };
