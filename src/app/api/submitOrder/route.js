import { supabase } from "@/lib/initSupabase";
import { NextResponse } from "next/server";

export async function POST(req) {
  const res = await req.json();
  const { username, address, items, totalPrice, totalQuantity } = res;


  const { data, error } = await supabase.rpc("insert_order", {
    uname: username,
    adr: address,
    orders: items,
    price: totalPrice,
    quantity: totalQuantity,
  });

  return NextResponse.json({ data, error });
}
