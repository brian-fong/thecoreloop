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
export default async function createChildComment(
  request: NextApiRequest,
  response: NextApiResponse
) {
  interface comment {
    authorId?: string;
    content: string;
    parentId: number;
  }

  const comment: comment = request.body;
  const { parentId } = request.query as ParsedUrlQuery & comment;
  const newComment = await prisma.comment.create({
    data: {
      authorId: comment.authorId,
      content: comment.content,
      parentId: parentId,
    },
  });
}
