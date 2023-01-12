import type { NextApiRequest, NextApiResponse } from "next";

export default function handler (request: NextApiRequest, response: NextApiResponse) {
  console.log("Request received at api/");
  response.status(200).json({
    message: "Hello from api/",
  });
}

