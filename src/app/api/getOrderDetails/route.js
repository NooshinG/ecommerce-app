import { supabase } from "@/lib/initSupabase";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const userName = searchParams.get("user");
  const orderId = searchParams.get("orderId");

  let { data, error } = await supabase.rpc("getorder", {
    ordernumberid: orderId,
    orderusername: userName,
  });

  // if (error) console.error(error);
  // else console.log(data);

  return NextResponse.json(data);
}
