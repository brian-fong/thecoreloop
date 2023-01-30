// Local Modules
import { createMongoDBClient, getLatestLAG, readLAG } from "../../hooks/mongodb";

// Next
import type { NextApiRequest, NextApiResponse } from "next";

// Types
import { LAG } from "../../types";
import { MongoClient } from "mongodb";

export default async function handler (_: NextApiRequest, response: NextApiResponse) {
  console.log("Request received at api/");

  // Initialize <LAG> object
  let lag: LAG = {
    heading: "",
    subheading: "",
    message_id: -1,
    number: "",
    date: "",
    special_insights: "",
    content: [],
  };

  try {
    // Create MongoDB Client
    const uri: string = process.env.MONGODB_URI || "";
    const client: MongoClient = await createMongoDBClient(uri);

    // Read latest LAG
    const latest_lag_number: number = await getLatestLAG(client);
    lag = await readLAG(client, latest_lag_number);

  } catch (error) {
    console.log(error);
  }

  // Respond with JSON object
  response.json(lag);
}

