import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { ParsedUrlQuery } from "querystring";
import { getServerSession } from "next-auth";
import { auth_options } from "../../auth/[...nextauth]";

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
  interface queryParams {
    handle: string;
  }

  /////////////////////// FINISH THIS AND TAKE A BREAK /////////////////////////
  const { handle } = request.query as ParsedUrlQuery & queryParams;
  const session = await getServerSession(request, response, auth_options);

  if (session?.user?.handle === handle) {
    response.status(200).json({ status: "Authorized" });
    // we can further optimize this by knowing where they signed in from.
    // const user = await prisma.user.findUnique({
    //   where: {
    //     handle: handle,
    //   },
    //   include: {
    //     admins: true,
    //   },
    // });
    // await prisma.$disconnect();
  } else {
    try {
      const user = await prisma.user.findUnique({
        where: {
          handle: handle,
        },
        select: {
          createdAt: true,
          hunter: true,
          username: true,
          liked_projects: true,
          admins: true,
        },
      });
      await prisma.$disconnect();
      if (!user) {
        response
          .status(400)
          .json({
            message: "user not found. maybe there is a typo on the user?",
          });
      } else {
        response.status(200).json({ status: "Unauthorized", user });
      }
    } catch (e) {
      response.status(500).json({
        error: e,
        message:
          "something went wrong in the application, report how to replicate this issue",
      });
    }
  }
  response.end();
}
