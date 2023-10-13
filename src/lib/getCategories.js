import { supabase } from "./initSupabase";

async function getCategories() {
  const { data } = await supabase.from("category").select("*");

  return data;
}

export {getCategories};
