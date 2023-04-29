// Next.js
import { NextApiRequest, NextApiResponse } from "next";

// NextAuth.js
import { auth_options } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth/next"

export default async function login(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // const session = await getServerSession(req, res, auth_options);
  // console.log("Session: ", JSON.stringify(session, null, 2));
  
  console.log("Request Body: ", req.body);

  // if req.body == twitter
  //    get Twitter ID
  //    create user

  // else if req.body == google
  //    create user

  res.end();
}

