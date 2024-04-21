import { supabase } from "./initSupabase";

// export const revalidate = 10

export async function getOrdersList(userName) {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("username", userName);

  return { data, error };
}
