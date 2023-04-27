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
  //   const newComment = await prisma.comment.create({
  //     data: {
  //       authorId: comment.authorId,
  //       content: comment.content,
  //       parentId: parentId,
  //     },
  //   });
}
