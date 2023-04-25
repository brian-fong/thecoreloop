import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

type FormData = {
  name: string;
  studio: string;
  thumbnail: string;
  description: string;
  blockchain: string;
  tagline: string;
  isTeam: string;
  fundraising: string;
  links: string;
  genres: string[];
  gallery: string;
  stage: string;
};

//DEV: how many games should we retrieve? and what do we even need this for? haha
/* OPTION: we would use this for maybe showing all of the games that are affiliated
           with something like donations list, or list of developers 
              - It would help the company if a renowed developer is on the team
              - It would help developers with getting scouted by bigger comapnies */
async function getGames(request: NextApiRequest, response: NextApiResponse) {
  if (request.method == "GET") {
    try {
      const games = await prisma.project.findMany();
      response.status(200).json(games);
    } catch (error) {
      console.log(error);
      response.status(500).json({ error: "Unable to retrieve Games" });
    }
  } else {
    response.status(405).json({ error: "Method not alowed" });
  }
}

/*GAME UPDATE, need to dev this more as we should be able to update almost
    everything but the ownerId as we should have a secure link to update this upon
    request. */
// async function updateGame(request: NextApiRequest, response: NextApiResponse) {
//   const { id, twitterHandle, googleHandle, username } = request.body;
//   try {
//     const updatedUser = await prisma.project.update({
//       where: { id: 1 },
//       data: { username: username },
//     });
//   } catch (error) {
//     response.status(500).json({ error: "unsuccessful in updating user" });
//   }
// }
