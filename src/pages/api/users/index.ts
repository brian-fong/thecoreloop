import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { ParsedUrlQuery } from "querystring";
import { getProviders, getSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import { auth_options } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";
const prisma = new PrismaClient();

// 1238791290515 twitter handle
// cool@gmail.com google handle

//Get information about one user
/*usecase : Login: when logging in, retrieve data such as username, profile pic, etc
            Search: when clicked on the profile, it will get more information on the user */

export default async function getUser(
  request: NextApiRequest,
  response: NextApiResponse
) {
  //explanation: request.query.fileName
  //where file name is [userHandle]
  /* For more information, please take a look at getServerSession! 

    https://next-auth.js.org/configuration/nextjs#unstable_getserversession */
  const session = await getServerSession(request, response, auth_options);
  console.log("Request received", request.url);
  //   console.log(
  //     "here is the cookie",
  //     JSON.stringify(session, null, 2),
  //     "BODY",
  //     request.body
  //   );
  //   const handle = session.user.twitterId || session.email;
  //   try {
  //     // we can further optimize this by knowing where they signed in from.
  //     const user = await prisma.user.findUnique({
  //       where: {
  //         handle: handle,
  //       },
  //       include: {
  //         admins: true,
  //       },
  //     });
  //     await prisma.$disconnect();
  // if (!user) {
  //   // const newUser = await prisma.user.create({
  //   //     data: {
  //   //       handle: handle,
  //   //     },
  //   //   });
  //   response.status(404).json({
  //     "User Not found": "Would you like us to create a new account?",
  //   });
  // } else {
  //   response
  //     .status(200)
  //     .json({ Success: "user has be successfully logged in" });
  //   //
  // }
  //   } catch (error) {
  //     console.error(
  //       `unable to find user with the twitterHandle or googlHandle with ${handle}`,
  //       error
  //     );
  //     response.status(500).json({ error: "Unable to retrieve Users" });
  //   }
}
