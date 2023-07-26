import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { ParsedUrlQuery } from "querystring";
import { auth_options } from "../../auth/[...nextauth]";
const prisma = new PrismaClient();

//TODO: will need to work on this more after all of the relations are set
/*pre-reqs:
  1. finish setting up authO                status: FINISHED!!
  2. finish setting up realtional database  status: On going...
  3. finish setting up seeding              status: Not started.
  */
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
  const session = await getServerSession(request, response, auth_options);
  const sessionHandle = session?.user?.handle;
  if (sessionHandle === handle) {
    try {
      console.log("getting to users/delete");
      const user = await prisma.user.findUnique({
        where: {
          handle: sessionHandle,
        },
      });
      if (user) {
        await prisma.user.delete({
          where: { handle: sessionHandle },
        });
        response
          .status(200)
          .json({ status: "Success", message: "sucessfully deleted user" });
        await prisma.$disconnect();
      } else {
        response.status(400).json({ error: "user not found" });
      }
    } catch (err) {
      console.error(err);
      response
        .status(500)
        .json({
          status: "something went wrong in the application",
          error: err,
        });
    }
  } else {
    response.status(403).json({
      status: "failed",
      message: "you are not authorized to delete this account",
    });
  }
}
