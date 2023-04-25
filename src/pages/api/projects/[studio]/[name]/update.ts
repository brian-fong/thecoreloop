import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { ParsedUrlQuery } from "querystring";
const prisma = new PrismaClient();

// TODO: AuthZ check
export default async function updateUser(
  request: NextApiRequest,
  response: NextApiResponse
) {
  interface queryParams {
    studio: string;
    name: string;
  }
  try {
    const { studio, name } = request.query as ParsedUrlQuery & queryParams;
    const data = request.body;
    // const updatedUser = await prisma.users.update({
    //   where: { id: 1 },
    //   data: { username: username },
    // });

    const updatedGame = await prisma.project.update({
      where: { name_studio: { name, studio } },
      data,
    });
    response.status(200).json({ updatedGame });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "unsuccessful in updating user" });
  }
}
