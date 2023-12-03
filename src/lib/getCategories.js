import { supabase } from "./initSupabase";


async function getCategories() {
  const { data }= await supabase.from("category").select("*");
// const data={};
  return data;
}

export {getCategories};
