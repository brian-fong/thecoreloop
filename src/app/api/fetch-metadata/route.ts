import { NextResponse } from "next/server";
import { fetchMeta } from "@/utils/metadata";


export async function POST(request: Request) {
  const { link }: { link: string} = await request.json();
  const parsed: boolean = true;
  console.log(`Fetching metadata: ${link}...`);
  const result: any = await fetchMeta(link, parsed);

  console.log("\nResult: ");
  console.log(JSON.stringify(result, null, 2));
  console.log();

  return NextResponse.json({ ...result });
}
