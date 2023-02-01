import type { NextApiRequest, NextApiResponse } from "next";
import { createMongoDBClient, getLatestLAG, readLAG } from "../../hooks/mongodb";

// Types
import { LAG } from "../../types";
import { MongoClient } from "mongodb";

export default async function handler(
  request: NextApiRequest, 
  response: NextApiResponse
) {
  console.log(`${request.method} request received at api/`);

  // Respond only to GET requests
  if (request.method == "GET") {
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
      console.log("Fetching latest LAG...");
      const latest_lag_number: number = await getLatestLAG(client);
      lag = await readLAG(client, latest_lag_number);

    } catch (error) {
      console.log(error);
    }

    // Respond with JSON object
    console.log("Responding with JSON object containing latest LAG...");
    response.json(lag);
  }
}

