import { supabase } from "@/lib/initSupabase";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const itemsId = searchParams.get("itemsId");
  const idList = itemsId.split(",");

  let { data, error } = await supabase
    .from("product")
    .select("*,category(name)")
    .in("id", idList);

  return NextResponse.json(data);
}
