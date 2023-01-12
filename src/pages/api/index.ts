// Local Modules
import { createMongoDBClient, readLAG } from "../../hooks/mongodb";

// Next
import type { NextApiRequest, NextApiResponse } from "next";

// Types
import { LAG } from "../../types";
import { MongoClient } from "mongodb";

export default async function handler (request: NextApiRequest, response: NextApiResponse) {
  console.log("Request received at api/");

  // Initialize <LAG> object
  let lag: LAG = {
    heading: "",
    subheading: "",
    message_id: -1,
    number: -1,
    date: "",
    content: [],
  };

  try {
    // Create MongoDB Client
    const uri: string = process.env.MONGODB_URI || "";
    console.log("MongoDB URI: ", uri);
    const client: MongoClient = await createMongoDBClient(uri);

    // Read LAG #130
    lag = await readLAG(client, 130);
  } catch (error) {
    console.log(error);
  }

  // Respond with JSON object
  response.json(lag);
}

