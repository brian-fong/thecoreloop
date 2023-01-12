// Local Modules
import { createMongoDBClient, readLAG } from "../../hooks/mongodb";

// Next
import type { NextApiRequest, NextApiResponse } from "next";

// Types
import { LAG } from "../../types";
import { MongoClient } from "mongodb";

export default async function handler (request: NextApiRequest, response: NextApiResponse) {
  console.log("Request received at api/");

  // Create MongoDB Client
  const uri: string = process.env.MONGODB_URI!;
  const client: MongoClient = await createMongoDBClient(uri);

  // Read LAG #130
  const lag: LAG = await readLAG(client, 130);

  // Respond with JSON object
  response.json(lag);
}

