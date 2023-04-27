import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

//DEV: how many games should we retrieve? and what do we even need this for? haha
//- decided to retrieve all games and information
/* OPTION: we would use this for maybe showing all of the games that are affiliated
           with something like donations list, or list of developers 
              - It would help the company if a renowed developer is on the team
              - It would help developers with getting scouted by bigger comapnies */
export default async function getAllProjects(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method == "GET") {
    try {
      //include: includes one to many relationships
      //genres: select: picks one or many rows from genres table by targetting the column genre
      const games = await prisma.project.findMany({
        include: {
          genres: {
            select: {
              genre: true,
            },
          },
        },
      });
      response.status(200).json(games);
    } catch (error) {
      console.log(error);
      response.status(500).json({ error: "Unable to retrieve Games" });
    }
  } else {
    response.status(405).json({ error: "Method not alowed" });
  }
}
