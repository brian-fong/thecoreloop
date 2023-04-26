import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { ParsedUrlQuery } from "querystring";

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
  const { handle } = request.query as ParsedUrlQuery & queryParams;
  try {
    // we can further optimize this by knowing where they signed in from.
    const user = await prisma.user.findUnique({
      where: {
        handle: handle,
      },
      include: {
        admins: true,
      },
    });
    await prisma.$disconnect();
    response.status(200).json(user);
  } catch (error) {
    console.error(
      `unable to find user with the twitterHandle or googlHandle with ${handle}`,
      error
    );
    response.status(500).json({ error: "Unable to retrieve Users" });
  }
}
