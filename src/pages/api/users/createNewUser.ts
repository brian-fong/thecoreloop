import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

type FormData = {
  handle: string;
};

//for testing purposes i will not use the commented out lines.
export default async function createUser(
  request: NextApiRequest,
  response: NextApiResponse
) {
  console.log("received request from authentication");
  try {
    const formData: FormData = request.body;
    const newUser = await prisma.user.create({
      data: {
        handle: formData.handle,
      },
    });
    response.status(200).json(newUser);
  } catch (error) {
    response.status(500).json(error);
  }
}
