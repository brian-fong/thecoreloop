import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
const prisma = new PrismaClient();

// use this file for search bar
//Get information about projects that match the name
export default async function getGames(
  request: NextApiRequest,
  response: NextApiResponse
) {
  //explanation: request.query.name = search?name=userinput
  let name = request.query.name;
  if (typeof name !== "string") {
    name = "";
  }
  try {
    console.log("this is the name", typeof name);
    // we can further optimize this by knowing where they signed in from.
    const project = await prisma.project.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });
    if (project) {
      response.status(200).json(project);
    } else {
      response.status(404).json({
        unsuccessful:
          "Sorry, we do not have any projects posted with that project name",
      });
    }
  } catch (error) {
    console.error(
      `unable to find user with the twitterHandle or googlHandle with ${name}`,
      error
    );
    response.status(500).json({
      error:
        "Internal service error, if problems persists, please contact the dev team with instructions on how to replicate the problem and they will fix the issue in a short while.",
    });
  }
}
