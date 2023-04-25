//gets information on game and studio

import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { ParsedUrlQuery } from "querystring";

const prisma = new PrismaClient();

//DEV: how many games should we retrieve? and what do we even need this for? haha
//- decided to retrieve all games and information
/* OPTION: we would use this for maybe showing all of the games that are affiliated
           with something like donations list, or list of developers 
              - It would help the company if a renowed developer is on the team
              - It would help developers with getting scouted by bigger comapnies */
export default async function getByStudioAndProject(
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
  console.log("reaching this endpoint", sanitizedName, sanitizedStudio);
  if (request.method == "GET") {
    try {
      const project = await prisma.project.findUnique({
        where: {
          name_studio: { name: sanitizedName, studio: sanitizedStudio },
        },
      });
      console.log(project);
      response.status(200).json(project);
    } catch (error) {
      console.log(error);
      response.status(500).json({ error: "Unable to retrieve Games" });
    }
  } else {
    response.status(405).json({ error: "Method not alowed" });
  }
}
