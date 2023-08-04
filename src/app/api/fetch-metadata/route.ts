import { NextResponse } from "next/server";
import fetchMeta from "@/utils/metadata";

export async function POST(request: Request) {
  const { link }: { link: string} = await request.json();
  const parsed: boolean = true;
  const result: any = await fetchMeta(link, parsed);

  return NextResponse.json({ ...result });
}
