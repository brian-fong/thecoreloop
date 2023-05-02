import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { ParsedUrlQuery } from "querystring";
import { getProviders, getSession, useSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import { auth_options } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";

//ex: twitterHandle: "Int", google handle: "Email"
/*google signin method returns:
 user: {
    name: 'Andrew Choi',
    email: 'dongandrewchoi@gmail.com',
    image: 'https://lh3.googleusercontent.com/a/AGNmyxYVOrTBZ72bavrqsPfnRLmMS0jCeFaKe2HDmQW9=s96-c',
    provider: 'google'
   },
   expires: '2023-05-29T23:37:33.649Z'
  }
*/
/* twitter signin method returns:
 */

//Get information about one user
/*usecase : Login: when logging in, retrieve data such as username, profile pic, etc
Search: when clicked on the profile, it will get more information on the user */
const prisma = new PrismaClient();

export default async function getUser(
  request: NextApiRequest,
  response: NextApiResponse
) {
  //explanation: request.query.fileName
  //where file name is [userHandle]
  /* For more information, please take a look at getServerSession! 

    https://next-auth.js.org/configuration/nextjs#unstable_getserversession */
  const session = await getServerSession(request, response, auth_options);
  //RETURN USER OBJECT WITH Admins, hunter, comments_created, comments_liked
  //When user tries to manipulate state by saying they own a project,
  //we validate in the backend with the session to see if the user actually owns the comment
  console.log("Request received", session);
  interface user {
    name: string;
    email: string | undefined;
    image: string;
    provider: string;
    providerAccountId: string;
    newinfo?: string;
  }
  const user: user = session.user;
  let handle;
  if (user && user.provider === "twitter") {
    handle = session.user.providerAccountId;
  } else handle = session.user.email;
  try {
    const userFromDB = await prisma.user.findUnique({
      where: {
        handle: handle,
      },
      include: {
        admins: true,
      },
    });
    await prisma.$disconnect();
    if (!userFromDB) {
      console.log(
        "no user was found. please prompt user to create new account"
      );
      const newUser = await prisma.user.create({
        data: {
          handle: handle,
          profilePicture: user.image,
          username: user.name,
        },
      });
      // response.status(404).json({
      //   "User Not found": "Would you like us to create a new account?",
      // });
      console.log(newUser);
      response.status(200).json({
        Success: `new user has been created logged in through ${session.user.provider}`,
        newUser: newUser,
      });
    } else {
      response
        .status(200)
        .json({ Success: "user has been successfully logged in", userFromDB });
      //
    }
    //   } catch (error) {
    //     console.error(
    //       `unable to find user with the twitterHandle or googlHandle with ${handle}`,
    //       error
    //     );
    //     response.status(500).json({ error: "Unable to retrieve Users" });
    //   }
  } catch (error) {
    console.log("something went wrong when trying to connect to prisma", error);
  }
}
