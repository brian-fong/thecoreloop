import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

type FormData = {
  title: string;
  studio: string;
  thumbnail: string;
  description: string;
  blockchain: string;
  tagline: string;
  isTeam: string;
  fundraising: string;
  links: string;
  genres: string;
  gallery: string;
  stage: string;
};

//I can make this into a case
export default async function createGame(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    console.log("prisma_game reached");
    const formData: FormData = request.body;
    console.log("formdata", formData);
    const newGame = await prisma.game.create({
      data: {
        title: formData.title,
        studio: formData.studio,
        thumbnail: formData.thumbnail,
        description: formData.description,
        blockchain: formData.blockchain,
        tagline: formData.tagline,
        isTeam: true,
        fundraising: formData.fundraising,
        links: formData.links,
        genres: {
          connect: [
            {
              genres: "FPS",
            },
          ],
        },
        gallery: formData.gallery,
        stage: formData.stage,
      },
    });
    console.log("backend newGame Successful", newGame);
    response.status(200).json(newGame);
  } catch (error) {
    console.log(error);
  }
}

//DEV: how many games should we retrieve? and what do we even need this for? haha
/* OPTION: we would use this for maybe showing all of the games that are affiliated
           with something like donations list, or list of developers 
              - It would help the company if a renowed developer is on the team
              - It would help developers with getting scouted by bigger comapnies */
async function getGames(request: NextApiRequest, response: NextApiResponse) {
  if (request.method == "GET") {
    try {
      const games = await prisma.game.findMany();
      response.status(200).json(games);
    } catch (error) {
      console.log(error);
      response.status(500).json({ error: "Unable to retrieve Games" });
    }
  } else {
    response.status(405).json({ error: "Method not alowed" });
  }
}

//Get information about one user
/*usecase : Login: when logging in, retrieve data such as username, profile pic, etc
            Search: when clicked on the profile, it will get more information on the user */
async function getGame(request: NextApiRequest, response: NextApiResponse) {
  const { id } = request.body;
  try {
    const user = await prisma.game.findUnique({
      where: {
        id: id,
      },
    });
    response.status(200).json({ success: "successfully updated the user!" });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Something went wrong!" });
  }
}

/*GAME UPDATE, need to dev this more as we should be able to update almost
    everything but the ownerId as we should have a secure link to update this upon
    request. */
// async function updateGame(request: NextApiRequest, response: NextApiResponse) {
//   const { id, twitterHandle, googleHandle, username } = request.body;
//   try {
//     const updatedUser = await prisma.game.update({
//       where: { id: 1 },
//       data: { username: username },
//     });
//   } catch (error) {
//     response.status(500).json({ error: "unsuccessful in updating user" });
//   }
// }

// check to see if current user is owner of the game
async function deleteGame(request: NextApiRequest, response: NextApiResponse) {
  const { userId, gameId } = request.body;
  const user = await prisma.users.findUnique({
    where: {
      id: userId,
    },
  });
  if (user && user.games.id === gameId) {
    const res = await prisma.game.delete({
      where: { id: gameId },
    });
    console.log(res);
    response.status(200).json({ sucess: "sucessfully deleted user" });
  } else {
    response.status(400).json({ error: "user not found" });
  }
}
