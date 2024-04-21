import { supabase } from "@/lib/initSupabase";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const userName = searchParams.get("user");

  let { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("username", userName);

  return NextResponse.json(data);
}
