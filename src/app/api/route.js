import { supabase } from "@/lib/initSupabase";

export async function getItems(itemsId) {
  let { data } = await supabase
    .from("product")
    .select("*,category(name)")
    .in("id", itemsId);

  return data;
}
