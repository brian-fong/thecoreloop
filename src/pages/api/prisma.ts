import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient()

export default async function handler(
  request: NextApiRequest, 
  response: NextApiResponse,
) {
  try {
    const games = await prisma.game.findMany();
    console.log(JSON.stringify(games));

    response.json(games);
  } catch (error) {
    console.log(error);
  };
}
