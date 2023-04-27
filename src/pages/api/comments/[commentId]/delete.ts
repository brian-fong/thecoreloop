import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { ParsedUrlQuery } from "querystring";
// import { Project } from "../../../types";
const prisma = new PrismaClient();

/* endpoints: 
/createNewComment
/updateComment
/deleteComment
/[comment]
/getAllCommmentsByProject_Studio

*/

/* mock  req.body data
 
    mock session data:
    {id: userId}
 */

export default async function deleteCommentContent(
  request: NextApiRequest,
  response: NextApiResponse
) {
  //validation mock id 1
  const validationUserId = 1;
  const commentId = request.query.commentId;

  //   const parsedCommentId =
  //     typeof commentId === "string" ? parseInt(commentId) : undefined;
  //   if (parsedCommentId && !NaN) {
  //     try {
  //       const newComment = await prisma.comment.update({
  //         where: { id: parsedCommentId },
  //         data: {
  //           authorId: "deleted",
  //           content: "[deleted]",
  //         },
  //       });
  //     } catch (error) {
  //       response
  //         .status(404)
  //         .json({ error: "sorry, something went wrong in the database" });
  //     }
  //   }
}
