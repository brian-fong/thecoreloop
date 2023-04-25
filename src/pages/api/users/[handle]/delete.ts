import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { ParsedUrlQuery } from "querystring";
const prisma = new PrismaClient();

//TODO: will need to work on this more after all of the relations are set
/*pre-reqs:
  1. finish setting up authO
  2. finish setting up realtional database
  3. finish setting up seeding*/
// Authorization to delete
// 1. check if the user is an Admin from the cookies
// 2. check if the profile is owned by user in the cookies
export default async function deleteUser(
  request: NextApiRequest,
  response: NextApiResponse
) {
  interface queryParams {
    handle: string;
  }
  const { handle } = request.query as ParsedUrlQuery & queryParams;
  try {
    console.log("getting to users/delete");
    const { userHandle } = request.body;
    const user = await prisma.user.findUnique({
      where: {
        handle: userHandle,
      },
    });
    if (user) {
      const res = await prisma.user.delete({
        where: { id: user.id },
      });
      response.status(200).json({ sucess: "sucessfully deleted user" });
      await prisma.$disconnect();
      return;
    } else {
      response.status(400).json({ error: "user not found" });
    }
  } catch (err) {
    console.error(err);
    response.status(500).json({ error: err });
  }
}
