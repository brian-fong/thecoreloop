import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { ParsedUrlQuery } from "querystring";
// import { Project } from "../../../types";
const prisma = new PrismaClient();

/* mock  req.body data
 {userId, commentId?, content, } */

/* endpoints: 
               /createNewComment
               /updateComment
               /deleteComment
               /[comment]
               /getAllCommmentsByProject_Studio
               
               */

/* 
    if (projectId){
    try/catch create a comment for project
    else{
        check if commentId exists, 
        if it does, try/catch connect to that parent comment and create comment
    }
} */
export default async function createCommentForProject(
  request: NextApiRequest,
  response: NextApiResponse
) {
  interface queryParams {
    studio: string;
    name: string;
  }
  const authorId = "getId from session";
  const { studio, name } = request.query as ParsedUrlQuery & queryParams;
  const sanitizedStudio = studio.replace(/-/g, " ");
  const sanitizedName = name.replace(/-/g, " ");
  const project = await prisma.project.findUnique({
    where: {
      name_studio: { name: sanitizedName, studio: sanitizedStudio },
    },
  });
}
