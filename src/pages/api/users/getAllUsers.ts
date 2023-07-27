import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

//findMany fetches all data, but you can also sort them, or limit how many you get
//DEV: how many users should we retrieve? and what do we even need this for? haha
/* OPTION: we would use this for maybe showing all of the users that are affiliated
           with something like donations list, or list of developers 
              - It would help the company if a renowed developer is on the team
              - It would help developers with getting scouted by bigger comapnies */
export default async function getAllUsers(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const users = await prisma.user.findMany();
    prisma.$disconnect();
    response.status(200).json(users);
  } catch (e) {
    console.error(
      "Ut oh, seems that something went wrong when retrieving all users from the database \n",
      e
    );
    response.status(500).send("Something went wrong");
  }
}
