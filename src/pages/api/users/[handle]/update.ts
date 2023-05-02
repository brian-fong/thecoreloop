import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { ParsedUrlQuery } from "querystring";
import { auth_options } from "../../auth/[...nextauth]";

const prisma = new PrismaClient();

//TODO: Unfinished as we will need more discussion on what data is to be stored in users
//have to find conditionals to see which will be updated.
//maybe deliver payload such as req.data = {updateQueue : [twitter_handle, username], username, twitter_handle, googleHandle}
async function updateUser(request: NextApiRequest, response: NextApiResponse) {
  interface queryParams {
    handle: string;
  }
  const { handle } = request.query as ParsedUrlQuery & queryParams;
  const { userId } = request.body;
  //check if session.user.id === request.body.user.id
  //true => update with request.body prisma.user.update({where:{id: session.user.id}, data:{sanitized userdata}})
  const session = await getServerSession(request, response, auth_options);
  if (handle === userId && handle === session.user.providerAccountId) {
    try {
      const updatedUser = await prisma.user.update({
        where: { handle: handle },
        data: {}, //???
      });
      await prisma.$disconnect();
      response.status(200).json(updateUser);
    } catch (error) {
      response.status(500).json({ error: "unsuccessful in updating user" });
    }
  }
}
