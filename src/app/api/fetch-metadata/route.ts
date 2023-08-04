import { NextResponse } from "next/server";
import { fetchMeta } from "@/utils/metadata";


export async function POST(request: Request) {
  const { link }: { link: string} = await request.json();
  const parsed: boolean = true;

  try {
    console.log(`Fetching metadata: ${link}...`);
    const result: any = await fetchMeta(link, parsed);
    return NextResponse.json({ ...result });
  } catch (error) {
    throw error;
  }
}
