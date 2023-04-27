// Next.js
import { NextApiRequest, NextApiResponse } from "next";

// NextAuth.js
import { auth_options } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  // const session = await getServerSession(req, res, auth_options);
  // console.log("Request received: ", req.url);
  // console.log("Session: ", session);
  res.end();
}
