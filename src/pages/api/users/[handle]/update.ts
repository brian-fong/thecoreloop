import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { ParsedUrlQuery } from "querystring";

const prisma = new PrismaClient();

//TODO: Unfinished as we will need more discussion on what data is to be stored in users
//have to find conditionals to see which will be updated.
//maybe deliver payload such as req.data = {updateQueue : [twitter_handle, username], username, twitter_handle, googleHandle}
async function updateUser(request: NextApiRequest, response: NextApiResponse) {
  interface queryParams {
    handle: string;
  }
  const { handle } = request.query as ParsedUrlQuery & queryParams;
  const { username } = request.body;
  // try {
  //   const updatedUser = await prisma.user.update({
  //     where: { id: 1 },
  //     data: { username: username },
  //   });
  //   await prisma.$disconnect();
  //   response.status(200).json(updateUser);
  // } catch (error) {
  //   response.status(500).json({ error: "unsuccessful in updating user" });
  // }
}
