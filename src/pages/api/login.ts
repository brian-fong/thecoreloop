// Next.js
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
// NextAuth.js
import { auth_options } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

const prisma = new PrismaClient();

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, auth_options);
  if (!session) {
    res.status(500).json("please log in through twitter or google! :)");
  } else if (session?.user?.handle) {
    // const user = session.user;
    try {
      const user: any = await prisma.user.findUnique({
        where: {
          handle: session.user.handle,
        },
        select: {
          handle: true,
          createdAt: true,
          // profilePicture: true,
          admins: true,
          hunter: true,
          comments_created: true,
          comments_liked: true,
          liked_projects: true,
        },
      });
      await prisma.$disconnect();
      if (user) {
        res
          .status(200)
          .json({ status: "successfully fetched user!", user: user });
      } else {
        const newUser = await prisma.user.create({
          data: {
            handle: session.user.handle,
          },
        });
        await prisma.$disconnect();
        res.status(201).json({ status: "successfully created user!", newUser });
        // res
        //   .status(400)
        //   .json({
        //     status: "user not found",
        //     message: "please prompt user to create user",
        //   });
      }
    } catch (error) {
      console.error(
        "ut-oh, something went wrong in src/login.ts \n here's the error message: ",
        error
      );
      res.status(500).json(error);
    }
    res.end();
  }
}
