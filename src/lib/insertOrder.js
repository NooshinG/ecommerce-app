import { supabase } from "./initSupabase";

export default async function insertOrder(username, address, orderItems) {
  const { data, error } = await supabase
    .from("orders")
    .insert([{ username: username, address: address, items: orderItems }])
    .select("*");

  return { data, error };
}
