// Next.js
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  console.log("Request received: ", req.nextUrl.pathname);
  return NextResponse.next();
}

export const config = {
  matcher: "/discover",
}

