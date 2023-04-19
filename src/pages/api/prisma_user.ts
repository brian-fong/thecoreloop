import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

type FormData = {
  twitterHandle: string;
  googleHandle: string;
  username: string;
};

//I can make this into a case
export default async function createUser(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const formData: FormData = request.body;
    console.log("formdata", formData);
    const newUser = await prisma.users.create({
      data: {
        username: formData.username,
        twitterHandle: formData.twitterHandle,
        googleHandle: formData.googleHandle,
      },
    });
    console.log("backend newUser Successful", newUser);
    response.status(200).json(newUser);
  } catch (error) {
    console.log(error);
  }
}

//DEV: how many users should we retrieve? and what do we even need this for? haha
/* OPTION: we would use this for maybe showing all of the users that are affiliated
           with something like donations list, or list of developers 
              - It would help the company if a renowed developer is on the team
              - It would help developers with getting scouted by bigger comapnies */
async function getUsers(request: NextApiRequest, response: NextApiResponse) {
  if (request.method == "GET") {
    try {
      const users = await prisma.users.findMany();
      response.status(200).json(users);
    } catch (error) {
      console.log(error);
      response.status(500).json({ error: "Unable to retrieve Users" });
    }
  } else {
    response.status(405).json({ error: "Method not alowed" });
  }
}

//Get information about one user
/*usecase : Login: when logging in, retrieve data such as username, profile pic, etc
            Search: when clicked on the profile, it will get more information on the user */
async function getUser(request: NextApiRequest, response: NextApiResponse) {
  const { id } = request.body;
  try {
    const user = await prisma.users.findUnique({
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

//have to find conditionals to see which will be updated.
//maybe deliver payload such as req.data = {updateQueue : [twitter_handle, username], username, twitter_handle, googleHandle}
async function updateUser(request: NextApiRequest, response: NextApiResponse) {
  const { id, twitterHandle, googleHandle, username } = request.body;
  try {
    const updatedUser = await prisma.users.update({
      where: { id: 1 },
      data: { username: username },
    });
  } catch (error) {
    response.status(500).json({ error: "unsuccessful in updating user" });
  }
}

// authorization first and then execute this line. :')
async function deleteUser(request: NextApiRequest, response: NextApiResponse) {
  const { id, twitterHandle, googleHandle, username } = request.body;
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  if (user) {
    const res = await prisma.users.delete({
      where: { id: id },
    });
    response.status(200).json({ sucess: "sucessfully deleted user" });
  } else {
    response.status(400).json({ error: "user not found" });
  }
}
