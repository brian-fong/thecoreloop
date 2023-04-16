import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient()

export default async function handler(
  request: NextApiRequest, 
  response: NextApiResponse,
) {
  try {
    const formData = request.body;
    console.log(formData)
    response.status(200).json("Formdata received!")
  } catch (error) {
    console.log(error);
  };
}
