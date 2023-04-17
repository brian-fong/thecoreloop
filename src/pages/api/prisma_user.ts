import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient()

type FormData = {
  twitterHandle: string;
  googleHandle: string;
  username: string;
}

export default async function handler(
  request: NextApiRequest, 
  response: NextApiResponse,
) {
  try {
    const formData:FormData = request.body;
    console.log("formdata", formData)
    const newUser = await prisma.users.create({
      data: {
        username: formData.username,
        twitterHandle: formData.twitterHandle,
        googleHandle: formData.googleHandle,
      },
    });
    console.log("backend newUser Successful", newUser)
    response.status(200).json(newUser)
  } catch (error) {
    console.log(error);
  };
}
