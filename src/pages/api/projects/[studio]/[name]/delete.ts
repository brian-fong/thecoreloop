import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { ParsedUrlQuery } from "querystring";
const prisma = new PrismaClient();

// check for AuthZ
export default async function deleteGame(
  request: NextApiRequest,
  response: NextApiResponse
) {
  interface queryParams {
    studio: string;
    name: string;
  }

  const { studio, name } = request.query as ParsedUrlQuery & queryParams;
  const sanitizedStudio = studio.replace(/-/g, " ");
  const sanitizedName = name.replace(/-/g, " ");
  // commented code reserved for after authZ implementation.
  // const user = await prisma.user.findUnique({
  //   where: {
  //     id: userId,
  //   },
  //   include: { owner: true },
  // });
  // if (user && user.owner.includes === projectId) {
  // const res = await prisma.project.delete({
  //   where: { name_studio: { name: sanitizedName, studio: sanitizedStudio } },
  // });
  // console.log(res);
  // response.status(200).json({ sucess: "sucessfully deleted user", res });
}
// else {
//   response.status(400).json({ error: "user not found" });
// }
// }
