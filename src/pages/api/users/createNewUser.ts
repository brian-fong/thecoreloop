import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { auth_options } from "../auth/[...nextauth]";

const prisma = new PrismaClient();

type SessionData = {
  handle: string;
};

//will be called if user already exists in src/pages/api/login.ts
export default async function createUser(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const session = await getServerSession(request, response, auth_options);
  let handle;
  if (session?.user?.provider && session?.user?.providerAccountId) {
    handle =
      session.user.provider === "twitter"
        ? session.user.providerAccountId
        : session.user.email;
  }
  console.log("received request from authentication");
  if (!handle) {
    return response.status(400).json("no provider found");
  } else {
    try {
      const newUser = await prisma.user.create({
        data: {
          handle: handle,
        },
      });
      response.status(201).json(newUser);
    } catch (error) {
      response.status(500).json(error);
    }
  }
}
